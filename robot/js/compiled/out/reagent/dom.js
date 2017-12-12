// Compiled by ClojureScript 1.9.14 {}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('cljsjs.react.dom');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.debug');
goog.require('reagent.interop');
if(typeof reagent.dom.dom !== 'undefined'){
} else {
reagent.dom.dom = (function (){var or__19747__auto__ = (function (){var and__19735__auto__ = typeof ReactDOM !== 'undefined';
if(and__19735__auto__){
return ReactDOM;
} else {
return and__19735__auto__;
}
})();
if(cljs.core.truth_(or__19747__auto__)){
return or__19747__auto__;
} else {
var and__19735__auto__ = typeof require !== 'undefined';
if(and__19735__auto__){
return require("react-dom");
} else {
return and__19735__auto__;
}
}
})();
}
if(cljs.core.truth_(reagent.dom.dom)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Could not find ReactDOM"),cljs.core.str("\n"),cljs.core.str("dom")].join('')));
}
if(typeof reagent.dom.roots !== 'undefined'){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return (reagent.dom.dom["unmountComponentAtNode"])(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_21585 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.dom["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_21585){
return (function (){
var _STAR_always_update_STAR_21586 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

if(cljs.core.some_QMARK_.call(null,callback)){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_21586;
}});})(_STAR_always_update_STAR_21585))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_21585;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var args21587 = [];
var len__20930__auto___21590 = arguments.length;
var i__20931__auto___21591 = (0);
while(true){
if((i__20931__auto___21591 < len__20930__auto___21590)){
args21587.push((arguments[i__20931__auto___21591]));

var G__21592 = (i__20931__auto___21591 + (1));
i__20931__auto___21591 = G__21592;
continue;
} else {
}
break;
}

var G__21589 = args21587.length;
switch (G__21589) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21587.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
var f = (function (){
return reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return (reagent.dom.dom["findDOMNode"])(this$);
});
reagent.impl.template.find_dom_node = reagent.dom.dom_node;
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
var seq__21598_21602 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__21599_21603 = null;
var count__21600_21604 = (0);
var i__21601_21605 = (0);
while(true){
if((i__21601_21605 < count__21600_21604)){
var v_21606 = cljs.core._nth.call(null,chunk__21599_21603,i__21601_21605);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_21606);

var G__21607 = seq__21598_21602;
var G__21608 = chunk__21599_21603;
var G__21609 = count__21600_21604;
var G__21610 = (i__21601_21605 + (1));
seq__21598_21602 = G__21607;
chunk__21599_21603 = G__21608;
count__21600_21604 = G__21609;
i__21601_21605 = G__21610;
continue;
} else {
var temp__6144__auto___21611 = cljs.core.seq.call(null,seq__21598_21602);
if(temp__6144__auto___21611){
var seq__21598_21612__$1 = temp__6144__auto___21611;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21598_21612__$1)){
var c__20650__auto___21613 = cljs.core.chunk_first.call(null,seq__21598_21612__$1);
var G__21614 = cljs.core.chunk_rest.call(null,seq__21598_21612__$1);
var G__21615 = c__20650__auto___21613;
var G__21616 = cljs.core.count.call(null,c__20650__auto___21613);
var G__21617 = (0);
seq__21598_21602 = G__21614;
chunk__21599_21603 = G__21615;
count__21600_21604 = G__21616;
i__21601_21605 = G__21617;
continue;
} else {
var v_21618 = cljs.core.first.call(null,seq__21598_21612__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_21618);

var G__21619 = cljs.core.next.call(null,seq__21598_21612__$1);
var G__21620 = null;
var G__21621 = (0);
var G__21622 = (0);
seq__21598_21602 = G__21619;
chunk__21599_21603 = G__21620;
count__21600_21604 = G__21621;
i__21601_21605 = G__21622;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map?rel=1513106852698