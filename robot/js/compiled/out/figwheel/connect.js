// Compiled by ClojureScript 1.9.14 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('snake_game.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__36770__delegate = function (x){
if(cljs.core.truth_(snake_game.core.on_js_reload)){
return cljs.core.apply.call(null,snake_game.core.on_js_reload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'snake-game.core/on-js-reload' is missing");
}
};
var G__36770 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__36771__i = 0, G__36771__a = new Array(arguments.length -  0);
while (G__36771__i < G__36771__a.length) {G__36771__a[G__36771__i] = arguments[G__36771__i + 0]; ++G__36771__i;}
  x = new cljs.core.IndexedSeq(G__36771__a,0);
} 
return G__36770__delegate.call(this,x);};
G__36770.cljs$lang$maxFixedArity = 0;
G__36770.cljs$lang$applyTo = (function (arglist__36772){
var x = cljs.core.seq(arglist__36772);
return G__36770__delegate(x);
});
G__36770.cljs$core$IFn$_invoke$arity$variadic = G__36770__delegate;
return G__36770;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=connect.js.map?rel=1513110307652