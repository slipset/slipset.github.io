---
layout: post
title:  "The first pain"
date:   2016-10-16 21:00:00
categories: Fulltime Clojure
---

As mentioned before, one of the key reasons I love Clojure is the language itself and its many ways of expressing the same thing.
This lets you tinker with an expression until it feels Good(TM). Of course, there are many different versions of Good, but in general, 
they can be partitioned in two: My version and all the others. This leads to at least two things. One thing is that I generally spend
way too much time on getting a function "just right". Sometimes it's worth the time, sometimes its time wasted, but what's always true
is that you really need to know `clojure.core`. There's so much there. Last thing I picked up was `replace`, which just replaces 
elements in a collection:

```clojure
(replace {"lol" "foo"} ["lol" "bar" "baz")
;; => ["foo" "bar" "baz"]
```

So this comes in to play when doing code-reviews. One of the things I cannot wrap my head around is overly complicated anonymous functions.
Ideally, I want anonymous functions used when mapping over collection to be no longer than one line, and preferably a retur value from either 
`partial` or `comp` as such:

```clojure
(map (partial + 1) [1 2 3 4]) 
;; => (2 3 4 5)
```

When the anonymous functions begin to span several lines, I need to have them broken out into a separate function with a reasonable
name so I can understand what it does. I then try to arrange the params so that it can be used with `partial`.

```clojure
(defn create-frobnitzes [frob nit i]
  (str (inc i) " " frob nit (when (< 0 i) "zes")))
   
(map (partial create-frobnitzes "frob" "nit") [0 1 2 3])
;; => ("1 frobnit" "2 frobnitzes" "3 frobnitzes" "4 frobnitzes")
```

This also lets us write unit tests for `create-frobnitzes`without the need to construct a whole collection of things, which could be
complicated if the collection was somewhat more involved than just `(range 4)`.

Another pet pieve of mine is let functions be passed data, don't make them ask for it:

```clojure
(defn foo [bar baz]
  (->> (fetch-from-database bar)
       (filter whatever)
       (map (partial whatnot baz))
       (reduce with-something)))
```

When testing this, you need to bring out the old `with-redefs` so you can mock out the database. In my opinion, it's much nicer with 
something like 

```clojure
(defn foo [bars-from-the-db baz] ; or even switch the args
   (->> bars-from-the-db
        (filter whatever)
        (map (partial whatnot baz)
        (reduce with-something)))
````

since this function is now decoupled from the database and testable with pure data.
  
       
   
