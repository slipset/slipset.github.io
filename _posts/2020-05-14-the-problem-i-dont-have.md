So, [Einar Høst](https://twitter.com/einarwh) has been a bit [frustrated](https://einarwh.wordpress.com/2020/05/08/on-the-complexity-of-json-serialization/)
about JSON serialization lately. In fact, he's been [more](https://einarwh.wordpress.com/2020/05/13/proper-json-and-property-bags/) than a bit frustrated.

[I've](https://twitter.com/slipset/status/1258827099860860928?s=20) made some fun of these problems, because they seem like problems I haven't had since the last time I programmed in Java.

But instead of just making fun of this on twitter, how about looking at how we deal with the problem of JSON serialization
in the Clojure app we have at work.

As Einar states in his posts, the Clojure community has understood that JSON (de)serialization is a bounded problem, which is a nice way 
to say that it's an understood problem with an understood complexity, and you should be able to solve the problem one and for all.

Another example of a bounded, solved problem would be [lapack](http://www.netlib.org/lapack/). Anyways.

In the Clojure universe, we have, I'd say three contenders for JSON (de)serialization:

### [clojure.data.json](https://github.com/clojure/data.json). 

It offers exactly two functions:

```clojure
(json/write-str {:a 1 :b 2})
;;=> "{\"a\":1,\"b\":2}"

(json/read-str "{\"a\":1,\"b\":2}")
;;=> {"a" 1, "b" 2}
```
At first glance, there is no way to let the daemon that Einar talks about free, but if we read further we see that we can pass both a
`:value-fn` and a `:key-fn` to do transformation on the data as it is worked on. So, the configuration of this JSON library would be to 
write these two functions. In clojure-land, we tend to like `keywords` for keys, so it's normal to call `json/read-str` like this:

```clojure
(defn my-value-reader [key value]
  (if (= key :date)
    (java.sql.Date/valueOf value)
    value))

(json/read-str "{\"number\":42,\"date\":\"2012-06-02\"}"
               :value-fn my-value-reader
               :key-fn keyword) 
;;=> {:number 42, :date #inst "2012-06-02T04:00:00.000-00:00"}
```
Note that in these examples, we're only letting the daemon do simple type coercions. It is not allowed to transform the data. We'll get to that later.

### [cheshire](https://github.com/dakrone/cheshire)
Basically, the top-level interface is the same, but with some more bells and whistles (and it's apparently faster, since it's built on [Jackson](https://github.com/FasterXML/jackson))
This is what we use at work.

### [jsonista](https://github.com/metosin/jsonista)
jsonista is the new kid on the block written for speed by [Metosin](https://www.metosin.fi)
Again, we see the same toplevel interface, as `clojure.data.json`.

So I'd like to argue that in Clojure land, the JSON libs don't care too much about your domain model, they care about 
taking a string of JSON data and transforming it (fast) to a Clojure data-structure, possibly with some coercions.

# A shopping cart
So in [his second post](https://einarwh.wordpress.com/2020/05/13/proper-json-and-property-bags/) has an example going with a shopping cart.
He models a shopping cart in JSON the following way:

1) The empty cart:
```json
{"_state": "empty"}
```
2) The active cart:
```json
{"_state": "active",
 "unpaidItems": [{"id": "1bcd",
                  "title": "gizmo"},
                 {"id": "3cdf",
                  "title": "widget"}]}
```
3) The paid cart
```json
{"_state": "paid",
 "paidItems": [{"id": "1bcd",
                "title": "gizmo"},
               {"id" : "3cdf",
                "title": "widget",
                "description": "A very useful item"}],
 "payment": {"amount": 123.5,
             "currency": "USD"},
 "timestamp": "2020-04-11T10:11:33.514+02:00"}
```                 
  
This looks reasonable to me, it's all just data. Then there's the "Explicit JSON model" chapter where things fall apart for me,
because, in order to produce this json, we're forced to jump through a whole bunch of boiler plate. Let's see how we'd do this in Clojure:
Firstly, we have data literals, so the above json is almost valid Clojure, we just need to remove the colons:
```clojure
(def paid-cart {"_state" "paid",
                "paidItems" [{"id" "1bcd",
                               "title" "gizmo"},
                              {"id"  "3cdf",
                               "title" "widget",
                               "description" "A very useful item"}],
                "payment" {"amount" 123.5,
                            "currency" "USD"},
                "timestamp" "2020-04-11T10:11:33.514+02:00"})
```
Now, as mentioned above, we tend to prefer `keywords` over `strings` for keys, also we don't need the pesky commas:
```clojure
(def paid-cart {:_state "paid"
                :paidItems [{:id "1bcd"
                             :title "gizmo"}
                            {:id  "3cdf"
                             :title "widget"
                             :description "A very useful item"}]
                :payment {:amount 123.5
                          :currency "USD"}
                :timestamp "2020-04-11T10:11:33.514+02:00"})
```
So serialization (I'll be using Cheshire), becomes
```clojure
(json/encode paid-cart)
```
Deserialization, you ask?
```clojure
(def json "{\"_state\":\"paid\",\"paidItems\":[{\"id\":\"1bcd\",\"title\":\"gizmo\"},{\"id\":\"3cdf\",\"title\":\"widget\",\"description\":\"A very useful item\"}],\"payment\":{\"amount\":123.5,\"currency\":\"USD\"},\"timestamp\":\"2020-04-11T10:11:33.514+02:00\"}")
(def paid-cart (json/decode json true)) ; I'll let the daemon know I want to keywordize keys.

(def first-item-title (get-in paid-cart [:paidItems 0 :title]))
(def payment-currency (get-in paid-cart [:payment :currency]))
```
So as in Einars example, our deserialization of json got us data back, but unlike Einars example, Clojure is made for working with
data, so there is no pesky 
```csharp
var firstItemTitleToken = paidCartDeserialized["paidItems"][0]["title"];
var firstItemTitle = ((JValue) firstItemTitleToken).Value;
```
to get the stuff we're interested in.

So this is what Einar called a explicit json model. Thing is that we got the next thing basically for free, as we now also have the
explicit DTO model, since we just work with data, we don't need DTOs. There is so much bloat and boilerplate in the explicit DTO model section
that I cannot even bother to see if there is any value there.

The last part is what Einar has called "Dictionary", it's basically what we have above, again without a bunch of boilerplate.

# Validation
One thing that I didn't see in Einars post is any kind of validation (apart maybe from some stuff that blows up at runtime even though he uses static types).
Let's have a look at how we would make some validation for this in Clojure. For this, we'll use [clojure.spec](https://clojure.org/guides/spec):

I won't go into spec here, but I'll just spec the data-model that we're working with:
```clojure
(s/def ::_state #{"empty", "active", "paid"}) ;; We model the descriminator as a set of values
(s/def ::id string?) ;; this could be further tightened by a stronger predicate, we don't allow the complete works of
                     ;; Shakespear as an id.
(s/def ::title string?)
(s/def ::description string?)

(s/def ::item (s/keys :req-un [::id ::title]  ;; id and title are required keys
                      :opt-un [::description])) ;; description is optional

(s/def ::items (s/coll-of ::item))
(s/def ::paidItems (s/coll-of ::item))

(s/def ::amount (s/or :zero zero? :positive pos?)) 
(s/def ::currency #{"USD"})

(s/def ::payment (s/keys :req-un [::amount ::currency]))

(s/def ::timestamp inst?)

(s/def ::empty-cart (s/keys :req-un [::_state]))
(s/def ::active-cart (s/keys :req-un [::_state ::items]))
(s/def ::paid-cart (s/keys :req-un [::_state ::paidItems ::payment ::timestamp]))

(s/def ::shopping-cart (s/or :empty ::empty-cart :active ::active-cart :paid ::paid-cart))
```
This is a simplified validation, since I'm not checking that the state is correct for the various types of carts, also, we have another problem, 
the paid cart won't validate, sine we've said that the timestamp has to be an `inst?`, ie a real timestamp, not just a string.
We could wake the daemon and do that as part of the json-parsing, but I generally prefer to take the speed-hit and do it manually:

```clojure
(defn coerce-shopping-cart [cart]
  (my-util/update-some cart :timestamp to-inst))
```
Spec gives us some nice tools:
```clojure
(s/valid? ::shopping-cart {:_state "empty"})
;; => true
```
What kind of cart is it?
```clojure
(s/conform ::shopping-cart {:_state "empty"})
;; => [:empty {:_state "empty"}]
```
Clojure never had a good story on error messages, but still:
```clojure
user> (s/explain ::shopping-cart {:_state "lol"})
"lol" - failed: #{"paid" "empty" "active"} in: [:_state] at: [:empty :_state] spec: :user/_state
"lol" - failed: #{"paid" "empty" "active"} in: [:_state] at: [:active :_state] spec: :user/_state
"lol" - failed: #{"paid" "empty" "active"} in: [:_state] at: [:paid :_state] spec: :user/_state
{:_state "lol"} - failed: (contains? % :items) at: [:active] spec: :user/active-cart
{:_state "lol"} - failed: (contains? % :paidItems) at: [:paid] spec: :user/paid-cart
{:_state "lol"} - failed: (contains? % :payment) at: [:paid] spec: :user/paid-cart
{:_state "lol"} - failed: (contains? % :timestamp) at: [:paid] spec: :user/paid-cart
;; => nil
```
It would be great to have a cart:
```clojure
 (gen/generate (s/gen ::paid-cart))
;; => {:_state "paid",
 :paidItems
 [{:description "GyvuaWY4XLo46p5cbOH4E3",
   :id "",
   :title "6a5H39kSldjL4Y9OH54te"}
  {:id "RE6jZ71sG2A8RhUJBgz2A",
   :title "z95292hKUVrme880y7TYOB3Y6K02o"}
  {:description "z2A4s1u8PY8B1dR225nG80",
   :id "rdaMSp5qi",
   :title "MyTMI2KXe036H6y1lG7KgGW80"}
  {:id "R4JlD3324500q7tWoGX5FCP2Pi84", :title "ed"}
  {:id "24i1Ft25z0Vcwx39Zt19JQOm",
   :title "CN3J2X1Q9laCNqiM56w5Qu98h"}
  {:description "e9E7o6wID69252iHuq",
   :id "xMxykN9",
   :title "xlgTk596KtKqfk14fZ"}
  {:id "1vLq4", :title "6nX8P3rJ"}
  {:id "z1IcRi13w9KfCFo5vrsN7QF0b", :title "4i608Mrli6gTO12u"}
  {:description "rIZ1Gb7WRha6k4A7",
   :id "i1E7jh4SL62E03KAxw",
   :title "46ZTrxJ5NVUd1sP3Ov4l4qVhs"}
  {:id "hDz8aLoTLedEl8rSiPOd", :title "513NfwaT6bXNGrRsFM20"}
  {:id "KBpUt8ni0O82668e5BSk", :title "hc1S8kR0zn05OHZ"}
  {:description "ZXQozSg7cF1c9WRs50F4x",
   :id "SNe39R8dmHlXalxR8kKj3BVtthV6b",
   :title "890HUMb3J3qsq18N7f46905QR"}
  {:description "0KOO0",
   :id "365k3UX69mlrsRp",
   :title "9bCcS688TbYu1r;; => R1"}
  {:id "X89JqN8WA2mf8x6", :title "BdQK3hXD1lEqJVp5mtqD"}
  {:description "Uc3614Es3VzLe1", :id "C56Z4h481", :title "2H920Z"}
  {:description "M7CS3886ASPY9HX30IZp4K7Vk8",
   :id "WqeQc1vF1wV8asa18edG15joaGnEW",
   :title "UgRa"}
  {:description "oS439d98t",
   :id "BQMQBpG1BP7SX7GzG06sf7p3pQuFeN",
   :title "hGq4Sgdeaq0G17"}
  {:id "zgbx2v6D03", :title "3K42M5G0ix870Z2q8JhI8jv4Km"}
  {:id "pz65Sy46YW22809p7", :title "r66BqkjEQ9dFLE"}
  {:id "1o0viZrbl4", :title "sdp138TYcWJ4eQe4"}],
 :payment {:amount 0, :currency "USD"},
 :timestamp #inst "1969-12-31T23:59:04.657-00:00"}
 ```
So now we can write something like:
```clojure
(let [cart (-> json (json/decode true) (coerce-shopping-cart))]
   (when-not (s/valid ::shopping-cart)
     (throw (Exception. (str "Invalid cart" (s/explain ::shopping-cart cart))))
   cart)
```   
     
# Summary

Einars post was rather long, and as with most verbose things, both prose and code, the important bits might be lost in the noise, so there might have been finer points that I have missed.
But I didn't miss the question at the end. So I think that you should treat data as data, and be done with it.

I'll leave you with a tweet from [David Nolen](https://twitter.com/swannodette), the lead developer for Clojurescript:
> Potential isn’t about doing N things nor abstractions. It’s about doing *ONE* thing and doing it so simply that adding another thing is trivial. In some circles, aka "writing some functions”.

