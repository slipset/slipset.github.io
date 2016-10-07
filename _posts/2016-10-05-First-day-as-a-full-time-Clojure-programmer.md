---
layout: post
title:  "First day as a full-time Clojure programmer"
date:   2016-10-05 21:00:00
categories: Fulltime Clojure
---

So, today I had my first day at [Telenor Digital](https://www.telenordigital.com). Not much exciting stuff to report, but a couple of things worth noting:

1) It felt really good to be browsing the sourcecode in emacs, and discover that they're using [Hugsql](https://www.hugsql.org), [Om](https://github.com/omcljs/om), 
[Figwheel](https://www.youtube.com/watch?v=j-kj2qwJa_E) and a dash of [core.async](https://github.com/clojure/core.async) along with [Kafka](http://kafka.apache.org). I guess I'll be re-watching [One Million Clicks per Minute with Kafka and Clojure](https://www.youtube.com/watch?v=VC_MTD68erY&noredirect=1) a couple of times

2) The tooling. The app I'll be working on is a web app. Running it straight from `lein repl`, the log-statements are printed to stdout and all is well. But when I run it from inside [Cider](https://github.com/clojure-emacs/cider) the log-statements disappear. 
I wonder why. I guess this would be off-putting for people a bit sceptic to Clojure, but I guess I'll just have to ask in the #cider channel on Clojurians tomorrow.

Update: Turns out, after some googling that running the repl in a terminal and connecting via `M-x cider-connect` was the way to go.
Only downside is that Ciders new 'I'll insert correct middleware for you' feature doesn't work when connecting to a network repl, as explained [here](http://cider.readthedocs.io/en/latest/installation/). You also want to add `clj-refactor`-middleware as explained [here](https://github.com/clojure-emacs/clj-refactor.el)


