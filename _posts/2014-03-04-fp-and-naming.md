---
layout: post
title: "Functional programming and naming"
categories: Clojure
---
#The CleanerUpper
[@jessitron](https://twitter.com/jessitron) wrote a
[post](http://blog.jessitron.com/2014/03/modularity-in-scala-isolation-of.html)
on some refactoring she'd done in Scala. But it was not the neat
refactoring that got me thinking, it was the name of her class
{% highlight scala %}
class CleanerUpper(broom: Broom, 
                   rag: Dishcloth, 
                   wiper: MicrofiberTowel, 
                   config: CleanConfig) {
		   }
{% endhighlight %}

##OO and naming
Naming has been a problem for me ever since I started programming
Java. I don't know how many Managers, Services, Helpers and Utils I've
written through the years, not to forget the Creators, Factories and
Homes. The problem arises from the fact that everything in OO needs a
bloody name. And to be able extract stuff from other stuff when doing
a refactoring, you need to put it somewhere, and that somewhere needs
to have a name. Like <code>CleanerUpperer</code>.

##FP (or should I say Clojure) and naming
Naming a bunch of things seems to be much simpler in Clojure. Had I
been writing some cleaner stuff in Clojure, I guess I'd just made
myself a <code>cleaner</code> namespace and I'd be done. Because you
have functions they don't have to live inside a noun, but rather just
be a collection of stuff that do more or less similar things. If the
<code>cleaner</code> namespace becomes too big, you just create
another one like <code>broom</code>. No <code>BroomManager</code>
needed.

##Problems in FP naming
The one problem I am facing with regards to naming in fp is when you
have a function that does something to a bunch of things:
{% highlight clojure %}
(defn tranform
   "Takes a collection of foos and makes them into bars"
   [foos]
   (map #(...) foos))
{% endhighlight %}
This is all fine and dandy until the anonymous function becomes so
complicated that you want to give it a name. What do you call it? Do
you rename your original <code>transform</code> to
<code>transform-all</code> and name your extracted function
<code>transform</code>?

I really have no good answer for this.



