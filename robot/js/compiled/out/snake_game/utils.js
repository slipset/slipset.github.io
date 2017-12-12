// Compiled by ClojureScript 1.9.14 {}
goog.provide('snake_game.utils');
goog.require('cljs.core');
goog.require('snake_game.norwegian');
snake_game.utils.alle_plasser_på_brettet = (function snake_game$utils$alle_plasser_på_brettet(x,y){
var iter__20601__auto__ = (function snake_game$utils$alle_plasser_på_brettet_$_iter__37278(s__37279){
return (new cljs.core.LazySeq(null,(function (){
var s__37279__$1 = s__37279;
while(true){
var temp__6144__auto__ = cljs.core.seq.call(null,s__37279__$1);
if(temp__6144__auto__){
var xs__6696__auto__ = temp__6144__auto__;
var x_pos = cljs.core.first.call(null,xs__6696__auto__);
var iterys__20597__auto__ = ((function (s__37279__$1,x_pos,xs__6696__auto__,temp__6144__auto__){
return (function snake_game$utils$alle_plasser_på_brettet_$_iter__37278_$_iter__37280(s__37281){
return (new cljs.core.LazySeq(null,((function (s__37279__$1,x_pos,xs__6696__auto__,temp__6144__auto__){
return (function (){
var s__37281__$1 = s__37281;
while(true){
var temp__6144__auto____$1 = cljs.core.seq.call(null,s__37281__$1);
if(temp__6144__auto____$1){
var s__37281__$2 = temp__6144__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__37281__$2)){
var c__20599__auto__ = cljs.core.chunk_first.call(null,s__37281__$2);
var size__20600__auto__ = cljs.core.count.call(null,c__20599__auto__);
var b__37283 = cljs.core.chunk_buffer.call(null,size__20600__auto__);
if((function (){var i__37282 = (0);
while(true){
if((i__37282 < size__20600__auto__)){
var y_pos = cljs.core._nth.call(null,c__20599__auto__,i__37282);
cljs.core.chunk_append.call(null,b__37283,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_pos,y_pos], null));

var G__37284 = (i__37282 + (1));
i__37282 = G__37284;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37283),snake_game$utils$alle_plasser_på_brettet_$_iter__37278_$_iter__37280.call(null,cljs.core.chunk_rest.call(null,s__37281__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37283),null);
}
} else {
var y_pos = cljs.core.first.call(null,s__37281__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_pos,y_pos], null),snake_game$utils$alle_plasser_på_brettet_$_iter__37278_$_iter__37280.call(null,cljs.core.rest.call(null,s__37281__$2)));
}
} else {
return null;
}
break;
}
});})(s__37279__$1,x_pos,xs__6696__auto__,temp__6144__auto__))
,null,null));
});})(s__37279__$1,x_pos,xs__6696__auto__,temp__6144__auto__))
;
var fs__20598__auto__ = cljs.core.seq.call(null,iterys__20597__auto__.call(null,snake_game.norwegian.tall.call(null,y)));
if(fs__20598__auto__){
return cljs.core.concat.call(null,fs__20598__auto__,snake_game$utils$alle_plasser_på_brettet_$_iter__37278.call(null,cljs.core.rest.call(null,s__37279__$1)));
} else {
var G__37285 = cljs.core.rest.call(null,s__37279__$1);
s__37279__$1 = G__37285;
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
snake_game.utils.finn_tilfeldige_ledige_plasser_på_brettet = (function snake_game$utils$finn_tilfeldige_ledige_plasser_på_brettet(antall,slange,p__37286,p__37287){
var vec__37291 = p__37286;
var x = cljs.core.nth.call(null,vec__37291,(0),null);
var y = cljs.core.nth.call(null,vec__37291,(1),null);
var map__37292 = p__37287;
var map__37292__$1 = ((((!((map__37292 == null)))?((((map__37292.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37292.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37292):map__37292);
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
snake_game.utils.nytt_spill = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"brett","brett",1091144321),snake_game.utils.brett,new cljs.core.Keyword(null,"slange","slange",-1354660973),snake_game.utils.slange,new cljs.core.Keyword(null,"hindre","hindre",-466213883),cljs.core.PersistentHashSet.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(7)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(11),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(7)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(6)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(11),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(6)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(7)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(5)], null)], true),new cljs.core.Keyword(null,"skritt","skritt",179231924),(0),new cljs.core.Keyword(null,"er-spillet-igang?","er-spillet-igang?",1440052571),true], null);
snake_game.utils.er_det_en_kollisjon_QMARK_ = (function snake_game$utils$er_det_en_kollisjon_QMARK_(p__37294){
var map__37300 = p__37294;
var map__37300__$1 = ((((!((map__37300 == null)))?((((map__37300.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37300.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37300):map__37300);
var brett = cljs.core.get.call(null,map__37300__$1,new cljs.core.Keyword(null,"brett","brett",1091144321));
var hindre = cljs.core.get.call(null,map__37300__$1,new cljs.core.Keyword(null,"hindre","hindre",-466213883));
var slange = cljs.core.get.call(null,map__37300__$1,new cljs.core.Keyword(null,"slange","slange",-1354660973));
var vec__37302 = brett;
var x = cljs.core.nth.call(null,vec__37302,(0),null);
var y = cljs.core.nth.call(null,vec__37302,(1),null);
var map__37303 = slange;
var map__37303__$1 = ((((!((map__37303 == null)))?((((map__37303.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37303.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37303):map__37303);
var retning = cljs.core.get.call(null,map__37303__$1,new cljs.core.Keyword(null,"retning","retning",1193231030));
var kropp = cljs.core.get.call(null,map__37303__$1,new cljs.core.Keyword(null,"kropp","kropp",953722936));
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
snake_game.utils.gjør_slangen_større = (function snake_game$utils$gjør_slangen_større(p__37306){
var map__37312 = p__37306;
var map__37312__$1 = ((((!((map__37312 == null)))?((((map__37312.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37312.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37312):map__37312);
var slange = map__37312__$1;
var kropp = cljs.core.get.call(null,map__37312__$1,new cljs.core.Keyword(null,"kropp","kropp",953722936));
var retning = cljs.core.get.call(null,map__37312__$1,new cljs.core.Keyword(null,"retning","retning",1193231030));
var vec__37314 = snake_game.norwegian.ta_de_siste.call(null,(2),kropp);
var vec__37315 = cljs.core.nth.call(null,vec__37314,(0),null);
var første_x = cljs.core.nth.call(null,vec__37315,(0),null);
var første_y = cljs.core.nth.call(null,vec__37315,(1),null);
var vec__37316 = cljs.core.nth.call(null,vec__37314,(1),null);
var andre_x = cljs.core.nth.call(null,vec__37316,(0),null);
var andre_y = cljs.core.nth.call(null,vec__37316,(1),null);
var x = snake_game.utils.slange_halen.call(null,første_x,andre_x);
var y = snake_game.utils.slange_halen.call(null,første_y,andre_y);
return snake_game.norwegian.endre_i.call(null,slange,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kropp","kropp",953722936)], null),((function (vec__37314,vec__37315,første_x,første_y,vec__37316,andre_x,andre_y,x,y,map__37312,map__37312__$1,slange,kropp,retning){
return (function (p1__37305_SHARP_){
return cljs.core.conj.call(null,p1__37305_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});})(vec__37314,vec__37315,første_x,første_y,vec__37316,andre_x,andre_y,x,y,map__37312,map__37312__$1,slange,kropp,retning))
);
});
snake_game.utils.avslutt = (function snake_game$utils$avslutt(spill){
return snake_game.norwegian.legg_til_i.call(null,spill,new cljs.core.Keyword(null,"er-spillet-igang?","er-spillet-igang?",1440052571),false);
});
snake_game.utils.lag_ny_slange = (function snake_game$utils$lag_ny_slange(p__37317,nytt_hode){
var map__37320 = p__37317;
var map__37320__$1 = ((((!((map__37320 == null)))?((((map__37320.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37320.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37320):map__37320);
var slange = map__37320__$1;
var kropp = cljs.core.get.call(null,map__37320__$1,new cljs.core.Keyword(null,"kropp","kropp",953722936));
return snake_game.norwegian.legg_til_i.call(null,slange,new cljs.core.Keyword(null,"kropp","kropp",953722936),snake_game.norwegian.putt_inni.call(null,cljs.core.PersistentVector.EMPTY,snake_game.norwegian.kast_siste_i.call(null,snake_game.norwegian.legg_til.call(null,nytt_hode,kropp))));
});
snake_game.utils.lag_nytt_hode = (function snake_game$utils$lag_nytt_hode(slange){
var retning = new cljs.core.Keyword(null,"retning","retning",1193231030).cljs$core$IFn$_invoke$arity$1(slange);
var kropp = new cljs.core.Keyword(null,"kropp","kropp",953722936).cljs$core$IFn$_invoke$arity$1(slange);
return cljs.core.mapv.call(null,((function (retning,kropp){
return (function (p1__37322_SHARP_,p2__37323_SHARP_){
return (p1__37322_SHARP_ + p2__37323_SHARP_);
});})(retning,kropp))
,retning,snake_game.norwegian.første_i.call(null,kropp));
});
snake_game.utils.flytt_slangen = (function snake_game$utils$flytt_slangen(spill){
var slange = new cljs.core.Keyword(null,"slange","slange",-1354660973).cljs$core$IFn$_invoke$arity$1(spill);
var nytt_hode = snake_game.utils.lag_nytt_hode.call(null,slange);
var ny_slange = snake_game.utils.lag_ny_slange.call(null,slange,nytt_hode);
return snake_game.norwegian.legg_til_i.call(null,spill,new cljs.core.Keyword(null,"slange","slange",-1354660973),ny_slange);
});
snake_game.utils.bytt_retning_på_slangen = (function snake_game$utils$bytt_retning_på_slangen(p__37324,p__37325){
var vec__37328 = p__37324;
var ny_x = cljs.core.nth.call(null,vec__37328,(0),null);
var ny_y = cljs.core.nth.call(null,vec__37328,(1),null);
var vec__37329 = p__37325;
var x = cljs.core.nth.call(null,vec__37329,(0),null);
var y = cljs.core.nth.call(null,vec__37329,(1),null);
if((cljs.core._EQ_.call(null,x,ny_x)) || (cljs.core._EQ_.call(null,y,ny_y))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ny_x,ny_y], null);
}
});
snake_game.utils.endre_retning = (function snake_game$utils$endre_retning(spill,p__37330){
var vec__37332 = p__37330;
var _ = cljs.core.nth.call(null,vec__37332,(0),null);
var ny_retning = cljs.core.nth.call(null,vec__37332,(1),null);
return snake_game.norwegian.endre_i.call(null,spill,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"slange","slange",-1354660973),new cljs.core.Keyword(null,"retning","retning",1193231030)], null),cljs.core.partial.call(null,snake_game.utils.bytt_retning_på_slangen,ny_retning));
});
snake_game.utils.til_høyre = (function snake_game$utils$til_høyre(retning){
var pred__37336 = cljs.core._EQ_;
var expr__37337 = retning;
if(cljs.core.truth_(pred__37336.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),expr__37337))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null);
} else {
if(cljs.core.truth_(pred__37336.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),expr__37337))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null);
} else {
if(cljs.core.truth_(pred__37336.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),expr__37337))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null);
} else {
if(cljs.core.truth_(pred__37336.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),expr__37337))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__37337)].join('')));
}
}
}
}
});
snake_game.utils.kanskje_endre_retning = (function snake_game$utils$kanskje_endre_retning(p__37339){
var map__37342 = p__37339;
var map__37342__$1 = ((((!((map__37342 == null)))?((((map__37342.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37342.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37342):map__37342);
var spill = map__37342__$1;
var brett = cljs.core.get.call(null,map__37342__$1,new cljs.core.Keyword(null,"brett","brett",1091144321));
var slange = cljs.core.get.call(null,map__37342__$1,new cljs.core.Keyword(null,"slange","slange",-1354660973));
if(cljs.core.truth_(snake_game.utils.er_det_en_kollisjon_QMARK_.call(null,spill))){
return snake_game.utils.endre_retning.call(null,spill,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,snake_game.utils.til_høyre.call(null,new cljs.core.Keyword(null,"retning","retning",1193231030).cljs$core$IFn$_invoke$arity$1(slange))], null));
} else {
return spill;
}
});
snake_game.utils.oppdater_skritt = (function snake_game$utils$oppdater_skritt(spill){
return snake_game.norwegian.endre_i.call(null,spill,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"skritt","skritt",179231924)], null),cljs.core.inc);
});
snake_game.utils.neste_steg = (function snake_game$utils$neste_steg(p__37344){
var map__37347 = p__37344;
var map__37347__$1 = ((((!((map__37347 == null)))?((((map__37347.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37347.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37347):map__37347);
var spill = map__37347__$1;
var slange = cljs.core.get.call(null,map__37347__$1,new cljs.core.Keyword(null,"slange","slange",-1354660973));
var brett = cljs.core.get.call(null,map__37347__$1,new cljs.core.Keyword(null,"brett","brett",1091144321));
if(cljs.core.truth_(snake_game.utils.er_det_en_kollisjon_QMARK_.call(null,spill))){
return snake_game.utils.avslutt.call(null,spill);
} else {
return snake_game.utils.kanskje_endre_retning.call(null,snake_game.utils.oppdater_skritt.call(null,snake_game.utils.flytt_slangen.call(null,spill)));
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

//# sourceMappingURL=utils.js.map?rel=1513111481870