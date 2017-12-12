// Compiled by ClojureScript 1.9.14 {}
goog.provide('re_frame.utils');
goog.require('cljs.core');
goog.require('clojure.set');
re_frame.utils.default_loggers = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"log","log",-1595516004),(function (p1__21707_SHARP_){
return console.log(p1__21707_SHARP_);
}),new cljs.core.Keyword(null,"warn","warn",-436710552),(function (p1__21708_SHARP_){
return console.warn(p1__21708_SHARP_);
}),new cljs.core.Keyword(null,"error","error",-978969032),(function (p1__21709_SHARP_){
return console.error(p1__21709_SHARP_);
}),new cljs.core.Keyword(null,"group","group",582596132),(function (p1__21710_SHARP_){
if(cljs.core.truth_(console.groupCollapsed)){
return console.groupCollapsed(p1__21710_SHARP_);
} else {
return console.log(p1__21710_SHARP_);
}
}),new cljs.core.Keyword(null,"groupEnd","groupEnd",-337721382),(function (){
if(cljs.core.truth_(console.groupEnd)){
return console.groupEnd();
} else {
return null;
}
})], null);
re_frame.utils.loggers = cljs.core.atom.call(null,re_frame.utils.default_loggers);
/**
 * Change the set (subset?) of logging functions used by re-frame.
 *   'new-loggers' should be a map which looks like default-loggers
 */
re_frame.utils.set_loggers_BANG_ = (function re_frame$utils$set_loggers_BANG_(new_loggers){
if(cljs.core.empty_QMARK_.call(null,clojure.set.difference.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,new_loggers)),cljs.core.set.call(null,cljs.core.keys.call(null,re_frame.utils.default_loggers))))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Unknown keys in new-loggers"),cljs.core.str("\n"),cljs.core.str("(empty? (difference (set (keys new-loggers)) (set (keys default-loggers))))")].join('')));
}

return cljs.core.swap_BANG_.call(null,re_frame.utils.loggers,cljs.core.merge,new_loggers);
});
re_frame.utils.log = (function re_frame$utils$log(var_args){
var args__20937__auto__ = [];
var len__20930__auto___21712 = arguments.length;
var i__20931__auto___21713 = (0);
while(true){
if((i__20931__auto___21713 < len__20930__auto___21712)){
args__20937__auto__.push((arguments[i__20931__auto___21713]));

var G__21714 = (i__20931__auto___21713 + (1));
i__20931__auto___21713 = G__21714;
continue;
} else {
}
break;
}

var argseq__20938__auto__ = ((((0) < args__20937__auto__.length))?(new cljs.core.IndexedSeq(args__20937__auto__.slice((0)),(0),null)):null);
return re_frame.utils.log.cljs$core$IFn$_invoke$arity$variadic(argseq__20938__auto__);
});

re_frame.utils.log.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return new cljs.core.Keyword(null,"log","log",-1595516004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.utils.loggers)).call(null,cljs.core.apply.call(null,cljs.core.str,args));
});

re_frame.utils.log.cljs$lang$maxFixedArity = (0);

re_frame.utils.log.cljs$lang$applyTo = (function (seq21711){
return re_frame.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21711));
});
re_frame.utils.warn = (function re_frame$utils$warn(var_args){
var args__20937__auto__ = [];
var len__20930__auto___21716 = arguments.length;
var i__20931__auto___21717 = (0);
while(true){
if((i__20931__auto___21717 < len__20930__auto___21716)){
args__20937__auto__.push((arguments[i__20931__auto___21717]));

var G__21718 = (i__20931__auto___21717 + (1));
i__20931__auto___21717 = G__21718;
continue;
} else {
}
break;
}

var argseq__20938__auto__ = ((((0) < args__20937__auto__.length))?(new cljs.core.IndexedSeq(args__20937__auto__.slice((0)),(0),null)):null);
return re_frame.utils.warn.cljs$core$IFn$_invoke$arity$variadic(argseq__20938__auto__);
});

re_frame.utils.warn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return new cljs.core.Keyword(null,"warn","warn",-436710552).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.utils.loggers)).call(null,cljs.core.apply.call(null,cljs.core.str,args));
});

re_frame.utils.warn.cljs$lang$maxFixedArity = (0);

re_frame.utils.warn.cljs$lang$applyTo = (function (seq21715){
return re_frame.utils.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21715));
});
re_frame.utils.group = (function re_frame$utils$group(var_args){
var args__20937__auto__ = [];
var len__20930__auto___21720 = arguments.length;
var i__20931__auto___21721 = (0);
while(true){
if((i__20931__auto___21721 < len__20930__auto___21720)){
args__20937__auto__.push((arguments[i__20931__auto___21721]));

var G__21722 = (i__20931__auto___21721 + (1));
i__20931__auto___21721 = G__21722;
continue;
} else {
}
break;
}

var argseq__20938__auto__ = ((((0) < args__20937__auto__.length))?(new cljs.core.IndexedSeq(args__20937__auto__.slice((0)),(0),null)):null);
return re_frame.utils.group.cljs$core$IFn$_invoke$arity$variadic(argseq__20938__auto__);
});

re_frame.utils.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.utils.loggers)).call(null,cljs.core.apply.call(null,cljs.core.str,args));
});

re_frame.utils.group.cljs$lang$maxFixedArity = (0);

re_frame.utils.group.cljs$lang$applyTo = (function (seq21719){
return re_frame.utils.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21719));
});
re_frame.utils.groupEnd = (function re_frame$utils$groupEnd(var_args){
var args__20937__auto__ = [];
var len__20930__auto___21724 = arguments.length;
var i__20931__auto___21725 = (0);
while(true){
if((i__20931__auto___21725 < len__20930__auto___21724)){
args__20937__auto__.push((arguments[i__20931__auto___21725]));

var G__21726 = (i__20931__auto___21725 + (1));
i__20931__auto___21725 = G__21726;
continue;
} else {
}
break;
}

var argseq__20938__auto__ = ((((0) < args__20937__auto__.length))?(new cljs.core.IndexedSeq(args__20937__auto__.slice((0)),(0),null)):null);
return re_frame.utils.groupEnd.cljs$core$IFn$_invoke$arity$variadic(argseq__20938__auto__);
});

re_frame.utils.groupEnd.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return new cljs.core.Keyword(null,"groupEnd","groupEnd",-337721382).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.utils.loggers)).call(null,cljs.core.apply.call(null,cljs.core.str,args));
});

re_frame.utils.groupEnd.cljs$lang$maxFixedArity = (0);

re_frame.utils.groupEnd.cljs$lang$applyTo = (function (seq21723){
return re_frame.utils.groupEnd.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21723));
});
re_frame.utils.error = (function re_frame$utils$error(var_args){
var args__20937__auto__ = [];
var len__20930__auto___21728 = arguments.length;
var i__20931__auto___21729 = (0);
while(true){
if((i__20931__auto___21729 < len__20930__auto___21728)){
args__20937__auto__.push((arguments[i__20931__auto___21729]));

var G__21730 = (i__20931__auto___21729 + (1));
i__20931__auto___21729 = G__21730;
continue;
} else {
}
break;
}

var argseq__20938__auto__ = ((((0) < args__20937__auto__.length))?(new cljs.core.IndexedSeq(args__20937__auto__.slice((0)),(0),null)):null);
return re_frame.utils.error.cljs$core$IFn$_invoke$arity$variadic(argseq__20938__auto__);
});

re_frame.utils.error.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.utils.loggers)).call(null,cljs.core.apply.call(null,cljs.core.str,args));
});

re_frame.utils.error.cljs$lang$maxFixedArity = (0);

re_frame.utils.error.cljs$lang$applyTo = (function (seq21727){
return re_frame.utils.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21727));
});
re_frame.utils.first_in_vector = (function re_frame$utils$first_in_vector(v){
if(cljs.core.vector_QMARK_.call(null,v)){
return cljs.core.first.call(null,v);
} else {
return re_frame.utils.error.call(null,"re-frame: expected a vector event, but got: ",v);
}
});

//# sourceMappingURL=utils.js.map?rel=1513106852949