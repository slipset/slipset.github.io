---
layout: post
title:  "What I want from a good api"
date:   2014-01-28 09:17:35
categories: ramblings
---

<p>Christian Johansen tweeted </p>

<blockquote lang="en">
<p>What's your favorite API documentation?</p>— Christian Johansen (@cjno) <a href="https://twitter.com/cjno/statuses/428040954965422080">January 28, 2014</a>
</blockquote>

<p>this morning to which I answered </p>

<blockquote lang="en">
<p><a href="https://twitter.com/cjno">@cjno</a> The source</p>— Erik Assum (<a href="https://github.com/slipset" class="user-mention">@slipset</a>) <a href="https://twitter.com/slipset/statuses/428050172728578048">January 28, 2014</a>
</blockquote>

He obviously was not impressed by that answer, so that got me thinking, what do I want out of a good api (documentation)

First and foremost, I want an api which lets me do what I need to do without learning everything about the api before getting my stuff done. So to start off, with one of the examples that Christian brought up in a later tweet, say I wanted to do something with Facebook.

First of all I'd like to have a client library in my favourite language so I could say something like:

{% highlight javascript %}
var fb = Facebook.login('john@doe.com', password);

fb.friends().map(function (f) {console.log("this is my friend " + f )};
fb.news().map(function (n) {console.log("this is my wall " + n )};

var friend = fb.findFriend({firstName: 'Ola', lastName: 'Dunk'});
fb.post(f, {title: 'Hi Ola', text: 'Check out this cool api'});

fb.logout();
{% endhighlight %}
Having no idea what the Facebook api looks like, but some of the things I want: I want an api which speaks in the clients language and which is optimized for the clients tasks.

So I guess for an api like this I would like some tutorials which showed me how to achieve some common tasks, and then, yes, I'd love to be able to see the code behind it, so I could figure out how to do the stuff the api-designer didn't know I wanted to do.

So to answer @cjno, the documentation I want for an api is a set of annotated, <em>working</em>, tutorials which show me how common tasks are achieved. If I then also could have access to the sources, I'd be as happy as could be. <a href="http://harshen.github.io/jquery-share/">This</a> is probably a good example.
