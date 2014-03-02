---
layout: post
title: "The things I love about Clojure and two things that suck"
categories: Clojure
---

##The things I love

###REPL
Working in the REPL is just amazing. It lets you experiment with
stuff, redfine functions on the fly, assign stuff to variables, work
with them, and it's just great.

Working in Java, the closest thing I can come to is running unit-tests
in your IDE. But still then, it's just way more complicated.

The REPL, combined with the fact that you normally start out
implementing your datastructures in maps and lists, lets you
experiment your way through your development.

In Java, you need to figure out what you want to call stuff before you
can start working. Is this thing a Person, a Student, or an Employee,
and if so, what attributes does it have. In the REPL?
{% highlight clojure %}
(def p {:name "John"})
{% endhighlight %}
You need a couple of these?
{% highlight clojure %}
(def ps [{:name "John"} {:name "Frank"}])
{% endhighlight %}
Now compare this to the amout of code you'd need to write in Java.

###The way stuff fit together
Take `update-in`
> 'Updates' a value in a nested associative structure, where ks is a
> sequence of keys and f is a function that will take the old value
> and any supplied args and return the new value, and returns a new
> nested structure. If any levels do not exist, hash-maps will be
> created.

This lets you write stuff like
{% highlight clojure %}
(def a-foo {:foo {:bar 2}})

(update-in a-foo [:foo :bar] + 1)
;=> {:foo {:bar 3}}
{% endhighlight %}

The point here is that the function `+` is being passed the value of
`:bar` in `:foo` _along with_ 1, so you're actually calling
{% highlight clojure %}
(+ 2 1)
;=> 3
{% endhighlight %}

###Sequence abstraction
The sequence abstraction leads to the fact that all the higher-order
functions like `map`, `filter`, `reduce`, etc all work on what ever
kind of collection you throw at them. Even better, if you choose to
start using records with `defrecord`, they will also work as
sequences!

Along with destructuring, this lets you write stuff like
{% highlight clojure %}
(defn update-vals
  "updates all the values in a map by applying the function f
   on them"
  [m f]
  (map (fn [[k v]] [k (f v)]) m))

(update-vals {:foo 1 :bar 2} inc)
;=> {:foo 2 :bar 3}
{% endhighlight %}
There are a couple of points to be made of this. First of all it is
incredibly concise. My head explodes by just looking at this function.

Secondly it shows that persistent data structures are not that hard to
work with. With functions like `update-in` and the one above, it's not
much harder to work with persistent data structures than the, I'd say,
normal, mutable ones you have in Java.

###Emacs
I'm so happy to be back in Emacs. I started coding in Emacs again a
couple of months ago to see if it was a viable option to Intellij wrt
coding in Javascript/Ext.js. I have found it to be so. Given lintnode
and projectile, Javascript coding in Emacs works.

But it all comes together in Clojure. You navigate the code with
<tt>C-M-f</tt> and <tt>C-M-b</tt>, you kill code with
<tt>C-M-k</tt>. And since Clojure is homoiconic (got to use that
word), it's actually quite easy to understand what a s-exp is. It's
the thing in the parens.

Also, Clojure-mode with CIDER just rocks, since it lets you run the
REPL inside emacs, which means you don't ever need to leave. 

##The two things that suck
So far I've only found two things I dislike about Clojure, apart from
my brain working on overload trying to remember how my nested
data-structures look like

###No debugger
I know there are debugger tools out there, but I do miss the ability
to insert a `(debugger)` statement in my code and drop into, well, a
debugger which lets me examine the frame I'm in. Right now I'm
resorting to `(println)`, which to me is a huge step backwards.

###Error messages
The run-time error messages I get from Clojure are so bad I don't even
want to think about it. It might just be me doing everything wrong, or
even having to high expectations, but I just simply want to know the
line in my clojure file in which the error occured with some
explanation which has some connection to the code I've written, not to
the Java code which implements Clojure.

##In conclusion
The sad bit is that the two points of suckage makes it hard for me to
promote Clojure as a language to work in for my colleagues, because
along with all the parens (which I look upon as a feature), the lack of
debugger and the hopeless errormessages without context, makes Clojure
a hard sell.