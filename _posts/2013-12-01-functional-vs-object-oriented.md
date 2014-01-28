---
layout: post
title:  "Functional vs object oriented"
date:   2013-11-01 17:38:00
categories: ramblings
---

As a mainly programmer working in mainly in Java, but also using Ext.js for frontend development, most of our code is object-oriented, that is stuff like:

{% highlight javascript %}
Ext.define('app.model.room.Room', {
    extend: 'Ext.data.Model',

    ...

    isFooEnabled: function () {
        return !!this.get('fooEnabled');
    },
});
{% endhighlight %}

Which, when you code in a normal, oo/imperative style, leads to code like this:

{% highlight javascript %}
giefFooRooms: function (rooms) {
   var fooRooms = [];
   for (var i = 0; i < rooms.length; i = i + 1) {
       if (rooms[i].isFooEnabled()) {
          fooRooms.push(rooms[i]);
       }
    }
    return fooRooms;               
}
{% endhighlight %}
Having an interest in functional programming, and not being able to switch to Scala at my day-time job, I often try to write this in a more functional manner, like:

{% highlight javascript %}
giefFooRooms: function (rooms) {
     rooms.filter(function (r) { return r.isFooEnabled(); });
}
{% endhighlight %}

Which leads me to my problem. Since in a more functional setting, you'd implemented this like:

{% highlight javascript %}
fooEnabledp: function (room) {
     return !!room.get('fooEnabled');
}

giefFooRooms: function (rooms) {
     rooms.filter(this.fooEnabledp);
}
{% endhighlight %}

Which leads to some sort of a break in paradigm, since the former is an example of enriching data with functionality (albeit a simple one in this example) and the latter is an example of functions operating on data, and mixing the two paradigms in one project sort of give me a head ache.

To round this off, here's another example of this one impelemented in Javascript, which shows the extra boilerplate code needed in a non-functional language, and the other in emacs-lisp which shows how it should be done.

{% highlight javascript %}
["a", "b", "c"].map(function (s) { return s.toUpperCase();});
//=> ["A", "B", "C"]`
{% endhighlight %}

{% highlight lisp %}
(mapcar  'upcase '("a" "b" "c"))
;=> ("A" "B" "C")
{% endhighlight %}