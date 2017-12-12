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
var vec__36742 = cljs.core.deref.call(null,brett);
var width = cljs.core.nth.call(null,vec__36742,(0),null);
var height = cljs.core.nth.call(null,vec__36742,(1),null);
var slange_positions = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.deref.call(null,slange));
var hindre__$1 = cljs.core.deref.call(null,hindre);
var cells = (function (){var iter__20601__auto__ = ((function (vec__36742,width,height,slange_positions,hindre__$1,brett,slange,hindre){
return (function snake_game$view$render_brett_$_iter__36743(s__36744){
return (new cljs.core.LazySeq(null,((function (vec__36742,width,height,slange_positions,hindre__$1,brett,slange,hindre){
return (function (){
var s__36744__$1 = s__36744;
while(true){
var temp__6144__auto__ = cljs.core.seq.call(null,s__36744__$1);
if(temp__6144__auto__){
var s__36744__$2 = temp__6144__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36744__$2)){
var c__20599__auto__ = cljs.core.chunk_first.call(null,s__36744__$2);
var size__20600__auto__ = cljs.core.count.call(null,c__20599__auto__);
var b__36746 = cljs.core.chunk_buffer.call(null,size__20600__auto__);
if((function (){var i__36745 = (0);
while(true){
if((i__36745 < size__20600__auto__)){
var y = cljs.core._nth.call(null,c__20599__auto__,i__36745);
cljs.core.chunk_append.call(null,b__36746,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__20601__auto__ = ((function (i__36745,y,c__20599__auto__,size__20600__auto__,b__36746,s__36744__$2,temp__6144__auto__,vec__36742,width,height,slange_positions,hindre__$1,brett,slange,hindre){
return (function snake_game$view$render_brett_$_iter__36743_$_iter__36755(s__36756){
return (new cljs.core.LazySeq(null,((function (i__36745,y,c__20599__auto__,size__20600__auto__,b__36746,s__36744__$2,temp__6144__auto__,vec__36742,width,height,slange_positions,hindre__$1,brett,slange,hindre){
return (function (){
var s__36756__$1 = s__36756;
while(true){
var temp__6144__auto____$1 = cljs.core.seq.call(null,s__36756__$1);
if(temp__6144__auto____$1){
var s__36756__$2 = temp__6144__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36756__$2)){
var c__20599__auto____$1 = cljs.core.chunk_first.call(null,s__36756__$2);
var size__20600__auto____$1 = cljs.core.count.call(null,c__20599__auto____$1);
var b__36758 = cljs.core.chunk_buffer.call(null,size__20600__auto____$1);
if((function (){var i__36757 = (0);
while(true){
if((i__36757 < size__20600__auto____$1)){
var x = cljs.core._nth.call(null,c__20599__auto____$1,i__36757);
var current_pos = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
cljs.core.chunk_append.call(null,b__36758,(cljs.core.truth_(slange_positions.call(null,current_pos))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.slange-on-cell","td.slange-on-cell",1846682431)], null):(cljs.core.truth_(hindre__$1.call(null,current_pos))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.skatt","td.skatt",813762496)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.cell","td.cell",-1877794863)], null)
)));

var G__36763 = (i__36757 + (1));
i__36757 = G__36763;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36758),snake_game$view$render_brett_$_iter__36743_$_iter__36755.call(null,cljs.core.chunk_rest.call(null,s__36756__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36758),null);
}
} else {
var x = cljs.core.first.call(null,s__36756__$2);
var current_pos = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
return cljs.core.cons.call(null,(cljs.core.truth_(slange_positions.call(null,current_pos))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.slange-on-cell","td.slange-on-cell",1846682431)], null):(cljs.core.truth_(hindre__$1.call(null,current_pos))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.skatt","td.skatt",813762496)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.cell","td.cell",-1877794863)], null)
)),snake_game$view$render_brett_$_iter__36743_$_iter__36755.call(null,cljs.core.rest.call(null,s__36756__$2)));
}
} else {
return null;
}
break;
}
});})(i__36745,y,c__20599__auto__,size__20600__auto__,b__36746,s__36744__$2,temp__6144__auto__,vec__36742,width,height,slange_positions,hindre__$1,brett,slange,hindre))
,null,null));
});})(i__36745,y,c__20599__auto__,size__20600__auto__,b__36746,s__36744__$2,temp__6144__auto__,vec__36742,width,height,slange_positions,hindre__$1,brett,slange,hindre))
;
return iter__20601__auto__.call(null,cljs.core.range.call(null,width));
})()));

var G__36764 = (i__36745 + (1));
i__36745 = G__36764;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36746),snake_game$view$render_brett_$_iter__36743.call(null,cljs.core.chunk_rest.call(null,s__36744__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36746),null);
}
} else {
var y = cljs.core.first.call(null,s__36744__$2);
return cljs.core.cons.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__20601__auto__ = ((function (y,s__36744__$2,temp__6144__auto__,vec__36742,width,height,slange_positions,hindre__$1,brett,slange,hindre){
return (function snake_game$view$render_brett_$_iter__36743_$_iter__36759(s__36760){
return (new cljs.core.LazySeq(null,((function (y,s__36744__$2,temp__6144__auto__,vec__36742,width,height,slange_positions,hindre__$1,brett,slange,hindre){
return (function (){
var s__36760__$1 = s__36760;
while(true){
var temp__6144__auto____$1 = cljs.core.seq.call(null,s__36760__$1);
if(temp__6144__auto____$1){
var s__36760__$2 = temp__6144__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36760__$2)){
var c__20599__auto__ = cljs.core.chunk_first.call(null,s__36760__$2);
var size__20600__auto__ = cljs.core.count.call(null,c__20599__auto__);
var b__36762 = cljs.core.chunk_buffer.call(null,size__20600__auto__);
if((function (){var i__36761 = (0);
while(true){
if((i__36761 < size__20600__auto__)){
var x = cljs.core._nth.call(null,c__20599__auto__,i__36761);
var current_pos = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
cljs.core.chunk_append.call(null,b__36762,(cljs.core.truth_(slange_positions.call(null,current_pos))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.slange-on-cell","td.slange-on-cell",1846682431)], null):(cljs.core.truth_(hindre__$1.call(null,current_pos))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.skatt","td.skatt",813762496)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.cell","td.cell",-1877794863)], null)
)));

var G__36765 = (i__36761 + (1));
i__36761 = G__36765;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36762),snake_game$view$render_brett_$_iter__36743_$_iter__36759.call(null,cljs.core.chunk_rest.call(null,s__36760__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36762),null);
}
} else {
var x = cljs.core.first.call(null,s__36760__$2);
var current_pos = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
return cljs.core.cons.call(null,(cljs.core.truth_(slange_positions.call(null,current_pos))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.slange-on-cell","td.slange-on-cell",1846682431)], null):(cljs.core.truth_(hindre__$1.call(null,current_pos))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.skatt","td.skatt",813762496)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.cell","td.cell",-1877794863)], null)
)),snake_game$view$render_brett_$_iter__36743_$_iter__36759.call(null,cljs.core.rest.call(null,s__36760__$2)));
}
} else {
return null;
}
break;
}
});})(y,s__36744__$2,temp__6144__auto__,vec__36742,width,height,slange_positions,hindre__$1,brett,slange,hindre))
,null,null));
});})(y,s__36744__$2,temp__6144__auto__,vec__36742,width,height,slange_positions,hindre__$1,brett,slange,hindre))
;
return iter__20601__auto__.call(null,cljs.core.range.call(null,width));
})()),snake_game$view$render_brett_$_iter__36743.call(null,cljs.core.rest.call(null,s__36744__$2)));
}
} else {
return null;
}
break;
}
});})(vec__36742,width,height,slange_positions,hindre__$1,brett,slange,hindre))
,null,null));
});})(vec__36742,width,height,slange_positions,hindre__$1,brett,slange,hindre))
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
 * Renders player's poeng
 */
snake_game.view.poeng = (function snake_game$view$poeng(){
var poeng__$1 = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"poeng","poeng",1934614641)], null));
return ((function (poeng__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.poeng","div.poeng",-90843518),[cljs.core.str("Poeng: "),cljs.core.str(cljs.core.deref.call(null,poeng__$1))].join('')], null);
});
;})(poeng__$1))
});
/**
 * The main rendering function
 */
snake_game.view.game = (function snake_game$view$game(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [snake_game.view.game_over], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [snake_game.view.render_brett], null)], null);
});

//# sourceMappingURL=view.js.map?rel=1513110307583