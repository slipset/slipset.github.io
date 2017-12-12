// Compiled by ClojureScript 1.9.14 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = {};
o.warn = ((function (o){
return (function() { 
var G__21095__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__21095 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21096__i = 0, G__21096__a = new Array(arguments.length -  0);
while (G__21096__i < G__21096__a.length) {G__21096__a[G__21096__i] = arguments[G__21096__i + 0]; ++G__21096__i;}
  args = new cljs.core.IndexedSeq(G__21096__a,0);
} 
return G__21095__delegate.call(this,args);};
G__21095.cljs$lang$maxFixedArity = 0;
G__21095.cljs$lang$applyTo = (function (arglist__21097){
var args = cljs.core.seq(arglist__21097);
return G__21095__delegate(args);
});
G__21095.cljs$core$IFn$_invoke$arity$variadic = G__21095__delegate;
return G__21095;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__21098__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__21098 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21099__i = 0, G__21099__a = new Array(arguments.length -  0);
while (G__21099__i < G__21099__a.length) {G__21099__a[G__21099__i] = arguments[G__21099__i + 0]; ++G__21099__i;}
  args = new cljs.core.IndexedSeq(G__21099__a,0);
} 
return G__21098__delegate.call(this,args);};
G__21098.cljs$lang$maxFixedArity = 0;
G__21098.cljs$lang$applyTo = (function (arglist__21100){
var args = cljs.core.seq(arglist__21100);
return G__21098__delegate(args);
});
G__21098.cljs$core$IFn$_invoke$arity$variadic = G__21098__delegate;
return G__21098;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1513106850722