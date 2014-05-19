---
layout: post
title: Alfresco transactions and side effects
categories: Alfresco
---

Alfresco has this notion of activities, which basically is stuff
that's happened in a room in which you are a member. There is an
activity feed, and there is an email which is sendt out every so often
which tells you what has happened since the last time the email was
sendt.

The latest activity you received news about is stored in the
<code>EMAIL_FEED_ID</code> property on your person object. So every
time an activity email is sent out, this property is updated to
reflect the last activity sent to you.

Unless

The class that does this job, the
[FeedNotifierImpl](http://goo.gl/jeymUa) wraps each users
notification-email-sender-thingy in a [RetryingTransactionHelper](http://goo.gl/YpvGVF). You can see that in
there somewhere (makes you wish this was written in Clojure,
right). Now, the interesting bit is that if you happen to cause an
exception being thrown in while in this transaction, say by executing
{% highlight java %}
try {
    NodeRef p = nodeService.getParentNodeRef(nodeRef);
} catch (Exception e) {
    log.warn("no parent for " + nodeRef);
}
{% endhighlight %}
then, even if you catch it, like shown above, Alfresco will mark the
transaction as to be rolled back. This means that the
<code>EMAIL_FEED_ID</code> will never be updated.

This might just be very correct, apart from the fact that there is
stuff done in this transaction that <em>cannot be rolled back</em>, yes, the
emails, they are already dispatched at the time of the rollback, and
thus our users get activity emails with old activities in them.


 