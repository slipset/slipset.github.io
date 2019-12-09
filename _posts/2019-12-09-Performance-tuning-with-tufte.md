---
layout: post
title:  "Performance tuning with tufte"
date:   2019-12-08
categories: Advent of Parens
---

I really enjoy performance tuning. It's a bit like debugging, you are presented with a problem (this thing is too slow), and you
need to figure out where the slowness is hiding, and then how to fix it. Luckily the slowness I was working on today was reproducible
and consistent, so it was just a matter of profiling the code. Previously, and especially when working with Java, I've been using
[Yourkit](yourkit.com) with great success, but this time I figured I'd try something slightly more lightweight. Enter [tufte](https://github.com/ptaoussanis/tufte).

Set up a handler like so
```clojure
(ns my.metrics
  (:require [superstring.core :as str]
            [my.logger :as log]
            [taoensso.tufte :as tufte]))

(defn- nanos->ms [elapsed-time]
  (double (/ elapsed-time 1000000)))

(defn- wall-time-ms-elapsed [pstats]
  (-> pstats :clock :total nanos->ms))

(defn- slow? [pstats]
  (>  (wall-time-ms-elapsed pstats) 5))

(defn- pretty-pstats [pstats]
  (str  "Function call took " (Math/round (wall-time-ms-elapsed pstats)) " ms in total.\n\n"
        (tufte/format-pstats
         pstats {:columns [:n-calls :min :max :mean :clock :total]
                 :format-id-fn name})))

(defn- slow-stuff-logger
  [{:keys [pstats pstats-str_]}]
  (try
    (when (slow? @pstats)
      (log/info (pretty-pstats @pstats)))
    (catch Exception e
      (log/error e))))

(tufte/add-handler! :log-slow-stuff-handler slow-stuff-logger)
```
And start profiling away by replacing your normal `defn`s with `defnp`. Also, don't forget to add a 
`(profile {} ...)` around your entrypoints to the slow code.

What was surprising this time around was that normally in my apps, slow code is normally caused by too many accesses to the database, 
or some missing indexes in said db. Today was different. The main culprit was 

```clojure
(defn edn-conform [spec doc]
  (let [edn-specs (specs/merge ::specs/metadata spec)]
    (->> (spec-tools/conform edn-specs doc edn-conforming)
         (log-invalid edn-specs edn-conforming doc)
         (specs/maybe-unform spec))))
```

which was called on every document fetched from the database. Another fun one was this little snippet

```clojure
eval-node (fn [node]
                    (cond
                      (disabled? node) true
                      (rule? node) (eval-rule node)
                      (filter? node) (eval-filter node)
                      :else node))
        filter-matches-workspace (fn [filter]
                                   (walk/postwalk eval-node filter))
```
which became quite a bit faster when changed to this:
```clojure
eval-node (fn [node]
              (if (map? node)
                    (cond
                      (disabled? node) true
                      (rule? node) (eval-rule node)
                      (filter? node) (eval-filter node)
                      :else node)
                    node)
        filter-matches-workspace (fn [filter]
                                   (walk/postwalk eval-node filter))
```                                   

