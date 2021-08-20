---
layout: post
title:  "Dependency injection, perhaps? Part 1"
date:   2021-08-20
categories: Design
---
This is, what I hope, the first of a series of blog posts where I explore the design of the [Ardoq](https://www.ardoq.com) in terms of its use of [Stuart Sierras Component System](https://github.com/stuartsierra/component). It's important to me to stress that this series is not a critique of Stuarts fine library, nor is it going to propose some alternative, as there are several, like [Mount](https://github.com/tolitius/mount) and [Integrant](https://github.com/weavejester/integrant). It is simply a series where I explore how our codebase has evolved over time, and where I might see it going.

# What is Component
From the github repo, we can read that
> 'Component' is a tiny Clojure framework for managing the lifecycle and dependencies of software components which have runtime state.

To me, the keywords here are lifecycle, dependencies, and runtime state. So a Component is a thing that has runtime state, an example of this would be a database-connection, it has a need for lifecycle managament, ie it needs to be started (eg open a connection to the database), and it needs to be stopped (eg close the connection to the database. It might also be dependent on other services being started, so Component makes sure your components are started in the correct order, and also stopped in the correct order. All this is good.

# Component at Ardoq
So when I started working at Ardoq, our codebase comprised 43 such components in a codebase of some 20KLOC. So in a codebase of 20KLOC, we had 43 components which were carrying runtime state, were in need of lifecycle management, and had intricate dependency management? Looking this doesn't quite make sense. Today, we're at 116 Components at 58KLOC. One could argue that that's a bit too much.

# Another use of Component
There is another problem that could be solved with Component, and I think this is a clue to why we have so many of them. It's hinted at above, but let's spell it out. It's about dependencies, and more specifically, about hiding implementation details and building bigger building blocs. So, let's look at some code:

```clj
(defn handle-some-request [{:keys [system params] :as req}] 
   (some-service/do-whatever system params))
```

The above code is great, and teribble, both because we don't know what sideffects `some-service/do-whatever` is going to execute. It's good, because we don't have to enumerate all (and thus know, and remember to add a new one when `do-whatever` needs to do more) of the services `do-whatever` need to have available to do it's job. One could even imagine that `do-whatever` called into other services which then called into yet other services. It's also terrible, because `do-whatever` can do everything our system has to offer, so it's hard to reason about our code. Would the above code send emails? Possibly. Launch missiles? Also possible.

Basically what this offers us is some sort of encapsulation. When Ardoq was initially developed, this was more or less how the code looked, but at the time of my arrival, the code base had changed into this pattern:

```clj
(defn handle-some-request [{:keys [system params] :as req}] 
   (some-service/do-whatever (:some-service system) params))
```

Which meant that `do-whatever` only had access to a subset of the system, so it would be easier to reason about what `do-whatever` was doing, or at least what it was not capable of doing. In a way this is nice, because, we now have restricted what `do-whatever` can do, while we still don't have to know or care about (at this call site)  what it or its dependencies need to have available to them in order to to their job. Encapsulation is achieved.

# The problem
The problem with this approach, however, is that very few of our (at this time of writing 116 Components) actually hold any state of their own. They only hold their dependencies (which I guess you could argue is state). So rather than using Component as a state management tool, we use it as an encapsulalation tool, and I think that is problematic.

# Up next
In the next post in this series, I'll make a small digression, and write about the use of configurations in a web app, ie, the difference between config and constants.
