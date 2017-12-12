// Compiled by ClojureScript 1.9.14 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args24699 = [];
var len__20930__auto___24705 = arguments.length;
var i__20931__auto___24706 = (0);
while(true){
if((i__20931__auto___24706 < len__20930__auto___24705)){
args24699.push((arguments[i__20931__auto___24706]));

var G__24707 = (i__20931__auto___24706 + (1));
i__20931__auto___24706 = G__24707;
continue;
} else {
}
break;
}

var G__24701 = args24699.length;
switch (G__24701) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24699.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async24702 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24702 = (function (f,blockable,meta24703){
this.f = f;
this.blockable = blockable;
this.meta24703 = meta24703;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24702.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24704,meta24703__$1){
var self__ = this;
var _24704__$1 = this;
return (new cljs.core.async.t_cljs$core$async24702(self__.f,self__.blockable,meta24703__$1));
});

cljs.core.async.t_cljs$core$async24702.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24704){
var self__ = this;
var _24704__$1 = this;
return self__.meta24703;
});

cljs.core.async.t_cljs$core$async24702.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async24702.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async24702.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async24702.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async24702.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta24703","meta24703",-1448084190,null)], null);
});

cljs.core.async.t_cljs$core$async24702.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24702.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24702";

cljs.core.async.t_cljs$core$async24702.cljs$lang$ctorPrWriter = (function (this__20399__auto__,writer__20400__auto__,opt__20401__auto__){
return cljs.core._write.call(null,writer__20400__auto__,"cljs.core.async/t_cljs$core$async24702");
});

cljs.core.async.__GT_t_cljs$core$async24702 = (function cljs$core$async$__GT_t_cljs$core$async24702(f__$1,blockable__$1,meta24703){
return (new cljs.core.async.t_cljs$core$async24702(f__$1,blockable__$1,meta24703));
});

}

return (new cljs.core.async.t_cljs$core$async24702(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args24711 = [];
var len__20930__auto___24714 = arguments.length;
var i__20931__auto___24715 = (0);
while(true){
if((i__20931__auto___24715 < len__20930__auto___24714)){
args24711.push((arguments[i__20931__auto___24715]));

var G__24716 = (i__20931__auto___24715 + (1));
i__20931__auto___24715 = G__24716;
continue;
} else {
}
break;
}

var G__24713 = args24711.length;
switch (G__24713) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24711.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args24718 = [];
var len__20930__auto___24721 = arguments.length;
var i__20931__auto___24722 = (0);
while(true){
if((i__20931__auto___24722 < len__20930__auto___24721)){
args24718.push((arguments[i__20931__auto___24722]));

var G__24723 = (i__20931__auto___24722 + (1));
i__20931__auto___24722 = G__24723;
continue;
} else {
}
break;
}

var G__24720 = args24718.length;
switch (G__24720) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24718.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args24725 = [];
var len__20930__auto___24728 = arguments.length;
var i__20931__auto___24729 = (0);
while(true){
if((i__20931__auto___24729 < len__20930__auto___24728)){
args24725.push((arguments[i__20931__auto___24729]));

var G__24730 = (i__20931__auto___24729 + (1));
i__20931__auto___24729 = G__24730;
continue;
} else {
}
break;
}

var G__24727 = args24725.length;
switch (G__24727) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24725.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_24732 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_24732);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_24732,ret){
return (function (){
return fn1.call(null,val_24732);
});})(val_24732,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args24733 = [];
var len__20930__auto___24736 = arguments.length;
var i__20931__auto___24737 = (0);
while(true){
if((i__20931__auto___24737 < len__20930__auto___24736)){
args24733.push((arguments[i__20931__auto___24737]));

var G__24738 = (i__20931__auto___24737 + (1));
i__20931__auto___24737 = G__24738;
continue;
} else {
}
break;
}

var G__24735 = args24733.length;
switch (G__24735) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24733.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__6142__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__6142__auto__)){
var ret = temp__6142__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__6142__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__6142__auto__)){
var retb = temp__6142__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__6142__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__6142__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__20760__auto___24740 = n;
var x_24741 = (0);
while(true){
if((x_24741 < n__20760__auto___24740)){
(a[x_24741] = (0));

var G__24742 = (x_24741 + (1));
x_24741 = G__24742;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__24743 = (i + (1));
i = G__24743;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async24747 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24747 = (function (alt_flag,flag,meta24748){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta24748 = meta24748;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24747.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_24749,meta24748__$1){
var self__ = this;
var _24749__$1 = this;
return (new cljs.core.async.t_cljs$core$async24747(self__.alt_flag,self__.flag,meta24748__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async24747.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_24749){
var self__ = this;
var _24749__$1 = this;
return self__.meta24748;
});})(flag))
;

cljs.core.async.t_cljs$core$async24747.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async24747.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async24747.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async24747.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async24747.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta24748","meta24748",1983021707,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async24747.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24747.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24747";

cljs.core.async.t_cljs$core$async24747.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__20399__auto__,writer__20400__auto__,opt__20401__auto__){
return cljs.core._write.call(null,writer__20400__auto__,"cljs.core.async/t_cljs$core$async24747");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async24747 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async24747(alt_flag__$1,flag__$1,meta24748){
return (new cljs.core.async.t_cljs$core$async24747(alt_flag__$1,flag__$1,meta24748));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async24747(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async24753 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24753 = (function (alt_handler,flag,cb,meta24754){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta24754 = meta24754;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24753.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24755,meta24754__$1){
var self__ = this;
var _24755__$1 = this;
return (new cljs.core.async.t_cljs$core$async24753(self__.alt_handler,self__.flag,self__.cb,meta24754__$1));
});

cljs.core.async.t_cljs$core$async24753.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24755){
var self__ = this;
var _24755__$1 = this;
return self__.meta24754;
});

cljs.core.async.t_cljs$core$async24753.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async24753.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async24753.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async24753.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async24753.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta24754","meta24754",-650138684,null)], null);
});

cljs.core.async.t_cljs$core$async24753.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24753.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24753";

cljs.core.async.t_cljs$core$async24753.cljs$lang$ctorPrWriter = (function (this__20399__auto__,writer__20400__auto__,opt__20401__auto__){
return cljs.core._write.call(null,writer__20400__auto__,"cljs.core.async/t_cljs$core$async24753");
});

cljs.core.async.__GT_t_cljs$core$async24753 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async24753(alt_handler__$1,flag__$1,cb__$1,meta24754){
return (new cljs.core.async.t_cljs$core$async24753(alt_handler__$1,flag__$1,cb__$1,meta24754));
});

}

return (new cljs.core.async.t_cljs$core$async24753(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24756_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24756_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24757_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24757_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__19747__auto__ = wport;
if(cljs.core.truth_(or__19747__auto__)){
return or__19747__auto__;
} else {
return port;
}
})()], null));
} else {
var G__24758 = (i + (1));
i = G__24758;
continue;
}
} else {
return null;
}
break;
}
})();
var or__19747__auto__ = ret;
if(cljs.core.truth_(or__19747__auto__)){
return or__19747__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__6144__auto__ = (function (){var and__19735__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__19735__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__19735__auto__;
}
})();
if(cljs.core.truth_(temp__6144__auto__)){
var got = temp__6144__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__20937__auto__ = [];
var len__20930__auto___24764 = arguments.length;
var i__20931__auto___24765 = (0);
while(true){
if((i__20931__auto___24765 < len__20930__auto___24764)){
args__20937__auto__.push((arguments[i__20931__auto___24765]));

var G__24766 = (i__20931__auto___24765 + (1));
i__20931__auto___24765 = G__24766;
continue;
} else {
}
break;
}

var argseq__20938__auto__ = ((((1) < args__20937__auto__.length))?(new cljs.core.IndexedSeq(args__20937__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20938__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__24761){
var map__24762 = p__24761;
var map__24762__$1 = ((((!((map__24762 == null)))?((((map__24762.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24762.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24762):map__24762);
var opts = map__24762__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq24759){
var G__24760 = cljs.core.first.call(null,seq24759);
var seq24759__$1 = cljs.core.next.call(null,seq24759);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24760,seq24759__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args24767 = [];
var len__20930__auto___24817 = arguments.length;
var i__20931__auto___24818 = (0);
while(true){
if((i__20931__auto___24818 < len__20930__auto___24817)){
args24767.push((arguments[i__20931__auto___24818]));

var G__24819 = (i__20931__auto___24818 + (1));
i__20931__auto___24818 = G__24819;
continue;
} else {
}
break;
}

var G__24769 = args24767.length;
switch (G__24769) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24767.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__24640__auto___24821 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24640__auto___24821){
return (function (){
var f__24641__auto__ = (function (){var switch__24526__auto__ = ((function (c__24640__auto___24821){
return (function (state_24793){
var state_val_24794 = (state_24793[(1)]);
if((state_val_24794 === (7))){
var inst_24789 = (state_24793[(2)]);
var state_24793__$1 = state_24793;
var statearr_24795_24822 = state_24793__$1;
(statearr_24795_24822[(2)] = inst_24789);

(statearr_24795_24822[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24794 === (1))){
var state_24793__$1 = state_24793;
var statearr_24796_24823 = state_24793__$1;
(statearr_24796_24823[(2)] = null);

(statearr_24796_24823[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24794 === (4))){
var inst_24772 = (state_24793[(7)]);
var inst_24772__$1 = (state_24793[(2)]);
var inst_24773 = (inst_24772__$1 == null);
var state_24793__$1 = (function (){var statearr_24797 = state_24793;
(statearr_24797[(7)] = inst_24772__$1);

return statearr_24797;
})();
if(cljs.core.truth_(inst_24773)){
var statearr_24798_24824 = state_24793__$1;
(statearr_24798_24824[(1)] = (5));

} else {
var statearr_24799_24825 = state_24793__$1;
(statearr_24799_24825[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24794 === (13))){
var state_24793__$1 = state_24793;
var statearr_24800_24826 = state_24793__$1;
(statearr_24800_24826[(2)] = null);

(statearr_24800_24826[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24794 === (6))){
var inst_24772 = (state_24793[(7)]);
var state_24793__$1 = state_24793;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24793__$1,(11),to,inst_24772);
} else {
if((state_val_24794 === (3))){
var inst_24791 = (state_24793[(2)]);
var state_24793__$1 = state_24793;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24793__$1,inst_24791);
} else {
if((state_val_24794 === (12))){
var state_24793__$1 = state_24793;
var statearr_24801_24827 = state_24793__$1;
(statearr_24801_24827[(2)] = null);

(statearr_24801_24827[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24794 === (2))){
var state_24793__$1 = state_24793;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24793__$1,(4),from);
} else {
if((state_val_24794 === (11))){
var inst_24782 = (state_24793[(2)]);
var state_24793__$1 = state_24793;
if(cljs.core.truth_(inst_24782)){
var statearr_24802_24828 = state_24793__$1;
(statearr_24802_24828[(1)] = (12));

} else {
var statearr_24803_24829 = state_24793__$1;
(statearr_24803_24829[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24794 === (9))){
var state_24793__$1 = state_24793;
var statearr_24804_24830 = state_24793__$1;
(statearr_24804_24830[(2)] = null);

(statearr_24804_24830[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24794 === (5))){
var state_24793__$1 = state_24793;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24805_24831 = state_24793__$1;
(statearr_24805_24831[(1)] = (8));

} else {
var statearr_24806_24832 = state_24793__$1;
(statearr_24806_24832[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24794 === (14))){
var inst_24787 = (state_24793[(2)]);
var state_24793__$1 = state_24793;
var statearr_24807_24833 = state_24793__$1;
(statearr_24807_24833[(2)] = inst_24787);

(statearr_24807_24833[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24794 === (10))){
var inst_24779 = (state_24793[(2)]);
var state_24793__$1 = state_24793;
var statearr_24808_24834 = state_24793__$1;
(statearr_24808_24834[(2)] = inst_24779);

(statearr_24808_24834[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24794 === (8))){
var inst_24776 = cljs.core.async.close_BANG_.call(null,to);
var state_24793__$1 = state_24793;
var statearr_24809_24835 = state_24793__$1;
(statearr_24809_24835[(2)] = inst_24776);

(statearr_24809_24835[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24640__auto___24821))
;
return ((function (switch__24526__auto__,c__24640__auto___24821){
return (function() {
var cljs$core$async$state_machine__24527__auto__ = null;
var cljs$core$async$state_machine__24527__auto____0 = (function (){
var statearr_24813 = [null,null,null,null,null,null,null,null];
(statearr_24813[(0)] = cljs$core$async$state_machine__24527__auto__);

(statearr_24813[(1)] = (1));

return statearr_24813;
});
var cljs$core$async$state_machine__24527__auto____1 = (function (state_24793){
while(true){
var ret_value__24528__auto__ = (function (){try{while(true){
var result__24529__auto__ = switch__24526__auto__.call(null,state_24793);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24529__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24529__auto__;
}
break;
}
}catch (e24814){if((e24814 instanceof Object)){
var ex__24530__auto__ = e24814;
var statearr_24815_24836 = state_24793;
(statearr_24815_24836[(5)] = ex__24530__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24793);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24814;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24837 = state_24793;
state_24793 = G__24837;
continue;
} else {
return ret_value__24528__auto__;
}
break;
}
});
cljs$core$async$state_machine__24527__auto__ = function(state_24793){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24527__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24527__auto____1.call(this,state_24793);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24527__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24527__auto____0;
cljs$core$async$state_machine__24527__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24527__auto____1;
return cljs$core$async$state_machine__24527__auto__;
})()
;})(switch__24526__auto__,c__24640__auto___24821))
})();
var state__24642__auto__ = (function (){var statearr_24816 = f__24641__auto__.call(null);
(statearr_24816[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24640__auto___24821);

return statearr_24816;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24642__auto__);
});})(c__24640__auto___24821))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__25021){
var vec__25022 = p__25021;
var v = cljs.core.nth.call(null,vec__25022,(0),null);
var p = cljs.core.nth.call(null,vec__25022,(1),null);
var job = vec__25022;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__24640__auto___25204 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24640__auto___25204,res,vec__25022,v,p,job,jobs,results){
return (function (){
var f__24641__auto__ = (function (){var switch__24526__auto__ = ((function (c__24640__auto___25204,res,vec__25022,v,p,job,jobs,results){
return (function (state_25027){
var state_val_25028 = (state_25027[(1)]);
if((state_val_25028 === (1))){
var state_25027__$1 = state_25027;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25027__$1,(2),res,v);
} else {
if((state_val_25028 === (2))){
var inst_25024 = (state_25027[(2)]);
var inst_25025 = cljs.core.async.close_BANG_.call(null,res);
var state_25027__$1 = (function (){var statearr_25029 = state_25027;
(statearr_25029[(7)] = inst_25024);

return statearr_25029;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25027__$1,inst_25025);
} else {
return null;
}
}
});})(c__24640__auto___25204,res,vec__25022,v,p,job,jobs,results))
;
return ((function (switch__24526__auto__,c__24640__auto___25204,res,vec__25022,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24527__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24527__auto____0 = (function (){
var statearr_25033 = [null,null,null,null,null,null,null,null];
(statearr_25033[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24527__auto__);

(statearr_25033[(1)] = (1));

return statearr_25033;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24527__auto____1 = (function (state_25027){
while(true){
var ret_value__24528__auto__ = (function (){try{while(true){
var result__24529__auto__ = switch__24526__auto__.call(null,state_25027);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24529__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24529__auto__;
}
break;
}
}catch (e25034){if((e25034 instanceof Object)){
var ex__24530__auto__ = e25034;
var statearr_25035_25205 = state_25027;
(statearr_25035_25205[(5)] = ex__24530__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25027);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25034;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25206 = state_25027;
state_25027 = G__25206;
continue;
} else {
return ret_value__24528__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24527__auto__ = function(state_25027){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24527__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24527__auto____1.call(this,state_25027);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24527__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24527__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24527__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24527__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24527__auto__;
})()
;})(switch__24526__auto__,c__24640__auto___25204,res,vec__25022,v,p,job,jobs,results))
})();
var state__24642__auto__ = (function (){var statearr_25036 = f__24641__auto__.call(null);
(statearr_25036[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24640__auto___25204);

return statearr_25036;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24642__auto__);
});})(c__24640__auto___25204,res,vec__25022,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__25037){
var vec__25038 = p__25037;
var v = cljs.core.nth.call(null,vec__25038,(0),null);
var p = cljs.core.nth.call(null,vec__25038,(1),null);
var job = vec__25038;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__20760__auto___25207 = n;
var __25208 = (0);
while(true){
if((__25208 < n__20760__auto___25207)){
var G__25039_25209 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__25039_25209) {
case "compute":
var c__24640__auto___25211 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25208,c__24640__auto___25211,G__25039_25209,n__20760__auto___25207,jobs,results,process,async){
return (function (){
var f__24641__auto__ = (function (){var switch__24526__auto__ = ((function (__25208,c__24640__auto___25211,G__25039_25209,n__20760__auto___25207,jobs,results,process,async){
return (function (state_25052){
var state_val_25053 = (state_25052[(1)]);
if((state_val_25053 === (1))){
var state_25052__$1 = state_25052;
var statearr_25054_25212 = state_25052__$1;
(statearr_25054_25212[(2)] = null);

(statearr_25054_25212[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25053 === (2))){
var state_25052__$1 = state_25052;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25052__$1,(4),jobs);
} else {
if((state_val_25053 === (3))){
var inst_25050 = (state_25052[(2)]);
var state_25052__$1 = state_25052;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25052__$1,inst_25050);
} else {
if((state_val_25053 === (4))){
var inst_25042 = (state_25052[(2)]);
var inst_25043 = process.call(null,inst_25042);
var state_25052__$1 = state_25052;
if(cljs.core.truth_(inst_25043)){
var statearr_25055_25213 = state_25052__$1;
(statearr_25055_25213[(1)] = (5));

} else {
var statearr_25056_25214 = state_25052__$1;
(statearr_25056_25214[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25053 === (5))){
var state_25052__$1 = state_25052;
var statearr_25057_25215 = state_25052__$1;
(statearr_25057_25215[(2)] = null);

(statearr_25057_25215[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25053 === (6))){
var state_25052__$1 = state_25052;
var statearr_25058_25216 = state_25052__$1;
(statearr_25058_25216[(2)] = null);

(statearr_25058_25216[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25053 === (7))){
var inst_25048 = (state_25052[(2)]);
var state_25052__$1 = state_25052;
var statearr_25059_25217 = state_25052__$1;
(statearr_25059_25217[(2)] = inst_25048);

(statearr_25059_25217[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__25208,c__24640__auto___25211,G__25039_25209,n__20760__auto___25207,jobs,results,process,async))
;
return ((function (__25208,switch__24526__auto__,c__24640__auto___25211,G__25039_25209,n__20760__auto___25207,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24527__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24527__auto____0 = (function (){
var statearr_25063 = [null,null,null,null,null,null,null];
(statearr_25063[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24527__auto__);

(statearr_25063[(1)] = (1));

return statearr_25063;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24527__auto____1 = (function (state_25052){
while(true){
var ret_value__24528__auto__ = (function (){try{while(true){
var result__24529__auto__ = switch__24526__auto__.call(null,state_25052);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24529__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24529__auto__;
}
break;
}
}catch (e25064){if((e25064 instanceof Object)){
var ex__24530__auto__ = e25064;
var statearr_25065_25218 = state_25052;
(statearr_25065_25218[(5)] = ex__24530__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25052);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25064;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25219 = state_25052;
state_25052 = G__25219;
continue;
} else {
return ret_value__24528__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24527__auto__ = function(state_25052){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24527__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24527__auto____1.call(this,state_25052);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24527__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24527__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24527__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24527__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24527__auto__;
})()
;})(__25208,switch__24526__auto__,c__24640__auto___25211,G__25039_25209,n__20760__auto___25207,jobs,results,process,async))
})();
var state__24642__auto__ = (function (){var statearr_25066 = f__24641__auto__.call(null);
(statearr_25066[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24640__auto___25211);

return statearr_25066;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24642__auto__);
});})(__25208,c__24640__auto___25211,G__25039_25209,n__20760__auto___25207,jobs,results,process,async))
);


break;
case "async":
var c__24640__auto___25220 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25208,c__24640__auto___25220,G__25039_25209,n__20760__auto___25207,jobs,results,process,async){
return (function (){
var f__24641__auto__ = (function (){var switch__24526__auto__ = ((function (__25208,c__24640__auto___25220,G__25039_25209,n__20760__auto___25207,jobs,results,process,async){
return (function (state_25079){
var state_val_25080 = (state_25079[(1)]);
if((state_val_25080 === (1))){
var state_25079__$1 = state_25079;
var statearr_25081_25221 = state_25079__$1;
(statearr_25081_25221[(2)] = null);

(statearr_25081_25221[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25080 === (2))){
var state_25079__$1 = state_25079;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25079__$1,(4),jobs);
} else {
if((state_val_25080 === (3))){
var inst_25077 = (state_25079[(2)]);
var state_25079__$1 = state_25079;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25079__$1,inst_25077);
} else {
if((state_val_25080 === (4))){
var inst_25069 = (state_25079[(2)]);
var inst_25070 = async.call(null,inst_25069);
var state_25079__$1 = state_25079;
if(cljs.core.truth_(inst_25070)){
var statearr_25082_25222 = state_25079__$1;
(statearr_25082_25222[(1)] = (5));

} else {
var statearr_25083_25223 = state_25079__$1;
(statearr_25083_25223[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25080 === (5))){
var state_25079__$1 = state_25079;
var statearr_25084_25224 = state_25079__$1;
(statearr_25084_25224[(2)] = null);

(statearr_25084_25224[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25080 === (6))){
var state_25079__$1 = state_25079;
var statearr_25085_25225 = state_25079__$1;
(statearr_25085_25225[(2)] = null);

(statearr_25085_25225[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25080 === (7))){
var inst_25075 = (state_25079[(2)]);
var state_25079__$1 = state_25079;
var statearr_25086_25226 = state_25079__$1;
(statearr_25086_25226[(2)] = inst_25075);

(statearr_25086_25226[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__25208,c__24640__auto___25220,G__25039_25209,n__20760__auto___25207,jobs,results,process,async))
;
return ((function (__25208,switch__24526__auto__,c__24640__auto___25220,G__25039_25209,n__20760__auto___25207,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24527__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24527__auto____0 = (function (){
var statearr_25090 = [null,null,null,null,null,null,null];
(statearr_25090[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24527__auto__);

(statearr_25090[(1)] = (1));

return statearr_25090;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24527__auto____1 = (function (state_25079){
while(true){
var ret_value__24528__auto__ = (function (){try{while(true){
var result__24529__auto__ = switch__24526__auto__.call(null,state_25079);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24529__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24529__auto__;
}
break;
}
}catch (e25091){if((e25091 instanceof Object)){
var ex__24530__auto__ = e25091;
var statearr_25092_25227 = state_25079;
(statearr_25092_25227[(5)] = ex__24530__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25079);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25091;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25228 = state_25079;
state_25079 = G__25228;
continue;
} else {
return ret_value__24528__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24527__auto__ = function(state_25079){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24527__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24527__auto____1.call(this,state_25079);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24527__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24527__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24527__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24527__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24527__auto__;
})()
;})(__25208,switch__24526__auto__,c__24640__auto___25220,G__25039_25209,n__20760__auto___25207,jobs,results,process,async))
})();
var state__24642__auto__ = (function (){var statearr_25093 = f__24641__auto__.call(null);
(statearr_25093[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24640__auto___25220);

return statearr_25093;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24642__auto__);
});})(__25208,c__24640__auto___25220,G__25039_25209,n__20760__auto___25207,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__25229 = (__25208 + (1));
__25208 = G__25229;
continue;
} else {
}
break;
}

var c__24640__auto___25230 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24640__auto___25230,jobs,results,process,async){
return (function (){
var f__24641__auto__ = (function (){var switch__24526__auto__ = ((function (c__24640__auto___25230,jobs,results,process,async){
return (function (state_25115){
var state_val_25116 = (state_25115[(1)]);
if((state_val_25116 === (1))){
var state_25115__$1 = state_25115;
var statearr_25117_25231 = state_25115__$1;
(statearr_25117_25231[(2)] = null);

(statearr_25117_25231[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25116 === (2))){
var state_25115__$1 = state_25115;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25115__$1,(4),from);
} else {
if((state_val_25116 === (3))){
var inst_25113 = (state_25115[(2)]);
var state_25115__$1 = state_25115;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25115__$1,inst_25113);
} else {
if((state_val_25116 === (4))){
var inst_25096 = (state_25115[(7)]);
var inst_25096__$1 = (state_25115[(2)]);
var inst_25097 = (inst_25096__$1 == null);
var state_25115__$1 = (function (){var statearr_25118 = state_25115;
(statearr_25118[(7)] = inst_25096__$1);

return statearr_25118;
})();
if(cljs.core.truth_(inst_25097)){
var statearr_25119_25232 = state_25115__$1;
(statearr_25119_25232[(1)] = (5));

} else {
var statearr_25120_25233 = state_25115__$1;
(statearr_25120_25233[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25116 === (5))){
var inst_25099 = cljs.core.async.close_BANG_.call(null,jobs);
var state_25115__$1 = state_25115;
var statearr_25121_25234 = state_25115__$1;
(statearr_25121_25234[(2)] = inst_25099);

(statearr_25121_25234[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25116 === (6))){
var inst_25101 = (state_25115[(8)]);
var inst_25096 = (state_25115[(7)]);
var inst_25101__$1 = cljs.core.async.chan.call(null,(1));
var inst_25102 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25103 = [inst_25096,inst_25101__$1];
var inst_25104 = (new cljs.core.PersistentVector(null,2,(5),inst_25102,inst_25103,null));
var state_25115__$1 = (function (){var statearr_25122 = state_25115;
(statearr_25122[(8)] = inst_25101__$1);

return statearr_25122;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25115__$1,(8),jobs,inst_25104);
} else {
if((state_val_25116 === (7))){
var inst_25111 = (state_25115[(2)]);
var state_25115__$1 = state_25115;
var statearr_25123_25235 = state_25115__$1;
(statearr_25123_25235[(2)] = inst_25111);

(statearr_25123_25235[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25116 === (8))){
var inst_25101 = (state_25115[(8)]);
var inst_25106 = (state_25115[(2)]);
var state_25115__$1 = (function (){var statearr_25124 = state_25115;
(statearr_25124[(9)] = inst_25106);

return statearr_25124;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25115__$1,(9),results,inst_25101);
} else {
if((state_val_25116 === (9))){
var inst_25108 = (state_25115[(2)]);
var state_25115__$1 = (function (){var statearr_25125 = state_25115;
(statearr_25125[(10)] = inst_25108);

return statearr_25125;
})();
var statearr_25126_25236 = state_25115__$1;
(statearr_25126_25236[(2)] = null);

(statearr_25126_25236[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__24640__auto___25230,jobs,results,process,async))
;
return ((function (switch__24526__auto__,c__24640__auto___25230,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24527__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24527__auto____0 = (function (){
var statearr_25130 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25130[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24527__auto__);

(statearr_25130[(1)] = (1));

return statearr_25130;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24527__auto____1 = (function (state_25115){
while(true){
var ret_value__24528__auto__ = (function (){try{while(true){
var result__24529__auto__ = switch__24526__auto__.call(null,state_25115);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24529__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24529__auto__;
}
break;
}
}catch (e25131){if((e25131 instanceof Object)){
var ex__24530__auto__ = e25131;
var statearr_25132_25237 = state_25115;
(statearr_25132_25237[(5)] = ex__24530__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25115);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25131;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25238 = state_25115;
state_25115 = G__25238;
continue;
} else {
return ret_value__24528__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24527__auto__ = function(state_25115){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24527__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24527__auto____1.call(this,state_25115);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24527__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24527__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24527__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24527__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24527__auto__;
})()
;})(switch__24526__auto__,c__24640__auto___25230,jobs,results,process,async))
})();
var state__24642__auto__ = (function (){var statearr_25133 = f__24641__auto__.call(null);
(statearr_25133[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24640__auto___25230);

return statearr_25133;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24642__auto__);
});})(c__24640__auto___25230,jobs,results,process,async))
);


var c__24640__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24640__auto__,jobs,results,process,async){
return (function (){
var f__24641__auto__ = (function (){var switch__24526__auto__ = ((function (c__24640__auto__,jobs,results,process,async){
return (function (state_25171){
var state_val_25172 = (state_25171[(1)]);
if((state_val_25172 === (7))){
var inst_25167 = (state_25171[(2)]);
var state_25171__$1 = state_25171;
var statearr_25173_25239 = state_25171__$1;
(statearr_25173_25239[(2)] = inst_25167);

(statearr_25173_25239[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25172 === (20))){
var state_25171__$1 = state_25171;
var statearr_25174_25240 = state_25171__$1;
(statearr_25174_25240[(2)] = null);

(statearr_25174_25240[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25172 === (1))){
var state_25171__$1 = state_25171;
var statearr_25175_25241 = state_25171__$1;
(statearr_25175_25241[(2)] = null);

(statearr_25175_25241[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25172 === (4))){
var inst_25136 = (state_25171[(7)]);
var inst_25136__$1 = (state_25171[(2)]);
var inst_25137 = (inst_25136__$1 == null);
var state_25171__$1 = (function (){var statearr_25176 = state_25171;
(statearr_25176[(7)] = inst_25136__$1);

return statearr_25176;
})();
if(cljs.core.truth_(inst_25137)){
var statearr_25177_25242 = state_25171__$1;
(statearr_25177_25242[(1)] = (5));

} else {
var statearr_25178_25243 = state_25171__$1;
(statearr_25178_25243[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25172 === (15))){
var inst_25149 = (state_25171[(8)]);
var state_25171__$1 = state_25171;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25171__$1,(18),to,inst_25149);
} else {
if((state_val_25172 === (21))){
var inst_25162 = (state_25171[(2)]);
var state_25171__$1 = state_25171;
var statearr_25179_25244 = state_25171__$1;
(statearr_25179_25244[(2)] = inst_25162);

(statearr_25179_25244[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25172 === (13))){
var inst_25164 = (state_25171[(2)]);
var state_25171__$1 = (function (){var statearr_25180 = state_25171;
(statearr_25180[(9)] = inst_25164);

return statearr_25180;
})();
var statearr_25181_25245 = state_25171__$1;
(statearr_25181_25245[(2)] = null);

(statearr_25181_25245[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25172 === (6))){
var inst_25136 = (state_25171[(7)]);
var state_25171__$1 = state_25171;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25171__$1,(11),inst_25136);
} else {
if((state_val_25172 === (17))){
var inst_25157 = (state_25171[(2)]);
var state_25171__$1 = state_25171;
if(cljs.core.truth_(inst_25157)){
var statearr_25182_25246 = state_25171__$1;
(statearr_25182_25246[(1)] = (19));

} else {
var statearr_25183_25247 = state_25171__$1;
(statearr_25183_25247[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25172 === (3))){
var inst_25169 = (state_25171[(2)]);
var state_25171__$1 = state_25171;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25171__$1,inst_25169);
} else {
if((state_val_25172 === (12))){
var inst_25146 = (state_25171[(10)]);
var state_25171__$1 = state_25171;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25171__$1,(14),inst_25146);
} else {
if((state_val_25172 === (2))){
var state_25171__$1 = state_25171;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25171__$1,(4),results);
} else {
if((state_val_25172 === (19))){
var state_25171__$1 = state_25171;
var statearr_25184_25248 = state_25171__$1;
(statearr_25184_25248[(2)] = null);

(statearr_25184_25248[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25172 === (11))){
var inst_25146 = (state_25171[(2)]);
var state_25171__$1 = (function (){var statearr_25185 = state_25171;
(statearr_25185[(10)] = inst_25146);

return statearr_25185;
})();
var statearr_25186_25249 = state_25171__$1;
(statearr_25186_25249[(2)] = null);

(statearr_25186_25249[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25172 === (9))){
var state_25171__$1 = state_25171;
var statearr_25187_25250 = state_25171__$1;
(statearr_25187_25250[(2)] = null);

(statearr_25187_25250[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25172 === (5))){
var state_25171__$1 = state_25171;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25188_25251 = state_25171__$1;
(statearr_25188_25251[(1)] = (8));

} else {
var statearr_25189_25252 = state_25171__$1;
(statearr_25189_25252[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25172 === (14))){
var inst_25149 = (state_25171[(8)]);
var inst_25151 = (state_25171[(11)]);
var inst_25149__$1 = (state_25171[(2)]);
var inst_25150 = (inst_25149__$1 == null);
var inst_25151__$1 = cljs.core.not.call(null,inst_25150);
var state_25171__$1 = (function (){var statearr_25190 = state_25171;
(statearr_25190[(8)] = inst_25149__$1);

(statearr_25190[(11)] = inst_25151__$1);

return statearr_25190;
})();
if(inst_25151__$1){
var statearr_25191_25253 = state_25171__$1;
(statearr_25191_25253[(1)] = (15));

} else {
var statearr_25192_25254 = state_25171__$1;
(statearr_25192_25254[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25172 === (16))){
var inst_25151 = (state_25171[(11)]);
var state_25171__$1 = state_25171;
var statearr_25193_25255 = state_25171__$1;
(statearr_25193_25255[(2)] = inst_25151);

(statearr_25193_25255[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25172 === (10))){
var inst_25143 = (state_25171[(2)]);
var state_25171__$1 = state_25171;
var statearr_25194_25256 = state_25171__$1;
(statearr_25194_25256[(2)] = inst_25143);

(statearr_25194_25256[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25172 === (18))){
var inst_25154 = (state_25171[(2)]);
var state_25171__$1 = state_25171;
var statearr_25195_25257 = state_25171__$1;
(statearr_25195_25257[(2)] = inst_25154);

(statearr_25195_25257[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25172 === (8))){
var inst_25140 = cljs.core.async.close_BANG_.call(null,to);
var state_25171__$1 = state_25171;
var statearr_25196_25258 = state_25171__$1;
(statearr_25196_25258[(2)] = inst_25140);

(statearr_25196_25258[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24640__auto__,jobs,results,process,async))
;
return ((function (switch__24526__auto__,c__24640__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24527__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24527__auto____0 = (function (){
var statearr_25200 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25200[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24527__auto__);

(statearr_25200[(1)] = (1));

return statearr_25200;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24527__auto____1 = (function (state_25171){
while(true){
var ret_value__24528__auto__ = (function (){try{while(true){
var result__24529__auto__ = switch__24526__auto__.call(null,state_25171);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24529__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24529__auto__;
}
break;
}
}catch (e25201){if((e25201 instanceof Object)){
var ex__24530__auto__ = e25201;
var statearr_25202_25259 = state_25171;
(statearr_25202_25259[(5)] = ex__24530__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25171);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25201;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25260 = state_25171;
state_25171 = G__25260;
continue;
} else {
return ret_value__24528__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24527__auto__ = function(state_25171){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24527__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24527__auto____1.call(this,state_25171);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24527__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24527__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24527__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24527__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24527__auto__;
})()
;})(switch__24526__auto__,c__24640__auto__,jobs,results,process,async))
})();
var state__24642__auto__ = (function (){var statearr_25203 = f__24641__auto__.call(null);
(statearr_25203[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24640__auto__);

return statearr_25203;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24642__auto__);
});})(c__24640__auto__,jobs,results,process,async))
);

return c__24640__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args25261 = [];
var len__20930__auto___25264 = arguments.length;
var i__20931__auto___25265 = (0);
while(true){
if((i__20931__auto___25265 < len__20930__auto___25264)){
args25261.push((arguments[i__20931__auto___25265]));

var G__25266 = (i__20931__auto___25265 + (1));
i__20931__auto___25265 = G__25266;
continue;
} else {
}
break;
}

var G__25263 = args25261.length;
switch (G__25263) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25261.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args25268 = [];
var len__20930__auto___25271 = arguments.length;
var i__20931__auto___25272 = (0);
while(true){
if((i__20931__auto___25272 < len__20930__auto___25271)){
args25268.push((arguments[i__20931__auto___25272]));

var G__25273 = (i__20931__auto___25272 + (1));
i__20931__auto___25272 = G__25273;
continue;
} else {
}
break;
}

var G__25270 = args25268.length;
switch (G__25270) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25268.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args25275 = [];
var len__20930__auto___25328 = arguments.length;
var i__20931__auto___25329 = (0);
while(true){
if((i__20931__auto___25329 < len__20930__auto___25328)){
args25275.push((arguments[i__20931__auto___25329]));

var G__25330 = (i__20931__auto___25329 + (1));
i__20931__auto___25329 = G__25330;
continue;
} else {
}
break;
}

var G__25277 = args25275.length;
switch (G__25277) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25275.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__24640__auto___25332 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24640__auto___25332,tc,fc){
return (function (){
var f__24641__auto__ = (function (){var switch__24526__auto__ = ((function (c__24640__auto___25332,tc,fc){
return (function (state_25303){
var state_val_25304 = (state_25303[(1)]);
if((state_val_25304 === (7))){
var inst_25299 = (state_25303[(2)]);
var state_25303__$1 = state_25303;
var statearr_25305_25333 = state_25303__$1;
(statearr_25305_25333[(2)] = inst_25299);

(statearr_25305_25333[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25304 === (1))){
var state_25303__$1 = state_25303;
var statearr_25306_25334 = state_25303__$1;
(statearr_25306_25334[(2)] = null);

(statearr_25306_25334[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25304 === (4))){
var inst_25280 = (state_25303[(7)]);
var inst_25280__$1 = (state_25303[(2)]);
var inst_25281 = (inst_25280__$1 == null);
var state_25303__$1 = (function (){var statearr_25307 = state_25303;
(statearr_25307[(7)] = inst_25280__$1);

return statearr_25307;
})();
if(cljs.core.truth_(inst_25281)){
var statearr_25308_25335 = state_25303__$1;
(statearr_25308_25335[(1)] = (5));

} else {
var statearr_25309_25336 = state_25303__$1;
(statearr_25309_25336[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25304 === (13))){
var state_25303__$1 = state_25303;
var statearr_25310_25337 = state_25303__$1;
(statearr_25310_25337[(2)] = null);

(statearr_25310_25337[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25304 === (6))){
var inst_25280 = (state_25303[(7)]);
var inst_25286 = p.call(null,inst_25280);
var state_25303__$1 = state_25303;
if(cljs.core.truth_(inst_25286)){
var statearr_25311_25338 = state_25303__$1;
(statearr_25311_25338[(1)] = (9));

} else {
var statearr_25312_25339 = state_25303__$1;
(statearr_25312_25339[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25304 === (3))){
var inst_25301 = (state_25303[(2)]);
var state_25303__$1 = state_25303;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25303__$1,inst_25301);
} else {
if((state_val_25304 === (12))){
var state_25303__$1 = state_25303;
var statearr_25313_25340 = state_25303__$1;
(statearr_25313_25340[(2)] = null);

(statearr_25313_25340[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25304 === (2))){
var state_25303__$1 = state_25303;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25303__$1,(4),ch);
} else {
if((state_val_25304 === (11))){
var inst_25280 = (state_25303[(7)]);
var inst_25290 = (state_25303[(2)]);
var state_25303__$1 = state_25303;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25303__$1,(8),inst_25290,inst_25280);
} else {
if((state_val_25304 === (9))){
var state_25303__$1 = state_25303;
var statearr_25314_25341 = state_25303__$1;
(statearr_25314_25341[(2)] = tc);

(statearr_25314_25341[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25304 === (5))){
var inst_25283 = cljs.core.async.close_BANG_.call(null,tc);
var inst_25284 = cljs.core.async.close_BANG_.call(null,fc);
var state_25303__$1 = (function (){var statearr_25315 = state_25303;
(statearr_25315[(8)] = inst_25283);

return statearr_25315;
})();
var statearr_25316_25342 = state_25303__$1;
(statearr_25316_25342[(2)] = inst_25284);

(statearr_25316_25342[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25304 === (14))){
var inst_25297 = (state_25303[(2)]);
var state_25303__$1 = state_25303;
var statearr_25317_25343 = state_25303__$1;
(statearr_25317_25343[(2)] = inst_25297);

(statearr_25317_25343[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25304 === (10))){
var state_25303__$1 = state_25303;
var statearr_25318_25344 = state_25303__$1;
(statearr_25318_25344[(2)] = fc);

(statearr_25318_25344[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25304 === (8))){
var inst_25292 = (state_25303[(2)]);
var state_25303__$1 = state_25303;
if(cljs.core.truth_(inst_25292)){
var statearr_25319_25345 = state_25303__$1;
(statearr_25319_25345[(1)] = (12));

} else {
var statearr_25320_25346 = state_25303__$1;
(statearr_25320_25346[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24640__auto___25332,tc,fc))
;
return ((function (switch__24526__auto__,c__24640__auto___25332,tc,fc){
return (function() {
var cljs$core$async$state_machine__24527__auto__ = null;
var cljs$core$async$state_machine__24527__auto____0 = (function (){
var statearr_25324 = [null,null,null,null,null,null,null,null,null];
(statearr_25324[(0)] = cljs$core$async$state_machine__24527__auto__);

(statearr_25324[(1)] = (1));

return statearr_25324;
});
var cljs$core$async$state_machine__24527__auto____1 = (function (state_25303){
while(true){
var ret_value__24528__auto__ = (function (){try{while(true){
var result__24529__auto__ = switch__24526__auto__.call(null,state_25303);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24529__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24529__auto__;
}
break;
}
}catch (e25325){if((e25325 instanceof Object)){
var ex__24530__auto__ = e25325;
var statearr_25326_25347 = state_25303;
(statearr_25326_25347[(5)] = ex__24530__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25303);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25325;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25348 = state_25303;
state_25303 = G__25348;
continue;
} else {
return ret_value__24528__auto__;
}
break;
}
});
cljs$core$async$state_machine__24527__auto__ = function(state_25303){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24527__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24527__auto____1.call(this,state_25303);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24527__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24527__auto____0;
cljs$core$async$state_machine__24527__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24527__auto____1;
return cljs$core$async$state_machine__24527__auto__;
})()
;})(switch__24526__auto__,c__24640__auto___25332,tc,fc))
})();
var state__24642__auto__ = (function (){var statearr_25327 = f__24641__auto__.call(null);
(statearr_25327[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24640__auto___25332);

return statearr_25327;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24642__auto__);
});})(c__24640__auto___25332,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__24640__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24640__auto__){
return (function (){
var f__24641__auto__ = (function (){var switch__24526__auto__ = ((function (c__24640__auto__){
return (function (state_25412){
var state_val_25413 = (state_25412[(1)]);
if((state_val_25413 === (7))){
var inst_25408 = (state_25412[(2)]);
var state_25412__$1 = state_25412;
var statearr_25414_25435 = state_25412__$1;
(statearr_25414_25435[(2)] = inst_25408);

(statearr_25414_25435[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25413 === (1))){
var inst_25392 = init;
var state_25412__$1 = (function (){var statearr_25415 = state_25412;
(statearr_25415[(7)] = inst_25392);

return statearr_25415;
})();
var statearr_25416_25436 = state_25412__$1;
(statearr_25416_25436[(2)] = null);

(statearr_25416_25436[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25413 === (4))){
var inst_25395 = (state_25412[(8)]);
var inst_25395__$1 = (state_25412[(2)]);
var inst_25396 = (inst_25395__$1 == null);
var state_25412__$1 = (function (){var statearr_25417 = state_25412;
(statearr_25417[(8)] = inst_25395__$1);

return statearr_25417;
})();
if(cljs.core.truth_(inst_25396)){
var statearr_25418_25437 = state_25412__$1;
(statearr_25418_25437[(1)] = (5));

} else {
var statearr_25419_25438 = state_25412__$1;
(statearr_25419_25438[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25413 === (6))){
var inst_25399 = (state_25412[(9)]);
var inst_25392 = (state_25412[(7)]);
var inst_25395 = (state_25412[(8)]);
var inst_25399__$1 = f.call(null,inst_25392,inst_25395);
var inst_25400 = cljs.core.reduced_QMARK_.call(null,inst_25399__$1);
var state_25412__$1 = (function (){var statearr_25420 = state_25412;
(statearr_25420[(9)] = inst_25399__$1);

return statearr_25420;
})();
if(inst_25400){
var statearr_25421_25439 = state_25412__$1;
(statearr_25421_25439[(1)] = (8));

} else {
var statearr_25422_25440 = state_25412__$1;
(statearr_25422_25440[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25413 === (3))){
var inst_25410 = (state_25412[(2)]);
var state_25412__$1 = state_25412;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25412__$1,inst_25410);
} else {
if((state_val_25413 === (2))){
var state_25412__$1 = state_25412;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25412__$1,(4),ch);
} else {
if((state_val_25413 === (9))){
var inst_25399 = (state_25412[(9)]);
var inst_25392 = inst_25399;
var state_25412__$1 = (function (){var statearr_25423 = state_25412;
(statearr_25423[(7)] = inst_25392);

return statearr_25423;
})();
var statearr_25424_25441 = state_25412__$1;
(statearr_25424_25441[(2)] = null);

(statearr_25424_25441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25413 === (5))){
var inst_25392 = (state_25412[(7)]);
var state_25412__$1 = state_25412;
var statearr_25425_25442 = state_25412__$1;
(statearr_25425_25442[(2)] = inst_25392);

(statearr_25425_25442[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25413 === (10))){
var inst_25406 = (state_25412[(2)]);
var state_25412__$1 = state_25412;
var statearr_25426_25443 = state_25412__$1;
(statearr_25426_25443[(2)] = inst_25406);

(statearr_25426_25443[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25413 === (8))){
var inst_25399 = (state_25412[(9)]);
var inst_25402 = cljs.core.deref.call(null,inst_25399);
var state_25412__$1 = state_25412;
var statearr_25427_25444 = state_25412__$1;
(statearr_25427_25444[(2)] = inst_25402);

(statearr_25427_25444[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__24640__auto__))
;
return ((function (switch__24526__auto__,c__24640__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__24527__auto__ = null;
var cljs$core$async$reduce_$_state_machine__24527__auto____0 = (function (){
var statearr_25431 = [null,null,null,null,null,null,null,null,null,null];
(statearr_25431[(0)] = cljs$core$async$reduce_$_state_machine__24527__auto__);

(statearr_25431[(1)] = (1));

return statearr_25431;
});
var cljs$core$async$reduce_$_state_machine__24527__auto____1 = (function (state_25412){
while(true){
var ret_value__24528__auto__ = (function (){try{while(true){
var result__24529__auto__ = switch__24526__auto__.call(null,state_25412);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24529__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24529__auto__;
}
break;
}
}catch (e25432){if((e25432 instanceof Object)){
var ex__24530__auto__ = e25432;
var statearr_25433_25445 = state_25412;
(statearr_25433_25445[(5)] = ex__24530__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25412);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25432;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25446 = state_25412;
state_25412 = G__25446;
continue;
} else {
return ret_value__24528__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__24527__auto__ = function(state_25412){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__24527__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__24527__auto____1.call(this,state_25412);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__24527__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__24527__auto____0;
cljs$core$async$reduce_$_state_machine__24527__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__24527__auto____1;
return cljs$core$async$reduce_$_state_machine__24527__auto__;
})()
;})(switch__24526__auto__,c__24640__auto__))
})();
var state__24642__auto__ = (function (){var statearr_25434 = f__24641__auto__.call(null);
(statearr_25434[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24640__auto__);

return statearr_25434;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24642__auto__);
});})(c__24640__auto__))
);

return c__24640__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args25447 = [];
var len__20930__auto___25499 = arguments.length;
var i__20931__auto___25500 = (0);
while(true){
if((i__20931__auto___25500 < len__20930__auto___25499)){
args25447.push((arguments[i__20931__auto___25500]));

var G__25501 = (i__20931__auto___25500 + (1));
i__20931__auto___25500 = G__25501;
continue;
} else {
}
break;
}

var G__25449 = args25447.length;
switch (G__25449) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25447.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__24640__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24640__auto__){
return (function (){
var f__24641__auto__ = (function (){var switch__24526__auto__ = ((function (c__24640__auto__){
return (function (state_25474){
var state_val_25475 = (state_25474[(1)]);
if((state_val_25475 === (7))){
var inst_25456 = (state_25474[(2)]);
var state_25474__$1 = state_25474;
var statearr_25476_25503 = state_25474__$1;
(statearr_25476_25503[(2)] = inst_25456);

(statearr_25476_25503[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25475 === (1))){
var inst_25450 = cljs.core.seq.call(null,coll);
var inst_25451 = inst_25450;
var state_25474__$1 = (function (){var statearr_25477 = state_25474;
(statearr_25477[(7)] = inst_25451);

return statearr_25477;
})();
var statearr_25478_25504 = state_25474__$1;
(statearr_25478_25504[(2)] = null);

(statearr_25478_25504[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25475 === (4))){
var inst_25451 = (state_25474[(7)]);
var inst_25454 = cljs.core.first.call(null,inst_25451);
var state_25474__$1 = state_25474;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25474__$1,(7),ch,inst_25454);
} else {
if((state_val_25475 === (13))){
var inst_25468 = (state_25474[(2)]);
var state_25474__$1 = state_25474;
var statearr_25479_25505 = state_25474__$1;
(statearr_25479_25505[(2)] = inst_25468);

(statearr_25479_25505[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25475 === (6))){
var inst_25459 = (state_25474[(2)]);
var state_25474__$1 = state_25474;
if(cljs.core.truth_(inst_25459)){
var statearr_25480_25506 = state_25474__$1;
(statearr_25480_25506[(1)] = (8));

} else {
var statearr_25481_25507 = state_25474__$1;
(statearr_25481_25507[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25475 === (3))){
var inst_25472 = (state_25474[(2)]);
var state_25474__$1 = state_25474;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25474__$1,inst_25472);
} else {
if((state_val_25475 === (12))){
var state_25474__$1 = state_25474;
var statearr_25482_25508 = state_25474__$1;
(statearr_25482_25508[(2)] = null);

(statearr_25482_25508[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25475 === (2))){
var inst_25451 = (state_25474[(7)]);
var state_25474__$1 = state_25474;
if(cljs.core.truth_(inst_25451)){
var statearr_25483_25509 = state_25474__$1;
(statearr_25483_25509[(1)] = (4));

} else {
var statearr_25484_25510 = state_25474__$1;
(statearr_25484_25510[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25475 === (11))){
var inst_25465 = cljs.core.async.close_BANG_.call(null,ch);
var state_25474__$1 = state_25474;
var statearr_25485_25511 = state_25474__$1;
(statearr_25485_25511[(2)] = inst_25465);

(statearr_25485_25511[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25475 === (9))){
var state_25474__$1 = state_25474;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25486_25512 = state_25474__$1;
(statearr_25486_25512[(1)] = (11));

} else {
var statearr_25487_25513 = state_25474__$1;
(statearr_25487_25513[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25475 === (5))){
var inst_25451 = (state_25474[(7)]);
var state_25474__$1 = state_25474;
var statearr_25488_25514 = state_25474__$1;
(statearr_25488_25514[(2)] = inst_25451);

(statearr_25488_25514[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25475 === (10))){
var inst_25470 = (state_25474[(2)]);
var state_25474__$1 = state_25474;
var statearr_25489_25515 = state_25474__$1;
(statearr_25489_25515[(2)] = inst_25470);

(statearr_25489_25515[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25475 === (8))){
var inst_25451 = (state_25474[(7)]);
var inst_25461 = cljs.core.next.call(null,inst_25451);
var inst_25451__$1 = inst_25461;
var state_25474__$1 = (function (){var statearr_25490 = state_25474;
(statearr_25490[(7)] = inst_25451__$1);

return statearr_25490;
})();
var statearr_25491_25516 = state_25474__$1;
(statearr_25491_25516[(2)] = null);

(statearr_25491_25516[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24640__auto__))
;
return ((function (switch__24526__auto__,c__24640__auto__){
return (function() {
var cljs$core$async$state_machine__24527__auto__ = null;
var cljs$core$async$state_machine__24527__auto____0 = (function (){
var statearr_25495 = [null,null,null,null,null,null,null,null];
(statearr_25495[(0)] = cljs$core$async$state_machine__24527__auto__);

(statearr_25495[(1)] = (1));

return statearr_25495;
});
var cljs$core$async$state_machine__24527__auto____1 = (function (state_25474){
while(true){
var ret_value__24528__auto__ = (function (){try{while(true){
var result__24529__auto__ = switch__24526__auto__.call(null,state_25474);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24529__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24529__auto__;
}
break;
}
}catch (e25496){if((e25496 instanceof Object)){
var ex__24530__auto__ = e25496;
var statearr_25497_25517 = state_25474;
(statearr_25497_25517[(5)] = ex__24530__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25474);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25496;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25518 = state_25474;
state_25474 = G__25518;
continue;
} else {
return ret_value__24528__auto__;
}
break;
}
});
cljs$core$async$state_machine__24527__auto__ = function(state_25474){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24527__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24527__auto____1.call(this,state_25474);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24527__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24527__auto____0;
cljs$core$async$state_machine__24527__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24527__auto____1;
return cljs$core$async$state_machine__24527__auto__;
})()
;})(switch__24526__auto__,c__24640__auto__))
})();
var state__24642__auto__ = (function (){var statearr_25498 = f__24641__auto__.call(null);
(statearr_25498[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24640__auto__);

return statearr_25498;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24642__auto__);
});})(c__24640__auto__))
);

return c__24640__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__20460__auto__ = (((_ == null))?null:_);
var m__20461__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__20460__auto__)]);
if(!((m__20461__auto__ == null))){
return m__20461__auto__.call(null,_);
} else {
var m__20461__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__20461__auto____$1 == null))){
return m__20461__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__20460__auto__ = (((m == null))?null:m);
var m__20461__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__20460__auto__)]);
if(!((m__20461__auto__ == null))){
return m__20461__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__20461__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__20461__auto____$1 == null))){
return m__20461__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__20460__auto__ = (((m == null))?null:m);
var m__20461__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__20460__auto__)]);
if(!((m__20461__auto__ == null))){
return m__20461__auto__.call(null,m,ch);
} else {
var m__20461__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__20461__auto____$1 == null))){
return m__20461__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__20460__auto__ = (((m == null))?null:m);
var m__20461__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__20460__auto__)]);
if(!((m__20461__auto__ == null))){
return m__20461__auto__.call(null,m);
} else {
var m__20461__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__20461__auto____$1 == null))){
return m__20461__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async25740 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25740 = (function (mult,ch,cs,meta25741){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta25741 = meta25741;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25740.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_25742,meta25741__$1){
var self__ = this;
var _25742__$1 = this;
return (new cljs.core.async.t_cljs$core$async25740(self__.mult,self__.ch,self__.cs,meta25741__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async25740.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_25742){
var self__ = this;
var _25742__$1 = this;
return self__.meta25741;
});})(cs))
;

cljs.core.async.t_cljs$core$async25740.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async25740.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async25740.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async25740.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25740.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25740.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25740.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta25741","meta25741",1372494834,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async25740.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25740.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25740";

cljs.core.async.t_cljs$core$async25740.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__20399__auto__,writer__20400__auto__,opt__20401__auto__){
return cljs.core._write.call(null,writer__20400__auto__,"cljs.core.async/t_cljs$core$async25740");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async25740 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async25740(mult__$1,ch__$1,cs__$1,meta25741){
return (new cljs.core.async.t_cljs$core$async25740(mult__$1,ch__$1,cs__$1,meta25741));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async25740(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__24640__auto___25961 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24640__auto___25961,cs,m,dchan,dctr,done){
return (function (){
var f__24641__auto__ = (function (){var switch__24526__auto__ = ((function (c__24640__auto___25961,cs,m,dchan,dctr,done){
return (function (state_25873){
var state_val_25874 = (state_25873[(1)]);
if((state_val_25874 === (7))){
var inst_25869 = (state_25873[(2)]);
var state_25873__$1 = state_25873;
var statearr_25875_25962 = state_25873__$1;
(statearr_25875_25962[(2)] = inst_25869);

(statearr_25875_25962[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25874 === (20))){
var inst_25774 = (state_25873[(7)]);
var inst_25784 = cljs.core.first.call(null,inst_25774);
var inst_25785 = cljs.core.nth.call(null,inst_25784,(0),null);
var inst_25786 = cljs.core.nth.call(null,inst_25784,(1),null);
var state_25873__$1 = (function (){var statearr_25876 = state_25873;
(statearr_25876[(8)] = inst_25785);

return statearr_25876;
})();
if(cljs.core.truth_(inst_25786)){
var statearr_25877_25963 = state_25873__$1;
(statearr_25877_25963[(1)] = (22));

} else {
var statearr_25878_25964 = state_25873__$1;
(statearr_25878_25964[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25874 === (27))){
var inst_25821 = (state_25873[(9)]);
var inst_25745 = (state_25873[(10)]);
var inst_25814 = (state_25873[(11)]);
var inst_25816 = (state_25873[(12)]);
var inst_25821__$1 = cljs.core._nth.call(null,inst_25814,inst_25816);
var inst_25822 = cljs.core.async.put_BANG_.call(null,inst_25821__$1,inst_25745,done);
var state_25873__$1 = (function (){var statearr_25879 = state_25873;
(statearr_25879[(9)] = inst_25821__$1);

return statearr_25879;
})();
if(cljs.core.truth_(inst_25822)){
var statearr_25880_25965 = state_25873__$1;
(statearr_25880_25965[(1)] = (30));

} else {
var statearr_25881_25966 = state_25873__$1;
(statearr_25881_25966[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25874 === (1))){
var state_25873__$1 = state_25873;
var statearr_25882_25967 = state_25873__$1;
(statearr_25882_25967[(2)] = null);

(statearr_25882_25967[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25874 === (24))){
var inst_25774 = (state_25873[(7)]);
var inst_25791 = (state_25873[(2)]);
var inst_25792 = cljs.core.next.call(null,inst_25774);
var inst_25754 = inst_25792;
var inst_25755 = null;
var inst_25756 = (0);
var inst_25757 = (0);
var state_25873__$1 = (function (){var statearr_25883 = state_25873;
(statearr_25883[(13)] = inst_25756);

(statearr_25883[(14)] = inst_25755);

(statearr_25883[(15)] = inst_25757);

(statearr_25883[(16)] = inst_25754);

(statearr_25883[(17)] = inst_25791);

return statearr_25883;
})();
var statearr_25884_25968 = state_25873__$1;
(statearr_25884_25968[(2)] = null);

(statearr_25884_25968[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25874 === (39))){
var state_25873__$1 = state_25873;
var statearr_25888_25969 = state_25873__$1;
(statearr_25888_25969[(2)] = null);

(statearr_25888_25969[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25874 === (4))){
var inst_25745 = (state_25873[(10)]);
var inst_25745__$1 = (state_25873[(2)]);
var inst_25746 = (inst_25745__$1 == null);
var state_25873__$1 = (function (){var statearr_25889 = state_25873;
(statearr_25889[(10)] = inst_25745__$1);

return statearr_25889;
})();
if(cljs.core.truth_(inst_25746)){
var statearr_25890_25970 = state_25873__$1;
(statearr_25890_25970[(1)] = (5));

} else {
var statearr_25891_25971 = state_25873__$1;
(statearr_25891_25971[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25874 === (15))){
var inst_25756 = (state_25873[(13)]);
var inst_25755 = (state_25873[(14)]);
var inst_25757 = (state_25873[(15)]);
var inst_25754 = (state_25873[(16)]);
var inst_25770 = (state_25873[(2)]);
var inst_25771 = (inst_25757 + (1));
var tmp25885 = inst_25756;
var tmp25886 = inst_25755;
var tmp25887 = inst_25754;
var inst_25754__$1 = tmp25887;
var inst_25755__$1 = tmp25886;
var inst_25756__$1 = tmp25885;
var inst_25757__$1 = inst_25771;
var state_25873__$1 = (function (){var statearr_25892 = state_25873;
(statearr_25892[(13)] = inst_25756__$1);

(statearr_25892[(18)] = inst_25770);

(statearr_25892[(14)] = inst_25755__$1);

(statearr_25892[(15)] = inst_25757__$1);

(statearr_25892[(16)] = inst_25754__$1);

return statearr_25892;
})();
var statearr_25893_25972 = state_25873__$1;
(statearr_25893_25972[(2)] = null);

(statearr_25893_25972[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25874 === (21))){
var inst_25795 = (state_25873[(2)]);
var state_25873__$1 = state_25873;
var statearr_25897_25973 = state_25873__$1;
(statearr_25897_25973[(2)] = inst_25795);

(statearr_25897_25973[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25874 === (31))){
var inst_25821 = (state_25873[(9)]);
var inst_25825 = done.call(null,null);
var inst_25826 = cljs.core.async.untap_STAR_.call(null,m,inst_25821);
var state_25873__$1 = (function (){var statearr_25898 = state_25873;
(statearr_25898[(19)] = inst_25825);

return statearr_25898;
})();
var statearr_25899_25974 = state_25873__$1;
(statearr_25899_25974[(2)] = inst_25826);

(statearr_25899_25974[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25874 === (32))){
var inst_25814 = (state_25873[(11)]);
var inst_25813 = (state_25873[(20)]);
var inst_25815 = (state_25873[(21)]);
var inst_25816 = (state_25873[(12)]);
var inst_25828 = (state_25873[(2)]);
var inst_25829 = (inst_25816 + (1));
var tmp25894 = inst_25814;
var tmp25895 = inst_25813;
var tmp25896 = inst_25815;
var inst_25813__$1 = tmp25895;
var inst_25814__$1 = tmp25894;
var inst_25815__$1 = tmp25896;
var inst_25816__$1 = inst_25829;
var state_25873__$1 = (function (){var statearr_25900 = state_25873;
(statearr_25900[(11)] = inst_25814__$1);

(statearr_25900[(20)] = inst_25813__$1);

(statearr_25900[(22)] = inst_25828);

(statearr_25900[(21)] = inst_25815__$1);

(statearr_25900[(12)] = inst_25816__$1);

return statearr_25900;
})();
var statearr_25901_25975 = state_25873__$1;
(statearr_25901_25975[(2)] = null);

(statearr_25901_25975[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25874 === (40))){
var inst_25841 = (state_25873[(23)]);
var inst_25845 = done.call(null,null);
var inst_25846 = cljs.core.async.untap_STAR_.call(null,m,inst_25841);
var state_25873__$1 = (function (){var statearr_25902 = state_25873;
(statearr_25902[(24)] = inst_25845);

return statearr_25902;
})();
var statearr_25903_25976 = state_25873__$1;
(statearr_25903_25976[(2)] = inst_25846);

(statearr_25903_25976[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25874 === (33))){
var inst_25832 = (state_25873[(25)]);
var inst_25834 = cljs.core.chunked_seq_QMARK_.call(null,inst_25832);
var state_25873__$1 = state_25873;
if(inst_25834){
var statearr_25904_25977 = state_25873__$1;
(statearr_25904_25977[(1)] = (36));

} else {
var statearr_25905_25978 = state_25873__$1;
(statearr_25905_25978[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25874 === (13))){
var inst_25764 = (state_25873[(26)]);
var inst_25767 = cljs.core.async.close_BANG_.call(null,inst_25764);
var state_25873__$1 = state_25873;
var statearr_25906_25979 = state_25873__$1;
(statearr_25906_25979[(2)] = inst_25767);

(statearr_25906_25979[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25874 === (22))){
var inst_25785 = (state_25873[(8)]);
var inst_25788 = cljs.core.async.close_BANG_.call(null,inst_25785);
var state_25873__$1 = state_25873;
var statearr_25907_25980 = state_25873__$1;
(statearr_25907_25980[(2)] = inst_25788);

(statearr_25907_25980[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25874 === (36))){
var inst_25832 = (state_25873[(25)]);
var inst_25836 = cljs.core.chunk_first.call(null,inst_25832);
var inst_25837 = cljs.core.chunk_rest.call(null,inst_25832);
var inst_25838 = cljs.core.count.call(null,inst_25836);
var inst_25813 = inst_25837;
var inst_25814 = inst_25836;
var inst_25815 = inst_25838;
var inst_25816 = (0);
var state_25873__$1 = (function (){var statearr_25908 = state_25873;
(statearr_25908[(11)] = inst_25814);

(statearr_25908[(20)] = inst_25813);

(statearr_25908[(21)] = inst_25815);

(statearr_25908[(12)] = inst_25816);

return statearr_25908;
})();
var statearr_25909_25981 = state_25873__$1;
(statearr_25909_25981[(2)] = null);

(statearr_25909_25981[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25874 === (41))){
var inst_25832 = (state_25873[(25)]);
var inst_25848 = (state_25873[(2)]);
var inst_25849 = cljs.core.next.call(null,inst_25832);
var inst_25813 = inst_25849;
var inst_25814 = null;
var inst_25815 = (0);
var inst_25816 = (0);
var state_25873__$1 = (function (){var statearr_25910 = state_25873;
(statearr_25910[(11)] = inst_25814);

(statearr_25910[(20)] = inst_25813);

(statearr_25910[(27)] = inst_25848);

(statearr_25910[(21)] = inst_25815);

(statearr_25910[(12)] = inst_25816);

return statearr_25910;
})();
var statearr_25911_25982 = state_25873__$1;
(statearr_25911_25982[(2)] = null);

(statearr_25911_25982[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25874 === (43))){
var state_25873__$1 = state_25873;
var statearr_25912_25983 = state_25873__$1;
(statearr_25912_25983[(2)] = null);

(statearr_25912_25983[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25874 === (29))){
var inst_25857 = (state_25873[(2)]);
var state_25873__$1 = state_25873;
var statearr_25913_25984 = state_25873__$1;
(statearr_25913_25984[(2)] = inst_25857);

(statearr_25913_25984[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25874 === (44))){
var inst_25866 = (state_25873[(2)]);
var state_25873__$1 = (function (){var statearr_25914 = state_25873;
(statearr_25914[(28)] = inst_25866);

return statearr_25914;
})();
var statearr_25915_25985 = state_25873__$1;
(statearr_25915_25985[(2)] = null);

(statearr_25915_25985[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25874 === (6))){
var inst_25805 = (state_25873[(29)]);
var inst_25804 = cljs.core.deref.call(null,cs);
var inst_25805__$1 = cljs.core.keys.call(null,inst_25804);
var inst_25806 = cljs.core.count.call(null,inst_25805__$1);
var inst_25807 = cljs.core.reset_BANG_.call(null,dctr,inst_25806);
var inst_25812 = cljs.core.seq.call(null,inst_25805__$1);
var inst_25813 = inst_25812;
var inst_25814 = null;
var inst_25815 = (0);
var inst_25816 = (0);
var state_25873__$1 = (function (){var statearr_25916 = state_25873;
(statearr_25916[(30)] = inst_25807);

(statearr_25916[(29)] = inst_25805__$1);

(statearr_25916[(11)] = inst_25814);

(statearr_25916[(20)] = inst_25813);

(statearr_25916[(21)] = inst_25815);

(statearr_25916[(12)] = inst_25816);

return statearr_25916;
})();
var statearr_25917_25986 = state_25873__$1;
(statearr_25917_25986[(2)] = null);

(statearr_25917_25986[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25874 === (28))){
var inst_25832 = (state_25873[(25)]);
var inst_25813 = (state_25873[(20)]);
var inst_25832__$1 = cljs.core.seq.call(null,inst_25813);
var state_25873__$1 = (function (){var statearr_25918 = state_25873;
(statearr_25918[(25)] = inst_25832__$1);

return statearr_25918;
})();
if(inst_25832__$1){
var statearr_25919_25987 = state_25873__$1;
(statearr_25919_25987[(1)] = (33));

} else {
var statearr_25920_25988 = state_25873__$1;
(statearr_25920_25988[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25874 === (25))){
var inst_25815 = (state_25873[(21)]);
var inst_25816 = (state_25873[(12)]);
var inst_25818 = (inst_25816 < inst_25815);
var inst_25819 = inst_25818;
var state_25873__$1 = state_25873;
if(cljs.core.truth_(inst_25819)){
var statearr_25921_25989 = state_25873__$1;
(statearr_25921_25989[(1)] = (27));

} else {
var statearr_25922_25990 = state_25873__$1;
(statearr_25922_25990[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25874 === (34))){
var state_25873__$1 = state_25873;
var statearr_25923_25991 = state_25873__$1;
(statearr_25923_25991[(2)] = null);

(statearr_25923_25991[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25874 === (17))){
var state_25873__$1 = state_25873;
var statearr_25924_25992 = state_25873__$1;
(statearr_25924_25992[(2)] = null);

(statearr_25924_25992[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25874 === (3))){
var inst_25871 = (state_25873[(2)]);
var state_25873__$1 = state_25873;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25873__$1,inst_25871);
} else {
if((state_val_25874 === (12))){
var inst_25800 = (state_25873[(2)]);
var state_25873__$1 = state_25873;
var statearr_25925_25993 = state_25873__$1;
(statearr_25925_25993[(2)] = inst_25800);

(statearr_25925_25993[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25874 === (2))){
var state_25873__$1 = state_25873;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25873__$1,(4),ch);
} else {
if((state_val_25874 === (23))){
var state_25873__$1 = state_25873;
var statearr_25926_25994 = state_25873__$1;
(statearr_25926_25994[(2)] = null);

(statearr_25926_25994[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25874 === (35))){
var inst_25855 = (state_25873[(2)]);
var state_25873__$1 = state_25873;
var statearr_25927_25995 = state_25873__$1;
(statearr_25927_25995[(2)] = inst_25855);

(statearr_25927_25995[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25874 === (19))){
var inst_25774 = (state_25873[(7)]);
var inst_25778 = cljs.core.chunk_first.call(null,inst_25774);
var inst_25779 = cljs.core.chunk_rest.call(null,inst_25774);
var inst_25780 = cljs.core.count.call(null,inst_25778);
var inst_25754 = inst_25779;
var inst_25755 = inst_25778;
var inst_25756 = inst_25780;
var inst_25757 = (0);
var state_25873__$1 = (function (){var statearr_25928 = state_25873;
(statearr_25928[(13)] = inst_25756);

(statearr_25928[(14)] = inst_25755);

(statearr_25928[(15)] = inst_25757);

(statearr_25928[(16)] = inst_25754);

return statearr_25928;
})();
var statearr_25929_25996 = state_25873__$1;
(statearr_25929_25996[(2)] = null);

(statearr_25929_25996[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25874 === (11))){
var inst_25754 = (state_25873[(16)]);
var inst_25774 = (state_25873[(7)]);
var inst_25774__$1 = cljs.core.seq.call(null,inst_25754);
var state_25873__$1 = (function (){var statearr_25930 = state_25873;
(statearr_25930[(7)] = inst_25774__$1);

return statearr_25930;
})();
if(inst_25774__$1){
var statearr_25931_25997 = state_25873__$1;
(statearr_25931_25997[(1)] = (16));

} else {
var statearr_25932_25998 = state_25873__$1;
(statearr_25932_25998[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25874 === (9))){
var inst_25802 = (state_25873[(2)]);
var state_25873__$1 = state_25873;
var statearr_25933_25999 = state_25873__$1;
(statearr_25933_25999[(2)] = inst_25802);

(statearr_25933_25999[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25874 === (5))){
var inst_25752 = cljs.core.deref.call(null,cs);
var inst_25753 = cljs.core.seq.call(null,inst_25752);
var inst_25754 = inst_25753;
var inst_25755 = null;
var inst_25756 = (0);
var inst_25757 = (0);
var state_25873__$1 = (function (){var statearr_25934 = state_25873;
(statearr_25934[(13)] = inst_25756);

(statearr_25934[(14)] = inst_25755);

(statearr_25934[(15)] = inst_25757);

(statearr_25934[(16)] = inst_25754);

return statearr_25934;
})();
var statearr_25935_26000 = state_25873__$1;
(statearr_25935_26000[(2)] = null);

(statearr_25935_26000[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25874 === (14))){
var state_25873__$1 = state_25873;
var statearr_25936_26001 = state_25873__$1;
(statearr_25936_26001[(2)] = null);

(statearr_25936_26001[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25874 === (45))){
var inst_25863 = (state_25873[(2)]);
var state_25873__$1 = state_25873;
var statearr_25937_26002 = state_25873__$1;
(statearr_25937_26002[(2)] = inst_25863);

(statearr_25937_26002[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25874 === (26))){
var inst_25805 = (state_25873[(29)]);
var inst_25859 = (state_25873[(2)]);
var inst_25860 = cljs.core.seq.call(null,inst_25805);
var state_25873__$1 = (function (){var statearr_25938 = state_25873;
(statearr_25938[(31)] = inst_25859);

return statearr_25938;
})();
if(inst_25860){
var statearr_25939_26003 = state_25873__$1;
(statearr_25939_26003[(1)] = (42));

} else {
var statearr_25940_26004 = state_25873__$1;
(statearr_25940_26004[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25874 === (16))){
var inst_25774 = (state_25873[(7)]);
var inst_25776 = cljs.core.chunked_seq_QMARK_.call(null,inst_25774);
var state_25873__$1 = state_25873;
if(inst_25776){
var statearr_25941_26005 = state_25873__$1;
(statearr_25941_26005[(1)] = (19));

} else {
var statearr_25942_26006 = state_25873__$1;
(statearr_25942_26006[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25874 === (38))){
var inst_25852 = (state_25873[(2)]);
var state_25873__$1 = state_25873;
var statearr_25943_26007 = state_25873__$1;
(statearr_25943_26007[(2)] = inst_25852);

(statearr_25943_26007[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25874 === (30))){
var state_25873__$1 = state_25873;
var statearr_25944_26008 = state_25873__$1;
(statearr_25944_26008[(2)] = null);

(statearr_25944_26008[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25874 === (10))){
var inst_25755 = (state_25873[(14)]);
var inst_25757 = (state_25873[(15)]);
var inst_25763 = cljs.core._nth.call(null,inst_25755,inst_25757);
var inst_25764 = cljs.core.nth.call(null,inst_25763,(0),null);
var inst_25765 = cljs.core.nth.call(null,inst_25763,(1),null);
var state_25873__$1 = (function (){var statearr_25945 = state_25873;
(statearr_25945[(26)] = inst_25764);

return statearr_25945;
})();
if(cljs.core.truth_(inst_25765)){
var statearr_25946_26009 = state_25873__$1;
(statearr_25946_26009[(1)] = (13));

} else {
var statearr_25947_26010 = state_25873__$1;
(statearr_25947_26010[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25874 === (18))){
var inst_25798 = (state_25873[(2)]);
var state_25873__$1 = state_25873;
var statearr_25948_26011 = state_25873__$1;
(statearr_25948_26011[(2)] = inst_25798);

(statearr_25948_26011[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25874 === (42))){
var state_25873__$1 = state_25873;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25873__$1,(45),dchan);
} else {
if((state_val_25874 === (37))){
var inst_25832 = (state_25873[(25)]);
var inst_25745 = (state_25873[(10)]);
var inst_25841 = (state_25873[(23)]);
var inst_25841__$1 = cljs.core.first.call(null,inst_25832);
var inst_25842 = cljs.core.async.put_BANG_.call(null,inst_25841__$1,inst_25745,done);
var state_25873__$1 = (function (){var statearr_25949 = state_25873;
(statearr_25949[(23)] = inst_25841__$1);

return statearr_25949;
})();
if(cljs.core.truth_(inst_25842)){
var statearr_25950_26012 = state_25873__$1;
(statearr_25950_26012[(1)] = (39));

} else {
var statearr_25951_26013 = state_25873__$1;
(statearr_25951_26013[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25874 === (8))){
var inst_25756 = (state_25873[(13)]);
var inst_25757 = (state_25873[(15)]);
var inst_25759 = (inst_25757 < inst_25756);
var inst_25760 = inst_25759;
var state_25873__$1 = state_25873;
if(cljs.core.truth_(inst_25760)){
var statearr_25952_26014 = state_25873__$1;
(statearr_25952_26014[(1)] = (10));

} else {
var statearr_25953_26015 = state_25873__$1;
(statearr_25953_26015[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24640__auto___25961,cs,m,dchan,dctr,done))
;
return ((function (switch__24526__auto__,c__24640__auto___25961,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__24527__auto__ = null;
var cljs$core$async$mult_$_state_machine__24527__auto____0 = (function (){
var statearr_25957 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25957[(0)] = cljs$core$async$mult_$_state_machine__24527__auto__);

(statearr_25957[(1)] = (1));

return statearr_25957;
});
var cljs$core$async$mult_$_state_machine__24527__auto____1 = (function (state_25873){
while(true){
var ret_value__24528__auto__ = (function (){try{while(true){
var result__24529__auto__ = switch__24526__auto__.call(null,state_25873);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24529__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24529__auto__;
}
break;
}
}catch (e25958){if((e25958 instanceof Object)){
var ex__24530__auto__ = e25958;
var statearr_25959_26016 = state_25873;
(statearr_25959_26016[(5)] = ex__24530__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25873);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25958;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26017 = state_25873;
state_25873 = G__26017;
continue;
} else {
return ret_value__24528__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__24527__auto__ = function(state_25873){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__24527__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__24527__auto____1.call(this,state_25873);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__24527__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__24527__auto____0;
cljs$core$async$mult_$_state_machine__24527__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__24527__auto____1;
return cljs$core$async$mult_$_state_machine__24527__auto__;
})()
;})(switch__24526__auto__,c__24640__auto___25961,cs,m,dchan,dctr,done))
})();
var state__24642__auto__ = (function (){var statearr_25960 = f__24641__auto__.call(null);
(statearr_25960[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24640__auto___25961);

return statearr_25960;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24642__auto__);
});})(c__24640__auto___25961,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args26018 = [];
var len__20930__auto___26021 = arguments.length;
var i__20931__auto___26022 = (0);
while(true){
if((i__20931__auto___26022 < len__20930__auto___26021)){
args26018.push((arguments[i__20931__auto___26022]));

var G__26023 = (i__20931__auto___26022 + (1));
i__20931__auto___26022 = G__26023;
continue;
} else {
}
break;
}

var G__26020 = args26018.length;
switch (G__26020) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26018.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__20460__auto__ = (((m == null))?null:m);
var m__20461__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__20460__auto__)]);
if(!((m__20461__auto__ == null))){
return m__20461__auto__.call(null,m,ch);
} else {
var m__20461__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__20461__auto____$1 == null))){
return m__20461__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__20460__auto__ = (((m == null))?null:m);
var m__20461__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__20460__auto__)]);
if(!((m__20461__auto__ == null))){
return m__20461__auto__.call(null,m,ch);
} else {
var m__20461__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__20461__auto____$1 == null))){
return m__20461__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__20460__auto__ = (((m == null))?null:m);
var m__20461__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__20460__auto__)]);
if(!((m__20461__auto__ == null))){
return m__20461__auto__.call(null,m);
} else {
var m__20461__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__20461__auto____$1 == null))){
return m__20461__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__20460__auto__ = (((m == null))?null:m);
var m__20461__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__20460__auto__)]);
if(!((m__20461__auto__ == null))){
return m__20461__auto__.call(null,m,state_map);
} else {
var m__20461__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__20461__auto____$1 == null))){
return m__20461__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__20460__auto__ = (((m == null))?null:m);
var m__20461__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__20460__auto__)]);
if(!((m__20461__auto__ == null))){
return m__20461__auto__.call(null,m,mode);
} else {
var m__20461__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__20461__auto____$1 == null))){
return m__20461__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__20937__auto__ = [];
var len__20930__auto___26035 = arguments.length;
var i__20931__auto___26036 = (0);
while(true){
if((i__20931__auto___26036 < len__20930__auto___26035)){
args__20937__auto__.push((arguments[i__20931__auto___26036]));

var G__26037 = (i__20931__auto___26036 + (1));
i__20931__auto___26036 = G__26037;
continue;
} else {
}
break;
}

var argseq__20938__auto__ = ((((3) < args__20937__auto__.length))?(new cljs.core.IndexedSeq(args__20937__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__20938__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__26029){
var map__26030 = p__26029;
var map__26030__$1 = ((((!((map__26030 == null)))?((((map__26030.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26030.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26030):map__26030);
var opts = map__26030__$1;
var statearr_26032_26038 = state;
(statearr_26032_26038[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__6144__auto__ = cljs.core.async.do_alts.call(null,((function (map__26030,map__26030__$1,opts){
return (function (val){
var statearr_26033_26039 = state;
(statearr_26033_26039[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__26030,map__26030__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__6144__auto__)){
var cb = temp__6144__auto__;
var statearr_26034_26040 = state;
(statearr_26034_26040[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq26025){
var G__26026 = cljs.core.first.call(null,seq26025);
var seq26025__$1 = cljs.core.next.call(null,seq26025);
var G__26027 = cljs.core.first.call(null,seq26025__$1);
var seq26025__$2 = cljs.core.next.call(null,seq26025__$1);
var G__26028 = cljs.core.first.call(null,seq26025__$2);
var seq26025__$3 = cljs.core.next.call(null,seq26025__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__26026,G__26027,G__26028,seq26025__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async26204 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26204 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta26205){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta26205 = meta26205;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26204.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26206,meta26205__$1){
var self__ = this;
var _26206__$1 = this;
return (new cljs.core.async.t_cljs$core$async26204(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta26205__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26204.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26206){
var self__ = this;
var _26206__$1 = this;
return self__.meta26205;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26204.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async26204.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26204.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async26204.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26204.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26204.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26204.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26204.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26204.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta26205","meta26205",-532222136,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26204.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26204.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26204";

cljs.core.async.t_cljs$core$async26204.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__20399__auto__,writer__20400__auto__,opt__20401__auto__){
return cljs.core._write.call(null,writer__20400__auto__,"cljs.core.async/t_cljs$core$async26204");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async26204 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async26204(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26205){
return (new cljs.core.async.t_cljs$core$async26204(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26205));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async26204(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24640__auto___26367 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24640__auto___26367,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__24641__auto__ = (function (){var switch__24526__auto__ = ((function (c__24640__auto___26367,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_26304){
var state_val_26305 = (state_26304[(1)]);
if((state_val_26305 === (7))){
var inst_26222 = (state_26304[(2)]);
var state_26304__$1 = state_26304;
var statearr_26306_26368 = state_26304__$1;
(statearr_26306_26368[(2)] = inst_26222);

(statearr_26306_26368[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26305 === (20))){
var inst_26234 = (state_26304[(7)]);
var state_26304__$1 = state_26304;
var statearr_26307_26369 = state_26304__$1;
(statearr_26307_26369[(2)] = inst_26234);

(statearr_26307_26369[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26305 === (27))){
var state_26304__$1 = state_26304;
var statearr_26308_26370 = state_26304__$1;
(statearr_26308_26370[(2)] = null);

(statearr_26308_26370[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26305 === (1))){
var inst_26210 = (state_26304[(8)]);
var inst_26210__$1 = calc_state.call(null);
var inst_26212 = (inst_26210__$1 == null);
var inst_26213 = cljs.core.not.call(null,inst_26212);
var state_26304__$1 = (function (){var statearr_26309 = state_26304;
(statearr_26309[(8)] = inst_26210__$1);

return statearr_26309;
})();
if(inst_26213){
var statearr_26310_26371 = state_26304__$1;
(statearr_26310_26371[(1)] = (2));

} else {
var statearr_26311_26372 = state_26304__$1;
(statearr_26311_26372[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26305 === (24))){
var inst_26257 = (state_26304[(9)]);
var inst_26264 = (state_26304[(10)]);
var inst_26278 = (state_26304[(11)]);
var inst_26278__$1 = inst_26257.call(null,inst_26264);
var state_26304__$1 = (function (){var statearr_26312 = state_26304;
(statearr_26312[(11)] = inst_26278__$1);

return statearr_26312;
})();
if(cljs.core.truth_(inst_26278__$1)){
var statearr_26313_26373 = state_26304__$1;
(statearr_26313_26373[(1)] = (29));

} else {
var statearr_26314_26374 = state_26304__$1;
(statearr_26314_26374[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26305 === (4))){
var inst_26225 = (state_26304[(2)]);
var state_26304__$1 = state_26304;
if(cljs.core.truth_(inst_26225)){
var statearr_26315_26375 = state_26304__$1;
(statearr_26315_26375[(1)] = (8));

} else {
var statearr_26316_26376 = state_26304__$1;
(statearr_26316_26376[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26305 === (15))){
var inst_26251 = (state_26304[(2)]);
var state_26304__$1 = state_26304;
if(cljs.core.truth_(inst_26251)){
var statearr_26317_26377 = state_26304__$1;
(statearr_26317_26377[(1)] = (19));

} else {
var statearr_26318_26378 = state_26304__$1;
(statearr_26318_26378[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26305 === (21))){
var inst_26256 = (state_26304[(12)]);
var inst_26256__$1 = (state_26304[(2)]);
var inst_26257 = cljs.core.get.call(null,inst_26256__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_26258 = cljs.core.get.call(null,inst_26256__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26259 = cljs.core.get.call(null,inst_26256__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_26304__$1 = (function (){var statearr_26319 = state_26304;
(statearr_26319[(12)] = inst_26256__$1);

(statearr_26319[(9)] = inst_26257);

(statearr_26319[(13)] = inst_26258);

return statearr_26319;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_26304__$1,(22),inst_26259);
} else {
if((state_val_26305 === (31))){
var inst_26286 = (state_26304[(2)]);
var state_26304__$1 = state_26304;
if(cljs.core.truth_(inst_26286)){
var statearr_26320_26379 = state_26304__$1;
(statearr_26320_26379[(1)] = (32));

} else {
var statearr_26321_26380 = state_26304__$1;
(statearr_26321_26380[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26305 === (32))){
var inst_26263 = (state_26304[(14)]);
var state_26304__$1 = state_26304;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26304__$1,(35),out,inst_26263);
} else {
if((state_val_26305 === (33))){
var inst_26256 = (state_26304[(12)]);
var inst_26234 = inst_26256;
var state_26304__$1 = (function (){var statearr_26322 = state_26304;
(statearr_26322[(7)] = inst_26234);

return statearr_26322;
})();
var statearr_26323_26381 = state_26304__$1;
(statearr_26323_26381[(2)] = null);

(statearr_26323_26381[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26305 === (13))){
var inst_26234 = (state_26304[(7)]);
var inst_26241 = inst_26234.cljs$lang$protocol_mask$partition0$;
var inst_26242 = (inst_26241 & (64));
var inst_26243 = inst_26234.cljs$core$ISeq$;
var inst_26244 = (inst_26242) || (inst_26243);
var state_26304__$1 = state_26304;
if(cljs.core.truth_(inst_26244)){
var statearr_26324_26382 = state_26304__$1;
(statearr_26324_26382[(1)] = (16));

} else {
var statearr_26325_26383 = state_26304__$1;
(statearr_26325_26383[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26305 === (22))){
var inst_26263 = (state_26304[(14)]);
var inst_26264 = (state_26304[(10)]);
var inst_26262 = (state_26304[(2)]);
var inst_26263__$1 = cljs.core.nth.call(null,inst_26262,(0),null);
var inst_26264__$1 = cljs.core.nth.call(null,inst_26262,(1),null);
var inst_26265 = (inst_26263__$1 == null);
var inst_26266 = cljs.core._EQ_.call(null,inst_26264__$1,change);
var inst_26267 = (inst_26265) || (inst_26266);
var state_26304__$1 = (function (){var statearr_26326 = state_26304;
(statearr_26326[(14)] = inst_26263__$1);

(statearr_26326[(10)] = inst_26264__$1);

return statearr_26326;
})();
if(cljs.core.truth_(inst_26267)){
var statearr_26327_26384 = state_26304__$1;
(statearr_26327_26384[(1)] = (23));

} else {
var statearr_26328_26385 = state_26304__$1;
(statearr_26328_26385[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26305 === (36))){
var inst_26256 = (state_26304[(12)]);
var inst_26234 = inst_26256;
var state_26304__$1 = (function (){var statearr_26329 = state_26304;
(statearr_26329[(7)] = inst_26234);

return statearr_26329;
})();
var statearr_26330_26386 = state_26304__$1;
(statearr_26330_26386[(2)] = null);

(statearr_26330_26386[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26305 === (29))){
var inst_26278 = (state_26304[(11)]);
var state_26304__$1 = state_26304;
var statearr_26331_26387 = state_26304__$1;
(statearr_26331_26387[(2)] = inst_26278);

(statearr_26331_26387[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26305 === (6))){
var state_26304__$1 = state_26304;
var statearr_26332_26388 = state_26304__$1;
(statearr_26332_26388[(2)] = false);

(statearr_26332_26388[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26305 === (28))){
var inst_26274 = (state_26304[(2)]);
var inst_26275 = calc_state.call(null);
var inst_26234 = inst_26275;
var state_26304__$1 = (function (){var statearr_26333 = state_26304;
(statearr_26333[(7)] = inst_26234);

(statearr_26333[(15)] = inst_26274);

return statearr_26333;
})();
var statearr_26334_26389 = state_26304__$1;
(statearr_26334_26389[(2)] = null);

(statearr_26334_26389[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26305 === (25))){
var inst_26300 = (state_26304[(2)]);
var state_26304__$1 = state_26304;
var statearr_26335_26390 = state_26304__$1;
(statearr_26335_26390[(2)] = inst_26300);

(statearr_26335_26390[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26305 === (34))){
var inst_26298 = (state_26304[(2)]);
var state_26304__$1 = state_26304;
var statearr_26336_26391 = state_26304__$1;
(statearr_26336_26391[(2)] = inst_26298);

(statearr_26336_26391[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26305 === (17))){
var state_26304__$1 = state_26304;
var statearr_26337_26392 = state_26304__$1;
(statearr_26337_26392[(2)] = false);

(statearr_26337_26392[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26305 === (3))){
var state_26304__$1 = state_26304;
var statearr_26338_26393 = state_26304__$1;
(statearr_26338_26393[(2)] = false);

(statearr_26338_26393[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26305 === (12))){
var inst_26302 = (state_26304[(2)]);
var state_26304__$1 = state_26304;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26304__$1,inst_26302);
} else {
if((state_val_26305 === (2))){
var inst_26210 = (state_26304[(8)]);
var inst_26215 = inst_26210.cljs$lang$protocol_mask$partition0$;
var inst_26216 = (inst_26215 & (64));
var inst_26217 = inst_26210.cljs$core$ISeq$;
var inst_26218 = (inst_26216) || (inst_26217);
var state_26304__$1 = state_26304;
if(cljs.core.truth_(inst_26218)){
var statearr_26339_26394 = state_26304__$1;
(statearr_26339_26394[(1)] = (5));

} else {
var statearr_26340_26395 = state_26304__$1;
(statearr_26340_26395[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26305 === (23))){
var inst_26263 = (state_26304[(14)]);
var inst_26269 = (inst_26263 == null);
var state_26304__$1 = state_26304;
if(cljs.core.truth_(inst_26269)){
var statearr_26341_26396 = state_26304__$1;
(statearr_26341_26396[(1)] = (26));

} else {
var statearr_26342_26397 = state_26304__$1;
(statearr_26342_26397[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26305 === (35))){
var inst_26289 = (state_26304[(2)]);
var state_26304__$1 = state_26304;
if(cljs.core.truth_(inst_26289)){
var statearr_26343_26398 = state_26304__$1;
(statearr_26343_26398[(1)] = (36));

} else {
var statearr_26344_26399 = state_26304__$1;
(statearr_26344_26399[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26305 === (19))){
var inst_26234 = (state_26304[(7)]);
var inst_26253 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26234);
var state_26304__$1 = state_26304;
var statearr_26345_26400 = state_26304__$1;
(statearr_26345_26400[(2)] = inst_26253);

(statearr_26345_26400[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26305 === (11))){
var inst_26234 = (state_26304[(7)]);
var inst_26238 = (inst_26234 == null);
var inst_26239 = cljs.core.not.call(null,inst_26238);
var state_26304__$1 = state_26304;
if(inst_26239){
var statearr_26346_26401 = state_26304__$1;
(statearr_26346_26401[(1)] = (13));

} else {
var statearr_26347_26402 = state_26304__$1;
(statearr_26347_26402[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26305 === (9))){
var inst_26210 = (state_26304[(8)]);
var state_26304__$1 = state_26304;
var statearr_26348_26403 = state_26304__$1;
(statearr_26348_26403[(2)] = inst_26210);

(statearr_26348_26403[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26305 === (5))){
var state_26304__$1 = state_26304;
var statearr_26349_26404 = state_26304__$1;
(statearr_26349_26404[(2)] = true);

(statearr_26349_26404[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26305 === (14))){
var state_26304__$1 = state_26304;
var statearr_26350_26405 = state_26304__$1;
(statearr_26350_26405[(2)] = false);

(statearr_26350_26405[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26305 === (26))){
var inst_26264 = (state_26304[(10)]);
var inst_26271 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_26264);
var state_26304__$1 = state_26304;
var statearr_26351_26406 = state_26304__$1;
(statearr_26351_26406[(2)] = inst_26271);

(statearr_26351_26406[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26305 === (16))){
var state_26304__$1 = state_26304;
var statearr_26352_26407 = state_26304__$1;
(statearr_26352_26407[(2)] = true);

(statearr_26352_26407[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26305 === (38))){
var inst_26294 = (state_26304[(2)]);
var state_26304__$1 = state_26304;
var statearr_26353_26408 = state_26304__$1;
(statearr_26353_26408[(2)] = inst_26294);

(statearr_26353_26408[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26305 === (30))){
var inst_26257 = (state_26304[(9)]);
var inst_26258 = (state_26304[(13)]);
var inst_26264 = (state_26304[(10)]);
var inst_26281 = cljs.core.empty_QMARK_.call(null,inst_26257);
var inst_26282 = inst_26258.call(null,inst_26264);
var inst_26283 = cljs.core.not.call(null,inst_26282);
var inst_26284 = (inst_26281) && (inst_26283);
var state_26304__$1 = state_26304;
var statearr_26354_26409 = state_26304__$1;
(statearr_26354_26409[(2)] = inst_26284);

(statearr_26354_26409[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26305 === (10))){
var inst_26210 = (state_26304[(8)]);
var inst_26230 = (state_26304[(2)]);
var inst_26231 = cljs.core.get.call(null,inst_26230,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_26232 = cljs.core.get.call(null,inst_26230,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26233 = cljs.core.get.call(null,inst_26230,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_26234 = inst_26210;
var state_26304__$1 = (function (){var statearr_26355 = state_26304;
(statearr_26355[(16)] = inst_26231);

(statearr_26355[(7)] = inst_26234);

(statearr_26355[(17)] = inst_26232);

(statearr_26355[(18)] = inst_26233);

return statearr_26355;
})();
var statearr_26356_26410 = state_26304__$1;
(statearr_26356_26410[(2)] = null);

(statearr_26356_26410[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26305 === (18))){
var inst_26248 = (state_26304[(2)]);
var state_26304__$1 = state_26304;
var statearr_26357_26411 = state_26304__$1;
(statearr_26357_26411[(2)] = inst_26248);

(statearr_26357_26411[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26305 === (37))){
var state_26304__$1 = state_26304;
var statearr_26358_26412 = state_26304__$1;
(statearr_26358_26412[(2)] = null);

(statearr_26358_26412[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26305 === (8))){
var inst_26210 = (state_26304[(8)]);
var inst_26227 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26210);
var state_26304__$1 = state_26304;
var statearr_26359_26413 = state_26304__$1;
(statearr_26359_26413[(2)] = inst_26227);

(statearr_26359_26413[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24640__auto___26367,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__24526__auto__,c__24640__auto___26367,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__24527__auto__ = null;
var cljs$core$async$mix_$_state_machine__24527__auto____0 = (function (){
var statearr_26363 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26363[(0)] = cljs$core$async$mix_$_state_machine__24527__auto__);

(statearr_26363[(1)] = (1));

return statearr_26363;
});
var cljs$core$async$mix_$_state_machine__24527__auto____1 = (function (state_26304){
while(true){
var ret_value__24528__auto__ = (function (){try{while(true){
var result__24529__auto__ = switch__24526__auto__.call(null,state_26304);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24529__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24529__auto__;
}
break;
}
}catch (e26364){if((e26364 instanceof Object)){
var ex__24530__auto__ = e26364;
var statearr_26365_26414 = state_26304;
(statearr_26365_26414[(5)] = ex__24530__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26304);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26364;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26415 = state_26304;
state_26304 = G__26415;
continue;
} else {
return ret_value__24528__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__24527__auto__ = function(state_26304){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__24527__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__24527__auto____1.call(this,state_26304);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__24527__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__24527__auto____0;
cljs$core$async$mix_$_state_machine__24527__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__24527__auto____1;
return cljs$core$async$mix_$_state_machine__24527__auto__;
})()
;})(switch__24526__auto__,c__24640__auto___26367,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__24642__auto__ = (function (){var statearr_26366 = f__24641__auto__.call(null);
(statearr_26366[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24640__auto___26367);

return statearr_26366;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24642__auto__);
});})(c__24640__auto___26367,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__20460__auto__ = (((p == null))?null:p);
var m__20461__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__20460__auto__)]);
if(!((m__20461__auto__ == null))){
return m__20461__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__20461__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__20461__auto____$1 == null))){
return m__20461__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__20460__auto__ = (((p == null))?null:p);
var m__20461__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__20460__auto__)]);
if(!((m__20461__auto__ == null))){
return m__20461__auto__.call(null,p,v,ch);
} else {
var m__20461__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__20461__auto____$1 == null))){
return m__20461__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args26416 = [];
var len__20930__auto___26419 = arguments.length;
var i__20931__auto___26420 = (0);
while(true){
if((i__20931__auto___26420 < len__20930__auto___26419)){
args26416.push((arguments[i__20931__auto___26420]));

var G__26421 = (i__20931__auto___26420 + (1));
i__20931__auto___26420 = G__26421;
continue;
} else {
}
break;
}

var G__26418 = args26416.length;
switch (G__26418) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26416.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__20460__auto__ = (((p == null))?null:p);
var m__20461__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__20460__auto__)]);
if(!((m__20461__auto__ == null))){
return m__20461__auto__.call(null,p);
} else {
var m__20461__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__20461__auto____$1 == null))){
return m__20461__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__20460__auto__ = (((p == null))?null:p);
var m__20461__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__20460__auto__)]);
if(!((m__20461__auto__ == null))){
return m__20461__auto__.call(null,p,v);
} else {
var m__20461__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__20461__auto____$1 == null))){
return m__20461__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args26424 = [];
var len__20930__auto___26549 = arguments.length;
var i__20931__auto___26550 = (0);
while(true){
if((i__20931__auto___26550 < len__20930__auto___26549)){
args26424.push((arguments[i__20931__auto___26550]));

var G__26551 = (i__20931__auto___26550 + (1));
i__20931__auto___26550 = G__26551;
continue;
} else {
}
break;
}

var G__26426 = args26424.length;
switch (G__26426) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26424.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__19747__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__19747__auto__)){
return or__19747__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__19747__auto__,mults){
return (function (p1__26423_SHARP_){
if(cljs.core.truth_(p1__26423_SHARP_.call(null,topic))){
return p1__26423_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__26423_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__19747__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async26427 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26427 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta26428){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta26428 = meta26428;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26427.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_26429,meta26428__$1){
var self__ = this;
var _26429__$1 = this;
return (new cljs.core.async.t_cljs$core$async26427(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta26428__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26427.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_26429){
var self__ = this;
var _26429__$1 = this;
return self__.meta26428;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26427.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async26427.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26427.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async26427.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26427.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__6144__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__6144__auto__)){
var m = temp__6144__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26427.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26427.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26427.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta26428","meta26428",2117547880,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26427.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26427.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26427";

cljs.core.async.t_cljs$core$async26427.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__20399__auto__,writer__20400__auto__,opt__20401__auto__){
return cljs.core._write.call(null,writer__20400__auto__,"cljs.core.async/t_cljs$core$async26427");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async26427 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async26427(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26428){
return (new cljs.core.async.t_cljs$core$async26427(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26428));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async26427(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24640__auto___26553 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24640__auto___26553,mults,ensure_mult,p){
return (function (){
var f__24641__auto__ = (function (){var switch__24526__auto__ = ((function (c__24640__auto___26553,mults,ensure_mult,p){
return (function (state_26501){
var state_val_26502 = (state_26501[(1)]);
if((state_val_26502 === (7))){
var inst_26497 = (state_26501[(2)]);
var state_26501__$1 = state_26501;
var statearr_26503_26554 = state_26501__$1;
(statearr_26503_26554[(2)] = inst_26497);

(statearr_26503_26554[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26502 === (20))){
var state_26501__$1 = state_26501;
var statearr_26504_26555 = state_26501__$1;
(statearr_26504_26555[(2)] = null);

(statearr_26504_26555[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26502 === (1))){
var state_26501__$1 = state_26501;
var statearr_26505_26556 = state_26501__$1;
(statearr_26505_26556[(2)] = null);

(statearr_26505_26556[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26502 === (24))){
var inst_26480 = (state_26501[(7)]);
var inst_26489 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_26480);
var state_26501__$1 = state_26501;
var statearr_26506_26557 = state_26501__$1;
(statearr_26506_26557[(2)] = inst_26489);

(statearr_26506_26557[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26502 === (4))){
var inst_26432 = (state_26501[(8)]);
var inst_26432__$1 = (state_26501[(2)]);
var inst_26433 = (inst_26432__$1 == null);
var state_26501__$1 = (function (){var statearr_26507 = state_26501;
(statearr_26507[(8)] = inst_26432__$1);

return statearr_26507;
})();
if(cljs.core.truth_(inst_26433)){
var statearr_26508_26558 = state_26501__$1;
(statearr_26508_26558[(1)] = (5));

} else {
var statearr_26509_26559 = state_26501__$1;
(statearr_26509_26559[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26502 === (15))){
var inst_26474 = (state_26501[(2)]);
var state_26501__$1 = state_26501;
var statearr_26510_26560 = state_26501__$1;
(statearr_26510_26560[(2)] = inst_26474);

(statearr_26510_26560[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26502 === (21))){
var inst_26494 = (state_26501[(2)]);
var state_26501__$1 = (function (){var statearr_26511 = state_26501;
(statearr_26511[(9)] = inst_26494);

return statearr_26511;
})();
var statearr_26512_26561 = state_26501__$1;
(statearr_26512_26561[(2)] = null);

(statearr_26512_26561[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26502 === (13))){
var inst_26456 = (state_26501[(10)]);
var inst_26458 = cljs.core.chunked_seq_QMARK_.call(null,inst_26456);
var state_26501__$1 = state_26501;
if(inst_26458){
var statearr_26513_26562 = state_26501__$1;
(statearr_26513_26562[(1)] = (16));

} else {
var statearr_26514_26563 = state_26501__$1;
(statearr_26514_26563[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26502 === (22))){
var inst_26486 = (state_26501[(2)]);
var state_26501__$1 = state_26501;
if(cljs.core.truth_(inst_26486)){
var statearr_26515_26564 = state_26501__$1;
(statearr_26515_26564[(1)] = (23));

} else {
var statearr_26516_26565 = state_26501__$1;
(statearr_26516_26565[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26502 === (6))){
var inst_26480 = (state_26501[(7)]);
var inst_26432 = (state_26501[(8)]);
var inst_26482 = (state_26501[(11)]);
var inst_26480__$1 = topic_fn.call(null,inst_26432);
var inst_26481 = cljs.core.deref.call(null,mults);
var inst_26482__$1 = cljs.core.get.call(null,inst_26481,inst_26480__$1);
var state_26501__$1 = (function (){var statearr_26517 = state_26501;
(statearr_26517[(7)] = inst_26480__$1);

(statearr_26517[(11)] = inst_26482__$1);

return statearr_26517;
})();
if(cljs.core.truth_(inst_26482__$1)){
var statearr_26518_26566 = state_26501__$1;
(statearr_26518_26566[(1)] = (19));

} else {
var statearr_26519_26567 = state_26501__$1;
(statearr_26519_26567[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26502 === (25))){
var inst_26491 = (state_26501[(2)]);
var state_26501__$1 = state_26501;
var statearr_26520_26568 = state_26501__$1;
(statearr_26520_26568[(2)] = inst_26491);

(statearr_26520_26568[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26502 === (17))){
var inst_26456 = (state_26501[(10)]);
var inst_26465 = cljs.core.first.call(null,inst_26456);
var inst_26466 = cljs.core.async.muxch_STAR_.call(null,inst_26465);
var inst_26467 = cljs.core.async.close_BANG_.call(null,inst_26466);
var inst_26468 = cljs.core.next.call(null,inst_26456);
var inst_26442 = inst_26468;
var inst_26443 = null;
var inst_26444 = (0);
var inst_26445 = (0);
var state_26501__$1 = (function (){var statearr_26521 = state_26501;
(statearr_26521[(12)] = inst_26445);

(statearr_26521[(13)] = inst_26444);

(statearr_26521[(14)] = inst_26442);

(statearr_26521[(15)] = inst_26443);

(statearr_26521[(16)] = inst_26467);

return statearr_26521;
})();
var statearr_26522_26569 = state_26501__$1;
(statearr_26522_26569[(2)] = null);

(statearr_26522_26569[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26502 === (3))){
var inst_26499 = (state_26501[(2)]);
var state_26501__$1 = state_26501;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26501__$1,inst_26499);
} else {
if((state_val_26502 === (12))){
var inst_26476 = (state_26501[(2)]);
var state_26501__$1 = state_26501;
var statearr_26523_26570 = state_26501__$1;
(statearr_26523_26570[(2)] = inst_26476);

(statearr_26523_26570[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26502 === (2))){
var state_26501__$1 = state_26501;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26501__$1,(4),ch);
} else {
if((state_val_26502 === (23))){
var state_26501__$1 = state_26501;
var statearr_26524_26571 = state_26501__$1;
(statearr_26524_26571[(2)] = null);

(statearr_26524_26571[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26502 === (19))){
var inst_26432 = (state_26501[(8)]);
var inst_26482 = (state_26501[(11)]);
var inst_26484 = cljs.core.async.muxch_STAR_.call(null,inst_26482);
var state_26501__$1 = state_26501;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26501__$1,(22),inst_26484,inst_26432);
} else {
if((state_val_26502 === (11))){
var inst_26442 = (state_26501[(14)]);
var inst_26456 = (state_26501[(10)]);
var inst_26456__$1 = cljs.core.seq.call(null,inst_26442);
var state_26501__$1 = (function (){var statearr_26525 = state_26501;
(statearr_26525[(10)] = inst_26456__$1);

return statearr_26525;
})();
if(inst_26456__$1){
var statearr_26526_26572 = state_26501__$1;
(statearr_26526_26572[(1)] = (13));

} else {
var statearr_26527_26573 = state_26501__$1;
(statearr_26527_26573[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26502 === (9))){
var inst_26478 = (state_26501[(2)]);
var state_26501__$1 = state_26501;
var statearr_26528_26574 = state_26501__$1;
(statearr_26528_26574[(2)] = inst_26478);

(statearr_26528_26574[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26502 === (5))){
var inst_26439 = cljs.core.deref.call(null,mults);
var inst_26440 = cljs.core.vals.call(null,inst_26439);
var inst_26441 = cljs.core.seq.call(null,inst_26440);
var inst_26442 = inst_26441;
var inst_26443 = null;
var inst_26444 = (0);
var inst_26445 = (0);
var state_26501__$1 = (function (){var statearr_26529 = state_26501;
(statearr_26529[(12)] = inst_26445);

(statearr_26529[(13)] = inst_26444);

(statearr_26529[(14)] = inst_26442);

(statearr_26529[(15)] = inst_26443);

return statearr_26529;
})();
var statearr_26530_26575 = state_26501__$1;
(statearr_26530_26575[(2)] = null);

(statearr_26530_26575[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26502 === (14))){
var state_26501__$1 = state_26501;
var statearr_26534_26576 = state_26501__$1;
(statearr_26534_26576[(2)] = null);

(statearr_26534_26576[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26502 === (16))){
var inst_26456 = (state_26501[(10)]);
var inst_26460 = cljs.core.chunk_first.call(null,inst_26456);
var inst_26461 = cljs.core.chunk_rest.call(null,inst_26456);
var inst_26462 = cljs.core.count.call(null,inst_26460);
var inst_26442 = inst_26461;
var inst_26443 = inst_26460;
var inst_26444 = inst_26462;
var inst_26445 = (0);
var state_26501__$1 = (function (){var statearr_26535 = state_26501;
(statearr_26535[(12)] = inst_26445);

(statearr_26535[(13)] = inst_26444);

(statearr_26535[(14)] = inst_26442);

(statearr_26535[(15)] = inst_26443);

return statearr_26535;
})();
var statearr_26536_26577 = state_26501__$1;
(statearr_26536_26577[(2)] = null);

(statearr_26536_26577[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26502 === (10))){
var inst_26445 = (state_26501[(12)]);
var inst_26444 = (state_26501[(13)]);
var inst_26442 = (state_26501[(14)]);
var inst_26443 = (state_26501[(15)]);
var inst_26450 = cljs.core._nth.call(null,inst_26443,inst_26445);
var inst_26451 = cljs.core.async.muxch_STAR_.call(null,inst_26450);
var inst_26452 = cljs.core.async.close_BANG_.call(null,inst_26451);
var inst_26453 = (inst_26445 + (1));
var tmp26531 = inst_26444;
var tmp26532 = inst_26442;
var tmp26533 = inst_26443;
var inst_26442__$1 = tmp26532;
var inst_26443__$1 = tmp26533;
var inst_26444__$1 = tmp26531;
var inst_26445__$1 = inst_26453;
var state_26501__$1 = (function (){var statearr_26537 = state_26501;
(statearr_26537[(12)] = inst_26445__$1);

(statearr_26537[(13)] = inst_26444__$1);

(statearr_26537[(14)] = inst_26442__$1);

(statearr_26537[(15)] = inst_26443__$1);

(statearr_26537[(17)] = inst_26452);

return statearr_26537;
})();
var statearr_26538_26578 = state_26501__$1;
(statearr_26538_26578[(2)] = null);

(statearr_26538_26578[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26502 === (18))){
var inst_26471 = (state_26501[(2)]);
var state_26501__$1 = state_26501;
var statearr_26539_26579 = state_26501__$1;
(statearr_26539_26579[(2)] = inst_26471);

(statearr_26539_26579[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26502 === (8))){
var inst_26445 = (state_26501[(12)]);
var inst_26444 = (state_26501[(13)]);
var inst_26447 = (inst_26445 < inst_26444);
var inst_26448 = inst_26447;
var state_26501__$1 = state_26501;
if(cljs.core.truth_(inst_26448)){
var statearr_26540_26580 = state_26501__$1;
(statearr_26540_26580[(1)] = (10));

} else {
var statearr_26541_26581 = state_26501__$1;
(statearr_26541_26581[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24640__auto___26553,mults,ensure_mult,p))
;
return ((function (switch__24526__auto__,c__24640__auto___26553,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__24527__auto__ = null;
var cljs$core$async$state_machine__24527__auto____0 = (function (){
var statearr_26545 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26545[(0)] = cljs$core$async$state_machine__24527__auto__);

(statearr_26545[(1)] = (1));

return statearr_26545;
});
var cljs$core$async$state_machine__24527__auto____1 = (function (state_26501){
while(true){
var ret_value__24528__auto__ = (function (){try{while(true){
var result__24529__auto__ = switch__24526__auto__.call(null,state_26501);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24529__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24529__auto__;
}
break;
}
}catch (e26546){if((e26546 instanceof Object)){
var ex__24530__auto__ = e26546;
var statearr_26547_26582 = state_26501;
(statearr_26547_26582[(5)] = ex__24530__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26501);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26546;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26583 = state_26501;
state_26501 = G__26583;
continue;
} else {
return ret_value__24528__auto__;
}
break;
}
});
cljs$core$async$state_machine__24527__auto__ = function(state_26501){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24527__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24527__auto____1.call(this,state_26501);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24527__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24527__auto____0;
cljs$core$async$state_machine__24527__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24527__auto____1;
return cljs$core$async$state_machine__24527__auto__;
})()
;})(switch__24526__auto__,c__24640__auto___26553,mults,ensure_mult,p))
})();
var state__24642__auto__ = (function (){var statearr_26548 = f__24641__auto__.call(null);
(statearr_26548[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24640__auto___26553);

return statearr_26548;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24642__auto__);
});})(c__24640__auto___26553,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args26584 = [];
var len__20930__auto___26587 = arguments.length;
var i__20931__auto___26588 = (0);
while(true){
if((i__20931__auto___26588 < len__20930__auto___26587)){
args26584.push((arguments[i__20931__auto___26588]));

var G__26589 = (i__20931__auto___26588 + (1));
i__20931__auto___26588 = G__26589;
continue;
} else {
}
break;
}

var G__26586 = args26584.length;
switch (G__26586) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26584.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args26591 = [];
var len__20930__auto___26594 = arguments.length;
var i__20931__auto___26595 = (0);
while(true){
if((i__20931__auto___26595 < len__20930__auto___26594)){
args26591.push((arguments[i__20931__auto___26595]));

var G__26596 = (i__20931__auto___26595 + (1));
i__20931__auto___26595 = G__26596;
continue;
} else {
}
break;
}

var G__26593 = args26591.length;
switch (G__26593) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26591.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args26598 = [];
var len__20930__auto___26669 = arguments.length;
var i__20931__auto___26670 = (0);
while(true){
if((i__20931__auto___26670 < len__20930__auto___26669)){
args26598.push((arguments[i__20931__auto___26670]));

var G__26671 = (i__20931__auto___26670 + (1));
i__20931__auto___26670 = G__26671;
continue;
} else {
}
break;
}

var G__26600 = args26598.length;
switch (G__26600) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26598.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__24640__auto___26673 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24640__auto___26673,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__24641__auto__ = (function (){var switch__24526__auto__ = ((function (c__24640__auto___26673,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_26639){
var state_val_26640 = (state_26639[(1)]);
if((state_val_26640 === (7))){
var state_26639__$1 = state_26639;
var statearr_26641_26674 = state_26639__$1;
(statearr_26641_26674[(2)] = null);

(statearr_26641_26674[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26640 === (1))){
var state_26639__$1 = state_26639;
var statearr_26642_26675 = state_26639__$1;
(statearr_26642_26675[(2)] = null);

(statearr_26642_26675[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26640 === (4))){
var inst_26603 = (state_26639[(7)]);
var inst_26605 = (inst_26603 < cnt);
var state_26639__$1 = state_26639;
if(cljs.core.truth_(inst_26605)){
var statearr_26643_26676 = state_26639__$1;
(statearr_26643_26676[(1)] = (6));

} else {
var statearr_26644_26677 = state_26639__$1;
(statearr_26644_26677[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26640 === (15))){
var inst_26635 = (state_26639[(2)]);
var state_26639__$1 = state_26639;
var statearr_26645_26678 = state_26639__$1;
(statearr_26645_26678[(2)] = inst_26635);

(statearr_26645_26678[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26640 === (13))){
var inst_26628 = cljs.core.async.close_BANG_.call(null,out);
var state_26639__$1 = state_26639;
var statearr_26646_26679 = state_26639__$1;
(statearr_26646_26679[(2)] = inst_26628);

(statearr_26646_26679[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26640 === (6))){
var state_26639__$1 = state_26639;
var statearr_26647_26680 = state_26639__$1;
(statearr_26647_26680[(2)] = null);

(statearr_26647_26680[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26640 === (3))){
var inst_26637 = (state_26639[(2)]);
var state_26639__$1 = state_26639;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26639__$1,inst_26637);
} else {
if((state_val_26640 === (12))){
var inst_26625 = (state_26639[(8)]);
var inst_26625__$1 = (state_26639[(2)]);
var inst_26626 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_26625__$1);
var state_26639__$1 = (function (){var statearr_26648 = state_26639;
(statearr_26648[(8)] = inst_26625__$1);

return statearr_26648;
})();
if(cljs.core.truth_(inst_26626)){
var statearr_26649_26681 = state_26639__$1;
(statearr_26649_26681[(1)] = (13));

} else {
var statearr_26650_26682 = state_26639__$1;
(statearr_26650_26682[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26640 === (2))){
var inst_26602 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_26603 = (0);
var state_26639__$1 = (function (){var statearr_26651 = state_26639;
(statearr_26651[(7)] = inst_26603);

(statearr_26651[(9)] = inst_26602);

return statearr_26651;
})();
var statearr_26652_26683 = state_26639__$1;
(statearr_26652_26683[(2)] = null);

(statearr_26652_26683[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26640 === (11))){
var inst_26603 = (state_26639[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26639,(10),Object,null,(9));
var inst_26612 = chs__$1.call(null,inst_26603);
var inst_26613 = done.call(null,inst_26603);
var inst_26614 = cljs.core.async.take_BANG_.call(null,inst_26612,inst_26613);
var state_26639__$1 = state_26639;
var statearr_26653_26684 = state_26639__$1;
(statearr_26653_26684[(2)] = inst_26614);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26639__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26640 === (9))){
var inst_26603 = (state_26639[(7)]);
var inst_26616 = (state_26639[(2)]);
var inst_26617 = (inst_26603 + (1));
var inst_26603__$1 = inst_26617;
var state_26639__$1 = (function (){var statearr_26654 = state_26639;
(statearr_26654[(7)] = inst_26603__$1);

(statearr_26654[(10)] = inst_26616);

return statearr_26654;
})();
var statearr_26655_26685 = state_26639__$1;
(statearr_26655_26685[(2)] = null);

(statearr_26655_26685[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26640 === (5))){
var inst_26623 = (state_26639[(2)]);
var state_26639__$1 = (function (){var statearr_26656 = state_26639;
(statearr_26656[(11)] = inst_26623);

return statearr_26656;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26639__$1,(12),dchan);
} else {
if((state_val_26640 === (14))){
var inst_26625 = (state_26639[(8)]);
var inst_26630 = cljs.core.apply.call(null,f,inst_26625);
var state_26639__$1 = state_26639;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26639__$1,(16),out,inst_26630);
} else {
if((state_val_26640 === (16))){
var inst_26632 = (state_26639[(2)]);
var state_26639__$1 = (function (){var statearr_26657 = state_26639;
(statearr_26657[(12)] = inst_26632);

return statearr_26657;
})();
var statearr_26658_26686 = state_26639__$1;
(statearr_26658_26686[(2)] = null);

(statearr_26658_26686[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26640 === (10))){
var inst_26607 = (state_26639[(2)]);
var inst_26608 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_26639__$1 = (function (){var statearr_26659 = state_26639;
(statearr_26659[(13)] = inst_26607);

return statearr_26659;
})();
var statearr_26660_26687 = state_26639__$1;
(statearr_26660_26687[(2)] = inst_26608);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26639__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26640 === (8))){
var inst_26621 = (state_26639[(2)]);
var state_26639__$1 = state_26639;
var statearr_26661_26688 = state_26639__$1;
(statearr_26661_26688[(2)] = inst_26621);

(statearr_26661_26688[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24640__auto___26673,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__24526__auto__,c__24640__auto___26673,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__24527__auto__ = null;
var cljs$core$async$state_machine__24527__auto____0 = (function (){
var statearr_26665 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26665[(0)] = cljs$core$async$state_machine__24527__auto__);

(statearr_26665[(1)] = (1));

return statearr_26665;
});
var cljs$core$async$state_machine__24527__auto____1 = (function (state_26639){
while(true){
var ret_value__24528__auto__ = (function (){try{while(true){
var result__24529__auto__ = switch__24526__auto__.call(null,state_26639);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24529__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24529__auto__;
}
break;
}
}catch (e26666){if((e26666 instanceof Object)){
var ex__24530__auto__ = e26666;
var statearr_26667_26689 = state_26639;
(statearr_26667_26689[(5)] = ex__24530__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26639);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26666;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26690 = state_26639;
state_26639 = G__26690;
continue;
} else {
return ret_value__24528__auto__;
}
break;
}
});
cljs$core$async$state_machine__24527__auto__ = function(state_26639){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24527__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24527__auto____1.call(this,state_26639);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24527__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24527__auto____0;
cljs$core$async$state_machine__24527__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24527__auto____1;
return cljs$core$async$state_machine__24527__auto__;
})()
;})(switch__24526__auto__,c__24640__auto___26673,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__24642__auto__ = (function (){var statearr_26668 = f__24641__auto__.call(null);
(statearr_26668[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24640__auto___26673);

return statearr_26668;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24642__auto__);
});})(c__24640__auto___26673,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args26692 = [];
var len__20930__auto___26748 = arguments.length;
var i__20931__auto___26749 = (0);
while(true){
if((i__20931__auto___26749 < len__20930__auto___26748)){
args26692.push((arguments[i__20931__auto___26749]));

var G__26750 = (i__20931__auto___26749 + (1));
i__20931__auto___26749 = G__26750;
continue;
} else {
}
break;
}

var G__26694 = args26692.length;
switch (G__26694) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26692.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24640__auto___26752 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24640__auto___26752,out){
return (function (){
var f__24641__auto__ = (function (){var switch__24526__auto__ = ((function (c__24640__auto___26752,out){
return (function (state_26724){
var state_val_26725 = (state_26724[(1)]);
if((state_val_26725 === (7))){
var inst_26703 = (state_26724[(7)]);
var inst_26704 = (state_26724[(8)]);
var inst_26703__$1 = (state_26724[(2)]);
var inst_26704__$1 = cljs.core.nth.call(null,inst_26703__$1,(0),null);
var inst_26705 = cljs.core.nth.call(null,inst_26703__$1,(1),null);
var inst_26706 = (inst_26704__$1 == null);
var state_26724__$1 = (function (){var statearr_26726 = state_26724;
(statearr_26726[(7)] = inst_26703__$1);

(statearr_26726[(9)] = inst_26705);

(statearr_26726[(8)] = inst_26704__$1);

return statearr_26726;
})();
if(cljs.core.truth_(inst_26706)){
var statearr_26727_26753 = state_26724__$1;
(statearr_26727_26753[(1)] = (8));

} else {
var statearr_26728_26754 = state_26724__$1;
(statearr_26728_26754[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26725 === (1))){
var inst_26695 = cljs.core.vec.call(null,chs);
var inst_26696 = inst_26695;
var state_26724__$1 = (function (){var statearr_26729 = state_26724;
(statearr_26729[(10)] = inst_26696);

return statearr_26729;
})();
var statearr_26730_26755 = state_26724__$1;
(statearr_26730_26755[(2)] = null);

(statearr_26730_26755[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26725 === (4))){
var inst_26696 = (state_26724[(10)]);
var state_26724__$1 = state_26724;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26724__$1,(7),inst_26696);
} else {
if((state_val_26725 === (6))){
var inst_26720 = (state_26724[(2)]);
var state_26724__$1 = state_26724;
var statearr_26731_26756 = state_26724__$1;
(statearr_26731_26756[(2)] = inst_26720);

(statearr_26731_26756[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26725 === (3))){
var inst_26722 = (state_26724[(2)]);
var state_26724__$1 = state_26724;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26724__$1,inst_26722);
} else {
if((state_val_26725 === (2))){
var inst_26696 = (state_26724[(10)]);
var inst_26698 = cljs.core.count.call(null,inst_26696);
var inst_26699 = (inst_26698 > (0));
var state_26724__$1 = state_26724;
if(cljs.core.truth_(inst_26699)){
var statearr_26733_26757 = state_26724__$1;
(statearr_26733_26757[(1)] = (4));

} else {
var statearr_26734_26758 = state_26724__$1;
(statearr_26734_26758[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26725 === (11))){
var inst_26696 = (state_26724[(10)]);
var inst_26713 = (state_26724[(2)]);
var tmp26732 = inst_26696;
var inst_26696__$1 = tmp26732;
var state_26724__$1 = (function (){var statearr_26735 = state_26724;
(statearr_26735[(10)] = inst_26696__$1);

(statearr_26735[(11)] = inst_26713);

return statearr_26735;
})();
var statearr_26736_26759 = state_26724__$1;
(statearr_26736_26759[(2)] = null);

(statearr_26736_26759[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26725 === (9))){
var inst_26704 = (state_26724[(8)]);
var state_26724__$1 = state_26724;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26724__$1,(11),out,inst_26704);
} else {
if((state_val_26725 === (5))){
var inst_26718 = cljs.core.async.close_BANG_.call(null,out);
var state_26724__$1 = state_26724;
var statearr_26737_26760 = state_26724__$1;
(statearr_26737_26760[(2)] = inst_26718);

(statearr_26737_26760[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26725 === (10))){
var inst_26716 = (state_26724[(2)]);
var state_26724__$1 = state_26724;
var statearr_26738_26761 = state_26724__$1;
(statearr_26738_26761[(2)] = inst_26716);

(statearr_26738_26761[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26725 === (8))){
var inst_26696 = (state_26724[(10)]);
var inst_26703 = (state_26724[(7)]);
var inst_26705 = (state_26724[(9)]);
var inst_26704 = (state_26724[(8)]);
var inst_26708 = (function (){var cs = inst_26696;
var vec__26701 = inst_26703;
var v = inst_26704;
var c = inst_26705;
return ((function (cs,vec__26701,v,c,inst_26696,inst_26703,inst_26705,inst_26704,state_val_26725,c__24640__auto___26752,out){
return (function (p1__26691_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__26691_SHARP_);
});
;})(cs,vec__26701,v,c,inst_26696,inst_26703,inst_26705,inst_26704,state_val_26725,c__24640__auto___26752,out))
})();
var inst_26709 = cljs.core.filterv.call(null,inst_26708,inst_26696);
var inst_26696__$1 = inst_26709;
var state_26724__$1 = (function (){var statearr_26739 = state_26724;
(statearr_26739[(10)] = inst_26696__$1);

return statearr_26739;
})();
var statearr_26740_26762 = state_26724__$1;
(statearr_26740_26762[(2)] = null);

(statearr_26740_26762[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__24640__auto___26752,out))
;
return ((function (switch__24526__auto__,c__24640__auto___26752,out){
return (function() {
var cljs$core$async$state_machine__24527__auto__ = null;
var cljs$core$async$state_machine__24527__auto____0 = (function (){
var statearr_26744 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26744[(0)] = cljs$core$async$state_machine__24527__auto__);

(statearr_26744[(1)] = (1));

return statearr_26744;
});
var cljs$core$async$state_machine__24527__auto____1 = (function (state_26724){
while(true){
var ret_value__24528__auto__ = (function (){try{while(true){
var result__24529__auto__ = switch__24526__auto__.call(null,state_26724);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24529__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24529__auto__;
}
break;
}
}catch (e26745){if((e26745 instanceof Object)){
var ex__24530__auto__ = e26745;
var statearr_26746_26763 = state_26724;
(statearr_26746_26763[(5)] = ex__24530__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26724);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26745;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26764 = state_26724;
state_26724 = G__26764;
continue;
} else {
return ret_value__24528__auto__;
}
break;
}
});
cljs$core$async$state_machine__24527__auto__ = function(state_26724){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24527__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24527__auto____1.call(this,state_26724);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24527__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24527__auto____0;
cljs$core$async$state_machine__24527__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24527__auto____1;
return cljs$core$async$state_machine__24527__auto__;
})()
;})(switch__24526__auto__,c__24640__auto___26752,out))
})();
var state__24642__auto__ = (function (){var statearr_26747 = f__24641__auto__.call(null);
(statearr_26747[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24640__auto___26752);

return statearr_26747;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24642__auto__);
});})(c__24640__auto___26752,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args26765 = [];
var len__20930__auto___26814 = arguments.length;
var i__20931__auto___26815 = (0);
while(true){
if((i__20931__auto___26815 < len__20930__auto___26814)){
args26765.push((arguments[i__20931__auto___26815]));

var G__26816 = (i__20931__auto___26815 + (1));
i__20931__auto___26815 = G__26816;
continue;
} else {
}
break;
}

var G__26767 = args26765.length;
switch (G__26767) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26765.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24640__auto___26818 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24640__auto___26818,out){
return (function (){
var f__24641__auto__ = (function (){var switch__24526__auto__ = ((function (c__24640__auto___26818,out){
return (function (state_26791){
var state_val_26792 = (state_26791[(1)]);
if((state_val_26792 === (7))){
var inst_26773 = (state_26791[(7)]);
var inst_26773__$1 = (state_26791[(2)]);
var inst_26774 = (inst_26773__$1 == null);
var inst_26775 = cljs.core.not.call(null,inst_26774);
var state_26791__$1 = (function (){var statearr_26793 = state_26791;
(statearr_26793[(7)] = inst_26773__$1);

return statearr_26793;
})();
if(inst_26775){
var statearr_26794_26819 = state_26791__$1;
(statearr_26794_26819[(1)] = (8));

} else {
var statearr_26795_26820 = state_26791__$1;
(statearr_26795_26820[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26792 === (1))){
var inst_26768 = (0);
var state_26791__$1 = (function (){var statearr_26796 = state_26791;
(statearr_26796[(8)] = inst_26768);

return statearr_26796;
})();
var statearr_26797_26821 = state_26791__$1;
(statearr_26797_26821[(2)] = null);

(statearr_26797_26821[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26792 === (4))){
var state_26791__$1 = state_26791;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26791__$1,(7),ch);
} else {
if((state_val_26792 === (6))){
var inst_26786 = (state_26791[(2)]);
var state_26791__$1 = state_26791;
var statearr_26798_26822 = state_26791__$1;
(statearr_26798_26822[(2)] = inst_26786);

(statearr_26798_26822[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26792 === (3))){
var inst_26788 = (state_26791[(2)]);
var inst_26789 = cljs.core.async.close_BANG_.call(null,out);
var state_26791__$1 = (function (){var statearr_26799 = state_26791;
(statearr_26799[(9)] = inst_26788);

return statearr_26799;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26791__$1,inst_26789);
} else {
if((state_val_26792 === (2))){
var inst_26768 = (state_26791[(8)]);
var inst_26770 = (inst_26768 < n);
var state_26791__$1 = state_26791;
if(cljs.core.truth_(inst_26770)){
var statearr_26800_26823 = state_26791__$1;
(statearr_26800_26823[(1)] = (4));

} else {
var statearr_26801_26824 = state_26791__$1;
(statearr_26801_26824[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26792 === (11))){
var inst_26768 = (state_26791[(8)]);
var inst_26778 = (state_26791[(2)]);
var inst_26779 = (inst_26768 + (1));
var inst_26768__$1 = inst_26779;
var state_26791__$1 = (function (){var statearr_26802 = state_26791;
(statearr_26802[(8)] = inst_26768__$1);

(statearr_26802[(10)] = inst_26778);

return statearr_26802;
})();
var statearr_26803_26825 = state_26791__$1;
(statearr_26803_26825[(2)] = null);

(statearr_26803_26825[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26792 === (9))){
var state_26791__$1 = state_26791;
var statearr_26804_26826 = state_26791__$1;
(statearr_26804_26826[(2)] = null);

(statearr_26804_26826[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26792 === (5))){
var state_26791__$1 = state_26791;
var statearr_26805_26827 = state_26791__$1;
(statearr_26805_26827[(2)] = null);

(statearr_26805_26827[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26792 === (10))){
var inst_26783 = (state_26791[(2)]);
var state_26791__$1 = state_26791;
var statearr_26806_26828 = state_26791__$1;
(statearr_26806_26828[(2)] = inst_26783);

(statearr_26806_26828[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26792 === (8))){
var inst_26773 = (state_26791[(7)]);
var state_26791__$1 = state_26791;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26791__$1,(11),out,inst_26773);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__24640__auto___26818,out))
;
return ((function (switch__24526__auto__,c__24640__auto___26818,out){
return (function() {
var cljs$core$async$state_machine__24527__auto__ = null;
var cljs$core$async$state_machine__24527__auto____0 = (function (){
var statearr_26810 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26810[(0)] = cljs$core$async$state_machine__24527__auto__);

(statearr_26810[(1)] = (1));

return statearr_26810;
});
var cljs$core$async$state_machine__24527__auto____1 = (function (state_26791){
while(true){
var ret_value__24528__auto__ = (function (){try{while(true){
var result__24529__auto__ = switch__24526__auto__.call(null,state_26791);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24529__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24529__auto__;
}
break;
}
}catch (e26811){if((e26811 instanceof Object)){
var ex__24530__auto__ = e26811;
var statearr_26812_26829 = state_26791;
(statearr_26812_26829[(5)] = ex__24530__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26791);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26811;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26830 = state_26791;
state_26791 = G__26830;
continue;
} else {
return ret_value__24528__auto__;
}
break;
}
});
cljs$core$async$state_machine__24527__auto__ = function(state_26791){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24527__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24527__auto____1.call(this,state_26791);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24527__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24527__auto____0;
cljs$core$async$state_machine__24527__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24527__auto____1;
return cljs$core$async$state_machine__24527__auto__;
})()
;})(switch__24526__auto__,c__24640__auto___26818,out))
})();
var state__24642__auto__ = (function (){var statearr_26813 = f__24641__auto__.call(null);
(statearr_26813[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24640__auto___26818);

return statearr_26813;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24642__auto__);
});})(c__24640__auto___26818,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async26838 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26838 = (function (map_LT_,f,ch,meta26839){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta26839 = meta26839;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26838.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26840,meta26839__$1){
var self__ = this;
var _26840__$1 = this;
return (new cljs.core.async.t_cljs$core$async26838(self__.map_LT_,self__.f,self__.ch,meta26839__$1));
});

cljs.core.async.t_cljs$core$async26838.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26840){
var self__ = this;
var _26840__$1 = this;
return self__.meta26839;
});

cljs.core.async.t_cljs$core$async26838.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async26838.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26838.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26838.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async26838.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async26841 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26841 = (function (map_LT_,f,ch,meta26839,_,fn1,meta26842){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta26839 = meta26839;
this._ = _;
this.fn1 = fn1;
this.meta26842 = meta26842;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26841.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_26843,meta26842__$1){
var self__ = this;
var _26843__$1 = this;
return (new cljs.core.async.t_cljs$core$async26841(self__.map_LT_,self__.f,self__.ch,self__.meta26839,self__._,self__.fn1,meta26842__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async26841.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_26843){
var self__ = this;
var _26843__$1 = this;
return self__.meta26842;
});})(___$1))
;

cljs.core.async.t_cljs$core$async26841.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async26841.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async26841.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async26841.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__26831_SHARP_){
return f1.call(null,(((p1__26831_SHARP_ == null))?null:self__.f.call(null,p1__26831_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async26841.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26839","meta26839",244316649,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async26838","cljs.core.async/t_cljs$core$async26838",1483399576,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta26842","meta26842",-228768669,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async26841.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26841.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26841";

cljs.core.async.t_cljs$core$async26841.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__20399__auto__,writer__20400__auto__,opt__20401__auto__){
return cljs.core._write.call(null,writer__20400__auto__,"cljs.core.async/t_cljs$core$async26841");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async26841 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26841(map_LT___$1,f__$1,ch__$1,meta26839__$1,___$2,fn1__$1,meta26842){
return (new cljs.core.async.t_cljs$core$async26841(map_LT___$1,f__$1,ch__$1,meta26839__$1,___$2,fn1__$1,meta26842));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async26841(self__.map_LT_,self__.f,self__.ch,self__.meta26839,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__19735__auto__ = ret;
if(cljs.core.truth_(and__19735__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__19735__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async26838.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async26838.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async26838.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26839","meta26839",244316649,null)], null);
});

cljs.core.async.t_cljs$core$async26838.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26838.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26838";

cljs.core.async.t_cljs$core$async26838.cljs$lang$ctorPrWriter = (function (this__20399__auto__,writer__20400__auto__,opt__20401__auto__){
return cljs.core._write.call(null,writer__20400__auto__,"cljs.core.async/t_cljs$core$async26838");
});

cljs.core.async.__GT_t_cljs$core$async26838 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26838(map_LT___$1,f__$1,ch__$1,meta26839){
return (new cljs.core.async.t_cljs$core$async26838(map_LT___$1,f__$1,ch__$1,meta26839));
});

}

return (new cljs.core.async.t_cljs$core$async26838(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async26847 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26847 = (function (map_GT_,f,ch,meta26848){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta26848 = meta26848;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26847.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26849,meta26848__$1){
var self__ = this;
var _26849__$1 = this;
return (new cljs.core.async.t_cljs$core$async26847(self__.map_GT_,self__.f,self__.ch,meta26848__$1));
});

cljs.core.async.t_cljs$core$async26847.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26849){
var self__ = this;
var _26849__$1 = this;
return self__.meta26848;
});

cljs.core.async.t_cljs$core$async26847.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async26847.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26847.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async26847.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async26847.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async26847.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async26847.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26848","meta26848",1273347706,null)], null);
});

cljs.core.async.t_cljs$core$async26847.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26847.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26847";

cljs.core.async.t_cljs$core$async26847.cljs$lang$ctorPrWriter = (function (this__20399__auto__,writer__20400__auto__,opt__20401__auto__){
return cljs.core._write.call(null,writer__20400__auto__,"cljs.core.async/t_cljs$core$async26847");
});

cljs.core.async.__GT_t_cljs$core$async26847 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async26847(map_GT___$1,f__$1,ch__$1,meta26848){
return (new cljs.core.async.t_cljs$core$async26847(map_GT___$1,f__$1,ch__$1,meta26848));
});

}

return (new cljs.core.async.t_cljs$core$async26847(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async26853 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26853 = (function (filter_GT_,p,ch,meta26854){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta26854 = meta26854;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26853.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26855,meta26854__$1){
var self__ = this;
var _26855__$1 = this;
return (new cljs.core.async.t_cljs$core$async26853(self__.filter_GT_,self__.p,self__.ch,meta26854__$1));
});

cljs.core.async.t_cljs$core$async26853.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26855){
var self__ = this;
var _26855__$1 = this;
return self__.meta26854;
});

cljs.core.async.t_cljs$core$async26853.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async26853.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26853.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26853.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async26853.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async26853.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async26853.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async26853.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26854","meta26854",1482031586,null)], null);
});

cljs.core.async.t_cljs$core$async26853.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26853.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26853";

cljs.core.async.t_cljs$core$async26853.cljs$lang$ctorPrWriter = (function (this__20399__auto__,writer__20400__auto__,opt__20401__auto__){
return cljs.core._write.call(null,writer__20400__auto__,"cljs.core.async/t_cljs$core$async26853");
});

cljs.core.async.__GT_t_cljs$core$async26853 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async26853(filter_GT___$1,p__$1,ch__$1,meta26854){
return (new cljs.core.async.t_cljs$core$async26853(filter_GT___$1,p__$1,ch__$1,meta26854));
});

}

return (new cljs.core.async.t_cljs$core$async26853(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args26856 = [];
var len__20930__auto___26900 = arguments.length;
var i__20931__auto___26901 = (0);
while(true){
if((i__20931__auto___26901 < len__20930__auto___26900)){
args26856.push((arguments[i__20931__auto___26901]));

var G__26902 = (i__20931__auto___26901 + (1));
i__20931__auto___26901 = G__26902;
continue;
} else {
}
break;
}

var G__26858 = args26856.length;
switch (G__26858) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26856.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24640__auto___26904 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24640__auto___26904,out){
return (function (){
var f__24641__auto__ = (function (){var switch__24526__auto__ = ((function (c__24640__auto___26904,out){
return (function (state_26879){
var state_val_26880 = (state_26879[(1)]);
if((state_val_26880 === (7))){
var inst_26875 = (state_26879[(2)]);
var state_26879__$1 = state_26879;
var statearr_26881_26905 = state_26879__$1;
(statearr_26881_26905[(2)] = inst_26875);

(statearr_26881_26905[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26880 === (1))){
var state_26879__$1 = state_26879;
var statearr_26882_26906 = state_26879__$1;
(statearr_26882_26906[(2)] = null);

(statearr_26882_26906[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26880 === (4))){
var inst_26861 = (state_26879[(7)]);
var inst_26861__$1 = (state_26879[(2)]);
var inst_26862 = (inst_26861__$1 == null);
var state_26879__$1 = (function (){var statearr_26883 = state_26879;
(statearr_26883[(7)] = inst_26861__$1);

return statearr_26883;
})();
if(cljs.core.truth_(inst_26862)){
var statearr_26884_26907 = state_26879__$1;
(statearr_26884_26907[(1)] = (5));

} else {
var statearr_26885_26908 = state_26879__$1;
(statearr_26885_26908[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26880 === (6))){
var inst_26861 = (state_26879[(7)]);
var inst_26866 = p.call(null,inst_26861);
var state_26879__$1 = state_26879;
if(cljs.core.truth_(inst_26866)){
var statearr_26886_26909 = state_26879__$1;
(statearr_26886_26909[(1)] = (8));

} else {
var statearr_26887_26910 = state_26879__$1;
(statearr_26887_26910[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26880 === (3))){
var inst_26877 = (state_26879[(2)]);
var state_26879__$1 = state_26879;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26879__$1,inst_26877);
} else {
if((state_val_26880 === (2))){
var state_26879__$1 = state_26879;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26879__$1,(4),ch);
} else {
if((state_val_26880 === (11))){
var inst_26869 = (state_26879[(2)]);
var state_26879__$1 = state_26879;
var statearr_26888_26911 = state_26879__$1;
(statearr_26888_26911[(2)] = inst_26869);

(statearr_26888_26911[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26880 === (9))){
var state_26879__$1 = state_26879;
var statearr_26889_26912 = state_26879__$1;
(statearr_26889_26912[(2)] = null);

(statearr_26889_26912[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26880 === (5))){
var inst_26864 = cljs.core.async.close_BANG_.call(null,out);
var state_26879__$1 = state_26879;
var statearr_26890_26913 = state_26879__$1;
(statearr_26890_26913[(2)] = inst_26864);

(statearr_26890_26913[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26880 === (10))){
var inst_26872 = (state_26879[(2)]);
var state_26879__$1 = (function (){var statearr_26891 = state_26879;
(statearr_26891[(8)] = inst_26872);

return statearr_26891;
})();
var statearr_26892_26914 = state_26879__$1;
(statearr_26892_26914[(2)] = null);

(statearr_26892_26914[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26880 === (8))){
var inst_26861 = (state_26879[(7)]);
var state_26879__$1 = state_26879;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26879__$1,(11),out,inst_26861);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__24640__auto___26904,out))
;
return ((function (switch__24526__auto__,c__24640__auto___26904,out){
return (function() {
var cljs$core$async$state_machine__24527__auto__ = null;
var cljs$core$async$state_machine__24527__auto____0 = (function (){
var statearr_26896 = [null,null,null,null,null,null,null,null,null];
(statearr_26896[(0)] = cljs$core$async$state_machine__24527__auto__);

(statearr_26896[(1)] = (1));

return statearr_26896;
});
var cljs$core$async$state_machine__24527__auto____1 = (function (state_26879){
while(true){
var ret_value__24528__auto__ = (function (){try{while(true){
var result__24529__auto__ = switch__24526__auto__.call(null,state_26879);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24529__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24529__auto__;
}
break;
}
}catch (e26897){if((e26897 instanceof Object)){
var ex__24530__auto__ = e26897;
var statearr_26898_26915 = state_26879;
(statearr_26898_26915[(5)] = ex__24530__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26879);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26897;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26916 = state_26879;
state_26879 = G__26916;
continue;
} else {
return ret_value__24528__auto__;
}
break;
}
});
cljs$core$async$state_machine__24527__auto__ = function(state_26879){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24527__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24527__auto____1.call(this,state_26879);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24527__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24527__auto____0;
cljs$core$async$state_machine__24527__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24527__auto____1;
return cljs$core$async$state_machine__24527__auto__;
})()
;})(switch__24526__auto__,c__24640__auto___26904,out))
})();
var state__24642__auto__ = (function (){var statearr_26899 = f__24641__auto__.call(null);
(statearr_26899[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24640__auto___26904);

return statearr_26899;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24642__auto__);
});})(c__24640__auto___26904,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args26917 = [];
var len__20930__auto___26920 = arguments.length;
var i__20931__auto___26921 = (0);
while(true){
if((i__20931__auto___26921 < len__20930__auto___26920)){
args26917.push((arguments[i__20931__auto___26921]));

var G__26922 = (i__20931__auto___26921 + (1));
i__20931__auto___26921 = G__26922;
continue;
} else {
}
break;
}

var G__26919 = args26917.length;
switch (G__26919) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26917.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__24640__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24640__auto__){
return (function (){
var f__24641__auto__ = (function (){var switch__24526__auto__ = ((function (c__24640__auto__){
return (function (state_27089){
var state_val_27090 = (state_27089[(1)]);
if((state_val_27090 === (7))){
var inst_27085 = (state_27089[(2)]);
var state_27089__$1 = state_27089;
var statearr_27091_27132 = state_27089__$1;
(statearr_27091_27132[(2)] = inst_27085);

(statearr_27091_27132[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27090 === (20))){
var inst_27055 = (state_27089[(7)]);
var inst_27066 = (state_27089[(2)]);
var inst_27067 = cljs.core.next.call(null,inst_27055);
var inst_27041 = inst_27067;
var inst_27042 = null;
var inst_27043 = (0);
var inst_27044 = (0);
var state_27089__$1 = (function (){var statearr_27092 = state_27089;
(statearr_27092[(8)] = inst_27042);

(statearr_27092[(9)] = inst_27066);

(statearr_27092[(10)] = inst_27044);

(statearr_27092[(11)] = inst_27043);

(statearr_27092[(12)] = inst_27041);

return statearr_27092;
})();
var statearr_27093_27133 = state_27089__$1;
(statearr_27093_27133[(2)] = null);

(statearr_27093_27133[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27090 === (1))){
var state_27089__$1 = state_27089;
var statearr_27094_27134 = state_27089__$1;
(statearr_27094_27134[(2)] = null);

(statearr_27094_27134[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27090 === (4))){
var inst_27030 = (state_27089[(13)]);
var inst_27030__$1 = (state_27089[(2)]);
var inst_27031 = (inst_27030__$1 == null);
var state_27089__$1 = (function (){var statearr_27095 = state_27089;
(statearr_27095[(13)] = inst_27030__$1);

return statearr_27095;
})();
if(cljs.core.truth_(inst_27031)){
var statearr_27096_27135 = state_27089__$1;
(statearr_27096_27135[(1)] = (5));

} else {
var statearr_27097_27136 = state_27089__$1;
(statearr_27097_27136[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27090 === (15))){
var state_27089__$1 = state_27089;
var statearr_27101_27137 = state_27089__$1;
(statearr_27101_27137[(2)] = null);

(statearr_27101_27137[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27090 === (21))){
var state_27089__$1 = state_27089;
var statearr_27102_27138 = state_27089__$1;
(statearr_27102_27138[(2)] = null);

(statearr_27102_27138[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27090 === (13))){
var inst_27042 = (state_27089[(8)]);
var inst_27044 = (state_27089[(10)]);
var inst_27043 = (state_27089[(11)]);
var inst_27041 = (state_27089[(12)]);
var inst_27051 = (state_27089[(2)]);
var inst_27052 = (inst_27044 + (1));
var tmp27098 = inst_27042;
var tmp27099 = inst_27043;
var tmp27100 = inst_27041;
var inst_27041__$1 = tmp27100;
var inst_27042__$1 = tmp27098;
var inst_27043__$1 = tmp27099;
var inst_27044__$1 = inst_27052;
var state_27089__$1 = (function (){var statearr_27103 = state_27089;
(statearr_27103[(8)] = inst_27042__$1);

(statearr_27103[(10)] = inst_27044__$1);

(statearr_27103[(11)] = inst_27043__$1);

(statearr_27103[(14)] = inst_27051);

(statearr_27103[(12)] = inst_27041__$1);

return statearr_27103;
})();
var statearr_27104_27139 = state_27089__$1;
(statearr_27104_27139[(2)] = null);

(statearr_27104_27139[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27090 === (22))){
var state_27089__$1 = state_27089;
var statearr_27105_27140 = state_27089__$1;
(statearr_27105_27140[(2)] = null);

(statearr_27105_27140[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27090 === (6))){
var inst_27030 = (state_27089[(13)]);
var inst_27039 = f.call(null,inst_27030);
var inst_27040 = cljs.core.seq.call(null,inst_27039);
var inst_27041 = inst_27040;
var inst_27042 = null;
var inst_27043 = (0);
var inst_27044 = (0);
var state_27089__$1 = (function (){var statearr_27106 = state_27089;
(statearr_27106[(8)] = inst_27042);

(statearr_27106[(10)] = inst_27044);

(statearr_27106[(11)] = inst_27043);

(statearr_27106[(12)] = inst_27041);

return statearr_27106;
})();
var statearr_27107_27141 = state_27089__$1;
(statearr_27107_27141[(2)] = null);

(statearr_27107_27141[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27090 === (17))){
var inst_27055 = (state_27089[(7)]);
var inst_27059 = cljs.core.chunk_first.call(null,inst_27055);
var inst_27060 = cljs.core.chunk_rest.call(null,inst_27055);
var inst_27061 = cljs.core.count.call(null,inst_27059);
var inst_27041 = inst_27060;
var inst_27042 = inst_27059;
var inst_27043 = inst_27061;
var inst_27044 = (0);
var state_27089__$1 = (function (){var statearr_27108 = state_27089;
(statearr_27108[(8)] = inst_27042);

(statearr_27108[(10)] = inst_27044);

(statearr_27108[(11)] = inst_27043);

(statearr_27108[(12)] = inst_27041);

return statearr_27108;
})();
var statearr_27109_27142 = state_27089__$1;
(statearr_27109_27142[(2)] = null);

(statearr_27109_27142[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27090 === (3))){
var inst_27087 = (state_27089[(2)]);
var state_27089__$1 = state_27089;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27089__$1,inst_27087);
} else {
if((state_val_27090 === (12))){
var inst_27075 = (state_27089[(2)]);
var state_27089__$1 = state_27089;
var statearr_27110_27143 = state_27089__$1;
(statearr_27110_27143[(2)] = inst_27075);

(statearr_27110_27143[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27090 === (2))){
var state_27089__$1 = state_27089;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27089__$1,(4),in$);
} else {
if((state_val_27090 === (23))){
var inst_27083 = (state_27089[(2)]);
var state_27089__$1 = state_27089;
var statearr_27111_27144 = state_27089__$1;
(statearr_27111_27144[(2)] = inst_27083);

(statearr_27111_27144[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27090 === (19))){
var inst_27070 = (state_27089[(2)]);
var state_27089__$1 = state_27089;
var statearr_27112_27145 = state_27089__$1;
(statearr_27112_27145[(2)] = inst_27070);

(statearr_27112_27145[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27090 === (11))){
var inst_27055 = (state_27089[(7)]);
var inst_27041 = (state_27089[(12)]);
var inst_27055__$1 = cljs.core.seq.call(null,inst_27041);
var state_27089__$1 = (function (){var statearr_27113 = state_27089;
(statearr_27113[(7)] = inst_27055__$1);

return statearr_27113;
})();
if(inst_27055__$1){
var statearr_27114_27146 = state_27089__$1;
(statearr_27114_27146[(1)] = (14));

} else {
var statearr_27115_27147 = state_27089__$1;
(statearr_27115_27147[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27090 === (9))){
var inst_27077 = (state_27089[(2)]);
var inst_27078 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_27089__$1 = (function (){var statearr_27116 = state_27089;
(statearr_27116[(15)] = inst_27077);

return statearr_27116;
})();
if(cljs.core.truth_(inst_27078)){
var statearr_27117_27148 = state_27089__$1;
(statearr_27117_27148[(1)] = (21));

} else {
var statearr_27118_27149 = state_27089__$1;
(statearr_27118_27149[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27090 === (5))){
var inst_27033 = cljs.core.async.close_BANG_.call(null,out);
var state_27089__$1 = state_27089;
var statearr_27119_27150 = state_27089__$1;
(statearr_27119_27150[(2)] = inst_27033);

(statearr_27119_27150[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27090 === (14))){
var inst_27055 = (state_27089[(7)]);
var inst_27057 = cljs.core.chunked_seq_QMARK_.call(null,inst_27055);
var state_27089__$1 = state_27089;
if(inst_27057){
var statearr_27120_27151 = state_27089__$1;
(statearr_27120_27151[(1)] = (17));

} else {
var statearr_27121_27152 = state_27089__$1;
(statearr_27121_27152[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27090 === (16))){
var inst_27073 = (state_27089[(2)]);
var state_27089__$1 = state_27089;
var statearr_27122_27153 = state_27089__$1;
(statearr_27122_27153[(2)] = inst_27073);

(statearr_27122_27153[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27090 === (10))){
var inst_27042 = (state_27089[(8)]);
var inst_27044 = (state_27089[(10)]);
var inst_27049 = cljs.core._nth.call(null,inst_27042,inst_27044);
var state_27089__$1 = state_27089;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27089__$1,(13),out,inst_27049);
} else {
if((state_val_27090 === (18))){
var inst_27055 = (state_27089[(7)]);
var inst_27064 = cljs.core.first.call(null,inst_27055);
var state_27089__$1 = state_27089;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27089__$1,(20),out,inst_27064);
} else {
if((state_val_27090 === (8))){
var inst_27044 = (state_27089[(10)]);
var inst_27043 = (state_27089[(11)]);
var inst_27046 = (inst_27044 < inst_27043);
var inst_27047 = inst_27046;
var state_27089__$1 = state_27089;
if(cljs.core.truth_(inst_27047)){
var statearr_27123_27154 = state_27089__$1;
(statearr_27123_27154[(1)] = (10));

} else {
var statearr_27124_27155 = state_27089__$1;
(statearr_27124_27155[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24640__auto__))
;
return ((function (switch__24526__auto__,c__24640__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__24527__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__24527__auto____0 = (function (){
var statearr_27128 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27128[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__24527__auto__);

(statearr_27128[(1)] = (1));

return statearr_27128;
});
var cljs$core$async$mapcat_STAR__$_state_machine__24527__auto____1 = (function (state_27089){
while(true){
var ret_value__24528__auto__ = (function (){try{while(true){
var result__24529__auto__ = switch__24526__auto__.call(null,state_27089);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24529__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24529__auto__;
}
break;
}
}catch (e27129){if((e27129 instanceof Object)){
var ex__24530__auto__ = e27129;
var statearr_27130_27156 = state_27089;
(statearr_27130_27156[(5)] = ex__24530__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27089);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27129;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27157 = state_27089;
state_27089 = G__27157;
continue;
} else {
return ret_value__24528__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__24527__auto__ = function(state_27089){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__24527__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__24527__auto____1.call(this,state_27089);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__24527__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__24527__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__24527__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__24527__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__24527__auto__;
})()
;})(switch__24526__auto__,c__24640__auto__))
})();
var state__24642__auto__ = (function (){var statearr_27131 = f__24641__auto__.call(null);
(statearr_27131[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24640__auto__);

return statearr_27131;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24642__auto__);
});})(c__24640__auto__))
);

return c__24640__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args27158 = [];
var len__20930__auto___27161 = arguments.length;
var i__20931__auto___27162 = (0);
while(true){
if((i__20931__auto___27162 < len__20930__auto___27161)){
args27158.push((arguments[i__20931__auto___27162]));

var G__27163 = (i__20931__auto___27162 + (1));
i__20931__auto___27162 = G__27163;
continue;
} else {
}
break;
}

var G__27160 = args27158.length;
switch (G__27160) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27158.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args27165 = [];
var len__20930__auto___27168 = arguments.length;
var i__20931__auto___27169 = (0);
while(true){
if((i__20931__auto___27169 < len__20930__auto___27168)){
args27165.push((arguments[i__20931__auto___27169]));

var G__27170 = (i__20931__auto___27169 + (1));
i__20931__auto___27169 = G__27170;
continue;
} else {
}
break;
}

var G__27167 = args27165.length;
switch (G__27167) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27165.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args27172 = [];
var len__20930__auto___27223 = arguments.length;
var i__20931__auto___27224 = (0);
while(true){
if((i__20931__auto___27224 < len__20930__auto___27223)){
args27172.push((arguments[i__20931__auto___27224]));

var G__27225 = (i__20931__auto___27224 + (1));
i__20931__auto___27224 = G__27225;
continue;
} else {
}
break;
}

var G__27174 = args27172.length;
switch (G__27174) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27172.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24640__auto___27227 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24640__auto___27227,out){
return (function (){
var f__24641__auto__ = (function (){var switch__24526__auto__ = ((function (c__24640__auto___27227,out){
return (function (state_27198){
var state_val_27199 = (state_27198[(1)]);
if((state_val_27199 === (7))){
var inst_27193 = (state_27198[(2)]);
var state_27198__$1 = state_27198;
var statearr_27200_27228 = state_27198__$1;
(statearr_27200_27228[(2)] = inst_27193);

(statearr_27200_27228[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27199 === (1))){
var inst_27175 = null;
var state_27198__$1 = (function (){var statearr_27201 = state_27198;
(statearr_27201[(7)] = inst_27175);

return statearr_27201;
})();
var statearr_27202_27229 = state_27198__$1;
(statearr_27202_27229[(2)] = null);

(statearr_27202_27229[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27199 === (4))){
var inst_27178 = (state_27198[(8)]);
var inst_27178__$1 = (state_27198[(2)]);
var inst_27179 = (inst_27178__$1 == null);
var inst_27180 = cljs.core.not.call(null,inst_27179);
var state_27198__$1 = (function (){var statearr_27203 = state_27198;
(statearr_27203[(8)] = inst_27178__$1);

return statearr_27203;
})();
if(inst_27180){
var statearr_27204_27230 = state_27198__$1;
(statearr_27204_27230[(1)] = (5));

} else {
var statearr_27205_27231 = state_27198__$1;
(statearr_27205_27231[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27199 === (6))){
var state_27198__$1 = state_27198;
var statearr_27206_27232 = state_27198__$1;
(statearr_27206_27232[(2)] = null);

(statearr_27206_27232[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27199 === (3))){
var inst_27195 = (state_27198[(2)]);
var inst_27196 = cljs.core.async.close_BANG_.call(null,out);
var state_27198__$1 = (function (){var statearr_27207 = state_27198;
(statearr_27207[(9)] = inst_27195);

return statearr_27207;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27198__$1,inst_27196);
} else {
if((state_val_27199 === (2))){
var state_27198__$1 = state_27198;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27198__$1,(4),ch);
} else {
if((state_val_27199 === (11))){
var inst_27178 = (state_27198[(8)]);
var inst_27187 = (state_27198[(2)]);
var inst_27175 = inst_27178;
var state_27198__$1 = (function (){var statearr_27208 = state_27198;
(statearr_27208[(7)] = inst_27175);

(statearr_27208[(10)] = inst_27187);

return statearr_27208;
})();
var statearr_27209_27233 = state_27198__$1;
(statearr_27209_27233[(2)] = null);

(statearr_27209_27233[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27199 === (9))){
var inst_27178 = (state_27198[(8)]);
var state_27198__$1 = state_27198;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27198__$1,(11),out,inst_27178);
} else {
if((state_val_27199 === (5))){
var inst_27178 = (state_27198[(8)]);
var inst_27175 = (state_27198[(7)]);
var inst_27182 = cljs.core._EQ_.call(null,inst_27178,inst_27175);
var state_27198__$1 = state_27198;
if(inst_27182){
var statearr_27211_27234 = state_27198__$1;
(statearr_27211_27234[(1)] = (8));

} else {
var statearr_27212_27235 = state_27198__$1;
(statearr_27212_27235[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27199 === (10))){
var inst_27190 = (state_27198[(2)]);
var state_27198__$1 = state_27198;
var statearr_27213_27236 = state_27198__$1;
(statearr_27213_27236[(2)] = inst_27190);

(statearr_27213_27236[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27199 === (8))){
var inst_27175 = (state_27198[(7)]);
var tmp27210 = inst_27175;
var inst_27175__$1 = tmp27210;
var state_27198__$1 = (function (){var statearr_27214 = state_27198;
(statearr_27214[(7)] = inst_27175__$1);

return statearr_27214;
})();
var statearr_27215_27237 = state_27198__$1;
(statearr_27215_27237[(2)] = null);

(statearr_27215_27237[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__24640__auto___27227,out))
;
return ((function (switch__24526__auto__,c__24640__auto___27227,out){
return (function() {
var cljs$core$async$state_machine__24527__auto__ = null;
var cljs$core$async$state_machine__24527__auto____0 = (function (){
var statearr_27219 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27219[(0)] = cljs$core$async$state_machine__24527__auto__);

(statearr_27219[(1)] = (1));

return statearr_27219;
});
var cljs$core$async$state_machine__24527__auto____1 = (function (state_27198){
while(true){
var ret_value__24528__auto__ = (function (){try{while(true){
var result__24529__auto__ = switch__24526__auto__.call(null,state_27198);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24529__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24529__auto__;
}
break;
}
}catch (e27220){if((e27220 instanceof Object)){
var ex__24530__auto__ = e27220;
var statearr_27221_27238 = state_27198;
(statearr_27221_27238[(5)] = ex__24530__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27198);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27220;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27239 = state_27198;
state_27198 = G__27239;
continue;
} else {
return ret_value__24528__auto__;
}
break;
}
});
cljs$core$async$state_machine__24527__auto__ = function(state_27198){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24527__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24527__auto____1.call(this,state_27198);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24527__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24527__auto____0;
cljs$core$async$state_machine__24527__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24527__auto____1;
return cljs$core$async$state_machine__24527__auto__;
})()
;})(switch__24526__auto__,c__24640__auto___27227,out))
})();
var state__24642__auto__ = (function (){var statearr_27222 = f__24641__auto__.call(null);
(statearr_27222[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24640__auto___27227);

return statearr_27222;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24642__auto__);
});})(c__24640__auto___27227,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args27240 = [];
var len__20930__auto___27310 = arguments.length;
var i__20931__auto___27311 = (0);
while(true){
if((i__20931__auto___27311 < len__20930__auto___27310)){
args27240.push((arguments[i__20931__auto___27311]));

var G__27312 = (i__20931__auto___27311 + (1));
i__20931__auto___27311 = G__27312;
continue;
} else {
}
break;
}

var G__27242 = args27240.length;
switch (G__27242) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27240.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24640__auto___27314 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24640__auto___27314,out){
return (function (){
var f__24641__auto__ = (function (){var switch__24526__auto__ = ((function (c__24640__auto___27314,out){
return (function (state_27280){
var state_val_27281 = (state_27280[(1)]);
if((state_val_27281 === (7))){
var inst_27276 = (state_27280[(2)]);
var state_27280__$1 = state_27280;
var statearr_27282_27315 = state_27280__$1;
(statearr_27282_27315[(2)] = inst_27276);

(statearr_27282_27315[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27281 === (1))){
var inst_27243 = (new Array(n));
var inst_27244 = inst_27243;
var inst_27245 = (0);
var state_27280__$1 = (function (){var statearr_27283 = state_27280;
(statearr_27283[(7)] = inst_27244);

(statearr_27283[(8)] = inst_27245);

return statearr_27283;
})();
var statearr_27284_27316 = state_27280__$1;
(statearr_27284_27316[(2)] = null);

(statearr_27284_27316[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27281 === (4))){
var inst_27248 = (state_27280[(9)]);
var inst_27248__$1 = (state_27280[(2)]);
var inst_27249 = (inst_27248__$1 == null);
var inst_27250 = cljs.core.not.call(null,inst_27249);
var state_27280__$1 = (function (){var statearr_27285 = state_27280;
(statearr_27285[(9)] = inst_27248__$1);

return statearr_27285;
})();
if(inst_27250){
var statearr_27286_27317 = state_27280__$1;
(statearr_27286_27317[(1)] = (5));

} else {
var statearr_27287_27318 = state_27280__$1;
(statearr_27287_27318[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27281 === (15))){
var inst_27270 = (state_27280[(2)]);
var state_27280__$1 = state_27280;
var statearr_27288_27319 = state_27280__$1;
(statearr_27288_27319[(2)] = inst_27270);

(statearr_27288_27319[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27281 === (13))){
var state_27280__$1 = state_27280;
var statearr_27289_27320 = state_27280__$1;
(statearr_27289_27320[(2)] = null);

(statearr_27289_27320[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27281 === (6))){
var inst_27245 = (state_27280[(8)]);
var inst_27266 = (inst_27245 > (0));
var state_27280__$1 = state_27280;
if(cljs.core.truth_(inst_27266)){
var statearr_27290_27321 = state_27280__$1;
(statearr_27290_27321[(1)] = (12));

} else {
var statearr_27291_27322 = state_27280__$1;
(statearr_27291_27322[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27281 === (3))){
var inst_27278 = (state_27280[(2)]);
var state_27280__$1 = state_27280;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27280__$1,inst_27278);
} else {
if((state_val_27281 === (12))){
var inst_27244 = (state_27280[(7)]);
var inst_27268 = cljs.core.vec.call(null,inst_27244);
var state_27280__$1 = state_27280;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27280__$1,(15),out,inst_27268);
} else {
if((state_val_27281 === (2))){
var state_27280__$1 = state_27280;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27280__$1,(4),ch);
} else {
if((state_val_27281 === (11))){
var inst_27260 = (state_27280[(2)]);
var inst_27261 = (new Array(n));
var inst_27244 = inst_27261;
var inst_27245 = (0);
var state_27280__$1 = (function (){var statearr_27292 = state_27280;
(statearr_27292[(10)] = inst_27260);

(statearr_27292[(7)] = inst_27244);

(statearr_27292[(8)] = inst_27245);

return statearr_27292;
})();
var statearr_27293_27323 = state_27280__$1;
(statearr_27293_27323[(2)] = null);

(statearr_27293_27323[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27281 === (9))){
var inst_27244 = (state_27280[(7)]);
var inst_27258 = cljs.core.vec.call(null,inst_27244);
var state_27280__$1 = state_27280;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27280__$1,(11),out,inst_27258);
} else {
if((state_val_27281 === (5))){
var inst_27253 = (state_27280[(11)]);
var inst_27244 = (state_27280[(7)]);
var inst_27245 = (state_27280[(8)]);
var inst_27248 = (state_27280[(9)]);
var inst_27252 = (inst_27244[inst_27245] = inst_27248);
var inst_27253__$1 = (inst_27245 + (1));
var inst_27254 = (inst_27253__$1 < n);
var state_27280__$1 = (function (){var statearr_27294 = state_27280;
(statearr_27294[(11)] = inst_27253__$1);

(statearr_27294[(12)] = inst_27252);

return statearr_27294;
})();
if(cljs.core.truth_(inst_27254)){
var statearr_27295_27324 = state_27280__$1;
(statearr_27295_27324[(1)] = (8));

} else {
var statearr_27296_27325 = state_27280__$1;
(statearr_27296_27325[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27281 === (14))){
var inst_27273 = (state_27280[(2)]);
var inst_27274 = cljs.core.async.close_BANG_.call(null,out);
var state_27280__$1 = (function (){var statearr_27298 = state_27280;
(statearr_27298[(13)] = inst_27273);

return statearr_27298;
})();
var statearr_27299_27326 = state_27280__$1;
(statearr_27299_27326[(2)] = inst_27274);

(statearr_27299_27326[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27281 === (10))){
var inst_27264 = (state_27280[(2)]);
var state_27280__$1 = state_27280;
var statearr_27300_27327 = state_27280__$1;
(statearr_27300_27327[(2)] = inst_27264);

(statearr_27300_27327[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27281 === (8))){
var inst_27253 = (state_27280[(11)]);
var inst_27244 = (state_27280[(7)]);
var tmp27297 = inst_27244;
var inst_27244__$1 = tmp27297;
var inst_27245 = inst_27253;
var state_27280__$1 = (function (){var statearr_27301 = state_27280;
(statearr_27301[(7)] = inst_27244__$1);

(statearr_27301[(8)] = inst_27245);

return statearr_27301;
})();
var statearr_27302_27328 = state_27280__$1;
(statearr_27302_27328[(2)] = null);

(statearr_27302_27328[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24640__auto___27314,out))
;
return ((function (switch__24526__auto__,c__24640__auto___27314,out){
return (function() {
var cljs$core$async$state_machine__24527__auto__ = null;
var cljs$core$async$state_machine__24527__auto____0 = (function (){
var statearr_27306 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27306[(0)] = cljs$core$async$state_machine__24527__auto__);

(statearr_27306[(1)] = (1));

return statearr_27306;
});
var cljs$core$async$state_machine__24527__auto____1 = (function (state_27280){
while(true){
var ret_value__24528__auto__ = (function (){try{while(true){
var result__24529__auto__ = switch__24526__auto__.call(null,state_27280);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24529__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24529__auto__;
}
break;
}
}catch (e27307){if((e27307 instanceof Object)){
var ex__24530__auto__ = e27307;
var statearr_27308_27329 = state_27280;
(statearr_27308_27329[(5)] = ex__24530__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27280);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27307;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27330 = state_27280;
state_27280 = G__27330;
continue;
} else {
return ret_value__24528__auto__;
}
break;
}
});
cljs$core$async$state_machine__24527__auto__ = function(state_27280){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24527__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24527__auto____1.call(this,state_27280);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24527__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24527__auto____0;
cljs$core$async$state_machine__24527__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24527__auto____1;
return cljs$core$async$state_machine__24527__auto__;
})()
;})(switch__24526__auto__,c__24640__auto___27314,out))
})();
var state__24642__auto__ = (function (){var statearr_27309 = f__24641__auto__.call(null);
(statearr_27309[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24640__auto___27314);

return statearr_27309;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24642__auto__);
});})(c__24640__auto___27314,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args27331 = [];
var len__20930__auto___27405 = arguments.length;
var i__20931__auto___27406 = (0);
while(true){
if((i__20931__auto___27406 < len__20930__auto___27405)){
args27331.push((arguments[i__20931__auto___27406]));

var G__27407 = (i__20931__auto___27406 + (1));
i__20931__auto___27406 = G__27407;
continue;
} else {
}
break;
}

var G__27333 = args27331.length;
switch (G__27333) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27331.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24640__auto___27409 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24640__auto___27409,out){
return (function (){
var f__24641__auto__ = (function (){var switch__24526__auto__ = ((function (c__24640__auto___27409,out){
return (function (state_27375){
var state_val_27376 = (state_27375[(1)]);
if((state_val_27376 === (7))){
var inst_27371 = (state_27375[(2)]);
var state_27375__$1 = state_27375;
var statearr_27377_27410 = state_27375__$1;
(statearr_27377_27410[(2)] = inst_27371);

(statearr_27377_27410[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27376 === (1))){
var inst_27334 = [];
var inst_27335 = inst_27334;
var inst_27336 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_27375__$1 = (function (){var statearr_27378 = state_27375;
(statearr_27378[(7)] = inst_27335);

(statearr_27378[(8)] = inst_27336);

return statearr_27378;
})();
var statearr_27379_27411 = state_27375__$1;
(statearr_27379_27411[(2)] = null);

(statearr_27379_27411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27376 === (4))){
var inst_27339 = (state_27375[(9)]);
var inst_27339__$1 = (state_27375[(2)]);
var inst_27340 = (inst_27339__$1 == null);
var inst_27341 = cljs.core.not.call(null,inst_27340);
var state_27375__$1 = (function (){var statearr_27380 = state_27375;
(statearr_27380[(9)] = inst_27339__$1);

return statearr_27380;
})();
if(inst_27341){
var statearr_27381_27412 = state_27375__$1;
(statearr_27381_27412[(1)] = (5));

} else {
var statearr_27382_27413 = state_27375__$1;
(statearr_27382_27413[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27376 === (15))){
var inst_27365 = (state_27375[(2)]);
var state_27375__$1 = state_27375;
var statearr_27383_27414 = state_27375__$1;
(statearr_27383_27414[(2)] = inst_27365);

(statearr_27383_27414[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27376 === (13))){
var state_27375__$1 = state_27375;
var statearr_27384_27415 = state_27375__$1;
(statearr_27384_27415[(2)] = null);

(statearr_27384_27415[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27376 === (6))){
var inst_27335 = (state_27375[(7)]);
var inst_27360 = inst_27335.length;
var inst_27361 = (inst_27360 > (0));
var state_27375__$1 = state_27375;
if(cljs.core.truth_(inst_27361)){
var statearr_27385_27416 = state_27375__$1;
(statearr_27385_27416[(1)] = (12));

} else {
var statearr_27386_27417 = state_27375__$1;
(statearr_27386_27417[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27376 === (3))){
var inst_27373 = (state_27375[(2)]);
var state_27375__$1 = state_27375;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27375__$1,inst_27373);
} else {
if((state_val_27376 === (12))){
var inst_27335 = (state_27375[(7)]);
var inst_27363 = cljs.core.vec.call(null,inst_27335);
var state_27375__$1 = state_27375;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27375__$1,(15),out,inst_27363);
} else {
if((state_val_27376 === (2))){
var state_27375__$1 = state_27375;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27375__$1,(4),ch);
} else {
if((state_val_27376 === (11))){
var inst_27343 = (state_27375[(10)]);
var inst_27339 = (state_27375[(9)]);
var inst_27353 = (state_27375[(2)]);
var inst_27354 = [];
var inst_27355 = inst_27354.push(inst_27339);
var inst_27335 = inst_27354;
var inst_27336 = inst_27343;
var state_27375__$1 = (function (){var statearr_27387 = state_27375;
(statearr_27387[(7)] = inst_27335);

(statearr_27387[(8)] = inst_27336);

(statearr_27387[(11)] = inst_27355);

(statearr_27387[(12)] = inst_27353);

return statearr_27387;
})();
var statearr_27388_27418 = state_27375__$1;
(statearr_27388_27418[(2)] = null);

(statearr_27388_27418[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27376 === (9))){
var inst_27335 = (state_27375[(7)]);
var inst_27351 = cljs.core.vec.call(null,inst_27335);
var state_27375__$1 = state_27375;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27375__$1,(11),out,inst_27351);
} else {
if((state_val_27376 === (5))){
var inst_27336 = (state_27375[(8)]);
var inst_27343 = (state_27375[(10)]);
var inst_27339 = (state_27375[(9)]);
var inst_27343__$1 = f.call(null,inst_27339);
var inst_27344 = cljs.core._EQ_.call(null,inst_27343__$1,inst_27336);
var inst_27345 = cljs.core.keyword_identical_QMARK_.call(null,inst_27336,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_27346 = (inst_27344) || (inst_27345);
var state_27375__$1 = (function (){var statearr_27389 = state_27375;
(statearr_27389[(10)] = inst_27343__$1);

return statearr_27389;
})();
if(cljs.core.truth_(inst_27346)){
var statearr_27390_27419 = state_27375__$1;
(statearr_27390_27419[(1)] = (8));

} else {
var statearr_27391_27420 = state_27375__$1;
(statearr_27391_27420[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27376 === (14))){
var inst_27368 = (state_27375[(2)]);
var inst_27369 = cljs.core.async.close_BANG_.call(null,out);
var state_27375__$1 = (function (){var statearr_27393 = state_27375;
(statearr_27393[(13)] = inst_27368);

return statearr_27393;
})();
var statearr_27394_27421 = state_27375__$1;
(statearr_27394_27421[(2)] = inst_27369);

(statearr_27394_27421[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27376 === (10))){
var inst_27358 = (state_27375[(2)]);
var state_27375__$1 = state_27375;
var statearr_27395_27422 = state_27375__$1;
(statearr_27395_27422[(2)] = inst_27358);

(statearr_27395_27422[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27376 === (8))){
var inst_27335 = (state_27375[(7)]);
var inst_27343 = (state_27375[(10)]);
var inst_27339 = (state_27375[(9)]);
var inst_27348 = inst_27335.push(inst_27339);
var tmp27392 = inst_27335;
var inst_27335__$1 = tmp27392;
var inst_27336 = inst_27343;
var state_27375__$1 = (function (){var statearr_27396 = state_27375;
(statearr_27396[(7)] = inst_27335__$1);

(statearr_27396[(8)] = inst_27336);

(statearr_27396[(14)] = inst_27348);

return statearr_27396;
})();
var statearr_27397_27423 = state_27375__$1;
(statearr_27397_27423[(2)] = null);

(statearr_27397_27423[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24640__auto___27409,out))
;
return ((function (switch__24526__auto__,c__24640__auto___27409,out){
return (function() {
var cljs$core$async$state_machine__24527__auto__ = null;
var cljs$core$async$state_machine__24527__auto____0 = (function (){
var statearr_27401 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27401[(0)] = cljs$core$async$state_machine__24527__auto__);

(statearr_27401[(1)] = (1));

return statearr_27401;
});
var cljs$core$async$state_machine__24527__auto____1 = (function (state_27375){
while(true){
var ret_value__24528__auto__ = (function (){try{while(true){
var result__24529__auto__ = switch__24526__auto__.call(null,state_27375);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24529__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24529__auto__;
}
break;
}
}catch (e27402){if((e27402 instanceof Object)){
var ex__24530__auto__ = e27402;
var statearr_27403_27424 = state_27375;
(statearr_27403_27424[(5)] = ex__24530__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27375);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27402;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27425 = state_27375;
state_27375 = G__27425;
continue;
} else {
return ret_value__24528__auto__;
}
break;
}
});
cljs$core$async$state_machine__24527__auto__ = function(state_27375){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24527__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24527__auto____1.call(this,state_27375);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24527__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24527__auto____0;
cljs$core$async$state_machine__24527__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24527__auto____1;
return cljs$core$async$state_machine__24527__auto__;
})()
;})(switch__24526__auto__,c__24640__auto___27409,out))
})();
var state__24642__auto__ = (function (){var statearr_27404 = f__24641__auto__.call(null);
(statearr_27404[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24640__auto___27409);

return statearr_27404;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24642__auto__);
});})(c__24640__auto___27409,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1513106860039