// Compiled by ClojureScript 1.9.14 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('snake_game.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__37369__delegate = function (x){
if(cljs.core.truth_(snake_game.core.on_js_reload)){
return cljs.core.apply.call(null,snake_game.core.on_js_reload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'snake-game.core/on-js-reload' is missing");
}
};
var G__37369 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__37370__i = 0, G__37370__a = new Array(arguments.length -  0);
while (G__37370__i < G__37370__a.length) {G__37370__a[G__37370__i] = arguments[G__37370__i + 0]; ++G__37370__i;}
  x = new cljs.core.IndexedSeq(G__37370__a,0);
} 
return G__37369__delegate.call(this,x);};
G__37369.cljs$lang$maxFixedArity = 0;
G__37369.cljs$lang$applyTo = (function (arglist__37371){
var x = cljs.core.seq(arglist__37371);
return G__37369__delegate(x);
});
G__37369.cljs$core$IFn$_invoke$arity$variadic = G__37369__delegate;
return G__37369;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=connect.js.map?rel=1513111482146