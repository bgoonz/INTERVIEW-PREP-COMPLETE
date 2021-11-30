(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var m;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var ea=ca(this);function t(a,b){if(b)a:{for(var c=ea,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];if(!(f in c))break a;c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&ba(c,d,{configurable:!0,writable:!0,value:f})}}
t("Symbol",function(a){function b(e){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c("jscomp_symbol_"+(e||"")+"_"+d++,e)}
function c(e,f){this.h=e;ba(this,"description",{configurable:!0,writable:!0,value:f})}
if(a)return a;c.prototype.toString=function(){return this.h};
var d=0;return b});
t("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=ea[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return fa(aa(this))}})}return a});
function fa(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function u(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
function ha(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c}
var ia="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ja=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);
e=ia(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}(),ka;
if("function"==typeof Object.setPrototypeOf)ka=Object.setPrototypeOf;else{var la;a:{var ma={a:!0},na={};try{na.__proto__=ma;la=na.a;break a}catch(a){}la=!1}ka=la?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var oa=ka;
function v(a,b){a.prototype=ia(b.prototype);a.prototype.constructor=a;if(oa)oa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.G=b.prototype}
function pa(){this.o=!1;this.i=null;this.m=void 0;this.h=1;this.C=this.l=0;this.j=null}
function qa(a){if(a.o)throw new TypeError("Generator is already running");a.o=!0}
pa.prototype.u=function(a){this.m=a};
function ra(a,b){a.j={wa:b,Ua:!0};a.h=a.l||a.C}
pa.prototype["return"]=function(a){this.j={"return":a};this.h=this.C};
function sa(a,b,c){a.h=c;return{value:b}}
function ta(a){a.l=0;var b=a.j.wa;a.j=null;return b}
function ua(a){this.h=new pa;this.i=a}
function va(a,b){qa(a.h);var c=a.h.i;if(c)return xa(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.h["return"]);
a.h["return"](b);return ya(a)}
function xa(a,b,c,d){try{var e=b.call(a.h.i,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.h.o=!1,e;var f=e.value}catch(g){return a.h.i=null,ra(a.h,g),ya(a)}a.h.i=null;d.call(a.h,f);return ya(a)}
function ya(a){for(;a.h.h;)try{var b=a.i(a.h);if(b)return a.h.o=!1,{value:b.value,done:!1}}catch(c){a.h.m=void 0,ra(a.h,c)}a.h.o=!1;if(a.h.j){b=a.h.j;a.h.j=null;if(b.Ua)throw b.wa;return{value:b["return"],done:!0}}return{value:void 0,done:!0}}
function za(a){this.next=function(b){qa(a.h);a.h.i?b=xa(a,a.h.i.next,b,a.h.u):(a.h.u(b),b=ya(a));return b};
this["throw"]=function(b){qa(a.h);a.h.i?b=xa(a,a.h.i["throw"],b,a.h.u):(ra(a.h,b),b=ya(a));return b};
this["return"]=function(b){return va(a,b)};
this[Symbol.iterator]=function(){return this}}
function Aa(a,b){var c=new za(new ua(b));oa&&a.prototype&&oa(c,a.prototype);return c}
t("Reflect",function(a){return a?a:{}});
t("Reflect.construct",function(){return ja});
t("Reflect.setPrototypeOf",function(a){return a?a:oa?function(b,c){try{return oa(b,c),!0}catch(d){return!1}}:null});
function Ba(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
t("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ba(this,b,"endsWith");b+="";void 0===c&&(c=d.length);for(var e=Math.max(0,Math.min(c|0,d.length)),f=b.length;0<f&&0<e;)if(d[--e]!=b[--f])return!1;return 0>=f}});
t("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ba(this,b,"startsWith");b+="";for(var e=d.length,f=b.length,g=Math.max(0,Math.min(c|0,d.length)),h=0;h<f&&g<e;)if(d[g++]!=b[h++])return!1;return h>=f}});
t("Object.setPrototypeOf",function(a){return a||oa});
function Ca(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var Da="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)Ca(d,e)&&(a[e]=d[e])}return a};
t("Object.assign",function(a){return a||Da});
t("Promise",function(a){function b(g){this.h=0;this.j=void 0;this.i=[];this.u=!1;var h=this.l();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.h=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.i=function(g){if(null==this.h){this.h=[];var h=this;this.j(function(){h.m()})}this.h.push(g)};
var e=ea.setTimeout;c.prototype.j=function(g){e(g,0)};
c.prototype.m=function(){for(;this.h&&this.h.length;){var g=this.h;this.h=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.l(l)}}}this.h=null};
c.prototype.l=function(g){this.j(function(){throw g;})};
b.prototype.l=function(){function g(l){return function(n){k||(k=!0,l.call(h,n))}}
var h=this,k=!1;return{resolve:g(this.I),reject:g(this.m)}};
b.prototype.I=function(g){if(g===this)this.m(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.R(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.H(g):this.o(g)}};
b.prototype.H=function(g){var h=void 0;try{h=g.then}catch(k){this.m(k);return}"function"==typeof h?this.S(h,g):this.o(g)};
b.prototype.m=function(g){this.C(2,g)};
b.prototype.o=function(g){this.C(1,g)};
b.prototype.C=function(g,h){if(0!=this.h)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.h);this.h=g;this.j=h;2===this.h&&this.J();this.B()};
b.prototype.J=function(){var g=this;e(function(){if(g.F()){var h=ea.console;"undefined"!==typeof h&&h.error(g.j)}},1)};
b.prototype.F=function(){if(this.u)return!1;var g=ea.CustomEvent,h=ea.Event,k=ea.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=ea.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.j;return k(g)};
b.prototype.B=function(){if(null!=this.i){for(var g=0;g<this.i.length;++g)f.i(this.i[g]);this.i=null}};
var f=new c;b.prototype.R=function(g){var h=this.l();g.fa(h.resolve,h.reject)};
b.prototype.S=function(g,h){var k=this.l();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(q,r){return"function"==typeof q?function(w){try{l(q(w))}catch(y){n(y)}}:r}
var l,n,p=new b(function(q,r){l=q;n=r});
this.fa(k(g,l),k(h,n));return p};
b.prototype["catch"]=function(g){return this.then(void 0,g)};
b.prototype.fa=function(g,h){function k(){switch(l.h){case 1:g(l.j);break;case 2:h(l.j);break;default:throw Error("Unexpected state: "+l.h);}}
var l=this;null==this.i?f.i(k):this.i.push(k);this.u=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=u(g),n=l.next();!n.done;n=l.next())d(n.value).fa(h,k)})};
b.all=function(g){var h=u(g),k=h.next();return k.done?d([]):new b(function(l,n){function p(w){return function(y){q[w]=y;r--;0==r&&l(q)}}
var q=[],r=0;do q.push(void 0),r++,d(k.value).fa(p(q.length-1),n),k=h.next();while(!k.done)})};
return b});
t("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
t("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length,f=c||0;for(0>f&&(f=Math.max(f+e,0));f<e;f++){var g=d[f];if(g===b||Object.is(g,b))return!0}return!1}});
t("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==Ba(this,b,"includes").indexOf(b,c||0)}});
t("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)Ca(b,d)&&c.push([d,b[d]]);return c}});
function Ea(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
t("Array.prototype.entries",function(a){return a?a:function(){return Ea(this,function(b,c){return[b,c]})}});
t("Array.prototype.keys",function(a){return a?a:function(){return Ea(this,function(b){return b})}});
t("Array.prototype.values",function(a){return a?a:function(){return Ea(this,function(b,c){return c})}});
t("WeakMap",function(a){function b(k){this.h=(h+=Math.random()+1).toString();if(k){k=u(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!Ca(k,g)){var l=new c;ba(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(n){if(n instanceof c)return n;Object.isExtensible(n)&&e(n);return l(n)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),n=new a([[k,2],[l,3]]);if(2!=n.get(k)||3!=n.get(l))return!1;n["delete"](k);n.set(l,4);return!n.has(k)&&4==n.get(l)}catch(p){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!Ca(k,g))throw Error("WeakMap key fail: "+k);k[g][this.h]=l;return this};
b.prototype.get=function(k){return d(k)&&Ca(k,g)?k[g][this.h]:void 0};
b.prototype.has=function(k){return d(k)&&Ca(k,g)&&Ca(k[g],this.h)};
b.prototype["delete"]=function(k){return d(k)&&Ca(k,g)&&Ca(k[g],this.h)?delete k[g][this.h]:!1};
return b});
t("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});
t("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h.h;return fa(function(){if(l){for(;l.head!=h.h;)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var n=h.i[l];if(n&&Ca(h.i,l))for(var p=0;p<n.length;p++){var q=n[p];if(k!==k&&q.key!==q.key||k===q.key)return{id:l,list:n,index:p,D:q}}return{id:l,list:n,index:-1,D:void 0}}
function e(h){this.i={};this.h=b();this.size=0;if(h){h=u(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(u([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),n=l.next();if(n.done||n.value[0]!=h||"s"!=n.value[1])return!1;n=l.next();return n.done||4!=n.value[0].x||"t"!=n.value[1]||!l.next().done?!1:!0}catch(p){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this.i[l.id]=[]);l.D?l.D.value=k:(l.D={next:this.h,previous:this.h.previous,head:this.h,key:h,value:k},l.list.push(l.D),this.h.previous.next=l.D,this.h.previous=l.D,this.size++);return this};
e.prototype["delete"]=function(h){h=d(this,h);return h.D&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.i[h.id],h.D.previous.next=h.D.next,h.D.next.previous=h.D.previous,h.D.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.i={};this.h=this.h.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).D};
e.prototype.get=function(h){return(h=d(this,h).D)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),n;!(n=l.next()).done;)n=n.value,h.call(k,n[1],n[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
t("Set",function(a){function b(c){this.h=new Map;if(c){c=u(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.h.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(u([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.h.set(c,c);this.size=this.h.size;return this};
b.prototype["delete"]=function(c){c=this.h["delete"](c);this.size=this.h.size;return c};
b.prototype.clear=function(){this.h.clear();this.size=0};
b.prototype.has=function(c){return this.h.has(c)};
b.prototype.entries=function(){return this.h.entries()};
b.prototype.values=function(){return this.h.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.h.forEach(function(f){return c.call(d,f,f,e)})};
return b});
t("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)Ca(b,d)&&c.push(b[d]);return c}});
var x=this||self;function z(a,b,c){a=a.split(".");c=c||x;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function Fa(a){if(a&&a!=x)return Ga(a.document);null===Ha&&(Ha=Ga(x.document));return Ha}
var Ia=/^[\w+/_-]+[=]{0,2}$/,Ha=null;function Ga(a){return(a=a.querySelector&&a.querySelector("script[nonce]"))&&(a=a.nonce||a.getAttribute("nonce"))&&Ia.test(a)?a:""}
function A(a,b){for(var c=a.split("."),d=b||x,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d}
function Ja(){}
function Ka(a){a.oa=void 0;a.getInstance=function(){return a.oa?a.oa:a.oa=new a}}
function La(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function Ma(a){var b=La(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function B(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Na(a){return Object.prototype.hasOwnProperty.call(a,Oa)&&a[Oa]||(a[Oa]=++Pa)}
var Oa="closure_uid_"+(1E9*Math.random()>>>0),Pa=0;function Qa(a,b,c){return a.call.apply(a.bind,arguments)}
function Ra(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function C(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?C=Qa:C=Ra;return C.apply(null,arguments)}
function Sa(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
function E(){return Date.now()}
function Ta(a,b){z(a,b,void 0)}
function F(a,b){function c(){}
c.prototype=b.prototype;a.G=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.tk=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function Ua(a){return a}
;function Va(a){if(Error.captureStackTrace)Error.captureStackTrace(this,Va);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
F(Va,Error);Va.prototype.name="CustomError";function Wa(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.j=!b&&/[?&]ae=1(&|$)/.test(a);this.l=!b&&/[?&]ae=2(&|$)/.test(a);if((this.h=/[?&]adurl=([^&]*)/.exec(a))&&this.h[1]){try{var c=decodeURIComponent(this.h[1])}catch(d){c=null}this.i=c}}
;function Xa(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var Ya=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},G=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Za=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f="string"===typeof a?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},$a=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e="string"===typeof a?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},ab=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
G(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function bb(a,b){a:{var c=a.length;for(var d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:"string"===typeof a?a.charAt(c):a[c]}
function cb(a,b){var c=Ya(a,b),d;(d=0<=c)&&Array.prototype.splice.call(a,c,1);return d}
function db(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function eb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Ma(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function fb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function gb(a){var b=hb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function ib(a){for(var b in a)return!1;return!0}
function jb(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function kb(){var a=H("PLAYER_VARS",{});return null!==a&&"privembed"in a?a.privembed:!1}
function lb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function mb(a){var b={},c;for(c in a)b[c]=a[c];return b}
function nb(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=nb(a[c]);return b}
var ob="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function pb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<ob.length;f++)c=ob[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var qb;function rb(){if(void 0===qb){var a=null,b=x.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:Ua,createScript:Ua,createScriptURL:Ua})}catch(c){x.console&&x.console.error(c.message)}qb=a}else qb=a}return qb}
;function sb(a,b){this.h=b===tb?a:""}
m=sb.prototype;m.U=!0;m.T=function(){return this.h.toString()};
m.na=!0;m.ka=function(){return 1};
m.toString=function(){return this.h+""};
function ub(a){if(a instanceof sb&&a.constructor===sb)return a.h;La(a);return"type_error:TrustedResourceUrl"}
var tb={};var vb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function wb(a,b){if(b)a=a.replace(xb,"&amp;").replace(yb,"&lt;").replace(zb,"&gt;").replace(Ab,"&quot;").replace(Bb,"&#39;").replace(Cb,"&#0;");else{if(!Db.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(xb,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(yb,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(zb,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(Ab,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(Bb,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(Cb,"&#0;"))}return a}
var xb=/&/g,yb=/</g,zb=/>/g,Ab=/"/g,Bb=/'/g,Cb=/\x00/g,Db=/[\x00&<>"']/;function Eb(a,b){return a<b?-1:a>b?1:0}
;function I(a,b){this.h=b===Fb?a:""}
m=I.prototype;m.U=!0;m.T=function(){return this.h.toString()};
m.na=!0;m.ka=function(){return 1};
m.toString=function(){return this.h.toString()};
function Gb(a){if(a instanceof I&&a.constructor===I)return a.h;La(a);return"type_error:SafeUrl"}
var Hb=/^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|font\/\w+|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|video\/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i,Ib=/^data:(.*);base64,[a-z0-9+\/]+=*$/i,Jb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function Kb(a){if(a instanceof I)return a;a="object"==typeof a&&a.U?a.T():String(a);Jb.test(a)||(a="about:invalid#zClosurez");return new I(a,Fb)}
var Fb={},Lb=new I("about:invalid#zClosurez",Fb);var Mb;a:{var Nb=x.navigator;if(Nb){var Ob=Nb.userAgent;if(Ob){Mb=Ob;break a}}Mb=""}function J(a){return-1!=Mb.indexOf(a)}
;function Pb(a,b,c){this.h=c===Qb?a:"";this.i=b}
m=Pb.prototype;m.na=!0;m.ka=function(){return this.i};
m.U=!0;m.T=function(){return this.h.toString()};
m.toString=function(){return this.h.toString()};
var Qb={};function Rb(a,b){var c=rb();c=c?c.createHTML(a):a;return new Pb(c,b,Qb)}
;function Sb(a,b){var c=b instanceof I?b:Kb(b);a.href=Gb(c)}
function Tb(a,b){a.src=ub(b);var c=Fa(a.ownerDocument&&a.ownerDocument.defaultView);c&&a.setAttribute("nonce",c)}
;function Ub(a){return a=wb(a,void 0)}
function Vb(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var Wb=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Xb(a){return a?decodeURI(a):a}
function Yb(a){return Xb(a.match(Wb)[3]||null)}
function Zb(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)Zb(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function $b(a){var b=[],c;for(c in a)Zb(c,a[c],b);return b.join("&")}
function ac(a,b){var c=$b(b);if(c){var d=a.indexOf("#");0>d&&(d=a.length);var e=a.indexOf("?");if(0>e||e>d){e=d;var f=""}else f=a.substring(e+1,d);d=[a.substr(0,e),f,a.substr(d)];e=d[1];d[1]=c?e?e+"&"+c:c:e;c=d[0]+(d[1]?"?"+d[1]:"")+d[2]}else c=a;return c}
var bc=/#|$/;function cc(a,b){var c=void 0;return new (c||(c=Promise))(function(d,e){function f(k){try{h(b.next(k))}catch(l){e(l)}}
function g(k){try{h(b["throw"](k))}catch(l){e(l)}}
function h(k){k.done?d(k.value):(new c(function(l){l(k.value)})).then(f,g)}
h((b=b.apply(a,void 0)).next())})}
;function dc(){return J("iPhone")&&!J("iPod")&&!J("iPad")}
;function ec(a){ec[" "](a);return a}
ec[" "]=Ja;var fc=J("Opera"),gc=J("Trident")||J("MSIE"),hc=J("Edge"),ic=J("Gecko")&&!(-1!=Mb.toLowerCase().indexOf("webkit")&&!J("Edge"))&&!(J("Trident")||J("MSIE"))&&!J("Edge"),jc=-1!=Mb.toLowerCase().indexOf("webkit")&&!J("Edge");function kc(){var a=x.document;return a?a.documentMode:void 0}
var lc;a:{var mc="",nc=function(){var a=Mb;if(ic)return/rv:([^\);]+)(\)|;)/.exec(a);if(hc)return/Edge\/([\d\.]+)/.exec(a);if(gc)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(jc)return/WebKit\/(\S+)/.exec(a);if(fc)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
nc&&(mc=nc?nc[1]:"");if(gc){var pc=kc();if(null!=pc&&pc>parseFloat(mc)){lc=String(pc);break a}}lc=mc}var qc=lc,rc={},sc;if(x.document&&gc){var tc=kc();sc=tc?tc:parseInt(qc,10)||void 0}else sc=void 0;var uc=sc;var vc=J("Firefox")||J("FxiOS"),wc=dc()||J("iPod"),xc=J("iPad"),yc=J("Safari")&&!((J("Chrome")||J("CriOS"))&&!J("Edge")||J("Coast")||J("Opera")||J("Edge")||J("Edg/")||J("OPR")||J("Firefox")||J("FxiOS")||J("Silk")||J("Android"))&&!(dc()||J("iPad")||J("iPod"));var zc={},Ac=null;
function Bc(a){var b=3;Ma(a);void 0===b&&(b=0);if(!Ac){Ac={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],e=0;5>e;e++){var f=c.concat(d[e].split(""));zc[e]=f;for(var g=0;g<f.length;g++){var h=f[g];void 0===Ac[h]&&(Ac[h]=g)}}}b=zc[b];c=[];for(d=0;d<a.length;d+=3){var k=a[d],l=(e=d+1<a.length)?a[d+1]:0;h=(f=d+2<a.length)?a[d+2]:0;g=k>>2;k=(k&3)<<4|l>>4;l=(l&15)<<2|h>>6;h&=63;f||(h=64,e||(l=64));c.push(b[g],b[k],b[l]||"",b[h]||"")}return c.join("")}
;var K=window;var Cc=!gc||9<=Number(uc);function Dc(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}
m=Dc.prototype;m.clone=function(){return new Dc(this.x,this.y)};
m.equals=function(a){return a instanceof Dc&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
m.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
m.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
m.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};function Ec(a,b){this.width=a;this.height=b}
m=Ec.prototype;m.clone=function(){return new Ec(this.width,this.height)};
m.aspectRatio=function(){return this.width/this.height};
m.isEmpty=function(){return!(this.width*this.height)};
m.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
m.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
m.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Fc(a){var b=document;return"string"===typeof a?b.getElementById(a):a}
function Gc(a,b){fb(b,function(c,d){c&&"object"==typeof c&&c.U&&(c=c.T());"style"==d?a.style.cssText=c:"class"==d?a.className=c:"for"==d?a.htmlFor=c:Hc.hasOwnProperty(d)?a.setAttribute(Hc[d],c):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,c):a[d]=c})}
var Hc={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};
function Ic(a,b,c){var d=arguments,e=document,f=String(d[0]),g=d[1];if(!Cc&&g&&(g.name||g.type)){f=["<",f];g.name&&f.push(' name="',Ub(g.name),'"');if(g.type){f.push(' type="',Ub(g.type),'"');var h={};pb(h,g);delete h.type;g=h}f.push(">");f=f.join("")}f=Jc(e,f);g&&("string"===typeof g?f.className=g:Array.isArray(g)?f.className=g.join(" "):Gc(f,g));2<d.length&&Kc(e,f,d);return f}
function Kc(a,b,c){function d(h){h&&b.appendChild("string"===typeof h?a.createTextNode(h):h)}
for(var e=2;e<c.length;e++){var f=c[e];if(!Ma(f)||B(f)&&0<f.nodeType)d(f);else{a:{if(f&&"number"==typeof f.length){if(B(f)){var g="function"==typeof f.item||"string"==typeof f.item;break a}if("function"===typeof f){g="function"==typeof f.item;break a}}g=!1}G(g?db(f):f,d)}}}
function Jc(a,b){b=String(b);"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}
function Lc(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function Mc(a){var b=Nc;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a.call(void 0,b[c],c,b)}
function Oc(){var a=[];Mc(function(b){a.push(b)});
return a}
var Nc={Bb:"allow-forms",Cb:"allow-modals",Db:"allow-orientation-lock",Eb:"allow-pointer-lock",Fb:"allow-popups",Gb:"allow-popups-to-escape-sandbox",Hb:"allow-presentation",Ib:"allow-same-origin",Jb:"allow-scripts",Kb:"allow-top-navigation",Lb:"allow-top-navigation-by-user-activation"},Pc=Xa(function(){return Oc()});
function Qc(){var a=Jc(document,"IFRAME"),b={};G(Pc(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
;function Rc(a){a&&"function"==typeof a.dispose&&a.dispose()}
;function Sc(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];Ma(d)?Sc.apply(null,d):Rc(d)}}
;function L(){this.i=this.i;this.C=this.C}
L.prototype.i=!1;L.prototype.dispose=function(){this.i||(this.i=!0,this.A())};
function Tc(a,b){a.i?b():(a.C||(a.C=[]),a.C.push(b))}
L.prototype.A=function(){if(this.C)for(;this.C.length;)this.C.shift()()};var Uc={};function Vc(a){if(a!==Uc)throw Error("Bad secret");}
;function Wc(){var a="undefined"!==typeof window?window.trustedTypes:void 0;return null!==a&&void 0!==a?a:null}
;var Xc;function Yc(){}
function Zc(a,b){Vc(b);this.h=a}
v(Zc,Yc);Zc.prototype.toString=function(){return this.h.toString()};
var $c=null===(Xc=Wc())||void 0===Xc?void 0:Xc.emptyHTML;new Zc(null!==$c&&void 0!==$c?$c:"",Uc);var ad;function bd(){}
function cd(a,b){Vc(b);this.h=a}
v(cd,bd);cd.prototype.toString=function(){return this.h.toString()};
var dd=null===(ad=Wc())||void 0===ad?void 0:ad.emptyScript;new cd(null!==dd&&void 0!==dd?dd:"",Uc);function ed(){}
function fd(a,b){Vc(b);this.h=a}
v(fd,ed);fd.prototype.toString=function(){return this.h};
new fd("about:blank",Uc);new fd("about:invalid#zTSz",Uc);function gd(a){hd();var b=rb();a=b?b.createScriptURL(a):a;return new sb(a,tb)}
var hd=Ja;function id(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;function jd(a){var b=A("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||x.$googDebugFname||b}catch(g){e="Not available",c=!0}b=kd(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,ld[c])c=ld[c];else{c=String(c);if(!ld[c]){var f=/function\s+([^\(]+)/m.exec(c);ld[c]=f?f[1]:"[Anonymous]"}c=ld[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return a}
function kd(a,b){b||(b={});b[md(a)]=!0;var c=a.stack||"",d=a.uk;d&&!b[md(d)]&&(c+="\nCaused by: ",d.stack&&0==d.stack.indexOf(d.toString())||(c+="string"===typeof d?d:d.message+"\n"),c+=kd(d,b));return c}
function md(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var ld={};function nd(a){this.h=a||{cookie:""}}
m=nd.prototype;m.isEnabled=function(){return navigator.cookieEnabled};
m.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.Bk;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.xa}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);this.h.cookie=a+"="+b+(f?";domain="+f:"")+(g?";path="+g:"")+(0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString())+(d?";secure":"")+(null!=e?";samesite="+e:"")};
m.get=function(a,b){for(var c=a+"=",d=(this.h.cookie||"").split(";"),e=0,f;e<d.length;e++){f=vb(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
m.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{xa:0,path:b,domain:c});return d};
m.isEmpty=function(){return!this.h.cookie};
m.clear=function(){for(var a=(this.h.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=vb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var od=new nd("undefined"==typeof document?null:document);var pd=(new Date).getTime();function qd(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==
c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;function rd(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;n=l=0}
function b(p){for(var q=g,r=0;64>r;r+=4)q[r/4]=p[r]<<24|p[r+1]<<16|p[r+2]<<8|p[r+3];for(r=16;80>r;r++)p=q[r-3]^q[r-8]^q[r-14]^q[r-16],q[r]=(p<<1|p>>>31)&4294967295;p=e[0];var w=e[1],y=e[2],D=e[3],da=e[4];for(r=0;80>r;r++){if(40>r)if(20>r){var wa=D^w&(y^D);var oc=1518500249}else wa=w^y^D,oc=1859775393;else 60>r?(wa=w&y|D&(w|y),oc=2400959708):(wa=w^y^D,oc=3395469782);wa=((p<<5|p>>>27)&4294967295)+wa+da+oc+q[r]&4294967295;da=D;D=y;y=(w<<30|w>>>2)&4294967295;w=p;p=wa}e[0]=e[0]+p&4294967295;e[1]=e[1]+
w&4294967295;e[2]=e[2]+y&4294967295;e[3]=e[3]+D&4294967295;e[4]=e[4]+da&4294967295}
function c(p,q){if("string"===typeof p){p=unescape(encodeURIComponent(p));for(var r=[],w=0,y=p.length;w<y;++w)r.push(p.charCodeAt(w));p=r}q||(q=p.length);r=0;if(0==l)for(;r+64<q;)b(p.slice(r,r+64)),r+=64,n+=64;for(;r<q;)if(f[l++]=p[r++],n++,64==l)for(l=0,b(f);r+64<q;)b(p.slice(r,r+64)),r+=64,n+=64}
function d(){var p=[],q=8*n;56>l?c(h,56-l):c(h,64-(l-56));for(var r=63;56<=r;r--)f[r]=q&255,q>>>=8;b(f);for(r=q=0;5>r;r++)for(var w=24;0<=w;w-=8)p[q++]=e[r]>>w&255;return p}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,n;a();return{reset:a,update:c,digest:d,Ga:function(){for(var p=d(),q="",r=0;r<p.length;r++)q+="0123456789ABCDEF".charAt(Math.floor(p[r]/16))+"0123456789ABCDEF".charAt(p[r]%16);return q}}}
;function sd(a,b,c){var d=String(x.location.href);return d&&a&&b?[b,td(qd(d),a,c||null)].join(" "):null}
function td(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],G(d,function(h){e.push(h)}),ud(e.join(" "));
var f=[],g=[];G(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];G(d,function(h){e.push(h)});
a=ud(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function ud(a){var b=rd();b.update(a);return b.Ga().toLowerCase()}
;var vd={};function wd(a){return!!vd.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)}
function xd(a,b,c,d){(a=x[a])||(a=(new nd(document)).get(b));return a?sd(a,c,d):null}
function yd(a){var b=void 0===b?!1:b;var c=qd(String(x.location.href)),d=[];var e=b;e=void 0===e?!1:e;var f=x.__SAPISID||x.__APISID||x.__3PSAPISID||x.__OVERRIDE_SID;wd(e)&&(f=f||x.__1PSAPISID);if(f)e=!0;else{var g=new nd(document);f=g.get("SAPISID")||g.get("APISID")||g.get("__Secure-3PAPISID")||g.get("SID");wd(e)&&(f=f||g.get("__Secure-1PAPISID"));e=!!f}e&&(e=(c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:"))?x.__SAPISID:x.__APISID,e||(e=new nd(document),
e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID")),(e=e?sd(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e),c&&wd(b)&&((b=xd("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=xd("__3PSAPISID","__Secure-3PAPISID","SAPISID3PHASH",a))&&d.push(a)));return 0==d.length?null:d.join(" ")}
;function zd(){this.i=[];this.h=-1}
zd.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.i[a]!=b&&(this.i[a]=b,this.h=-1)};
zd.prototype.get=function(a){return!!this.i[a]};
function Ad(a){-1==a.h&&(a.h=ab(a.i,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.h}
;function Bd(a,b){this.j=a;this.l=b;this.i=0;this.h=null}
Bd.prototype.get=function(){if(0<this.i){this.i--;var a=this.h;this.h=a.next;a.next=null}else a=this.j();return a};
function Cd(a,b){a.l(b);100>a.i&&(a.i++,b.next=a.h,a.h=b)}
;var Dd;
function Ed(){var a=x.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!J("Presto")&&(a=function(){var e=Jc(document,"IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=C(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!J("Trident")&&!J("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.sa;c.sa=null;e()}};
return function(e){d.next={sa:e};d=d.next;b.port2.postMessage(0)}}return function(e){x.setTimeout(e,0)}}
;function Fd(a){x.setTimeout(function(){throw a;},0)}
;function Gd(){this.i=this.h=null}
Gd.prototype.add=function(a,b){var c=Hd.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c};
Gd.prototype.remove=function(){var a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a};
var Hd=new Bd(function(){return new Id},function(a){return a.reset()});
function Id(){this.next=this.scope=this.h=null}
Id.prototype.set=function(a,b){this.h=a;this.scope=b;this.next=null};
Id.prototype.reset=function(){this.next=this.scope=this.h=null};function Jd(a,b){Kd||Ld();Md||(Kd(),Md=!0);Nd.add(a,b)}
var Kd;function Ld(){if(x.Promise&&x.Promise.resolve){var a=x.Promise.resolve(void 0);Kd=function(){a.then(Od)}}else Kd=function(){var b=Od;
"function"!==typeof x.setImmediate||x.Window&&x.Window.prototype&&!J("Edge")&&x.Window.prototype.setImmediate==x.setImmediate?(Dd||(Dd=Ed()),Dd(b)):x.setImmediate(b)}}
var Md=!1,Nd=new Gd;function Od(){for(var a;a=Nd.remove();){try{a.h.call(a.scope)}catch(b){Fd(b)}Cd(Hd,a)}Md=!1}
;function Pd(){this.i=-1}
;function Qd(){this.i=64;this.h=[];this.o=[];this.u=[];this.l=[];this.l[0]=128;for(var a=1;a<this.i;++a)this.l[a]=0;this.m=this.j=0;this.reset()}
F(Qd,Pd);Qd.prototype.reset=function(){this.h[0]=1732584193;this.h[1]=4023233417;this.h[2]=2562383102;this.h[3]=271733878;this.h[4]=3285377520;this.m=this.j=0};
function Rd(a,b,c){c||(c=0);var d=a.u;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.h[0];c=a.h[1];var g=a.h[2],h=a.h[3],k=a.h[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.h[0]=a.h[0]+b&4294967295;a.h[1]=a.h[1]+c&4294967295;a.h[2]=a.h[2]+g&4294967295;a.h[3]=a.h[3]+h&4294967295;a.h[4]=a.h[4]+k&4294967295}
Qd.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.i,d=0,e=this.o,f=this.j;d<b;){if(0==f)for(;d<=c;)Rd(this,a,d),d+=this.i;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.i){Rd(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.i){Rd(this,e);f=0;break}}this.j=f;this.m+=b}};
Qd.prototype.digest=function(){var a=[],b=8*this.m;56>this.j?this.update(this.l,56-this.j):this.update(this.l,this.i-(this.j-56));for(var c=this.i-1;56<=c;c--)this.o[c]=b&255,b/=256;Rd(this,this.o);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.h[c]>>d&255,++b;return a};function Sd(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}
function Td(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function Ud(a,b){if(a.classList)var c=a.classList.contains(b);else c=a.classList?a.classList:Sd(a).match(/\S+/g)||[],c=0<=Ya(c,b);return c}
function Vd(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):Ud(a,"inverted-hdpi")&&Td(a,Za(a.classList?a.classList:Sd(a).match(/\S+/g)||[],function(b){return"inverted-hdpi"!=b}).join(" "))}
;var Wd="StopIteration"in x?x.StopIteration:{message:"StopIteration",stack:""};function Xd(){}
Xd.prototype.next=function(){throw Wd;};
Xd.prototype.K=function(){return this};
function Yd(a){if(a instanceof Xd)return a;if("function"==typeof a.K)return a.K(!1);if(Ma(a)){var b=0,c=new Xd;c.next=function(){for(;;){if(b>=a.length)throw Wd;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function Zd(a,b){if(Ma(a))try{G(a,b,void 0)}catch(c){if(c!==Wd)throw c;}else{a=Yd(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==Wd)throw c;}}}
function $d(a){if(Ma(a))return db(a);a=Yd(a);var b=[];Zd(a,function(c){b.push(c)});
return b}
;function ae(a,b){this.j={};this.h=[];this.N=this.i=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof ae)for(c=be(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function be(a){ce(a);return a.h.concat()}
m=ae.prototype;m.equals=function(a,b){if(this===a)return!0;if(this.i!=a.i)return!1;var c=b||de;ce(this);for(var d,e=0;d=this.h[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};
function de(a,b){return a===b}
m.isEmpty=function(){return 0==this.i};
m.clear=function(){this.j={};this.N=this.i=this.h.length=0};
m.remove=function(a){return Object.prototype.hasOwnProperty.call(this.j,a)?(delete this.j[a],this.i--,this.N++,this.h.length>2*this.i&&ce(this),!0):!1};
function ce(a){if(a.i!=a.h.length){for(var b=0,c=0;b<a.h.length;){var d=a.h[b];Object.prototype.hasOwnProperty.call(a.j,d)&&(a.h[c++]=d);b++}a.h.length=c}if(a.i!=a.h.length){var e={};for(c=b=0;b<a.h.length;)d=a.h[b],Object.prototype.hasOwnProperty.call(e,d)||(a.h[c++]=d,e[d]=1),b++;a.h.length=c}}
m.get=function(a,b){return Object.prototype.hasOwnProperty.call(this.j,a)?this.j[a]:b};
m.set=function(a,b){Object.prototype.hasOwnProperty.call(this.j,a)||(this.i++,this.h.push(a),this.N++);this.j[a]=b};
m.forEach=function(a,b){for(var c=be(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
m.clone=function(){return new ae(this)};
m.K=function(a){ce(this);var b=0,c=this.N,d=this,e=new Xd;e.next=function(){if(c!=d.N)throw Error("The map has changed since the iterator was created");if(b>=d.h.length)throw Wd;var f=d.h[b++];return a?f:d.j[f]};
return e};var ee=!gc||9<=Number(uc),fe;
if(fe=gc){var ge;if(Object.prototype.hasOwnProperty.call(rc,"9"))ge=rc["9"];else{for(var he=0,ie=vb(String(qc)).split("."),je=vb("9").split("."),ke=Math.max(ie.length,je.length),le=0;0==he&&le<ke;le++){var me=ie[le]||"",ne=je[le]||"";do{var oe=/(\d*)(\D*)(.*)/.exec(me)||["","","",""],pe=/(\d*)(\D*)(.*)/.exec(ne)||["","","",""];if(0==oe[0].length&&0==pe[0].length)break;he=Eb(0==oe[1].length?0:parseInt(oe[1],10),0==pe[1].length?0:parseInt(pe[1],10))||Eb(0==oe[2].length,0==pe[2].length)||Eb(oe[2],pe[2]);
me=oe[3];ne=pe[3]}while(0==he)}ge=rc["9"]=0<=he}fe=!ge}var qe=fe,re=function(){if(!x.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{x.addEventListener("test",Ja,b),x.removeEventListener("test",Ja,b)}catch(c){}return a}();function se(a,b){this.type=a;this.h=this.target=b;this.defaultPrevented=this.i=!1}
se.prototype.stopPropagation=function(){this.i=!0};
se.prototype.preventDefault=function(){this.defaultPrevented=!0};function te(a,b){se.call(this,a?a.type:"");this.relatedTarget=this.h=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.j=null;a&&this.init(a,b)}
F(te,se);var ue={2:"touch",3:"pen",4:"mouse"};
te.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.h=b;var e=a.relatedTarget;if(e){if(ic){a:{try{ec(e.nodeName);var f=!0;break a}catch(g){}f=!1}f||(e=null)}}else"mouseover"==c?e=a.fromElement:"mouseout"==c&&(e=a.toElement);this.relatedTarget=e;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:ue[a.pointerType]||"";this.state=a.state;
this.j=a;a.defaultPrevented&&te.G.preventDefault.call(this)};
te.prototype.stopPropagation=function(){te.G.stopPropagation.call(this);this.j.stopPropagation?this.j.stopPropagation():this.j.cancelBubble=!0};
te.prototype.preventDefault=function(){te.G.preventDefault.call(this);var a=this.j;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,qe)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var ve="closure_listenable_"+(1E6*Math.random()|0);var we=0;function xe(a,b,c,d,e){this.listener=a;this.h=null;this.src=b;this.type=c;this.capture=!!d;this.ga=e;this.key=++we;this.V=this.ea=!1}
function ye(a){a.V=!0;a.listener=null;a.h=null;a.src=null;a.ga=null}
;function ze(a){this.src=a;this.listeners={};this.h=0}
ze.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.h++);var g=Ae(a,b,d,e);-1<g?(b=a[g],c||(b.ea=!1)):(b=new xe(b,this.src,f,!!d,e),b.ea=c,a.push(b));return b};
ze.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=Ae(e,b,c,d);return-1<b?(ye(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.h--),!0):!1};
function Be(a,b){var c=b.type;c in a.listeners&&cb(a.listeners[c],b)&&(ye(b),0==a.listeners[c].length&&(delete a.listeners[c],a.h--))}
function Ae(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.V&&f.listener==b&&f.capture==!!c&&f.ga==d)return e}return-1}
;var Ce="closure_lm_"+(1E6*Math.random()|0),De={},Ee=0;function Fe(a,b,c,d,e){if(d&&d.once)Ge(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)Fe(a,b[f],c,d,e);else c=He(c),a&&a[ve]?Ie(a,b,c,B(d)?!!d.capture:!!d,e):Je(a,b,c,!1,d,e)}
function Je(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=B(e)?!!e.capture:!!e,h=Ke(a);h||(a[Ce]=h=new ze(a));c=h.add(b,c,d,g,f);if(!c.h){d=Le();c.h=d;d.src=a;d.listener=c;if(a.addEventListener)re||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(Me(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");Ee++}}
function Le(){var a=Ne,b=ee?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);
if(!c)return c};
return b}
function Ge(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Ge(a,b[f],c,d,e);else c=He(c),a&&a[ve]?a.h.add(String(b),c,!0,B(d)?!!d.capture:!!d,e):Je(a,b,c,!0,d,e)}
function Oe(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Oe(a,b[f],c,d,e);else(d=B(d)?!!d.capture:!!d,c=He(c),a&&a[ve])?a.h.remove(String(b),c,d,e):a&&(a=Ke(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=Ae(b,c,d,e)),(c=-1<a?b[a]:null)&&Pe(c))}
function Pe(a){if("number"!==typeof a&&a&&!a.V){var b=a.src;if(b&&b[ve])Be(b.h,a);else{var c=a.type,d=a.h;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(Me(c),d):b.addListener&&b.removeListener&&b.removeListener(d);Ee--;(c=Ke(b))?(Be(c,a),0==c.h&&(c.src=null,b[Ce]=null)):ye(a)}}}
function Me(a){return a in De?De[a]:De[a]="on"+a}
function Qe(a,b,c,d){var e=!0;if(a=Ke(a))if(b=a.listeners[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.capture==c&&!f.V&&(f=Re(f,d),e=e&&!1!==f)}return e}
function Re(a,b){var c=a.listener,d=a.ga||a.src;a.ea&&Pe(a);return c.call(d,b)}
function Ne(a,b){if(a.V)return!0;if(!ee){var c=b||A("window.event"),d=new te(c,this),e=!0;if(!(0>c.keyCode||void 0!=c.returnValue)){a:{var f=!1;if(0==c.keyCode)try{c.keyCode=-1;break a}catch(k){f=!0}if(f||void 0==c.returnValue)c.returnValue=!0}c=[];for(f=d.h;f;f=f.parentNode)c.push(f);f=a.type;for(var g=c.length-1;!d.i&&0<=g;g--){d.h=c[g];var h=Qe(c[g],f,!0,d);e=e&&h}for(g=0;!d.i&&g<c.length;g++)d.h=c[g],h=Qe(c[g],f,!1,d),e=e&&h}return e}return Re(a,new te(b,this))}
function Ke(a){a=a[Ce];return a instanceof ze?a:null}
var Se="__closure_events_fn_"+(1E9*Math.random()>>>0);function He(a){if("function"===typeof a)return a;a[Se]||(a[Se]=function(b){return a.handleEvent(b)});
return a[Se]}
;function Te(){L.call(this);this.h=new ze(this);this.B=this;this.m=null}
F(Te,L);Te.prototype[ve]=!0;Te.prototype.addEventListener=function(a,b,c,d){Fe(this,a,b,c,d)};
Te.prototype.removeEventListener=function(a,b,c,d){Oe(this,a,b,c,d)};
function Ue(a,b){var c=a.m;if(c){var d=[];for(var e=1;c;c=c.m)d.push(c),++e}c=a.B;e=b;var f=e.type||e;if("string"===typeof e)e=new se(e,c);else if(e instanceof se)e.target=e.target||c;else{var g=e;e=new se(f,c);pb(e,g)}g=!0;if(d)for(var h=d.length-1;!e.i&&0<=h;h--){var k=e.h=d[h];g=Ve(k,f,!0,e)&&g}e.i||(k=e.h=c,g=Ve(k,f,!0,e)&&g,e.i||(g=Ve(k,f,!1,e)&&g));if(d)for(h=0;!e.i&&h<d.length;h++)k=e.h=d[h],g=Ve(k,f,!1,e)&&g}
Te.prototype.A=function(){Te.G.A.call(this);if(this.h){var a=this.h,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,ye(d[e]);delete a.listeners[c];a.h--}}this.m=null};
function Ie(a,b,c,d,e){a.h.add(String(b),c,!1,d,e)}
function Ve(a,b,c,d){b=a.h.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.V&&g.capture==c){var h=g.listener,k=g.ga||g.src;g.ea&&Be(a.h,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;function We(a){var b=[];Xe(new Ye,a,b);return b.join("")}
function Ye(){}
function Xe(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),Xe(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),Ze(d,c),c.push(":"),Xe(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Ze(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var $e={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},af=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function Ze(a,b){b.push('"',a.replace(af,function(c){var d=$e[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).substr(1),$e[c]=d);return d}),'"')}
;function bf(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}}
;function cf(a){this.h=0;this.u=void 0;this.l=this.i=this.j=null;this.m=this.o=!1;if(a!=Ja)try{var b=this;a.call(void 0,function(c){df(b,2,c)},function(c){df(b,3,c)})}catch(c){df(this,3,c)}}
function ef(){this.next=this.context=this.onRejected=this.i=this.h=null;this.j=!1}
ef.prototype.reset=function(){this.context=this.onRejected=this.i=this.h=null;this.j=!1};
var ff=new Bd(function(){return new ef},function(a){a.reset()});
function gf(a,b,c){var d=ff.get();d.i=a;d.onRejected=b;d.context=c;return d}
function hf(a){return new cf(function(b,c){c(a)})}
cf.prototype.then=function(a,b,c){return jf(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
cf.prototype.$goog_Thenable=!0;function kf(a,b){return jf(a,null,b,void 0)}
cf.prototype.cancel=function(a){if(0==this.h){var b=new lf(a);Jd(function(){mf(this,b)},this)}};
function mf(a,b){if(0==a.h)if(a.j){var c=a.j;if(c.i){for(var d=0,e=null,f=null,g=c.i;g&&(g.j||(d++,g.h==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.h&&1==d?mf(c,b):(f?(d=f,d.next==c.l&&(c.l=d),d.next=d.next.next):nf(c),of(c,e,3,b)))}a.j=null}else df(a,3,b)}
function pf(a,b){a.i||2!=a.h&&3!=a.h||qf(a);a.l?a.l.next=b:a.i=b;a.l=b}
function jf(a,b,c,d){var e=gf(null,null,null);e.h=new cf(function(f,g){e.i=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.onRejected=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof lf?g(h):f(k)}catch(l){g(l)}}:g});
e.h.j=a;pf(a,e);return e.h}
cf.prototype.B=function(a){this.h=0;df(this,2,a)};
cf.prototype.F=function(a){this.h=0;df(this,3,a)};
function df(a,b,c){if(0==a.h){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.h=1;a:{var d=c,e=a.B,f=a.F;if(d instanceof cf){pf(d,gf(e||Ja,f||null,a));var g=!0}else if(bf(d))d.then(e,f,a),g=!0;else{if(B(d))try{var h=d.then;if("function"===typeof h){rf(d,h,e,f,a);g=!0;break a}}catch(k){f.call(a,k);g=!0;break a}g=!1}}g||(a.u=c,a.h=b,a.j=null,qf(a),3!=b||c instanceof lf||sf(a,c))}}
function rf(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function qf(a){a.o||(a.o=!0,Jd(a.C,a))}
function nf(a){var b=null;a.i&&(b=a.i,a.i=b.next,b.next=null);a.i||(a.l=null);return b}
cf.prototype.C=function(){for(var a;a=nf(this);)of(this,a,this.h,this.u);this.o=!1};
function of(a,b,c,d){if(3==c&&b.onRejected&&!b.j)for(;a&&a.m;a=a.j)a.m=!1;if(b.h)b.h.j=null,tf(b,c,d);else try{b.j?b.i.call(b.context):tf(b,c,d)}catch(e){uf.call(null,e)}Cd(ff,b)}
function tf(a,b,c){2==b?a.i.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function sf(a,b){a.m=!0;Jd(function(){a.m&&uf.call(null,b)})}
var uf=Fd;function lf(a){Va.call(this,a)}
F(lf,Va);lf.prototype.name="cancel";function M(a){L.call(this);this.o=1;this.l=[];this.m=0;this.h=[];this.j={};this.u=!!a}
F(M,L);m=M.prototype;m.subscribe=function(a,b,c){var d=this.j[a];d||(d=this.j[a]=[]);var e=this.o;this.h[e]=a;this.h[e+1]=b;this.h[e+2]=c;this.o=e+3;d.push(e);return e};
function vf(a,b,c,d){if(b=a.j[b]){var e=a.h;(b=bb(b,function(f){return e[f+1]==c&&e[f+2]==d}))&&a.W(b)}}
m.W=function(a){var b=this.h[a];if(b){var c=this.j[b];0!=this.m?(this.l.push(a),this.h[a+1]=Ja):(c&&cb(c,a),delete this.h[a],delete this.h[a+1],delete this.h[a+2])}return!!b};
m.O=function(a,b){var c=this.j[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.u)for(e=0;e<c.length;e++){var g=c[e];wf(this.h[g+1],this.h[g+2],d)}else{this.m++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.h[g+1].apply(this.h[g+2],d)}finally{if(this.m--,0<this.l.length&&0==this.m)for(;c=this.l.pop();)this.W(c)}}return 0!=e}return!1};
function wf(a,b,c){Jd(function(){a.apply(b,c)})}
m.clear=function(a){if(a){var b=this.j[a];b&&(G(b,this.W,this),delete this.j[a])}else this.h.length=0,this.j={}};
m.A=function(){M.G.A.call(this);this.clear();this.l.length=0};function xf(a){this.h=a}
xf.prototype.set=function(a,b){void 0===b?this.h.remove(a):this.h.set(a,We(b))};
xf.prototype.get=function(a){try{var b=this.h.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
xf.prototype.remove=function(a){this.h.remove(a)};function yf(a){this.h=a}
F(yf,xf);function zf(a){this.data=a}
function Af(a){return void 0===a||a instanceof zf?a:new zf(a)}
yf.prototype.set=function(a,b){yf.G.set.call(this,a,Af(b))};
yf.prototype.i=function(a){a=yf.G.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
yf.prototype.get=function(a){if(a=this.i(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function Bf(a){this.h=a}
F(Bf,yf);Bf.prototype.set=function(a,b,c){if(b=Af(b)){if(c){if(c<E()){Bf.prototype.remove.call(this,a);return}b.expiration=c}b.creation=E()}Bf.G.set.call(this,a,b)};
Bf.prototype.i=function(a){var b=Bf.G.i.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<E()||c&&c>E())Bf.prototype.remove.call(this,a);else return b}};function Cf(){}
;function Df(){}
F(Df,Cf);Df.prototype.clear=function(){var a=$d(this.K(!0)),b=this;G(a,function(c){b.remove(c)})};function Ef(a){this.h=a}
F(Ef,Df);m=Ef.prototype;m.isAvailable=function(){if(!this.h)return!1;try{return this.h.setItem("__sak","1"),this.h.removeItem("__sak"),!0}catch(a){return!1}};
m.set=function(a,b){try{this.h.setItem(a,b)}catch(c){if(0==this.h.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
m.get=function(a){a=this.h.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){this.h.removeItem(a)};
m.K=function(a){var b=0,c=this.h,d=new Xd;d.next=function(){if(b>=c.length)throw Wd;var e=c.key(b++);if(a)return e;e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
m.clear=function(){this.h.clear()};
m.key=function(a){return this.h.key(a)};function Ff(){var a=null;try{a=window.localStorage||null}catch(b){}this.h=a}
F(Ff,Ef);function Gf(a,b){this.i=a;this.h=null;if(gc&&!(9<=Number(uc))){Hf||(Hf=new ae);this.h=Hf.get(a);this.h||(b?this.h=document.getElementById(b):(this.h=document.createElement("userdata"),this.h.addBehavior("#default#userData"),document.body.appendChild(this.h)),Hf.set(a,this.h));try{this.h.load(this.i)}catch(c){this.h=null}}}
F(Gf,Df);var If={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},Hf=null;function Jf(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return If[b]})}
m=Gf.prototype;m.isAvailable=function(){return!!this.h};
m.set=function(a,b){this.h.setAttribute(Jf(a),b);Kf(this)};
m.get=function(a){a=this.h.getAttribute(Jf(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){this.h.removeAttribute(Jf(a));Kf(this)};
m.K=function(a){var b=0,c=this.h.XMLDocument.documentElement.attributes,d=new Xd;d.next=function(){if(b>=c.length)throw Wd;var e=c[b++];if(a)return decodeURIComponent(e.nodeName.replace(/\./g,"%")).substr(1);e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
m.clear=function(){for(var a=this.h.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);Kf(this)};
function Kf(a){try{a.h.save(a.i)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function Lf(a,b){this.i=a;this.h=b+"::"}
F(Lf,Df);Lf.prototype.set=function(a,b){this.i.set(this.h+a,b)};
Lf.prototype.get=function(a){return this.i.get(this.h+a)};
Lf.prototype.remove=function(a){this.i.remove(this.h+a)};
Lf.prototype.K=function(a){var b=this.i.K(!0),c=this,d=new Xd;d.next=function(){for(var e=b.next();e.substr(0,c.h.length)!=c.h;)e=b.next();return a?e.substr(c.h.length):c.i.get(e)};
return d};function Mf(a,b){1<b.length?a[b[0]]=b[1]:1===b.length&&Object.assign(a,b[0])}
;var Nf=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};z("yt.config_",Nf,void 0);function N(a){Mf(Nf,arguments)}
function H(a,b){return a in Nf?Nf[a]:b}
;var Of=[];function Pf(a){Of.forEach(function(b){return b(a)})}
function Qf(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){Rf(b),Pf(b)}}:a}
function Rf(a){var b=A("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0):(b=H("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0]),N("ERRORS",b))}
function Sf(a){var b=A("yt.logging.errors.log");b?b(a,"WARNING",void 0,void 0,void 0):(b=H("ERRORS",[]),b.push([a,"WARNING",void 0,void 0,void 0]),N("ERRORS",b))}
;var Tf=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};z("yt.msgs_",Tf,void 0);function Uf(a){Mf(Tf,arguments)}
;function O(a){a=Vf(a);return"string"===typeof a&&"false"===a?!1:!!a}
function Wf(a,b){var c=Vf(a);return void 0===c&&void 0!==b?b:Number(c||0)}
function Vf(a){var b=H("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:H("EXPERIMENT_FLAGS",{})[a]}
;var Xf=0;z("ytDomDomGetNextId",A("ytDomDomGetNextId")||function(){return++Xf},void 0);var Yf={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function Zf(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in Yf||(this[b]=a[b]);var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==
this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.h=a.pageX;this.i=a.pageY}}catch(e){}}
function $f(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.h=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.i=a.clientY+b}}
Zf.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Zf.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Zf.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var hb=x.ytEventsEventsListeners||{};z("ytEventsEventsListeners",hb,void 0);var ag=x.ytEventsEventsCounter||{count:0};z("ytEventsEventsCounter",ag,void 0);
function bg(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return gb(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=B(e[4])&&B(d)&&lb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
var cg=Xa(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function dg(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=bg(a,b,c,d);if(e)return e;e=++ag.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new Zf(h);if(!Lc(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new Zf(h);
h.currentTarget=a;return c.call(a,h)};
g=Qf(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),cg()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);hb[e]=[a,b,c,g,d];return e}
function eg(a){a&&("string"==typeof a&&(a=[a]),G(a,function(b){if(b in hb){var c=hb[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?cg()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete hb[b]}}))}
;var fg=window.ytcsi&&window.ytcsi.now?window.ytcsi.now:window.performance&&window.performance.timing&&window.performance.now&&window.performance.timing.navigationStart?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};function P(a,b){"function"===typeof a&&(a=Qf(a));return window.setTimeout(a,b)}
function gg(a){window.clearTimeout(a)}
;function hg(a){this.B=a;this.h=null;this.m=0;this.u=null;this.o=0;this.j=[];for(a=0;4>a;a++)this.j.push(0);this.l=0;this.H=dg(window,"mousemove",C(this.I,this));a=C(this.F,this);"function"===typeof a&&(a=Qf(a));this.J=window.setInterval(a,25)}
F(hg,L);hg.prototype.I=function(a){void 0===a.h&&$f(a);var b=a.h;void 0===a.i&&$f(a);this.h=new Dc(b,a.i)};
hg.prototype.F=function(){if(this.h){var a=fg();if(0!=this.m){var b=this.u,c=this.h,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.m);this.j[this.l]=.5<Math.abs((d-this.o)/this.o)?1:0;for(c=b=0;4>c;c++)b+=this.j[c]||0;3<=b&&this.B();this.o=d}this.m=a;this.u=this.h;this.l=(this.l+1)%4}};
hg.prototype.A=function(){window.clearInterval(this.J);eg(this.H)};function ig(){}
function jg(a,b){return kg(a,1,b)}
;function lg(){ig.apply(this,arguments)}
v(lg,ig);function kg(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);var d=A("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):P(a,c||0)}
function mg(a){if(void 0===a||!Number.isNaN(Number(a))){var b=A("yt.scheduler.instance.cancelJob");b?b(a):gg(a)}}
lg.prototype.start=function(){var a=A("yt.scheduler.instance.start");a&&a()};
lg.prototype.pause=function(){var a=A("yt.scheduler.instance.pause");a&&a()};
Ka(lg);lg.getInstance();var ng={};
function og(a){var b=void 0===a?{}:a;a=void 0===b.Ma?!0:b.Ma;b=void 0===b.cb?!1:b.cb;if(null==A("_lact",window)){var c=parseInt(H("LACT"),10);c=isFinite(c)?E()-Math.max(c,0):-1;z("_lact",c,window);z("_fact",c,window);-1==c&&pg();dg(document,"keydown",pg);dg(document,"keyup",pg);dg(document,"mousedown",pg);dg(document,"mouseup",pg);a&&(b?dg(window,"touchmove",function(){qg("touchmove",200)},{passive:!0}):(dg(window,"resize",function(){qg("resize",200)}),dg(window,"scroll",function(){qg("scroll",200)})));
new hg(function(){qg("mouse",100)});
dg(document,"touchstart",pg,{passive:!0});dg(document,"touchend",pg,{passive:!0})}}
function qg(a,b){ng[a]||(ng[a]=!0,jg(function(){pg();ng[a]=!1},b))}
function pg(){null==A("_lact",window)&&og();var a=E();z("_lact",a,window);-1==A("_fact",window)&&z("_fact",a,window);(a=A("ytglobal.ytUtilActivityCallback_"))&&a()}
function rg(){var a=A("_lact",window);return null==a?-1:Math.max(E()-a,0)}
;var sg=x.ytPubsubPubsubInstance||new M,tg=x.ytPubsubPubsubSubscribedKeys||{},ug=x.ytPubsubPubsubTopicToKeys||{},vg=x.ytPubsubPubsubIsSynchronous||{};function wg(a,b){var c=xg();if(c&&b){var d=c.subscribe(a,function(){var e=arguments;var f=function(){tg[d]&&b.apply&&"function"==typeof b.apply&&b.apply(window,e)};
try{vg[a]?f():P(f,0)}catch(g){Rf(g)}},void 0);
tg[d]=!0;ug[a]||(ug[a]=[]);ug[a].push(d);return d}return 0}
function yg(a){var b=xg();b&&("number"===typeof a?a=[a]:"string"===typeof a&&(a=[parseInt(a,10)]),G(a,function(c){b.unsubscribeByKey(c);delete tg[c]}))}
function zg(a,b){var c=xg();c&&c.publish.apply(c,arguments)}
function Ag(a){var b=xg();if(b)if(b.clear(a),a)Bg(a);else for(var c in ug)Bg(c)}
function xg(){return x.ytPubsubPubsubInstance}
function Bg(a){ug[a]&&(a=ug[a],G(a,function(b){tg[b]&&delete tg[b]}),a.length=0)}
M.prototype.subscribe=M.prototype.subscribe;M.prototype.unsubscribeByKey=M.prototype.W;M.prototype.publish=M.prototype.O;M.prototype.clear=M.prototype.clear;z("ytPubsubPubsubInstance",sg,void 0);z("ytPubsubPubsubTopicToKeys",ug,void 0);z("ytPubsubPubsubIsSynchronous",vg,void 0);z("ytPubsubPubsubSubscribedKeys",tg,void 0);var Cg=window,Q=Cg.ytcsi&&Cg.ytcsi.now?Cg.ytcsi.now:Cg.performance&&Cg.performance.timing&&Cg.performance.now&&Cg.performance.timing.navigationStart?function(){return Cg.performance.timing.navigationStart+Cg.performance.now()}:function(){return(new Date).getTime()};var Dg=Wf("initial_gel_batch_timeout",1E3),Eg=Math.pow(2,16)-1,Fg=null,Gg=0,Hg=void 0,Ig=0,Jg=0,Kg=0,Lg=!0,Mg=x.ytLoggingTransportGELQueue_||new Map;z("ytLoggingTransportGELQueue_",Mg,void 0);var Ng=x.ytLoggingTransportTokensToCttTargetIds_||{};z("ytLoggingTransportTokensToCttTargetIds_",Ng,void 0);function Og(a){a=void 0===a?!1:a;return new cf(function(b){gg(Ig);gg(Jg);Jg=0;Hg&&Hg.isReady()?(Pg(b,a),Mg.clear()):(Qg(),b())})}
function Qg(){O("web_gel_timeout_cap")&&!Jg&&(Jg=P(Og,6E4));gg(Ig);var a=H("LOGGING_BATCH_TIMEOUT",Wf("web_gel_debounce_ms",1E4));O("shorten_initial_gel_batch_timeout")&&Lg&&(a=Dg);Ig=P(Og,a)}
function Pg(a,b){var c=Hg;b=void 0===b?!1:b;for(var d=Math.round(Q()),e=Mg.size,f=u(Mg),g=f.next();!g.done;g=f.next()){var h=u(g.value);g=h.next().value;var k=h.next().value;h=nb({context:Rg(c.h||Sg())});h.events=k;(k=Ng[g])&&Tg(h,g,k);delete Ng[g];Ug(h,d);Vg(c,"log_event",h,{retry:!0,onSuccess:function(){e--;e||a();Gg=Math.round(Q()-d)},
onError:function(){e--;e||a()},
pb:b});Lg=!1}}
function Ug(a,b){a.requestTimeMs=String(b);O("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);var c=H("EVENT_ID",void 0);if(c){var d=H("BATCH_CLIENT_COUNTER",void 0)||0;!d&&O("web_client_counter_random_seed")&&(d=Math.floor(Math.random()*Eg/2));d++;d>Eg&&(d=1);N("BATCH_CLIENT_COUNTER",d);c={serializedEventId:c,clientCounter:String(d)};a.serializedClientEventId=c;Fg&&Gg&&O("log_gel_rtt_web")&&(a.previousBatchInfo={serializedClientEventId:Fg,roundtripMs:String(Gg)});Fg=c;Gg=0}}
function Tg(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
;var Wg=x.ytLoggingGelSequenceIdObj_||{};z("ytLoggingGelSequenceIdObj_",Wg,void 0);
function Xg(a,b,c,d){d=void 0===d?{}:d;var e={};e.eventTimeMs=Math.round(d.timestamp||Q());e[a]=b;a=rg();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};O("log_sequence_info_on_gel_web")&&d.M&&(a=e.context,b=d.M,Wg[b]=b in Wg?Wg[b]+1:0,a.sequence={index:Wg[b],groupKey:b},d.Ha&&delete Wg[d.M]);d=d.L;a="";d&&(a={},d.videoId?a.videoId=d.videoId:d.playlistId&&(a.playlistId=d.playlistId),Ng[d.token]=a,a=d.token);d=Mg.get(a)||[];Mg.set(a,d);d.push(e);c&&(Hg=new c);c=Wf("web_logging_max_batch")||
100;e=Q();d.length>=c?Og(!0):10<=e-Kg&&(Qg(),Kg=e)}
;function Yg(){var a=Zg;A("yt.ads.biscotti.getId_")||z("yt.ads.biscotti.getId_",a,void 0)}
function $g(a){z("yt.ads.biscotti.lastId_",a,void 0)}
;var ah=/^[\w.]*$/,bh={q:!0,search_query:!0};function ch(a,b){for(var c=a.split(b),d={},e=0,f=c.length;e<f;e++){var g=c[e].split("=");if(1==g.length&&g[0]||2==g.length)try{var h=dh(g[0]||""),k=dh(g[1]||"");h in d?Array.isArray(d[h])?eb(d[h],k):d[h]=[d[h],k]:d[h]=k}catch(q){var l=q,n=g[0],p=String(ch);l.args=[{key:n,value:g[1],query:a,method:eh==p?"unchanged":p}];bh.hasOwnProperty(n)||("ReferenceError"===l.name?Sf(l):Rf(l))}}return d}
var eh=String(ch);function fh(a){var b=[];fb(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];G(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function gh(a){"?"==a.charAt(0)&&(a=a.substr(1));return ch(a,"&")}
function hh(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=gh(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return ac(a,e)+d}
function dh(a){return a&&a.match(ah)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function ih(a){var b=jh;a=void 0===a?A("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=pd;e.flash="0";a:{try{var f=b.h.top.location.href}catch(da){f=2;break a}f=f?f===b.i.location.href?0:1:2}e=(e.frm=f,e);e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?K:g;try{var h=g.history.length}catch(da){h=0}e.u_his=h;e.u_java=!!K.navigator&&"unknown"!==typeof K.navigator.javaEnabled&&!!K.navigator.javaEnabled&&K.navigator.javaEnabled();K.screen&&(e.u_h=K.screen.height,e.u_w=K.screen.width,
e.u_ah=K.screen.availHeight,e.u_aw=K.screen.availWidth,e.u_cd=K.screen.colorDepth);K.navigator&&K.navigator.plugins&&(e.u_nplug=K.navigator.plugins.length);K.navigator&&K.navigator.mimeTypes&&(e.u_nmime=K.navigator.mimeTypes.length);h=b.h;try{var k=h.screenX;var l=h.screenY}catch(da){}try{var n=h.outerWidth;var p=h.outerHeight}catch(da){}try{var q=h.innerWidth;var r=h.innerHeight}catch(da){}k=[h.screenLeft,h.screenTop,k,l,h.screen?h.screen.availWidth:void 0,h.screen?h.screen.availTop:void 0,n,p,q,
r];l=b.h.top;try{var w=(l||window).document,y="CSS1Compat"==w.compatMode?w.documentElement:w.body;var D=(new Ec(y.clientWidth,y.clientHeight)).round()}catch(da){D=new Ec(-12245933,-12245933)}w=D;D={};y=new zd;x.SVGElement&&x.document.createElementNS&&y.set(0);l=Qc();l["allow-top-navigation-by-user-activation"]&&y.set(1);l["allow-popups-to-escape-sandbox"]&&y.set(2);x.crypto&&x.crypto.subtle&&y.set(3);x.TextDecoder&&x.TextEncoder&&y.set(4);y=Ad(y);D.bc=y;D.bih=w.height;D.biw=w.width;D.brdim=k.join();
b=b.i;b=(D.vis={visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,D.wgl=!!K.WebGLRenderingContext,D);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var jh=new function(){var a=window.document;this.h=window;this.i=a};
z("yt.ads_.signals_.getAdSignalsString",function(a){return fh(ih(a))},void 0);var kh="XMLHttpRequest"in x?function(){return new XMLHttpRequest}:null;
function lh(){if(!kh)return null;var a=kh();return"open"in a?a:null}
function mh(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;var nh={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},
oh="app debugcss debugjs expflag force_ad_params force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address client_dev_root_url".split(" "),ph=!1;
function qh(a,b){b=void 0===b?{}:b;if(!c)var c=window.location.href;var d=a.match(Wb)[1]||null,e=Yb(a);d&&e?(d=c,c=a.match(Wb),d=d.match(Wb),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?Yb(c)==e&&(Number(c.match(Wb)[4]||null)||null)==(Number(a.match(Wb)[4]||null)||null):!0;d=O("web_ajax_ignore_global_headers_if_set");for(var f in nh)e=H(nh[f]),!e||!c&&Yb(a)||d&&void 0!==b[f]||(b[f]=e);if(c||!Yb(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());(c||!Yb(a))&&(f="undefined"!=typeof Intl?
(new Intl.DateTimeFormat).resolvedOptions().timeZone:null)&&(b["X-YouTube-Time-Zone"]=f);if(c||!Yb(a))b["X-YouTube-Ad-Signals"]=fh(ih(void 0));return b}
function rh(a){var b=window.location.search,c=Yb(a),d=Xb(a.match(Wb)[5]||null);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=gh(b),f={};G(oh,function(g){e[g]&&(f[g]=e[g])});
return hh(a,f||{},!1)}
function sh(a,b){if(window.fetch&&"XML"!=b.format){var c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=th(a,b);var d=uh(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");var e=!1,f;fetch(a,c).then(function(g){if(!e){e=!0;f&&gg(f);var h=g.ok,k=function(l){l=l||{};var n=b.context||x;h?b.onSuccess&&b.onSuccess.call(n,l,g):b.onError&&b.onError.call(n,l,g);b.onFinish&&b.onFinish.call(n,l,g)};
"JSON"==(b.format||"JSON")&&(h||400<=g.status&&500>g.status)?g.json().then(k,function(){k(null)}):k(null)}});
b.onFetchTimeout&&0<b.timeout&&(f=P(function(){e||(e=!0,gg(f),b.onFetchTimeout.call(b.context||x))},b.timeout))}else vh(a,b)}
function vh(a,b){var c=b.format||"JSON";a=th(a,b);var d=uh(a,b),e=!1,f=wh(a,function(k){if(!e){e=!0;h&&gg(h);var l=mh(k),n=null,p=400<=k.status&&500>k.status,q=500<=k.status&&600>k.status;if(l||p||q)n=xh(a,c,k,b.convertToSafeHtml);if(l)a:if(k&&204==k.status)l=!0;else{switch(c){case "XML":l=0==parseInt(n&&n.return_code,10);break a;case "RAW":l=!0;break a}l=!!n}n=n||{};p=b.context||x;l?b.onSuccess&&b.onSuccess.call(p,k,n):b.onError&&b.onError.call(p,k,n);b.onFinish&&b.onFinish.call(p,k,n)}},b.method,
d,b.headers,b.responseType,b.withCredentials);
if(b.onTimeout&&0<b.timeout){var g=b.onTimeout;var h=P(function(){e||(e=!0,f.abort(),gg(h),g.call(b.context||x,f))},b.timeout)}return f}
function th(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=H("XSRF_FIELD_NAME",void 0),d=b.urlParams;d&&(d[c]&&delete d[c],a=hh(a,d||{},!0));return a}
function uh(a,b){var c=H("XSRF_FIELD_NAME",void 0),d=H("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.postParams,g=H("XSRF_FIELD_NAME",void 0),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||Yb(a)&&!b.withCredentials&&Yb(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);f&&"string"===typeof e&&(e=gh(e),pb(e,f),e=b.postBodyFormat&&"JSON"==b.postBodyFormat?JSON.stringify(e):$b(e));f=e||f&&!ib(f);!ph&&f&&
"POST"!=b.method&&(ph=!0,Rf(Error("AJAX request with postData should use POST")));return e}
function xh(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,Sf(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?yh(a):null)e={},G(a.getElementsByTagName("*"),function(g){e[g.tagName]=zh(g)})}d&&Ah(e);
return e}
function Ah(a){if(B(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=Rb(a[b],null);a[c]=d}else Ah(a[b])}}
function yh(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function zh(a){var b="";G(a.childNodes,function(c){b+=c.nodeValue});
return b}
function wh(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&Qf(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=lh();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;O("debug_forward_web_query_parameters")&&(a=rh(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=qh(a,e))for(var l in e)k.setRequestHeader(l,e[l]),"content-type"==l.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;function Bh(){return"INNERTUBE_API_KEY"in Nf&&"INNERTUBE_API_VERSION"in Nf}
function Sg(){return{innertubeApiKey:H("INNERTUBE_API_KEY",void 0),innertubeApiVersion:H("INNERTUBE_API_VERSION",void 0),Na:H("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),Oa:H("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:H("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),Qa:H("INNERTUBE_CONTEXT_HL",void 0),Pa:H("INNERTUBE_CONTEXT_GL",void 0),Ra:H("INNERTUBE_HOST_OVERRIDE",void 0)||"",Ta:!!H("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),Sa:!!H("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:H("SERIALIZED_CLIENT_CONFIG_DATA",void 0)}}
function Rg(a){var b={client:{hl:a.Qa,gl:a.Pa,clientName:a.Oa,clientVersion:a.innertubeContextClientVersion,configInfo:a.Na}},c=window.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=H("EXPERIMENTS_TOKEN","");""!==c&&(b.client.experimentsToken=c);c=[];var d=H("EXPERIMENTS_FORCED_FLAGS",{});for(e in d)c.push({key:e,value:String(d[e])});var e=H("EXPERIMENT_FLAGS",{});for(var f in e)f.startsWith("force_")&&void 0===d[f]&&c.push({key:f,value:String(e[f])});0<c.length&&(b.request={internalExperimentFlags:c});
a.appInstallData&&O("web_log_app_install_experiments")&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.appInstallData=a.appInstallData);H("DELEGATED_SESSION_ID")&&!O("pageid_as_header_web")&&(b.user={onBehalfOfUser:H("DELEGATED_SESSION_ID")});a=Object;f=a.assign;e=b.client;c={};d=u(Object.entries(gh(H("DEVICE",""))));for(var g=d.next();!g.done;g=d.next()){var h=u(g.value);g=h.next().value;h=h.next().value;"cbrand"===g?c.deviceMake=h:"cmodel"===g?c.deviceModel=h:"cbr"===g?c.browserName=
h:"cbrver"===g?c.browserVersion=h:"cos"===g?c.osName=h:"cosver"===g?c.osVersion=h:"cplatform"===g&&(c.platform=h)}b.client=f.call(a,e,c);return b}
function Ch(a,b,c){c=void 0===c?{}:c;var d={"X-Goog-Visitor-Id":c.visitorData||H("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.sk||H("AUTHORIZATION"))||(a?b="Bearer "+A("gapi.auth.getToken")().rk:b=yd([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=H("SESSION_INDEX",0),O("pageid_as_header_web")&&(d["X-Goog-PageId"]=H("DELEGATED_SESSION_ID")));return d}
;function Dh(a){a=Object.assign({},a);delete a.Authorization;var b=yd();if(b){var c=new Qd;c.update(H("INNERTUBE_API_KEY",void 0));c.update(b);a.hash=Bc(c.digest())}return a}
;function Eh(a,b,c,d){od.set(""+a,b,{xa:c,path:"/",domain:void 0===d?"youtube.com":d,secure:!1})}
;function Fh(a){var b=new Ff;(b=b.isAvailable()?a?new Lf(b,a):b:null)||(a=new Gf(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);this.h=(a=b)?new Bf(a):null;this.i=document.domain||window.location.hostname}
Fh.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.h)try{this.h.set(a,b,E()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(We(b))}catch(f){return}else e=escape(b);Eh(a,e,c,this.i)};
Fh.prototype.get=function(a,b){var c=void 0,d=!this.h;if(!d)try{c=this.h.get(a)}catch(e){d=!0}if(d&&(c=od.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
Fh.prototype.remove=function(a){this.h&&this.h.remove(a);var b=this.i;od.remove(""+a,"/",void 0===b?"youtube.com":b)};var Gh;function Hh(){Gh||(Gh=new Fh("yt.innertube"));return Gh}
function Ih(a,b,c,d){if(d)return null;d=Hh().get("nextId",!0)||1;var e=Hh().get("requests",!0)||{};e[d]={method:a,request:b,authState:Dh(c),requestTime:Math.round(Q())};Hh().set("nextId",d+1,86400,!0);Hh().set("requests",e,86400,!0);return d}
function Jh(a){var b=Hh().get("requests",!0)||{};delete b[a];Hh().set("requests",b,86400,!0)}
function Kh(a){var b=Hh().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(Q())-d.requestTime)){var e=d.authState,f=Dh(Ch(!1));lb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(Q())),Vg(a,d.method,e,{}));delete b[c]}}Hh().set("requests",b,86400,!0)}}
;function Lh(a,b){this.version=a;this.args=b}
;function Mh(a,b){this.topic=a;this.h=b}
Mh.prototype.toString=function(){return this.topic};var Nh=A("ytPubsub2Pubsub2Instance")||new M;M.prototype.subscribe=M.prototype.subscribe;M.prototype.unsubscribeByKey=M.prototype.W;M.prototype.publish=M.prototype.O;M.prototype.clear=M.prototype.clear;z("ytPubsub2Pubsub2Instance",Nh,void 0);var Oh=A("ytPubsub2Pubsub2SubscribedKeys")||{};z("ytPubsub2Pubsub2SubscribedKeys",Oh,void 0);var Ph=A("ytPubsub2Pubsub2TopicToKeys")||{};z("ytPubsub2Pubsub2TopicToKeys",Ph,void 0);var Qh=A("ytPubsub2Pubsub2IsAsync")||{};z("ytPubsub2Pubsub2IsAsync",Qh,void 0);
z("ytPubsub2Pubsub2SkipSubKey",null,void 0);function Rh(a,b){var c=Sh();c&&c.publish.call(c,a.toString(),a,b)}
function Th(a){var b=Uh,c=Sh();if(!c)return 0;var d=c.subscribe(b.toString(),function(e,f){var g=A("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=function(){if(Oh[d])try{if(f&&b instanceof Mh&&b!=e)try{var h=b.h,k=f;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!h.N){var l=new h;h.N=l.version}var n=h.N}catch(p){}if(!n||k.version!=n)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{f=Reflect.construct(h,
db(k.args))}catch(p){throw p.message="yt.pubsub2.Data.deserialize(): "+p.message,p;}}catch(p){throw p.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+p.message,p;}a.call(window,f)}catch(p){Rf(p)}},Qh[b.toString()]?A("yt.scheduler.instance")?jg(g):P(g,0):g())});
Oh[d]=!0;Ph[b.toString()]||(Ph[b.toString()]=[]);Ph[b.toString()].push(d);return d}
function Vh(){var a=Wh,b=Th(function(c){a.apply(void 0,arguments);Xh(b)});
return b}
function Xh(a){var b=Sh();b&&("number"===typeof a&&(a=[a]),G(a,function(c){b.unsubscribeByKey(c);delete Oh[c]}))}
function Sh(){return A("ytPubsub2Pubsub2Instance")}
;var Yh=wc||xc;function Zh(a){var b=Mb;return b?0<=b.toLowerCase().indexOf(a):!1}
;var $h=[],ai=!1;function bi(a,b){ai||($h.push({type:"EVENT",eventType:a,payload:b}),10<$h.length&&$h.shift())}
;function R(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];d=Error.call(this,a);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.args=[].concat(c instanceof Array?c:ha(u(c)))}
v(R,Error);var ci={},di=(ci.AUTH_INVALID="No user identifier specified.",ci.EXPLICIT_ABORT="Transaction was explicitly aborted.",ci.IDB_NOT_SUPPORTED="IndexedDB is not supported.",ci.MISSING_OBJECT_STORE="Object store not created.",ci.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",ci.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",ci.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",ci.EXECUTE_TRANSACTION_ON_CLOSED_DB=
"Can't start a transaction on a closed database",ci);function S(a,b,c){b=void 0===b?{}:b;c=void 0===c?di[a]:c;R.call(this,c,Object.assign({name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;Object.setPrototypeOf(this,S.prototype);ai||($h.push({type:"ERROR",payload:this}),10<$h.length&&$h.shift())}
v(S,R);function ei(a){S.call(this,"MISSING_OBJECT_STORE",{xk:a},di.MISSING_OBJECT_STORE);Object.setPrototypeOf(this,ei.prototype)}
v(ei,S);var fi=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function gi(a,b,c){if(a instanceof S||a instanceof R)return a;if("QuotaExceededError"===a.name)return new S("QUOTA_EXCEEDED",{objectStoreNames:c,dbName:b});if(yc&&"UnknownError"===a.name)return new S("QUOTA_MAYBE_EXCEEDED",{objectStoreNames:c,dbName:b});if("InvalidStateError"===a.name&&fi.some(function(d){return a.message.includes(d)}))return new S("EXECUTE_TRANSACTION_ON_CLOSED_DB",{objectStoreNames:c,
dbName:b});Object.setPrototypeOf(a,R.prototype);a.args=[{name:"IdbError",yk:a.name,dbName:b,objectStoreNames:c}];return a}
;function hi(a){if(!a)throw Error();throw a;}
function ii(a){return a}
function T(a){var b=this;this.i=a;this.state={status:"PENDING"};this.h=[];this.onRejected=[];this.i(function(c){if("PENDING"===b.state.status){b.state={status:"FULFILLED",value:c};c=u(b.h);for(var d=c.next();!d.done;d=c.next())d=d.value,d()}},function(c){if("PENDING"===b.state.status){b.state={status:"REJECTED",
reason:c};c=u(b.onRejected);for(var d=c.next();!d.done;d=c.next())d=d.value,d()}})}
T.all=function(a){return new T(function(b,c){var d=[],e=a.length;0===e&&b(d);for(var f={P:0};f.P<a.length;f={P:f.P},++f.P)ji(T.resolve(a[f.P]).then(function(g){return function(h){d[g.P]=h;e--;0===e&&b(d)}}(f)),function(g){c(g)})})};
T.resolve=function(a){return new T(function(b,c){a instanceof T?a.then(b,c):b(a)})};
T.reject=function(a){return new T(function(b,c){c(a)})};
T.prototype.then=function(a,b){var c=this,d=null!==a&&void 0!==a?a:ii,e=null!==b&&void 0!==b?b:hi;return new T(function(f,g){"PENDING"===c.state.status?(c.h.push(function(){ki(c,c,d,f,g)}),c.onRejected.push(function(){li(c,c,e,f,g)})):"FULFILLED"===c.state.status?ki(c,c,d,f,g):"REJECTED"===c.state.status&&li(c,c,e,f,g)})};
function ji(a,b){a.then(void 0,b)}
function ki(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof T?mi(a,b,f,d,e):d(f)}catch(g){e(g)}}
function li(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof T?mi(a,b,f,d,e):d(f)}catch(g){e(g)}}
function mi(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof T?mi(a,b,f,d,e):d(f)},function(f){e(f)})}
;function ni(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function oi(a){return new Promise(function(b,c){ni(a,b,c)})}
function U(a){return new T(function(b,c){ni(a,b,c)})}
;function pi(a,b){return new T(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()})}
;function qi(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(Q());this.i=!1}
m=qi.prototype;m.add=function(a,b,c){return ri(this,[a],"readwrite",function(d){return si(d,a).add(b,c)})};
m.clear=function(a){return ri(this,[a],"readwrite",function(b){return si(b,a).clear()})};
m.close=function(){var a;this.h.close();(null===(a=this.options)||void 0===a?0:a.closed)&&this.options.closed()};
m.count=function(a,b){return ri(this,[a],"readonly",function(c){return si(c,a).count(b)})};
m["delete"]=function(a,b){return ri(this,[a],"readwrite",function(c){return si(c,a)["delete"](b)})};
m.get=function(a,b){return ri(this,[a],"readwrite",function(c){return si(c,a).get(b)})};
function ri(a,b,c,d){c=void 0===c?"readonly":c;a.transactionCount++;try{var e=a.h.transaction(b,c);var f=ti(e,d)["catch"](function(g){throw gi(g,a.h.name,b.join());})}catch(g){f=g instanceof Error?Promise.reject(gi(g,a.h.name,b.join())):Promise.reject(gi(Error("unexpected transaction error: "+g),a.h.name,b.join()))}ui(a,f,b.join(),c);
return f}
function ui(a,b,c,d){cc(a,function f(){var g,h,k=this,l,n,p;return Aa(f,function(q){if(1==q.h)return g=Math.round(Q()),q.l=2,sa(q,b,4);2!=q.h?(h=Math.round(Q()),vi(k,!0,c,h-g),q.h=0,q.l=0):(l=ta(q),n=Math.round(Q()),p=n-g,l instanceof S&&("QUOTA_EXCEEDED"===l.type||"QUOTA_MAYBE_EXCEEDED"===l.type)&&bi("QUOTA_EXCEEDED",{dbName:k.h.name,objectStoreNames:c,transactionCount:k.transactionCount,transactionMode:d}),l instanceof S&&"UNKNOWN_ABORT"===l.type&&(bi("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:c,
transactionDuration:p,transactionCount:k.transactionCount,dbDuration:n-k.j}),k.i=!0),vi(k,!1,c,p),q.h=0)})})}
function vi(a,b,c,d){bi("TRANSACTION_ENDED",{objectStoreNames:c,connectionHasUnknownAbortedTransaction:a.i,duration:d,isSuccessful:b})}
function wi(a){this.h=a}
m=wi.prototype;m.add=function(a,b){return U(this.h.add(a,b))};
m.clear=function(){return U(this.h.clear()).then(function(){})};
m.count=function(a){return U(this.h.count(a))};
function xi(a,b){return yi(a,{query:b},function(c){return c["delete"]().then(function(){return c["continue"]()})}).then(function(){})}
m["delete"]=function(a){return a instanceof IDBKeyRange?xi(this,a):U(this.h["delete"](a))};
m.get=function(a){return U(this.h.get(a))};
m.index=function(a){return new zi(this.h.index(a))};
m.getName=function(){return this.h.name};
function yi(a,b,c){a=a.h.openCursor(b.query,b.direction);return Ai(a).then(function(d){return pi(d,c)})}
function Bi(a){var b=this;this.h=a;this.i=new Map;this.aborted=!1;this.done=new Promise(function(c,d){b.h.addEventListener("complete",function(){c()});
b.h.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.h.error)});
b.h.addEventListener("abort",function(){var e=b.h.error;if(e)d(e);else if(!b.aborted){e=S;for(var f=b.h.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(null===k)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.h.db.name,mode:b.h.mode});d(e)}})})}
function ti(a,b){var c=new Bi(a);return Ci(c,b)}
function Ci(a,b){var c=new Promise(function(d,e){ji(b(a).then(function(f){a.commit();d(f)}),e)});
return Promise.all([c,a.done]).then(function(d){return u(d).next().value})}
Bi.prototype.abort=function(){this.h.abort();this.aborted=!0;throw new S("EXPLICIT_ABORT");};
Bi.prototype.commit=function(){var a=this.h;a.commit&&!this.aborted&&a.commit()};
function si(a,b){var c=a.h.objectStore(b),d=a.i.get(c);d||(d=new wi(c),a.i.set(c,d));return d}
function zi(a){this.h=a}
zi.prototype.count=function(a){return U(this.h.count(a))};
zi.prototype["delete"]=function(a){return Di(this,{query:a},function(b){return b["delete"]().then(function(){return b["continue"]()})})};
zi.prototype.get=function(a){return U(this.h.get(a))};
zi.prototype.getKey=function(a){return U(this.h.getKey(a))};
function Di(a,b,c){a=a.h.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return Ai(a).then(function(d){return pi(d,c)})}
function Ei(a,b){this.request=a;this.cursor=b}
function Ai(a){return U(a).then(function(b){return null===b?null:new Ei(a,b)})}
m=Ei.prototype;m.advance=function(a){this.cursor.advance(a);return Ai(this.request)};
m["continue"]=function(a){this.cursor["continue"](a);return Ai(this.request)};
m["delete"]=function(){return U(this.cursor["delete"]()).then(function(){})};
m.getKey=function(){return this.cursor.key};
m.getValue=function(){return this.cursor.value};
m.update=function(a){return U(this.cursor.update(a))};function Fi(a,b,c){return cc(this,function e(){var f,g,h,k,l,n,p,q,r,w;return Aa(e,function(y){if(1==y.h)return f=self.indexedDB.open(a,b),g=c,h=g.blocked,k=g.blocking,l=g.ob,n=g.upgrade,p=g.closed,r=function(){q||(q=new qi(f.result,{closed:p}));return q},f.addEventListener("upgradeneeded",function(D){if(null===D.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");
if(null===f.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");D.dataLoss&&"none"!==D.dataLoss&&bi("IDB_DATA_CORRUPTED",{reason:D.dataLossMessage||"unknown reason",dbName:a});var da=r(),wa=new Bi(f.transaction);n&&n(da,D.oldVersion,D.newVersion,wa)}),h&&f.addEventListener("blocked",function(){h()}),sa(y,oi(f),2);
w=y.m;k&&w.addEventListener("versionchange",function(){k(r())});
w.addEventListener("close",function(){bi("IDB_UNEXPECTEDLY_CLOSED",{dbName:a,dbVersion:w.version});l&&l()});
return y["return"](r())})})}
function Gi(a,b){b=void 0===b?{}:b;return cc(this,function d(){var e,f,g;return Aa(d,function(h){e=self.indexedDB.deleteDatabase(a);f=b;(g=f.blocked)&&e.addEventListener("blocked",function(){g()});
return sa(h,oi(e),0)})})}
;function Hi(a){this.name="YtIdbMeta";this.options=a;this.i=!1}
function Ii(a,b,c){c=void 0===c?{}:c;c=void 0===c?{}:c;return Fi(a,b,c)}
Hi.prototype["delete"]=function(a){a=void 0===a?{}:a;return Gi(this.name,a)};
function Ji(){var a=Ki;if(!a.h){var b=function(){a.h===e&&(a.h=void 0)},c={blocking:function(f){f.close()},
closed:b,ob:b,upgrade:a.options.upgrade},d=function(){return cc(a,function g(){var h=this,k,l,n;return Aa(g,function(p){switch(p.h){case 1:return p.l=2,sa(p,Ii(h.name,h.options.version,c),4);case 4:k=p.m;if(!vc){p.h=5;break}a:{var q=u(Object.keys(h.options.Xa));for(var r=q.next();!r.done;r=q.next())if(r=r.value,!k.h.objectStoreNames.contains(r)){q=r;break a}q=void 0}l=q;if(void 0===l){p.h=5;break}if(!vc||h.i){p.h=7;break}h.i=!0;return sa(p,h["delete"](),8);case 8:return p["return"](d());case 7:throw new ei(l);
case 5:return p["return"](k);case 2:n=ta(p);if(n instanceof DOMException?"VersionError"===n.name:"DOMError"in self&&n instanceof DOMError?"VersionError"===n.name:n instanceof Object&&"message"in n&&"An attempt was made to open a database using a lower version than the existing version."===n.message)return p["return"](Ii(h.name,void 0,Object.assign(Object.assign({},c),{upgrade:void 0})));b();throw n;}})})};
var e=d();a.h=e}return a.h}
;var Ki=new Hi({Xa:{databases:!0},upgrade:function(a,b){1>b&&a.h.createObjectStore("databases",{keyPath:"actualName"})}});
function Li(a){return cc(this,function c(){var d;return Aa(c,function(e){if(1==e.h)return sa(e,Ji(),2);d=e.m;return e["return"](ri(d,["databases"],"readwrite",function(f){var g=si(f,"databases");return g.get(a.actualName).then(function(h){if(h?a.actualName!==h.actualName||a.publicName!==h.publicName||a.userIdentifier!==h.userIdentifier||a.signedIn!==h.signedIn||a.clearDataOnAuthChange!==h.clearDataOnAuthChange:1)return U(g.h.put(a,void 0)).then(function(){})})}))})})}
function Mi(){return cc(this,function b(){var c;return Aa(b,function(d){if(1==d.h)return sa(d,Ji(),2);c=d.m;return d["return"](c["delete"]("databases","yt-idb-test-do-not-use"))})})}
;var Ni;
function Oi(){return cc(this,function b(){var c,d;return Aa(b,function(e){switch(e.h){case 1:var f;if(f=Yh)f=/WebKit\/([0-9]+)/.exec(Mb),f=!!(f&&600<=parseInt(f[1],10));f&&(f=/WebKit\/([0-9]+)/.exec(Mb),f=!(f&&602<=parseInt(f[1],10)));if(f&&!O("ytidb_allow_on_ios_safari_v8_and_v9")||hc)return e["return"](!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e["return"](!1)}catch(g){return e["return"](!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e["return"](!1);e.l=
2;d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0,signedIn:!1};return sa(e,Li(d),4);case 4:return sa(e,Mi(),5);case 5:return e["return"](!0);case 2:return ta(e),e["return"](!1)}})})}
function Pi(){if(void 0!==Ni)return Ni;ai=!0;return Ni=Oi().then(function(a){ai=!1;return a})}
;var Qi;function Ri(){Qi||(Qi=new Fh("yt.offline"));return Qi}
;function Si(){Te.call(this);this.o=this.u=this.j=!1;this.l=Ti();Ui(this);Vi(this)}
v(Si,Te);function Ti(){var a=window.navigator.onLine;return void 0===a?!0:a}
function Vi(a){window.addEventListener("online",function(){a.l=!0;a.j&&Ue(a,"ytnetworkstatus-online");Wi(a);if(a.o&&O("offline_error_handling")){var b=Ri().get("errors",!0);if(b){for(var c in b)if(b[c]){var d=new R(c,"sent via offline_errors");d.name=b[c].name;d.stack=b[c].stack;Rf(d)}Ri().set("errors",{},2592E3,!0)}}})}
function Ui(a){window.addEventListener("offline",function(){a.l=!1;a.j&&Ue(a,"ytnetworkstatus-offline");Wi(a)})}
function Wi(a){a.u&&(Sf(new R("NetworkStatusManager state did not match poll",Q()-0)),a.u=!1)}
;function Xi(a){a=void 0===a?{}:a;Te.call(this);var b=this;this.l=this.u=0;Si.h||(Si.h=new Si);this.j=Si.h;this.j.j=!0;a.Va&&(this.j.o=!0);a.ha?(this.ha=a.ha,Ie(this.j,"ytnetworkstatus-online",function(){Yi(b,"publicytnetworkstatus-online")}),Ie(this.j,"ytnetworkstatus-offline",function(){Yi(b,"publicytnetworkstatus-offline")})):(Ie(this.j,"ytnetworkstatus-online",function(){Ue(b,"publicytnetworkstatus-online")}),Ie(this.j,"ytnetworkstatus-offline",function(){Ue(b,"publicytnetworkstatus-offline")}))}
v(Xi,Te);function Yi(a,b){a.ha?a.l?(mg(a.u),a.u=jg(function(){a.o!==b&&(Ue(a,b),a.o=b,a.l=Q())},a.ha-(Q()-a.l))):(Ue(a,b),a.o=b,a.l=Q()):Ue(a,b)}
;var Zi;function $i(a,b){b=void 0===b?{}:b;Pi().then(function(){Zi||(Zi=new Xi({Va:!0}));Zi.j.l!==Ti()&&Sf(new R("NetworkStatusManager isOnline does not match window status"));vh(a,b)})}
function aj(a,b){b=void 0===b?{}:b;Pi().then(function(){vh(a,b)})}
;function bj(a){var b=this;this.h=null;a?this.h=a:Bh()&&(this.h=Sg());kg(function(){Kh(b)},0,5E3)}
bj.prototype.isReady=function(){!this.h&&Bh()&&(this.h=Sg());return!!this.h};
function Vg(a,b,c,d){!H("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&Sf(new R("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var e=new R("innertube xhrclient not ready",b,c,d);Rf(e);throw e;}var f={headers:{"Content-Type":"application/json"},method:"POST",postParams:c,postBodyFormat:"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(p,q){if(d.onSuccess)d.onSuccess(q)},
onFetchSuccess:function(p){if(d.onSuccess)d.onSuccess(p)},
onError:function(p,q){if(d.onError)d.onError(q)},
onFetchError:function(p){if(d.onError)d.onError(p)},
timeout:d.timeout,withCredentials:!0},g="";(e=a.h.Ra)&&(g=e);var h=a.h.Ta||!1,k=Ch(h,g,d);Object.assign(f.headers,k);f.headers.Authorization&&!g&&(f.headers["x-origin"]=window.location.origin);e="/youtubei/"+a.h.innertubeApiVersion+"/"+b;var l={alt:"json"};a.h.Sa&&f.headers.Authorization||(l.key=a.h.innertubeApiKey);var n=hh(""+g+e,l||{},!0);Pi().then(function(p){if(d.retry&&O("retry_web_logging_batches")&&"www.youtube-nocookie.com"!=g){if(O("networkless_gel")&&!p||!O("networkless_gel"))var q=Ih(b,
c,k,h);if(q){var r=f.onSuccess,w=f.onFetchSuccess;f.onSuccess=function(y,D){Jh(q);r(y,D)};
c.onFetchSuccess=function(y,D){Jh(q);w(y,D)}}}try{O("use_fetch_for_op_xhr")?sh(n,f):O("networkless_gel")&&d.retry?(f.method="POST",!d.pb&&O("nwl_send_fast_on_unload")?aj(n,f):$i(n,f)):(f.method="POST",f.postParams||(f.postParams={}),vh(n,f))}catch(y){if("InvalidAccessError"==y.name)q&&(Jh(q),q=0),Sf(Error("An extension is blocking network request."));
else throw y;}q&&kg(function(){Kh(a)},0,5E3)})}
;function V(a,b,c){c=void 0===c?{}:c;var d=bj;H("ytLoggingEventsDefaultDisabled",!1)&&bj==bj&&(d=null);Xg(a,b,d,c)}
;var cj=[{ya:function(a){return"Cannot read property '"+a.key+"'"},
qa:{TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,
groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]}],Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}]}},{ya:function(a){return"Cannot call '"+a.key+"'"},
qa:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}}];function dj(){this.h=[];this.i=[]}
var ej;function fj(){ej||(ej=new dj);return ej}
;var gj=new M;function hj(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=ij(b);if(Infinity===e)break;var f=e>>3;switch(e&7){case 0:e=ij(b);if(2===f)return e;break;case 1:if(2===f)return;d+=8;break;case 2:e=ij(b);if(2===f)return a.substr(d,e);d+=e;break;case 5:if(2===f)return;d+=4;break;default:return}}while(d<c)}
function ij(a){var b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function jj(a,b,c,d){c+="."+a;a=kj(b);d[c]=a;return c.length+a.length}
function kj(a){return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}
;var lj=new Set,mj=0,nj=0,oj=0,pj=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function qj(a){rj(a,"WARNING")}
function rj(a,b,c,d,e,f){f=void 0===f?{}:f;f.name=c||H("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||H("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);c=f||{};b=void 0===b?"ERROR":b;b=void 0===b?"ERROR":b;if(a&&(O("console_log_js_exceptions")&&(d=[],d.push("Name: "+a.name),d.push("Message: "+a.message),a.hasOwnProperty("params")&&d.push("Error Params: "+JSON.stringify(a.params)),d.push("File name: "+a.fileName),d.push("Stacktrace: "+a.stack),window.console.log(d.join("\n"),a)),!(5<=mj))){var g=jd(a);
d=g.message||"Unknown Error";e=g.name||"UnknownError";var h=g.stack||a.h||"Not available";h.startsWith(e+": "+d)&&(f=h.split("\n"),f.shift(),h=f.join("\n"));f=g.lineNumber||"Not available";g=g.fileName||"Not available";if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var k=0,l=0;l<a.args.length;l++){var n=a.args[l],p="params."+l;k+=p.length;if(n)if(Array.isArray(n)){var q=c,r=k;for(k=0;k<n.length&&!(n[k]&&(r+=jj(k,n[k],p,q),500<r));k++);k=r}else if("object"===typeof n)for(q in q=void 0,r=c,
n){if(n[q]){var w=q;var y=n[q],D=r;w="string"!==typeof y||"clickTrackingParams"!==w&&"trackingParams"!==w?0:(y=hj(atob(y.replace(/-/g,"+").replace(/_/g,"/"))))?jj(w+".ve",y,p,D):0;k+=w;k+=jj(q,n[q],p,r);if(500<k)break}}else c[p]=kj(n),k+=c[p].length;else c[p]=kj(n),k+=c[p].length;if(500<=k)break}else if(a.hasOwnProperty("params")&&a.params)if(n=a.params,"object"===typeof a.params)for(l in p=0,n){if(n[l]&&(q="params."+l,r=kj(n[l]),c[q]=r,p+=q.length+r.length,500<p))break}else c.params=kj(n);navigator.vendor&&
!c.hasOwnProperty("vendor")&&(c["device.vendor"]=navigator.vendor);c={message:d,name:e,lineNumber:f,fileName:g,stack:h,params:c,sampleWeight:1};d=Number(a.columnNumber);isNaN(d)||(c.lineNumber=c.lineNumber+":"+d);if(void 0!==a.sampleWeight)a=a.sampleWeight;else a:{a=fj();d=u(a.i);for(e=d.next();!e.done;e=d.next())if(e=e.value,c.message&&c.message.match(e.wk)){a=e.weight;break a}a=u(a.h);for(d=a.next();!d.done;d=a.next())if(d=d.value,d.Fa(c)){a=d.weight;break a}a=1}c.sampleWeight=a;a=u(cj);for(d=a.next();!d.done;d=
a.next())if(d=d.value,d.qa[c.name])for(f=u(d.qa[c.name]),e=f.next();!e.done;e=f.next())if(g=e.value,e=c.message.match(g.regexp)){c.params["params.error.original"]=e[0];f=g.groups;g={};for(h=0;h<f.length;h++)g[f[h]]=e[h+1],c.params["params.error."+f[h]]=e[h+1];c.message=d.ya(g);break}c.params||(c.params={});a=fj();c.params["params.errorServiceSignature"]="msg="+a.i.length+"&cb="+a.h.length;c.params["params.serviceWorker"]="false";c.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length);
window.yterr&&"function"===typeof window.yterr&&window.yterr(c);a=0===c.sampleWeight;if(!lj.has(c.message)&&!a){"ERROR"===b?(gj.O("handleError",c),O("record_app_crashed_web")&&0===oj&&1===c.sampleWeight&&(oj++,V("appCrashed",{appCrashType:"APP_CRASH_TYPE_BREAKPAD"})),nj++):"WARNING"===b&&gj.O("handleWarning",c);if(O("kevlar_gel_error_routing")){d=b;a:{a=u(pj);for(e=a.next();!e.done;e=a.next())if(Zh(e.value.toLowerCase())){a=!0;break a}a=!1}if(!a){e={stackTrace:c.stack};c.fileName&&(e.filename=c.fileName);
a=c.lineNumber&&c.lineNumber.split?c.lineNumber.split(":"):[];0!==a.length&&(1!==a.length||isNaN(Number(a[0]))?2!==a.length||isNaN(Number(a[0]))||isNaN(Number(a[1]))||(e.lineNumber=Number(a[0]),e.columnNumber=Number(a[1])):e.lineNumber=Number(a[0]));a={level:"ERROR_LEVEL_UNKNOWN",message:c.message,errorClassName:c.name,sampleWeight:c.sampleWeight};"ERROR"===d?a.level="ERROR_LEVEL_ERROR":"WARNING"===d&&(a.level="ERROR_LEVEL_WARNNING");d={isObfuscated:!0,browserStackInfo:e};e={pageUrl:window.location.href,
kvPairs:[]};H("FEXP_EXPERIMENTS")&&(e.experimentIds=H("FEXP_EXPERIMENTS"));if(f=c.params)for(g=u(Object.keys(f)),h=g.next();!h.done;h=g.next())h=h.value,e.kvPairs.push({key:"client."+h,value:String(f[h])});f=H("SERVER_NAME",void 0);g=H("SERVER_VERSION",void 0);f&&g&&(e.kvPairs.push({key:"server.name",value:f}),e.kvPairs.push({key:"server.version",value:g}));V("clientError",{errorMetadata:e,stackTrace:d,logMessage:a});Og()}}if(!O("suppress_error_204_logging")){a=c.params||{};b={urlParams:{a:"logerror",
t:"jserror",type:c.name,msg:c.message.substr(0,250),line:c.lineNumber,level:b,"client.name":a.name},postParams:{url:H("PAGE_NAME",window.location.href),file:c.fileName},method:"POST"};a.version&&(b["client.version"]=a.version);if(b.postParams){c.stack&&(b.postParams.stack=c.stack);d=u(Object.keys(a));for(e=d.next();!e.done;e=d.next())e=e.value,b.postParams["client."+e]=a[e];if(a=H("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(d=u(Object.keys(a)),e=d.next();!e.done;e=d.next())e=e.value,b.postParams[e]=
a[e];a=H("SERVER_NAME",void 0);d=H("SERVER_VERSION",void 0);a&&d&&(b.postParams["server.name"]=a,b.postParams["server.version"]=d)}vh(H("ECATCHER_REPORT_HOST","")+"/error_204",b)}lj.add(c.message);mj++}}}
function sj(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];a.args||(a.args=[]);a.args.push.apply(a.args,c instanceof Array?c:ha(u(c)))}
;function tj(a){a&&(a.dataset?a.dataset[uj("loaded")]="true":a.setAttribute("data-loaded","true"))}
function vj(a,b){return a?a.dataset?a.dataset[uj(b)]:a.getAttribute("data-"+b):null}
var wj={};function uj(a){return wj[a]||(wj[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var xj=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,yj=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function zj(a,b,c){c=void 0===c?null:c;if(window.spf&&spf.script){c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(xj,""),c=c.replace(yj,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else Aj(a,b,c)}
function Aj(a,b,c){c=void 0===c?null:c;var d=Bj(a),e=document.getElementById(d),f=e&&vj(e,"loaded"),g=e&&!f;f?b&&b():(b&&(f=wg(d,b),b=""+Na(b),Cj[b]=f),g||(e=Dj(a,d,function(){vj(e,"loaded")||(tj(e),zg(d),P(Sa(Ag,d),0))},c)))}
function Dj(a,b,c,d){d=void 0===d?null:d;var e=Jc(document,"SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);Tb(e,gd(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function Ej(a){a=Bj(a);var b=document.getElementById(a);b&&(Ag(a),b.parentNode.removeChild(b))}
function Fj(a,b){if(a&&b){var c=""+Na(b);(c=Cj[c])&&yg(c)}}
function Bj(a){var b=document.createElement("a");Sb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+Vb(a)}
var Cj={};var Gj=[],Hj=!1;function Ij(){if(!O("disable_ad_status_on_html5_clients")&&(!O("condition_ad_status_fetch_on_consent_cookie_html5_clients")||od.get("CONSENT","").startsWith("YES+"))&&"1"!=kb()){var a=function(){Hj=!0;"google_ad_status"in window?N("DCLKSTAT",1):N("DCLKSTAT",2)};
try{zj("//static.doubleclick.net/instream/ad_status.js",a)}catch(b){}Gj.push(jg(function(){if(!(Hj||"google_ad_status"in window)){try{Fj("//static.doubleclick.net/instream/ad_status.js",a)}catch(b){}Hj=!0;N("DCLKSTAT",3)}},5E3))}}
function Jj(){return parseInt(H("DCLKSTAT",0),10)}
;function Kj(){this.i=!1;this.h=null}
Kj.prototype.initialize=function(a,b,c,d,e,f){var g=this;f=void 0===f?!1:f;b?(this.i=!0,zj(b,function(){g.i=!1;var h=0<=b.indexOf("/th/");(h?window.trayride:window.botguard)?Lj(g,c,d,f,h):(Ej(b),qj(new R("Unable to load Botguard","from "+b)))},e)):a&&(e=Jc(document,"SCRIPT"),e.textContent=a,e.nonce=Fa(),document.head.appendChild(e),document.head.removeChild(e),((a=a.includes("trayride"))?window.trayride:window.botguard)?Lj(this,c,d,f,a):qj(Error("Unable to load Botguard from JS")))};
function Lj(a,b,c,d,e){e=e?window.trayride.ad:window.botguard.bg;if(d)try{a.h=new e(b,c?function(){return c(b)}:Ja)}catch(f){qj(f)}else{try{a.h=new e(b)}catch(f){qj(f)}c&&c(b)}}
Kj.prototype.dispose=function(){this.h=null};var Mj=new Kj;function Nj(){return!!Mj.h}
function Oj(a){a=void 0===a?{}:a;a=void 0===a?{}:a;return Mj.h?Mj.h.hot?Mj.h.hot(void 0,void 0,a):Mj.h.invoke(void 0,void 0,a):null}
;var Pj=E().toString();
function Qj(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=E();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(Pj)for(a=1,b=0;b<Pj.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^Pj.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var Rj=x.ytLoggingDocDocumentNonce_||Qj();z("ytLoggingDocDocumentNonce_",Rj,void 0);var Sj={Wd:0,Yb:1,ic:2,Yg:3,Xd:4,Xj:5,Lh:6,0:"DEFAULT",1:"CHAT",2:"CONVERSATIONS",3:"MINIPLAYER",4:"DIALOG",5:"VOZ",6:"MUSIC_WATCH_TABS"};var Tj=1;function Uj(a){this.h=a}
function Vj(a){return new Uj({trackingParams:a})}
Uj.prototype.getAsJson=function(){var a={};void 0!==this.h.trackingParams?a.trackingParams=this.h.trackingParams:(a.veType=this.h.veType,void 0!==this.h.veCounter&&(a.veCounter=this.h.veCounter),void 0!==this.h.elementIndex&&(a.elementIndex=this.h.elementIndex));void 0!==this.h.dataElement&&(a.dataElement=this.h.dataElement.getAsJson());void 0!==this.h.youtubeData&&(a.youtubeData=this.h.youtubeData);return a};
Uj.prototype.toString=function(){return JSON.stringify(this.getAsJson())};
Uj.prototype.isClientVe=function(){return!this.h.trackingParams&&!!this.h.veType};function Wj(a){a=void 0===a?0:a;return 0==a?"client-screen-nonce":"client-screen-nonce."+a}
function Xj(a){a=void 0===a?0:a;return 0==a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function Yj(a){return H(Xj(void 0===a?0:a),void 0)}
z("yt_logging_screen.getRootVeType",Yj,void 0);function Zj(a){return(a=Yj(void 0===a?0:a))?new Uj({veType:a,youtubeData:void 0}):null}
function ak(){var a=H("csn-to-ctt-auth-info");a||(a={},N("csn-to-ctt-auth-info",a));return a}
function W(a){a=void 0===a?0:a;var b=H(Wj(a));if(!b&&!H("USE_CSN_FALLBACK",!0))return null;b||0!=a||(b="UNDEFINED_CSN");return b?b:null}
z("yt_logging_screen.getCurrentCsn",W,void 0);function bk(a,b,c){var d=ak();(c=W(c))&&delete d[c];b&&(d[a]=b)}
function ck(a){return ak()[a]}
z("yt_logging_screen.getCttAuthInfo",ck,void 0);function dk(a,b,c,d){c=void 0===c?0:c;if(a!==H(Wj(c))||b!==H(Xj(c)))if(bk(a,d,c),N(Wj(c),a),N(Xj(c),b),0==c||O("web_screen_associated_all_layers"))b=function(){setTimeout(function(){a&&Xg("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:Rj,clientScreenNonce:a},bj)},0)},"requestAnimationFrame"in window?window.requestAnimationFrame(b):b()}
z("yt_logging_screen.setCurrentScreen",dk,void 0);function ek(a){Lh.call(this,1,arguments);this.csn=a}
v(ek,Lh);var Uh=new Mh("screen-created",ek),fk=[],hk=gk,ik=0;function jk(a,b,c,d){c={csn:b,parentVe:c.getAsJson(),childVes:$a(d,function(f){return f.getAsJson()})};
d=u(d);for(var e=d.next();!e.done;e=d.next())e=e.value.getAsJson(),(ib(e)||!e.trackingParams&&!e.veType)&&qj(Error("Child VE logged with no data"));d={L:ck(b),M:b};"UNDEFINED_CSN"==b?kk("visualElementAttached",c,d):a?Xg("visualElementAttached",c,a,d):V("visualElementAttached",c,d)}
function lk(a,b){var c=O("use_default_events_client")?void 0:bj,d={csn:a,ve:b.getAsJson(),eventType:1},e={L:ck(a),M:a};"UNDEFINED_CSN"==a?kk("visualElementShown",d,e):c?Xg("visualElementShown",d,c,e):V("visualElementShown",d,e)}
function mk(a,b,c){var d="INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK";c={csn:b,ve:c.getAsJson(),gestureType:d};d={L:ck(b),M:b};"UNDEFINED_CSN"==b?kk("visualElementGestured",c,d):a?Xg("visualElementGestured",c,a,d):V("visualElementGestured",c,d)}
function gk(){for(var a=Math.random()+"",b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);255<e&&(b[c++]=e&255,e>>=8);b[c++]=e}return Bc(b)}
function kk(a,b,c){fk.push({payloadName:a,payload:b,options:c});ik||(ik=Vh())}
function Wh(a){if(fk){for(var b=u(fk),c=b.next();!c.done;c=b.next())c=c.value,c.payload&&(c.payload.csn=a.csn,Xg(c.payloadName,c.payload,null,c.options));fk.length=0}ik=0}
;function nk(a,b,c){jk(O("use_default_events_client")?void 0:bj,a,b,[c])}
;var ok={Vb:29434,Xb:3611,Ie:3854,Yf:42993,Gi:4724,nj:96370,qb:27686,rb:85013,sb:23462,ub:42016,vb:62407,wb:26926,tb:43781,xb:51236,yb:79148,zb:50160,Ab:77504,Mb:87907,Nb:18630,Ob:54445,Pb:80935,Qb:105675,Rb:37521,Sb:47786,Tb:98349,Ub:6827,Wb:7282,ac:32276,Zb:76278,cc:93911,dc:106531,ec:27259,fc:27262,hc:27263,jc:21759,kc:27107,lc:62936,mc:49568,nc:38408,oc:80637,pc:68727,qc:68728,sc:80353,tc:80356,uc:74610,wc:45707,xc:83962,yc:83970,zc:46713,Ac:89711,Bc:74612,Cc:93265,Dc:74611,Fc:113533,Gc:93252,
Hc:99357,Jc:94521,Kc:114252,Lc:113532,Mc:94522,Ic:94583,Nc:88E3,Oc:93253,Pc:93254,Qc:94387,Rc:94388,Sc:93255,Tc:97424,Ec:72502,Uc:110111,Vc:76019,Xc:117092,Yc:117093,Wc:89431,Zc:110466,bd:77240,cd:60508,dd:105350,ed:73393,fd:113534,gd:92098,hd:84517,jd:83759,kd:80357,ld:86113,md:72598,nd:72733,od:107349,pd:118203,qd:117431,rd:117429,sd:117430,td:117432,ud:117259,vd:97615,wd:31402,xd:84774,yd:95117,zd:98930,Ad:98931,Bd:98932,Cd:43347,Dd:45474,Ed:100352,Fd:84758,Gd:98443,Hd:117985,Id:74613,Jd:74614,
Kd:64502,Ld:74615,Md:74616,Nd:74617,Od:77820,Pd:74618,Qd:93278,Rd:93274,Sd:93275,Td:93276,Ud:22110,Vd:29433,Yd:82047,Zd:113550,ae:75836,be:75837,ce:42352,de:84512,ee:76065,ge:75989,he:16623,ie:32594,je:27240,ke:32633,le:74858,ne:3945,me:16989,oe:45520,pe:25488,qe:25492,re:25494,se:55760,te:14057,ue:18451,we:57204,xe:57203,ye:17897,ze:57205,Ae:18198,Be:17898,Ce:17909,De:43980,Ee:46220,Fe:11721,Ge:49954,He:96369,Je:56251,Ke:25624,Le:16906,Me:99999,Ne:68172,Oe:27068,Pe:47973,Qe:72773,Re:26970,Se:26971,
Te:96805,Ue:17752,Ve:73233,We:109512,Xe:22256,Ye:14115,Ze:22696,af:89278,bf:89277,cf:109513,df:43278,ef:43459,ff:43464,gf:89279,hf:43717,jf:55764,kf:22255,lf:89281,mf:40963,nf:43277,pf:43442,qf:91824,rf:96367,sf:36850,tf:72694,uf:37414,vf:36851,wf:73491,xf:54473,yf:43375,zf:46674,Af:32473,Bf:72901,Cf:72906,Df:50947,Ef:50612,Ff:50613,Gf:50942,Hf:84938,If:84943,Jf:84939,Kf:84941,Lf:84944,Mf:84940,Nf:84942,Of:35585,Pf:51926,Qf:79983,Rf:63238,Sf:18921,Tf:63241,Uf:57893,Vf:41182,Wf:33424,Xf:22207,Zf:36229,
ag:22206,cg:22205,dg:18993,eg:19001,fg:18990,gg:18991,hg:18997,jg:18725,kg:19003,lg:36874,mg:44763,ng:33427,og:67793,pg:22182,qg:37091,rg:34650,sg:50617,tg:47261,ug:22287,vg:25144,wg:97917,xg:62397,yg:36961,zg:108035,Ag:27426,Bg:27857,Cg:27846,Dg:27854,Eg:69692,Fg:61411,Gg:39299,Hg:38696,Ig:62520,Jg:36382,Kg:108701,Lg:50663,Mg:36387,Ng:14908,Og:37533,Pg:105443,Qg:61635,Rg:62274,Sg:65702,Tg:65703,Ug:65701,Vg:76256,Wg:37671,Xg:49953,Zg:36216,ah:28237,bh:39553,dh:29222,eh:26107,fh:38050,gh:26108,hh:26109,
ih:26110,jh:66881,kh:28236,lh:14586,mh:57929,nh:74723,oh:44098,ph:44099,qh:23528,rh:61699,sh:59149,uh:101951,vh:97346,wh:118051,xh:95102,yh:64882,zh:63595,Ah:63349,Bh:95101,Ch:75240,Dh:27039,Eh:68823,Fh:21537,Gh:83464,Hh:75707,Ih:83113,Jh:101952,Kh:101953,Mh:79610,Nh:24402,Oh:24400,Ph:32925,Qh:57173,Rh:64423,Sh:64424,Th:33986,Uh:100828,Vh:21409,Wh:11070,Xh:11074,Yh:17880,Zh:14001,bi:30709,ci:30707,di:30711,fi:30710,gi:30708,ai:26984,hi:63648,ii:63649,ji:51879,ki:111059,li:5754,mi:20445,ni:110386,
oi:113746,ri:66557,si:17310,ti:28631,vi:21589,wi:68012,xi:60480,yi:31571,zi:76980,Ai:41577,Bi:45469,Ci:38669,Di:13768,Ei:13777,Fi:62985,Hi:59369,Ii:43927,Ji:43928,Ki:12924,Li:100355,Ni:56219,Oi:27669,Pi:10337,Mi:47896,Qi:107598,Ri:96639,Si:107536,Ti:96661,Ui:96658,Vi:116646,Wi:96660,Xi:104443,Yi:96659,Zi:106442,aj:63667,bj:63668,cj:63669,dj:78314,ej:55761,fj:96368,gj:67374,hj:48992,ij:49956,jj:31961,kj:26388,lj:23811,mj:5E4,oj:47355,pj:47356,qj:37935,rj:45521,sj:21760,tj:83769,uj:49977,vj:49974,wj:93497,
xj:93498,yj:34325,zj:115803,Aj:100081,Bj:35309,Cj:68314,Dj:25602,Ej:100339,Fj:59018,Gj:18248,Hj:50625,Ij:9729,Jj:37168,Kj:37169,Lj:21667,Mj:16749,Nj:18635,Oj:39305,Pj:18046,Qj:53969,Rj:8213,Sj:93926,Tj:102852,Uj:110099,Vj:22678,Wj:69076,Yj:100856,Zj:17736,ak:3832,bk:55759,ck:64031,dk:93044,ek:93045,fk:34388,gk:17657,hk:17655,ik:39579,jk:39578,kk:77448,lk:8196,mk:11357,nk:69877,pk:8197,qk:82039};function pk(a){a=void 0===a?!1:a;L.call(this);this.h=new M(a);Tc(this,Sa(Rc,this.h))}
F(pk,L);pk.prototype.subscribe=function(a,b,c){return this.i?0:this.h.subscribe(a,b,c)};
pk.prototype.m=function(a,b){this.i||this.h.O.apply(this.h,arguments)};function qk(a,b,c){pk.call(this);this.j=a;this.l=b;this.o=c}
v(qk,pk);function rk(a,b,c){if(!a.i){var d=a.j;d.i||a.l!=d.h||(a={id:a.o,command:b},c&&(a.data=c),d.h.postMessage(We(a),d.l))}}
qk.prototype.A=function(){this.l=this.j=null;pk.prototype.A.call(this)};function sk(a){L.call(this);this.h=a;this.h.subscribe("command",this.Aa,this);this.j={};this.m=!1}
v(sk,L);m=sk.prototype;m.start=function(){this.m||this.i||(this.m=!0,rk(this.h,"RECEIVING"))};
m.Aa=function(a,b,c){if(this.m&&!this.i){var d=b||{};switch(a){case "addEventListener":"string"===typeof d.event&&(a=d.event,a in this.j||(c=C(this.hb,this,a),this.j[a]=c,this.addEventListener(a,c)));break;case "removeEventListener":"string"===typeof d.event&&tk(this,d.event);break;default:this.l.isReady()&&this.l.isExternalMethodAvailable(a,c||null)&&(b=uk(a,b||{}),c=this.l.handleExternalCall(a,b,c||null),(c=vk(a,c))&&this.m&&!this.i&&rk(this.h,a,c))}}};
m.hb=function(a,b){this.m&&!this.i&&rk(this.h,a,this.la(a,b))};
m.la=function(a,b){if(null!=b)return{value:b}};
function tk(a,b){b in a.j&&(a.removeEventListener(b,a.j[b]),delete a.j[b])}
m.A=function(){var a=this.h;a.i||vf(a.h,"command",this.Aa,this);this.h=null;for(var b in this.j)tk(this,b);L.prototype.A.call(this)};function wk(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function xk(a,b,c){"string"===typeof a&&(a={mediaContentUrl:a,startSeconds:b,suggestedQuality:c});a:{if((b=a.mediaContentUrl)&&(b=/\/([ve]|embed)\/([^#?]+)/.exec(b))&&b[2]){b=b[2];break a}b=null}a.videoId=b;return yk(a)}
function yk(a,b,c){if("string"===typeof a)return{videoId:a,startSeconds:b,suggestedQuality:c};b=["endSeconds","startSeconds","mediaContentUrl","suggestedQuality","videoId"];c={};for(var d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}
function zk(a,b,c,d){if(B(a)&&!Array.isArray(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};"string"===typeof a&&16===a.length?b.list="PL"+a:b.playlist=a;return b}
;function Ak(a,b){sk.call(this,b);this.l=a;this.start()}
v(Ak,sk);Ak.prototype.addEventListener=function(a,b){this.l.addEventListener(a,b)};
Ak.prototype.removeEventListener=function(a,b){this.l.removeEventListener(a,b)};
function uk(a,b){switch(a){case "loadVideoById":return b=yk(b),[b];case "cueVideoById":return b=yk(b),[b];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return b=zk(b),[b];case "cuePlaylist":return b=zk(b),[b];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];
case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey,b.key,b.code]}return[]}
function vk(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
Ak.prototype.la=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return sk.prototype.la.call(this,a,b)};
Ak.prototype.A=function(){sk.prototype.A.call(this);delete this.l};function Bk(a,b,c){L.call(this);var d=this;c=c||H("POST_MESSAGE_ORIGIN",void 0)||window.document.location.protocol+"//"+window.document.location.hostname;this.j=b||null;this.B="*";this.l=c;this.sessionId=null;this.channel="widget";this.F=!!a;this.u=function(e){a:if(!("*"!=d.l&&e.origin!=d.l||d.j&&e.source!=d.j||"string"!==typeof e.data)){try{var f=JSON.parse(e.data)}catch(g){break a}if(!(null==f||d.F&&(d.sessionId&&d.sessionId!=f.id||d.channel&&d.channel!=f.channel))&&f)switch(f.event){case "listening":"null"!=
e.origin&&(d.l=d.B=e.origin);d.j=e.source;d.sessionId=f.id;d.h&&(d.h(),d.h=null);break;case "command":d.m&&(!d.o||0<=Ya(d.o,f.func))&&d.m(f.func,f.args,e.origin)}}};
this.o=this.h=this.m=null;window.addEventListener("message",this.u)}
v(Bk,L);Bk.prototype.sendMessage=function(a,b){var c=b||this.j;if(c){this.sessionId&&(a.id=this.sessionId);this.channel&&(a.channel=this.channel);try{var d=JSON.stringify(a);c.postMessage(d,this.B)}catch(e){Sf(e)}}};
Bk.prototype.A=function(){window.removeEventListener("message",this.u);L.prototype.A.call(this)};function Ck(){var a=this.i=new Bk(!!H("WIDGET_ID_ENFORCE")),b=C(this.eb,this);a.m=b;a.o=null;this.i.channel="widget";if(a=H("WIDGET_ID"))this.i.sessionId=a;this.l=[];this.o=!1;this.m={}}
m=Ck.prototype;m.eb=function(a,b,c){"addEventListener"==a&&b?(a=b[0],this.m[a]||"onReady"==a||(this.addEventListener(a,Dk(this,a)),this.m[a]=!0)):this.za(a,b,c)};
m.za=function(){};
function Dk(a,b){return C(function(c){this.sendMessage(b,c)},a)}
m.addEventListener=function(){};
m.Ia=function(){this.o=!0;this.sendMessage("initialDelivery",this.ma());this.sendMessage("onReady");G(this.l,this.Ba,this);this.l=[]};
m.ma=function(){return null};
function Ek(a,b){a.sendMessage("infoDelivery",b)}
m.Ba=function(a){this.o?this.i.sendMessage(a):this.l.push(a)};
m.sendMessage=function(a,b){this.Ba({event:a,info:void 0==b?null:b})};
m.dispose=function(){this.i=null};function Fk(a){Ck.call(this);this.h=a;this.j=[];this.addEventListener("onReady",C(this.ab,this));this.addEventListener("onVideoProgress",C(this.lb,this));this.addEventListener("onVolumeChange",C(this.mb,this));this.addEventListener("onApiChange",C(this.gb,this));this.addEventListener("onPlaybackQualityChange",C(this.ib,this));this.addEventListener("onPlaybackRateChange",C(this.jb,this));this.addEventListener("onStateChange",C(this.kb,this));this.addEventListener("onWebglSettingsChanged",C(this.nb,
this))}
v(Fk,Ck);m=Fk.prototype;m.za=function(a,b,c){if(this.h.isExternalMethodAvailable(a,c)){b=b||[];if(0<b.length&&wk(a)){var d=b;if(B(d[0])&&!Array.isArray(d[0]))d=d[0];else{var e={};switch(a){case "loadVideoById":case "cueVideoById":e=yk.apply(window,d);break;case "loadVideoByUrl":case "cueVideoByUrl":e=xk.apply(window,d);break;case "loadPlaylist":case "cuePlaylist":e=zk.apply(window,d)}d=e}b.length=1;b[0]=d}this.h.handleExternalCall(a,b,c);wk(a)&&Ek(this,this.ma())}};
m.ab=function(){var a=C(this.Ia,this);this.i.h=a};
m.addEventListener=function(a,b){this.j.push({eventType:a,listener:b});this.h.addEventListener(a,b)};
m.ma=function(){if(!this.h)return null;var a=this.h.getApiInterface();cb(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c];if(0===e.search("get")||0===e.search("is")){var f=0;0===e.search("get")?f=3:0===e.search("is")&&(f=2);f=e.charAt(f).toLowerCase()+e.substr(f+1);try{var g=this.h[e]();b[f]=g}catch(h){}}}b.videoData=this.h.getVideoData();b.currentTimeLastUpdated_=E()/1E3;return b};
m.kb=function(a){a={playerState:a,currentTime:this.h.getCurrentTime(),duration:this.h.getDuration(),videoData:this.h.getVideoData(),videoStartBytes:0,videoBytesTotal:this.h.getVideoBytesTotal(),videoLoadedFraction:this.h.getVideoLoadedFraction(),playbackQuality:this.h.getPlaybackQuality(),availableQualityLevels:this.h.getAvailableQualityLevels(),currentTimeLastUpdated_:E()/1E3,playbackRate:this.h.getPlaybackRate(),mediaReferenceTime:this.h.getMediaReferenceTime()};this.h.getVideoUrl&&(a.videoUrl=
this.h.getVideoUrl());this.h.getVideoContentRect&&(a.videoContentRect=this.h.getVideoContentRect());this.h.getProgressState&&(a.progressState=this.h.getProgressState());this.h.getPlaylist&&(a.playlist=this.h.getPlaylist());this.h.getPlaylistIndex&&(a.playlistIndex=this.h.getPlaylistIndex());this.h.getStoryboardFormat&&(a.storyboardFormat=this.h.getStoryboardFormat());Ek(this,a)};
m.ib=function(a){Ek(this,{playbackQuality:a})};
m.jb=function(a){Ek(this,{playbackRate:a})};
m.gb=function(){for(var a=this.h.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.h.getOptions(e);b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],l=this.h.getOption(e,k);b[e][k]=l}}this.sendMessage("apiInfoDelivery",b)};
m.mb=function(){Ek(this,{muted:this.h.isMuted(),volume:this.h.getVolume()})};
m.lb=function(a){a={currentTime:a,videoBytesLoaded:this.h.getVideoBytesLoaded(),videoLoadedFraction:this.h.getVideoLoadedFraction(),currentTimeLastUpdated_:E()/1E3,playbackRate:this.h.getPlaybackRate(),mediaReferenceTime:this.h.getMediaReferenceTime()};this.h.getProgressState&&(a.progressState=this.h.getProgressState());Ek(this,a)};
m.nb=function(){var a={sphericalProperties:this.h.getSphericalProperties()};Ek(this,a)};
m.dispose=function(){Ck.prototype.dispose.call(this);for(var a=0;a<this.j.length;a++){var b=this.j[a];this.h.removeEventListener(b.eventType,b.listener)}this.j=[]};function Gk(a,b,c){L.call(this);this.h=a;this.l=c;this.m=dg(window,"message",C(this.o,this));this.j=new qk(this,a,b);Tc(this,Sa(Rc,this.j))}
v(Gk,L);Gk.prototype.o=function(a){var b;if(b=!this.i)if(b=a.origin==this.l)a:{b=this.h;do{b:{var c=a.source;do{if(c==b){c=!0;break b}if(c==c.parent)break;c=c.parent}while(null!=c);c=!1}if(c){b=!0;break a}b=b.opener}while(null!=b);b=!1}if(b&&(b=a.data,"string"===typeof b)){try{b=JSON.parse(b)}catch(d){return}b.command&&(c=this.j,c.i||c.m("command",b.command,b.data,a.origin))}};
Gk.prototype.A=function(){eg(this.m);this.h=null;L.prototype.A.call(this)};function Hk(){var a=mb(Ik),b;return kf(new cf(function(c,d){a.onSuccess=function(e){mh(e)?c(e):d(new Jk("Request failed, status="+(e&&"status"in e?e.status:-1),"net.badstatus",e))};
a.onError=function(e){d(new Jk("Unknown request error","net.unknown",e))};
a.onTimeout=function(e){d(new Jk("Request timed out","net.timeout",e))};
b=vh("//googleads.g.doubleclick.net/pagead/id",a)}),function(c){c instanceof lf&&b.abort();
return hf(c)})}
function Jk(a,b,c){Va.call(this,a+", errorCode="+b);this.errorCode=b;this.xhr=c;this.name="PromiseAjaxError"}
v(Jk,Va);function Kk(){this.i=0;this.h=null}
Kk.prototype.then=function(a,b,c){return 1===this.i&&a?(a=a.call(c,this.h),bf(a)?a:Lk(a)):2===this.i&&b?(a=b.call(c,this.h),bf(a)?a:Mk(a)):this};
Kk.prototype.getValue=function(){return this.h};
Kk.prototype.$goog_Thenable=!0;function Mk(a){var b=new Kk;a=void 0===a?null:a;b.i=2;b.h=void 0===a?null:a;return b}
function Lk(a){var b=new Kk;a=void 0===a?null:a;b.i=1;b.h=void 0===a?null:a;return b}
;function Nk(a){Va.call(this,a.message||a.description||a.name);this.isMissing=a instanceof Ok;this.isTimeout=a instanceof Jk&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof lf}
v(Nk,Va);Nk.prototype.name="BiscottiError";function Ok(){Va.call(this,"Biscotti ID is missing from server")}
v(Ok,Va);Ok.prototype.name="BiscottiMissingError";var Ik={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},Pk=null;
function Zg(){if(O("disable_biscotti_fetch_on_html5_clients"))return hf(Error("Fetching biscotti ID is disabled."));if(O("condition_biscotti_fetch_on_consent_cookie_html5_clients")&&!od.get("CONSENT","").startsWith("YES+"))return hf(Error("User has not consented - not fetching biscotti id."));if("1"==kb())return hf(Error("Biscotti ID is not available in private embed mode"));Pk||(Pk=kf(Hk().then(Qk),function(a){return Rk(2,a)}));
return Pk}
function Qk(a){a=a.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new Ok;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new Ok;a=a.id;$g(a);Pk=Lk(a);Sk(18E5,2);return a}
function Rk(a,b){var c=new Nk(b);$g("");Pk=Mk(c);0<a&&Sk(12E4,a-1);throw c;}
function Sk(a,b){P(function(){kf(Hk().then(Qk,function(c){return Rk(b,c)}),Ja)},a)}
function Tk(){try{var a=A("yt.ads.biscotti.getId_");return a?a():Zg()}catch(b){return hf(b)}}
;function Uk(a){if("1"!=kb()){a&&Yg();try{Tk().then(function(){},function(){}),P(Uk,18E5)}catch(b){Rf(b)}}}
;var X=A("ytglobal.prefsUserPrefsPrefs_")||{};z("ytglobal.prefsUserPrefsPrefs_",X,void 0);function Vk(){this.h=H("ALT_PREF_COOKIE_NAME","PREF");this.i=H("ALT_PREF_COOKIE_DOMAIN","youtube.com");var a=od.get(""+this.h,void 0);if(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(X[d]=c.toString())}}}
m=Vk.prototype;m.get=function(a,b){Wk(a);Xk(a);var c=void 0!==X[a]?X[a].toString():null;return null!=c?c:b?b:""};
m.set=function(a,b){Wk(a);Xk(a);if(null==b)throw Error("ExpectedNotNull");X[a]=b.toString()};
m.remove=function(a){Wk(a);Xk(a);delete X[a]};
m.save=function(){var a=this.h,b=[],c;for(c in X)b.push(c+"="+encodeURIComponent(String(X[c])));Eh(a,b.join("&"),63072E3,this.i)};
m.clear=function(){for(var a in X)delete X[a]};
function Xk(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function Wk(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function Yk(a){a=void 0!==X[a]?X[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
Ka(Vk);function Zk(){this.i=new Set;this.h=new Set;this.j=new Map}
Zk.prototype.clear=function(){this.i.clear();this.h.clear();this.j.clear()};
Ka(Zk);function $k(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];if(!al(a)||c.some(function(e){return!al(e)}))throw Error("Only objects may be merged.");
c=u(c);for(d=c.next();!d.done;d=c.next())bl(a,d.value);return a}
function bl(a,b){for(var c in b)if(al(b[c])){if(c in a&&!al(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});bl(a[c],b[c])}else if(cl(b[c])){if(c in a&&!cl(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);dl(a[c],b[c])}else a[c]=b[c];return a}
function dl(a,b){for(var c=u(b),d=c.next();!d.done;d=c.next())d=d.value,al(d)?a.push(bl({},d)):cl(d)?a.push(dl([],d)):a.push(d);return a}
function al(a){return"object"===typeof a&&!Array.isArray(a)}
function cl(a){return"object"===typeof a&&Array.isArray(a)}
;var el={},fl=0;
function gl(a,b,c,d,e){e=void 0===e?"":e;if(a)if(c&&!Zh("cobalt")){if(a){a instanceof I||(a="object"==typeof a&&a.U?a.T():String(a),Jb.test(a)?a=new I(a,Fb):(a=String(a),a=a.replace(/(%0A|%0D)/g,""),a=(b=a.match(Ib))&&Hb.test(b[1])?new I(a,Fb):null));a=Gb(a||Lb);if("about:invalid#zClosurez"===a||a.startsWith("data"))a="";else{if(!(a instanceof Pb)){b="object"==typeof a;var f=null;b&&a.na&&(f=a.ka());a=Rb(wb(b&&a.U?a.T():String(a)),f)}a instanceof Pb&&a.constructor===Pb?a=a.h:(La(a),a="type_error:SafeHtml");
a=encodeURIComponent(String(We(a.toString())))}/^[\s\xa0]*$/.test(a)||(a=Ic("IFRAME",{src:'javascript:"<body><img src=\\""+'+a+'+"\\"></body>"',style:"display:none"}),(9==a.nodeType?a:a.ownerDocument||a.document).body.appendChild(a))}}else if(e)wh(a,b,"POST",e,d);else if(H("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||d)wh(a,b,"GET","",d);else{b:{try{var g=new Wa({url:a});if(g.j&&g.i||g.l){var h=Xb(a.match(Wb)[5]||null),k;if(!(k=!h||!h.endsWith("/aclk"))){var l=a.search(bc);d:{for(c=0;0<=(c=a.indexOf("ri",
c))&&c<l;){var n=a.charCodeAt(c-1);if(38==n||63==n){var p=a.charCodeAt(c+2);if(!p||61==p||38==p||35==p){var q=c;break d}}c+=3}q=-1}if(0>q)var r=null;else{var w=a.indexOf("&",q);if(0>w||w>l)w=l;q+=3;r=decodeURIComponent(a.substr(q,w-q).replace(/\+/g," "))}k="1"!==r}f=!k;break b}}catch(y){}f=!1}f?hl(a)?(b&&b(),f=!0):f=!1:f=!1;f||il(a,b)}}
function hl(a,b){try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,void 0===b?"":b))return!0}catch(c){}return!1}
function il(a,b){var c=new Image,d=""+fl++;el[d]=c;c.onload=c.onerror=function(){b&&el[d]&&b();delete el[d]};
c.src=a}
;function jl(a,b){Lh.call(this,1,arguments)}
v(jl,Lh);function kl(a,b){Lh.call(this,1,arguments)}
v(kl,Lh);var ll=new Mh("aft-recorded",jl),ml=new Mh("timing-sent",kl);var nl=window;function ol(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
var pl=nl.performance||nl.mozPerformance||nl.msPerformance||nl.webkitPerformance||new ol;var ql=!1;C(pl.clearResourceTimings||pl.webkitClearResourceTimings||pl.mozClearResourceTimings||pl.msClearResourceTimings||pl.oClearResourceTimings||Ja,pl);function rl(a){var b=sl(a);if(b.aft)return b.aft;a=H((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=a.length,d=0;d<c;d++){var e=b[a[d]];if(e)return e}return NaN}
function tl(a){var b;(b=A("ytcsi."+(a||"")+"data_"))||(b={tick:{},info:{}},Ta("ytcsi."+(a||"")+"data_",b));return b}
function ul(a){a=tl(a);a.info||(a.info={});return a.info}
function sl(a){a=tl(a);a.tick||(a.tick={});return a.tick}
function vl(a){var b=tl(a).nonce;b||(b=Qj(),tl(a).nonce=b);return b}
function wl(a){var b=sl(a||""),c=rl(a);c&&!ql&&(Rh(ll,new jl(Math.round(c-b._start),a)),ql=!0)}
;function xl(){var a=A("ytcsi.debug");a||(a=[],z("ytcsi.debug",a,void 0),z("ytcsi.reference",{},void 0));return a}
function yl(a){a=a||"";var b=A("ytcsi.reference");b||(xl(),b=A("ytcsi.reference"));if(b[a])return b[a];var c=xl(),d={timerName:a,info:{},tick:{},span:{}};c.push(d);return b[a]=d}
;var zl=x.ytLoggingLatencyUsageStats_||{};z("ytLoggingLatencyUsageStats_",zl,void 0);function Al(){this.h=0}
function Bl(){Al.h||(Al.h=new Al);return Al.h}
Al.prototype.tick=function(a,b,c){Cl(this,"tick_"+a+"_"+b)||V("latencyActionTicked",{tickName:a,clientActionNonce:b},{timestamp:c})};
Al.prototype.info=function(a,b){var c=Object.keys(a).join("");Cl(this,"info_"+c+"_"+b)||(c=Object.assign({},a),c.clientActionNonce=b,V("latencyActionInfo",c))};
Al.prototype.span=function(a,b){var c=Object.keys(a).join("");Cl(this,"span_"+c+"_"+b)||(a.clientActionNonce=b,V("latencyActionSpan",a))};
function Cl(a,b){zl[b]=zl[b]||{count:0};var c=zl[b];c.count++;c.time=Q();a.h||(a.h=kg(function(){var d=Q(),e;for(e in zl)zl[e]&&6E4<d-zl[e].time&&delete zl[e];a&&(a.h=0)},0,5E3));
return 5<c.count?(6===c.count&&1>1E5*Math.random()&&(c=new R("CSI data exceeded logging limit with key",b.split("_")),0<=b.indexOf("plev")||qj(c)),!0):!1}
;var Y={},Dl=(Y.ad_allowed="adTypesAllowed",Y.yt_abt="adBreakType",Y.ad_cpn="adClientPlaybackNonce",Y.ad_docid="adVideoId",Y.yt_ad_an="adNetworks",Y.ad_at="adType",Y.aida="appInstallDataAgeMs",Y.browse_id="browseId",Y.p="httpProtocol",Y.t="transportProtocol",Y.cpn="clientPlaybackNonce",Y.ccs="creatorInfo.creatorCanaryState",Y.csn="clientScreenNonce",Y.docid="videoId",Y.GetHome_rid="requestIds",Y.GetSearch_rid="requestIds",Y.GetPlayer_rid="requestIds",Y.GetWatchNext_rid="requestIds",Y.GetBrowse_rid=
"requestIds",Y.GetLibrary_rid="requestIds",Y.is_continuation="isContinuation",Y.is_nav="isNavigation",Y.b_p="kabukiInfo.browseParams",Y.is_prefetch="kabukiInfo.isPrefetch",Y.is_secondary_nav="kabukiInfo.isSecondaryNav",Y.prev_browse_id="kabukiInfo.prevBrowseId",Y.query_source="kabukiInfo.querySource",Y.voz_type="kabukiInfo.vozType",Y.yt_lt="loadType",Y.mver="creatorInfo.measurementVersion",Y.yt_ad="isMonetized",Y.nr="webInfo.navigationReason",Y.nrsu="navigationRequestedSameUrl",Y.ncnp="webInfo.nonPreloadedNodeCount",
Y.pnt="performanceNavigationTiming",Y.prt="playbackRequiresTap",Y.plt="playerInfo.playbackType",Y.pis="playerInfo.playerInitializedState",Y.paused="playerInfo.isPausedOnLoad",Y.yt_pt="playerType",Y.fmt="playerInfo.itag",Y.yt_pl="watchInfo.isPlaylist",Y.yt_pre="playerInfo.preloadType",Y.yt_ad_pr="prerollAllowed",Y.pa="previousAction",Y.yt_red="isRedSubscriber",Y.rce="mwebInfo.responseContentEncoding",Y.scrh="screenHeight",Y.scrw="screenWidth",Y.st="serverTimeMs",Y.ssdm="shellStartupDurationMs",Y.br_trs=
"tvInfo.bedrockTriggerState",Y.kebqat="kabukiInfo.earlyBrowseRequestInfo.abandonmentType",Y.kebqa="kabukiInfo.earlyBrowseRequestInfo.adopted",Y.label="tvInfo.label",Y.is_mdx="tvInfo.isMdx",Y.preloaded="tvInfo.isPreloaded",Y.upg_player_vis="playerInfo.visibilityState",Y.query="unpluggedInfo.query",Y.upg_chip_ids_string="unpluggedInfo.upgChipIdsString",Y.yt_vst="videoStreamType",Y.vph="viewportHeight",Y.vpw="viewportWidth",Y.yt_vis="isVisible",Y.rcl="mwebInfo.responseContentLength",Y.GetSettings_rid=
"requestIds",Y.GetTrending_rid="requestIds",Y.GetMusicSearchSuggestions_rid="requestIds",Y.REQUEST_ID="requestIds",Y),El="isContinuation isNavigation kabukiInfo.earlyBrowseRequestInfo.adopted kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized navigationRequestedSameUrl performanceNavigationTiming playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist playbackRequiresTap".split(" "),Fl={},Gl=(Fl.ccs="CANARY_STATE_",Fl.mver="MEASUREMENT_VERSION_",
Fl.pis="PLAYER_INITIALIZED_STATE_",Fl.yt_pt="LATENCY_PLAYER_",Fl.pa="LATENCY_ACTION_",Fl.yt_vst="VIDEO_STREAM_TYPE_",Fl),Hl="all_vc ap aq c cver cbrand cmodel cplatform ctheme ei l_an l_mm plid srt yt_fss yt_li vpst vpni2 vpil2 icrc icrt pa GetAccountOverview_rid GetHistory_rid cmt d_vpct d_vpnfi d_vpni nsru pc pfa pfeh pftr pnc prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis ytu_pvis yt_ref yt_sts tds".split(" ");
function Il(a){return!!H("FORCE_CSI_ON_GEL",!1)||O("csi_on_gel")||!!tl(a).useGel}
function Jl(a){a=tl(a);if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}else a.gel={gelTicks:{},gelInfos:{}};return a.gel}
;function Kl(a,b,c){if(null!==b)if(ul(c)[a]=b,Il(c)){var d=b;b=Jl(c);if(b.gelInfos)b.gelInfos["info_"+a]=!0;else{var e={};b.gelInfos=(e["info_"+a]=!0,e)}if(a.match("_rid")){var f=a.split("_rid")[0];a="REQUEST_ID"}if(a in Dl){b=Dl[a];0<=Ya(El,b)&&(d=!!d);a in Gl&&"string"===typeof d&&(d=Gl[a]+d.toUpperCase());a=d;d=b.split(".");for(var g=e={},h=0;h<d.length-1;h++){var k=d[h];g[k]={};g=g[k]}g[d[d.length-1]]="requestIds"===b?[{id:a,endpoint:f}]:a;f=$k({},e)}else 0<=Ya(Hl,a)||qj(new R("Unknown label logged with GEL CSI",
a)),f=void 0;f&&Il(c)&&(b=yl(c||""),$k(b.info,f),b=Jl(c),b.gelInfos||(b.gelInfos={}),$k(b.gelInfos,f),c=vl(c),Bl().info(f,c))}else yl(c||"").info[a]=b}
function Ll(a,b,c){var d=sl(c);if(O("use_first_tick")&&Ml(a,c))return d[a];if(!b&&"_"!==a[0]){var e=a;pl.mark&&(0==e.lastIndexOf("mark_",0)||(e="mark_"+e),c&&(e+=" ("+c+")"),pl.mark(e))}e=b||Q();d[a]=e;e=Jl(c);e.gelTicks&&(e.gelTicks["tick_"+a]=!0);c||b||Q();if(Il(c)){yl(c||"").tick[a]=b||Q();e=vl(c);if("_start"===a){var f=Bl();Cl(f,"baseline_"+e)||V("latencyActionBaselined",{clientActionNonce:e},{timestamp:b})}else Bl().tick(a,e,b);wl(c);e=!0}else e=!1;if(!e){if(!A("yt.timing."+(c||"")+"pingSent_")&&
(f=H((c||"")+"TIMING_ACTION",void 0),e=sl(c),A("ytglobal.timing"+(c||"")+"ready_")&&f&&Ml("_start")&&rl(c)))if(wl(c),c)Nl(c);else{f=!0;var g=H("TIMING_WAIT",[]);if(g.length)for(var h=0,k=g.length;h<k;++h)if(!(g[h]in e)){f=!1;break}f&&Nl(c)}yl(c||"").tick[a]=b||Q()}return d[a]}
function Ml(a,b){var c=sl(b);return a in c}
function Nl(a){if(!Il(a)){var b=sl(a),c=ul(a),d=b._start,e=H("CSI_SERVICE_NAME","youtube"),f={v:2,s:e,action:H((a||"")+"TIMING_ACTION",void 0)},g=c.srt;void 0!==b.srt&&delete c.srt;b.aft=rl(a);var h=sl(a),k=h.pbr,l=h.vc;h=h.pbs;k&&l&&h&&k<l&&l<h&&ul(a).yt_pvis&&"youtube"===e&&(Kl("yt_lt","hot_bg",a),e=b.vc,k=b.pbs,delete b.aft,c.aft=Math.round(k-e));for(var n in c)"_"!==n.charAt(0)&&(f[n]=c[n]);b.ps=Q();n={};e=[];for(var p in b)"_"!==p.charAt(0)&&(k=Math.round(b[p]-d),n[p]=k,e.push(p+"."+k));f.rt=
e.join(",");b=!!c.ap;O("debug_csi_data")&&(c=A("yt.timing.csiData"),c||(c=[],Ta("yt.timing.csiData",c)),c.push({page:location.href,time:new Date,args:f}));c="";for(var q in f)f.hasOwnProperty(q)&&(c+="&"+q+"="+f[q]);f="/csi_204?"+c.substring(1);if(window.navigator&&window.navigator.sendBeacon&&(b||O("always_send_csi_204_with_beacon"))){var r=void 0===r?"":r;hl(f,r)||gl(f,void 0,void 0,void 0,r)}else gl(f);z("yt.timing."+(a||"")+"pingSent_",!0,void 0);Rh(ml,new kl(n.aft+(Number(g)||0),a))}}
var Ol=window;Ol.ytcsi&&(Ol.ytcsi.info=Kl,Ol.ytcsi.tick=Ll);function Pl(){this.l=[];this.m=[];this.h=[];this.i=new Set;this.o=new Map}
function Ql(a,b,c){c=void 0===c?0:c;b.then(function(d){var e,f;a.i.has(c)&&a.j&&a.j();var g=W(c),h=Zj(c);g&&h&&(d.csn=g,(null===(e=d.response)||void 0===e?0:e.trackingParams)&&jk(a.client,g,h,[Vj(d.response.trackingParams)]),(null===(f=d.playerResponse)||void 0===f?0:f.trackingParams)&&jk(a.client,g,h,[Vj(d.playerResponse.trackingParams)]))})}
function Rl(a,b,c,d){d=void 0===d?0:d;if(a.i.has(d))a.l.push([b,c]);else{var e=W(d);c=c||Zj(d);e&&c&&jk(a.client,e,c,[b])}}
Pl.prototype.clickCommand=function(a){var b=W();if(!a.clickTrackingParams||!b)return!1;mk(this.client,b,Vj(a.clickTrackingParams));return!0};
function Sl(a,b,c){c=void 0===c?{}:c;a.i.add(c.layer||0);a.j=function(){Tl(a,b,c);var f=Zj(c.layer);if(f){for(var g=u(a.l),h=g.next();!h.done;h=g.next())h=h.value,Rl(a,h[0],h[1]||f,c.layer);f=u(a.m);for(g=f.next();!g.done;g=f.next()){var k=g.value;g=void 0;g=void 0===g?0:g;h=W(g);var l=k[0]||Zj(g);h&&l&&(g=a.client,k=k[1],k={csn:h,ve:l.getAsJson(),clientData:k},l={L:ck(h),M:h},"UNDEFINED_CSN"==h?kk("visualElementStateChanged",k,l):g?Xg("visualElementStateChanged",k,g,l):V("visualElementStateChanged",
k,l))}}};
W(c.layer)||a.j();if(c.va)for(var d=u(c.va),e=d.next();!e.done;e=d.next())Ql(a,e.value,c.layer);else rj(Error("Delayed screen needs a data promise."))}
function Tl(a,b,c){c=void 0===c?{}:c;c.layer||(c.layer=0);var d=void 0!==c.bb?c.bb:c.layer;var e=W(d);d=Zj(d);var f;d&&(void 0!==c.parentCsn?f={clientScreenNonce:c.parentCsn,visualElement:d}:e&&"UNDEFINED_CSN"!==e&&(f={clientScreenNonce:e,visualElement:d}));try{var g=a.client,h=f,k=c.ta,l=c.L,n=hk(),p={csn:n,pageVe:(new Uj({veType:b,youtubeData:void 0})).getAsJson()};h&&h.visualElement?p.implicitGesture={parentCsn:h.clientScreenNonce,gesturedVe:h.visualElement.getAsJson()}:h&&qj(new R("newScreen() parent element does not have a VE - rootVe",
b));k&&(p.cloneCsn=k);k={L:l,M:n};g?Xg("screenCreated",p,g,k):V("screenCreated",p,k);Rh(Uh,new ek(n));var q=n}catch(r){sj(r,{Ak:b,rootVe:d,parentVisualElement:void 0,vk:e,zk:f,ta:c.ta});rj(r);return}dk(q,b,c.layer,c.L);if((b=e&&"UNDEFINED_CSN"!==e&&d)&&!(b=O("screen_manager_skip_hide_killswitch"))){a:{b=u(Object.values(Sj));for(f=b.next();!f.done;f=b.next())if(W(f.value)==e){b=!0;break a}b=!1}b=!b}b&&(b=a.client,f=!0,g=(f=void 0===f?!1:f)?16:8,d={csn:e,ve:d.getAsJson(),eventType:g},f={L:ck(e),M:e,
Ha:f},"UNDEFINED_CSN"==e?kk("visualElementHidden",d,f):b?Xg("visualElementHidden",d,b,f):V("visualElementHidden",d,f));a.h[a.h.length-1]&&!a.h[a.h.length-1].csn&&(a.h[a.h.length-1].csn=q||"");Kl("csn",q);Zk.getInstance().clear();d=Zj(c.layer);e&&"UNDEFINED_CSN"!==e&&d&&(O("web_mark_root_visible")||O("music_web_mark_root_visible"))&&lk(q,d);a.i["delete"](c.layer||0);a.j=void 0;e=u(a.o);for(q=e.next();!q.done;q=e.next())q=u(q.value),b=q.next().value,q.next().value===c.layer&&d&&Rl(a,b,d,c.layer)}
;function Ul(){L.call(this);this.h=[]}
v(Ul,L);Ul.prototype.A=function(){for(;this.h.length;){var a=this.h.pop();a.target.removeEventListener(a.name,a.Fa)}L.prototype.A.call(this)};function Vl(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||mb(b);this.assets=a.assets||{};this.attrs=a.attrs||mb(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
Vl.prototype.clone=function(){var a=new Vl,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==La(c)?a[b]=mb(c):a[b]=c}return a};var Wl=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function Xl(a){a=a||"";if(window.spf){var b=a.match(Wl);spf.style.load(a,b?b[1]:"",void 0)}else Yl(a)}
function Yl(a){var b=Zl(a),c=document.getElementById(b),d=c&&vj(c,"loaded");d||c&&!d||(c=$l(a,b,function(){vj(c,"loaded")||(tj(c),zg(b),P(Sa(Ag,b),0))}))}
function $l(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=gd(a);d.rel="stylesheet";d.href=ub(a).toString();(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function Zl(a){var b=Jc(document,"A");Sb(b,new I(a,Fb));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+Vb(a)}
;function am(a,b,c,d){L.call(this);var e=this;this.u=this.ba=a;this.I=b;this.B=!1;this.api={};this.Z=this.H=null;this.J=new M;Tc(this,Sa(Rc,this.J));this.m={};this.S=this.aa=this.l=this.ja=this.h=null;this.R=!1;this.o=this.F=null;this.ca={};this.Ca=["onReady"];this.ia=null;this.ra=NaN;this.X={};this.j=d;bm(this);this.da("WATCH_LATER_VIDEO_ADDED",this.Ya.bind(this));this.da("WATCH_LATER_VIDEO_REMOVED",this.Za.bind(this));this.da("onAdAnnounce",this.Ea.bind(this));this.Da=new Ul(this);Tc(this,Sa(Rc,
this.Da));this.Y=0;c?this.Y=P(function(){e.loadNewVideoConfig(c)},0):d&&(cm(this),dm(this))}
v(am,L);m=am.prototype;m.getId=function(){return this.I};
m.loadNewVideoConfig=function(a){if(!this.i){this.Y&&(gg(this.Y),this.Y=0);a instanceof Vl||(a=new Vl(a));this.ja=a;this.h=a.clone();cm(this);this.aa||(this.aa=em(this,this.h.args.jsapicallback||"onYouTubePlayerReady"));this.h.args.jsapicallback=null;if(a=this.h.attrs.width)this.u.style.width=id(Number(a)||String(a));if(a=this.h.attrs.height)this.u.style.height=id(Number(a)||String(a));dm(this);this.B&&fm(this)}};
function cm(a){var b;a.j?b=a.j.rootElementId:b=a.h.attrs.id;a.l=b||a.l;"video-player"==a.l&&(a.l=a.I,a.j?a.j.rootElementId=a.I:a.h.attrs.id=a.I);a.u.id==a.l&&(a.l+="-player",a.j?a.j.rootElementId=a.l:a.h.attrs.id=a.l)}
m.Ja=function(){return this.ja};
function fm(a){a.h&&!a.h.loaded&&(a.h.loaded=!0,"0"!=a.h.args.autoplay?a.api.loadVideoByPlayerVars(a.h.args):a.api.cueVideoByPlayerVars(a.h.args))}
function gm(a){var b=!0,c=hm(a);c&&a.h&&(a=im(a),b=vj(c,"version")===a);return b&&!!A("yt.player.Application.create")}
function dm(a){if(!a.i&&!a.R){var b=gm(a);if(b&&"html5"==(hm(a)?"html5":null))a.S="html5",a.B||jm(a);else if(km(a),a.S="html5",b&&a.o)a.ba.appendChild(a.o),jm(a);else{a.h&&(a.h.loaded=!0);var c=!1;a.F=function(){c=!0;var d=lm(a,"player_bootstrap_method")?A("yt.player.Application.createAlternate")||A("yt.player.Application.create"):A("yt.player.Application.create");var e=a.h?a.h.clone():void 0;d(a.ba,e,a.j);jm(a)};
a.R=!0;b?a.F():(zj(im(a),a.F),(b=a.j?a.j.cssUrl:a.h.assets.css)&&Xl(b),mm(a)&&!c&&z("yt.player.Application.create",null,void 0))}}}
function hm(a){var b=Fc(a.l);!b&&a.u&&a.u.querySelector&&(b=a.u.querySelector("#"+a.l));return b}
function jm(a){if(!a.i){var b=hm(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);c?(a.R=!1,!lm(a,"html5_remove_not_servable_check_killswitch")&&b.isNotServable&&a.h&&b.isNotServable(a.h.args.video_id)||nm(a)):a.ra=P(function(){jm(a)},50)}}
function nm(a){bm(a);a.B=!0;var b=hm(a);b.addEventListener&&(a.H=om(a,b,"addEventListener"));b.removeEventListener&&(a.Z=om(a,b,"removeEventListener"));var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=0;d<c.length;d++){var e=c[d];a.api[e]||(a.api[e]=om(a,b,e))}for(var f in a.m)a.H(f,a.m[f]);fm(a);a.aa&&a.aa(a.api);a.J.O("onReady",a.api)}
function om(a,b,c){var d=b[c];return function(){try{return a.ia=null,d.apply(b,arguments)}catch(e){"sendAbandonmentPing"!=c&&(e.params=c,a.ia=e,Sf(e))}}}
function bm(a){a.B=!1;if(a.Z)for(var b in a.m)a.Z(b,a.m[b]);for(var c in a.X)gg(parseInt(c,10));a.X={};a.H=null;a.Z=null;for(var d in a.api)a.api[d]=null;a.api.addEventListener=a.da.bind(a);a.api.removeEventListener=a.fb.bind(a);a.api.destroy=a.dispose.bind(a);a.api.getLastError=a.Ka.bind(a);a.api.getPlayerType=a.La.bind(a);a.api.getCurrentVideoConfig=a.Ja.bind(a);a.api.loadNewVideoConfig=a.loadNewVideoConfig.bind(a);a.api.isReady=a.Wa.bind(a)}
m.Wa=function(){return this.B};
m.da=function(a,b){var c=this,d=em(this,b);if(d){if(!(0<=Ya(this.Ca,a)||this.m[a])){var e=pm(this,a);this.H&&this.H(a,e)}this.J.subscribe(a,d);"onReady"==a&&this.B&&P(function(){d(c.api)},0)}};
m.fb=function(a,b){if(!this.i){var c=em(this,b);c&&vf(this.J,a,c)}};
function em(a,b){var c=b;if("string"==typeof b){if(a.ca[b])return a.ca[b];c=function(){var d=A(b);d&&d.apply(x,arguments)};
a.ca[b]=c}return c?c:null}
function pm(a,b){var c="ytPlayer"+b+a.I;a.m[b]=c;x[c]=function(d){var e=P(function(){if(!a.i){a.J.O(b,d);var f=a.X,g=String(e);g in f&&delete f[g]}},0);
jb(a.X,String(e))};
return c}
m.Ea=function(a){zg("a11y-announce",a)};
m.Ya=function(a){zg("WATCH_LATER_VIDEO_ADDED",a)};
m.Za=function(a){zg("WATCH_LATER_VIDEO_REMOVED",a)};
m.La=function(){return this.S||(hm(this)?"html5":null)};
m.Ka=function(){return this.ia};
function km(a){a.cancel();bm(a);a.S=null;a.h&&(a.h.loaded=!1);var b=hm(a);b&&(gm(a)||!mm(a)?a.o=b:(b&&b.destroy&&b.destroy(),a.o=null));for(a=a.ba;b=a.firstChild;)a.removeChild(b)}
m.cancel=function(){this.F&&Fj(im(this),this.F);gg(this.ra);this.R=!1};
m.A=function(){km(this);if(this.o&&this.h&&this.o.destroy)try{this.o.destroy()}catch(b){Rf(b)}this.ca=null;for(var a in this.m)x[this.m[a]]=null;this.ja=this.h=this.api=null;delete this.ba;delete this.u;L.prototype.A.call(this)};
function mm(a){return a.h&&a.h.args&&a.h.args.fflags?-1!=a.h.args.fflags.indexOf("player_destroy_old_version=true"):!1}
function im(a){return a.j?a.j.jsUrl:a.h.assets.js}
function lm(a,b){if(a.j)var c=a.j.serializedExperimentFlags;else a.h&&a.h.args&&(c=a.h.args.fflags);return"true"==ch(c||"","&")[b]}
;var qm={},rm="player_uid_"+(1E9*Math.random()>>>0);function sm(a,b,c){var d="player";c=void 0===c?!0:c;d="string"===typeof d?Fc(d):d;var e=rm+"_"+Na(d),f=qm[e];if(f&&c)return tm(a,b)?f.api.loadVideoByPlayerVars(a.args||null):f.loadNewVideoConfig(a),f.api;f=new am(d,e,a,b);qm[e]=f;zg("player-added",f.api);Tc(f,function(){delete qm[f.getId()]});
return f.api}
function tm(a,b){return b&&b.serializedExperimentFlags?b.serializedExperimentFlags.includes("web_player_remove_playerproxy=true"):a&&a.args&&a.args.fflags?a.args.fflags.includes("web_player_remove_playerproxy=true"):!1}
;var Z=null,um=null,vm=null,wm={};function xm(a){var b=a.id;a=a.ve_type;var c=Tj++;a=new Uj({veType:a,veCounter:c,elementIndex:void 0,dataElement:void 0,youtubeData:void 0});wm[b]=a;b=W();c=Zj();b&&c&&nk(b,c,a)}
function ym(){var a=Z.getVideoData(1);a=a.title?a.title+" - YouTube":"YouTube";document.title!==a&&(document.title=a)}
function zm(a){var b=a.csn;a=a.root_ve_type;if(b&&a&&(dk(b,a),a=Zj()))for(var c in wm)if(wm.hasOwnProperty(c)){var d=wm[c];d&&nk(b,a,d)}}
function Am(a){wm[a.id]=Vj(a.tracking_params)}
function Bm(a){var b=W();a=wm[a.id];b&&a&&mk(O("use_default_events_client")?void 0:bj,b,a)}
function Cm(a){a=a.ids;var b=W();if(b)for(var c=0;c<a.length;c++){var d=wm[a[c]];d&&lk(b,d)}}
;function Dm(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=H("EVENT_ID");d&&(b.ei||(b.ei=d));if(b){d=a;var e=void 0===e?!0:e;var f=H("VALID_SESSION_TEMPDATA_DOMAINS",[]),g=Yb(window.location.href);g&&f.push(g);g=Yb(d);if(0<=Ya(f,g)||!g&&0==d.lastIndexOf("/",0))if(O("autoescape_tempdata_url")&&(f=document.createElement("a"),Sb(f,d),d=f.href),d){g=d.match(Wb);d=g[5];f=g[6];g=g[7];var h="";d&&(h+=d);f&&(h+="?"+f);g&&(h+="#"+g);d=h;f=d.indexOf("#");if(d=0>f?d:d.substr(0,f))if(e&&!b.csn&&(b.itct||b.ved)&&
(b=Object.assign({csn:W()},b)),k){var k=parseInt(k,10);isFinite(k)&&0<k&&(e=b,b="ST-"+Vb(d).toString(36),e=e?$b(e):"",Eh(b,e,k||5))}else k=b,e="ST-"+Vb(d).toString(36),k=k?$b(k):"",Eh(e,k,5)}}if(c)return!1;if((window.ytspf||{}).enabled)spf.navigate(a);else{var l=void 0===l?{}:l;var n=void 0===n?"":n;var p=void 0===p?window:p;c=p.location;a=ac(a,l)+n;a=a instanceof I?a:Kb(a);c.href=Gb(a)}return!0}
;z("yt.setConfig",N,void 0);z("yt.config.set",N,void 0);z("yt.setMsg",Uf,void 0);z("yt.msgs.set",Uf,void 0);z("yt.logging.errors.log",rj,void 0);
z("writeEmbed",function(){var a=H("PLAYER_CONFIG",void 0);if(!a){var b=H("PLAYER_VARS",void 0);b&&(a={args:b})}Uk(!0);"gvn"===a.args.ps&&(document.body.style.backgroundColor="transparent");a.attrs||(a.attrs={width:"100%",height:"100%",id:"video-player"});var c=document.referrer;b=H("POST_MESSAGE_ORIGIN");window!==window.top&&c&&c!==document.URL&&(a.args.loaderUrl=c);if((c=H("WEB_PLAYER_CONTEXT_CONFIGS",void 0))&&"WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER"in c){var d=c.WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER;
if(!d.serializedForcedExperimentIds){var e=window.location.href;-1!=e.indexOf("?")?(e=(e||"").split("#")[0],e=e.split("?",2),e=gh(1<e.length?e[1]:e[0])):e={};e.forced_experiments&&(d.serializedForcedExperimentIds=e.forced_experiments)}Z=sm(a,c.WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER,!1)}else Z=sm(a);Z.addEventListener("onScreenChanged",zm);Z.addEventListener("onLogClientVeCreated",xm);Z.addEventListener("onLogServerVeCreated",Am);Z.addEventListener("onLogVeClicked",Bm);Z.addEventListener("onLogVesShown",
Cm);Z.addEventListener("onVideoDataChange",ym);a=H("POST_MESSAGE_ID","player");H("ENABLE_JS_API")?vm=new Fk(Z):H("ENABLE_POST_API")&&"string"===typeof a&&"string"===typeof b&&(um=new Gk(window.parent,a,b),vm=new Ak(Z,um.j));Ij()},void 0);
var Em=Qf(function(){Ll("ol");var a=Vk.getInstance(),b=!!((Yk("f"+(Math.floor(119/31)+1))||0)&67108864),c=1<window.devicePixelRatio;if(document.body&&Ud(document.body,"exp-invert-logo"))if(c&&!Ud(document.body,"inverted-hdpi")){var d=document.body;if(d.classList)d.classList.add("inverted-hdpi");else if(!Ud(d,"inverted-hdpi")){var e=Sd(d);Td(d,e+(0<e.length?" inverted-hdpi":"inverted-hdpi"))}}else!c&&Ud(document.body,"inverted-hdpi")&&Vd();b!=c&&(b="f"+(Math.floor(119/31)+1),d=Yk(b)||0,d=c?d|67108864:
d&-67108865,0==d?delete X[b]:(c=d.toString(16),X[b]=c.toString()),a.save());Pl.h||(Pl.h=new Pl);a=Pl.h;c=16623;var f=void 0===f?{}:f;Object.values(ok).includes(c)||(qj(new R("createClientScreen() called with a non-page VE",c)),c=83769);f.isHistoryNavigation||a.h.push({rootVe:c,key:f.key||""});a.l=[];a.m=[];f.va?Sl(a,c,f):Tl(a,c,f)}),Fm=Qf(function(){Z&&Z.sendAbandonmentPing&&Z.sendAbandonmentPing();
H("PL_ATT")&&Mj.dispose();for(var a=0,b=Gj.length;a<b;a++)mg(Gj[a]);Gj.length=0;Ej("//static.doubleclick.net/instream/ad_status.js");Hj=!1;N("DCLKSTAT",0);Sc(vm,um);Z&&(Z.removeEventListener("onScreenChanged",zm),Z.removeEventListener("onLogClientVeCreated",xm),Z.removeEventListener("onLogServerVeCreated",Am),Z.removeEventListener("onLogVeClicked",Bm),Z.removeEventListener("onLogVesShown",Cm),Z.removeEventListener("onVideoDataChange",ym),Z.destroy());wm={}});
window.addEventListener?(window.addEventListener("load",Em),window.addEventListener("unload",Fm)):window.attachEvent&&(window.attachEvent("onload",Em),window.attachEvent("onunload",Fm));Ta("yt.abuse.player.botguardInitialized",A("yt.abuse.player.botguardInitialized")||Nj);Ta("yt.abuse.player.invokeBotguard",A("yt.abuse.player.invokeBotguard")||Oj);Ta("yt.abuse.dclkstatus.checkDclkStatus",A("yt.abuse.dclkstatus.checkDclkStatus")||Jj);
Ta("yt.player.exports.navigate",A("yt.player.exports.navigate")||Dm);Ta("yt.util.activity.init",A("yt.util.activity.init")||og);Ta("yt.util.activity.getTimeSinceActive",A("yt.util.activity.getTimeSinceActive")||rg);Ta("yt.util.activity.setTimestamp",A("yt.util.activity.setTimestamp")||pg);}).call(this);
