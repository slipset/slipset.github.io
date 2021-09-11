---
layout: post
title:  "Dependency injection, perhaps? Part 3"
date:   2021-09-11
categories: Design
---

Ardoq is a multi-tenant SaaS application. This means that we have, well, multiple tenants (organizations in Ardoq parlance) to which users are connected. The important bit here is that we need to guarantee data isolation between our organizations. This has been solved by having in MongoDb terms, a _database_ pr organization. So when we get a request from a browser, we figure out which user this request belongs to, what her organization is, and then we make the corresponding database available to the code that handles the request.

So, in this series on dependency injection, the interesting question how do we make the database available to the code that handles the request.

When I arrived at Ardoq, the communication with the database was organized around the [DAO](https://en.wikipedia.org/wiki/Data_access_object) pattern. The dao was implemented as such:

```clj
(ns ardoq.persistence.foo-store ...)

(defn find-by-id [system id]
   ...)
```

Each entity in the system had its corresponding ns, and its corresponding Component. We will get back to why this was a Component when we look at how mutating the database was being done.

Which to some extent is great, because, say you wanted to swap database, you only need to change your DAO layer, at least in theory. But that's a digression we might get back to in some other post.

It's also not so great because this creates a proliferation of Components which serve no other purpose than to convey the organization database. And it makes it harder to reason about the code, because, in order to understand what `(find-by-id system id)` is _capable_ of doing, you need to read the code of `find-by-id`

If we examine closer what these dao-functions looked like, they were all quite similar (focussing on query here):

```clj
(defn find-by-id [system id]
   (mc/find-one-as-map (:org-db system) "foo" {:_id (ObjectId. id)}))
   
(defn find-by-name [system name]
   (mc/find-maps (:org-db system) "foo" {:name "name"}))
``` 

I'm digression (again), but as the observant reader will already have seen, there are two interesting bits that vary between these two fns

1. How many things you expect to get back (one vs many)
2. The query

So if you can handle the isolation of the database impl in other ways, you can separate these things:

```clj
(defn by-id [id]
  {:_id (ObjectId. id)})

(defn by-name [name]
  {:name name})
```

Now, there are several upsides to doing it this way

1. Your queries, which is the stuff that tends to grow in complexity, become pure functions which return data, so they're actually unit-testable.
2. You can now _combine_ queries, in our case with `merge`:
```clj
(defn by-id-and-name [id name]
  (merge (by-id id) (by-name name)))
```
3. You can reduce the number of side-effecting datababase-hiding query-functions in your code base to two:
    1. `query-one!`
    2. `query!`
   
   while still hiding the implementation details of your chosen database.

But, this series is not about hiding implementation details about your database, it's about how to reduce Components in your system.

So, no matter how you choose to do this, you need to at some point give the function which interacts with the database a handle to that database. Previously we did it by `assoc`ing the org-database to the `system`, what are we doing now?

The insight, which of course is not very novel, is that every request runs in some sort of _context_. In our case, it's in the context of a user and an org, so we have this simple function which is `req->context` which takes a request and returns us a context containing the org-db and the running user.

Now, _context_ being such a [weasel word](https://en.wikipedia.org/wiki/Weasel_word) it means all and nothing, and is suceptible to grow over time to something at least as unweildly as the System itself. So, this is a constant concern we have, is that just because it's convenient, we try to limit the amount of new stuff we stick in the context. We've been fairly successful at that.

So what does our code look like now?

For querying functions our code follows this pattern:

```clj
(repo/query! foo-repo/config ctx (foo-repo/by-name "a name")) 
```

the `foo-repo/config` holds some data which are important for us, such as collection-names (table-names in sql), the `ctx` holds the handle to the organization-db and the running user, and we've chosen to organize the queries in ns's pr entity-type, with some common queries like `by-id` and `by-ids` in a common ns.

So, what does this give us?

1. I know at a glance that a fn that only calls `repo/query!` does not mutate data, nor does it send out emails or launch missiles, whereas a function which called `(foo-store/find-by-name! system "a name")` could do whatever, I'd have to read the source of `find-by-id` to figure out exactly what it does. In most cases it would do what you'd expect, in rare cases, it might launch missiles.
2. By convention I know that any fn that only takes a `ctx` and some other _non scary_ parameters, only reads the database:
```clj
(some-ns/do-whatever ctx arg1 arg2)
```
is a read only fn and doesn't perform other sideffects than reading from the database
3. We still have isolated the implementation detail that is our database vendor. 

What has not been mentioned here is how we mutate the database. I guess that will be the next post.
