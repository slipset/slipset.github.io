// Compiled by ClojureScript 1.9.14 {}
goog.provide('re_frame.subs');
goog.require('cljs.core');
goog.require('reagent.ratom');
goog.require('re_frame.db');
goog.require('re_frame.utils');
re_frame.subs.key__GT_fn = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Unregisters all subscription handlers
 */
re_frame.subs.clear_handlers_BANG_ = (function re_frame$subs$clear_handlers_BANG_(){
return cljs.core.reset_BANG_.call(null,re_frame.subs.key__GT_fn,cljs.core.PersistentArrayMap.EMPTY);
});
/**
 * Registers a handler function for an id
 */
re_frame.subs.register = (function re_frame$subs$register(key_v,handler_fn){
if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,re_frame.subs.key__GT_fn),key_v)){
re_frame.utils.warn.call(null,"re-frame: overwriting subscription-handler for: ",key_v);
} else {
}

return cljs.core.swap_BANG_.call(null,re_frame.subs.key__GT_fn,cljs.core.assoc,key_v,handler_fn);
});
/**
 * Returns a reagent/reaction which observes a part of app-db
 */
re_frame.subs.subscribe = (function re_frame$subs$subscribe(var_args){
var args21790 = [];
var len__20930__auto___21794 = arguments.length;
var i__20931__auto___21795 = (0);
while(true){
if((i__20931__auto___21795 < len__20930__auto___21794)){
args21790.push((arguments[i__20931__auto___21795]));

var G__21796 = (i__20931__auto___21795 + (1));
i__20931__auto___21795 = G__21796;
continue;
} else {
}
break;
}

var G__21792 = args21790.length;
switch (G__21792) {
case 1:
return re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21790.length)].join('')));

}
});

re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$1 = (function (v){
var key_v = re_frame.utils.first_in_vector.call(null,v);
var handler_fn = cljs.core.get.call(null,cljs.core.deref.call(null,re_frame.subs.key__GT_fn),key_v);
if((handler_fn == null)){
return re_frame.utils.error.call(null,"re-frame: no subscription handler registered for: \"",key_v,"\". Returning a nil subscription.");
} else {
return handler_fn.call(null,re_frame.db.app_db,v);
}
});

re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$2 = (function (v,dynv){
var key_v = re_frame.utils.first_in_vector.call(null,v);
var handler_fn = cljs.core.get.call(null,cljs.core.deref.call(null,re_frame.subs.key__GT_fn),key_v);
if(goog.DEBUG){
var temp__6144__auto___21798 = cljs.core.seq.call(null,cljs.core.remove.call(null,((function (key_v,handler_fn){
return (function (p1__21789_SHARP_){
if(!((p1__21789_SHARP_ == null))){
if((false) || (p1__21789_SHARP_.reagent$ratom$IReactiveAtom$)){
return true;
} else {
return false;
}
} else {
return false;
}
});})(key_v,handler_fn))
,dynv));
if(temp__6144__auto___21798){
var not_reactive_21799 = temp__6144__auto___21798;
re_frame.utils.warn.call(null,"re-frame: dynv contained parameters that don't implement IReactiveAtom: ",not_reactive_21799);
} else {
}
} else {
}

if((handler_fn == null)){
return re_frame.utils.error.call(null,"re-frame: no subscription handler registered for: \"",key_v,"\". Returning a nil subscription.");
} else {
var dyn_vals = reagent.ratom.make_reaction.call(null,((function (key_v,handler_fn){
return (function (){
return cljs.core.mapv.call(null,cljs.core.deref,dynv);
});})(key_v,handler_fn))
);
var sub = reagent.ratom.make_reaction.call(null,((function (dyn_vals,key_v,handler_fn){
return (function (){
return handler_fn.call(null,re_frame.db.app_db,v,cljs.core.deref.call(null,dyn_vals));
});})(dyn_vals,key_v,handler_fn))
);
return reagent.ratom.make_reaction.call(null,((function (dyn_vals,sub,key_v,handler_fn){
return (function (){
return cljs.core.deref.call(null,cljs.core.deref.call(null,sub));
});})(dyn_vals,sub,key_v,handler_fn))
);
}
});

re_frame.subs.subscribe.cljs$lang$maxFixedArity = 2;

//# sourceMappingURL=subs.js.map?rel=1513106853202