The other day I was doing some pair REPLing with my colleague Sophie.
Basically, I asked her for some various functions that, at first, she didn’t quite understand the point of, but eventually, it became clear. 
On the way to work today, after grabbing a coffee over at Tim’s, we talked a bit about category theory and similar stuff, as one does, and we realized that what we had done in the REPL was sort of a structure.

So the problem was that we had a bunch of things, some of which were incorrect. So I asked Sophie for a function `has-error?` that returns truthy if a thing was incorrect and falsy otherwise. This is useful because it can then be used with  `filter`, `remove` and `keep`. Especially for the latter, truthy is cool because `has-error?` can then return information about what it considers the error to be.

The next function I asked for was `fix-error`. This one takes an object plus maybe some additional input and returns a new object that doesn’t have the error.

What’s kind of cool about this is that `(-> object has-error? fix-error has-error?)` is falsy, so in theory,
one could write generative tests for this.

Finally, I asked for a `persist!` function, which takes a database connection and an object and ensures that it gets persisted to the database.

What I think is really cool about this approach is that you can test all the functions (perhaps except for persist!, but that one should be free of difficult logic) without corrupting data, and you can verify it on an individual object level before applying it to all the objects.

I think that, in the Java world, it would have been more natural to write a 
```java
public static void fix-error(Database db) {… }
```
 that does everything or nothing.

So what does this have to do with category theory? Well, in category theory, you give names to structures made up of objects, operations on them, and “laws.” It could have been cool to tell Sophie that we were now going to create an “error-fixer structure,” and that she would then know she had to deliver a predicate, a mapper, and that there was a relationship between the predicate and the mapper.

And, how did the clojure version of the `public static void fixErrors` function turn out?
Rather simple I'd say.
```clj
(doseq [thing (map fix-error (filter has-error? things))] (persister! db thing))
```

