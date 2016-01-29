---
layout: post
title: Planck and writing tests
categories: Clojurescript, Planck
---

Lately I've been playing around with [Planck](http://planck-repl.org),
a commandline bootstrapped ClojureScript REPL for OS X based on
JavaScriptCore.

There are two reasons for this, one, I'm trying to write as much
Clojure(Script) as possible and one way to do that is to try to
automate as much as possible using Clojure(Script), and two, it's fun
to contribute to some opensource projects.

Planck consists, as far as I can tell, of a wee bit of Clojurescript
and quite a bit of Objective C which lets you augment JavasScriptCore
with functionality which isn't readily available.

Since Planck has fantastic startup times, one of the areas it really
shines in is creating small scripts for automating tasks, much like
you would with shell-scripts. But it was lacking the basic stuff to
query files, so I figured that was a nice little project, to add a
`fstat` like function to `planck.io`. Which, conceptually is quite
easy, you run some `stat` like function in the Objective C part of the
code, then expose that through a funciton in `planck.io`.

##Here be dragons!

As a total Objective C n00b, I had to dig around in the docs to figure
out what I needed to do. I ended up using
`NSFileManager:attributesOfItemAtPath:path:error` which seemed to work
ok. It returns a `NSDictionary` from which you pull the values, you
create a javascript object, `JSObjectSetProperty` on it and Bob is
your uncle. Unless he isn't.

Because not all file attributes are present in the dictionary that
`NSFileManager` returns. So you might want to test if they are
present.

`NSDictionary` has a method `[NSDictionary doesContain]` which should
do the job, but doesn't. Probably because of some equals semantic, so
you end up having to use `[NSDictionary objectForKey]`. Which has a
really subtle thing about it. You see, when doing
{% highlight objective-c %}
if ([result objectForKey:NSFileAppendOnly] != nil) {
   bool appendOnly = [ result objectForKey:NSFileAppendOnly ];
   JSObjectSetProperty(ctx, retval, JSStringCreateWithUTF8CString("appendonly"),
                       JSValueMakeBoolean(ctx, appendOnly),
		       kJSPropertyAttributeReadOnly, nil);
}
{% endhighlight %}
the `if` test would actually return `true` even though the key was not present!

And the even more scary thing was that it would return `false` when
stepping through the debugger! The solution to this was
[scary](https://github.com/mfikes/planck/blob/master/planck/PLKClojureScriptEngine.m#L570).

## What's the point of all this

The point of this is that this is quite similar to the code I write in
my day-time job. The problem at hand is not very complex nor is it
very difficult and it results in code which basically is sequential
with little need for tests. Apart from the tests you need in order to
ensure that you've understood the thing that your're integrating with.

Here I'm integrating against OS X through an Objective C api, and my
problems lie not in my complicated glue code, but rather in my
understanding of the api.

And the tests you need to write to ensure you've understood the API
very easily become mocks (if you know how to write those for the api
you're working against, I sure don't know how to write mocks for
Objective C) which only reflect your understanding of the API.

## And one last thingy

There are of course several versions of
OSX. [Mike Fikes](https://www.twitter.com/mfikes), the creator of
Planck, apparantly has a host of macs running different versions of OS
X. And while testing an early version of my patch, he found that the
way I was formatting dates to ship over to Clojurescript didn't work
on OSX Lion, since my format-string `yyyy-mm-dd'T'hh:mm:ssZZZZZ` which
returns `"2013-08-25T00:16:27.000-00:00"` on El Capitan, returns
`"2015-08-31T15:39:19GMT-04:00"`, the interesting bit being the added
'`GMT`', on Lion, which causes `js/Date.` to throw its hands in the
air and give up.

So how do you write tests for this? I have no clue. My approach is to
try and visually inspect the results until they're good. I guess you
could write a test which creates a file, runs `js/PLANCK_FSTAT` on it,
and asserts that the output is somewhat expected, but that's kind of
offputting as well...
