// Compiled by ClojureScript 1.9.14 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__28497){
var map__28516 = p__28497;
var map__28516__$1 = ((((!((map__28516 == null)))?((((map__28516.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28516.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28516):map__28516);
var m = map__28516__$1;
var n = cljs.core.get.call(null,map__28516__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__28516__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__6144__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__6144__auto__)){
var ns = temp__6144__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__28518_28534 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28519_28535 = null;
var count__28520_28536 = (0);
var i__28521_28537 = (0);
while(true){
if((i__28521_28537 < count__28520_28536)){
var f_28538 = cljs.core._nth.call(null,chunk__28519_28535,i__28521_28537);
cljs.core.println.call(null,"  ",f_28538);

var G__28539 = seq__28518_28534;
var G__28540 = chunk__28519_28535;
var G__28541 = count__28520_28536;
var G__28542 = (i__28521_28537 + (1));
seq__28518_28534 = G__28539;
chunk__28519_28535 = G__28540;
count__28520_28536 = G__28541;
i__28521_28537 = G__28542;
continue;
} else {
var temp__6144__auto___28543 = cljs.core.seq.call(null,seq__28518_28534);
if(temp__6144__auto___28543){
var seq__28518_28544__$1 = temp__6144__auto___28543;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28518_28544__$1)){
var c__20650__auto___28545 = cljs.core.chunk_first.call(null,seq__28518_28544__$1);
var G__28546 = cljs.core.chunk_rest.call(null,seq__28518_28544__$1);
var G__28547 = c__20650__auto___28545;
var G__28548 = cljs.core.count.call(null,c__20650__auto___28545);
var G__28549 = (0);
seq__28518_28534 = G__28546;
chunk__28519_28535 = G__28547;
count__28520_28536 = G__28548;
i__28521_28537 = G__28549;
continue;
} else {
var f_28550 = cljs.core.first.call(null,seq__28518_28544__$1);
cljs.core.println.call(null,"  ",f_28550);

var G__28551 = cljs.core.next.call(null,seq__28518_28544__$1);
var G__28552 = null;
var G__28553 = (0);
var G__28554 = (0);
seq__28518_28534 = G__28551;
chunk__28519_28535 = G__28552;
count__28520_28536 = G__28553;
i__28521_28537 = G__28554;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_28555 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__19747__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__19747__auto__)){
return or__19747__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_28555);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_28555)))?cljs.core.second.call(null,arglists_28555):arglists_28555));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__28522_28556 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28523_28557 = null;
var count__28524_28558 = (0);
var i__28525_28559 = (0);
while(true){
if((i__28525_28559 < count__28524_28558)){
var vec__28526_28560 = cljs.core._nth.call(null,chunk__28523_28557,i__28525_28559);
var name_28561 = cljs.core.nth.call(null,vec__28526_28560,(0),null);
var map__28527_28562 = cljs.core.nth.call(null,vec__28526_28560,(1),null);
var map__28527_28563__$1 = ((((!((map__28527_28562 == null)))?((((map__28527_28562.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28527_28562.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28527_28562):map__28527_28562);
var doc_28564 = cljs.core.get.call(null,map__28527_28563__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_28565 = cljs.core.get.call(null,map__28527_28563__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_28561);

cljs.core.println.call(null," ",arglists_28565);

if(cljs.core.truth_(doc_28564)){
cljs.core.println.call(null," ",doc_28564);
} else {
}

var G__28566 = seq__28522_28556;
var G__28567 = chunk__28523_28557;
var G__28568 = count__28524_28558;
var G__28569 = (i__28525_28559 + (1));
seq__28522_28556 = G__28566;
chunk__28523_28557 = G__28567;
count__28524_28558 = G__28568;
i__28525_28559 = G__28569;
continue;
} else {
var temp__6144__auto___28570 = cljs.core.seq.call(null,seq__28522_28556);
if(temp__6144__auto___28570){
var seq__28522_28571__$1 = temp__6144__auto___28570;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28522_28571__$1)){
var c__20650__auto___28572 = cljs.core.chunk_first.call(null,seq__28522_28571__$1);
var G__28573 = cljs.core.chunk_rest.call(null,seq__28522_28571__$1);
var G__28574 = c__20650__auto___28572;
var G__28575 = cljs.core.count.call(null,c__20650__auto___28572);
var G__28576 = (0);
seq__28522_28556 = G__28573;
chunk__28523_28557 = G__28574;
count__28524_28558 = G__28575;
i__28525_28559 = G__28576;
continue;
} else {
var vec__28529_28577 = cljs.core.first.call(null,seq__28522_28571__$1);
var name_28578 = cljs.core.nth.call(null,vec__28529_28577,(0),null);
var map__28530_28579 = cljs.core.nth.call(null,vec__28529_28577,(1),null);
var map__28530_28580__$1 = ((((!((map__28530_28579 == null)))?((((map__28530_28579.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28530_28579.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28530_28579):map__28530_28579);
var doc_28581 = cljs.core.get.call(null,map__28530_28580__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_28582 = cljs.core.get.call(null,map__28530_28580__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_28578);

cljs.core.println.call(null," ",arglists_28582);

if(cljs.core.truth_(doc_28581)){
cljs.core.println.call(null," ",doc_28581);
} else {
}

var G__28583 = cljs.core.next.call(null,seq__28522_28571__$1);
var G__28584 = null;
var G__28585 = (0);
var G__28586 = (0);
seq__28522_28556 = G__28583;
chunk__28523_28557 = G__28584;
count__28524_28558 = G__28585;
i__28525_28559 = G__28586;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__6144__auto__ = cljs.spec.fn_specs.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__6144__auto__)){
var specs = temp__6144__auto__;
cljs.core.println.call(null,"Spec");

return cljs.core.run_BANG_.call(null,((function (specs,temp__6144__auto__,map__28516,map__28516__$1,m,n,nm){
return (function (p__28532){
var vec__28533 = p__28532;
var role = cljs.core.nth.call(null,vec__28533,(0),null);
var spec = cljs.core.nth.call(null,vec__28533,(1),null);
if(cljs.core.truth_((function (){var and__19735__auto__ = spec;
if(cljs.core.truth_(and__19735__auto__)){
return !(cljs.core._EQ_.call(null,spec,new cljs.core.Keyword("cljs.spec","unknown","cljs.spec/unknown",-1620309582)));
} else {
return and__19735__auto__;
}
})())){
return cljs.core.println.call(null," ",[cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec));
} else {
return null;
}
});})(specs,temp__6144__auto__,map__28516,map__28516__$1,m,n,nm))
,specs);
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1513106861169