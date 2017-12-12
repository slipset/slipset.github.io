// Compiled by ClojureScript 1.9.14 {}
goog.provide('snake_game.handlers');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('snake_game.norwegian');
goog.require('goog.events');
goog.require('snake_game.utils');
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"initialize","initialize",609952913),snake_game.utils.start_spill);
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"oppdater-spill","oppdater-spill",-907132547),snake_game.utils.oppdater_spill);
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"brett","brett",1091144321),(function (db,_){
return reagent.ratom.make_reaction.call(null,(function (){
return new cljs.core.Keyword(null,"brett","brett",1091144321).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db));
}));
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"hindre","hindre",-466213883),(function (db,_){
return reagent.ratom.make_reaction.call(null,(function (){
return new cljs.core.Keyword(null,"hindre","hindre",-466213883).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db));
}));
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"slange","slange",-1354660973),(function (db,_){
return reagent.ratom.make_reaction.call(null,(function (){
return new cljs.core.Keyword(null,"kropp","kropp",953722936).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"slange","slange",-1354660973).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db)));
}));
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"skritt","skritt",179231924),(function (db,_){
return reagent.ratom.make_reaction.call(null,(function (){
return new cljs.core.Keyword(null,"skritt","skritt",179231924).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db));
}));
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"er-spillet-igang?","er-spillet-igang?",1440052571),(function (db,_){
return reagent.ratom.make_reaction.call(null,(function (){
return new cljs.core.Keyword(null,"er-spillet-igang?","er-spillet-igang?",1440052571).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db));
}));
}));

//# sourceMappingURL=handlers.js.map?rel=1513111482102