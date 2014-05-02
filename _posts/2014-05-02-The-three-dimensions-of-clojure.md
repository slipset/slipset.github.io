---
layout: post
title: "The three dimensions of Clojure"
categories: Clojure
---
It seems to me that there are three dimensions of working with Clojure. 

#The elegance
The first, and most obvious dimension is the elegance in the language itself. 
It is such a pleasure working in a language which lets you do suff like:
{% highlight clojure %}
(distinct (map :foo bars))
{% endhighlight %}
It's just like little pieces of functionality waiting to be put together. 
Like Lego

#The higher order
This is where I'm at right now. I've just started to realize what powers lie in <code>comp</code> and <code>partial</code>.
What follows is a contrived example, but think it through:
{% highlight clojure %}
(def m {:foo {:bar {:baz "qix"}}})

(update-in m [:foo :bar :baz] (comp (partial str "foo") clojure.string/reverse clojure.string/upper-case))
;; => {:foo {:bar {:baz "fooXIQ"}}}
{% endhighlight %}

#The concepts
But maybe the most facinating thing about Clojure is the thoughts of Rich Hickey. It's so cool that he's 
identified these problems in programming and then set out to solve them by creating this language. And 
listening to his talks, like this one, on [value, identity state](http://www.infoq.com/presentations/Value-Identity-State-Rich-Hickey)
is just awesome.
