// Compiled by ClojureScript 1.9.14 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__20399__auto__,writer__20400__auto__,opt__20401__auto__){
return cljs.core._write.call(null,writer__20400__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__20937__auto__ = [];
var len__20930__auto___22360 = arguments.length;
var i__20931__auto___22361 = (0);
while(true){
if((i__20931__auto___22361 < len__20930__auto___22360)){
args__20937__auto__.push((arguments[i__20931__auto___22361]));

var G__22362 = (i__20931__auto___22361 + (1));
i__20931__auto___22361 = G__22362;
continue;
} else {
}
break;
}

var argseq__20938__auto__ = ((((0) < args__20937__auto__.length))?(new cljs.core.IndexedSeq(args__20937__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__20938__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq22359){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22359));
});
cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__20937__auto__ = [];
var len__20930__auto___22364 = arguments.length;
var i__20931__auto___22365 = (0);
while(true){
if((i__20931__auto___22365 < len__20930__auto___22364)){
args__20937__auto__.push((arguments[i__20931__auto___22365]));

var G__22366 = (i__20931__auto___22365 + (1));
i__20931__auto___22365 = G__22366;
continue;
} else {
}
break;
}

var argseq__20938__auto__ = ((((0) < args__20937__auto__.length))?(new cljs.core.IndexedSeq(args__20937__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__20938__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq22363){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22363));
});
var g_QMARK__22367 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_22368 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__22367){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__22367))
,null));
var mkg_22369 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__22367,g_22368){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__22367,g_22368))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__22367,g_22368,mkg_22369){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__22367).call(null,x);
});})(g_QMARK__22367,g_22368,mkg_22369))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__22367,g_22368,mkg_22369){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_22369).call(null,gfn);
});})(g_QMARK__22367,g_22368,mkg_22369))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__22367,g_22368,mkg_22369){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_22368).call(null,generator);
});})(g_QMARK__22367,g_22368,mkg_22369))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__22331__auto___22385 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__22331__auto___22385){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__20937__auto__ = [];
var len__20930__auto___22386 = arguments.length;
var i__20931__auto___22387 = (0);
while(true){
if((i__20931__auto___22387 < len__20930__auto___22386)){
args__20937__auto__.push((arguments[i__20931__auto___22387]));

var G__22388 = (i__20931__auto___22387 + (1));
i__20931__auto___22387 = G__22388;
continue;
} else {
}
break;
}

var argseq__20938__auto__ = ((((0) < args__20937__auto__.length))?(new cljs.core.IndexedSeq(args__20937__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__20938__auto__);
});})(g__22331__auto___22385))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22331__auto___22385){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__22331__auto___22385),args);
});})(g__22331__auto___22385))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__22331__auto___22385){
return (function (seq22370){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22370));
});})(g__22331__auto___22385))
;

var g__22331__auto___22389 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__22331__auto___22389){
return (function cljs$spec$impl$gen$list(var_args){
var args__20937__auto__ = [];
var len__20930__auto___22390 = arguments.length;
var i__20931__auto___22391 = (0);
while(true){
if((i__20931__auto___22391 < len__20930__auto___22390)){
args__20937__auto__.push((arguments[i__20931__auto___22391]));

var G__22392 = (i__20931__auto___22391 + (1));
i__20931__auto___22391 = G__22392;
continue;
} else {
}
break;
}

var argseq__20938__auto__ = ((((0) < args__20937__auto__.length))?(new cljs.core.IndexedSeq(args__20937__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__20938__auto__);
});})(g__22331__auto___22389))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22331__auto___22389){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__22331__auto___22389),args);
});})(g__22331__auto___22389))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__22331__auto___22389){
return (function (seq22371){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22371));
});})(g__22331__auto___22389))
;

var g__22331__auto___22393 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__22331__auto___22393){
return (function cljs$spec$impl$gen$map(var_args){
var args__20937__auto__ = [];
var len__20930__auto___22394 = arguments.length;
var i__20931__auto___22395 = (0);
while(true){
if((i__20931__auto___22395 < len__20930__auto___22394)){
args__20937__auto__.push((arguments[i__20931__auto___22395]));

var G__22396 = (i__20931__auto___22395 + (1));
i__20931__auto___22395 = G__22396;
continue;
} else {
}
break;
}

var argseq__20938__auto__ = ((((0) < args__20937__auto__.length))?(new cljs.core.IndexedSeq(args__20937__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__20938__auto__);
});})(g__22331__auto___22393))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22331__auto___22393){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__22331__auto___22393),args);
});})(g__22331__auto___22393))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__22331__auto___22393){
return (function (seq22372){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22372));
});})(g__22331__auto___22393))
;

var g__22331__auto___22397 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__22331__auto___22397){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__20937__auto__ = [];
var len__20930__auto___22398 = arguments.length;
var i__20931__auto___22399 = (0);
while(true){
if((i__20931__auto___22399 < len__20930__auto___22398)){
args__20937__auto__.push((arguments[i__20931__auto___22399]));

var G__22400 = (i__20931__auto___22399 + (1));
i__20931__auto___22399 = G__22400;
continue;
} else {
}
break;
}

var argseq__20938__auto__ = ((((0) < args__20937__auto__.length))?(new cljs.core.IndexedSeq(args__20937__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__20938__auto__);
});})(g__22331__auto___22397))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22331__auto___22397){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__22331__auto___22397),args);
});})(g__22331__auto___22397))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__22331__auto___22397){
return (function (seq22373){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22373));
});})(g__22331__auto___22397))
;

var g__22331__auto___22401 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__22331__auto___22401){
return (function cljs$spec$impl$gen$set(var_args){
var args__20937__auto__ = [];
var len__20930__auto___22402 = arguments.length;
var i__20931__auto___22403 = (0);
while(true){
if((i__20931__auto___22403 < len__20930__auto___22402)){
args__20937__auto__.push((arguments[i__20931__auto___22403]));

var G__22404 = (i__20931__auto___22403 + (1));
i__20931__auto___22403 = G__22404;
continue;
} else {
}
break;
}

var argseq__20938__auto__ = ((((0) < args__20937__auto__.length))?(new cljs.core.IndexedSeq(args__20937__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__20938__auto__);
});})(g__22331__auto___22401))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22331__auto___22401){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__22331__auto___22401),args);
});})(g__22331__auto___22401))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__22331__auto___22401){
return (function (seq22374){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22374));
});})(g__22331__auto___22401))
;

var g__22331__auto___22405 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__22331__auto___22405){
return (function cljs$spec$impl$gen$vector(var_args){
var args__20937__auto__ = [];
var len__20930__auto___22406 = arguments.length;
var i__20931__auto___22407 = (0);
while(true){
if((i__20931__auto___22407 < len__20930__auto___22406)){
args__20937__auto__.push((arguments[i__20931__auto___22407]));

var G__22408 = (i__20931__auto___22407 + (1));
i__20931__auto___22407 = G__22408;
continue;
} else {
}
break;
}

var argseq__20938__auto__ = ((((0) < args__20937__auto__.length))?(new cljs.core.IndexedSeq(args__20937__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__20938__auto__);
});})(g__22331__auto___22405))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22331__auto___22405){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__22331__auto___22405),args);
});})(g__22331__auto___22405))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__22331__auto___22405){
return (function (seq22375){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22375));
});})(g__22331__auto___22405))
;

var g__22331__auto___22409 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__22331__auto___22409){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__20937__auto__ = [];
var len__20930__auto___22410 = arguments.length;
var i__20931__auto___22411 = (0);
while(true){
if((i__20931__auto___22411 < len__20930__auto___22410)){
args__20937__auto__.push((arguments[i__20931__auto___22411]));

var G__22412 = (i__20931__auto___22411 + (1));
i__20931__auto___22411 = G__22412;
continue;
} else {
}
break;
}

var argseq__20938__auto__ = ((((0) < args__20937__auto__.length))?(new cljs.core.IndexedSeq(args__20937__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__20938__auto__);
});})(g__22331__auto___22409))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22331__auto___22409){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__22331__auto___22409),args);
});})(g__22331__auto___22409))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__22331__auto___22409){
return (function (seq22376){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22376));
});})(g__22331__auto___22409))
;

var g__22331__auto___22413 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__22331__auto___22413){
return (function cljs$spec$impl$gen$elements(var_args){
var args__20937__auto__ = [];
var len__20930__auto___22414 = arguments.length;
var i__20931__auto___22415 = (0);
while(true){
if((i__20931__auto___22415 < len__20930__auto___22414)){
args__20937__auto__.push((arguments[i__20931__auto___22415]));

var G__22416 = (i__20931__auto___22415 + (1));
i__20931__auto___22415 = G__22416;
continue;
} else {
}
break;
}

var argseq__20938__auto__ = ((((0) < args__20937__auto__.length))?(new cljs.core.IndexedSeq(args__20937__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__20938__auto__);
});})(g__22331__auto___22413))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22331__auto___22413){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__22331__auto___22413),args);
});})(g__22331__auto___22413))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__22331__auto___22413){
return (function (seq22377){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22377));
});})(g__22331__auto___22413))
;

var g__22331__auto___22417 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__22331__auto___22417){
return (function cljs$spec$impl$gen$bind(var_args){
var args__20937__auto__ = [];
var len__20930__auto___22418 = arguments.length;
var i__20931__auto___22419 = (0);
while(true){
if((i__20931__auto___22419 < len__20930__auto___22418)){
args__20937__auto__.push((arguments[i__20931__auto___22419]));

var G__22420 = (i__20931__auto___22419 + (1));
i__20931__auto___22419 = G__22420;
continue;
} else {
}
break;
}

var argseq__20938__auto__ = ((((0) < args__20937__auto__.length))?(new cljs.core.IndexedSeq(args__20937__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__20938__auto__);
});})(g__22331__auto___22417))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22331__auto___22417){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__22331__auto___22417),args);
});})(g__22331__auto___22417))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__22331__auto___22417){
return (function (seq22378){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22378));
});})(g__22331__auto___22417))
;

var g__22331__auto___22421 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__22331__auto___22421){
return (function cljs$spec$impl$gen$choose(var_args){
var args__20937__auto__ = [];
var len__20930__auto___22422 = arguments.length;
var i__20931__auto___22423 = (0);
while(true){
if((i__20931__auto___22423 < len__20930__auto___22422)){
args__20937__auto__.push((arguments[i__20931__auto___22423]));

var G__22424 = (i__20931__auto___22423 + (1));
i__20931__auto___22423 = G__22424;
continue;
} else {
}
break;
}

var argseq__20938__auto__ = ((((0) < args__20937__auto__.length))?(new cljs.core.IndexedSeq(args__20937__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__20938__auto__);
});})(g__22331__auto___22421))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22331__auto___22421){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__22331__auto___22421),args);
});})(g__22331__auto___22421))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__22331__auto___22421){
return (function (seq22379){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22379));
});})(g__22331__auto___22421))
;

var g__22331__auto___22425 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__22331__auto___22425){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__20937__auto__ = [];
var len__20930__auto___22426 = arguments.length;
var i__20931__auto___22427 = (0);
while(true){
if((i__20931__auto___22427 < len__20930__auto___22426)){
args__20937__auto__.push((arguments[i__20931__auto___22427]));

var G__22428 = (i__20931__auto___22427 + (1));
i__20931__auto___22427 = G__22428;
continue;
} else {
}
break;
}

var argseq__20938__auto__ = ((((0) < args__20937__auto__.length))?(new cljs.core.IndexedSeq(args__20937__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__20938__auto__);
});})(g__22331__auto___22425))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22331__auto___22425){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__22331__auto___22425),args);
});})(g__22331__auto___22425))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__22331__auto___22425){
return (function (seq22380){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22380));
});})(g__22331__auto___22425))
;

var g__22331__auto___22429 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__22331__auto___22429){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__20937__auto__ = [];
var len__20930__auto___22430 = arguments.length;
var i__20931__auto___22431 = (0);
while(true){
if((i__20931__auto___22431 < len__20930__auto___22430)){
args__20937__auto__.push((arguments[i__20931__auto___22431]));

var G__22432 = (i__20931__auto___22431 + (1));
i__20931__auto___22431 = G__22432;
continue;
} else {
}
break;
}

var argseq__20938__auto__ = ((((0) < args__20937__auto__.length))?(new cljs.core.IndexedSeq(args__20937__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__20938__auto__);
});})(g__22331__auto___22429))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22331__auto___22429){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__22331__auto___22429),args);
});})(g__22331__auto___22429))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__22331__auto___22429){
return (function (seq22381){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22381));
});})(g__22331__auto___22429))
;

var g__22331__auto___22433 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__22331__auto___22433){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__20937__auto__ = [];
var len__20930__auto___22434 = arguments.length;
var i__20931__auto___22435 = (0);
while(true){
if((i__20931__auto___22435 < len__20930__auto___22434)){
args__20937__auto__.push((arguments[i__20931__auto___22435]));

var G__22436 = (i__20931__auto___22435 + (1));
i__20931__auto___22435 = G__22436;
continue;
} else {
}
break;
}

var argseq__20938__auto__ = ((((0) < args__20937__auto__.length))?(new cljs.core.IndexedSeq(args__20937__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__20938__auto__);
});})(g__22331__auto___22433))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22331__auto___22433){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__22331__auto___22433),args);
});})(g__22331__auto___22433))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__22331__auto___22433){
return (function (seq22382){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22382));
});})(g__22331__auto___22433))
;

var g__22331__auto___22437 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__22331__auto___22437){
return (function cljs$spec$impl$gen$sample(var_args){
var args__20937__auto__ = [];
var len__20930__auto___22438 = arguments.length;
var i__20931__auto___22439 = (0);
while(true){
if((i__20931__auto___22439 < len__20930__auto___22438)){
args__20937__auto__.push((arguments[i__20931__auto___22439]));

var G__22440 = (i__20931__auto___22439 + (1));
i__20931__auto___22439 = G__22440;
continue;
} else {
}
break;
}

var argseq__20938__auto__ = ((((0) < args__20937__auto__.length))?(new cljs.core.IndexedSeq(args__20937__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__20938__auto__);
});})(g__22331__auto___22437))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22331__auto___22437){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__22331__auto___22437),args);
});})(g__22331__auto___22437))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__22331__auto___22437){
return (function (seq22383){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22383));
});})(g__22331__auto___22437))
;

var g__22331__auto___22441 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__22331__auto___22441){
return (function cljs$spec$impl$gen$return(var_args){
var args__20937__auto__ = [];
var len__20930__auto___22442 = arguments.length;
var i__20931__auto___22443 = (0);
while(true){
if((i__20931__auto___22443 < len__20930__auto___22442)){
args__20937__auto__.push((arguments[i__20931__auto___22443]));

var G__22444 = (i__20931__auto___22443 + (1));
i__20931__auto___22443 = G__22444;
continue;
} else {
}
break;
}

var argseq__20938__auto__ = ((((0) < args__20937__auto__.length))?(new cljs.core.IndexedSeq(args__20937__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__20938__auto__);
});})(g__22331__auto___22441))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22331__auto___22441){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__22331__auto___22441),args);
});})(g__22331__auto___22441))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__22331__auto___22441){
return (function (seq22384){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22384));
});})(g__22331__auto___22441))
;
var g__22344__auto___22466 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__22344__auto___22466){
return (function cljs$spec$impl$gen$any(var_args){
var args__20937__auto__ = [];
var len__20930__auto___22467 = arguments.length;
var i__20931__auto___22468 = (0);
while(true){
if((i__20931__auto___22468 < len__20930__auto___22467)){
args__20937__auto__.push((arguments[i__20931__auto___22468]));

var G__22469 = (i__20931__auto___22468 + (1));
i__20931__auto___22468 = G__22469;
continue;
} else {
}
break;
}

var argseq__20938__auto__ = ((((0) < args__20937__auto__.length))?(new cljs.core.IndexedSeq(args__20937__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__20938__auto__);
});})(g__22344__auto___22466))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22344__auto___22466){
return (function (args){
return cljs.core.deref.call(null,g__22344__auto___22466);
});})(g__22344__auto___22466))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__22344__auto___22466){
return (function (seq22445){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22445));
});})(g__22344__auto___22466))
;

var g__22344__auto___22470 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__22344__auto___22470){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__20937__auto__ = [];
var len__20930__auto___22471 = arguments.length;
var i__20931__auto___22472 = (0);
while(true){
if((i__20931__auto___22472 < len__20930__auto___22471)){
args__20937__auto__.push((arguments[i__20931__auto___22472]));

var G__22473 = (i__20931__auto___22472 + (1));
i__20931__auto___22472 = G__22473;
continue;
} else {
}
break;
}

var argseq__20938__auto__ = ((((0) < args__20937__auto__.length))?(new cljs.core.IndexedSeq(args__20937__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__20938__auto__);
});})(g__22344__auto___22470))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22344__auto___22470){
return (function (args){
return cljs.core.deref.call(null,g__22344__auto___22470);
});})(g__22344__auto___22470))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__22344__auto___22470){
return (function (seq22446){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22446));
});})(g__22344__auto___22470))
;

var g__22344__auto___22474 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__22344__auto___22474){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__20937__auto__ = [];
var len__20930__auto___22475 = arguments.length;
var i__20931__auto___22476 = (0);
while(true){
if((i__20931__auto___22476 < len__20930__auto___22475)){
args__20937__auto__.push((arguments[i__20931__auto___22476]));

var G__22477 = (i__20931__auto___22476 + (1));
i__20931__auto___22476 = G__22477;
continue;
} else {
}
break;
}

var argseq__20938__auto__ = ((((0) < args__20937__auto__.length))?(new cljs.core.IndexedSeq(args__20937__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__20938__auto__);
});})(g__22344__auto___22474))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22344__auto___22474){
return (function (args){
return cljs.core.deref.call(null,g__22344__auto___22474);
});})(g__22344__auto___22474))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__22344__auto___22474){
return (function (seq22447){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22447));
});})(g__22344__auto___22474))
;

var g__22344__auto___22478 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__22344__auto___22478){
return (function cljs$spec$impl$gen$char(var_args){
var args__20937__auto__ = [];
var len__20930__auto___22479 = arguments.length;
var i__20931__auto___22480 = (0);
while(true){
if((i__20931__auto___22480 < len__20930__auto___22479)){
args__20937__auto__.push((arguments[i__20931__auto___22480]));

var G__22481 = (i__20931__auto___22480 + (1));
i__20931__auto___22480 = G__22481;
continue;
} else {
}
break;
}

var argseq__20938__auto__ = ((((0) < args__20937__auto__.length))?(new cljs.core.IndexedSeq(args__20937__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__20938__auto__);
});})(g__22344__auto___22478))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22344__auto___22478){
return (function (args){
return cljs.core.deref.call(null,g__22344__auto___22478);
});})(g__22344__auto___22478))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__22344__auto___22478){
return (function (seq22448){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22448));
});})(g__22344__auto___22478))
;

var g__22344__auto___22482 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__22344__auto___22482){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__20937__auto__ = [];
var len__20930__auto___22483 = arguments.length;
var i__20931__auto___22484 = (0);
while(true){
if((i__20931__auto___22484 < len__20930__auto___22483)){
args__20937__auto__.push((arguments[i__20931__auto___22484]));

var G__22485 = (i__20931__auto___22484 + (1));
i__20931__auto___22484 = G__22485;
continue;
} else {
}
break;
}

var argseq__20938__auto__ = ((((0) < args__20937__auto__.length))?(new cljs.core.IndexedSeq(args__20937__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__20938__auto__);
});})(g__22344__auto___22482))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22344__auto___22482){
return (function (args){
return cljs.core.deref.call(null,g__22344__auto___22482);
});})(g__22344__auto___22482))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__22344__auto___22482){
return (function (seq22449){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22449));
});})(g__22344__auto___22482))
;

var g__22344__auto___22486 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__22344__auto___22486){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__20937__auto__ = [];
var len__20930__auto___22487 = arguments.length;
var i__20931__auto___22488 = (0);
while(true){
if((i__20931__auto___22488 < len__20930__auto___22487)){
args__20937__auto__.push((arguments[i__20931__auto___22488]));

var G__22489 = (i__20931__auto___22488 + (1));
i__20931__auto___22488 = G__22489;
continue;
} else {
}
break;
}

var argseq__20938__auto__ = ((((0) < args__20937__auto__.length))?(new cljs.core.IndexedSeq(args__20937__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__20938__auto__);
});})(g__22344__auto___22486))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22344__auto___22486){
return (function (args){
return cljs.core.deref.call(null,g__22344__auto___22486);
});})(g__22344__auto___22486))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__22344__auto___22486){
return (function (seq22450){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22450));
});})(g__22344__auto___22486))
;

var g__22344__auto___22490 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__22344__auto___22490){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__20937__auto__ = [];
var len__20930__auto___22491 = arguments.length;
var i__20931__auto___22492 = (0);
while(true){
if((i__20931__auto___22492 < len__20930__auto___22491)){
args__20937__auto__.push((arguments[i__20931__auto___22492]));

var G__22493 = (i__20931__auto___22492 + (1));
i__20931__auto___22492 = G__22493;
continue;
} else {
}
break;
}

var argseq__20938__auto__ = ((((0) < args__20937__auto__.length))?(new cljs.core.IndexedSeq(args__20937__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__20938__auto__);
});})(g__22344__auto___22490))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22344__auto___22490){
return (function (args){
return cljs.core.deref.call(null,g__22344__auto___22490);
});})(g__22344__auto___22490))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__22344__auto___22490){
return (function (seq22451){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22451));
});})(g__22344__auto___22490))
;

var g__22344__auto___22494 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__22344__auto___22494){
return (function cljs$spec$impl$gen$double(var_args){
var args__20937__auto__ = [];
var len__20930__auto___22495 = arguments.length;
var i__20931__auto___22496 = (0);
while(true){
if((i__20931__auto___22496 < len__20930__auto___22495)){
args__20937__auto__.push((arguments[i__20931__auto___22496]));

var G__22497 = (i__20931__auto___22496 + (1));
i__20931__auto___22496 = G__22497;
continue;
} else {
}
break;
}

var argseq__20938__auto__ = ((((0) < args__20937__auto__.length))?(new cljs.core.IndexedSeq(args__20937__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__20938__auto__);
});})(g__22344__auto___22494))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22344__auto___22494){
return (function (args){
return cljs.core.deref.call(null,g__22344__auto___22494);
});})(g__22344__auto___22494))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__22344__auto___22494){
return (function (seq22452){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22452));
});})(g__22344__auto___22494))
;

var g__22344__auto___22498 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__22344__auto___22498){
return (function cljs$spec$impl$gen$int(var_args){
var args__20937__auto__ = [];
var len__20930__auto___22499 = arguments.length;
var i__20931__auto___22500 = (0);
while(true){
if((i__20931__auto___22500 < len__20930__auto___22499)){
args__20937__auto__.push((arguments[i__20931__auto___22500]));

var G__22501 = (i__20931__auto___22500 + (1));
i__20931__auto___22500 = G__22501;
continue;
} else {
}
break;
}

var argseq__20938__auto__ = ((((0) < args__20937__auto__.length))?(new cljs.core.IndexedSeq(args__20937__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__20938__auto__);
});})(g__22344__auto___22498))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22344__auto___22498){
return (function (args){
return cljs.core.deref.call(null,g__22344__auto___22498);
});})(g__22344__auto___22498))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__22344__auto___22498){
return (function (seq22453){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22453));
});})(g__22344__auto___22498))
;

var g__22344__auto___22502 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__22344__auto___22502){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__20937__auto__ = [];
var len__20930__auto___22503 = arguments.length;
var i__20931__auto___22504 = (0);
while(true){
if((i__20931__auto___22504 < len__20930__auto___22503)){
args__20937__auto__.push((arguments[i__20931__auto___22504]));

var G__22505 = (i__20931__auto___22504 + (1));
i__20931__auto___22504 = G__22505;
continue;
} else {
}
break;
}

var argseq__20938__auto__ = ((((0) < args__20937__auto__.length))?(new cljs.core.IndexedSeq(args__20937__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__20938__auto__);
});})(g__22344__auto___22502))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22344__auto___22502){
return (function (args){
return cljs.core.deref.call(null,g__22344__auto___22502);
});})(g__22344__auto___22502))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__22344__auto___22502){
return (function (seq22454){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22454));
});})(g__22344__auto___22502))
;

var g__22344__auto___22506 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__22344__auto___22506){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__20937__auto__ = [];
var len__20930__auto___22507 = arguments.length;
var i__20931__auto___22508 = (0);
while(true){
if((i__20931__auto___22508 < len__20930__auto___22507)){
args__20937__auto__.push((arguments[i__20931__auto___22508]));

var G__22509 = (i__20931__auto___22508 + (1));
i__20931__auto___22508 = G__22509;
continue;
} else {
}
break;
}

var argseq__20938__auto__ = ((((0) < args__20937__auto__.length))?(new cljs.core.IndexedSeq(args__20937__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__20938__auto__);
});})(g__22344__auto___22506))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22344__auto___22506){
return (function (args){
return cljs.core.deref.call(null,g__22344__auto___22506);
});})(g__22344__auto___22506))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__22344__auto___22506){
return (function (seq22455){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22455));
});})(g__22344__auto___22506))
;

var g__22344__auto___22510 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__22344__auto___22510){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__20937__auto__ = [];
var len__20930__auto___22511 = arguments.length;
var i__20931__auto___22512 = (0);
while(true){
if((i__20931__auto___22512 < len__20930__auto___22511)){
args__20937__auto__.push((arguments[i__20931__auto___22512]));

var G__22513 = (i__20931__auto___22512 + (1));
i__20931__auto___22512 = G__22513;
continue;
} else {
}
break;
}

var argseq__20938__auto__ = ((((0) < args__20937__auto__.length))?(new cljs.core.IndexedSeq(args__20937__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__20938__auto__);
});})(g__22344__auto___22510))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22344__auto___22510){
return (function (args){
return cljs.core.deref.call(null,g__22344__auto___22510);
});})(g__22344__auto___22510))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__22344__auto___22510){
return (function (seq22456){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22456));
});})(g__22344__auto___22510))
;

var g__22344__auto___22514 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__22344__auto___22514){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__20937__auto__ = [];
var len__20930__auto___22515 = arguments.length;
var i__20931__auto___22516 = (0);
while(true){
if((i__20931__auto___22516 < len__20930__auto___22515)){
args__20937__auto__.push((arguments[i__20931__auto___22516]));

var G__22517 = (i__20931__auto___22516 + (1));
i__20931__auto___22516 = G__22517;
continue;
} else {
}
break;
}

var argseq__20938__auto__ = ((((0) < args__20937__auto__.length))?(new cljs.core.IndexedSeq(args__20937__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__20938__auto__);
});})(g__22344__auto___22514))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22344__auto___22514){
return (function (args){
return cljs.core.deref.call(null,g__22344__auto___22514);
});})(g__22344__auto___22514))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__22344__auto___22514){
return (function (seq22457){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22457));
});})(g__22344__auto___22514))
;

var g__22344__auto___22518 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__22344__auto___22518){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__20937__auto__ = [];
var len__20930__auto___22519 = arguments.length;
var i__20931__auto___22520 = (0);
while(true){
if((i__20931__auto___22520 < len__20930__auto___22519)){
args__20937__auto__.push((arguments[i__20931__auto___22520]));

var G__22521 = (i__20931__auto___22520 + (1));
i__20931__auto___22520 = G__22521;
continue;
} else {
}
break;
}

var argseq__20938__auto__ = ((((0) < args__20937__auto__.length))?(new cljs.core.IndexedSeq(args__20937__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__20938__auto__);
});})(g__22344__auto___22518))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22344__auto___22518){
return (function (args){
return cljs.core.deref.call(null,g__22344__auto___22518);
});})(g__22344__auto___22518))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__22344__auto___22518){
return (function (seq22458){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22458));
});})(g__22344__auto___22518))
;

var g__22344__auto___22522 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__22344__auto___22522){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__20937__auto__ = [];
var len__20930__auto___22523 = arguments.length;
var i__20931__auto___22524 = (0);
while(true){
if((i__20931__auto___22524 < len__20930__auto___22523)){
args__20937__auto__.push((arguments[i__20931__auto___22524]));

var G__22525 = (i__20931__auto___22524 + (1));
i__20931__auto___22524 = G__22525;
continue;
} else {
}
break;
}

var argseq__20938__auto__ = ((((0) < args__20937__auto__.length))?(new cljs.core.IndexedSeq(args__20937__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__20938__auto__);
});})(g__22344__auto___22522))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22344__auto___22522){
return (function (args){
return cljs.core.deref.call(null,g__22344__auto___22522);
});})(g__22344__auto___22522))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__22344__auto___22522){
return (function (seq22459){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22459));
});})(g__22344__auto___22522))
;

var g__22344__auto___22526 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__22344__auto___22526){
return (function cljs$spec$impl$gen$string(var_args){
var args__20937__auto__ = [];
var len__20930__auto___22527 = arguments.length;
var i__20931__auto___22528 = (0);
while(true){
if((i__20931__auto___22528 < len__20930__auto___22527)){
args__20937__auto__.push((arguments[i__20931__auto___22528]));

var G__22529 = (i__20931__auto___22528 + (1));
i__20931__auto___22528 = G__22529;
continue;
} else {
}
break;
}

var argseq__20938__auto__ = ((((0) < args__20937__auto__.length))?(new cljs.core.IndexedSeq(args__20937__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__20938__auto__);
});})(g__22344__auto___22526))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22344__auto___22526){
return (function (args){
return cljs.core.deref.call(null,g__22344__auto___22526);
});})(g__22344__auto___22526))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__22344__auto___22526){
return (function (seq22460){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22460));
});})(g__22344__auto___22526))
;

var g__22344__auto___22530 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__22344__auto___22530){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__20937__auto__ = [];
var len__20930__auto___22531 = arguments.length;
var i__20931__auto___22532 = (0);
while(true){
if((i__20931__auto___22532 < len__20930__auto___22531)){
args__20937__auto__.push((arguments[i__20931__auto___22532]));

var G__22533 = (i__20931__auto___22532 + (1));
i__20931__auto___22532 = G__22533;
continue;
} else {
}
break;
}

var argseq__20938__auto__ = ((((0) < args__20937__auto__.length))?(new cljs.core.IndexedSeq(args__20937__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__20938__auto__);
});})(g__22344__auto___22530))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22344__auto___22530){
return (function (args){
return cljs.core.deref.call(null,g__22344__auto___22530);
});})(g__22344__auto___22530))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__22344__auto___22530){
return (function (seq22461){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22461));
});})(g__22344__auto___22530))
;

var g__22344__auto___22534 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__22344__auto___22534){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__20937__auto__ = [];
var len__20930__auto___22535 = arguments.length;
var i__20931__auto___22536 = (0);
while(true){
if((i__20931__auto___22536 < len__20930__auto___22535)){
args__20937__auto__.push((arguments[i__20931__auto___22536]));

var G__22537 = (i__20931__auto___22536 + (1));
i__20931__auto___22536 = G__22537;
continue;
} else {
}
break;
}

var argseq__20938__auto__ = ((((0) < args__20937__auto__.length))?(new cljs.core.IndexedSeq(args__20937__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__20938__auto__);
});})(g__22344__auto___22534))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22344__auto___22534){
return (function (args){
return cljs.core.deref.call(null,g__22344__auto___22534);
});})(g__22344__auto___22534))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__22344__auto___22534){
return (function (seq22462){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22462));
});})(g__22344__auto___22534))
;

var g__22344__auto___22538 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__22344__auto___22538){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__20937__auto__ = [];
var len__20930__auto___22539 = arguments.length;
var i__20931__auto___22540 = (0);
while(true){
if((i__20931__auto___22540 < len__20930__auto___22539)){
args__20937__auto__.push((arguments[i__20931__auto___22540]));

var G__22541 = (i__20931__auto___22540 + (1));
i__20931__auto___22540 = G__22541;
continue;
} else {
}
break;
}

var argseq__20938__auto__ = ((((0) < args__20937__auto__.length))?(new cljs.core.IndexedSeq(args__20937__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__20938__auto__);
});})(g__22344__auto___22538))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22344__auto___22538){
return (function (args){
return cljs.core.deref.call(null,g__22344__auto___22538);
});})(g__22344__auto___22538))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__22344__auto___22538){
return (function (seq22463){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22463));
});})(g__22344__auto___22538))
;

var g__22344__auto___22542 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__22344__auto___22542){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__20937__auto__ = [];
var len__20930__auto___22543 = arguments.length;
var i__20931__auto___22544 = (0);
while(true){
if((i__20931__auto___22544 < len__20930__auto___22543)){
args__20937__auto__.push((arguments[i__20931__auto___22544]));

var G__22545 = (i__20931__auto___22544 + (1));
i__20931__auto___22544 = G__22545;
continue;
} else {
}
break;
}

var argseq__20938__auto__ = ((((0) < args__20937__auto__.length))?(new cljs.core.IndexedSeq(args__20937__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__20938__auto__);
});})(g__22344__auto___22542))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22344__auto___22542){
return (function (args){
return cljs.core.deref.call(null,g__22344__auto___22542);
});})(g__22344__auto___22542))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__22344__auto___22542){
return (function (seq22464){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22464));
});})(g__22344__auto___22542))
;

var g__22344__auto___22546 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__22344__auto___22546){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__20937__auto__ = [];
var len__20930__auto___22547 = arguments.length;
var i__20931__auto___22548 = (0);
while(true){
if((i__20931__auto___22548 < len__20930__auto___22547)){
args__20937__auto__.push((arguments[i__20931__auto___22548]));

var G__22549 = (i__20931__auto___22548 + (1));
i__20931__auto___22548 = G__22549;
continue;
} else {
}
break;
}

var argseq__20938__auto__ = ((((0) < args__20937__auto__.length))?(new cljs.core.IndexedSeq(args__20937__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__20938__auto__);
});})(g__22344__auto___22546))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22344__auto___22546){
return (function (args){
return cljs.core.deref.call(null,g__22344__auto___22546);
});})(g__22344__auto___22546))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__22344__auto___22546){
return (function (seq22465){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22465));
});})(g__22344__auto___22546))
;
/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__20937__auto__ = [];
var len__20930__auto___22552 = arguments.length;
var i__20931__auto___22553 = (0);
while(true){
if((i__20931__auto___22553 < len__20930__auto___22552)){
args__20937__auto__.push((arguments[i__20931__auto___22553]));

var G__22554 = (i__20931__auto___22553 + (1));
i__20931__auto___22553 = G__22554;
continue;
} else {
}
break;
}

var argseq__20938__auto__ = ((((0) < args__20937__auto__.length))?(new cljs.core.IndexedSeq(args__20937__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__20938__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__22550_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__22550_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq22551){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22551));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.char_QMARK_,cljs.core.sequential_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.zero_QMARK_,cljs.core.nil_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.number_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map?rel=1513106855383