var __extends=this&&this.__extends||function(){var e=function(t,r){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)if(t.hasOwnProperty(r))e[r]=t[r]};return e(t,r)};return function(t,r){e(t,r);function n(){this.constructor=t}t.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}();var __awaiter=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))(function(a,i){function o(e){try{l(n.next(e))}catch(e){i(e)}}function s(e){try{l(n["throw"](e))}catch(e){i(e)}}function l(e){e.done?a(e.value):new r(function(t){t(e.value)}).then(o,s)}l((n=n.apply(e,t||[])).next())})};var __generator=this&&this.__generator||function(e,t){var r={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,a,i,o;return o={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function s(e){return function(t){return l([e,t])}}function l(o){if(n)throw new TypeError("Generator is already executing.");while(r)try{if(n=1,a&&(i=o[0]&2?a["return"]:o[0]?a["throw"]||((i=a["return"])&&i.call(a),0):a.next)&&!(i=i.call(a,o[1])).done)return i;if(a=0,i)o=[o[0]&2,i.value];switch(o[0]){case 0:case 1:i=o;break;case 4:r.label++;return{value:o[1],done:false};case 5:r.label++;a=o[1];o=[0];continue;case 7:o=r.ops.pop();r.trys.pop();continue;default:if(!(i=r.trys,i=i.length>0&&i[i.length-1])&&(o[0]===6||o[0]===2)){r=0;continue}if(o[0]===3&&(!i||o[1]>i[0]&&o[1]<i[3])){r.label=o[1];break}if(o[0]===6&&r.label<i[1]){r.label=i[1];i=o;break}if(i&&r.label<i[2]){r.label=i[2];r.ops.push(o);break}if(i[2])r.ops.pop();r.trys.pop();continue}o=t.call(e,r)}catch(e){o=[6,e];a=0}finally{n=i=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};System.register([],function(e,t){"use strict";return{execute:function(){var r=this;var n="productdetails";var a=window;var i=document;var o={$flags$:0,$resourcesUrl$:"",raf:function(e){return requestAnimationFrame(e)},ael:function(e,t,r,n){return e.addEventListener(t,r,n)},rel:function(e,t,r,n){return e.removeEventListener(t,r,n)}};var s=!!i.documentElement.attachShadow;var l=new WeakMap;var f=function(e){return l.get(e)};var u=e("r",function(e,t){return l.set(t.$lazyInstance$=e,t)});var c=function(e){{var t={$flags$:0,$hostElement$:e,$instanceValues$:new Map};t.$onReadyPromise$=new Promise(function(e){return t.$onReadyResolve$=e});return l.set(e,t)}};var $=function(e,t){return t in e};var v=function(e){return console.error(e)};var d=function(e,r,n){var a=e.$lazyBundleIds$;return t.import("./"+a+".entry.js"+"").then(function(t){return t[e.$tagName$.replace(/-/g,"_")]},v)};var h=a.__stencil_cssshim;var p={};var m=function(e){return e!=null};var y=function(e){return e.toLowerCase()};var g=function(e){return["object","function"].includes(typeof e)};function w(e){return"__sc_import_"+e.replace(/\s|-/g,"_")}var _=e("a",function(){if(!(a.CSS&&a.CSS.supports&&a.CSS.supports("color","var(--c)"))){return t.import("./p-39f11146.system.js")}return Promise.resolve()});var b=e("p",function(){return __awaiter(r,void 0,void 0,function(){var e,r,o;return __generator(this,function(s){switch(s.label){case 0:e=t.meta.url;if(!(e!==""))return[3,1];return[2,Promise.resolve(new URL(".",e).href)];case 1:r=Array.from(i.querySelectorAll("script")).find(function(e){return e.src.includes("/"+n+".esm.js")||e.getAttribute("data-namespace")===n});o=new URL(".",new URL(r.getAttribute("data-resources-url")||r.src,a.location.href));x(o.href);if(!!window.customElements)return[3,3];return[4,t.import("./p-a8fc097f.system.js")];case 2:s.sent();s.label=3;case 3:return[2,o.href]}})})});var x=function(e){var t=w(n);try{a[t]=new Function("w","return import(w);")}catch(n){var r=new Map;a[t]=function(n){var o=new URL(n,e).href;var s=r.get(o);if(!s){var l=i.createElement("script");l.type="module";l.src=URL.createObjectURL(new Blob(["import * as m from '"+o+"'; window."+t+".m = m;"],{type:"application/javascript"}));s=new Promise(function(e){l.onload=function(){e(a[t].m);l.remove()}});r.set(o,s);i.head.appendChild(l)}return s}}};var R="hydrated";var E=e("h",function(e,t){var r=[];for(var n=2;n<arguments.length;n++){r[n-2]=arguments[n]}var a=null;var i=false;var o=false;var s;var l=[];var f=function(t){for(var r=0;r<t.length;r++){a=t[r];if(Array.isArray(a)){f(a)}else if(a!=null&&typeof a!=="boolean"){if(i=typeof e!=="function"&&!g(a)){a=String(a)}if(i&&o){l[l.length-1].$text$+=a}else{l.push(i?{$flags$:0,$text$:a}:a)}o=i}}};f(r);if(t){{s=t.key||undefined}{var u=t.className||t.class;if(u){t.class=typeof u!=="object"?u:Object.keys(u).filter(function(e){return u[e]}).join(" ")}}}if(typeof e==="function"){return e(t,l,k)}var c={$flags$:0,$tag$:e,$children$:l.length>0?l:null,$elm$:undefined,$attrs$:t};{c.$key$=s}return c});var S={};var k={forEach:function(e,t){return e.map(L).forEach(t)},map:function(e,t){return e.map(L).map(t).map(j)}};var L=function(e){return{vattrs:e.$attrs$,vchildren:e.$children$,vkey:e.$key$,vname:e.$name$,vtag:e.$tag$,vtext:e.$text$}};var j=function(e){return{$flags$:0,$attrs$:e.vattrs,$children$:e.vchildren,$key$:e.vkey,$name$:e.vname,$tag$:e.vtag,$text$:e.vtext}};var C=function(e,t,r,n,a,i){if(r===n){return}if(t==="class"&&!a){{e.className=n}}else if(t==="style"){for(var s in n){if(!r||n[s]!==r[s]){if(s.includes("-")){e.style.setProperty(s,n[s])}else{e.style[s]=n[s]}}}}else if(t==="key");else if(t==="ref"){if(n){n(e)}}else if(t.startsWith("on")&&!$(e,t)){if($(e,y(t))){t=y(t.substring(2))}else{t=y(t[2])+t.substring(3)}if(r){o.rel(e,t,r,false)}if(n){o.ael(e,t,n,false)}}else{var l=$(e,t);var f=g(n);if((l||f&&n!==null)&&!a){try{e[t]=n==null&&e.tagName.indexOf("-")===-1?"":n}catch(e){}}if(n==null||n===false){{e.removeAttribute(t)}}else if((!l||i&4||a)&&!f){n=n===true?"":n.toString();{e.setAttribute(t,n)}}}};var A=function(e,t,r,n){var a=t.$elm$.nodeType===11&&t.$elm$.host?t.$elm$.host:t.$elm$;var i=e&&e.$attrs$||p;var o=t.$attrs$||p;for(n in o){C(a,n,i[n],o[n],r,t.$flags$)}};var U;var P;var z=false;var I=function(e,t,r,n){var a=t.$children$[r];var o=0;var s;var l;if(m(a.$text$)){a.$elm$=i.createTextNode(a.$text$)}else{s=a.$elm$=i.createElement(a.$tag$);{A(null,a,z)}if(m(U)&&s["s-si"]!==U){s.classList.add(s["s-si"]=U)}if(a.$children$){for(o=0;o<a.$children$.length;++o){l=I(e,a,o);if(l){s.appendChild(l)}}}}return a.$elm$};var N=function(e,t,r,n,a,i){var o=e;var s;if(o.shadowRoot&&y(o.tagName)===P){o=o.shadowRoot}for(;a<=i;++a){if(n[a]){s=I(null,r,a);if(s){n[a].$elm$=s;o.insertBefore(s,t)}}}};var O=function(e,t){var r=t.$elm$=e.$elm$;var n=e.$children$;var a=t.$children$;if(!m(t.$text$)){{{A(e,t,z)}}if(m(a)){N(r,null,t,a,0,a.length-1)}}else if(e.$text$!==t.$text$){r.textContent=t.$text$}};var T=function(e){return e&&e.$tag$===S};var B=function(e,t,r,n){var a=t.$vnode$||{$flags$:0};P=y(e.tagName);if(T(n)){n.$tag$=null}else{n=E(null,null,n)}n.$flags$|=4;t.$vnode$=n;n.$elm$=a.$elm$=e.shadowRoot||e;{U=e["s-sc"]}O(a,n)};var M=function(e,t,n,a){return __awaiter(r,void 0,void 0,function(){var r;return __generator(this,function(a){r=t.$lazyInstance$;{H(e,t,n,r)}return[2]})})};var H=function(e,t,r,n,a){{{t.$flags$|=4;try{B(e,t,r,n.render())}catch(e){v(e)}t.$flags$&=~4}}if(h){h.updateHost(e)}{t.$flags$|=2}q(e,t)};var q=function(e,t,r){if(!e["s-al"]){var n=t.$lazyInstance$;var a=t.$ancestorComponent$;if(!(t.$flags$&512)){t.$flags$|=512;{e.classList.add(R)}{t.$onReadyResolve$(e)}if(!a){i.documentElement.classList.add(R);{setTimeout(function(){return o.$flags$|=2},999)}}}}};var F=function(e){if((o.$flags$&1)===0){var t=f(e);if(h){h.removeHost(e)}var r=t.$lazyInstance$}};var W=function(e,t,r){return e};var G=function(e,t,n,a,i){return __awaiter(r,void 0,void 0,function(){var r;return __generator(this,function(a){switch(a.label){case 0:if(!((t.$flags$&256)===0))return[3,2];t.$flags$|=256;return[4,d(n)];case 1:i=a.sent();try{new i(t)}catch(e){v(e)}Q(t.$lazyInstance$);a.label=2;case 2:r=t.$ancestorComponent$;{M(e,t,n)}return[2]}})})};var Q=function(e){};var V=function(e,t){if((o.$flags$&1)===0){var r=f(e);if(!(r.$flags$&1)){r.$flags$|=1;{G(e,r,t)}}Q(r.$lazyInstance$)}};var D=e("b",function(e,t){if(t===void 0){t={}}var r=[];var n=t.exclude||[];var l=i.head;var u=a.customElements;var $=l.querySelector("meta[charset]");var v=i.createElement("style");Object.assign(o,t);o.$resourcesUrl$=new URL(t.resourcesUrl||"/",a.location.href).href;if(t.syncQueue){o.$flags$|=4}e.forEach(function(e){return e[1].forEach(function(t){var a={$flags$:t[0],$tagName$:t[1],$members$:t[2],$listeners$:t[3]};if(!s&&a.$flags$&1){a.$flags$|=8}var i=a.$tagName$;var o=function(e){__extends(t,e);function t(t){var r=e.call(this,t)||this;t=r;c(t);if(a.$flags$&1){if(s){t.attachShadow({mode:"open"})}else if(!("shadowRoot"in t)){t.shadowRoot=t}}return r}t.prototype.connectedCallback=function(){V(this,a)};t.prototype.disconnectedCallback=function(){F(this)};t.prototype["s-init"]=function(){var e=f(this);if(e.$lazyInstance$){q(this,e)}};t.prototype["s-hmr"]=function(e){};t.prototype.forceUpdate=function(){};t.prototype.componentOnReady=function(){return f(this).$onReadyPromise$};return t}(HTMLElement);a.$lazyBundleIds$=e[0];if(!n.includes(i)&&!u.get(i)){r.push(i);u.define(i,W(o))}})});v.innerHTML=r+"{visibility:hidden}.hydrated{visibility:inherit}";v.setAttribute("data-styles","");l.insertBefore(v,$?$.nextSibling:l.firstChild)})}}});