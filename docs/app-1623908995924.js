!function(){"use strict";function t(){}const e=t=>t;function n(t){return t()}function r(){return Object.create(null)}function o(t){t.forEach(n)}function i(t){return"function"==typeof t}function l(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function s(t,e,n,r){return t[1]&&r?function(t,e){for(const n in e)t[n]=e[n];return t}(n.ctx.slice(),t[1](r(e))):n.ctx}function a(t,e,n,r,o,i,l){const a=function(t,e,n,r){if(t[2]&&r){const o=t[2](r(n));if(void 0===e.dirty)return o;if("object"==typeof o){const t=[],n=Math.max(e.dirty.length,o.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|o[r];return t}return e.dirty|o}return e.dirty}(e,r,o,i);if(a){const o=s(e,n,r,l);t.p(o,a)}}function c(e){return e&&i(e.destroy)?e.destroy:t}const u="undefined"!=typeof window;let d=u?()=>window.performance.now():()=>Date.now(),f=u?t=>requestAnimationFrame(t):t;const p=new Set;function h(t){p.forEach((e=>{e.c(t)||(p.delete(e),e.f())})),0!==p.size&&f(h)}function m(t,e){t.appendChild(e)}function g(t,e,n){t.insertBefore(e,n||null)}function v(t){t.parentNode.removeChild(t)}function y(t){return document.createElement(t)}function b(t){return document.createTextNode(t)}function $(){return b(" ")}function x(){return b("")}function w(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function k(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function _(t,e,n){e in t?t[e]="boolean"==typeof t[e]&&""===n||n:k(t,e,n)}function z(t,e,n,r){t.style.setProperty(e,n,r?"important":"")}function E(t,e,n){t.classList[n?"add":"remove"](e)}function M(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}class j{constructor(t=null){this.a=t,this.e=this.n=null}m(t,e,n=null){this.e||(this.e=y(e.nodeName),this.t=e,this.h(t)),this.i(n)}h(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}i(t){for(let e=0;e<this.n.length;e+=1)g(this.t,this.n[e],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach(v)}}const C=new Set;let q,O=0;function T(t,e){const n=(t.style.animation||"").split(", "),r=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),o=n.length-r.length;o&&(t.style.animation=r.join(", "),O-=o,O||f((()=>{O||(C.forEach((t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}})),C.clear())})))}function A(t){q=t}function B(){const t=function(){if(!q)throw new Error("Function called outside component initialization");return q}();return(e,n)=>{const r=t.$$.callbacks[e];if(r){const o=M(e,n);r.slice().forEach((e=>{e.call(t,o)}))}}}const I=[],S=[],F=[],N=[],D=Promise.resolve();let L=!1;function R(t){F.push(t)}let P=!1;const X=new Set;function Y(){if(!P){P=!0;do{for(let t=0;t<I.length;t+=1){const e=I[t];A(e),H(e.$$)}for(A(null),I.length=0;S.length;)S.pop()();for(let t=0;t<F.length;t+=1){const e=F[t];X.has(e)||(X.add(e),e())}F.length=0}while(I.length);for(;N.length;)N.pop()();L=!1,P=!1,X.clear()}}function H(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(R)}}let W;function G(t,e,n){t.dispatchEvent(M(`${e?"intro":"outro"}${n}`))}const J=new Set;let K;function Q(){K={r:0,c:[],p:K}}function U(){K.r||o(K.c),K=K.p}function V(t,e){t&&t.i&&(J.delete(t),t.i(e))}function Z(t,e,n,r){if(t&&t.o){if(J.has(t))return;J.add(t),K.c.push((()=>{J.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}}const tt={duration:0};function et(n,r,o){let l,s,a=r(n,o),c=!1,u=0;function m(){l&&T(n,l)}function g(){const{delay:r=0,duration:o=300,easing:i=e,tick:g=t,css:v}=a||tt;v&&(l=function(t,e,n,r,o,i,l,s=0){const a=16.666/r;let c="{\n";for(let t=0;t<=1;t+=a){const r=e+(n-e)*i(t);c+=100*t+`%{${l(r,1-r)}}\n`}const u=c+`100% {${l(n,1-n)}}\n}`,d=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(u)}_${s}`,f=t.ownerDocument;C.add(f);const p=f.__svelte_stylesheet||(f.__svelte_stylesheet=f.head.appendChild(y("style")).sheet),h=f.__svelte_rules||(f.__svelte_rules={});h[d]||(h[d]=!0,p.insertRule(`@keyframes ${d} ${u}`,p.cssRules.length));const m=t.style.animation||"";return t.style.animation=`${m?`${m}, `:""}${d} ${r}ms linear ${o}ms 1 both`,O+=1,d}(n,0,1,o,r,i,v,u++)),g(0,1);const b=d()+r,$=b+o;s&&s.abort(),c=!0,R((()=>G(n,!0,"start"))),s=function(t){let e;return 0===p.size&&f(h),{promise:new Promise((n=>{p.add(e={c:t,f:n})})),abort(){p.delete(e)}}}((t=>{if(c){if(t>=$)return g(1,0),G(n,!0,"end"),m(),c=!1;if(t>=b){const e=i((t-b)/o);g(e,1-e)}}return c}))}let v=!1;return{start(){v||(T(n),i(a)?(a=a(),(W||(W=Promise.resolve(),W.then((()=>{W=null}))),W).then(g)):g())},invalidate(){v=!1},end(){c&&(m(),c=!1)}}}function nt(t,e){t.d(1),e.delete(t.key)}function rt(t,e,n,r,o,i,l,s,a,c,u,d){let f=t.length,p=i.length,h=f;const m={};for(;h--;)m[t[h].key]=h;const g=[],v=new Map,y=new Map;for(h=p;h--;){const t=d(o,i,h),s=n(t);let a=l.get(s);a?r&&a.p(t,e):(a=c(s,t),a.c()),v.set(s,g[h]=a),s in m&&y.set(s,Math.abs(h-m[s]))}const b=new Set,$=new Set;function x(t){V(t,1),t.m(s,u),l.set(t.key,t),u=t.first,p--}for(;f&&p;){const e=g[p-1],n=t[f-1],r=e.key,o=n.key;e===n?(u=e.first,f--,p--):v.has(o)?!l.has(r)||b.has(r)?x(e):$.has(o)?f--:y.get(r)>y.get(o)?($.add(r),x(e)):(b.add(o),f--):(a(n,l),f--)}for(;f--;){const e=t[f];v.has(e.key)||a(e,l)}for(;p;)x(g[p-1]);return g}function ot(t){t&&t.c()}function it(t,e,r,l){const{fragment:s,on_mount:a,on_destroy:c,after_update:u}=t.$$;s&&s.m(e,r),l||R((()=>{const e=a.map(n).filter(i);c?c.push(...e):o(e),t.$$.on_mount=[]})),u.forEach(R)}function lt(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function st(t,e){-1===t.$$.dirty[0]&&(I.push(t),L||(L=!0,D.then(Y)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function at(e,n,i,l,s,a,c=[-1]){const u=q;A(e);const d=e.$$={fragment:null,ctx:null,props:a,update:t,not_equal:s,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:n.context||[]),callbacks:r(),dirty:c,skip_bound:!1};let f=!1;if(d.ctx=i?i(e,n.props||{},((t,n,...r)=>{const o=r.length?r[0]:n;return d.ctx&&s(d.ctx[t],d.ctx[t]=o)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](o),f&&st(e,t)),n})):[],d.update(),f=!0,o(d.before_update),d.fragment=!!l&&l(d.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);d.fragment&&d.fragment.l(t),t.forEach(v)}else d.fragment&&d.fragment.c();n.intro&&V(e.$$.fragment),it(e,n.target,n.anchor,n.customElement),Y()}A(u)}class ct{$destroy(){lt(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const ut={};if("undefined"!=typeof window){const t="pointer-start",e="pointer-end",n={bubbles:!0},r=void 0!==window.ontouchstart,o=r?{down:"touchstart",up:"touchend"}:{down:"mousedown",up:"mouseup"};window.addEventListener(o.down,(e=>{if(!1===r&&0!==e.button)return;const o=new CustomEvent(t,n);e.identifier=e.identifier??-1,o.changedTouches=r?e.changedTouches:[e],e.target.dispatchEvent(o)}),{capture:!0}),window.addEventListener(o.up,(t=>{if(!1===r&&0!==t.button)return;const o=new CustomEvent(e,n);t.identifier=t.identifier??-1,o.changedTouches=r?t.changedTouches:[t],t.target.dispatchEvent(o)}),{capture:!0}),window.addEventListener(t,(t=>{const e=Date.now();for(const n of t.changedTouches)ut[n.identifier]={timestamp:e,touch:n}}),{capture:!0}),window.addEventListener(e,(t=>{const e=Date.now();for(const r of t.changedTouches){const t=ut[r.identifier];if(ut[r.identifier]=null,null==t)return;const o=e-t.timestamp;if(Math.sqrt((t.touch.clientX-r.clientX)**2+(t.touch.clientY-r.clientY)**2)>30||o>500)return;const i=new CustomEvent("tap",n);i.changedTouches=[r],r.target.dispatchEvent(i)}}),{capture:!0})}function dt(t){let e,n,r,o,i;var l=t[0];l&&(e=new l({}));var s=t[1];return s&&(r=new s({})),{c(){e&&ot(e.$$.fragment),n=$(),r&&ot(r.$$.fragment),o=x()},m(t,l){e&&it(e,t,l),g(t,n,l),r&&it(r,t,l),g(t,o,l),i=!0},p(t,[i]){if(l!==(l=t[0])){if(e){Q();const t=e;Z(t.$$.fragment,1,0,(()=>{lt(t,1)})),U()}l?(e=new l({}),ot(e.$$.fragment),V(e.$$.fragment,1),it(e,n.parentNode,n)):e=null}if(s!==(s=t[1])){if(r){Q();const t=r;Z(t.$$.fragment,1,0,(()=>{lt(t,1)})),U()}s?(r=new s({}),ot(r.$$.fragment),V(r.$$.fragment,1),it(r,o.parentNode,o)):r=null}},i(t){i||(e&&V(e.$$.fragment,t),r&&V(r.$$.fragment,t),i=!0)},o(t){e&&Z(e.$$.fragment,t),r&&Z(r.$$.fragment,t),i=!1},d(t){e&&lt(e,t),t&&v(n),t&&v(o),r&&lt(r,t)}}}function ft(t,e,n){let{theme:r=null}=e,{baseline:o=null}=e;return t.$$set=t=>{"theme"in t&&n(0,r=t.theme),"baseline"in t&&n(1,o=t.baseline)},[r,o]}class pt extends ct{constructor(t){super(),at(this,t,ft,dt,l,{theme:0,baseline:1})}}function ht(e){let n,r,o;return{c(){n=y("link"),r=y("link"),o=y("link"),k(n,"href","https://fonts.googleapis.com/css?family=Roboto:300,400,500,700"),k(n,"rel","stylesheet"),k(n,"type","text/css"),k(r,"href","https://fonts.googleapis.com/css?family=Inconsolata:300,400,500,700"),k(r,"rel","stylesheet"),k(r,"type","text/css"),k(o,"href","https://fonts.googleapis.com/icon?family=Material+Icons|Material+Icons+Outlined"),k(o,"rel","stylesheet")},m(t,e){m(document.head,n),m(document.head,r),m(document.head,o)},p:t,i:t,o:t,d(t){v(n),v(r),v(o)}}}class mt extends ct{constructor(t){var e;super(),document.getElementById("svelte-74u6mc-style")||((e=y("style")).id="svelte-74u6mc-style",e.textContent="*{box-sizing:border-box}html{margin:0px;padding:0px;width:100%;height:100%}body{margin:0px;padding:0px;width:100%;height:100%;-webkit-tap-highlight-color:transparent;font-family:var(--font);background-color:var(--background);color:var(--text-normal);font-size:var(--text-size);--button-default-fill:#aaaaaa;--button-default-text:var(--text-dark);--button-primary:var(--primary);--button-primary-text:var(--text-dark);--button-primary-ripple:var(--primary-ripple);--button-secondary:var(--secondary);--button-secondary-text:var(--text-dark);--button-secondary-ripple:var(--secondary-ripple);--button-danger:var(--danger);--button-danger-text:var(--text-dark);--button-danger-ripple:var(--danger-ripple);--button-filled-ripple:var(--ripple-invert);--card-background:var(--background-layer);--card-border:var(--layer-border-width) solid var(--layer-border-color);--control-border:var(--text-secondary);--control-border-focus:var(--primary);--control-border-error:var(--danger);--title-bar-background:var(--primary);--title-bar-text:var(--text-invert)}",m(document.head,e)),at(this,t,null,ht,l,{})}}const gt=(t,...e)=>`<style>\n${t.reduce(((t,n,r)=>[...t,n,e[r]??""]),[]).join("")}\n</style>`;gt.default=gt;var vt=gt;function yt(e){let n,r;return{c(){r=x(),n=new j(r)},m(t,o){n.m(e[0],t,o),g(t,r,o)},p:t,i:t,o:t,d(t){t&&v(r),t&&n.d()}}}function bt(t){return[vt`
        body {
            --font: Inconsolata;
            --background: #030303;
            --background-layer: #080808;
            --layer-border-width: 1px;
            --layer-border-color: var(--text-normal);

            --ripple-dark: #00000060;
            --ripple-light: #FFFFFF60;
            --text-light: white;
            --text-dark: black;

            --primary: #00aaff;
            --primary-light: #79c0f7;
            --primary-ripple: #00aaff60;
            --secondary: #2fbc2f;
            --secondary-ripple: #2fbc2f60;
            --danger: #df5348;
            --danger-ripple: #df534860;

            --text-normal: var(--text-light);
            --text-secondary: #a0a0a0;
            --text-invert: var(--text-dark);

            --text-size: 14px;
            --text-size-title: 18px;
            --text-size-header: 16px;
            --text-size-info: 13px;
            --text-size-secondary: 12px;

            --ripple-normal: var(--ripple-light);
            --ripple-invert: var(--ripple-dark);
        }
    `]}class $t extends ct{constructor(t){super(),at(this,t,bt,yt,l,{})}}const xt=t=>!1===Array.isArray(t)?t:null===t[0]||void 0===t[0]?null:t.join(""),wt=(t,e,n)=>{const r=new Set([...Object.keys(e),...Object.keys(n)]);for(const o of r){const r=`--${o}`,i=xt(e[o]),l=xt(n[o]);null==l&&t.style.removeProperty(r),i!==l&&t.style.setProperty(r,l)}};var kt=(t,e)=>{let n=e;return wt(t,{},n),{update(e){wt(t,n,e),n=e}}};function _t(t,e,n){const r=t.slice();return r[8]=e[n],r}function zt(e,n){let r,o,l,s,a;return{key:e,first:null,c(){r=y("ripple"),k(r,"class","svelte-acwzgw"),this.first=r},m(t,e){g(t,r,e),s||(a=c(o=kt.call(null,r,n[4](n[8],n[0]))),s=!0)},p(t,e){n=t,o&&i(o.update)&&3&e&&o.update.call(null,n[4](n[8],n[0]))},i(t){l||R((()=>{l=et(r,jt,{}),l.start()}))},o:t,d(t){t&&v(r),s=!1,a()}}}function Et(e){let n,r,o,i=[],l=new Map,s=e[1];const a=t=>t[8].id;for(let t=0;t<s.length;t+=1){let n=_t(e,s,t),r=a(n);l.set(r,i[t]=zt(r,n))}return{c(){n=y("ripple-wrapper");for(let t=0;t<i.length;t+=1)i[t].c();_(n,"class","svelte-acwzgw")},m(t,l){g(t,n,l);for(let t=0;t<i.length;t+=1)i[t].m(n,null);e[6](n),r||(o=w(n,"pointer-start",e[3]),r=!0)},p(t,[e]){19&e&&(s=t[1],i=rt(i,e,a,1,t,s,l,n,nt,zt,null,_t))},i(t){for(let t=0;t<s.length;t+=1)V(i[t])},o:t,d(t){t&&v(n);for(let t=0;t<i.length;t+=1)i[t].d();e[6](null),r=!1,o()}}}const Mt=t=>{const{target:e,clientX:n,clientY:r}=t,o=e.getBoundingClientRect();return{x:n-o.left,y:r-o.top}},jt=(t,e)=>({delay:0,duration:500,css:(t,e)=>`\n                transform: translate3d(-50%, -50%, 0) scale(${1-e**1.3});\n                opacity: ${e**1.3};\n            `});function Ct(t,e,n){let{color:r=null}=e,{disabled:o=!1}=e,i=[],l=null;return t.$$set=t=>{"color"in t&&n(0,r=t.color),"disabled"in t&&n(5,o=t.disabled)},[r,i,l,t=>{if(!0!==o)for(const e of t.changedTouches){const{x:t,y:r}=Mt(e),o=2*Math.max(l.offsetWidth,l.offsetHeight),s={id:Date.now(),x:t,y:r,size:o};n(1,i=[...i,s]),setTimeout((()=>n(1,i=i.filter((t=>t!==s)))),500)}},(t,e)=>({x:[t.x,"px"],y:[t.y,"px"],size:[t.size,"px"],"ripple-color":e}),o,function(t){S[t?"unshift":"push"]((()=>{l=t,n(2,l)}))}]}class qt extends ct{constructor(t){var e;super(),document.getElementById("svelte-acwzgw-style")||((e=y("style")).id="svelte-acwzgw-style",e.textContent="ripple-wrapper.svelte-acwzgw{position:absolute;top:0px;left:0px;right:0px;bottom:0px;overflow:hidden}ripple.svelte-acwzgw{width:var(--size);height:var(--size);border-radius:50%;background-color:var(--ripple-color, var(--ripple-normal));position:absolute;left:var(--x);top:var(--y);transform:translate3d(-50%, -50%, 0);pointer-events:none;box-shadow:0px 0px 2px rgba(0, 0, 0, 0.25)}",m(document.head,e)),at(this,t,Ct,Et,l,{color:0,disabled:5})}}function Ot(t){let e,n,r,l,u,d,f,p;const h=t[9].default,b=function(t,e,n,r){if(t){const o=s(t,e,n,r);return t[0](o)}}(h,t,t[8],null);return r=new qt({props:{disabled:t[2]}}),{c(){e=y("doric-button"),b&&b.c(),n=$(),ot(r.$$.fragment),_(e,"class",l=t[0]+" "+t[1]+" "+t[5]+" svelte-k4pik7"),E(e,"disabled",t[2]),E(e,"round",t[3]),E(e,"fab",t[4])},m(o,i){g(o,e,i),b&&b.m(e,null),m(e,n),it(r,e,null),d=!0,f||(p=[w(e,"tap",t[7]),c(u=kt.call(null,e,t[6]))],f=!0)},p(t,[n]){b&&b.p&&(!d||256&n)&&a(b,h,t,t[8],n,null,null);const o={};4&n&&(o.disabled=t[2]),r.$set(o),(!d||35&n&&l!==(l=t[0]+" "+t[1]+" "+t[5]+" svelte-k4pik7"))&&_(e,"class",l),u&&i(u.update)&&64&n&&u.update.call(null,t[6]),39&n&&E(e,"disabled",t[2]),43&n&&E(e,"round",t[3]),51&n&&E(e,"fab",t[4])},i(t){d||(V(b,t),V(r.$$.fragment,t),d=!0)},o(t){Z(b,t),Z(r.$$.fragment,t),d=!1},d(t){t&&v(e),b&&b.d(t),lt(r),f=!1,o(p)}}}function Tt(t,e,n){let r,{$$slots:o={},$$scope:i}=e,{color:l="default"}=e,{variant:s="normal"}=e,{disabled:a=!1}=e,{round:c}=e,{fab:u}=e,{class:d=""}=e;const f=B();return t.$$set=t=>{"color"in t&&n(0,l=t.color),"variant"in t&&n(1,s=t.variant),"disabled"in t&&n(2,a=t.disabled),"round"in t&&n(3,c=t.round),"fab"in t&&n(4,u=t.fab),"class"in t&&n(5,d=t.class),"$$scope"in t&&n(8,i=t.$$scope)},t.$$.update=()=>{8&t.$$.dirty&&n(6,r={"button-round-size":c})},[l,s,a,c,u,d,r,t=>{!0!==a&&setTimeout((()=>f("tap",t)),0)},i,o]}class At extends ct{constructor(t){var e;super(),document.getElementById("svelte-k4pik7-style")||((e=y("style")).id="svelte-k4pik7-style",e.textContent="doric-button.svelte-k4pik7{position:relative;padding:8px 16px;border-radius:4px;user-select:none;cursor:pointer;overflow:hidden;box-sizing:border-box;vertical-align:middle;display:inline-flex;justify-content:center;align-items:center;z-index:+1;font-weight:500;--button-color:var(--text-normal);--fill-color:var(--button-default-fill);--text-color:var(--button-default-text);color:var(--button-color)}.round.svelte-k4pik7{min-width:var(--button-round-size);height:var(--button-round-size);padding:8px;border-radius:var(--button-round-size)}.fab.svelte-k4pik7{width:var(--button-round-size);padding:0px}.disabled.svelte-k4pik7{filter:contrast(50%)}.primary.svelte-k4pik7{--button-color:var(--button-primary);--fill-color:var(--button-primary);--ripple-color:var(--button-primary-ripple);--text-color:var(--button-primary-text)}.secondary.svelte-k4pik7{--button-color:var(--button-secondary);--fill-color:var(--button-secondary);--ripple-color:var(--button-secondary-ripple);--text-color:var(--button-secondary-text)}.danger.svelte-k4pik7{--button-color:var(--button-danger);--fill-color:var(--button-danger);--ripple-color:var(--button-danger-ripple);--text-color:var(--button-danger-text)}.fill.svelte-k4pik7{--ripple-color:var(--button-filled-ripple);background-color:var(--fill-color);color:var(--text-color)}.outline.svelte-k4pik7{border:1px solid var(--button-color);color:var(--button-color)}",m(document.head,e)),at(this,t,Tt,Ot,l,{color:0,variant:1,disabled:2,round:3,fab:4,class:5})}}function Bt(t){let e,n,r=St(t[0])+"";return{c(){e=y("div"),n=b(r),k(e,"class","svelte-16pfion")},m(t,r){g(t,e,r),m(e,n)},p(t,e){1&e&&r!==(r=St(t[0])+"")&&function(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}(n,r)},d(t){t&&v(e)}}}function It(e){let n,r=e[0]>0&&Bt(e);return{c(){r&&r.c(),n=x()},m(t,e){r&&r.m(t,e),g(t,n,e)},p(t,[e]){t[0]>0?r?r.p(t,e):(r=Bt(t),r.c(),r.m(n.parentNode,n)):r&&(r.d(1),r=null)},i:t,o:t,d(t){r&&r.d(t),t&&v(n)}}}const St=t=>`${Math.floor(t/1e3)}.${(t%1e3).toString().padStart(3,"0")}`;function Ft(t,e,n){let r=null,o=0;const i=()=>{null!==r&&(n(0,o=Date.now()-r),requestAnimationFrame(i))};return[o,()=>{r=Date.now(),i()},()=>{n(0,o=Date.now()-r),r=null}]}class Nt extends ct{constructor(t){var e;super(),document.getElementById("svelte-16pfion-style")||((e=y("style")).id="svelte-16pfion-style",e.textContent="div.svelte-16pfion{text-align:center;font-size:24px}",m(document.head,e)),at(this,t,Ft,It,l,{start:1,stop:2})}get start(){return this.$$.ctx[1]}get stop(){return this.$$.ctx[2]}}function Dt(t,e,n){const r=t.slice();return r[21]=e[n][0],r[22]=e[n][1].x,r[23]=e[n][1].y,r}function Lt(t){let e;return{c(){e=b("Scramble Board")},m(t,n){g(t,e,n)},d(t){t&&v(e)}}}function Rt(t){let e,n,r;function o(){return t[9](t[21])}return{c(){e=y("game-piece"),z(e,"--x",t[22]),z(e,"--y",t[23]),z(e,"--value","'"+t[21]+"'"),_(e,"class","svelte-1l90ouq")},m(t,i){g(t,e,i),n||(r=w(e,"pointer-start",o),n=!0)},p(n,r){t=n,8&r&&z(e,"--x",t[22]),8&r&&z(e,"--y",t[23]),8&r&&z(e,"--value","'"+t[21]+"'")},d(t){t&&v(e),n=!1,r()}}}function Pt(t,e){let n,r,o="0"!==e[21]&&Rt(e);return{key:t,first:null,c(){n=x(),o&&o.c(),r=x(),this.first=n},m(t,e){g(t,n,e),o&&o.m(t,e),g(t,r,e)},p(t,n){"0"!==(e=t)[21]?o?o.p(e,n):(o=Rt(e),o.c(),o.m(r.parentNode,r)):o&&(o.d(1),o=null)},d(t){t&&v(n),o&&o.d(t),t&&v(r)}}}function Xt(t){let e,n,r,o,i,l,s,a,c,u,d,f=[],p=new Map;e=new pt({props:{baseline:mt,theme:$t}}),l=new At({props:{variant:"fill",color:"secondary",$$slots:{default:[Lt]},$$scope:{ctx:t}}}),l.$on("tap",t[4]);let h=t[3];const b=t=>t[21];for(let e=0;e<h.length;e+=1){let n=Dt(t,h,e),r=b(n);p.set(r,f[e]=Pt(r,n))}return u=new Nt({props:{}}),t[10](u),{c(){ot(e.$$.fragment),n=$(),r=y("screen-measure"),o=$(),i=y("app-layout"),ot(l.$$.fragment),s=$(),a=y("game-board");for(let t=0;t<f.length;t+=1)f[t].c();c=$(),ot(u.$$.fragment),_(r,"class","svelte-1l90ouq"),z(a,"--size",t[2]+"px"),_(a,"class","svelte-1l90ouq"),_(i,"class","svelte-1l90ouq")},m(p,h){it(e,p,h),g(p,n,h),g(p,r,h),t[8](r),g(p,o,h),g(p,i,h),it(l,i,null),m(i,s),m(i,a);for(let t=0;t<f.length;t+=1)f[t].m(a,null);m(i,c),it(u,i,null),d=!0},p(t,[e]){const n={};67108864&e&&(n.$$scope={dirty:e,ctx:t}),l.$set(n),40&e&&(h=t[3],f=rt(f,e,b,1,t,h,p,a,nt,Pt,null,Dt)),(!d||4&e)&&z(a,"--size",t[2]+"px");u.$set({})},i(t){d||(V(e.$$.fragment,t),V(l.$$.fragment,t),V(u.$$.fragment,t),d=!0)},o(t){Z(e.$$.fragment,t),Z(l.$$.fragment,t),Z(u.$$.fragment,t),d=!1},d(s){lt(e,s),s&&v(n),s&&v(r),t[8](null),s&&v(o),s&&v(i),lt(l);for(let t=0;t<f.length;t+=1)f[t].d();t[10](null),lt(u)}}}function Yt(t,e,n){let r,o=null,i=null;const l=Array.from({length:16},((t,e)=>[(e+1)%16,{x:e%4,y:Math.floor(e/4)}])),s=(l.map((t=>t[0])).slice(0,-1),l.map((t=>t[1])),Object.fromEntries(l)),a=Object.keys(s);let c=null,u=!1,d=s;const f=t=>{const e=Object.entries(t).reduce(((t,e)=>(t[4*e[1].y+e[1].x]=parseInt(e[0]),t)),Array.from({length:16},(()=>0)));return(t[0].y+1+e.reduce(((t,n,r)=>{return t+(o=e.slice(r),i=n,o.reduce(((t,e)=>0!==e&&e<i?t+1:t),0));var o,i}),0))%2},p=t=>{if(!1===u)return;const e=d[t],r=d[0];var o,i;1===(o=e,i=r,Math.abs(o.x-i.x)+Math.abs(o.y-i.y))&&n(7,d={...d,[t]:r,0:e})};return t.$$.update=()=>{1&t.$$.dirty&&n(2,o=Math.max(0,Math.min(i?.getBoundingClientRect().width/4,i?.getBoundingClientRect().height/4))),128&t.$$.dirty&&n(3,r=Object.entries(d)),194&t.$$.dirty&&!0===u&&!0===(t=>{for(const e of a)if(t[e]!==s[e])return!1;return!0})(d)&&(n(6,u=!1),c.stop())},[i,c,o,r,()=>{const t=Object.values(s);n(6,u=!0);const e=Object.fromEntries(a.map((e=>{return[e,...t.splice((n=t.length,Math.floor(Math.random()*n)),1)];var n})));c.start(),1!==f(e)?n(7,d=e):n(7,d={...e,14:e[15],15:e[14]})},p,u,d,function(t){S[t?"unshift":"push"]((()=>{i=t,n(0,i)}))},t=>p(t),function(t){S[t?"unshift":"push"]((()=>{c=t,n(1,c)}))}]}new class extends ct{constructor(t){var e;super(),document.getElementById("svelte-1l90ouq-style")||((e=y("style")).id="svelte-1l90ouq-style",e.textContent="screen-measure.svelte-1l90ouq{position:absolute;width:100%;height:100%;z-index:-1}app-layout.svelte-1l90ouq{display:grid;grid-template-columns:1fr;gap:2px}game-board.svelte-1l90ouq{position:relative;display:block;height:calc(var(--size) * 4)}game-piece.svelte-1l90ouq{position:absolute;display:grid;padding:2px;width:var(--size);height:var(--size);top:0px;left:0px;transform:translate(\r\n            calc(var(--x) * var(--size)),\r\n            calc(var(--y) * var(--size))\r\n        );transition:transform 100ms linear}game-piece.svelte-1l90ouq::after{content:var(--value);display:flex;align-items:center;justify-content:center;font-size:32px;border-radius:4px;border:3px solid var(--primary)}",m(document.head,e)),at(this,t,Yt,Xt,l,{})}}({target:document.body})}();