[Hillel Wayne](https://twitter.com/hillelogram) has a newsletter that you should absolutely [subscribe](https://buttondown.email/hillelwayne) to.
[Todays edition](https://buttondown.email/hillelwayne/archive/why-python-is-my-favorite-language/) is called "Why Python Is My Favourite Languge",
and describes all the hurdles you need to jump in order to solve your $PROBLEM in a new language.

So in this post, I'll try to look at these hurdles, and see how they are overcome in my favourite language, Clojure:

## How do I install the thing?
Hillel didn't actually ask this question, but it's IMO worth asking.
[Clojure](https://clojure.org) is language running on the JVM, which means you need to have java installed (and yes I'm assuming a mac here):
```sh
$ brew install adoptopenjdk
```
Once Java is installed, you should install `clojure` and you're good to go:
```sh
$ brew install clojure
```
This gives you two new commands, of which we'll be focusing on `clj` which drops you into a repl:
```sh
$ clj
Clojure 1.10.1
user=>
```
You can read more about how to get started [here](https://clojure.org/guides/getting_started).

## How am I supposed to be writing this?
Clojure is editor agnostic, but anyone working in Clojure will be using her favourite $EDITOR with some plugin:
- Emacs, you will of course be using [CIDER](https://docs.cider.mx/cider/index.html), unless you're [Sherlock](https://twitter.com/stuarthalloway) and you're using
[inf-clojure-mode](https://github.com/clojure-emacs/inf-clojure)
- Vim, here [fireplace](https://github.com/tpope/vim-fireplace) seems to be the choice of champions
- VSCode, your choice is [Calva](https://calva.readthedocs.io/en/latest/), which aims at a great experience for beginners and pros alike
- For Intellij, just download [Cursive](https://cursive-ide.com), which is free for personal use.
- Atom has [Chlorine](https://atom.io/packages/chlorine), read more about it [here](https://corfield.org/blog/2018/12/19/atom-chlorine/)

2) How do I read from a file? How do I parse JSON, How do I pull environmental variables?
This section also contains two sub-questions, so let's start with those:

### How do I do any of the things that aren't part of the core syntax/semantics, but are super common problems people face every day?
Let's answer this and the first question from the section with one function: [`slurp`](https://clojuredocs.org/clojure.core/slurp).
`slurp` lets you read from a file or a URL.
```clj
(def passwords (slurp "/etc/password"))
(def news-letter (slurp "https://buttondown.email/hillelwayne/archive/why-python-is-my-favorite-language/"))
```
its companion is calleds [`spit`](https://clojuredocs.org/clojure.core/spit):
```clj
(spit "/tmp/password" (slurp "/etc/password"))
```
### How do I parse JSON?
Parsing JSON is (unfortunatly) not part of the core language, so first we need to understand how we do dependency management in Clojure.

#### Dependency management
For dependency management in Clojure, there are several options (in addition to doing it manually which I will not cover here).
There is [`deps`](https://clojure.org/guides/deps_and_cli) which is the most official way, and which is understood by the tools you installed previously, 
[Leiningen](https://leiningen.org) which was the defacto standard for many years, and [boot](https://boot-clj.com) which seems to be somewhat less popular these days.
For this post, I'll be focusing on `deps`.

So when you start `clj`, it will look for a file called `deps.edn` and parse it looking for dependencies. In its simplest form a `deps.edn` file will look like:
```clojure
{:deps
 {cheshire {:mvn/version "5.9.0"}}}
```
With a `deps.edn` like this, `clj` will download [cheshire](https://github.com/dakrone/cheshire) and start up Clojure with `cheshire` as a dependency, and voila, you can parse json:
```clojure
(require '[cheshire.core :as json])
(json/decode "{foo: \"bar\"}")
(json/encode {:foo "bar})
```

### How do I pull environment variables
Since Clojure is running on the JVM, it's a matter of doing some [Java interop](https://www.clojure.org/reference/java_interop)
```clojure
(System/getProperty "user.dir")
```

The final question in this section was "Do I need to memorize another 100 functions and their params?". My answer to this is of course "it depends".
First of all, the standard lib of Clojure is quite small, and since we're basically always operating on maps and lists, you get fairly far with the basic operations on these datastructures (`map`, `filter`, `reduce`, `assoc`, `dissoc`)

As a final note in this section, I'd recommend having a look at [clj-http](https://github.com/dakrone/clj-http) which should cover all your `http` needs.
So with a `deps.clj` looking like 
```clj
{:deps
 {cheshire {:mvn/version "5.9.0"}
  clj-http {:mvn/version "3.10.0"}}}
```
you'll be set for most of your daily tasks.

## What are the language quirks that will cast me an hour to discover
Clojure is famous for its bad error messages, so time will be spent on understanding them, this is but one example:
```clj
user=> (map 1 ['lol])
Error printing return value (ClassCastException) at clojure.core/map$fn (core.clj:2753).
class java.lang.Long cannot be cast to class clojure.lang.IFn
```
Having said that, a lot of work has been put down in order to make the error messages better in the last releases.

## How is the help organized? Is there an official site? How's the site laid out?
A lot of help is done in the [Clojurians slack](http://clojurians.net), so yes, you may have to join yet another slack community.
Otherwise, I find [Clojure docs](clojuredocs.org) extremely helpful for documentation on the standard library, [cljdoc](https://cljdoc.org) for documentation on most of the important community libraries, and the [clojure toolbox](https://www.clojure-toolbox.com) which is a directory of useful libraries.

The official docs are there in the repl for you, along with the source and apropos:
```clojure
$ clj
Clojure 1.10.1
user=> (doc map)
-------------------------
clojure.core/map
([f] [f coll] [f c1 c2] [f c1 c2 c3] [f c1 c2 c3 & colls])
  Returns a lazy sequence consisting of the result of applying f to
  the set of first items of each coll, followed by applying f to the
  set of second items in each coll, until any one of the colls is
  exhausted.  Any remaining items in other colls are ignored. Function
  f should accept number-of-colls arguments. Returns a transducer when
  no collection is provided.
nil
user=> (source identity)
(defn identity
  "Returns its argument."
  {:added "1.0"
   :static true}
  [x] x)
nil
user=> (apropos "filter")
(clojure.core/filter clojure.core/filterv)
user=>
```
So, no, you don't have to be online to read the docs.

The official docs could, IMO be considered aimed at masters, but I'd say that between the resources I've listed above, a beginner should also be catered to.

### I hit problem X, Will I find help in the official docs, or the faq, or the community, or should I be putting random stuff into Google
One nice thing about Clojure is that if you put random stuff into Google and you find an answer from 2007 (when Clojure was first released) it is most likely still valid, as Clojure is earily backwards compatible, 
which means you can trust old advice. As for the official docs, I don't think they'll help you much with your day to day problems, but both the #clojure and #beginners channels are populated with friendly experts who will be able to help you on your way.


### How do I debug? Will doing anything other than "breaking into a repl" be like pulling teeth?
I generally debug using `println` and also, since you generally program functionally, where you separate pure and sideffective functions, debugging in the repl is pretty sweet.
Especially since Clojure is all about [repl-driven development](https://vimeo.com/223309989)


### Testing. Is unit testing part of the core library?
Yes it is. [clojure.test](https://clojure.github.io/clojure/clojure.test-api.html)
Clojure has great support for [property based testing](https://github.com/clojure/test.check), where [clojure.spec](https://www.clojure.org/about/spec) can be used to generate values for us. Read more about that [here](http://www.adamfrey.me/posts/datomic-prop-testing-part-1.html)

As for test runners. Tests are just normal functions which are annotated with `test` metadata, so you can easily run them in your repl. Having said that, most of the Clojure plugins come with some test integrations, and they basically work. Otherwise, both `lein` and `boot` come with ways of running the tests in the terminal, and with [test.runner](https://github.com/cognitect-labs/test-runner) you can make `clj` run your tests as well.
I also have to mention [kaocha](https://github.com/lambdaisland/kaocha) which is the newest, coolest kid on the block.

### How do I build? How do I package? How do I manage my environment?
Building is not really neccesary, as runing a Clojure program is as simple as:
```sh
$ clj foo.clj
```
given that you have a file called `foo.clj` which contains a valid Clojure program.
As for the rest of the questions in this section, I believe this is answered elsewhere in the post, a part from the fact that yes, you will need to interact with other humans to figure out which of the competing libs are best for your use case.

### So... the language community
Yes, you'll have to, as already mentioned, join Yet Another Slack. There is also [Clojureverse](https://clojureverse.org) where a lot of the Clojure community hang out.
This community has a reputation of being friendly and helpful, which I think stems from what Rich Hickey [wrote](https://clojure.org/community/etiquette) years ago on how he wanted the community to behave.

