const t=window,e=document,n={t:0,s:"",raf:t=>requestAnimationFrame(t),ael:(t,e,n,s)=>t.addEventListener(e,n,s),rel:(t,e,n,s)=>t.removeEventListener(e,n,s)},s=!!e.documentElement.attachShadow,o=new WeakMap,c=t=>o.get(t),r=(t,e)=>o.set(e.o=t,e),a=(t,e)=>e in t,l=t=>console.error(t),i=t.__stencil_cssshim,$={},u=t=>null!=t,f=t=>t.toLowerCase(),d=t=>["object","function"].includes(typeof t),p=()=>t.CSS&&t.CSS.supports&&t.CSS.supports("color","var(--c)")?Promise.resolve():__sc_import_productcheckout("./p-f7ddb189.js"),m=async()=>{{const n=Array.from(e.querySelectorAll("script")).find(t=>t.src.includes("/productcheckout.esm.js")||"productcheckout"===t.getAttribute("data-namespace")),s=new URL(".",new URL(n.getAttribute("data-resources-url")||n.src,t.location.href));return h(s.href),window.customElements||await __sc_import_productcheckout("./p-a0c82e31.js"),s.href}},h=n=>{const s=`__sc_import_${"productcheckout".replace(/\s|-/g,"_")}`;try{t[s]=new Function("w","return import(w);")}catch(o){const c=new Map;t[s]=o=>{const r=new URL(o,n).href;let a=c.get(r);if(!a){const n=e.createElement("script");n.type="module",n.src=URL.createObjectURL(new Blob([`import * as m from '${r}'; window.${s}.m = m;`],{type:"application/javascript"})),a=new Promise(e=>{n.onload=()=>{e(t[s].m),n.remove()}}),c.set(r,a),e.head.appendChild(n)}return a}}},y=(t,e,...n)=>{let s,o=null,c=!1,r=!1,a=[];const l=e=>{for(let n=0;n<e.length;n++)o=e[n],Array.isArray(o)?l(o):null!=o&&"boolean"!=typeof o&&((c="function"!=typeof t&&!d(o))&&(o=String(o)),c&&r?a[a.length-1].l+=o:a.push(c?{t:0,l:o}:o),r=c)};if(l(n),e){s=e.key||void 0;{const t=e.className||e.class;t&&(e.class="object"!=typeof t?t:Object.keys(t).filter(e=>t[e]).join(" "))}}if("function"==typeof t)return t(e,a,_);const i={t:0,i:t,$:a.length>0?a:null,u:void 0,p:e};return i.h=s,i},w={},_={forEach:(t,e)=>t.map(g).forEach(e),map:(t,e)=>t.map(g).map(e).map(b)},g=t=>({vattrs:t.p,vchildren:t.$,vkey:t.h,vname:t._,vtag:t.i,vtext:t.l}),b=t=>({t:0,p:t.vattrs,$:t.vchildren,h:t.vkey,_:t.vname,i:t.vtag,l:t.vtext}),k=(t,e,s,o,c,r)=>{if(s!==o)if("class"!==e||c)if("style"===e)for(const e in o)s&&o[e]===s[e]||(e.includes("-")?t.style.setProperty(e,o[e]):t.style[e]=o[e]);else if("key"===e);else if("ref"===e)o&&o(t);else if(e.startsWith("on")&&!a(t,e))e=a(t,f(e))?f(e.substring(2)):f(e[2])+e.substring(3),s&&n.rel(t,e,s,!1),o&&n.ael(t,e,o,!1);else{const n=a(t,e),s=d(o);if((n||s&&null!==o)&&!c)try{t[e]=null==o&&-1===t.tagName.indexOf("-")?"":o}catch(t){}null==o||!1===o?t.removeAttribute(e):(!n||4&r||c)&&!s&&(o=!0===o?"":o.toString(),t.setAttribute(e,o))}else t.className=o},v=(t,e,n,s)=>{const o=11===e.u.nodeType&&e.u.host?e.u.host:e.u,c=t&&t.p||$,r=e.p||$;for(s in r)k(o,s,c[s],r[s],n,e.t)};let j,R;const U=(t,n,s)=>{let o,c,r=n.$[s],a=0;if(u(r.l))r.u=e.createTextNode(r.l);else if(o=r.u=e.createElement(r.i),v(null,r,!1),u(j)&&o["s-si"]!==j&&o.classList.add(o["s-si"]=j),r.$)for(a=0;a<r.$.length;++a)(c=U(t,r,a))&&o.appendChild(c);return r.u},L=(t,s)=>{if(!t["s-al"]){const o=s.g;512&s.t||(s.t|=512,t.classList.add("hydrated"),s.k(t),o||(e.documentElement.classList.add("hydrated"),setTimeout(()=>n.t|=2,999)))}},x=()=>{},M=(r,a={})=>{const $=[],d=a.exclude||[],p=e.head,m=t.customElements,h=p.querySelector("meta[charset]"),_=e.createElement("style");Object.assign(n,a),n.s=new URL(a.resourcesUrl||"/",t.location.href).href,a.syncQueue&&(n.t|=4),r.forEach(t=>t[1].forEach(e=>{const r={t:e[0],v:e[1],j:e[2],R:e[3]};!s&&1&r.t&&(r.t|=8);const a=r.v;r.U=t[0],d.includes(a)||m.get(a)||($.push(a),m.define(a,(t=>t)(class extends HTMLElement{constructor(t){super(t),(t=>{{const e={t:0,L:t,M:new Map};e.A=new Promise(t=>e.k=t),o.set(t,e)}})(t=this),1&r.t&&(s?t.attachShadow({mode:"open"}):"shadowRoot"in t||(t.shadowRoot=t))}connectedCallback(){((t,e)=>{if(0==(1&n.t)){const n=c(t);1&n.t||(n.t|=1,(async(t,e,n,s,o)=>{if(0==(256&e.t)){e.t|=256,o=await(t=>__sc_import_productcheckout(`./${t.U}.entry.js`).then(e=>e[t.v.replace(/-/g,"_")],l))(n);try{new o(e)}catch(t){l(t)}x(e.o)}(async(t,e)=>{((t,e,n,s)=>{e.t|=4;try{((t,e,n,s)=>{const o=e.O||{t:0};R=f(t.tagName),(t=>t&&t.i===w)(s)?s.i=null:s=y(null,null,s),s.t|=4,e.O=s,s.u=o.u=t.shadowRoot||t,j=t["s-sc"],((t,e)=>{const n=e.u=t.u,s=e.$;u(e.l)?t.l!==e.l&&(n.textContent=e.l):(v(t,e,!1),u(s)&&((t,e,s,o,c,r)=>{let a,l=n;for(l.shadowRoot&&f(l.tagName)===R&&(l=l.shadowRoot);c<=r;++c)o[c]&&(a=U(null,s,c))&&(o[c].u=a,l.insertBefore(a,null))})(0,0,e,s,0,s.length-1))})(o,s)})(t,e,0,s.render())}catch(t){l(t)}e.t&=-5,i&&i.updateHost(t),e.t|=2,L(t,e)})(t,e,0,e.o)})(t,e)})(t,n,e)),x(n.o)}})(this,r)}disconnectedCallback(){0==(1&n.t)&&i&&i.removeHost(this)}"s-init"(){const t=c(this);t.o&&L(this,t)}"s-hmr"(t){}forceUpdate(){}componentOnReady(){return c(this).A}})))})),_.innerHTML=$+"{visibility:hidden}.hydrated{visibility:inherit}",_.setAttribute("data-styles",""),p.insertBefore(_,h?h.nextSibling:p.firstChild)};export{p as a,M as b,y as h,m as p,r};