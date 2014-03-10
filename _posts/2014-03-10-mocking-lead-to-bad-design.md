---
layout: post
title:  "Mocking leads to bad design"
date:   2014-03-10 
categories: ramblings
---
[@mfeathers](https://twitter.com/mfeathers) wrote an
[article](http://michaelfeathers.typepad.com/michael_feathers_blog/2008/06/the-flawed-theo.html)
back in 2008 about Unit Testing in which he, if I understood him
correctly, amongst other things say that it doesn't matter too much if
you unit-test or not, as long as you think carefully about your code.

But that's not the point of this post. The reason I bring up Michael
Feathers article is that it talks extensivly about mocking as a good
thing.

And I've been wondering lately if mocking is a bad thing.

#A bit of background
When evaluating the effects of writing unit-tests, something I only do
very informally (the evaluating, that is), I've found that I'm unsure
about how many errors the tests catch. And I find that the least
interesting part about the unit-tests.

The interesting bit is that they force the developer to write code
that's easy to test. And code that's easy to test is also easy to
maintain.

Let's consider the following code snippet from some code I have laying
around. The following fifteen lines are part of a 66 line function
ridled with ifs, elses, and buts.

{% highlight javascript %}
if (params.foo) {
	app.util.MyUtil.setLanguage(function () {
	app.events.fireEvent('showDetails', params);
	}, me);
} else {
	if (params.bar) {
		app.util.MyUtil.setLanguage(function () {
			me.dologin();
		}, me);
	} else {
		app.util.MyUtil.setLanguage(function () {
			me.isLoggedIn();
		}, me);
	}
}
{% endhighlight %}

In order to write tests for this, you'd have to split it up into
smaller, more manageble pieces.

Unless you introduce mocks.

Because if you introduce mocks you can test the code like:
{% highlight javascript %}
describe("my example", function () {
	it("calls setLanguage when params.foo is true", function () {
		var spy = spyOn(app.util.MyUtil, "setLanguage"),
		    params = {foo: true};

		util.myFunc(params);
		expect(app.util.MyUtil.setLanguage).toHaveBeenCalled();
	});
});
{% endhighlight %}

#The same thing in Java
In Javacode I often see stuff like
{% highlight java %}
public void foo(List<Bar> bars) {
   for (Bar bar: bars) {
     bar.setBaz(bar.getBaz() + 1);
   }
   persister.perist(bars);
}
{% endhighlight %}

So to test this, you need to break out the Mocks, mock out the
persister, and verify that it is called with a list of bars in which
baz has been incremented by one.

##How would I write this code?
I'd I would like to pull out the mutating bit so you get something
like this:
{% highlight java %}
public void foo(List<Bar> bars) {
  for (Bar bar: bars) {
     incBaz(bar);
   }
   persister.perist(bars);
}
{% endhighlight %}

This way you can test the `incBaz` method in total isolation, and IMO,
you now got a better design.

