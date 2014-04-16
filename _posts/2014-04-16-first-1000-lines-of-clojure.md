---
layout: post
title: "First 1000 lines of Clojure"
categories: Clojure
---

This is a short summary after having written my first 1000 lines of Clojure.

It all started when I was assigned the task of importing some stuff
into our stuff and nobody cared to specify which language to write the
importer in.

First I thought I'd write it in Scala, but when push came to shove, I
couldn't be bothered learning a new syntax, so I figured Clojure would
be a good fit. I've always been intrigued by
[lisp](http://cpansearch.perl.org/src/GAAS/perl-lisp-0.06/Changes), so
a lisp running on the JVM should be a good fit.

#The importer
Basically I was given a huge XMl-file and some content files, and I
wrote a thingy which transformed this XML-file into a nice
tree-structure, which I then fed to a rest-client responsible for
creating content by interacting with our rest-api.

#Lessons learned
I've been working on and off on this importer for the last four
months, with breaks from it in up to a month in length. I was scared
about coming back to the code after such long time, but that has not
been a problem at all, even though
{% highlight clojure %}
(defn parents-of-files [folder path]
  (let [children (:children folder)
        docs (filter :document children)
        sub-nodes (remove :document children)
        new-path (conj path (:name folder))
        rest (flatten (map #(parents-of-files (:folder %1) new-path ) sub-nodes))]
    (if (seq docs)
      (cons {:path new-path :documents docs} rest)
      rest)))

(defn flatten-children [folder]
  (let [flat-tree (parents-of-files folder [])]
    (flatten (map #(add-path-to-docs (:documents %) (:path %)) flat-tree))))
{% endhighlight %}
Still makes me a bit scared. Having said that, given the shortish
functions and their descriptive names, it's quite easy to follow the code.

##Persistent data structures
Working with persistent data structures was difficult before I
understood that Clojure has some nice functions to make it much
easier. In the beginning, when I wanted to change <tt>baz</tt> to <tt>qux</tt> in
{% highlight clojure %}
(def h {:foo {:bar {:baz "qix"}}})
{% endhighlight %}
I ended up with code like
{% highlight clojure %}
(defn update-baz [h val]
  (let [foo (:foo h)
	bar (:bar foo)]
    (assoc h :foo (assoc foo :bar (assoc bar :baz val)))))
{% endhighlight %}     
which took me 10 minutes to write. Then you find <tt>assoc-in</tt>,
and the whole thing is done in one line:
{% highlight clojure %}
(assoc-in h [:foo :bar :baz] "qux")
{% endhighlight %}

If you want to capitalize the value instead of just replacing it, you
use <tt>update-in</tt>
{% highlight clojure %}
(update-in h [:foo :bar :baz] clojure.string/capitalize)
{% endhighlight %}

##The hard bits
The hardest bit in this project was due to the fact that the XML was
actually a dump of a
[javax.swing.DefaultMutableTreeNode](http://docs.oracle.com/javase/6/docs/api/javax/swing/tree/DefaultMutableTreeNode.html). This 
meant that to start the transformation of this XML, I needed to use
the java-beans that were serialized. This meant that in order to test
my functions, I first had to get hold of the Java-objects, which could
only be found by deserializing the stuff. So, even though the
Java-interop worked as a charm, it was a hassle to get
test-data. Lesson learned from this is to get stuff over to lists and
maps as soon as possible, and the
[bean](http://clojuredocs.org/clojure_core/clojure.core/bean) function
is your friend here.

##The REPL
Working in the repl is sooo nice. You start out with an idea of what
you want to make, then you polish it in the REPL. As far as I can see
TDD becomes useless, [Jay
Fields](http://blog.jayfields.com/2014/01/repl-driven-development.html)
has more on this.

A downside to working in the REPL (through CIDER in emacs) is that I
constantly forget to save my buffers. This leads to my unsureness
about the state of the file I'm currently editing on. Don't really
know how to handle that.

#The big bonus
Was actually something I discovered today, as the project is getting
finished. Running the import in the REPL means I can interact with the
import <i>after it is done</i>

Take this function, which takes a document and creates it on the
server:
{% highlight clojure %}
(defmethod create-document false [document]
  (try
    (let [node-id (rest/create-document (remove-audit-props document))]
      (rest/set-properties (assoc (get-audit-props document) :nodeId node-id))
      (swap! document-count inc)
      (print-document-stats))
    (catch Exception e
      (swap! errors conj document)
      (error e "Could not create document "   document))))
{% endhighlight %}
As you can see, whenever it fails, it adds the document to the
<tt>errors</tt> atom. This lives on after the import is done, and I
can inspect the errors to see how many errors have occured, and I can
even manually retry the documents that failed. I would never have
thought about making that possible had I written this importer in
Java.

#In ending
I do find it kind of sad that most developers seem to be frightened by
Lisps in general, since it is a really nice language-family to work
with.

I find that wrapping my head around some of the stuff I need to do is
hard, but that actually makes me think harder about the problem at
hand, and in the end seems to leed to better solutions.