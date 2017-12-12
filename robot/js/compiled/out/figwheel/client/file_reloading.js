// Compiled by ClojureScript 1.9.14 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__19747__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__19747__auto__){
return or__19747__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__19747__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__19747__auto__)){
return or__19747__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__27487_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__27487_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__27492 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__27493 = null;
var count__27494 = (0);
var i__27495 = (0);
while(true){
if((i__27495 < count__27494)){
var n = cljs.core._nth.call(null,chunk__27493,i__27495);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__27496 = seq__27492;
var G__27497 = chunk__27493;
var G__27498 = count__27494;
var G__27499 = (i__27495 + (1));
seq__27492 = G__27496;
chunk__27493 = G__27497;
count__27494 = G__27498;
i__27495 = G__27499;
continue;
} else {
var temp__6144__auto__ = cljs.core.seq.call(null,seq__27492);
if(temp__6144__auto__){
var seq__27492__$1 = temp__6144__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27492__$1)){
var c__20650__auto__ = cljs.core.chunk_first.call(null,seq__27492__$1);
var G__27500 = cljs.core.chunk_rest.call(null,seq__27492__$1);
var G__27501 = c__20650__auto__;
var G__27502 = cljs.core.count.call(null,c__20650__auto__);
var G__27503 = (0);
seq__27492 = G__27500;
chunk__27493 = G__27501;
count__27494 = G__27502;
i__27495 = G__27503;
continue;
} else {
var n = cljs.core.first.call(null,seq__27492__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__27504 = cljs.core.next.call(null,seq__27492__$1);
var G__27505 = null;
var G__27506 = (0);
var G__27507 = (0);
seq__27492 = G__27504;
chunk__27493 = G__27505;
count__27494 = G__27506;
i__27495 = G__27507;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__27546_27553 = cljs.core.seq.call(null,deps);
var chunk__27547_27554 = null;
var count__27548_27555 = (0);
var i__27549_27556 = (0);
while(true){
if((i__27549_27556 < count__27548_27555)){
var dep_27557 = cljs.core._nth.call(null,chunk__27547_27554,i__27549_27556);
topo_sort_helper_STAR_.call(null,dep_27557,(depth + (1)),state);

var G__27558 = seq__27546_27553;
var G__27559 = chunk__27547_27554;
var G__27560 = count__27548_27555;
var G__27561 = (i__27549_27556 + (1));
seq__27546_27553 = G__27558;
chunk__27547_27554 = G__27559;
count__27548_27555 = G__27560;
i__27549_27556 = G__27561;
continue;
} else {
var temp__6144__auto___27562 = cljs.core.seq.call(null,seq__27546_27553);
if(temp__6144__auto___27562){
var seq__27546_27563__$1 = temp__6144__auto___27562;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27546_27563__$1)){
var c__20650__auto___27564 = cljs.core.chunk_first.call(null,seq__27546_27563__$1);
var G__27565 = cljs.core.chunk_rest.call(null,seq__27546_27563__$1);
var G__27566 = c__20650__auto___27564;
var G__27567 = cljs.core.count.call(null,c__20650__auto___27564);
var G__27568 = (0);
seq__27546_27553 = G__27565;
chunk__27547_27554 = G__27566;
count__27548_27555 = G__27567;
i__27549_27556 = G__27568;
continue;
} else {
var dep_27569 = cljs.core.first.call(null,seq__27546_27563__$1);
topo_sort_helper_STAR_.call(null,dep_27569,(depth + (1)),state);

var G__27570 = cljs.core.next.call(null,seq__27546_27563__$1);
var G__27571 = null;
var G__27572 = (0);
var G__27573 = (0);
seq__27546_27553 = G__27570;
chunk__27547_27554 = G__27571;
count__27548_27555 = G__27572;
i__27549_27556 = G__27573;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__27550){
var vec__27552 = p__27550;
var x = cljs.core.nth.call(null,vec__27552,(0),null);
var xs = cljs.core.nthnext.call(null,vec__27552,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__27552,x,xs,get_deps__$1){
return (function (p1__27508_SHARP_){
return clojure.set.difference.call(null,p1__27508_SHARP_,x);
});})(vec__27552,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__27586 = cljs.core.seq.call(null,provides);
var chunk__27587 = null;
var count__27588 = (0);
var i__27589 = (0);
while(true){
if((i__27589 < count__27588)){
var prov = cljs.core._nth.call(null,chunk__27587,i__27589);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__27590_27598 = cljs.core.seq.call(null,requires);
var chunk__27591_27599 = null;
var count__27592_27600 = (0);
var i__27593_27601 = (0);
while(true){
if((i__27593_27601 < count__27592_27600)){
var req_27602 = cljs.core._nth.call(null,chunk__27591_27599,i__27593_27601);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27602,prov);

var G__27603 = seq__27590_27598;
var G__27604 = chunk__27591_27599;
var G__27605 = count__27592_27600;
var G__27606 = (i__27593_27601 + (1));
seq__27590_27598 = G__27603;
chunk__27591_27599 = G__27604;
count__27592_27600 = G__27605;
i__27593_27601 = G__27606;
continue;
} else {
var temp__6144__auto___27607 = cljs.core.seq.call(null,seq__27590_27598);
if(temp__6144__auto___27607){
var seq__27590_27608__$1 = temp__6144__auto___27607;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27590_27608__$1)){
var c__20650__auto___27609 = cljs.core.chunk_first.call(null,seq__27590_27608__$1);
var G__27610 = cljs.core.chunk_rest.call(null,seq__27590_27608__$1);
var G__27611 = c__20650__auto___27609;
var G__27612 = cljs.core.count.call(null,c__20650__auto___27609);
var G__27613 = (0);
seq__27590_27598 = G__27610;
chunk__27591_27599 = G__27611;
count__27592_27600 = G__27612;
i__27593_27601 = G__27613;
continue;
} else {
var req_27614 = cljs.core.first.call(null,seq__27590_27608__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27614,prov);

var G__27615 = cljs.core.next.call(null,seq__27590_27608__$1);
var G__27616 = null;
var G__27617 = (0);
var G__27618 = (0);
seq__27590_27598 = G__27615;
chunk__27591_27599 = G__27616;
count__27592_27600 = G__27617;
i__27593_27601 = G__27618;
continue;
}
} else {
}
}
break;
}

var G__27619 = seq__27586;
var G__27620 = chunk__27587;
var G__27621 = count__27588;
var G__27622 = (i__27589 + (1));
seq__27586 = G__27619;
chunk__27587 = G__27620;
count__27588 = G__27621;
i__27589 = G__27622;
continue;
} else {
var temp__6144__auto__ = cljs.core.seq.call(null,seq__27586);
if(temp__6144__auto__){
var seq__27586__$1 = temp__6144__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27586__$1)){
var c__20650__auto__ = cljs.core.chunk_first.call(null,seq__27586__$1);
var G__27623 = cljs.core.chunk_rest.call(null,seq__27586__$1);
var G__27624 = c__20650__auto__;
var G__27625 = cljs.core.count.call(null,c__20650__auto__);
var G__27626 = (0);
seq__27586 = G__27623;
chunk__27587 = G__27624;
count__27588 = G__27625;
i__27589 = G__27626;
continue;
} else {
var prov = cljs.core.first.call(null,seq__27586__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__27594_27627 = cljs.core.seq.call(null,requires);
var chunk__27595_27628 = null;
var count__27596_27629 = (0);
var i__27597_27630 = (0);
while(true){
if((i__27597_27630 < count__27596_27629)){
var req_27631 = cljs.core._nth.call(null,chunk__27595_27628,i__27597_27630);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27631,prov);

var G__27632 = seq__27594_27627;
var G__27633 = chunk__27595_27628;
var G__27634 = count__27596_27629;
var G__27635 = (i__27597_27630 + (1));
seq__27594_27627 = G__27632;
chunk__27595_27628 = G__27633;
count__27596_27629 = G__27634;
i__27597_27630 = G__27635;
continue;
} else {
var temp__6144__auto___27636__$1 = cljs.core.seq.call(null,seq__27594_27627);
if(temp__6144__auto___27636__$1){
var seq__27594_27637__$1 = temp__6144__auto___27636__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27594_27637__$1)){
var c__20650__auto___27638 = cljs.core.chunk_first.call(null,seq__27594_27637__$1);
var G__27639 = cljs.core.chunk_rest.call(null,seq__27594_27637__$1);
var G__27640 = c__20650__auto___27638;
var G__27641 = cljs.core.count.call(null,c__20650__auto___27638);
var G__27642 = (0);
seq__27594_27627 = G__27639;
chunk__27595_27628 = G__27640;
count__27596_27629 = G__27641;
i__27597_27630 = G__27642;
continue;
} else {
var req_27643 = cljs.core.first.call(null,seq__27594_27637__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27643,prov);

var G__27644 = cljs.core.next.call(null,seq__27594_27637__$1);
var G__27645 = null;
var G__27646 = (0);
var G__27647 = (0);
seq__27594_27627 = G__27644;
chunk__27595_27628 = G__27645;
count__27596_27629 = G__27646;
i__27597_27630 = G__27647;
continue;
}
} else {
}
}
break;
}

var G__27648 = cljs.core.next.call(null,seq__27586__$1);
var G__27649 = null;
var G__27650 = (0);
var G__27651 = (0);
seq__27586 = G__27648;
chunk__27587 = G__27649;
count__27588 = G__27650;
i__27589 = G__27651;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__27656_27660 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__27657_27661 = null;
var count__27658_27662 = (0);
var i__27659_27663 = (0);
while(true){
if((i__27659_27663 < count__27658_27662)){
var ns_27664 = cljs.core._nth.call(null,chunk__27657_27661,i__27659_27663);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_27664);

var G__27665 = seq__27656_27660;
var G__27666 = chunk__27657_27661;
var G__27667 = count__27658_27662;
var G__27668 = (i__27659_27663 + (1));
seq__27656_27660 = G__27665;
chunk__27657_27661 = G__27666;
count__27658_27662 = G__27667;
i__27659_27663 = G__27668;
continue;
} else {
var temp__6144__auto___27669 = cljs.core.seq.call(null,seq__27656_27660);
if(temp__6144__auto___27669){
var seq__27656_27670__$1 = temp__6144__auto___27669;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27656_27670__$1)){
var c__20650__auto___27671 = cljs.core.chunk_first.call(null,seq__27656_27670__$1);
var G__27672 = cljs.core.chunk_rest.call(null,seq__27656_27670__$1);
var G__27673 = c__20650__auto___27671;
var G__27674 = cljs.core.count.call(null,c__20650__auto___27671);
var G__27675 = (0);
seq__27656_27660 = G__27672;
chunk__27657_27661 = G__27673;
count__27658_27662 = G__27674;
i__27659_27663 = G__27675;
continue;
} else {
var ns_27676 = cljs.core.first.call(null,seq__27656_27670__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_27676);

var G__27677 = cljs.core.next.call(null,seq__27656_27670__$1);
var G__27678 = null;
var G__27679 = (0);
var G__27680 = (0);
seq__27656_27660 = G__27677;
chunk__27657_27661 = G__27678;
count__27658_27662 = G__27679;
i__27659_27663 = G__27680;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__19747__auto__ = goog.require__;
if(cljs.core.truth_(or__19747__auto__)){
return or__19747__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__27681__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__27681 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27682__i = 0, G__27682__a = new Array(arguments.length -  0);
while (G__27682__i < G__27682__a.length) {G__27682__a[G__27682__i] = arguments[G__27682__i + 0]; ++G__27682__i;}
  args = new cljs.core.IndexedSeq(G__27682__a,0);
} 
return G__27681__delegate.call(this,args);};
G__27681.cljs$lang$maxFixedArity = 0;
G__27681.cljs$lang$applyTo = (function (arglist__27683){
var args = cljs.core.seq(arglist__27683);
return G__27681__delegate(args);
});
G__27681.cljs$core$IFn$_invoke$arity$variadic = G__27681__delegate;
return G__27681;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__27685 = cljs.core._EQ_;
var expr__27686 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__27685.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__27686))){
var path_parts = ((function (pred__27685,expr__27686){
return (function (p1__27684_SHARP_){
return clojure.string.split.call(null,p1__27684_SHARP_,/[\/\\]/);
});})(pred__27685,expr__27686))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__27685,expr__27686){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e27688){if((e27688 instanceof Error)){
var e = e27688;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e27688;

}
}})());
});
;})(path_parts,sep,root,pred__27685,expr__27686))
} else {
if(cljs.core.truth_(pred__27685.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__27686))){
return ((function (pred__27685,expr__27686){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__27685,expr__27686){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__27685,expr__27686))
);

return deferred.addErrback(((function (deferred,pred__27685,expr__27686){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__27685,expr__27686))
);
});
;})(pred__27685,expr__27686))
} else {
return ((function (pred__27685,expr__27686){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__27685,expr__27686))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__27689,callback){
var map__27692 = p__27689;
var map__27692__$1 = ((((!((map__27692 == null)))?((((map__27692.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27692.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27692):map__27692);
var file_msg = map__27692__$1;
var request_url = cljs.core.get.call(null,map__27692__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__27692,map__27692__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__27692,map__27692__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__24640__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24640__auto__){
return (function (){
var f__24641__auto__ = (function (){var switch__24526__auto__ = ((function (c__24640__auto__){
return (function (state_27716){
var state_val_27717 = (state_27716[(1)]);
if((state_val_27717 === (7))){
var inst_27712 = (state_27716[(2)]);
var state_27716__$1 = state_27716;
var statearr_27718_27738 = state_27716__$1;
(statearr_27718_27738[(2)] = inst_27712);

(statearr_27718_27738[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27717 === (1))){
var state_27716__$1 = state_27716;
var statearr_27719_27739 = state_27716__$1;
(statearr_27719_27739[(2)] = null);

(statearr_27719_27739[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27717 === (4))){
var inst_27696 = (state_27716[(7)]);
var inst_27696__$1 = (state_27716[(2)]);
var state_27716__$1 = (function (){var statearr_27720 = state_27716;
(statearr_27720[(7)] = inst_27696__$1);

return statearr_27720;
})();
if(cljs.core.truth_(inst_27696__$1)){
var statearr_27721_27740 = state_27716__$1;
(statearr_27721_27740[(1)] = (5));

} else {
var statearr_27722_27741 = state_27716__$1;
(statearr_27722_27741[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27717 === (6))){
var state_27716__$1 = state_27716;
var statearr_27723_27742 = state_27716__$1;
(statearr_27723_27742[(2)] = null);

(statearr_27723_27742[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27717 === (3))){
var inst_27714 = (state_27716[(2)]);
var state_27716__$1 = state_27716;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27716__$1,inst_27714);
} else {
if((state_val_27717 === (2))){
var state_27716__$1 = state_27716;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27716__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_27717 === (11))){
var inst_27708 = (state_27716[(2)]);
var state_27716__$1 = (function (){var statearr_27724 = state_27716;
(statearr_27724[(8)] = inst_27708);

return statearr_27724;
})();
var statearr_27725_27743 = state_27716__$1;
(statearr_27725_27743[(2)] = null);

(statearr_27725_27743[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27717 === (9))){
var inst_27702 = (state_27716[(9)]);
var inst_27700 = (state_27716[(10)]);
var inst_27704 = inst_27702.call(null,inst_27700);
var state_27716__$1 = state_27716;
var statearr_27726_27744 = state_27716__$1;
(statearr_27726_27744[(2)] = inst_27704);

(statearr_27726_27744[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27717 === (5))){
var inst_27696 = (state_27716[(7)]);
var inst_27698 = figwheel.client.file_reloading.blocking_load.call(null,inst_27696);
var state_27716__$1 = state_27716;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27716__$1,(8),inst_27698);
} else {
if((state_val_27717 === (10))){
var inst_27700 = (state_27716[(10)]);
var inst_27706 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_27700);
var state_27716__$1 = state_27716;
var statearr_27727_27745 = state_27716__$1;
(statearr_27727_27745[(2)] = inst_27706);

(statearr_27727_27745[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27717 === (8))){
var inst_27702 = (state_27716[(9)]);
var inst_27696 = (state_27716[(7)]);
var inst_27700 = (state_27716[(2)]);
var inst_27701 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_27702__$1 = cljs.core.get.call(null,inst_27701,inst_27696);
var state_27716__$1 = (function (){var statearr_27728 = state_27716;
(statearr_27728[(9)] = inst_27702__$1);

(statearr_27728[(10)] = inst_27700);

return statearr_27728;
})();
if(cljs.core.truth_(inst_27702__$1)){
var statearr_27729_27746 = state_27716__$1;
(statearr_27729_27746[(1)] = (9));

} else {
var statearr_27730_27747 = state_27716__$1;
(statearr_27730_27747[(1)] = (10));

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
});})(c__24640__auto__))
;
return ((function (switch__24526__auto__,c__24640__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__24527__auto__ = null;
var figwheel$client$file_reloading$state_machine__24527__auto____0 = (function (){
var statearr_27734 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27734[(0)] = figwheel$client$file_reloading$state_machine__24527__auto__);

(statearr_27734[(1)] = (1));

return statearr_27734;
});
var figwheel$client$file_reloading$state_machine__24527__auto____1 = (function (state_27716){
while(true){
var ret_value__24528__auto__ = (function (){try{while(true){
var result__24529__auto__ = switch__24526__auto__.call(null,state_27716);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24529__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24529__auto__;
}
break;
}
}catch (e27735){if((e27735 instanceof Object)){
var ex__24530__auto__ = e27735;
var statearr_27736_27748 = state_27716;
(statearr_27736_27748[(5)] = ex__24530__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27716);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27735;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27749 = state_27716;
state_27716 = G__27749;
continue;
} else {
return ret_value__24528__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__24527__auto__ = function(state_27716){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__24527__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__24527__auto____1.call(this,state_27716);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__24527__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__24527__auto____0;
figwheel$client$file_reloading$state_machine__24527__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__24527__auto____1;
return figwheel$client$file_reloading$state_machine__24527__auto__;
})()
;})(switch__24526__auto__,c__24640__auto__))
})();
var state__24642__auto__ = (function (){var statearr_27737 = f__24641__auto__.call(null);
(statearr_27737[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24640__auto__);

return statearr_27737;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24642__auto__);
});})(c__24640__auto__))
);

return c__24640__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__27750,callback){
var map__27753 = p__27750;
var map__27753__$1 = ((((!((map__27753 == null)))?((((map__27753.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27753.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27753):map__27753);
var file_msg = map__27753__$1;
var namespace = cljs.core.get.call(null,map__27753__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__27753,map__27753__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__27753,map__27753__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__27755){
var map__27758 = p__27755;
var map__27758__$1 = ((((!((map__27758 == null)))?((((map__27758.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27758.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27758):map__27758);
var file_msg = map__27758__$1;
var namespace = cljs.core.get.call(null,map__27758__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__19735__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__19735__auto__){
var or__19747__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__19747__auto__)){
return or__19747__auto__;
} else {
var or__19747__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__19747__auto____$1)){
return or__19747__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__19735__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__27760,callback){
var map__27763 = p__27760;
var map__27763__$1 = ((((!((map__27763 == null)))?((((map__27763.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27763.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27763):map__27763);
var file_msg = map__27763__$1;
var request_url = cljs.core.get.call(null,map__27763__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__27763__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__24640__auto___27851 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24640__auto___27851,out){
return (function (){
var f__24641__auto__ = (function (){var switch__24526__auto__ = ((function (c__24640__auto___27851,out){
return (function (state_27833){
var state_val_27834 = (state_27833[(1)]);
if((state_val_27834 === (1))){
var inst_27811 = cljs.core.nth.call(null,files,(0),null);
var inst_27812 = cljs.core.nthnext.call(null,files,(1));
var inst_27813 = files;
var state_27833__$1 = (function (){var statearr_27835 = state_27833;
(statearr_27835[(7)] = inst_27811);

(statearr_27835[(8)] = inst_27813);

(statearr_27835[(9)] = inst_27812);

return statearr_27835;
})();
var statearr_27836_27852 = state_27833__$1;
(statearr_27836_27852[(2)] = null);

(statearr_27836_27852[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27834 === (2))){
var inst_27813 = (state_27833[(8)]);
var inst_27816 = (state_27833[(10)]);
var inst_27816__$1 = cljs.core.nth.call(null,inst_27813,(0),null);
var inst_27817 = cljs.core.nthnext.call(null,inst_27813,(1));
var inst_27818 = (inst_27816__$1 == null);
var inst_27819 = cljs.core.not.call(null,inst_27818);
var state_27833__$1 = (function (){var statearr_27837 = state_27833;
(statearr_27837[(11)] = inst_27817);

(statearr_27837[(10)] = inst_27816__$1);

return statearr_27837;
})();
if(inst_27819){
var statearr_27838_27853 = state_27833__$1;
(statearr_27838_27853[(1)] = (4));

} else {
var statearr_27839_27854 = state_27833__$1;
(statearr_27839_27854[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27834 === (3))){
var inst_27831 = (state_27833[(2)]);
var state_27833__$1 = state_27833;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27833__$1,inst_27831);
} else {
if((state_val_27834 === (4))){
var inst_27816 = (state_27833[(10)]);
var inst_27821 = figwheel.client.file_reloading.reload_js_file.call(null,inst_27816);
var state_27833__$1 = state_27833;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27833__$1,(7),inst_27821);
} else {
if((state_val_27834 === (5))){
var inst_27827 = cljs.core.async.close_BANG_.call(null,out);
var state_27833__$1 = state_27833;
var statearr_27840_27855 = state_27833__$1;
(statearr_27840_27855[(2)] = inst_27827);

(statearr_27840_27855[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27834 === (6))){
var inst_27829 = (state_27833[(2)]);
var state_27833__$1 = state_27833;
var statearr_27841_27856 = state_27833__$1;
(statearr_27841_27856[(2)] = inst_27829);

(statearr_27841_27856[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27834 === (7))){
var inst_27817 = (state_27833[(11)]);
var inst_27823 = (state_27833[(2)]);
var inst_27824 = cljs.core.async.put_BANG_.call(null,out,inst_27823);
var inst_27813 = inst_27817;
var state_27833__$1 = (function (){var statearr_27842 = state_27833;
(statearr_27842[(8)] = inst_27813);

(statearr_27842[(12)] = inst_27824);

return statearr_27842;
})();
var statearr_27843_27857 = state_27833__$1;
(statearr_27843_27857[(2)] = null);

(statearr_27843_27857[(1)] = (2));


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
});})(c__24640__auto___27851,out))
;
return ((function (switch__24526__auto__,c__24640__auto___27851,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24527__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24527__auto____0 = (function (){
var statearr_27847 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27847[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24527__auto__);

(statearr_27847[(1)] = (1));

return statearr_27847;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24527__auto____1 = (function (state_27833){
while(true){
var ret_value__24528__auto__ = (function (){try{while(true){
var result__24529__auto__ = switch__24526__auto__.call(null,state_27833);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24529__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24529__auto__;
}
break;
}
}catch (e27848){if((e27848 instanceof Object)){
var ex__24530__auto__ = e27848;
var statearr_27849_27858 = state_27833;
(statearr_27849_27858[(5)] = ex__24530__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27833);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27848;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27859 = state_27833;
state_27833 = G__27859;
continue;
} else {
return ret_value__24528__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24527__auto__ = function(state_27833){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24527__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24527__auto____1.call(this,state_27833);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24527__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24527__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24527__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24527__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24527__auto__;
})()
;})(switch__24526__auto__,c__24640__auto___27851,out))
})();
var state__24642__auto__ = (function (){var statearr_27850 = f__24641__auto__.call(null);
(statearr_27850[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24640__auto___27851);

return statearr_27850;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24642__auto__);
});})(c__24640__auto___27851,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__27860,opts){
var map__27864 = p__27860;
var map__27864__$1 = ((((!((map__27864 == null)))?((((map__27864.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27864.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27864):map__27864);
var eval_body__$1 = cljs.core.get.call(null,map__27864__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__27864__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__19735__auto__ = eval_body__$1;
if(cljs.core.truth_(and__19735__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__19735__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e27866){var e = e27866;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__6142__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__27867_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27867_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__6142__auto__)){
var file_msg = temp__6142__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__27872){
var vec__27873 = p__27872;
var k = cljs.core.nth.call(null,vec__27873,(0),null);
var v = cljs.core.nth.call(null,vec__27873,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__27874){
var vec__27875 = p__27874;
var k = cljs.core.nth.call(null,vec__27875,(0),null);
var v = cljs.core.nth.call(null,vec__27875,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__27879,p__27880){
var map__28127 = p__27879;
var map__28127__$1 = ((((!((map__28127 == null)))?((((map__28127.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28127.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28127):map__28127);
var opts = map__28127__$1;
var before_jsload = cljs.core.get.call(null,map__28127__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__28127__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__28127__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__28128 = p__27880;
var map__28128__$1 = ((((!((map__28128 == null)))?((((map__28128.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28128.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28128):map__28128);
var msg = map__28128__$1;
var files = cljs.core.get.call(null,map__28128__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__28128__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__28128__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__24640__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24640__auto__,map__28127,map__28127__$1,opts,before_jsload,on_jsload,reload_dependents,map__28128,map__28128__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__24641__auto__ = (function (){var switch__24526__auto__ = ((function (c__24640__auto__,map__28127,map__28127__$1,opts,before_jsload,on_jsload,reload_dependents,map__28128,map__28128__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_28281){
var state_val_28282 = (state_28281[(1)]);
if((state_val_28282 === (7))){
var inst_28143 = (state_28281[(7)]);
var inst_28144 = (state_28281[(8)]);
var inst_28142 = (state_28281[(9)]);
var inst_28145 = (state_28281[(10)]);
var inst_28150 = cljs.core._nth.call(null,inst_28143,inst_28145);
var inst_28151 = figwheel.client.file_reloading.eval_body.call(null,inst_28150,opts);
var inst_28152 = (inst_28145 + (1));
var tmp28283 = inst_28143;
var tmp28284 = inst_28144;
var tmp28285 = inst_28142;
var inst_28142__$1 = tmp28285;
var inst_28143__$1 = tmp28283;
var inst_28144__$1 = tmp28284;
var inst_28145__$1 = inst_28152;
var state_28281__$1 = (function (){var statearr_28286 = state_28281;
(statearr_28286[(7)] = inst_28143__$1);

(statearr_28286[(11)] = inst_28151);

(statearr_28286[(8)] = inst_28144__$1);

(statearr_28286[(9)] = inst_28142__$1);

(statearr_28286[(10)] = inst_28145__$1);

return statearr_28286;
})();
var statearr_28287_28373 = state_28281__$1;
(statearr_28287_28373[(2)] = null);

(statearr_28287_28373[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28282 === (20))){
var inst_28185 = (state_28281[(12)]);
var inst_28193 = figwheel.client.file_reloading.sort_files.call(null,inst_28185);
var state_28281__$1 = state_28281;
var statearr_28288_28374 = state_28281__$1;
(statearr_28288_28374[(2)] = inst_28193);

(statearr_28288_28374[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28282 === (27))){
var state_28281__$1 = state_28281;
var statearr_28289_28375 = state_28281__$1;
(statearr_28289_28375[(2)] = null);

(statearr_28289_28375[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28282 === (1))){
var inst_28134 = (state_28281[(13)]);
var inst_28131 = before_jsload.call(null,files);
var inst_28132 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_28133 = (function (){return ((function (inst_28134,inst_28131,inst_28132,state_val_28282,c__24640__auto__,map__28127,map__28127__$1,opts,before_jsload,on_jsload,reload_dependents,map__28128,map__28128__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27876_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27876_SHARP_);
});
;})(inst_28134,inst_28131,inst_28132,state_val_28282,c__24640__auto__,map__28127,map__28127__$1,opts,before_jsload,on_jsload,reload_dependents,map__28128,map__28128__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28134__$1 = cljs.core.filter.call(null,inst_28133,files);
var inst_28135 = cljs.core.not_empty.call(null,inst_28134__$1);
var state_28281__$1 = (function (){var statearr_28290 = state_28281;
(statearr_28290[(13)] = inst_28134__$1);

(statearr_28290[(14)] = inst_28132);

(statearr_28290[(15)] = inst_28131);

return statearr_28290;
})();
if(cljs.core.truth_(inst_28135)){
var statearr_28291_28376 = state_28281__$1;
(statearr_28291_28376[(1)] = (2));

} else {
var statearr_28292_28377 = state_28281__$1;
(statearr_28292_28377[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28282 === (24))){
var state_28281__$1 = state_28281;
var statearr_28293_28378 = state_28281__$1;
(statearr_28293_28378[(2)] = null);

(statearr_28293_28378[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28282 === (39))){
var inst_28235 = (state_28281[(16)]);
var state_28281__$1 = state_28281;
var statearr_28294_28379 = state_28281__$1;
(statearr_28294_28379[(2)] = inst_28235);

(statearr_28294_28379[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28282 === (46))){
var inst_28276 = (state_28281[(2)]);
var state_28281__$1 = state_28281;
var statearr_28295_28380 = state_28281__$1;
(statearr_28295_28380[(2)] = inst_28276);

(statearr_28295_28380[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28282 === (4))){
var inst_28179 = (state_28281[(2)]);
var inst_28180 = cljs.core.List.EMPTY;
var inst_28181 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_28180);
var inst_28182 = (function (){return ((function (inst_28179,inst_28180,inst_28181,state_val_28282,c__24640__auto__,map__28127,map__28127__$1,opts,before_jsload,on_jsload,reload_dependents,map__28128,map__28128__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27877_SHARP_){
var and__19735__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27877_SHARP_);
if(cljs.core.truth_(and__19735__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27877_SHARP_));
} else {
return and__19735__auto__;
}
});
;})(inst_28179,inst_28180,inst_28181,state_val_28282,c__24640__auto__,map__28127,map__28127__$1,opts,before_jsload,on_jsload,reload_dependents,map__28128,map__28128__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28183 = cljs.core.filter.call(null,inst_28182,files);
var inst_28184 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_28185 = cljs.core.concat.call(null,inst_28183,inst_28184);
var state_28281__$1 = (function (){var statearr_28296 = state_28281;
(statearr_28296[(12)] = inst_28185);

(statearr_28296[(17)] = inst_28181);

(statearr_28296[(18)] = inst_28179);

return statearr_28296;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_28297_28381 = state_28281__$1;
(statearr_28297_28381[(1)] = (16));

} else {
var statearr_28298_28382 = state_28281__$1;
(statearr_28298_28382[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28282 === (15))){
var inst_28169 = (state_28281[(2)]);
var state_28281__$1 = state_28281;
var statearr_28299_28383 = state_28281__$1;
(statearr_28299_28383[(2)] = inst_28169);

(statearr_28299_28383[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28282 === (21))){
var inst_28195 = (state_28281[(19)]);
var inst_28195__$1 = (state_28281[(2)]);
var inst_28196 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_28195__$1);
var state_28281__$1 = (function (){var statearr_28300 = state_28281;
(statearr_28300[(19)] = inst_28195__$1);

return statearr_28300;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28281__$1,(22),inst_28196);
} else {
if((state_val_28282 === (31))){
var inst_28279 = (state_28281[(2)]);
var state_28281__$1 = state_28281;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28281__$1,inst_28279);
} else {
if((state_val_28282 === (32))){
var inst_28235 = (state_28281[(16)]);
var inst_28240 = inst_28235.cljs$lang$protocol_mask$partition0$;
var inst_28241 = (inst_28240 & (64));
var inst_28242 = inst_28235.cljs$core$ISeq$;
var inst_28243 = (inst_28241) || (inst_28242);
var state_28281__$1 = state_28281;
if(cljs.core.truth_(inst_28243)){
var statearr_28301_28384 = state_28281__$1;
(statearr_28301_28384[(1)] = (35));

} else {
var statearr_28302_28385 = state_28281__$1;
(statearr_28302_28385[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28282 === (40))){
var inst_28256 = (state_28281[(20)]);
var inst_28255 = (state_28281[(2)]);
var inst_28256__$1 = cljs.core.get.call(null,inst_28255,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_28257 = cljs.core.get.call(null,inst_28255,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_28258 = cljs.core.not_empty.call(null,inst_28256__$1);
var state_28281__$1 = (function (){var statearr_28303 = state_28281;
(statearr_28303[(20)] = inst_28256__$1);

(statearr_28303[(21)] = inst_28257);

return statearr_28303;
})();
if(cljs.core.truth_(inst_28258)){
var statearr_28304_28386 = state_28281__$1;
(statearr_28304_28386[(1)] = (41));

} else {
var statearr_28305_28387 = state_28281__$1;
(statearr_28305_28387[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28282 === (33))){
var state_28281__$1 = state_28281;
var statearr_28306_28388 = state_28281__$1;
(statearr_28306_28388[(2)] = false);

(statearr_28306_28388[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28282 === (13))){
var inst_28155 = (state_28281[(22)]);
var inst_28159 = cljs.core.chunk_first.call(null,inst_28155);
var inst_28160 = cljs.core.chunk_rest.call(null,inst_28155);
var inst_28161 = cljs.core.count.call(null,inst_28159);
var inst_28142 = inst_28160;
var inst_28143 = inst_28159;
var inst_28144 = inst_28161;
var inst_28145 = (0);
var state_28281__$1 = (function (){var statearr_28307 = state_28281;
(statearr_28307[(7)] = inst_28143);

(statearr_28307[(8)] = inst_28144);

(statearr_28307[(9)] = inst_28142);

(statearr_28307[(10)] = inst_28145);

return statearr_28307;
})();
var statearr_28308_28389 = state_28281__$1;
(statearr_28308_28389[(2)] = null);

(statearr_28308_28389[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28282 === (22))){
var inst_28199 = (state_28281[(23)]);
var inst_28195 = (state_28281[(19)]);
var inst_28203 = (state_28281[(24)]);
var inst_28198 = (state_28281[(25)]);
var inst_28198__$1 = (state_28281[(2)]);
var inst_28199__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_28198__$1);
var inst_28200 = (function (){var all_files = inst_28195;
var res_SINGLEQUOTE_ = inst_28198__$1;
var res = inst_28199__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_28199,inst_28195,inst_28203,inst_28198,inst_28198__$1,inst_28199__$1,state_val_28282,c__24640__auto__,map__28127,map__28127__$1,opts,before_jsload,on_jsload,reload_dependents,map__28128,map__28128__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27878_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__27878_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_28199,inst_28195,inst_28203,inst_28198,inst_28198__$1,inst_28199__$1,state_val_28282,c__24640__auto__,map__28127,map__28127__$1,opts,before_jsload,on_jsload,reload_dependents,map__28128,map__28128__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28201 = cljs.core.filter.call(null,inst_28200,inst_28198__$1);
var inst_28202 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_28203__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_28202);
var inst_28204 = cljs.core.not_empty.call(null,inst_28203__$1);
var state_28281__$1 = (function (){var statearr_28309 = state_28281;
(statearr_28309[(23)] = inst_28199__$1);

(statearr_28309[(24)] = inst_28203__$1);

(statearr_28309[(26)] = inst_28201);

(statearr_28309[(25)] = inst_28198__$1);

return statearr_28309;
})();
if(cljs.core.truth_(inst_28204)){
var statearr_28310_28390 = state_28281__$1;
(statearr_28310_28390[(1)] = (23));

} else {
var statearr_28311_28391 = state_28281__$1;
(statearr_28311_28391[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28282 === (36))){
var state_28281__$1 = state_28281;
var statearr_28312_28392 = state_28281__$1;
(statearr_28312_28392[(2)] = false);

(statearr_28312_28392[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28282 === (41))){
var inst_28256 = (state_28281[(20)]);
var inst_28260 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_28261 = cljs.core.map.call(null,inst_28260,inst_28256);
var inst_28262 = cljs.core.pr_str.call(null,inst_28261);
var inst_28263 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_28262)].join('');
var inst_28264 = figwheel.client.utils.log.call(null,inst_28263);
var state_28281__$1 = state_28281;
var statearr_28313_28393 = state_28281__$1;
(statearr_28313_28393[(2)] = inst_28264);

(statearr_28313_28393[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28282 === (43))){
var inst_28257 = (state_28281[(21)]);
var inst_28267 = (state_28281[(2)]);
var inst_28268 = cljs.core.not_empty.call(null,inst_28257);
var state_28281__$1 = (function (){var statearr_28314 = state_28281;
(statearr_28314[(27)] = inst_28267);

return statearr_28314;
})();
if(cljs.core.truth_(inst_28268)){
var statearr_28315_28394 = state_28281__$1;
(statearr_28315_28394[(1)] = (44));

} else {
var statearr_28316_28395 = state_28281__$1;
(statearr_28316_28395[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28282 === (29))){
var inst_28199 = (state_28281[(23)]);
var inst_28195 = (state_28281[(19)]);
var inst_28235 = (state_28281[(16)]);
var inst_28203 = (state_28281[(24)]);
var inst_28201 = (state_28281[(26)]);
var inst_28198 = (state_28281[(25)]);
var inst_28231 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_28234 = (function (){var all_files = inst_28195;
var res_SINGLEQUOTE_ = inst_28198;
var res = inst_28199;
var files_not_loaded = inst_28201;
var dependencies_that_loaded = inst_28203;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28199,inst_28195,inst_28235,inst_28203,inst_28201,inst_28198,inst_28231,state_val_28282,c__24640__auto__,map__28127,map__28127__$1,opts,before_jsload,on_jsload,reload_dependents,map__28128,map__28128__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28233){
var map__28317 = p__28233;
var map__28317__$1 = ((((!((map__28317 == null)))?((((map__28317.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28317.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28317):map__28317);
var namespace = cljs.core.get.call(null,map__28317__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28199,inst_28195,inst_28235,inst_28203,inst_28201,inst_28198,inst_28231,state_val_28282,c__24640__auto__,map__28127,map__28127__$1,opts,before_jsload,on_jsload,reload_dependents,map__28128,map__28128__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28235__$1 = cljs.core.group_by.call(null,inst_28234,inst_28201);
var inst_28237 = (inst_28235__$1 == null);
var inst_28238 = cljs.core.not.call(null,inst_28237);
var state_28281__$1 = (function (){var statearr_28319 = state_28281;
(statearr_28319[(16)] = inst_28235__$1);

(statearr_28319[(28)] = inst_28231);

return statearr_28319;
})();
if(inst_28238){
var statearr_28320_28396 = state_28281__$1;
(statearr_28320_28396[(1)] = (32));

} else {
var statearr_28321_28397 = state_28281__$1;
(statearr_28321_28397[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28282 === (44))){
var inst_28257 = (state_28281[(21)]);
var inst_28270 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_28257);
var inst_28271 = cljs.core.pr_str.call(null,inst_28270);
var inst_28272 = [cljs.core.str("not required: "),cljs.core.str(inst_28271)].join('');
var inst_28273 = figwheel.client.utils.log.call(null,inst_28272);
var state_28281__$1 = state_28281;
var statearr_28322_28398 = state_28281__$1;
(statearr_28322_28398[(2)] = inst_28273);

(statearr_28322_28398[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28282 === (6))){
var inst_28176 = (state_28281[(2)]);
var state_28281__$1 = state_28281;
var statearr_28323_28399 = state_28281__$1;
(statearr_28323_28399[(2)] = inst_28176);

(statearr_28323_28399[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28282 === (28))){
var inst_28201 = (state_28281[(26)]);
var inst_28228 = (state_28281[(2)]);
var inst_28229 = cljs.core.not_empty.call(null,inst_28201);
var state_28281__$1 = (function (){var statearr_28324 = state_28281;
(statearr_28324[(29)] = inst_28228);

return statearr_28324;
})();
if(cljs.core.truth_(inst_28229)){
var statearr_28325_28400 = state_28281__$1;
(statearr_28325_28400[(1)] = (29));

} else {
var statearr_28326_28401 = state_28281__$1;
(statearr_28326_28401[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28282 === (25))){
var inst_28199 = (state_28281[(23)]);
var inst_28215 = (state_28281[(2)]);
var inst_28216 = cljs.core.not_empty.call(null,inst_28199);
var state_28281__$1 = (function (){var statearr_28327 = state_28281;
(statearr_28327[(30)] = inst_28215);

return statearr_28327;
})();
if(cljs.core.truth_(inst_28216)){
var statearr_28328_28402 = state_28281__$1;
(statearr_28328_28402[(1)] = (26));

} else {
var statearr_28329_28403 = state_28281__$1;
(statearr_28329_28403[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28282 === (34))){
var inst_28250 = (state_28281[(2)]);
var state_28281__$1 = state_28281;
if(cljs.core.truth_(inst_28250)){
var statearr_28330_28404 = state_28281__$1;
(statearr_28330_28404[(1)] = (38));

} else {
var statearr_28331_28405 = state_28281__$1;
(statearr_28331_28405[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28282 === (17))){
var state_28281__$1 = state_28281;
var statearr_28332_28406 = state_28281__$1;
(statearr_28332_28406[(2)] = recompile_dependents);

(statearr_28332_28406[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28282 === (3))){
var state_28281__$1 = state_28281;
var statearr_28333_28407 = state_28281__$1;
(statearr_28333_28407[(2)] = null);

(statearr_28333_28407[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28282 === (12))){
var inst_28172 = (state_28281[(2)]);
var state_28281__$1 = state_28281;
var statearr_28334_28408 = state_28281__$1;
(statearr_28334_28408[(2)] = inst_28172);

(statearr_28334_28408[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28282 === (2))){
var inst_28134 = (state_28281[(13)]);
var inst_28141 = cljs.core.seq.call(null,inst_28134);
var inst_28142 = inst_28141;
var inst_28143 = null;
var inst_28144 = (0);
var inst_28145 = (0);
var state_28281__$1 = (function (){var statearr_28335 = state_28281;
(statearr_28335[(7)] = inst_28143);

(statearr_28335[(8)] = inst_28144);

(statearr_28335[(9)] = inst_28142);

(statearr_28335[(10)] = inst_28145);

return statearr_28335;
})();
var statearr_28336_28409 = state_28281__$1;
(statearr_28336_28409[(2)] = null);

(statearr_28336_28409[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28282 === (23))){
var inst_28199 = (state_28281[(23)]);
var inst_28195 = (state_28281[(19)]);
var inst_28203 = (state_28281[(24)]);
var inst_28201 = (state_28281[(26)]);
var inst_28198 = (state_28281[(25)]);
var inst_28206 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_28208 = (function (){var all_files = inst_28195;
var res_SINGLEQUOTE_ = inst_28198;
var res = inst_28199;
var files_not_loaded = inst_28201;
var dependencies_that_loaded = inst_28203;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28199,inst_28195,inst_28203,inst_28201,inst_28198,inst_28206,state_val_28282,c__24640__auto__,map__28127,map__28127__$1,opts,before_jsload,on_jsload,reload_dependents,map__28128,map__28128__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28207){
var map__28337 = p__28207;
var map__28337__$1 = ((((!((map__28337 == null)))?((((map__28337.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28337.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28337):map__28337);
var request_url = cljs.core.get.call(null,map__28337__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28199,inst_28195,inst_28203,inst_28201,inst_28198,inst_28206,state_val_28282,c__24640__auto__,map__28127,map__28127__$1,opts,before_jsload,on_jsload,reload_dependents,map__28128,map__28128__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28209 = cljs.core.reverse.call(null,inst_28203);
var inst_28210 = cljs.core.map.call(null,inst_28208,inst_28209);
var inst_28211 = cljs.core.pr_str.call(null,inst_28210);
var inst_28212 = figwheel.client.utils.log.call(null,inst_28211);
var state_28281__$1 = (function (){var statearr_28339 = state_28281;
(statearr_28339[(31)] = inst_28206);

return statearr_28339;
})();
var statearr_28340_28410 = state_28281__$1;
(statearr_28340_28410[(2)] = inst_28212);

(statearr_28340_28410[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28282 === (35))){
var state_28281__$1 = state_28281;
var statearr_28341_28411 = state_28281__$1;
(statearr_28341_28411[(2)] = true);

(statearr_28341_28411[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28282 === (19))){
var inst_28185 = (state_28281[(12)]);
var inst_28191 = figwheel.client.file_reloading.expand_files.call(null,inst_28185);
var state_28281__$1 = state_28281;
var statearr_28342_28412 = state_28281__$1;
(statearr_28342_28412[(2)] = inst_28191);

(statearr_28342_28412[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28282 === (11))){
var state_28281__$1 = state_28281;
var statearr_28343_28413 = state_28281__$1;
(statearr_28343_28413[(2)] = null);

(statearr_28343_28413[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28282 === (9))){
var inst_28174 = (state_28281[(2)]);
var state_28281__$1 = state_28281;
var statearr_28344_28414 = state_28281__$1;
(statearr_28344_28414[(2)] = inst_28174);

(statearr_28344_28414[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28282 === (5))){
var inst_28144 = (state_28281[(8)]);
var inst_28145 = (state_28281[(10)]);
var inst_28147 = (inst_28145 < inst_28144);
var inst_28148 = inst_28147;
var state_28281__$1 = state_28281;
if(cljs.core.truth_(inst_28148)){
var statearr_28345_28415 = state_28281__$1;
(statearr_28345_28415[(1)] = (7));

} else {
var statearr_28346_28416 = state_28281__$1;
(statearr_28346_28416[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28282 === (14))){
var inst_28155 = (state_28281[(22)]);
var inst_28164 = cljs.core.first.call(null,inst_28155);
var inst_28165 = figwheel.client.file_reloading.eval_body.call(null,inst_28164,opts);
var inst_28166 = cljs.core.next.call(null,inst_28155);
var inst_28142 = inst_28166;
var inst_28143 = null;
var inst_28144 = (0);
var inst_28145 = (0);
var state_28281__$1 = (function (){var statearr_28347 = state_28281;
(statearr_28347[(7)] = inst_28143);

(statearr_28347[(32)] = inst_28165);

(statearr_28347[(8)] = inst_28144);

(statearr_28347[(9)] = inst_28142);

(statearr_28347[(10)] = inst_28145);

return statearr_28347;
})();
var statearr_28348_28417 = state_28281__$1;
(statearr_28348_28417[(2)] = null);

(statearr_28348_28417[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28282 === (45))){
var state_28281__$1 = state_28281;
var statearr_28349_28418 = state_28281__$1;
(statearr_28349_28418[(2)] = null);

(statearr_28349_28418[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28282 === (26))){
var inst_28199 = (state_28281[(23)]);
var inst_28195 = (state_28281[(19)]);
var inst_28203 = (state_28281[(24)]);
var inst_28201 = (state_28281[(26)]);
var inst_28198 = (state_28281[(25)]);
var inst_28218 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_28220 = (function (){var all_files = inst_28195;
var res_SINGLEQUOTE_ = inst_28198;
var res = inst_28199;
var files_not_loaded = inst_28201;
var dependencies_that_loaded = inst_28203;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28199,inst_28195,inst_28203,inst_28201,inst_28198,inst_28218,state_val_28282,c__24640__auto__,map__28127,map__28127__$1,opts,before_jsload,on_jsload,reload_dependents,map__28128,map__28128__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28219){
var map__28350 = p__28219;
var map__28350__$1 = ((((!((map__28350 == null)))?((((map__28350.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28350.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28350):map__28350);
var namespace = cljs.core.get.call(null,map__28350__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__28350__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28199,inst_28195,inst_28203,inst_28201,inst_28198,inst_28218,state_val_28282,c__24640__auto__,map__28127,map__28127__$1,opts,before_jsload,on_jsload,reload_dependents,map__28128,map__28128__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28221 = cljs.core.map.call(null,inst_28220,inst_28199);
var inst_28222 = cljs.core.pr_str.call(null,inst_28221);
var inst_28223 = figwheel.client.utils.log.call(null,inst_28222);
var inst_28224 = (function (){var all_files = inst_28195;
var res_SINGLEQUOTE_ = inst_28198;
var res = inst_28199;
var files_not_loaded = inst_28201;
var dependencies_that_loaded = inst_28203;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28199,inst_28195,inst_28203,inst_28201,inst_28198,inst_28218,inst_28220,inst_28221,inst_28222,inst_28223,state_val_28282,c__24640__auto__,map__28127,map__28127__$1,opts,before_jsload,on_jsload,reload_dependents,map__28128,map__28128__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28199,inst_28195,inst_28203,inst_28201,inst_28198,inst_28218,inst_28220,inst_28221,inst_28222,inst_28223,state_val_28282,c__24640__auto__,map__28127,map__28127__$1,opts,before_jsload,on_jsload,reload_dependents,map__28128,map__28128__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28225 = setTimeout(inst_28224,(10));
var state_28281__$1 = (function (){var statearr_28352 = state_28281;
(statearr_28352[(33)] = inst_28218);

(statearr_28352[(34)] = inst_28223);

return statearr_28352;
})();
var statearr_28353_28419 = state_28281__$1;
(statearr_28353_28419[(2)] = inst_28225);

(statearr_28353_28419[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28282 === (16))){
var state_28281__$1 = state_28281;
var statearr_28354_28420 = state_28281__$1;
(statearr_28354_28420[(2)] = reload_dependents);

(statearr_28354_28420[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28282 === (38))){
var inst_28235 = (state_28281[(16)]);
var inst_28252 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28235);
var state_28281__$1 = state_28281;
var statearr_28355_28421 = state_28281__$1;
(statearr_28355_28421[(2)] = inst_28252);

(statearr_28355_28421[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28282 === (30))){
var state_28281__$1 = state_28281;
var statearr_28356_28422 = state_28281__$1;
(statearr_28356_28422[(2)] = null);

(statearr_28356_28422[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28282 === (10))){
var inst_28155 = (state_28281[(22)]);
var inst_28157 = cljs.core.chunked_seq_QMARK_.call(null,inst_28155);
var state_28281__$1 = state_28281;
if(inst_28157){
var statearr_28357_28423 = state_28281__$1;
(statearr_28357_28423[(1)] = (13));

} else {
var statearr_28358_28424 = state_28281__$1;
(statearr_28358_28424[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28282 === (18))){
var inst_28189 = (state_28281[(2)]);
var state_28281__$1 = state_28281;
if(cljs.core.truth_(inst_28189)){
var statearr_28359_28425 = state_28281__$1;
(statearr_28359_28425[(1)] = (19));

} else {
var statearr_28360_28426 = state_28281__$1;
(statearr_28360_28426[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28282 === (42))){
var state_28281__$1 = state_28281;
var statearr_28361_28427 = state_28281__$1;
(statearr_28361_28427[(2)] = null);

(statearr_28361_28427[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28282 === (37))){
var inst_28247 = (state_28281[(2)]);
var state_28281__$1 = state_28281;
var statearr_28362_28428 = state_28281__$1;
(statearr_28362_28428[(2)] = inst_28247);

(statearr_28362_28428[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28282 === (8))){
var inst_28155 = (state_28281[(22)]);
var inst_28142 = (state_28281[(9)]);
var inst_28155__$1 = cljs.core.seq.call(null,inst_28142);
var state_28281__$1 = (function (){var statearr_28363 = state_28281;
(statearr_28363[(22)] = inst_28155__$1);

return statearr_28363;
})();
if(inst_28155__$1){
var statearr_28364_28429 = state_28281__$1;
(statearr_28364_28429[(1)] = (10));

} else {
var statearr_28365_28430 = state_28281__$1;
(statearr_28365_28430[(1)] = (11));

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
}
});})(c__24640__auto__,map__28127,map__28127__$1,opts,before_jsload,on_jsload,reload_dependents,map__28128,map__28128__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__24526__auto__,c__24640__auto__,map__28127,map__28127__$1,opts,before_jsload,on_jsload,reload_dependents,map__28128,map__28128__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24527__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24527__auto____0 = (function (){
var statearr_28369 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28369[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__24527__auto__);

(statearr_28369[(1)] = (1));

return statearr_28369;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24527__auto____1 = (function (state_28281){
while(true){
var ret_value__24528__auto__ = (function (){try{while(true){
var result__24529__auto__ = switch__24526__auto__.call(null,state_28281);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24529__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24529__auto__;
}
break;
}
}catch (e28370){if((e28370 instanceof Object)){
var ex__24530__auto__ = e28370;
var statearr_28371_28431 = state_28281;
(statearr_28371_28431[(5)] = ex__24530__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28281);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28370;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28432 = state_28281;
state_28281 = G__28432;
continue;
} else {
return ret_value__24528__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__24527__auto__ = function(state_28281){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24527__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24527__auto____1.call(this,state_28281);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__24527__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__24527__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__24527__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__24527__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24527__auto__;
})()
;})(switch__24526__auto__,c__24640__auto__,map__28127,map__28127__$1,opts,before_jsload,on_jsload,reload_dependents,map__28128,map__28128__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__24642__auto__ = (function (){var statearr_28372 = f__24641__auto__.call(null);
(statearr_28372[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24640__auto__);

return statearr_28372;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24642__auto__);
});})(c__24640__auto__,map__28127,map__28127__$1,opts,before_jsload,on_jsload,reload_dependents,map__28128,map__28128__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__24640__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__28435,link){
var map__28438 = p__28435;
var map__28438__$1 = ((((!((map__28438 == null)))?((((map__28438.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28438.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28438):map__28438);
var file = cljs.core.get.call(null,map__28438__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__6144__auto__ = link.href;
if(cljs.core.truth_(temp__6144__auto__)){
var link_href = temp__6144__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__6144__auto__,map__28438,map__28438__$1,file){
return (function (p1__28433_SHARP_,p2__28434_SHARP_){
if(cljs.core._EQ_.call(null,p1__28433_SHARP_,p2__28434_SHARP_)){
return p1__28433_SHARP_;
} else {
return false;
}
});})(link_href,temp__6144__auto__,map__28438,map__28438__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__6144__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__28444){
var map__28445 = p__28444;
var map__28445__$1 = ((((!((map__28445 == null)))?((((map__28445.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28445.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28445):map__28445);
var match_length = cljs.core.get.call(null,map__28445__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__28445__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__28440_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__28440_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__6144__auto__)){
var res = temp__6144__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args28447 = [];
var len__20930__auto___28450 = arguments.length;
var i__20931__auto___28451 = (0);
while(true){
if((i__20931__auto___28451 < len__20930__auto___28450)){
args28447.push((arguments[i__20931__auto___28451]));

var G__28452 = (i__20931__auto___28451 + (1));
i__20931__auto___28451 = G__28452;
continue;
} else {
}
break;
}

var G__28449 = args28447.length;
switch (G__28449) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28447.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__28454_SHARP_,p2__28455_SHARP_){
return cljs.core.assoc.call(null,p1__28454_SHARP_,cljs.core.get.call(null,p2__28455_SHARP_,key),p2__28455_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__28456){
var map__28459 = p__28456;
var map__28459__$1 = ((((!((map__28459 == null)))?((((map__28459.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28459.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28459):map__28459);
var f_data = map__28459__$1;
var file = cljs.core.get.call(null,map__28459__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__6144__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__6144__auto__)){
var link = temp__6144__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__28461,files_msg){
var map__28468 = p__28461;
var map__28468__$1 = ((((!((map__28468 == null)))?((((map__28468.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28468.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28468):map__28468);
var opts = map__28468__$1;
var on_cssload = cljs.core.get.call(null,map__28468__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__28470_28474 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__28471_28475 = null;
var count__28472_28476 = (0);
var i__28473_28477 = (0);
while(true){
if((i__28473_28477 < count__28472_28476)){
var f_28478 = cljs.core._nth.call(null,chunk__28471_28475,i__28473_28477);
figwheel.client.file_reloading.reload_css_file.call(null,f_28478);

var G__28479 = seq__28470_28474;
var G__28480 = chunk__28471_28475;
var G__28481 = count__28472_28476;
var G__28482 = (i__28473_28477 + (1));
seq__28470_28474 = G__28479;
chunk__28471_28475 = G__28480;
count__28472_28476 = G__28481;
i__28473_28477 = G__28482;
continue;
} else {
var temp__6144__auto___28483 = cljs.core.seq.call(null,seq__28470_28474);
if(temp__6144__auto___28483){
var seq__28470_28484__$1 = temp__6144__auto___28483;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28470_28484__$1)){
var c__20650__auto___28485 = cljs.core.chunk_first.call(null,seq__28470_28484__$1);
var G__28486 = cljs.core.chunk_rest.call(null,seq__28470_28484__$1);
var G__28487 = c__20650__auto___28485;
var G__28488 = cljs.core.count.call(null,c__20650__auto___28485);
var G__28489 = (0);
seq__28470_28474 = G__28486;
chunk__28471_28475 = G__28487;
count__28472_28476 = G__28488;
i__28473_28477 = G__28489;
continue;
} else {
var f_28490 = cljs.core.first.call(null,seq__28470_28484__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_28490);

var G__28491 = cljs.core.next.call(null,seq__28470_28484__$1);
var G__28492 = null;
var G__28493 = (0);
var G__28494 = (0);
seq__28470_28474 = G__28491;
chunk__28471_28475 = G__28492;
count__28472_28476 = G__28493;
i__28473_28477 = G__28494;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__28468,map__28468__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__28468,map__28468__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1513106861041