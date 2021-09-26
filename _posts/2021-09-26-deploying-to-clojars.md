---
layout: post
title:  "Deploying to Clojars"
date:   2021-09-26
categories: deployment, clojure
---
As one of the maintainers of the various repos over at [clj-commons](https://github.com/clj-commons), it's often on me to deploy new versions of the libraries to [clojars](https://www.clojars.org). This used to be a pain, as deploying libs tended to include a bunch of manual steps. Also, even though almost nobody cares, I tend to sign the artefacts, which meant (since gpg has a rather unique user experience) that I only had one computer I could do the deployment from. Also, as time has progressed, my computers don't neccesarily have jdk-8 installed, but it's nice to build and test the libs against that version, since it's what Clojure runs on. So the pain-points were many, but there is also something very unhygenic about this process. It's manual, it's hard for other maintainers to deploy libs, and most of all, the artefacts were built on _my compouter_, in a somewhat unrepeatable process. Also, it meant that each maintainer who wanted to deploy to Clojars needed to be a member of the clj-commons clojars org, and had set up gpg for signing artefacts. Also, I tended to forget to tag releases.

# An ideal build process
What I wanted to achieve was to remove all of my personal pain points, I wanted to make it easy for other maintainters to deploy to Clojars, and I wanted to make sure we had repeatable and transparent builds.

To me this would be a process that did the following:
1. Ensure that the artefact was built with the correct jdk
2. Ensure that what was built on Circle was what was deployed to Clojars
3. Ensure that every release was tagged appropriatly
4. Ensure that every release was signed
5. Ensure that a release could be done from wherever on whatever machine

Ideally, what would happen is that when you're ready to do a release, you do _something_, and Circle takes care of the rest.

What I ended up with was that _something_ was pushing a tag with a specific format, the format being `Release-.*`

# The implementation
First of all, I've only done this for leiningen projects, as most of the projects in clj-commons are build using lein.

## Making project-version runtime configurable
So, the first thing that was needed was to ensure that we could force lein to build a specific version _without_ having to make changes to the `project.clj`. Normally, one specifies the version of a project directly in the `project.clj` as so:

```clojure
(defproject manifold "0.2.0-SNAPSHOT"
  :description "A compatibility layer for event-driven abstractions")
```
But, since this is actually code that gets run, we can do this:

```clojure
(defproject clj-commons/clj-yaml (or (System/getenv "PROJECT_VERSION") "0.7.3
   :description "YAML encoding and decoding for Clojure using SnakeYAML")
```
So now, we're able to specify the version of the project by specifying the `PROJECT_VERSION` environment variable.
Once we have this in place, the rest is basically just tweaking our [CircleCI](https://circleci.com) config to make this work

## The CircleCI setup
I need to start off with how much I dislike YAML. I _really, really_ dislike it, and I've spent too much time trying to get my whitespace correct, but exactly not enough time to bother installing a YAML-mode for Emacs. I can't even begin to understand why someone would come up with YAML and believe it was a good idea. 

Anyways. CircleCI has a concept of workflows, which has jobs, and the jobs can have filters. Now, what I want to have is that we only deploy when there is a tag which matches `Release-.*`, which is done like so:
```yaml
workflows:
  build-deploy:
    jobs:
      - build:
          filters:
            tags:
              only: /.*/

      - deploy:
          requires:
            - build
          filters:
            tags:
              only: /Release-.*/
          context:
            - CLOJARS_DEPLOY
```
Three things to notice:
1. I think, but could be wrong, that we need to have filters on all jobs if we have it on one job. and so for our `build` job, we have a very permissive filter
2. On the `deploy` job, we have a filter which says that it's only to be run when we have a tag that matches our release-tag. 
3. The [`context`](https://circleci.com/docs/2.0/contexts/) This is where we store the secrets we need to be able to deploy to Clojars.

Now for the actual deploy-job, I won't go through the whole [thing](https://github.com/clj-commons/clj-yaml/blob/master/.circleci/config.yml), but I'll run through the most important bits. I have a [babashka](https://github.com/babashka/babashka) script over [here](https://github.com/clj-commons/infra/blob/main/deployment/circle-maybe-deploy.bb) which takes a tag on the form `Release-1.2.4` and simply strips it to `1.2.3` and injects that into the environment under `PROJECT_VERSION` before running a command.

We see this being run [here](https://github.com/clj-commons/clj-yaml/blob/master/.circleci/config.yml#L127) with some GPG stuff removed for clarity:
```YAML
      - run:
         name: Deploy
         command: ./circle-maybe-deploy.bb lein deploy clojars
```

## Authentication with clojars
So the final thing that we need to do is to ensure that we're authorized to deploy to Clojars, and that's where the `CLOJARS_CONTEXT` comes in. In that context we have a `CLOJARS_USERNAME` and a `CLOJARS_PASSWORD` (amongst other things)

![Screenshot 2021-09-26 at 12 03 45](https://user-images.githubusercontent.com/5894926/134803309-2a1c6280-c9b3-468b-87ee-387ade05ed9d.png)

Now we need to ensure that `lein` will accept those, and we do that by adding some stuff to the `deploy-repositories` [key](https://github.com/clj-commons/clj-yaml/blob/master/project.clj#L9):
```clj
  :deploy-repositories [["clojars" {:url "https://repo.clojars.org"
                                    :username :env/clojars_username
                                    :password :env/clojars_password}]] 
```
In the linked code, I have `sign-releases true` but that needs to be discussed in another post.

# Final words
With the above setup, anyone who is allowed to push to `master` on the project and is member of the clj-commons organization (only org-members have access to the `CONTEXT`) is also allowed to deploy a new version to clojars. The artefact will be built on CircleCI, and we have full transparency of who did it, when they did it and on what commit it was done. Further more, we ensure that we always have a release-commit, which is important for some people, especially maintainers of linux-distros which use the [tar-balls](https://github.com/clj-commons/clj-yaml/releases) that Github create automagically for us.





