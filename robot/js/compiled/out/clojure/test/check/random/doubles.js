// Compiled by ClojureScript 1.9.14 {}
goog.provide('clojure.test.check.random.doubles');
goog.require('cljs.core');
goog.require('clojure.test.check.random.longs');
clojure.test.check.random.doubles.double_unit = (function (){var i = (53);
var x = (1);
while(true){
if((i === (0))){
return x;
} else {
var G__21900 = (i - (1));
var G__21901 = (x / (2));
i = G__21900;
x = G__21901;
continue;
}
break;
}
})();
clojure.test.check.random.doubles.big_double_unit = (clojure.test.check.random.doubles.double_unit * (4294967296));
/**
 * Given a uniformly distributed random long, returns a uniformly
 *   distributed double between 0.0 (inclusive) and 1.0 (exclusive).
 */
clojure.test.check.random.doubles.rand_long__GT_rand_double = (function clojure$test$check$random$doubles$rand_long__GT_rand_double(long$){
var x = clojure.test.check.random.longs.unsigned_bit_shift_right.call(null,long$,(11));
var low_bits = x.getLowBitsUnsigned();
var high_bits = x.getHighBits();
return ((clojure.test.check.random.doubles.double_unit * low_bits) + (clojure.test.check.random.doubles.big_double_unit * high_bits));
});

//# sourceMappingURL=doubles.js.map?rel=1513106853626