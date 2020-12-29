I started my life as a professional programmer using [awk](https://en.wikipedia.org/wiki/AWK).
From there I continued with [Perl](https://www.perl.org), and then I switched to Java, before I 
ended up where I am now, in [Clojure](https://www.clojure.org).

One of the core principles in Clojure is [simplicity](https://www.youtube.com/watch?v=oytL881p-nQ). 
Things should do just one thing, and simple is something different than easy. Easy is almost frowned upon.

Yet as I started out, in awk, awk was chosen because of how easy it was to use it to solve our problem.
Basically we had to run through a bunch of csv-files and do some manipulations on it. This is basically
what awk was made for. Perhaps not simple, but certainly easy.

As I ventured on to Perl, ease was leading my way. String manipulation with Perl was easy, and also writing
CGI-scripts was easy. You could easilh install new modules from cpan, your query parameters were easily available,
everything was great. Well, maybe not maintaining the scripts written, but that's another story.

So in about 1999 I made the switch to Java. It was a pain. Where in awk, printing the names of all the users
on my system was easy:

```awk
BEGIN {FS = ":"}
{print $5}
```
and you could invoke this with

```sh
awk -f foo.awk /etc/passwd
```

Similarily in Perl, this was trivial:
```sh
perl -lne 'print ((split /:/)[4])' /etc/passwd

```
allthough, I'm incapable of reading this code.

What about Java then? At least prior to Java 7(?) printing the lines of a file was never easy, but it 
was _simple_. WHere awk and Perl gave you pre-assembled building blocks to make that specific operation easy, Java just gave you
the building blocks and let you assemble them to suit your use case:
```java
import java.io.*;


public class Foo {

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new FileReader("/etc/passwd"));
        String line;
        while ((line = br.readLine()) != null) {
           String [] tmp = line.split(":");
           System.out.println(tmp[4]);
        }
    }
}
```
And, truth be told, I couldn't even be bothered trying to get this running while writing this blog post,
it's just too much pain.

So while the Java version is far from easy, it's very simple. You can read a file in any manner you want,
if you're able to (understand and) combine the different readers and streams and whatever. Somehting that
was not easy in awk nor in Perl.

So when I started programming Clojure, it was not simplicity that got me into it. It was ease:
```clojure
(require '[clojure.string :as str])

(->> (slurp "/etc/passwd")
     (str/split-lines)
     (remove (fn [l] (str/starts-with? l "#")))
     (map (fn [l] (str/split l #":")))
     (map (fn [l] (nth l 4)))
     (run! println))
```
`slurp` did exactly what I needed. `split-lines` also is easy, and, as it happens, running this in the repl
is also easy these days. In fact, running this in the repl showed me a bug in my java implmentation, because
`/etc/passwd` can contain comments:
```sh
##
# User Database
# 
# Note that this file is consulted directly only when the system is running
# in single-user mode.  At other times this information is provided by
# Open Directory.
#
# See the opendirectoryd(8) man page for additional information about
# Open Directory.
##
```
which we need to skip. 

Now you could easily argue that the Clojure version is somewhat more work than both the Perl and the awk versions,
but still, compared to Java it is quite easy. And as an added bonus you can get the simpleness as well.

In my first Clojure project, other things were quite easy. It was a mixed Java and Clojure project.
This was made easy with [lein](https://leiningen.org) which took care of compiling both Java and Clojure sources.
The [bean](https://clojuredocs.org/clojure.core/bean) fn made going from Java to Clojure painless, as did
[pmap](https://clojuredocs.org/clojure.core/pmap), although I should probably have gone for the simpler building blocks
to acheive true parallelism.

So what can we conclude from this? I think it's fair to say that both simple and easy are important aspects
when you're designing things, and I believe that to a large extent, the Clojure standard libarary has managed
to provide both. Common things are easy, but the easy parts are built on top of simple things which you can drop down to
when you need to.

Put in another way. It's easy to build easy from simple, but not to build simple from easy.

