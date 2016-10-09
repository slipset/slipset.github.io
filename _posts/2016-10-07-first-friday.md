---
layout: post
title:  "First friday"
date:   2016-10-07 21:00:00
categories: Fulltime Clojure
---

It's important to know where I'm comming from. I've been programming professionally for about 20 years now. I started out using Perl,
switched to Java because reasons in '99 and been missing the fun of emerging myself in the language as I did with Perl. In Perl there's
[TIMTOWTDI](https://en.wiktionary.org/wiki/TIMTOWTDI), and I certainly like working on a function or a piece of code until it looks nice, 
for some (my) definition of nice.

Java has had no such qualities. Having worked a bit with Java 8 streams and optional lately, I have found some ways of expressing stuff in 
Java the way I want it to be.

But I really enjoy Clojure. Stuff fit very well together, functions can be very concise, and they very often end up being quite elegant as well.
Because I like the language so much, I'm willing more willing to spend time on stuff that's not quite working as expected, and I'm not (as)
pissed off when I waste a couple of hours on something that I shouldn't have wasted time on.

One such thing today was solved by the var-quote `#'`. I was rewriting some authorization code which uses 
[buddy](https://funcool.github.io/buddy-auth/latest/#access-rules) which ended up in code like

```clojure
(def rules [{:uri "/foo"
             :handler bar}])
             
(-> app
    (buddy/wrap-access-rules rules))
```

Problem is, that if you redifine the handler function, in this case `bar`, the changes are not visible. The solution here is to var-quote
the handler as such:

```clojure
(def rules [{:uri "/foo"
             :handler #'bar}])
```

and the changes will be picked up when `bar` is redefined.

# The Good stuff
Since I'm new to to the code base and not quite sure how everything works, it seemed prudent to add some tests to make sure my 
refactorings were working the way I wanted them to. So I wanted to, in Java parlance, mock out the database and make sure that 
the tranformations I did to the data from the db were correct. In Java-land, this would have been a day of pain, but due to 
Clojures map/list literals and `with-redefs` it's all quite simple:

```clojure
;; First pull your stuff from the db
(db-fn foo bar baz)
;=> ({:foo "bar" :baz "qix})
;; then define a var to hold this in your test-ns
(def from-db ({:foo "bar" :baz "qix"}))
;; Then run your function before the refactor
(to-be refactored "whatever" "whatnot")
;;=> 42
;; Write the test
(deftest my-function-test
   (testing "that it works"
      (with-redefs [db-fn (fn [_ _ _] from-db)
         (is (= 42 (to-be-refactored "whatever" "whatnot"))))))
```

