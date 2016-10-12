---
layout: post
title:  "First serious type-rror"
date:   2016-10-12 21:00:00
categories: Fulltime Clojure
---

So Clojure is a dynamically typed language. So is Javascript, but Javascript feels so much more insecure to me than what Clojure does.
I think one reason for that is that Clojure does a bit more thorough job when it's compiling.

Consider the following piece of Js-code

```Javascript
function foo() {
   return bar; // bar is undefined
}
```

When evaluating this in the console, all is fine and dandy, but when you try to run it, it blows up:
```Javascript
foo();
//> ReferenceError: Can't find variable bar
```

The equivalent code in Clojure:
```Clojure
(defn foo []
   bar)
```
When evaluating this, the compiler throws and Exception:
```
CompilerException java.lang.RuntimeException: Unable to resolve symbol: bar in this context
```
So a whole class of errors, the dreaded speling errors, are gone.
But you still have the type-errors. And that's what bit me
Consider this function (slightly useless, but suits my example):

```clojure
(defn foo 
"bars is a vector of strings
[bars]
  (first bars))
```

Sometimes you want to call it when you only have one bar, so you wrap the bar in a vector as such:
```clojure
(foo ["the one and only bar"])
;;=> "the one and only bar"
```
But, I forgot to wrap my lonely bar in a vector, and noone complained. 
```clojure
(foo "the one and only bar")
;;=> \t
```
The reason for this is that strings in Clojure are seq-able, which means that they behave as collections.
If they didn't my code would have thrown an `IllegalArgumentException` as it does when called with a number:
```clojure
(foo [1])
;;=> 1
(foo 1)
;;=> IllegalArgumentException Don't know how to create ISeq from: java.lang.Long
```
Which is consistent with the code in [RT.java](https://github.com/clojure/clojure/blob/master/src/jvm/clojure/lang/RT.java#L531)
