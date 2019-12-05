---
layout: post
title:  "Code over configuration"
date:   2019-12-05
categories: Advent of Parens
---

So yesterday, life got the better part of me, so I didn't prioritize writing a post, but today I'm on it again.

One of my great frustrations is how we try to "configure" things, using languages like XML, JSON, and YAML.
This approach works great for smaller things, but once you're into something of significant size, 
these languages show their limitations: No loops, no conditionals, no variables, so string interpolation is bolted on.

A long time ago [Tommy Hall](https://twitter.com/thattommyhall) gave a great [presentation](https://vimeo.com/100425264)
where he argues you should build DSLs in layers, so you always have the ability to drop down a level if you need to do something more
complicated. Tommy uses examples from teaching kids in his talk, and it resonates well with me at the moment, as my kids are 
learning [Scratch](https://scratch.mit.edu) at school these days. Because while Scratch is great, I don't see how you evolve from 
Scratch to "real programming". There is [tosh](https://tosh.blob.codes/app/), which is promising, but I'd love to see something like
that _integrated_ in Scratch itself. 

Tying this back to infrastructure as code, I'm really happy to [see](https://www.youtube.com/watch?v=TbDmupZyuXk). 
[clj-cdk](https://github.com/StediInc/cdk-clj) seems really promising, allthough I could imagine it'd be hard to get ops-people
away from YAML.
