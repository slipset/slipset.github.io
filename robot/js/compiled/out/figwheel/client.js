// Compiled by ClojureScript 1.9.14 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__28958 = cljs.core._EQ_;
var expr__28959 = (function (){var or__19747__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__19747__auto__)){
return or__19747__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__28958.call(null,"true",expr__28959))){
return true;
} else {
if(cljs.core.truth_(pred__28958.call(null,"false",expr__28959))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__28959)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__28961__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__28961 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28962__i = 0, G__28962__a = new Array(arguments.length -  0);
while (G__28962__i < G__28962__a.length) {G__28962__a[G__28962__i] = arguments[G__28962__i + 0]; ++G__28962__i;}
  args = new cljs.core.IndexedSeq(G__28962__a,0);
} 
return G__28961__delegate.call(this,args);};
G__28961.cljs$lang$maxFixedArity = 0;
G__28961.cljs$lang$applyTo = (function (arglist__28963){
var args = cljs.core.seq(arglist__28963);
return G__28961__delegate(args);
});
G__28961.cljs$core$IFn$_invoke$arity$variadic = G__28961__delegate;
return G__28961;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__28964){
var map__28967 = p__28964;
var map__28967__$1 = ((((!((map__28967 == null)))?((((map__28967.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28967.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28967):map__28967);
var message = cljs.core.get.call(null,map__28967__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__28967__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__19747__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__19747__auto__)){
return or__19747__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__19735__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__19735__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__19735__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__24640__auto___29129 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24640__auto___29129,ch){
return (function (){
var f__24641__auto__ = (function (){var switch__24526__auto__ = ((function (c__24640__auto___29129,ch){
return (function (state_29098){
var state_val_29099 = (state_29098[(1)]);
if((state_val_29099 === (7))){
var inst_29094 = (state_29098[(2)]);
var state_29098__$1 = state_29098;
var statearr_29100_29130 = state_29098__$1;
(statearr_29100_29130[(2)] = inst_29094);

(statearr_29100_29130[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29099 === (1))){
var state_29098__$1 = state_29098;
var statearr_29101_29131 = state_29098__$1;
(statearr_29101_29131[(2)] = null);

(statearr_29101_29131[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29099 === (4))){
var inst_29051 = (state_29098[(7)]);
var inst_29051__$1 = (state_29098[(2)]);
var state_29098__$1 = (function (){var statearr_29102 = state_29098;
(statearr_29102[(7)] = inst_29051__$1);

return statearr_29102;
})();
if(cljs.core.truth_(inst_29051__$1)){
var statearr_29103_29132 = state_29098__$1;
(statearr_29103_29132[(1)] = (5));

} else {
var statearr_29104_29133 = state_29098__$1;
(statearr_29104_29133[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29099 === (15))){
var inst_29058 = (state_29098[(8)]);
var inst_29073 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_29058);
var inst_29074 = cljs.core.first.call(null,inst_29073);
var inst_29075 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_29074);
var inst_29076 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_29075)].join('');
var inst_29077 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_29076);
var state_29098__$1 = state_29098;
var statearr_29105_29134 = state_29098__$1;
(statearr_29105_29134[(2)] = inst_29077);

(statearr_29105_29134[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29099 === (13))){
var inst_29082 = (state_29098[(2)]);
var state_29098__$1 = state_29098;
var statearr_29106_29135 = state_29098__$1;
(statearr_29106_29135[(2)] = inst_29082);

(statearr_29106_29135[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29099 === (6))){
var state_29098__$1 = state_29098;
var statearr_29107_29136 = state_29098__$1;
(statearr_29107_29136[(2)] = null);

(statearr_29107_29136[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29099 === (17))){
var inst_29080 = (state_29098[(2)]);
var state_29098__$1 = state_29098;
var statearr_29108_29137 = state_29098__$1;
(statearr_29108_29137[(2)] = inst_29080);

(statearr_29108_29137[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29099 === (3))){
var inst_29096 = (state_29098[(2)]);
var state_29098__$1 = state_29098;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29098__$1,inst_29096);
} else {
if((state_val_29099 === (12))){
var inst_29057 = (state_29098[(9)]);
var inst_29071 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_29057,opts);
var state_29098__$1 = state_29098;
if(cljs.core.truth_(inst_29071)){
var statearr_29109_29138 = state_29098__$1;
(statearr_29109_29138[(1)] = (15));

} else {
var statearr_29110_29139 = state_29098__$1;
(statearr_29110_29139[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29099 === (2))){
var state_29098__$1 = state_29098;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29098__$1,(4),ch);
} else {
if((state_val_29099 === (11))){
var inst_29058 = (state_29098[(8)]);
var inst_29063 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29064 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_29058);
var inst_29065 = cljs.core.async.timeout.call(null,(1000));
var inst_29066 = [inst_29064,inst_29065];
var inst_29067 = (new cljs.core.PersistentVector(null,2,(5),inst_29063,inst_29066,null));
var state_29098__$1 = state_29098;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29098__$1,(14),inst_29067);
} else {
if((state_val_29099 === (9))){
var inst_29058 = (state_29098[(8)]);
var inst_29084 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_29085 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_29058);
var inst_29086 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29085);
var inst_29087 = [cljs.core.str("Not loading: "),cljs.core.str(inst_29086)].join('');
var inst_29088 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_29087);
var state_29098__$1 = (function (){var statearr_29111 = state_29098;
(statearr_29111[(10)] = inst_29084);

return statearr_29111;
})();
var statearr_29112_29140 = state_29098__$1;
(statearr_29112_29140[(2)] = inst_29088);

(statearr_29112_29140[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29099 === (5))){
var inst_29051 = (state_29098[(7)]);
var inst_29053 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_29054 = (new cljs.core.PersistentArrayMap(null,2,inst_29053,null));
var inst_29055 = (new cljs.core.PersistentHashSet(null,inst_29054,null));
var inst_29056 = figwheel.client.focus_msgs.call(null,inst_29055,inst_29051);
var inst_29057 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_29056);
var inst_29058 = cljs.core.first.call(null,inst_29056);
var inst_29059 = figwheel.client.autoload_QMARK_.call(null);
var state_29098__$1 = (function (){var statearr_29113 = state_29098;
(statearr_29113[(9)] = inst_29057);

(statearr_29113[(8)] = inst_29058);

return statearr_29113;
})();
if(cljs.core.truth_(inst_29059)){
var statearr_29114_29141 = state_29098__$1;
(statearr_29114_29141[(1)] = (8));

} else {
var statearr_29115_29142 = state_29098__$1;
(statearr_29115_29142[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29099 === (14))){
var inst_29069 = (state_29098[(2)]);
var state_29098__$1 = state_29098;
var statearr_29116_29143 = state_29098__$1;
(statearr_29116_29143[(2)] = inst_29069);

(statearr_29116_29143[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29099 === (16))){
var state_29098__$1 = state_29098;
var statearr_29117_29144 = state_29098__$1;
(statearr_29117_29144[(2)] = null);

(statearr_29117_29144[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29099 === (10))){
var inst_29090 = (state_29098[(2)]);
var state_29098__$1 = (function (){var statearr_29118 = state_29098;
(statearr_29118[(11)] = inst_29090);

return statearr_29118;
})();
var statearr_29119_29145 = state_29098__$1;
(statearr_29119_29145[(2)] = null);

(statearr_29119_29145[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29099 === (8))){
var inst_29057 = (state_29098[(9)]);
var inst_29061 = figwheel.client.reload_file_state_QMARK_.call(null,inst_29057,opts);
var state_29098__$1 = state_29098;
if(cljs.core.truth_(inst_29061)){
var statearr_29120_29146 = state_29098__$1;
(statearr_29120_29146[(1)] = (11));

} else {
var statearr_29121_29147 = state_29098__$1;
(statearr_29121_29147[(1)] = (12));

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
});})(c__24640__auto___29129,ch))
;
return ((function (switch__24526__auto__,c__24640__auto___29129,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__24527__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__24527__auto____0 = (function (){
var statearr_29125 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29125[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__24527__auto__);

(statearr_29125[(1)] = (1));

return statearr_29125;
});
var figwheel$client$file_reloader_plugin_$_state_machine__24527__auto____1 = (function (state_29098){
while(true){
var ret_value__24528__auto__ = (function (){try{while(true){
var result__24529__auto__ = switch__24526__auto__.call(null,state_29098);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24529__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24529__auto__;
}
break;
}
}catch (e29126){if((e29126 instanceof Object)){
var ex__24530__auto__ = e29126;
var statearr_29127_29148 = state_29098;
(statearr_29127_29148[(5)] = ex__24530__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29098);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29126;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29149 = state_29098;
state_29098 = G__29149;
continue;
} else {
return ret_value__24528__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__24527__auto__ = function(state_29098){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__24527__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__24527__auto____1.call(this,state_29098);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__24527__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__24527__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__24527__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__24527__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__24527__auto__;
})()
;})(switch__24526__auto__,c__24640__auto___29129,ch))
})();
var state__24642__auto__ = (function (){var statearr_29128 = f__24641__auto__.call(null);
(statearr_29128[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24640__auto___29129);

return statearr_29128;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24642__auto__);
});})(c__24640__auto___29129,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__29150_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__29150_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_29157 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_29157){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_29155 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_29156 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_29155,_STAR_print_newline_STAR_29156,base_path_29157){
return (function() { 
var G__29158__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__29158 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29159__i = 0, G__29159__a = new Array(arguments.length -  0);
while (G__29159__i < G__29159__a.length) {G__29159__a[G__29159__i] = arguments[G__29159__i + 0]; ++G__29159__i;}
  args = new cljs.core.IndexedSeq(G__29159__a,0);
} 
return G__29158__delegate.call(this,args);};
G__29158.cljs$lang$maxFixedArity = 0;
G__29158.cljs$lang$applyTo = (function (arglist__29160){
var args = cljs.core.seq(arglist__29160);
return G__29158__delegate(args);
});
G__29158.cljs$core$IFn$_invoke$arity$variadic = G__29158__delegate;
return G__29158;
})()
;})(_STAR_print_fn_STAR_29155,_STAR_print_newline_STAR_29156,base_path_29157))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_29156;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_29155;
}}catch (e29154){if((e29154 instanceof Error)){
var e = e29154;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_29157], null));
} else {
var e = e29154;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_29157))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__29161){
var map__29168 = p__29161;
var map__29168__$1 = ((((!((map__29168 == null)))?((((map__29168.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29168.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29168):map__29168);
var opts = map__29168__$1;
var build_id = cljs.core.get.call(null,map__29168__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__29168,map__29168__$1,opts,build_id){
return (function (p__29170){
var vec__29171 = p__29170;
var map__29172 = cljs.core.nth.call(null,vec__29171,(0),null);
var map__29172__$1 = ((((!((map__29172 == null)))?((((map__29172.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29172.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29172):map__29172);
var msg = map__29172__$1;
var msg_name = cljs.core.get.call(null,map__29172__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__29171,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__29171,map__29172,map__29172__$1,msg,msg_name,_,map__29168,map__29168__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__29171,map__29172,map__29172__$1,msg,msg_name,_,map__29168,map__29168__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__29168,map__29168__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__29178){
var vec__29179 = p__29178;
var map__29180 = cljs.core.nth.call(null,vec__29179,(0),null);
var map__29180__$1 = ((((!((map__29180 == null)))?((((map__29180.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29180.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29180):map__29180);
var msg = map__29180__$1;
var msg_name = cljs.core.get.call(null,map__29180__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__29179,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__29182){
var map__29192 = p__29182;
var map__29192__$1 = ((((!((map__29192 == null)))?((((map__29192.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29192.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29192):map__29192);
var on_compile_warning = cljs.core.get.call(null,map__29192__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__29192__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__29192,map__29192__$1,on_compile_warning,on_compile_fail){
return (function (p__29194){
var vec__29195 = p__29194;
var map__29196 = cljs.core.nth.call(null,vec__29195,(0),null);
var map__29196__$1 = ((((!((map__29196 == null)))?((((map__29196.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29196.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29196):map__29196);
var msg = map__29196__$1;
var msg_name = cljs.core.get.call(null,map__29196__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__29195,(1));
var pred__29198 = cljs.core._EQ_;
var expr__29199 = msg_name;
if(cljs.core.truth_(pred__29198.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__29199))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__29198.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__29199))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__29192,map__29192__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__24640__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24640__auto__,msg_hist,msg_names,msg){
return (function (){
var f__24641__auto__ = (function (){var switch__24526__auto__ = ((function (c__24640__auto__,msg_hist,msg_names,msg){
return (function (state_29415){
var state_val_29416 = (state_29415[(1)]);
if((state_val_29416 === (7))){
var inst_29339 = (state_29415[(2)]);
var state_29415__$1 = state_29415;
if(cljs.core.truth_(inst_29339)){
var statearr_29417_29463 = state_29415__$1;
(statearr_29417_29463[(1)] = (8));

} else {
var statearr_29418_29464 = state_29415__$1;
(statearr_29418_29464[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29416 === (20))){
var inst_29409 = (state_29415[(2)]);
var state_29415__$1 = state_29415;
var statearr_29419_29465 = state_29415__$1;
(statearr_29419_29465[(2)] = inst_29409);

(statearr_29419_29465[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29416 === (27))){
var inst_29405 = (state_29415[(2)]);
var state_29415__$1 = state_29415;
var statearr_29420_29466 = state_29415__$1;
(statearr_29420_29466[(2)] = inst_29405);

(statearr_29420_29466[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29416 === (1))){
var inst_29332 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_29415__$1 = state_29415;
if(cljs.core.truth_(inst_29332)){
var statearr_29421_29467 = state_29415__$1;
(statearr_29421_29467[(1)] = (2));

} else {
var statearr_29422_29468 = state_29415__$1;
(statearr_29422_29468[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29416 === (24))){
var inst_29407 = (state_29415[(2)]);
var state_29415__$1 = state_29415;
var statearr_29423_29469 = state_29415__$1;
(statearr_29423_29469[(2)] = inst_29407);

(statearr_29423_29469[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29416 === (4))){
var inst_29413 = (state_29415[(2)]);
var state_29415__$1 = state_29415;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29415__$1,inst_29413);
} else {
if((state_val_29416 === (15))){
var inst_29411 = (state_29415[(2)]);
var state_29415__$1 = state_29415;
var statearr_29424_29470 = state_29415__$1;
(statearr_29424_29470[(2)] = inst_29411);

(statearr_29424_29470[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29416 === (21))){
var inst_29370 = (state_29415[(2)]);
var state_29415__$1 = state_29415;
var statearr_29425_29471 = state_29415__$1;
(statearr_29425_29471[(2)] = inst_29370);

(statearr_29425_29471[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29416 === (31))){
var inst_29394 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_29415__$1 = state_29415;
if(cljs.core.truth_(inst_29394)){
var statearr_29426_29472 = state_29415__$1;
(statearr_29426_29472[(1)] = (34));

} else {
var statearr_29427_29473 = state_29415__$1;
(statearr_29427_29473[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29416 === (32))){
var inst_29403 = (state_29415[(2)]);
var state_29415__$1 = state_29415;
var statearr_29428_29474 = state_29415__$1;
(statearr_29428_29474[(2)] = inst_29403);

(statearr_29428_29474[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29416 === (33))){
var inst_29392 = (state_29415[(2)]);
var state_29415__$1 = state_29415;
var statearr_29429_29475 = state_29415__$1;
(statearr_29429_29475[(2)] = inst_29392);

(statearr_29429_29475[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29416 === (13))){
var inst_29353 = figwheel.client.heads_up.clear.call(null);
var state_29415__$1 = state_29415;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29415__$1,(16),inst_29353);
} else {
if((state_val_29416 === (22))){
var inst_29374 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29375 = figwheel.client.heads_up.append_message.call(null,inst_29374);
var state_29415__$1 = state_29415;
var statearr_29430_29476 = state_29415__$1;
(statearr_29430_29476[(2)] = inst_29375);

(statearr_29430_29476[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29416 === (36))){
var inst_29401 = (state_29415[(2)]);
var state_29415__$1 = state_29415;
var statearr_29431_29477 = state_29415__$1;
(statearr_29431_29477[(2)] = inst_29401);

(statearr_29431_29477[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29416 === (29))){
var inst_29385 = (state_29415[(2)]);
var state_29415__$1 = state_29415;
var statearr_29432_29478 = state_29415__$1;
(statearr_29432_29478[(2)] = inst_29385);

(statearr_29432_29478[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29416 === (6))){
var inst_29334 = (state_29415[(7)]);
var state_29415__$1 = state_29415;
var statearr_29433_29479 = state_29415__$1;
(statearr_29433_29479[(2)] = inst_29334);

(statearr_29433_29479[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29416 === (28))){
var inst_29381 = (state_29415[(2)]);
var inst_29382 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29383 = figwheel.client.heads_up.display_warning.call(null,inst_29382);
var state_29415__$1 = (function (){var statearr_29434 = state_29415;
(statearr_29434[(8)] = inst_29381);

return statearr_29434;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29415__$1,(29),inst_29383);
} else {
if((state_val_29416 === (25))){
var inst_29379 = figwheel.client.heads_up.clear.call(null);
var state_29415__$1 = state_29415;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29415__$1,(28),inst_29379);
} else {
if((state_val_29416 === (34))){
var inst_29396 = figwheel.client.heads_up.flash_loaded.call(null);
var state_29415__$1 = state_29415;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29415__$1,(37),inst_29396);
} else {
if((state_val_29416 === (17))){
var inst_29361 = (state_29415[(2)]);
var state_29415__$1 = state_29415;
var statearr_29435_29480 = state_29415__$1;
(statearr_29435_29480[(2)] = inst_29361);

(statearr_29435_29480[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29416 === (3))){
var inst_29351 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_29415__$1 = state_29415;
if(cljs.core.truth_(inst_29351)){
var statearr_29436_29481 = state_29415__$1;
(statearr_29436_29481[(1)] = (13));

} else {
var statearr_29437_29482 = state_29415__$1;
(statearr_29437_29482[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29416 === (12))){
var inst_29347 = (state_29415[(2)]);
var state_29415__$1 = state_29415;
var statearr_29438_29483 = state_29415__$1;
(statearr_29438_29483[(2)] = inst_29347);

(statearr_29438_29483[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29416 === (2))){
var inst_29334 = (state_29415[(7)]);
var inst_29334__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_29415__$1 = (function (){var statearr_29439 = state_29415;
(statearr_29439[(7)] = inst_29334__$1);

return statearr_29439;
})();
if(cljs.core.truth_(inst_29334__$1)){
var statearr_29440_29484 = state_29415__$1;
(statearr_29440_29484[(1)] = (5));

} else {
var statearr_29441_29485 = state_29415__$1;
(statearr_29441_29485[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29416 === (23))){
var inst_29377 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_29415__$1 = state_29415;
if(cljs.core.truth_(inst_29377)){
var statearr_29442_29486 = state_29415__$1;
(statearr_29442_29486[(1)] = (25));

} else {
var statearr_29443_29487 = state_29415__$1;
(statearr_29443_29487[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29416 === (35))){
var state_29415__$1 = state_29415;
var statearr_29444_29488 = state_29415__$1;
(statearr_29444_29488[(2)] = null);

(statearr_29444_29488[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29416 === (19))){
var inst_29372 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_29415__$1 = state_29415;
if(cljs.core.truth_(inst_29372)){
var statearr_29445_29489 = state_29415__$1;
(statearr_29445_29489[(1)] = (22));

} else {
var statearr_29446_29490 = state_29415__$1;
(statearr_29446_29490[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29416 === (11))){
var inst_29343 = (state_29415[(2)]);
var state_29415__$1 = state_29415;
var statearr_29447_29491 = state_29415__$1;
(statearr_29447_29491[(2)] = inst_29343);

(statearr_29447_29491[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29416 === (9))){
var inst_29345 = figwheel.client.heads_up.clear.call(null);
var state_29415__$1 = state_29415;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29415__$1,(12),inst_29345);
} else {
if((state_val_29416 === (5))){
var inst_29336 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_29415__$1 = state_29415;
var statearr_29448_29492 = state_29415__$1;
(statearr_29448_29492[(2)] = inst_29336);

(statearr_29448_29492[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29416 === (14))){
var inst_29363 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_29415__$1 = state_29415;
if(cljs.core.truth_(inst_29363)){
var statearr_29449_29493 = state_29415__$1;
(statearr_29449_29493[(1)] = (18));

} else {
var statearr_29450_29494 = state_29415__$1;
(statearr_29450_29494[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29416 === (26))){
var inst_29387 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_29415__$1 = state_29415;
if(cljs.core.truth_(inst_29387)){
var statearr_29451_29495 = state_29415__$1;
(statearr_29451_29495[(1)] = (30));

} else {
var statearr_29452_29496 = state_29415__$1;
(statearr_29452_29496[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29416 === (16))){
var inst_29355 = (state_29415[(2)]);
var inst_29356 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29357 = figwheel.client.format_messages.call(null,inst_29356);
var inst_29358 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29359 = figwheel.client.heads_up.display_error.call(null,inst_29357,inst_29358);
var state_29415__$1 = (function (){var statearr_29453 = state_29415;
(statearr_29453[(9)] = inst_29355);

return statearr_29453;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29415__$1,(17),inst_29359);
} else {
if((state_val_29416 === (30))){
var inst_29389 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29390 = figwheel.client.heads_up.display_warning.call(null,inst_29389);
var state_29415__$1 = state_29415;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29415__$1,(33),inst_29390);
} else {
if((state_val_29416 === (10))){
var inst_29349 = (state_29415[(2)]);
var state_29415__$1 = state_29415;
var statearr_29454_29497 = state_29415__$1;
(statearr_29454_29497[(2)] = inst_29349);

(statearr_29454_29497[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29416 === (18))){
var inst_29365 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29366 = figwheel.client.format_messages.call(null,inst_29365);
var inst_29367 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29368 = figwheel.client.heads_up.display_error.call(null,inst_29366,inst_29367);
var state_29415__$1 = state_29415;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29415__$1,(21),inst_29368);
} else {
if((state_val_29416 === (37))){
var inst_29398 = (state_29415[(2)]);
var state_29415__$1 = state_29415;
var statearr_29455_29498 = state_29415__$1;
(statearr_29455_29498[(2)] = inst_29398);

(statearr_29455_29498[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29416 === (8))){
var inst_29341 = figwheel.client.heads_up.flash_loaded.call(null);
var state_29415__$1 = state_29415;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29415__$1,(11),inst_29341);
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
});})(c__24640__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__24526__auto__,c__24640__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24527__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24527__auto____0 = (function (){
var statearr_29459 = [null,null,null,null,null,null,null,null,null,null];
(statearr_29459[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24527__auto__);

(statearr_29459[(1)] = (1));

return statearr_29459;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24527__auto____1 = (function (state_29415){
while(true){
var ret_value__24528__auto__ = (function (){try{while(true){
var result__24529__auto__ = switch__24526__auto__.call(null,state_29415);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24529__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24529__auto__;
}
break;
}
}catch (e29460){if((e29460 instanceof Object)){
var ex__24530__auto__ = e29460;
var statearr_29461_29499 = state_29415;
(statearr_29461_29499[(5)] = ex__24530__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29415);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29460;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29500 = state_29415;
state_29415 = G__29500;
continue;
} else {
return ret_value__24528__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24527__auto__ = function(state_29415){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24527__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24527__auto____1.call(this,state_29415);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24527__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24527__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24527__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24527__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24527__auto__;
})()
;})(switch__24526__auto__,c__24640__auto__,msg_hist,msg_names,msg))
})();
var state__24642__auto__ = (function (){var statearr_29462 = f__24641__auto__.call(null);
(statearr_29462[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24640__auto__);

return statearr_29462;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24642__auto__);
});})(c__24640__auto__,msg_hist,msg_names,msg))
);

return c__24640__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__24640__auto___29563 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24640__auto___29563,ch){
return (function (){
var f__24641__auto__ = (function (){var switch__24526__auto__ = ((function (c__24640__auto___29563,ch){
return (function (state_29546){
var state_val_29547 = (state_29546[(1)]);
if((state_val_29547 === (1))){
var state_29546__$1 = state_29546;
var statearr_29548_29564 = state_29546__$1;
(statearr_29548_29564[(2)] = null);

(statearr_29548_29564[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29547 === (2))){
var state_29546__$1 = state_29546;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29546__$1,(4),ch);
} else {
if((state_val_29547 === (3))){
var inst_29544 = (state_29546[(2)]);
var state_29546__$1 = state_29546;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29546__$1,inst_29544);
} else {
if((state_val_29547 === (4))){
var inst_29534 = (state_29546[(7)]);
var inst_29534__$1 = (state_29546[(2)]);
var state_29546__$1 = (function (){var statearr_29549 = state_29546;
(statearr_29549[(7)] = inst_29534__$1);

return statearr_29549;
})();
if(cljs.core.truth_(inst_29534__$1)){
var statearr_29550_29565 = state_29546__$1;
(statearr_29550_29565[(1)] = (5));

} else {
var statearr_29551_29566 = state_29546__$1;
(statearr_29551_29566[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29547 === (5))){
var inst_29534 = (state_29546[(7)]);
var inst_29536 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_29534);
var state_29546__$1 = state_29546;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29546__$1,(8),inst_29536);
} else {
if((state_val_29547 === (6))){
var state_29546__$1 = state_29546;
var statearr_29552_29567 = state_29546__$1;
(statearr_29552_29567[(2)] = null);

(statearr_29552_29567[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29547 === (7))){
var inst_29542 = (state_29546[(2)]);
var state_29546__$1 = state_29546;
var statearr_29553_29568 = state_29546__$1;
(statearr_29553_29568[(2)] = inst_29542);

(statearr_29553_29568[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29547 === (8))){
var inst_29538 = (state_29546[(2)]);
var state_29546__$1 = (function (){var statearr_29554 = state_29546;
(statearr_29554[(8)] = inst_29538);

return statearr_29554;
})();
var statearr_29555_29569 = state_29546__$1;
(statearr_29555_29569[(2)] = null);

(statearr_29555_29569[(1)] = (2));


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
});})(c__24640__auto___29563,ch))
;
return ((function (switch__24526__auto__,c__24640__auto___29563,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__24527__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__24527__auto____0 = (function (){
var statearr_29559 = [null,null,null,null,null,null,null,null,null];
(statearr_29559[(0)] = figwheel$client$heads_up_plugin_$_state_machine__24527__auto__);

(statearr_29559[(1)] = (1));

return statearr_29559;
});
var figwheel$client$heads_up_plugin_$_state_machine__24527__auto____1 = (function (state_29546){
while(true){
var ret_value__24528__auto__ = (function (){try{while(true){
var result__24529__auto__ = switch__24526__auto__.call(null,state_29546);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24529__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24529__auto__;
}
break;
}
}catch (e29560){if((e29560 instanceof Object)){
var ex__24530__auto__ = e29560;
var statearr_29561_29570 = state_29546;
(statearr_29561_29570[(5)] = ex__24530__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29546);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29560;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29571 = state_29546;
state_29546 = G__29571;
continue;
} else {
return ret_value__24528__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__24527__auto__ = function(state_29546){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__24527__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__24527__auto____1.call(this,state_29546);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__24527__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__24527__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__24527__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__24527__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__24527__auto__;
})()
;})(switch__24526__auto__,c__24640__auto___29563,ch))
})();
var state__24642__auto__ = (function (){var statearr_29562 = f__24641__auto__.call(null);
(statearr_29562[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24640__auto___29563);

return statearr_29562;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24642__auto__);
});})(c__24640__auto___29563,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__24640__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24640__auto__){
return (function (){
var f__24641__auto__ = (function (){var switch__24526__auto__ = ((function (c__24640__auto__){
return (function (state_29592){
var state_val_29593 = (state_29592[(1)]);
if((state_val_29593 === (1))){
var inst_29587 = cljs.core.async.timeout.call(null,(3000));
var state_29592__$1 = state_29592;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29592__$1,(2),inst_29587);
} else {
if((state_val_29593 === (2))){
var inst_29589 = (state_29592[(2)]);
var inst_29590 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_29592__$1 = (function (){var statearr_29594 = state_29592;
(statearr_29594[(7)] = inst_29589);

return statearr_29594;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29592__$1,inst_29590);
} else {
return null;
}
}
});})(c__24640__auto__))
;
return ((function (switch__24526__auto__,c__24640__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__24527__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__24527__auto____0 = (function (){
var statearr_29598 = [null,null,null,null,null,null,null,null];
(statearr_29598[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__24527__auto__);

(statearr_29598[(1)] = (1));

return statearr_29598;
});
var figwheel$client$enforce_project_plugin_$_state_machine__24527__auto____1 = (function (state_29592){
while(true){
var ret_value__24528__auto__ = (function (){try{while(true){
var result__24529__auto__ = switch__24526__auto__.call(null,state_29592);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24529__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24529__auto__;
}
break;
}
}catch (e29599){if((e29599 instanceof Object)){
var ex__24530__auto__ = e29599;
var statearr_29600_29602 = state_29592;
(statearr_29600_29602[(5)] = ex__24530__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29592);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29599;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24528__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29603 = state_29592;
state_29592 = G__29603;
continue;
} else {
return ret_value__24528__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__24527__auto__ = function(state_29592){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__24527__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__24527__auto____1.call(this,state_29592);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__24527__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__24527__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__24527__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__24527__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__24527__auto__;
})()
;})(switch__24526__auto__,c__24640__auto__))
})();
var state__24642__auto__ = (function (){var statearr_29601 = f__24641__auto__.call(null);
(statearr_29601[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24640__auto__);

return statearr_29601;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24642__auto__);
});})(c__24640__auto__))
);

return c__24640__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__29604){
var map__29611 = p__29604;
var map__29611__$1 = ((((!((map__29611 == null)))?((((map__29611.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29611.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29611):map__29611);
var ed = map__29611__$1;
var formatted_exception = cljs.core.get.call(null,map__29611__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__29611__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__29611__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__29613_29617 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__29614_29618 = null;
var count__29615_29619 = (0);
var i__29616_29620 = (0);
while(true){
if((i__29616_29620 < count__29615_29619)){
var msg_29621 = cljs.core._nth.call(null,chunk__29614_29618,i__29616_29620);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_29621);

var G__29622 = seq__29613_29617;
var G__29623 = chunk__29614_29618;
var G__29624 = count__29615_29619;
var G__29625 = (i__29616_29620 + (1));
seq__29613_29617 = G__29622;
chunk__29614_29618 = G__29623;
count__29615_29619 = G__29624;
i__29616_29620 = G__29625;
continue;
} else {
var temp__6144__auto___29626 = cljs.core.seq.call(null,seq__29613_29617);
if(temp__6144__auto___29626){
var seq__29613_29627__$1 = temp__6144__auto___29626;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29613_29627__$1)){
var c__20650__auto___29628 = cljs.core.chunk_first.call(null,seq__29613_29627__$1);
var G__29629 = cljs.core.chunk_rest.call(null,seq__29613_29627__$1);
var G__29630 = c__20650__auto___29628;
var G__29631 = cljs.core.count.call(null,c__20650__auto___29628);
var G__29632 = (0);
seq__29613_29617 = G__29629;
chunk__29614_29618 = G__29630;
count__29615_29619 = G__29631;
i__29616_29620 = G__29632;
continue;
} else {
var msg_29633 = cljs.core.first.call(null,seq__29613_29627__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_29633);

var G__29634 = cljs.core.next.call(null,seq__29613_29627__$1);
var G__29635 = null;
var G__29636 = (0);
var G__29637 = (0);
seq__29613_29617 = G__29634;
chunk__29614_29618 = G__29635;
count__29615_29619 = G__29636;
i__29616_29620 = G__29637;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__29638){
var map__29641 = p__29638;
var map__29641__$1 = ((((!((map__29641 == null)))?((((map__29641.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29641.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29641):map__29641);
var w = map__29641__$1;
var message = cljs.core.get.call(null,map__29641__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__19735__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__19735__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__19735__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__29649 = cljs.core.seq.call(null,plugins);
var chunk__29650 = null;
var count__29651 = (0);
var i__29652 = (0);
while(true){
if((i__29652 < count__29651)){
var vec__29653 = cljs.core._nth.call(null,chunk__29650,i__29652);
var k = cljs.core.nth.call(null,vec__29653,(0),null);
var plugin = cljs.core.nth.call(null,vec__29653,(1),null);
if(cljs.core.truth_(plugin)){
var pl_29655 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__29649,chunk__29650,count__29651,i__29652,pl_29655,vec__29653,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_29655.call(null,msg_hist);
});})(seq__29649,chunk__29650,count__29651,i__29652,pl_29655,vec__29653,k,plugin))
);
} else {
}

var G__29656 = seq__29649;
var G__29657 = chunk__29650;
var G__29658 = count__29651;
var G__29659 = (i__29652 + (1));
seq__29649 = G__29656;
chunk__29650 = G__29657;
count__29651 = G__29658;
i__29652 = G__29659;
continue;
} else {
var temp__6144__auto__ = cljs.core.seq.call(null,seq__29649);
if(temp__6144__auto__){
var seq__29649__$1 = temp__6144__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29649__$1)){
var c__20650__auto__ = cljs.core.chunk_first.call(null,seq__29649__$1);
var G__29660 = cljs.core.chunk_rest.call(null,seq__29649__$1);
var G__29661 = c__20650__auto__;
var G__29662 = cljs.core.count.call(null,c__20650__auto__);
var G__29663 = (0);
seq__29649 = G__29660;
chunk__29650 = G__29661;
count__29651 = G__29662;
i__29652 = G__29663;
continue;
} else {
var vec__29654 = cljs.core.first.call(null,seq__29649__$1);
var k = cljs.core.nth.call(null,vec__29654,(0),null);
var plugin = cljs.core.nth.call(null,vec__29654,(1),null);
if(cljs.core.truth_(plugin)){
var pl_29664 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__29649,chunk__29650,count__29651,i__29652,pl_29664,vec__29654,k,plugin,seq__29649__$1,temp__6144__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_29664.call(null,msg_hist);
});})(seq__29649,chunk__29650,count__29651,i__29652,pl_29664,vec__29654,k,plugin,seq__29649__$1,temp__6144__auto__))
);
} else {
}

var G__29665 = cljs.core.next.call(null,seq__29649__$1);
var G__29666 = null;
var G__29667 = (0);
var G__29668 = (0);
seq__29649 = G__29665;
chunk__29650 = G__29666;
count__29651 = G__29667;
i__29652 = G__29668;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args29669 = [];
var len__20930__auto___29672 = arguments.length;
var i__20931__auto___29673 = (0);
while(true){
if((i__20931__auto___29673 < len__20930__auto___29672)){
args29669.push((arguments[i__20931__auto___29673]));

var G__29674 = (i__20931__auto___29673 + (1));
i__20931__auto___29673 = G__29674;
continue;
} else {
}
break;
}

var G__29671 = args29669.length;
switch (G__29671) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29669.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__20937__auto__ = [];
var len__20930__auto___29680 = arguments.length;
var i__20931__auto___29681 = (0);
while(true){
if((i__20931__auto___29681 < len__20930__auto___29680)){
args__20937__auto__.push((arguments[i__20931__auto___29681]));

var G__29682 = (i__20931__auto___29681 + (1));
i__20931__auto___29681 = G__29682;
continue;
} else {
}
break;
}

var argseq__20938__auto__ = ((((0) < args__20937__auto__.length))?(new cljs.core.IndexedSeq(args__20937__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__20938__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__29677){
var map__29678 = p__29677;
var map__29678__$1 = ((((!((map__29678 == null)))?((((map__29678.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29678.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29678):map__29678);
var opts = map__29678__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq29676){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29676));
});

//# sourceMappingURL=client.js.map?rel=1513106862395