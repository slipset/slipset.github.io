// Compiled by ClojureScript 1.9.14 {}
goog.provide('snake_game.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('snake_game.handlers');
goog.require('snake_game.view');
if(typeof snake_game.core.snake_moving !== 'undefined'){
} else {
snake_game.core.snake_moving = setInterval((function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"oppdater-spill","oppdater-spill",-907132547)], null));
}),(750));
}
/**
 * Main app function
 */
snake_game.core.run = (function snake_game$core$run(){
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize","initialize",609952913)], null));

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [snake_game.view.game], null),document.getElementById("app"));
});
snake_game.core.run.call(null);

//# sourceMappingURL=core.js.map?rel=1513110307615