---
layout: post
title:  "Tools Analyzer"
date:   2019-12-08
categories: Advent of Parens
---

One of the hardest things of trying to write a post each day is to start again once you've missed a day or two (as I have).
Yesterday I decided to prioritize writing a patch to [tools.analyzer.jvm](https://github.com/clojure/tools.analyzer.jvm) that I'd
wanted to submit for quite some time. 

At work, we use [Eastwood](https://github.com/jonase/eastwood) for linting. Having a 60KLOC pluss code base, linting takes some time,
so I decided to look into where it spent its time. So this summer(!) I hooked it up to Yourkit, and found that Eastwood spends most
of its time analyzing files, and to my surprise, the hotspot seems to be [here](https://github.com/clojure/tools.analyzer.jvm/blob/master/src/main/clojure/clojure/tools/analyzer/jvm.clj#L56).

Since Eastwood inlines its dependencies such as this, it was quite trivial to play around with it and add some debug statements,
and I was quite surprised to see that tools.analyser was "constantly" building a new ns-map. 

Reading a bit more code, you find [this](https://github.com/clojure/tools.analyzer.jvm/blob/master/src/main/clojure/clojure/tools/analyzer/jvm.clj#L150),
which basically says "Whenever you analyze a macro, you need to rebuild the ns-map". The reason for this of course, is that a
macro can do basically anything, including altering the ns-object (which is mutable) and launch missiles. But there are some optimizations to be had.
There are a bunch of macros in Clojure core which are frequently used, which do not alter the ns-object. So we could just enumerate them
and check if the macro was one of those, and in that case, elide the rebuilding of the ns-map.

So this lead me to create this [ticket](https://clojure.atlassian.net/browse/TANAL-130). 

And yesterday, I started going down another rabbit hole, which is somewhat related. [refactor-nrepl](https://github.com/clojure-emacs/refactor-nrepl)
has functionality to find usages of a Clojure symbol in your project. This is quite handy. Unfortunatly this is b0rken on our
project for some reason, probably related to [this](https://github.com/clojure-emacs/refactor-nrepl/issues/245) issue.

And digging through it yesterday, I found that when I commented out [this](https://github.com/clojure-emacs/refactor-nrepl/blob/master/src/refactor_nrepl/analyzer.clj#L53) line, 
I didn't get the OOM anymore, which kind of makes sense, since I could imagine the size of the complete AST for our project to be, well, significant.

And why is the cacne in place? Probably because tools.analyzer.jvm is kind of slow.

So, there you go.
