---
layout: post
title:  "On others code"
date:   2018-07-22 20:17:35
categories: ramblings
---

[Johannes Brodwall](https://www.twitter.com/@jhannes) 
posted [Dirty Code Monday](http://johannesbrodwall.com/2018/07/01/dirty-code-monday/)
on his, eh, blog, to show some of the dirty code he let through, which he otherwise
would not. In this he also highlighted what about the code he thought was dirty.

This lead me to make an unfortunate tweet
<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">What scares me most about the code you’re showing is how tightly coupled the logic is to its environment. A bunch of the values you use in your functions could easily be passed as parameters.</p>&mdash; Erik Assum (@slipset) <a href="https://twitter.com/slipset/status/1013704292862169088?ref_src=twsrc%5Etfw">July 2, 2018</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 
Unfortunate, because I was critizising something that was already pointed out as bad.

Anyways, I thought I'd try to enumerate what I found smelly about the code.
This is kind of hard, since I no longer write Java, and I most certainly don't
know the surroundings of the code in question.

But let's jump into it.

For the first example, I think I would have pulled the `if`-test out of this function, 
and made it accept only a `HttpsURLConnection`:

```java
public static void setupClientCertificate(HttpsURLConnection httpsURLConnection) throws IOException {
    HttpsURLConnection httpsURLConnection = (HttpsURLConnection) httpURLConnection;
    try {
        // TODO: Find out if SSLContext.getSocketFactory is expensive an if so, cache
        httpsURLConnection.setSSLSocketFactory(createSocketFactory(keyStorePath(), keystorePassword(), trustStorePath()));
    } catch (KeyStoreException | CertificateException | NoSuchAlgorithmException | UnrecoverableKeyException | KeyManagementException e) {
        throw new RuntimeException(e);
    }
}
```

Now this code is somewhat logic free, and it's up to the caller to check if we're using 
client certs and make the cast. Still not happy with it though, but I can't really put 
my finger on what bugs me.

For the second example, my biggest problem is that, at least the last time I programmed Java, 
you needed a mock for `HttpServletRequest` to set values on it. And I really dislike mocks.
Therefore, I'd like to rewrite it as

```java
private boolean isValidRequest(String method, String pathInfo) {
    List<String> validPaths = method.equals("GET") ? Configuration.validGetPaths() : Configuration.validPostPaths();
    return pathInfo != null && validPaths.stream().anyMatch(pathInfo::startsWith);
}
```
Now this method has two `String` arguments, not to happy about that either. 

Guess the `method` should have been an `Enum`. 

Also not overly enthused about the whole `Configuration` bit. I guess I would have rewritten to 
`Configuration.validPaths(method);`, which would leave us with:

```java
private boolean isValidRequest(HttpMethod method, String pathInfo) {
    List<String> validPaths = Configuration.validPaths(method);
    return pathInfo != null && validPaths.stream().anyMatch(pathInfo::startsWith);
}
```

Which, in which you could let the caller do the `validPaths` thingy, so it ends up around

```java
private boolean isValidRequest(List<String> validPaths, String pathInfo) {
    return pathInfo != null && validPaths.stream().anyMatch(pathInfo::startsWith);
}
```
And you have a function which is quite testable, and does its one thing.

Anyways, thanks for posting this Johannes, it made me think.









