var __extends=this&&this.__extends||function(){var e=function(t,r){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)if(t.hasOwnProperty(r))e[r]=t[r]};return e(t,r)};return function(t,r){e(t,r);function n(){this.constructor=t}t.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}();var __awaiter=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))(function(a,i){function o(e){try{s(n.next(e))}catch(e){i(e)}}function l(e){try{s(n["throw"](e))}catch(e){i(e)}}function s(e){e.done?a(e.value):new r(function(t){t(e.value)}).then(o,l)}s((n=n.apply(e,t||[])).next())})};var __generator=this&&this.__generator||function(e,t){var r={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,a,i,o;return o={next:l(0),throw:l(1),return:l(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function l(e){return function(t){return s([e,t])}}function s(o){if(n)throw new TypeError("Generator is already executing.");while(r)try{if(n=1,a&&(i=o[0]&2?a["return"]:o[0]?a["throw"]||((i=a["return"])&&i.call(a),0):a.next)&&!(i=i.call(a,o[1])).done)return i;if(a=0,i)o=[o[0]&2,i.value];switch(o[0]){case 0:case 1:i=o;break;case 4:r.label++;return{value:o[1],done:false};case 5:r.label++;a=o[1];o=[0];continue;case 7:o=r.ops.pop();r.trys.pop();continue;default:if(!(i=r.trys,i=i.length>0&&i[i.length-1])&&(o[0]===6||o[0]===2)){r=0;continue}if(o[0]===3&&(!i||o[1]>i[0]&&o[1]<i[3])){r.label=o[1];break}if(o[0]===6&&r.label<i[1]){r.label=i[1];i=o;break}if(i&&r.label<i[2]){r.label=i[2];r.ops.push(o);break}if(i[2])r.ops.pop();r.trys.pop();continue}o=t.call(e,r)}catch(e){o=[6,e];a=0}finally{n=i=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};System.register([],function(e,t){"use strict";return{execute:function(){var r=this;var n="productcheckout";var a=window;var i=document;var o={$flags$:0,$resourcesUrl$:"",raf:function(e){return requestAnimationFrame(e)},ael:function(e,t,r,n){return e.addEventListener(t,r,n)},rel:function(e,t,r,n){return e.removeEventListener(t,r,n)}};var l=!!i.documentElement.attachShadow;var s=new WeakMap;var f=function(e){return s.get(e)};var u=e("r",function(e,t){return s.set(t.$lazyInstance$=e,t)});var $=function(e){{var t={$flags$:0,$hostElement$:e,$instanceValues$:new Map};t.$onReadyPromise$=new Promise(function(e){return t.$onReadyResolve$=e});return s.set(e,t)}};var c=function(e,t){return t in e};var v=function(e){return console.error(e)};var h=function(e,r,n){var a=e.$lazyBundleIds$;return t.import("./"+a+".entry.js"+"").then(function(t){return t[e.$tagName$.replace(/-/g,"_")]},v)};var d=a.__stencil_cssshim;var m=0;var p=false;var g=[];var y=[];var b=[];var w=function(e){return function(t){e.push(t);if(!p){p=true;o.raf(k)}}};var _=function(e){for(var t=0;t<e.length;t++){try{e[t](performance.now())}catch(e){v(e)}}e.length=0};var x=function(e,t){var r=0;var n=0;while(r<e.length&&(n=performance.now())<t){try{e[r++](n)}catch(e){v(e)}}if(r===e.length){e.length=0}else if(r!==0){e.splice(0,r)}};var k=function(){m++;_(g);var e=(o.$flags$&6)===2?performance.now()+7*Math.ceil(m*(1/22)):Infinity;x(y,e);x(b,e);if(y.length>0){b.push.apply(b,y);y.length=0}if(p=g.length+y.length+b.length>0){o.raf(k)}else{m=0}};var E=w(y);var R={};var j=function(e){return e!=null};var S=function(e){return e.toLowerCase()};var C=function(e){return["object","function"].includes(typeof e)};function L(e){return"__sc_import_"+e.replace(/\s|-/g,"_")}var P=e("a",function(){if(!(a.CSS&&a.CSS.supports&&a.CSS.supports("color","var(--c)"))){return t.import("./p-39f11146.system.js")}return Promise.resolve()});var O=e("p",function(){return __awaiter(r,void 0,void 0,function(){var e,r,o;return __generator(this,function(l){switch(l.label){case 0:e=t.meta.url;if(!(e!==""))return[3,1];return[2,Promise.resolve(new URL(".",e).href)];case 1:r=Array.from(i.querySelectorAll("script")).find(function(e){return e.src.includes("/"+n+".esm.js")||e.getAttribute("data-namespace")===n});o=new URL(".",new URL(r.getAttribute("data-resources-url")||r.src,a.location.href));A(o.href);if(!!window.customElements)return[3,3];return[4,t.import("./p-a8fc097f.system.js")];case 2:l.sent();l.label=3;case 3:return[2,o.href]}})})});var A=function(e){var t=L(n);try{a[t]=new Function("w","return import(w);")}catch(n){var r=new Map;a[t]=function(n){var o=new URL(n,e).href;var l=r.get(o);if(!l){var s=i.createElement("script");s.type="module";s.src=URL.createObjectURL(new Blob(["import * as m from '"+o+"'; window."+t+".m = m;"],{type:"application/javascript"}));l=new Promise(function(e){s.onload=function(){e(a[t].m);s.remove()}});r.set(o,l);i.head.appendChild(s)}return l}}};var I="hydrated";var N=e("h",function(e,t){var r=[];for(var n=2;n<arguments.length;n++){r[n-2]=arguments[n]}var a=null;var i=false;var o=false;var l;var s=[];var f=function(t){for(var r=0;r<t.length;r++){a=t[r];if(Array.isArray(a)){f(a)}else if(a!=null&&typeof a!=="boolean"){if(i=typeof e!=="function"&&!C(a)){a=String(a)}if(i&&o){s[s.length-1].$text$+=a}else{s.push(i?{$flags$:0,$text$:a}:a)}o=i}}};f(r);if(t){{l=t.key||undefined}{var u=t.className||t.class;if(u){t.class=typeof u!=="object"?u:Object.keys(u).filter(function(e){return u[e]}).join(" ")}}}if(typeof e==="function"){return e(t,s,z)}var $={$flags$:0,$tag$:e,$children$:s.length>0?s:null,$elm$:undefined,$attrs$:t};{$.$key$=l}return $});var U={};var z={forEach:function(e,t){return e.map(B).forEach(t)},map:function(e,t){return e.map(B).map(t).map(M)}};var B=function(e){return{vattrs:e.$attrs$,vchildren:e.$children$,vkey:e.$key$,vname:e.$name$,vtag:e.$tag$,vtext:e.$text$}};var M=function(e){return{$flags$:0,$attrs$:e.vattrs,$children$:e.vchildren,$key$:e.vkey,$name$:e.vname,$tag$:e.vtag,$text$:e.vtext}};var T=function(e,t,r,n,a,i){if(r===n){return}if(t==="class"&&!a){{var l=H(r);var s=H(e.className).filter(function(e){return!l.includes(e)});e.className=s.concat(H(n).filter(function(e){return!s.includes(e)})).join(" ")}}else if(t==="style"){{for(var f in r){if(!n||n[f]==null){if(f.includes("-")){e.style.removeProperty(f)}else{e.style[f]=""}}}}for(var f in n){if(!r||n[f]!==r[f]){if(f.includes("-")){e.style.setProperty(f,n[f])}else{e.style[f]=n[f]}}}}else if(t==="key");else if(t==="ref"){if(n){n(e)}}else if(t.startsWith("on")&&!c(e,t)){if(c(e,S(t))){t=S(t.substring(2))}else{t=S(t[2])+t.substring(3)}if(r){o.rel(e,t,r,false)}if(n){o.ael(e,t,n,false)}}else{var u=c(e,t);var $=C(n);if((u||$&&n!==null)&&!a){try{e[t]=n==null&&e.tagName.indexOf("-")===-1?"":n}catch(e){}}if(n==null||n===false){{e.removeAttribute(t)}}else if((!u||i&4||a)&&!$){n=n===true?"":n.toString();{e.setAttribute(t,n)}}}};var H=function(e){return!e?[]:e.split(" ")};var V=function(e,t,r,n){var a=t.$elm$.nodeType===11&&t.$elm$.host?t.$elm$.host:t.$elm$;var i=e&&e.$attrs$||R;var o=t.$attrs$||R;{for(n in i){if(o[n]==null&&i[n]!=null){T(a,n,i[n],undefined,r,t.$flags$)}}}for(n in o){T(a,n,i[n],o[n],r,t.$flags$)}};var q;var F;var W=false;var G=function(e,t,r,n){var a=t.$children$[r];var o=0;var l;var s;if(j(a.$text$)){a.$elm$=i.createTextNode(a.$text$)}else{l=a.$elm$=i.createElement(a.$tag$);{V(null,a,W)}if(j(q)&&l["s-si"]!==q){l.classList.add(l["s-si"]=q)}if(a.$children$){for(o=0;o<a.$children$.length;++o){s=G(e,a,o);if(s){l.appendChild(s)}}}}return a.$elm$};var Q=function(e,t,r,n,a,i){var o=e;var l;if(o.shadowRoot&&S(o.tagName)===F){o=o.shadowRoot}for(;a<=i;++a){if(n[a]){l=G(null,r,a);if(l){n[a].$elm$=l;o.insertBefore(l,t)}}}};var D=function(e,t,r,n){for(;t<=r;++t){if(j(e[t])){n=e[t].$elm$;Y(e[t],true);n.remove()}}};var J=function(e,t,r,n){var a=0;var i=0;var o=0;var l=0;var s=t.length-1;var f=t[0];var u=t[s];var $=n.length-1;var c=n[0];var v=n[$];var h;var d;while(a<=s&&i<=$){if(f==null){f=t[++a]}else if(u==null){u=t[--s]}else if(c==null){c=n[++i]}else if(v==null){v=n[--$]}else if(K(f,c)){X(f,c);f=t[++a];c=n[++i]}else if(K(u,v)){X(u,v);u=t[--s];v=n[--$]}else if(K(f,v)){X(f,v);e.insertBefore(f.$elm$,u.$elm$.nextSibling);f=t[++a];v=n[--$]}else if(K(u,c)){X(u,c);e.insertBefore(u.$elm$,f.$elm$);u=t[--s];c=n[++i]}else{o=-1;{for(l=a;l<=s;++l){if(t[l]&&j(t[l].$key$)&&t[l].$key$===c.$key$){o=l;break}}}if(o>=0){d=t[o];if(d.$tag$!==c.$tag$){h=G(t&&t[i],r,o)}else{X(d,c);t[o]=undefined;h=d.$elm$}c=n[++i]}else{h=G(t&&t[i],r,i);c=n[++i]}if(h){{f.$elm$.parentNode.insertBefore(h,f.$elm$)}}}}if(a>s){Q(e,n[$+1]==null?null:n[$+1].$elm$,r,n,i,$)}else if(i>$){D(t,a,s)}};var K=function(e,t){if(e.$tag$===t.$tag$){{return e.$key$===t.$key$}return true}return false};var X=function(e,t){var r=t.$elm$=e.$elm$;var n=e.$children$;var a=t.$children$;if(!j(t.$text$)){{{V(e,t,W)}}if(j(n)&&j(a)){J(r,n,t,a)}else if(j(a)){if(j(e.$text$)){r.textContent=""}Q(r,null,t,a,0,a.length-1)}else if(j(n)){D(n,0,n.length-1)}}else if(e.$text$!==t.$text$){r.textContent=t.$text$}};var Y=function(e,t){if(e){e.$attrs$&&e.$attrs$.ref&&e.$attrs$.ref(t?null:e.$elm$);e.$children$&&e.$children$.forEach(function(e){Y(e,t)})}};var Z=function(e){return e&&e.$tag$===U};var ee=function(e,t,r,n){var a=t.$vnode$||{$flags$:0};F=S(e.tagName);if(Z(n)){n.$tag$=null}else{n=N(null,null,n)}n.$flags$|=4;t.$vnode$=n;n.$elm$=a.$elm$=e.shadowRoot||e;{q=e["s-sc"]}X(a,n)};var te=function(e,t,n,a){return __awaiter(r,void 0,void 0,function(){var r;return __generator(this,function(a){{t.$flags$|=16}r=t.$lazyInstance$;{E(function(){return re(e,t,n,r)})}return[2]})})};var re=function(e,t,r,n,a){{t.$flags$&=~16}{{t.$flags$|=4;try{ee(e,t,r,n.render())}catch(e){v(e)}t.$flags$&=~4}}if(d){d.updateHost(e)}{t.$flags$|=2}ne(e,t)};var ne=function(e,t,r){if(!e["s-al"]){var n=t.$lazyInstance$;var a=t.$ancestorComponent$;if(!(t.$flags$&512)){t.$flags$|=512;{e.classList.add(I)}{t.$onReadyResolve$(e)}if(!a){i.documentElement.classList.add(I);{setTimeout(function(){return o.$flags$|=2},999)}}}}};var ae=function(e){if((o.$flags$&1)===0){var t=f(e);if(d){d.removeHost(e)}var r=t.$lazyInstance$}};var ie=function(e,t){if(e!=null&&!C(e)){if(t&2){return parseFloat(e)}return e}return e};var oe=function(e,t){return f(e).$instanceValues$.get(t)};var le=function(e,t,r,n){var a=f(e);var i=a.$hostElement$;var o=a.$instanceValues$.get(t);var l=a.$flags$;r=ie(r,n.$members$[t][0]);if(r!==o&&(!(l&8)||o===undefined)){a.$instanceValues$.set(t,r);if(a.$lazyInstance$){if((l&(4|2|16))===2){te(i,a,n)}}}};var se=function(e,t,r){if(t.$members$){var n=Object.entries(t.$members$);var a=e.prototype;n.forEach(function(e){var n=e[0],i=e[1][0];if(i&31||r&2&&i&32){Object.defineProperty(a,n,{get:function(){return oe(this,n)},set:function(e){le(this,n,e,t)},configurable:true,enumerable:true})}});if(r&1){var i=new Map;a.attributeChangedCallback=function(e,t,r){var n=i.get(e);this[n]=r===null&&typeof this[n]==="boolean"?false:r};e.observedAttributes=n.filter(function(e){var t=e[0],r=e[1];return r[0]&15}).map(function(e){var t=e[0],r=e[1];var n=r[1]||t;i.set(n,t);return n})}}return e};var fe=function(e,t,n,a,i){return __awaiter(r,void 0,void 0,function(){var r;return __generator(this,function(a){switch(a.label){case 0:if(!((t.$flags$&256)===0))return[3,2];t.$flags$|=256;return[4,h(n)];case 1:i=a.sent();if(!i.isProxied){se(i,n,2);i.isProxied=true}{t.$flags$|=8}try{new i(t)}catch(e){v(e)}{t.$flags$&=~8}ue(t.$lazyInstance$);a.label=2;case 2:r=t.$ancestorComponent$;{te(e,t,n)}return[2]}})})};var ue=function(e){};var $e=function(e,t){if((o.$flags$&1)===0){var r=f(e);if(!(r.$flags$&1)){r.$flags$|=1;if(t.$members$){Object.entries(t.$members$).forEach(function(t){var r=t[0],n=t[1][0];if(n&31&&e.hasOwnProperty(r)){var a=e[r];delete e[r];e[r]=a}})}{fe(e,r,t)}}ue(r.$lazyInstance$)}};var ce=e("b",function(e,t){if(t===void 0){t={}}var r=[];var n=t.exclude||[];var s=i.head;var u=a.customElements;var c=s.querySelector("meta[charset]");var v=i.createElement("style");Object.assign(o,t);o.$resourcesUrl$=new URL(t.resourcesUrl||"/",a.location.href).href;if(t.syncQueue){o.$flags$|=4}e.forEach(function(e){return e[1].forEach(function(t){var a={$flags$:t[0],$tagName$:t[1],$members$:t[2],$listeners$:t[3]};if(!l&&a.$flags$&1){a.$flags$|=8}var i=a.$tagName$;var o=function(e){__extends(t,e);function t(t){var r=e.call(this,t)||this;t=r;$(t);if(a.$flags$&1){if(l){t.attachShadow({mode:"open"})}else if(!("shadowRoot"in t)){t.shadowRoot=t}}return r}t.prototype.connectedCallback=function(){$e(this,a)};t.prototype.disconnectedCallback=function(){ae(this)};t.prototype["s-init"]=function(){var e=f(this);if(e.$lazyInstance$){ne(this,e)}};t.prototype["s-hmr"]=function(e){};t.prototype.forceUpdate=function(){{var e=f(this);te(this,e,a)}};t.prototype.componentOnReady=function(){return f(this).$onReadyPromise$};return t}(HTMLElement);a.$lazyBundleIds$=e[0];if(!n.includes(i)&&!u.get(i)){r.push(i);u.define(i,se(o,a,1))}})});v.innerHTML=r+"{visibility:hidden}.hydrated{visibility:inherit}";v.setAttribute("data-styles","");s.insertBefore(v,c?c.nextSibling:s.firstChild)})}}});