In my [previous](https://slipset.github.io/posts/the-problem-i-dont-have) I contrasted two different ways of approaching 
JSON (de)serialization. In [this](https://purelyfunctional.tv/issues/purelyfunctional-tv-newsletter-364-tip-seek-the-model-and-enshrine-it-in-code/) Eric Normand
discusses different ways of doing CSV parsers. Basically, these are two posts are about the same thing. It's about where you draw the line.
I think that in [Einars](https://twitter.com/einarwh) words, you'd say that it's about drawing the line between the bounded and the unbounded problem.

So listening to David Nolen on the [Defn podcast](https://soundcloud.com/defn-771544745/60-4th-anniversary-episode-return-of-david-nolen-aka-swannodette), I think
David puts it rather nicely. You want to design your libraries in such a way that they can be done. You do this by enforcing as few
assumptions as possible on the downstream consumer.

So to bring us back to the beginning. For JSON (de)serialization, it means you take a string of JSON and you produce data and attach no meaning to that data.
Attaching meaning to the data is the job of the consumer. Your responsability as a library author is to make it simple and possible 
for your consumers to do so. For parsing CSV it's exactly the same thing. you take a string of CSV and you produce data without meaning. 
The consumer gets to decide if the first row is a header-row or not.

Basically. It boils down to designing simple things which do one thing well and which compose nicely with other things.

I think there is another post brewing on why configurable and general are not the same thing...
