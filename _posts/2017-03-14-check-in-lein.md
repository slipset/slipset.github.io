---
layout: post
title: "Add bin/lein to VCS"
categories: Clojure
---

So, [@technomancy](https://twitter.com/technomancy) asked on twitter:
<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Leiningen users: how do you feel about checking the bin/lein shell script into project repositories so everyone uses the exact same thing?</p>&mdash; technomancy (@technomancy) <a href="https://twitter.com/technomancy/status/841448456111570944">March 14, 2017</a></blockquote> <script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>
My answer is no, I don't see the need for that, but I thought I'd elaborate.

I think the `project.clj`s that I've made/used have been fairly simple stuff, mainly declaring the dependencies of the project.
Apart, of course, from the projects that use Clojurescript and [figwheel](https://github.com/bhauman/lein-figwheel), which tend to 
become a mess of something that feels like it works more out of a coincidence than anything else.

But I guess my main point is that, the way I use lein, is that the main usage is very straight forward, and anything else is handeled
by plugins which are declared in the `project.clj` itself with the corresponding versions.

If I were to ask for anything, I guess it would be to be able to specify the lein version exactly in the `project.clj` 
and that lein bootstrapped itself with that exact version.

Not that that would solve any problem I currently have.

I'd rather have Clojurescript/figwheel build with a simple setup. and not 

```clojure
{:dev {:source-paths ["env/dev/clj"]
                   :dependencies [[figwheel-sidecar "0.5.8"]
                                  [com.cemerick/piggieback "0.2.1"]
                                  [devcards "0.2.0-8"]
                                  [binaryage/devtools "0.8.3"]]

                   :repl-options {:init-ns core.my-ns}

                   :plugins [[lein-figwheel "0.5.8"]]

                   ;;Having source-paths here helps Leiningen IntelliJ plugin recognize source roots after a refresh
                   :cljsbuild {:builds {:dev
                                        {:source-paths
                                         ["env/dev/cljs/foo"
                                          "src/cljs/foo"
                                          "test/cljs"]
                                         :compiler {:preloads [devtools.preload]}}}}}
             :test {:plugins [;; Runs cljs-tests in various browsers
                              [lein-doo "0.1.6"]]
                    :cljsbuild {:builds {:test {:source-paths ["src/cljs/foo" "src/cljs/common" "test/cljs"]
                                                :compiler {:output-to "resources/public/js/out/testable.js"
                                                           :main foo.test-runner
                                                           :foreign-libs [{:file "resources/public/js/lib/jquery-1.11.3.min.js"
                                                                           :provides ["jquery.core"]}
                                                                          {:file "resources/public/js/lib/chartist.min.js"
                                                                           :provides ["chartist.core"]}
                                                                          {:file "resources/public/js/lib/d3.min.js"
                                                                           :provides ["d3"]}]
                                                           :externs ["externs/jquery-1.9.js"]
                                                           :optimizations :none}}}}}
             :uberjar {:env {:browser-caching {"text/javascript" 604800
                                               "text/html" 0}}
                       :hooks [leiningen.sass]
                       :prep-tasks ["git-info-edn" "compile" ["with-profile" "uberjar" "cljsbuild" "once"]]
                       :omit-source true
                       :aot :all
                       :main foo.server
                       :sass {:style :compressed}
                       :cljsbuild {:builds {:admin {:source-paths ["src/cljs/admin" "src/cljs/common"]
                                                    :figwheel false
                                                    :compiler
                                                    {:output-to "resources/public/js/admin.js"
                                                     :output-dir "resources/public/js/admin-out"
                                                     :source-map-timestamp true
                                                     :optimizations :advanced
                                                     :externs ["externs/jquery-1.9.js"
                                                               "resources/public/js/lib/bootstrap.min.js"]
                                                     :closure-warnings {:externs-validation :off}
                                                     :pretty-print false}}
                                            :foo {:source-paths ["env/prod/cljs/foo" "src/cljs/foo" "src/cljs/common"]
                                                           :figwheel false
                                                           :compiler
                                                           {:output-to "resources/public/js/foo.js"
                                                            :output-dir "resources/public/js/foo-out"
                                                            :source-map-timestamp true
                                                            :optimizations :advanced
                                                            :externs ["externs/jquery-1.9.js"
                                                                      "resources/public/js/lib/bootstrap.min.js"
                                                                      "resources/public/js/lib/chartist.min.js"
                                                                      "resources/public/js/lib/moment.min.js"
                                                                      "resources/public/js/lib/daterangepicker.min.js"
                                                                      "resources/public/js/lib/d3.min.js"
                                                                      "resources/public/js/lib/nv.d3.min.js"
                                                                      "resources/public/js/lib/d3_sankey.js"]
                                                            :closure-warnings {:externs-validation :off}
                                                            :pretty-print false}}}}}})
                                                           
            }
```

Of course, I'm only complaining and have no real solution to this problem, but I'd love to see something like 

```clojure
 :plugins [[lein-figwheel "0.5.8"]
 ```
 and that all magic with sidecars and piggiebackers would be taken care of, as would picking up of externs and stuff which 
 I would have to place in some directory dictated by `figwheel/cljsbuild`
 
 So, rewriting my `project.clj` above, I'd like to see something like:
 ```clojure
 :plugins [[lein-figwheel "0.5.8"]]

:profiles {:dev {:source-paths ["env/dev/clj"]

                 :dependencies [[devcards "0.2.0-8"]
                                [binaryage/devtools "0.8.3"]]

                 :repl-options {:init-ns foo.dev} ;; could be default to be overriden
                 :plugins [[com.jakemccrary/lein-test-refresh "0.12.0"]]
                 :cljs {:preloads [devtools.preload]}}
           :test {:plugins [[lein-doo "0.1.6"]]
                  :cljs {:optimizations :none
                             :main foo.test-runner} ;; could be default to be overrriden
                  }
           :uberjar {:env {:browser-caching {"text/javascript" 604800
                                             "text/html" 0}}
                     :hooks [leiningen.sass]
                     :prep-tasks ["git-info-edn" "compile" ["with-profile" "uberjar" "cljsbuild" "once"]]
                     :omit-source true
                     :aot :all
                     :main foo.server
                     :sass {:style :compressed}
                     :cljs {:optimizations :advanced} ;; could be defaul to be overridden
                     }}
 ```
