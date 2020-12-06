---
layout: post
title:  "On oauth and design"
date:   2020-12-06
categories: Security,Design
---
When you write applications, and in my situation, multitenant SaaS applications, both authentication and authorization are important parts of the system.
Authentication, which will carry the story in this blog post, is about establishing who someone is, authorization is about what that person is allowed to do.
We'll leave authorization behind for now, and focus on authentication in a multitenant SaaS world. 

On the web you have quite a few protocols for doing authentication, for this blog post, I'll focus on [OAuth](https://oauth.net/2/). It's important to note
that I'm not at all an expert on this subject, so expect imprecision here.

Because, what I really want to talk about is software design. I've been through a rather long and involved refactor of our oauth code, and I would like to share
my findings, because they highlight some things that are easy to do when designing software, but which are not always so smart.

Back to OAuth. The protocol is basically that when a user wants to log in to your application, you redirect the users browser over to an identity provider (IDP), such as
google, facebook, or github. The IDP handles the username/password challenge, and when the user has identified itself over at the IDP, the IDP instructs the users browser to 
call you back with a token, which your application then can use to call the IDP to get more information about the user. This is called an OAuth workflow.

So, as an OO programmer, you know what to do now:

```java

public interface OauthWorkflow {

}
```

Yay, without really understanding anything, we've created our first abstraction. Now, you could argue that this doesn't do anything, and that's correct.
I guess we'd need to be able to `run` the workflow, and to be skipping ahead, I happen to know that we need a `HttpRequest` to run the workflow:

```java
public interface OauthWorkflow {

    OAuthResult run(HttpServletRequest request);
}
```

So, let's concretize this for a moment, let's imagine we have an IDP, Foo, which we want to use as our IDP:

```java
public class FooIDP implements OauthWorkflow {

   OAuthResult run(HttpServletRequest request) {
   // user wants to log in, we redirect to the IDP for auth
   if (request.getUri().equals("/api/oauth/foo/login")) { 
      return new RedirectToFooIDPForAuthentication(); // this obviously implements OAuthResult and redirects the browser to the IDP for auth
   }
   // user has successfully authenticated with the IDP, the IDP calls us back with a token
   if (request.getUri().equals("/api/oauth/foo/callback")) {
      UserInfo userInfo = getUserInfo(request.getParameter("code")); // we'll leave this as an excercise for the reader
      return new Authenticated(userInfo); // Authenticated also implements OAuthResult
   }
   return null; // this request was not for us.
}
```

There is also some config that needs to be handled, which in `FooIDP` can be hard coded, but, if we pass it in as a config object, we can make a totally
generic IDP implementation:

```java
public class GenericIDP implements OauthWorkflow {

    public GenericIDP(Config config) {
       this.config = config;
    }
    
   OAuthResult run(HttpServletRequest request) {
   // user wants to log in, we redirect to the IDP for auth
   if (request.getUri().equals(config.getLoginURL())) {
      return new RedirectToGenericIDPForAuthentication(config); // this obviously implements OAuthResult and redirects the browser to the IDP for auth
   }
   // user has successfully authenticated with the IDP, the IDP calls us back with a token
   if (request.getUri().equals(config.getCallbackURL())) {
      UserInfo userInfo = getUserInfo(config, request.getParameter("code")); // we'll leave this as an excercise for the reader
      return new Authenticated(userInfo); // Authenticated also implements OAuthResult
   }
   return null; // this request was not for us.
}
```

And this looks really nice, implemented in Clojure, it would be something like:
```clojure
(defn workflow [config]
  (fn [request]
    (cond (= (:uri request) (:login-url config))
          (redirect-to-idp config)
          
          (= (:uri request) (:call-back-url config))
          (authenticated-user (user-info config (get-in request [:params :code])))

          :else 
          nil)))
```

So, now that we've set the stage, let's see what happens when we bring this into the real world, where we live.
Of course, there isn't only one IDP, and even though OAuth is a standard, each IDP might interpret the standard in different ways.
One way the IDPs tend to differ is how we get information about the user. Some send all the information we need through the JWT-token, others require us to call
them back at a given url. So how do we shoehorn this into our neat little workflow abstraction? We need to do some polymorphism. 
Clojure has several mechanisms for polymorphism. The simplest one, is the one that exists in all programming languages, basically a switch statement, like `cond` or `case`

```clojure
(defn user-info [config jwt-token]
  (case (:user-lookup-type config)
    :id-token-payload (parse-id-token jwt-token)
    :callback-url (call-back config jwt-token)))
```
You can also do this with protocols and multimethods, which are nice and handy tools if you know them. But as an inexperienced Clojure programmer, you might just reach for
a way which mimicks what you'd do in object-oriented code, you can pass functions in the config map!

```clojure
(def foo-idp-config {...
                     :user-lookup-fn (fn [config jwt-token] ...)
                     ...})
```
and now, user-lookup can be done like this

```clojure
(defn user-lookup [config jwt-token]
  ((:user-lookup-fn config) config jwt-token))
```
Now, over time, you might find that it's not just the `user-lookup` that varies between IDPs, but a host of other things as well, so basically you end up with something like:

```clojure
(defn make-config [initial-config]
  (merge initial-config
         {:user-lookup-fn ...
          :authorization-url-fn ...
          :token-url-fn ...})
```
So suddenly, your code is littered with stuff like:
```clojure
  ((:some-key config) param1 param2 param3)
```
And you have to remember which keys exists and which parameters that fn expects. Trust me, it becomes nasty quite fast. But the upside is that you can write code like:

```clojure
(run-workflows [(workflow (make-config github-config)) (workflow (make-config google-config)) (workflow (make-config okta-config))]
```
But the crux here is that, you don't really need the polymorphism, because, you know when you create the workflow what exactly what kind of behaviour you'll need from the workflow
So the above code should look like:

```clojure
(run-workflows [(github-workflow github-config) (google-workflow google-config) (okta-workflow octa-config)])
```
And, if you've broken up your code into small composable pieces, you'll quickly see that the code duplication is not a problem, and that it's so much easier to read the code:
```clojure
(defn github-workflow [config]
  (fn [request]
    (cond (= (:uri request) (:login-url config))
          (redirect-to-idp config)
          
          (= (:uri request) (:call-back-url config))
          (authenticated-user (user-from-id-token config (get-in request [:params :code])))

          :else 
          nil)))
```

```clojure
(defn google-workflow [config]
  (fn [request]
    (cond (= (:uri request) (:login-url config))
          (redirect-to-idp config)
          
          (= (:uri request) (:call-back-url config))
          (authenticated-user (user-from-callback config (get-in request [:params :code])))

          :else 
          nil)))
```
In our case, there was a bit more functionality that was different between our supported IDPs, but the main point is still valid I think:
When the "concretization" of an operation is known at compiletime, don't use polymorphism, just make sure you have small enough building blocks so you can easily compose
the functionality you need.


                     
   
