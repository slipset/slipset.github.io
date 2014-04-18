---
layout: post
title: "Thoughts on getting CLojure into the enterprise"
categories: Clojure
---

[@odinodin](https://twitter.com/odinodin) pointed me to
[@neal4d](https://twitter.com/neal4d) talk on [Introducing Clojure to
the enterprise](http://t.co/kdQSlHQKIa). Having watched it I want to
bring forward some of my own thoughts on the matter.

#Guerilla tactics
Neal (I hope he's okay with my using his first name, Mr. Ford sounds
so formal, and people might confuse him with Harisson) talks about Cat
burglary in his talk, where you let unknown tech piggyback on known
tech, as a strategy for getting Clojure in the door. Personally I have
greater confidence in some sort of guerilla tactics, that is, find
some small project on the side that noone actually cares to much about
and implement it in Clojure, and when you're done (ahead of schedule)
you ask for forgiveness.

#The worries of the CTO
I'd disagree with Neal in the assumption that the reason the CTO is
reluctant to choose Clojure is because she's scared of being fired. In
Norway, it's impossible to get fired, so it can't be the reason.

I believe that a good CTO is worried about how to best contribute to
her company making money. So, if I were a CTO, I'd definitively rule
out a total rewrite of an existing Java application, that's just
foolish. So in order to get Clojure in the door, you need to find an
area of your application which is kind of isolated that you can
implement new stuff in Clojure.

Also, your CTO will be worried about who else can maintain the code
you wrote. When you leave your company to work for Cognitect, who's
going to understand the super-dense code you wrote using zippers and
partial functions? Because, you need to remember, she hired the
cheapest, not the brightest, developers she could get her hands on (so
what are you doing there, anyways?).

Imagine she let's you start with Clojure, she'll also have to
bring the other devs up to speed on Clojure, and guess what, that
costs money. Just because you're willing to teach yourself Clojure on
your spare time, doesn't mean all your colleagues are willing to do
the same.

So the argument you need to be able to make to the CTO is that by
adopting Clojure, you and your coworkers will deliver value so much
faster that it actually makes up for the investment she has to make to
get your team up to speed in Clojure.

Which brings me to the need for

#Success stories
I guess more stuff like [this](http://goo.gl/IbYAOn) from [Jay
Fields](https://www.twitter.com/thejayfields) is needed (even though
it scares the hell out of me), but I also need the facts to show that
a team using Clojure delivers more software cheaper than a similar
team using Java.

