---
layout: post
title: "Clojure and refactoring"
categories: Clojure
---

Last night I tweeted
<blockquote class="twitter-tweet" lang="en"><p>Seems to me that refactoring-tools are much less needed when programming <a href="https://twitter.com/search?q=%23clojure&amp;src=hash">#clojure</a></p>&mdash; Erik Assum (@slipset) <a href="https://twitter.com/slipset/statuses/439710783191416832">March 1, 2014</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>
to which I got a couple of responses.

First from [@mikera](https://twitter.com/mikera) which contained a link to a really nice post he'd written outlining some good points about Java vs Clojure:
<blockquote class="twitter-tweet" data-conversation="none" lang="en"><p><a href="https://twitter.com/slipset">@slipset</a> I&#39;ve found the opposite - lack of refactoring support is one of my (very few) gripes about <a href="https://twitter.com/search?q=%23Clojure&amp;src=hash">#Clojure</a>. see: <a href="http://t.co/oqRYCrdkU0">http://t.co/oqRYCrdkU0</a></p>&mdash; Mike (@mikera) <a href="https://twitter.com/mikera/statuses/439973631645319168">March 2, 2014</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

Then [@odinodin](https://twitter.com/@odinodin) tweeted
<blockquote class="twitter-tweet" data-conversation="none" lang="en"><p><a href="https://twitter.com/slipset">@slipset</a> why isn’t there the same need for refactoring support? Just curious about what you’re thinking about</p>&mdash; Odin Hole Standal (@odinodin) <a href="https://twitter.com/odinodin/statuses/440065048971857920">March 2, 2014</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

So I thought I'd share some (deeper) thoughts on this.

## Disclaimer
I've only coded Clojure for a bit over a month, only written close to
1000 lines of code, and I'm the only person working on this project.

## What kind of refactorings and other tools do I use when working in Java?
   Previously, I've had the opinion that working in a language which has
   less IDE support than Java would be a no-starter, and I still
   cannot imagine coding in Java without refactoring and
   Intellisense. Which I to some extent miss in Javascript as well.

   As for the refactorings I use in Java, I guess extract method,
   various renames (method, class, packagae) are the ones I use
   most. I do not consider cleaning up imports a refactoring, that's
   just cleanup.

## Why don't I miss this in Clojure
   I'm not sure why I don't miss these things in Clojure, but I do
   notice a couple of things:

### Working in the repl
   Since all my development happens in the REPL, I have a workflow
   which consists of
   0. Make stuff work
   1. Clean it up
   2. recur 0
   3. When happy, I move the code into the file it belongs
   This leads to code that is much more worked through than the stuff
   you bang out in Java

### Working with higher abstractions
   Since Clojure lets you work with higher-order functions and has the
   great sequence abstraction, you never end up with code lik this:
   {% highlight Java %}
   foreach (Foo f: foos) {
      if (foo.getBaz() != null && foo.getOmg() != HAPPENING) {
      	 bars.add(foo);
      }
   }
   return bars;
   {% endhighlight %}
   Which I probably would refactor into something like:
   {% highlight Java %}
   foreach (Foo f: foos) {
     if (!foo.isBar()) continue;
     bars.add(foo);
   }
   return bars;
   {% endhighlight %}
   Which includes extract method.

   In Clojure this is
   {% highlight Clojure %}
   (filter #(and (:baz %) (= (:omg %) :happening)) foos)
   {% endhighlight %}

   Pulling out the predicat here is just a <tt>C-M-k</tt> away (plus
   some more stuff ;) so the refactor is done so fast I don't even
   have time to miss a refactoring tool.

### Dense code
   It has also dawned upon me that since Clojure is so dense, eg lots
   of stuff happening in few lines of code, I really need to be
   prudent when organizing my code. If I let a function become longer
   than 10 lines, I'm lost, so I constantly mold my code to keep it
   understandable.

   Also, files with more than 150 lines of code makes my head explode,
   so I constantly move stuff into other packages.

### But isn't this what refactoring tools help you with?
   No, not the way I look at refactoring. Because refactoring for me
   is taking something that is functionally finished, even deployed,
   and reorganizing it mechanically. The stuff I mention above is stuff
   I _while_ developing, not after. Put in another way, working in the
   REPL, I constantly refactor stuff before it even has a chance to become a big hairy
   ball of mud.
   
### All the helpers are written
   Also I find that extracting stuff to smaller helper
   functions/classes like I do in Java is no longer needed since these
   methods seem to be already implemented in Clojure.

   Classic Java
   {% highlight Java %}
   if (number % 2 == 0) {
        evens.add(number);
   } else {
	odds.add(number);
   }
   {% endhighlight %}

   Clojure
   {% highlight Clojure %}
   (group-by odd? (range 10))
   {% endhighlight %}

   In Java, I'd probably extract <tt>isOdd(int i)</tt> whereas in
   Clojure, that's already done.

### Functional code leeds to less intertwinedness
   It seems like when banging out some Java-code, even if you take
   care, way too many functions seem to know about far too much common
   stuff - normally you'd have three methods operating on the same
   hashmap or something like this.

   In Clojure you simply don't.
   
## Summary
   So I guess that the combination of the REPL, the sequence
   abstraction, dense code, and my stupidity leeds me to writing code
   that doesn't need too much after-the-fact refactoring.
   
	 
