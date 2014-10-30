---
layout: post
title: OSX automator in clojurescript
categories: Clojurescript, Automator
---
I don't quite remember how I found the post, but anyways I landed upon
[this](http://developer.telerik.com/featured/javascript-os-x-automation-example/)
blog by [@mbcrump](http://www.twitter.com/mbcrump) about how automator
now supports Javascript as a language. I don't even remember how I got
the idea of playing with clojurescript to get it to automate tasks,
but definitively read it somewhere.

So how did I go about this?

# Starting a new Clojurescript project
This is always a pain, since I hardly ever do it. I took a chance on
[David Nolens ](http://www.twitter.com/swanodette)s mies plugin for
leinigen
{% highlight bash %}
$ lein new mies applescript
{% endhighlight %}
This gives you a new project called applescript with a minimal
directory-structure.

# Transforming js to clojurescript
Given the js-code from [@mbcrump](http://www.twitter.com/mbcrump)'s
post:
{% highlight javascript %}
var Mail = Application('Mail');

content = "This is my message to you";

msg = Mail.OutgoingMessage({
    subject: "Thanks",
    content: content,
    visible: true
});

Mail.outgoingMessages.push(msg);

Mail.activate();
{% endhighlight %}
it was quite easy to translate it to clojurescript
{% hightlight clojure %}
(ns applescript.core)

(def mail (js/Application "Mail"))
(def content "This is my message to you!")

;; Note the use of the #js reader macro to make a
;; clojure map into a js-map
(def msg (.OutgoingMessage mail #js{:subject "Thanks"
                                    :content content
                                    :visible true}))

;; Needed aget to achieve
;; mail.outgoingMessages.push(msg)
(.push (aget mail "outgoingMessages") msg)
(.activate mail)
{% hightlight %}

{% highlight bash %}
$ lein cljsbuild once
{% endhighlight %}
builds it, but bob is not your uncle yet, since it will not run.

# Making the stuff run
According to the post, it should only be a matter of running
{% highlight bash %}
$ osascript -l JavaScript file.js
{% endhighlight %}

to execute the script. Problem was, how to achieve this, telling
leiningen to include all neccessary js into a file that osascript
could run?

# The solution
was in project.clj. changing
{% highlight clojure %}
  :cljsbuild {
    :builds [{:id "applescript"
              :source-paths ["src"]
              :compiler {
                :output-to "applescript.js"
                :output-dir "out"
                :optimizations :none ;; change this to :simple
                :source-map true}}]}) ;; remove this
{% endhighlight %}
to 
{% highlight clojure %}
  :cljsbuild {
    :builds [{:id "applescript"
              :source-paths ["src"]
              :compiler {
                :output-to "applescript.js"
                :output-dir "out"
                :optimizations :simple}}]})

{% endhighlight %}
gave me one file, applescript.js, containing everything, which I could run as
{% highlight bash %}
osascript -l JavaScript applescript.js
{% endhighlight %}

#Bonus
Just for fun, having a look at applescript.js, all the way at the
bottom, you find:
{% highlight Javascript %}
var applescript = {core:{}};
applescript.core.mail = Application("Mail");
applescript.core.content = "This is my message to you!";
applescript.core.msg = applescript.core.mail.OutgoingMessage({visible:!0, content:applescript.core.content, subject:"Thanks"});
applescript.core.mail.outgoingMessages.push(applescript.core.msg);
applescript.core.mail.activate();

{% endhighlight }
Which translates pretty nicely to the original js-code.




