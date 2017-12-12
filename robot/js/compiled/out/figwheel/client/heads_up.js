// Compiled by ClojureScript 1.9.14 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__20937__auto__ = [];
var len__20930__auto___28724 = arguments.length;
var i__20931__auto___28725 = (0);
while(true){
if((i__20931__auto___28725 < len__20930__auto___28724)){
args__20937__auto__.push((arguments[i__20931__auto___28725]));

var G__28726 = (i__20931__auto___28725 + (1));
i__20931__auto___28725 = G__28726;
continue;
} else {
}
break;
}

var argseq__20938__auto__ = ((((2) < args__20937__auto__.length))?(new cljs.core.IndexedSeq(args__20937__auto__.slice((2)),(0),null)):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__20938__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__28716_28727 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__28717_28728 = null;
var count__28718_28729 = (0);
var i__28719_28730 = (0);
while(true){
if((i__28719_28730 < count__28718_28729)){
var k_28731 = cljs.core._nth.call(null,chunk__28717_28728,i__28719_28730);
e.setAttribute(cljs.core.name.call(null,k_28731),cljs.core.get.call(null,attrs,k_28731));

var G__28732 = seq__28716_28727;
var G__28733 = chunk__28717_28728;
var G__28734 = count__28718_28729;
var G__28735 = (i__28719_28730 + (1));
seq__28716_28727 = G__28732;
chunk__28717_28728 = G__28733;
count__28718_28729 = G__28734;
i__28719_28730 = G__28735;
continue;
} else {
var temp__6144__auto___28736 = cljs.core.seq.call(null,seq__28716_28727);
if(temp__6144__auto___28736){
var seq__28716_28737__$1 = temp__6144__auto___28736;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28716_28737__$1)){
var c__20650__auto___28738 = cljs.core.chunk_first.call(null,seq__28716_28737__$1);
var G__28739 = cljs.core.chunk_rest.call(null,seq__28716_28737__$1);
var G__28740 = c__20650__auto___28738;
var G__28741 = cljs.core.count.call(null,c__20650__auto___28738);
var G__28742 = (0);
seq__28716_28727 = G__28739;
chunk__28717_28728 = G__28740;
count__28718_28729 = G__28741;
i__28719_28730 = G__28742;
continue;
} else {
var k_28743 = cljs.core.first.call(null,seq__28716_28737__$1);
e.setAttribute(cljs.core.name.call(null,k_28743),cljs.core.get.call(null,attrs,k_28743));

var G__28744 = cljs.core.next.call(null,seq__28716_28737__$1);
var G__28745 = null;
var G__28746 = (0);
var G__28747 = (0);
seq__28716_28727 = G__28744;
chunk__28717_28728 = G__28745;
count__28718_28729 = G__28746;
i__28719_28730 = G__28747;
continue;
}
} else {
}
}
break;
}

var seq__28720_28748 = cljs.core.seq.call(null,children);
var chunk__28721_28749 = null;
var count__28722_28750 = (0);
var i__28723_28751 = (0);
while(true){
if((i__28723_28751 < count__28722_28750)){
var ch_28752 = cljs.core._nth.call(null,chunk__28721_28749,i__28723_28751);
e.appendChild(ch_28752);

var G__28753 = seq__28720_28748;
var G__28754 = chunk__28721_28749;
var G__28755 = count__28722_28750;
var G__28756 = (i__28723_28751 + (1));
seq__28720_28748 = G__28753;
chunk__28721_28749 = G__28754;
count__28722_28750 = G__28755;
i__28723_28751 = G__28756;
continue;
} else {
var temp__6144__auto___28757 = cljs.core.seq.call(null,seq__28720_28748);
if(temp__6144__auto___28757){
var seq__28720_28758__$1 = temp__6144__auto___28757;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28720_28758__$1)){
var c__20650__auto___28759 = cljs.core.chunk_first.call(null,seq__28720_28758__$1);
var G__28760 = cljs.core.chunk_rest.call(null,seq__28720_28758__$1);
var G__28761 = c__20650__auto___28759;
var G__28762 = cljs.core.count.call(null,c__20650__auto___28759);
var G__28763 = (0);
seq__28720_28748 = G__28760;
chunk__28721_28749 = G__28761;
count__28722_28750 = G__28762;
i__28723_28751 = G__28763;
continue;
} else {
var ch_28764 = cljs.core.first.call(null,seq__28720_28758__$1);
e.appendChild(ch_28764);

var G__28765 = cljs.core.next.call(null,seq__28720_28758__$1);
var G__28766 = null;
var G__28767 = (0);
var G__28768 = (0);
seq__28720_28748 = G__28765;
chunk__28721_28749 = G__28766;
count__28722_28750 = G__28767;
i__28723_28751 = G__28768;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq28713){
var G__28714 = cljs.core.first.call(null,seq28713);
var seq28713__$1 = cljs.core.next.call(null,seq28713);
var G__28715 = cljs.core.first.call(null,seq28713__$1);
var seq28713__$2 = cljs.core.next.call(null,seq28713__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__28714,G__28715,seq28713__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__20770__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__20771__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__20772__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__20773__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__20774__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__20770__auto__,prefer_table__20771__auto__,method_cache__20772__auto__,cached_hierarchy__20773__auto__,hierarchy__20774__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__20770__auto__,prefer_table__20771__auto__,method_cache__20772__auto__,cached_hierarchy__20773__auto__,hierarchy__20774__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__20774__auto__,method_table__20770__auto__,prefer_table__20771__auto__,method_cache__20772__auto__,cached_hierarchy__20773__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_28769 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_28769.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_28769.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_28769.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_28769);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__28770,st_map){
var map__28775 = p__28770;
var map__28775__$1 = ((((!((map__28775 == null)))?((((map__28775.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28775.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28775):map__28775);
var container_el = cljs.core.get.call(null,map__28775__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__28775,map__28775__$1,container_el){
return (function (p__28777){
var vec__28778 = p__28777;
var k = cljs.core.nth.call(null,vec__28778,(0),null);
var v = cljs.core.nth.call(null,vec__28778,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__28775,map__28775__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__28779,dom_str){
var map__28782 = p__28779;
var map__28782__$1 = ((((!((map__28782 == null)))?((((map__28782.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28782.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28782):map__28782);
var c = map__28782__$1;
var content_area_el = cljs.core.get.call(null,map__28782__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__28784){
var map__28787 = p__28784;
var map__28787__$1 = ((((!((map__28787 == null)))?((((map__28787.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28787.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28787):map__28787);
var content_area_el = cljs.core.get.call(null,map__28787__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__24640__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24640__auto__){
return (function (){
var f__24641__auto__ = (function (){var switch__24526__auto__ = ((function (c__24640__auto__){
return (function (state_28830){
var state_val_28831 = (state_28830[(1)]);
if((state_val_28831 === (1))){
var inst_28815 = (state_28830[(7)]);
var inst_28815__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_28816 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_28817 = ["10px","10px","100%","68px","1.0"];
var inst_28818 = cljs.core.PersistentHashMap.fromArrays(inst_28816,inst_28817);
var inst_28819 = cljs.core.merge.call(null,inst_28818,style);
var inst_28820 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_28815__$1,inst_28819);
var inst_28821 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_28815__$1,msg);
var inst_28822 = cljs.core.async.timeout.call(null,(300));
var state_28830__$1 = (function (){var statearr_28832 = state_28830;
(statearr_28832[(7)] = inst_28815__$1);

(statearr_28832[(8)] = inst_28820);

(statearr_28832[(9)] = inst_28821);

return statearr_28832;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28830__$1,(2),inst_28822);
} else {
if((state_val_28831 === (2))){
var inst_28815 = (state_28830[(7)]);
var inst_28824 = (state_28830[(2)]);
var inst_28825 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_28826 = ["auto"];
var inst_28827 = cljs.core.PersistentHashMap.fromArrays(inst_28825,inst_28826);
var inst_28828 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_28815,inst_28827);
var state_28830__$1 = (function (){var statearr_28833 = state_28830;
(statearr_28833[(10)] = inst_28824);

return statearr_28833;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28830__$1,inst_28828);
} else {
return null;
}
}
});})(c__24640__auto__))
;
return ((function (switch__24526__auto__,c__24640__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__24527__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__24527__auto____0 = (function (){
var statearr_28837 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28837[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__24527__auto__);

(statearr_28837[(1)] = (1));

return statearr_28837;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__24527__auto____1 = (function (state_28830){
while(true){
var ret_value__24528__auto__ = (function (){try{while(true){
var result__24529__auto__ = switch__24526__auto__.call(null,state_28830);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24529__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24529__auto__;
}
break;
}
}catch (e28838){if((e28838 instanceof Object)){
var ex__24530__auto__ = e28838;
var statearr_28839_28841 = state_28830;
(statearr_28839_28841[(5)] = ex__24530__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28830);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28838;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28842 = state_28830;
state_28830 = G__28842;
continue;
} else {
return ret_value__24528__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__24527__auto__ = function(state_28830){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__24527__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__24527__auto____1.call(this,state_28830);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__24527__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__24527__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__24527__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__24527__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__24527__auto__;
})()
;})(switch__24526__auto__,c__24640__auto__))
})();
var state__24642__auto__ = (function (){var statearr_28840 = f__24641__auto__.call(null);
(statearr_28840[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24640__auto__);

return statearr_28840;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24642__auto__);
});})(c__24640__auto__))
);

return c__24640__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var msg__$1 = goog.string.htmlEscape(msg);
var temp__6142__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg__$1);
if(cljs.core.truth_(temp__6142__auto__)){
var vec__28844 = temp__6142__auto__;
var f = cljs.core.nth.call(null,vec__28844,(0),null);
var ln = cljs.core.nth.call(null,vec__28844,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__28847 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__28847,(0),null);
var file_line = cljs.core.nth.call(null,vec__28847,(1),null);
var file_column = cljs.core.nth.call(null,vec__28847,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__28847,file_name,file_line,file_column){
return (function (p1__28845_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__28845_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__28847,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__19747__auto__ = file_line;
if(cljs.core.truth_(or__19747__auto__)){
return or__19747__auto__;
} else {
var and__19735__auto__ = cause;
if(cljs.core.truth_(and__19735__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__19735__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(goog.string.htmlEscape(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause))),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__28850 = figwheel.client.heads_up.ensure_container.call(null);
var map__28850__$1 = ((((!((map__28850 == null)))?((((map__28850.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28850.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28850):map__28850);
var content_area_el = cljs.core.get.call(null,map__28850__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__24640__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24640__auto__){
return (function (){
var f__24641__auto__ = (function (){var switch__24526__auto__ = ((function (c__24640__auto__){
return (function (state_28898){
var state_val_28899 = (state_28898[(1)]);
if((state_val_28899 === (1))){
var inst_28881 = (state_28898[(7)]);
var inst_28881__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_28882 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_28883 = ["0.0"];
var inst_28884 = cljs.core.PersistentHashMap.fromArrays(inst_28882,inst_28883);
var inst_28885 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_28881__$1,inst_28884);
var inst_28886 = cljs.core.async.timeout.call(null,(300));
var state_28898__$1 = (function (){var statearr_28900 = state_28898;
(statearr_28900[(8)] = inst_28885);

(statearr_28900[(7)] = inst_28881__$1);

return statearr_28900;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28898__$1,(2),inst_28886);
} else {
if((state_val_28899 === (2))){
var inst_28881 = (state_28898[(7)]);
var inst_28888 = (state_28898[(2)]);
var inst_28889 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_28890 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_28891 = cljs.core.PersistentHashMap.fromArrays(inst_28889,inst_28890);
var inst_28892 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_28881,inst_28891);
var inst_28893 = cljs.core.async.timeout.call(null,(200));
var state_28898__$1 = (function (){var statearr_28901 = state_28898;
(statearr_28901[(9)] = inst_28888);

(statearr_28901[(10)] = inst_28892);

return statearr_28901;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28898__$1,(3),inst_28893);
} else {
if((state_val_28899 === (3))){
var inst_28881 = (state_28898[(7)]);
var inst_28895 = (state_28898[(2)]);
var inst_28896 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_28881,"");
var state_28898__$1 = (function (){var statearr_28902 = state_28898;
(statearr_28902[(11)] = inst_28895);

return statearr_28902;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28898__$1,inst_28896);
} else {
return null;
}
}
}
});})(c__24640__auto__))
;
return ((function (switch__24526__auto__,c__24640__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__24527__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__24527__auto____0 = (function (){
var statearr_28906 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28906[(0)] = figwheel$client$heads_up$clear_$_state_machine__24527__auto__);

(statearr_28906[(1)] = (1));

return statearr_28906;
});
var figwheel$client$heads_up$clear_$_state_machine__24527__auto____1 = (function (state_28898){
while(true){
var ret_value__24528__auto__ = (function (){try{while(true){
var result__24529__auto__ = switch__24526__auto__.call(null,state_28898);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24529__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24529__auto__;
}
break;
}
}catch (e28907){if((e28907 instanceof Object)){
var ex__24530__auto__ = e28907;
var statearr_28908_28910 = state_28898;
(statearr_28908_28910[(5)] = ex__24530__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28898);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28907;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28911 = state_28898;
state_28898 = G__28911;
continue;
} else {
return ret_value__24528__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__24527__auto__ = function(state_28898){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__24527__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__24527__auto____1.call(this,state_28898);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__24527__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__24527__auto____0;
figwheel$client$heads_up$clear_$_state_machine__24527__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__24527__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__24527__auto__;
})()
;})(switch__24526__auto__,c__24640__auto__))
})();
var state__24642__auto__ = (function (){var statearr_28909 = f__24641__auto__.call(null);
(statearr_28909[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24640__auto__);

return statearr_28909;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24642__auto__);
});})(c__24640__auto__))
);

return c__24640__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__24640__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24640__auto__){
return (function (){
var f__24641__auto__ = (function (){var switch__24526__auto__ = ((function (c__24640__auto__){
return (function (state_28943){
var state_val_28944 = (state_28943[(1)]);
if((state_val_28944 === (1))){
var inst_28933 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_28943__$1 = state_28943;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28943__$1,(2),inst_28933);
} else {
if((state_val_28944 === (2))){
var inst_28935 = (state_28943[(2)]);
var inst_28936 = cljs.core.async.timeout.call(null,(400));
var state_28943__$1 = (function (){var statearr_28945 = state_28943;
(statearr_28945[(7)] = inst_28935);

return statearr_28945;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28943__$1,(3),inst_28936);
} else {
if((state_val_28944 === (3))){
var inst_28938 = (state_28943[(2)]);
var inst_28939 = figwheel.client.heads_up.clear.call(null);
var state_28943__$1 = (function (){var statearr_28946 = state_28943;
(statearr_28946[(8)] = inst_28938);

return statearr_28946;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28943__$1,(4),inst_28939);
} else {
if((state_val_28944 === (4))){
var inst_28941 = (state_28943[(2)]);
var state_28943__$1 = state_28943;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28943__$1,inst_28941);
} else {
return null;
}
}
}
}
});})(c__24640__auto__))
;
return ((function (switch__24526__auto__,c__24640__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__24527__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__24527__auto____0 = (function (){
var statearr_28950 = [null,null,null,null,null,null,null,null,null];
(statearr_28950[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__24527__auto__);

(statearr_28950[(1)] = (1));

return statearr_28950;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__24527__auto____1 = (function (state_28943){
while(true){
var ret_value__24528__auto__ = (function (){try{while(true){
var result__24529__auto__ = switch__24526__auto__.call(null,state_28943);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24529__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24529__auto__;
}
break;
}
}catch (e28951){if((e28951 instanceof Object)){
var ex__24530__auto__ = e28951;
var statearr_28952_28954 = state_28943;
(statearr_28952_28954[(5)] = ex__24530__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28943);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28951;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28955 = state_28943;
state_28943 = G__28955;
continue;
} else {
return ret_value__24528__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__24527__auto__ = function(state_28943){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__24527__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__24527__auto____1.call(this,state_28943);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__24527__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__24527__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__24527__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__24527__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__24527__auto__;
})()
;})(switch__24526__auto__,c__24640__auto__))
})();
var state__24642__auto__ = (function (){var statearr_28953 = f__24641__auto__.call(null);
(statearr_28953[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24640__auto__);

return statearr_28953;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24642__auto__);
});})(c__24640__auto__))
);

return c__24640__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1513106861852