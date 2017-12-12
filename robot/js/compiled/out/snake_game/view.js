// Compiled by ClojureScript 1.9.14 {}
goog.provide('snake_game.view');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
/**
 * Renders the game brett area with the slange and the skatt to catch
 */
snake_game.view.render_brett = (function snake_game$view$render_brett(){
var brett = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"brett","brett",1091144321)], null));
var slange = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"slange","slange",-1354660973)], null));
var hindre = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hindre","hindre",-466213883)], null));
return ((function (brett,slange,hindre){
return (function (){
var vec__37225 = cljs.core.deref.call(null,brett);
var width = cljs.core.nth.call(null,vec__37225,(0),null);
var height = cljs.core.nth.call(null,vec__37225,(1),null);
var slange_positions = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.deref.call(null,slange));
var hindre__$1 = cljs.core.deref.call(null,hindre);
var cells = (function (){var iter__20601__auto__ = ((function (vec__37225,width,height,slange_positions,hindre__$1,brett,slange,hindre){
return (function snake_game$view$render_brett_$_iter__37226(s__37227){
return (new cljs.core.LazySeq(null,((function (vec__37225,width,height,slange_positions,hindre__$1,brett,slange,hindre){
return (function (){
var s__37227__$1 = s__37227;
while(true){
var temp__6144__auto__ = cljs.core.seq.call(null,s__37227__$1);
if(temp__6144__auto__){
var s__37227__$2 = temp__6144__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__37227__$2)){
var c__20599__auto__ = cljs.core.chunk_first.call(null,s__37227__$2);
var size__20600__auto__ = cljs.core.count.call(null,c__20599__auto__);
var b__37229 = cljs.core.chunk_buffer.call(null,size__20600__auto__);
if((function (){var i__37228 = (0);
while(true){
if((i__37228 < size__20600__auto__)){
var y = cljs.core._nth.call(null,c__20599__auto__,i__37228);
cljs.core.chunk_append.call(null,b__37229,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__20601__auto__ = ((function (i__37228,y,c__20599__auto__,size__20600__auto__,b__37229,s__37227__$2,temp__6144__auto__,vec__37225,width,height,slange_positions,hindre__$1,brett,slange,hindre){
return (function snake_game$view$render_brett_$_iter__37226_$_iter__37238(s__37239){
return (new cljs.core.LazySeq(null,((function (i__37228,y,c__20599__auto__,size__20600__auto__,b__37229,s__37227__$2,temp__6144__auto__,vec__37225,width,height,slange_positions,hindre__$1,brett,slange,hindre){
return (function (){
var s__37239__$1 = s__37239;
while(true){
var temp__6144__auto____$1 = cljs.core.seq.call(null,s__37239__$1);
if(temp__6144__auto____$1){
var s__37239__$2 = temp__6144__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__37239__$2)){
var c__20599__auto____$1 = cljs.core.chunk_first.call(null,s__37239__$2);
var size__20600__auto____$1 = cljs.core.count.call(null,c__20599__auto____$1);
var b__37241 = cljs.core.chunk_buffer.call(null,size__20600__auto____$1);
if((function (){var i__37240 = (0);
while(true){
if((i__37240 < size__20600__auto____$1)){
var x = cljs.core._nth.call(null,c__20599__auto____$1,i__37240);
var current_pos = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
cljs.core.chunk_append.call(null,b__37241,(cljs.core.truth_(slange_positions.call(null,current_pos))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.slange-on-cell","td.slange-on-cell",1846682431)], null):(cljs.core.truth_(hindre__$1.call(null,current_pos))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.skatt","td.skatt",813762496)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.cell","td.cell",-1877794863)], null)
)));

var G__37246 = (i__37240 + (1));
i__37240 = G__37246;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37241),snake_game$view$render_brett_$_iter__37226_$_iter__37238.call(null,cljs.core.chunk_rest.call(null,s__37239__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37241),null);
}
} else {
var x = cljs.core.first.call(null,s__37239__$2);
var current_pos = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
return cljs.core.cons.call(null,(cljs.core.truth_(slange_positions.call(null,current_pos))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.slange-on-cell","td.slange-on-cell",1846682431)], null):(cljs.core.truth_(hindre__$1.call(null,current_pos))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.skatt","td.skatt",813762496)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.cell","td.cell",-1877794863)], null)
)),snake_game$view$render_brett_$_iter__37226_$_iter__37238.call(null,cljs.core.rest.call(null,s__37239__$2)));
}
} else {
return null;
}
break;
}
});})(i__37228,y,c__20599__auto__,size__20600__auto__,b__37229,s__37227__$2,temp__6144__auto__,vec__37225,width,height,slange_positions,hindre__$1,brett,slange,hindre))
,null,null));
});})(i__37228,y,c__20599__auto__,size__20600__auto__,b__37229,s__37227__$2,temp__6144__auto__,vec__37225,width,height,slange_positions,hindre__$1,brett,slange,hindre))
;
return iter__20601__auto__.call(null,cljs.core.range.call(null,width));
})()));

var G__37247 = (i__37228 + (1));
i__37228 = G__37247;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37229),snake_game$view$render_brett_$_iter__37226.call(null,cljs.core.chunk_rest.call(null,s__37227__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37229),null);
}
} else {
var y = cljs.core.first.call(null,s__37227__$2);
return cljs.core.cons.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__20601__auto__ = ((function (y,s__37227__$2,temp__6144__auto__,vec__37225,width,height,slange_positions,hindre__$1,brett,slange,hindre){
return (function snake_game$view$render_brett_$_iter__37226_$_iter__37242(s__37243){
return (new cljs.core.LazySeq(null,((function (y,s__37227__$2,temp__6144__auto__,vec__37225,width,height,slange_positions,hindre__$1,brett,slange,hindre){
return (function (){
var s__37243__$1 = s__37243;
while(true){
var temp__6144__auto____$1 = cljs.core.seq.call(null,s__37243__$1);
if(temp__6144__auto____$1){
var s__37243__$2 = temp__6144__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__37243__$2)){
var c__20599__auto__ = cljs.core.chunk_first.call(null,s__37243__$2);
var size__20600__auto__ = cljs.core.count.call(null,c__20599__auto__);
var b__37245 = cljs.core.chunk_buffer.call(null,size__20600__auto__);
if((function (){var i__37244 = (0);
while(true){
if((i__37244 < size__20600__auto__)){
var x = cljs.core._nth.call(null,c__20599__auto__,i__37244);
var current_pos = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
cljs.core.chunk_append.call(null,b__37245,(cljs.core.truth_(slange_positions.call(null,current_pos))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.slange-on-cell","td.slange-on-cell",1846682431)], null):(cljs.core.truth_(hindre__$1.call(null,current_pos))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.skatt","td.skatt",813762496)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.cell","td.cell",-1877794863)], null)
)));

var G__37248 = (i__37244 + (1));
i__37244 = G__37248;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37245),snake_game$view$render_brett_$_iter__37226_$_iter__37242.call(null,cljs.core.chunk_rest.call(null,s__37243__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37245),null);
}
} else {
var x = cljs.core.first.call(null,s__37243__$2);
var current_pos = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
return cljs.core.cons.call(null,(cljs.core.truth_(slange_positions.call(null,current_pos))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.slange-on-cell","td.slange-on-cell",1846682431)], null):(cljs.core.truth_(hindre__$1.call(null,current_pos))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.skatt","td.skatt",813762496)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.cell","td.cell",-1877794863)], null)
)),snake_game$view$render_brett_$_iter__37226_$_iter__37242.call(null,cljs.core.rest.call(null,s__37243__$2)));
}
} else {
return null;
}
break;
}
});})(y,s__37227__$2,temp__6144__auto__,vec__37225,width,height,slange_positions,hindre__$1,brett,slange,hindre))
,null,null));
});})(y,s__37227__$2,temp__6144__auto__,vec__37225,width,height,slange_positions,hindre__$1,brett,slange,hindre))
;
return iter__20601__auto__.call(null,cljs.core.range.call(null,width));
})()),snake_game$view$render_brett_$_iter__37226.call(null,cljs.core.rest.call(null,s__37227__$2)));
}
} else {
return null;
}
break;
}
});})(vec__37225,width,height,slange_positions,hindre__$1,brett,slange,hindre))
,null,null));
});})(vec__37225,width,height,slange_positions,hindre__$1,brett,slange,hindre))
;
return iter__20601__auto__.call(null,cljs.core.range.call(null,height));
})();
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.stage","table.stage",-803350276),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),(377),new cljs.core.Keyword(null,"width","width",-384071477),(527)], null)], null)], null),cells);
});
;})(brett,slange,hindre))
});
/**
 * Renders the game over overlay if the game is finished
 */
snake_game.view.game_over = (function snake_game$view$game_over(){
var game_state = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"er-spillet-igang?","er-spillet-igang?",1440052571)], null));
return ((function (game_state){
return (function (){
if(cljs.core.truth_(cljs.core.deref.call(null,game_state))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.overlay","div.overlay",58496851),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.play","div.play",-334856682),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (game_state){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize","initialize",609952913)], null));
});})(game_state))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"\u21BA"], null)], null)], null);
}
});
;})(game_state))
});
/**
 * Renders player's skritt
 */
snake_game.view.skritt = (function snake_game$view$skritt(){
var skritt__$1 = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"skritt","skritt",179231924)], null));
return ((function (skritt__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.poeng","div.poeng",-90843518),[cljs.core.str("Skritt: "),cljs.core.str(cljs.core.deref.call(null,skritt__$1))].join('')], null);
});
;})(skritt__$1))
});
/**
 * The main rendering function
 */
snake_game.view.game = (function snake_game$view$game(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [snake_game.view.game_over], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [snake_game.view.skritt], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [snake_game.view.render_brett], null)], null);
});

//# sourceMappingURL=view.js.map?rel=1513111406018