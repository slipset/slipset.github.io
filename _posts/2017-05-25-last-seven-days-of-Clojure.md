---
layout: post
title: "Last seven days of Clojure"
categories: Clojure
---

Not really sure what this is, but it might just be something I'm starting. It's basically an outsiders view of what's
going on inside Clojure. I'll be looking at what tickets moved in the Clojure Jira, the last seven days, and also comment on
any commits done to the github-repo.

Anyways. The issues updated the last seven days were:

- [CLJ-2060](https://dev.clojure.org/jira/browse/CLJ-2060) Add support for undefining a spec
- [CLJ-2082](https://dev.clojure.org/jira/browse/CLJ-2082) Improve documentation of clojure.walk/walk
- [CLJ-2163](https://dev.clojure.org/jira/browse/CLJ-2163) Add test for var serialization
- [CLJ-2164](https://dev.clojure.org/jira/browse/CLJ-2164) Case fails when a singel clause with an empty test seq is used
- [CLJ-2165](https://dev.clojure.org/jira/browse/CLJ-2165) #clojure/var tag for transmitting var identity
- [CLJ-2166](https://dev.clojure.org/jira/browse/CLJ-2166) Instrument exception doesn't contain funciton name in ex-data

As you can see from the issue-numbers, the last four of these were new issues. So starting with the old ones, what happened?

## Add support for undefining a spec

As the issue states, there is currently no way to remove a spec from the spec registry, and this issue contains the patch to solve 
that. The proposed solution is to let `s/def` accept `nil` to "clear" a spec. The patch basically ads an if-test to `def-impl` and 
`dissoc`s the key from the registry if the spec is `nil`. I guess one could imagine some documentation to be updated along with this.

This weeks update on the issue is that it's now added to the Clojure 1.9 release so it can be considered for that release.

## Improve documentation of clojure.walk/walk

This issue, reported by David Cook on the 11th of December 2016 states that 

> The documentation for the `clojure.walk` module isn't clear on which methods recurse through data structures, and which only
> operate on the outermost layer.

To this Martin Clausen commented:

> The potential recursive behaviour of clojure.walk/walk depends on the inner function passed to it and is 
> not inherent to clojure.walk/walk itself. If you look at the source code for clojure.walk/prewalk and 
> clojure.walk/postwalk, they are both implemented using walk, but passed a recursive inner function.

I'm not sure if I'm supposed to comment on this, but in my opinion, this should be closed unless the reporter comes up with a 
proposal for new documentation.

## Add test for var serialization

Alex Miller recently posted on the [Clojure Dev mailing list](https://groups.google.com/forum/#!topic/clojure-dev/xfFmrVudD98) a 
RFC on var printing. This issue, which already contains a patch which, reading throught it quickly, seems to be a test to make sure 
regressions don't happen while iplementing

## #clojure/var tag for transmitting var identity

This issue, slated for 1.9 states that "Currently one can't send vars around in edn" The proposal is to use `#clojure.var` for a tag.
Alex has added a patch so people can start playing with this to see if (or how) it might break existing code.

The patch adds a new dynamic var `*print-var-tag*`:

> When set to logical true, vars will be printed with the #clojure/var
> tagged literal, otherwise vars print with the #' reader macro.
> -- <cite>clojure.core/*print-var-tag* </cite>

It also defines a new reader, `var-reader` which is called when we see `#clojure/var`.
For the printing part, there's now an if test in place which switches on `*print-var-tag*`, and `print-dup` now prints `#clojure/var` 
unconditionally.

## Case fails when a single single clause with an empty test seq is used

Chris Bloom reports

> I would expect
```clojure
(case 1 
   () :a
   :none)
```   
> to return `:none` instead if tails with an uniformative exception: "Unhandled clojure.lang.ArityException: Wrong number of args (-2) passed to: core/max"
```clojure
 (case 1 
    () :a) 
```
> to fail with an `IllegalArgumentException` but instead this fails with the same exeption as above.

Also, Chris states, 

```clojure
(case 1 
   () :a
   2 :b
   :none)
```

returns `none` as expected.

The attatched [patch](https://dev.clojure.org/jira/secure/attachment/16797/0001.patch), which is a bit too involved for me to go through
adds both a solution and tests.

The comments contain a discussion around some of the edge cases in, well, case.

## Instrumentation exception doesn't contain function name in ex-data

This issue, reported by James Reeves, states that 

> When an instrumented function fails, it throws an IExceptionInfo. 
> The ex-data of this exception contains the arguments that failed, but not the function that was called.

and asks for an extra key like `clojure.spec.alpha/fn` or `clojure.spec.alpha/var`. No patch on this one yet.





