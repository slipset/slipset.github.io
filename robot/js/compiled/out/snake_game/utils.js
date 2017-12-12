// Compiled by ClojureScript 1.9.14 {}
goog.provide('snake_game.utils');
goog.require('cljs.core');
goog.require('snake_game.norwegian');
snake_game.utils.alle_plasser_på_brettet = (function snake_game$utils$alle_plasser_på_brettet(x,y){
var iter__20601__auto__ = (function snake_game$utils$alle_plasser_på_brettet_$_iter__36571(s__36572){
return (new cljs.core.LazySeq(null,(function (){
var s__36572__$1 = s__36572;
while(true){
var temp__6144__auto__ = cljs.core.seq.call(null,s__36572__$1);
if(temp__6144__auto__){
var xs__6696__auto__ = temp__6144__auto__;
var x_pos = cljs.core.first.call(null,xs__6696__auto__);
var iterys__20597__auto__ = ((function (s__36572__$1,x_pos,xs__6696__auto__,temp__6144__auto__){
return (function snake_game$utils$alle_plasser_på_brettet_$_iter__36571_$_iter__36573(s__36574){
return (new cljs.core.LazySeq(null,((function (s__36572__$1,x_pos,xs__6696__auto__,temp__6144__auto__){
return (function (){
var s__36574__$1 = s__36574;
while(true){
var temp__6144__auto____$1 = cljs.core.seq.call(null,s__36574__$1);
if(temp__6144__auto____$1){
var s__36574__$2 = temp__6144__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36574__$2)){
var c__20599__auto__ = cljs.core.chunk_first.call(null,s__36574__$2);
var size__20600__auto__ = cljs.core.count.call(null,c__20599__auto__);
var b__36576 = cljs.core.chunk_buffer.call(null,size__20600__auto__);
if((function (){var i__36575 = (0);
while(true){
if((i__36575 < size__20600__auto__)){
var y_pos = cljs.core._nth.call(null,c__20599__auto__,i__36575);
cljs.core.chunk_append.call(null,b__36576,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_pos,y_pos], null));

var G__36577 = (i__36575 + (1));
i__36575 = G__36577;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36576),snake_game$utils$alle_plasser_på_brettet_$_iter__36571_$_iter__36573.call(null,cljs.core.chunk_rest.call(null,s__36574__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36576),null);
}
} else {
var y_pos = cljs.core.first.call(null,s__36574__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_pos,y_pos], null),snake_game$utils$alle_plasser_på_brettet_$_iter__36571_$_iter__36573.call(null,cljs.core.rest.call(null,s__36574__$2)));
}
} else {
return null;
}
break;
}
});})(s__36572__$1,x_pos,xs__6696__auto__,temp__6144__auto__))
,null,null));
});})(s__36572__$1,x_pos,xs__6696__auto__,temp__6144__auto__))
;
var fs__20598__auto__ = cljs.core.seq.call(null,iterys__20597__auto__.call(null,snake_game.norwegian.tall.call(null,y)));
if(fs__20598__auto__){
return cljs.core.concat.call(null,fs__20598__auto__,snake_game$utils$alle_plasser_på_brettet_$_iter__36571.call(null,cljs.core.rest.call(null,s__36572__$1)));
} else {
var G__36578 = cljs.core.rest.call(null,s__36572__$1);
s__36572__$1 = G__36578;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__20601__auto__.call(null,snake_game.norwegian.tall.call(null,x));
});
snake_game.utils.alle_ledige_plasser = (function snake_game$utils$alle_ledige_plasser(slangens_plasser,alle_plasser){
return snake_game.norwegian.fjern.call(null,slangens_plasser,alle_plasser);
});
snake_game.utils.finn_tilfeldige_ledige_plasser_på_brettet = (function snake_game$utils$finn_tilfeldige_ledige_plasser_på_brettet(antall,slange,p__36579,p__36580){
var vec__36584 = p__36579;
var x = cljs.core.nth.call(null,vec__36584,(0),null);
var y = cljs.core.nth.call(null,vec__36584,(1),null);
var map__36585 = p__36580;
var map__36585__$1 = ((((!((map__36585 == null)))?((((map__36585.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36585.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36585):map__36585);
var slangens_plasser = snake_game.norwegian.putt_inni.call(null,cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"kropp","kropp",953722936).cljs$core$IFn$_invoke$arity$1(slange));
var hindre = snake_game.norwegian.putt_inni.call(null,cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"hindre","hindre",-466213883).cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY));
var alle_plasser = snake_game.utils.alle_plasser_på_brettet.call(null,x,y);
var temp__6144__auto__ = cljs.core.seq.call(null,snake_game.utils.alle_ledige_plasser.call(null,slangens_plasser,alle_plasser));
if(temp__6144__auto__){
var ledige_plasser = temp__6144__auto__;
return snake_game.norwegian.velg_en_tilfeldig.call(null,ledige_plasser);
} else {
return null;
}
});
snake_game.utils.brett = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),(8)], null);
snake_game.utils.slange = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"retning","retning",1193231030),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.Keyword(null,"kropp","kropp",953722936),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(6)], null)], null)], null);
snake_game.utils.nytt_spill = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"brett","brett",1091144321),snake_game.utils.brett,new cljs.core.Keyword(null,"slange","slange",-1354660973),snake_game.utils.slange,new cljs.core.Keyword(null,"hindre","hindre",-466213883),cljs.core.PersistentHashSet.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(7)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(11),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(7)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(6)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(11),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(6)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(7)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(5)], null)], true),new cljs.core.Keyword(null,"poeng","poeng",1934614641),(0),new cljs.core.Keyword(null,"er-spillet-igang?","er-spillet-igang?",1440052571),true], null);
snake_game.utils.er_det_en_kollisjon_QMARK_ = (function snake_game$utils$er_det_en_kollisjon_QMARK_(p__36587){
var map__36593 = p__36587;
var map__36593__$1 = ((((!((map__36593 == null)))?((((map__36593.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36593.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36593):map__36593);
var brett = cljs.core.get.call(null,map__36593__$1,new cljs.core.Keyword(null,"brett","brett",1091144321));
var hindre = cljs.core.get.call(null,map__36593__$1,new cljs.core.Keyword(null,"hindre","hindre",-466213883));
var slange = cljs.core.get.call(null,map__36593__$1,new cljs.core.Keyword(null,"slange","slange",-1354660973));
var vec__36595 = brett;
var x = cljs.core.nth.call(null,vec__36595,(0),null);
var y = cljs.core.nth.call(null,vec__36595,(1),null);
var map__36596 = slange;
var map__36596__$1 = ((((!((map__36596 == null)))?((((map__36596.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36596.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36596):map__36596);
var retning = cljs.core.get.call(null,map__36596__$1,new cljs.core.Keyword(null,"retning","retning",1193231030));
var kropp = cljs.core.get.call(null,map__36596__$1,new cljs.core.Keyword(null,"kropp","kropp",953722936));
var kant_x = cljs.core.PersistentHashSet.fromArray([x,(-1)], true);
var kant_y = cljs.core.PersistentHashSet.fromArray([y,(-1)], true);
var neste_x = (snake_game.norwegian.første_i.call(null,retning) + snake_game.norwegian.første_i_første.call(null,kropp));
var neste_y = (snake_game.norwegian.andre_i.call(null,retning) + snake_game.norwegian.andre_i.call(null,snake_game.norwegian.første_i.call(null,kropp)));
var or__19747__auto__ = snake_game.norwegian.finnes_i_QMARK_.call(null,kant_x,neste_x);
if(cljs.core.truth_(or__19747__auto__)){
return or__19747__auto__;
} else {
var or__19747__auto____$1 = snake_game.norwegian.finnes_i_QMARK_.call(null,kant_y,neste_y);
if(cljs.core.truth_(or__19747__auto____$1)){
return or__19747__auto____$1;
} else {
var or__19747__auto____$2 = hindre.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [neste_x,neste_y], null));
if(cljs.core.truth_(or__19747__auto____$2)){
return or__19747__auto____$2;
} else {
return snake_game.norwegian.finnes_i_QMARK_.call(null,snake_game.norwegian.putt_inni.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.rest.call(null,kropp)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [neste_x,neste_y], null));
}
}
}
});
snake_game.utils.slange_halen = (function snake_game$utils$slange_halen(koordinat_1,koordinat_2){
if(cljs.core._EQ_.call(null,koordinat_1,koordinat_2)){
return koordinat_1;
} else {
if((koordinat_1 > koordinat_2)){
return snake_game.norwegian.minsk_med_en.call(null,koordinat_2);
} else {
return snake_game.norwegian.øk_med_en.call(null,koordinat_2);
}
}
});
snake_game.utils.gjør_slangen_større = (function snake_game$utils$gjør_slangen_større(p__36599){
var map__36605 = p__36599;
var map__36605__$1 = ((((!((map__36605 == null)))?((((map__36605.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36605.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36605):map__36605);
var slange = map__36605__$1;
var kropp = cljs.core.get.call(null,map__36605__$1,new cljs.core.Keyword(null,"kropp","kropp",953722936));
var retning = cljs.core.get.call(null,map__36605__$1,new cljs.core.Keyword(null,"retning","retning",1193231030));
var vec__36607 = snake_game.norwegian.ta_de_siste.call(null,(2),kropp);
var vec__36608 = cljs.core.nth.call(null,vec__36607,(0),null);
var første_x = cljs.core.nth.call(null,vec__36608,(0),null);
var første_y = cljs.core.nth.call(null,vec__36608,(1),null);
var vec__36609 = cljs.core.nth.call(null,vec__36607,(1),null);
var andre_x = cljs.core.nth.call(null,vec__36609,(0),null);
var andre_y = cljs.core.nth.call(null,vec__36609,(1),null);
var x = snake_game.utils.slange_halen.call(null,første_x,andre_x);
var y = snake_game.utils.slange_halen.call(null,første_y,andre_y);
return snake_game.norwegian.endre_i.call(null,slange,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kropp","kropp",953722936)], null),((function (vec__36607,vec__36608,første_x,første_y,vec__36609,andre_x,andre_y,x,y,map__36605,map__36605__$1,slange,kropp,retning){
return (function (p1__36598_SHARP_){
return cljs.core.conj.call(null,p1__36598_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(vec__36607,vec__36608,første_x,første_y,vec__36609,andre_x,andre_y,x,y,map__36605,map__36605__$1,slange,kropp,retning))
);
});
snake_game.utils.avslutt = (function snake_game$utils$avslutt(spill){
return snake_game.norwegian.legg_til_i.call(null,spill,new cljs.core.Keyword(null,"er-spillet-igang?","er-spillet-igang?",1440052571),false);
});
snake_game.utils.lag_ny_slange = (function snake_game$utils$lag_ny_slange(p__36610,nytt_hode){
var map__36613 = p__36610;
var map__36613__$1 = ((((!((map__36613 == null)))?((((map__36613.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36613.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36613):map__36613);
var slange = map__36613__$1;
var kropp = cljs.core.get.call(null,map__36613__$1,new cljs.core.Keyword(null,"kropp","kropp",953722936));
return snake_game.norwegian.legg_til_i.call(null,slange,new cljs.core.Keyword(null,"kropp","kropp",953722936),snake_game.norwegian.putt_inni.call(null,cljs.core.PersistentVector.EMPTY,snake_game.norwegian.kast_siste_i.call(null,snake_game.norwegian.legg_til.call(null,nytt_hode,kropp))));
});
snake_game.utils.lag_nytt_hode = (function snake_game$utils$lag_nytt_hode(slange){
var retning = new cljs.core.Keyword(null,"retning","retning",1193231030).cljs$core$IFn$_invoke$arity$1(slange);
var kropp = new cljs.core.Keyword(null,"kropp","kropp",953722936).cljs$core$IFn$_invoke$arity$1(slange);
return cljs.core.mapv.call(null,((function (retning,kropp){
return (function (p1__36615_SHARP_,p2__36616_SHARP_){
return (p1__36615_SHARP_ + p2__36616_SHARP_);
});})(retning,kropp))
,retning,snake_game.norwegian.første_i.call(null,kropp));
});
snake_game.utils.flytt_slangen = (function snake_game$utils$flytt_slangen(spill){
var slange = new cljs.core.Keyword(null,"slange","slange",-1354660973).cljs$core$IFn$_invoke$arity$1(spill);
var nytt_hode = snake_game.utils.lag_nytt_hode.call(null,slange);
var ny_slange = snake_game.utils.lag_ny_slange.call(null,slange,nytt_hode);
return snake_game.norwegian.legg_til_i.call(null,spill,new cljs.core.Keyword(null,"slange","slange",-1354660973),ny_slange);
});
snake_game.utils.bytt_retning_på_slangen = (function snake_game$utils$bytt_retning_på_slangen(p__36617,p__36618){
var vec__36621 = p__36617;
var ny_x = cljs.core.nth.call(null,vec__36621,(0),null);
var ny_y = cljs.core.nth.call(null,vec__36621,(1),null);
var vec__36622 = p__36618;
var x = cljs.core.nth.call(null,vec__36622,(0),null);
var y = cljs.core.nth.call(null,vec__36622,(1),null);
if((cljs.core._EQ_.call(null,x,ny_x)) || (cljs.core._EQ_.call(null,y,ny_y))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ny_x,ny_y], null);
}
});
snake_game.utils.endre_retning = (function snake_game$utils$endre_retning(spill,p__36623){
var vec__36625 = p__36623;
var _ = cljs.core.nth.call(null,vec__36625,(0),null);
var ny_retning = cljs.core.nth.call(null,vec__36625,(1),null);
return snake_game.norwegian.endre_i.call(null,spill,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"slange","slange",-1354660973),new cljs.core.Keyword(null,"retning","retning",1193231030)], null),cljs.core.partial.call(null,snake_game.utils.bytt_retning_på_slangen,ny_retning));
});
snake_game.utils.til_høyre = (function snake_game$utils$til_høyre(retning){
var pred__36629 = cljs.core._EQ_;
var expr__36630 = retning;
if(cljs.core.truth_(pred__36629.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),expr__36630))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null);
} else {
if(cljs.core.truth_(pred__36629.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),expr__36630))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null);
} else {
if(cljs.core.truth_(pred__36629.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),expr__36630))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null);
} else {
if(cljs.core.truth_(pred__36629.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),expr__36630))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__36630)].join('')));
}
}
}
}
});
snake_game.utils.kanskje_endre_retning = (function snake_game$utils$kanskje_endre_retning(p__36632){
var map__36635 = p__36632;
var map__36635__$1 = ((((!((map__36635 == null)))?((((map__36635.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36635.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36635):map__36635);
var spill = map__36635__$1;
var brett = cljs.core.get.call(null,map__36635__$1,new cljs.core.Keyword(null,"brett","brett",1091144321));
var slange = cljs.core.get.call(null,map__36635__$1,new cljs.core.Keyword(null,"slange","slange",-1354660973));
if(cljs.core.truth_(snake_game.utils.er_det_en_kollisjon_QMARK_.call(null,spill))){
return snake_game.utils.endre_retning.call(null,spill,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,snake_game.utils.til_høyre.call(null,new cljs.core.Keyword(null,"retning","retning",1193231030).cljs$core$IFn$_invoke$arity$1(slange))], null));
} else {
return spill;
}
});
snake_game.utils.neste_steg = (function snake_game$utils$neste_steg(p__36637){
var map__36640 = p__36637;
var map__36640__$1 = ((((!((map__36640 == null)))?((((map__36640.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36640.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36640):map__36640);
var spill = map__36640__$1;
var slange = cljs.core.get.call(null,map__36640__$1,new cljs.core.Keyword(null,"slange","slange",-1354660973));
var brett = cljs.core.get.call(null,map__36640__$1,new cljs.core.Keyword(null,"brett","brett",1091144321));
if(cljs.core.truth_(snake_game.utils.er_det_en_kollisjon_QMARK_.call(null,spill))){
return snake_game.utils.avslutt.call(null,spill);
} else {
return snake_game.utils.kanskje_endre_retning.call(null,snake_game.utils.flytt_slangen.call(null,spill));
}
});
snake_game.utils.oppdater_spill = (function snake_game$utils$oppdater_spill(spill,_){
if(cljs.core.truth_(new cljs.core.Keyword(null,"er-spillet-igang?","er-spillet-igang?",1440052571).cljs$core$IFn$_invoke$arity$1(spill))){
return snake_game.utils.neste_steg.call(null,spill);
} else {
return spill;
}
});
snake_game.utils.start_spill = (function snake_game$utils$start_spill(spill,_){
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"er-spillet-igang?","er-spillet-igang?",1440052571).cljs$core$IFn$_invoke$arity$1(spill))){
return cljs.core.merge.call(null,spill,snake_game.utils.nytt_spill);
} else {
return spill;
}
});

//# sourceMappingURL=utils.js.map?rel=1513110290746