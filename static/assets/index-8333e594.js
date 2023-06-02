(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const a of l.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(s){if(s.ep)return;s.ep=!0;const l=n(s);fetch(s.href,l)}})();function D(){}function ht(e,t){for(const n in t)e[n]=t[n];return e}function Ye(e){return e()}function He(){return Object.create(null)}function $t(e){e.forEach(Ye)}function ce(e){return typeof e=="function"}function K(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let Yt;function Tt(e,t){return Yt||(Yt=document.createElement("a")),Yt.href=t,e===Yt.href}function ln(e){return Object.keys(e).length===0}function Xe(e,...t){if(e==null)return D;const n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}function gt(e,t,n){e.$$.on_destroy.push(Xe(t,n))}function ue(e,t,n,r){if(e){const s=Ve(e,t,n,r);return e[0](s)}}function Ve(e,t,n,r){return e[1]&&r?ht(n.ctx.slice(),e[1](r(t))):n.ctx}function fe(e,t,n,r){if(e[2]&&r){const s=e[2](r(n));if(t.dirty===void 0)return s;if(typeof s=="object"){const l=[],a=Math.max(t.dirty.length,s.length);for(let c=0;c<a;c+=1)l[c]=t.dirty[c]|s[c];return l}return t.dirty|s}return t.dirty}function de(e,t,n,r,s,l){if(s){const a=Ve(t,n,r,l);e.p(a,s)}}function me(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let r=0;r<n;r++)t[r]=-1;return t}return-1}function se(e){const t={};for(const n in e)n[0]!=="$"&&(t[n]=e[n]);return t}function Be(e,t){const n={};t=new Set(t);for(const r in e)!t.has(r)&&r[0]!=="$"&&(n[r]=e[r]);return n}function i(e,t){e.appendChild(t)}function N(e,t,n){e.insertBefore(t,n||null)}function O(e){e.parentNode&&e.parentNode.removeChild(e)}function d(e){return document.createElement(e)}function Q(e){return document.createTextNode(e)}function h(){return Q(" ")}function pe(){return Q("")}function it(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function f(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function De(e,t){const n=Object.getOwnPropertyDescriptors(e.__proto__);for(const r in t)t[r]==null?e.removeAttribute(r):r==="style"?e.style.cssText=t[r]:r==="__value"?e.value=e[r]=t[r]:n[r]&&n[r].set?e[r]=t[r]:f(e,r,t[r])}function on(e){return Array.from(e.childNodes)}function B(e,t,n,r){n===null?e.style.removeProperty(t):e.style.setProperty(t,n,r?"important":"")}function an(e,t,{bubbles:n=!1,cancelable:r=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(e,n,r,t),s}function ze(e,t){return new e(t)}let Rt;function Lt(e){Rt=e}function It(){if(!Rt)throw new Error("Function called outside component initialization");return Rt}function cn(e){It().$$.on_mount.push(e)}function un(e){It().$$.on_destroy.push(e)}function fn(){const e=It();return(t,n,{cancelable:r=!1}={})=>{const s=e.$$.callbacks[t];if(s){const l=an(t,n,{cancelable:r});return s.slice().forEach(a=>{a.call(e,l)}),!l.defaultPrevented}return!0}}function Je(e,t){return It().$$.context.set(e,t),t}function Nt(e){return It().$$.context.get(e)}const Ot=[],Fe=[];let Et=[];const Qe=[],dn=Promise.resolve();let le=!1;function mn(){le||(le=!0,dn.then(Ze))}function oe(e){Et.push(e)}const te=new Set;let Ct=0;function Ze(){if(Ct!==0)return;const e=Rt;do{try{for(;Ct<Ot.length;){const t=Ot[Ct];Ct++,Lt(t),pn(t.$$)}}catch(t){throw Ot.length=0,Ct=0,t}for(Lt(null),Ot.length=0,Ct=0;Fe.length;)Fe.pop()();for(let t=0;t<Et.length;t+=1){const n=Et[t];te.has(n)||(te.add(n),n())}Et.length=0}while(Ot.length);for(;Qe.length;)Qe.pop()();le=!1,te.clear(),Lt(e)}function pn(e){if(e.fragment!==null){e.update(),$t(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(oe)}}function gn(e){const t=[],n=[];Et.forEach(r=>e.indexOf(r)===-1?t.push(r):n.push(r)),n.forEach(r=>r()),Et=t}const Xt=new Set;let pt;function ge(){pt={r:0,c:[],p:pt}}function he(){pt.r||$t(pt.c),pt=pt.p}function k(e,t){e&&e.i&&(Xt.delete(e),e.i(t))}function x(e,t,n,r){if(e&&e.o){if(Xt.has(e))return;Xt.add(e),pt.c.push(()=>{Xt.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}else r&&r()}function tn(e,t){const n={},r={},s={$$scope:1};let l=e.length;for(;l--;){const a=e[l],c=t[l];if(c){for(const o in a)o in c||(r[o]=1);for(const o in c)s[o]||(n[o]=c[o],s[o]=1);e[l]=c}else for(const o in a)s[o]=1}for(const a in r)a in n||(n[a]=void 0);return n}function Ue(e){return typeof e=="object"&&e!==null?e:{}}function T(e){e&&e.c()}function C(e,t,n,r){const{fragment:s,after_update:l}=e.$$;s&&s.m(t,n),r||oe(()=>{const a=e.$$.on_mount.map(Ye).filter(ce);e.$$.on_destroy?e.$$.on_destroy.push(...a):$t(a),e.$$.on_mount=[]}),l.forEach(oe)}function P(e,t){const n=e.$$;n.fragment!==null&&(gn(n.after_update),$t(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function hn(e,t){e.$$.dirty[0]===-1&&(Ot.push(e),mn(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Y(e,t,n,r,s,l,a,c=[-1]){const o=Rt;Lt(e);const u=e.$$={fragment:null,ctx:[],props:l,update:D,not_equal:s,bound:He(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(o?o.$$.context:[])),callbacks:He(),dirty:c,skip_bound:!1,root:t.target||o.$$.root};a&&a(u.root);let p=!1;if(u.ctx=n?n(e,t.props||{},(g,b,...v)=>{const y=v.length?v[0]:b;return u.ctx&&s(u.ctx[g],u.ctx[g]=y)&&(!u.skip_bound&&u.bound[g]&&u.bound[g](y),p&&hn(e,g)),b}):[],u.update(),p=!0,$t(u.before_update),u.fragment=r?r(u.ctx):!1,t.target){if(t.hydrate){const g=on(t.target);u.fragment&&u.fragment.l(g),g.forEach(O)}else u.fragment&&u.fragment.c();t.intro&&k(e.$$.fragment),C(e,t.target,t.anchor,t.customElement),Ze()}Lt(o)}class X{$destroy(){P(this,1),this.$destroy=D}$on(t,n){if(!ce(n))return D;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}$set(t){this.$$set&&!ln(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Pt=[];function $n(e,t){return{subscribe:jt(e,t).subscribe}}function jt(e,t=D){let n;const r=new Set;function s(c){if(K(e,c)&&(e=c,n)){const o=!Pt.length;for(const u of r)u[1](),Pt.push(u,e);if(o){for(let u=0;u<Pt.length;u+=2)Pt[u][0](Pt[u+1]);Pt.length=0}}}function l(c){s(c(e))}function a(c,o=D){const u=[c,o];return r.add(u),r.size===1&&(n=t(s)||D),c(e),()=>{r.delete(u),r.size===0&&n&&(n(),n=null)}}return{set:s,update:l,subscribe:a}}function _n(e,t,n){const r=!Array.isArray(e),s=r?[e]:e,l=t.length<2;return $n(n,a=>{let c=!1;const o=[];let u=0,p=D;const g=()=>{if(u)return;p();const v=t(r?o[0]:o,a);l?a(v):p=ce(v)?v:D},b=s.map((v,y)=>Xe(v,m=>{o[y]=m,u&=~(1<<y),c&&g()},()=>{u|=1<<y}));return c=!0,g(),function(){$t(b),p(),c=!1}})}const Vt={},Zt={};function ee(e){return{...e.location,state:e.history.state,key:e.history.state&&e.history.state.key||"initial"}}function vn(e,t){const n=[];let r=ee(e);return{get location(){return r},listen(s){n.push(s);const l=()=>{r=ee(e),s({location:r,action:"POP"})};return e.addEventListener("popstate",l),()=>{e.removeEventListener("popstate",l);const a=n.indexOf(s);n.splice(a,1)}},navigate(s,{state:l,replace:a=!1}={}){l={...l,key:Date.now()+""};try{a?e.history.replaceState(l,null,s):e.history.pushState(l,null,s)}catch{e.location[a?"replace":"assign"](s)}r=ee(e),n.forEach(c=>c({location:r,action:"PUSH"}))}}}function bn(e="/"){let t=0;const n=[{pathname:e,search:""}],r=[];return{get location(){return n[t]},addEventListener(s,l){},removeEventListener(s,l){},history:{get entries(){return n},get index(){return t},get state(){return r[t]},pushState(s,l,a){const[c,o=""]=a.split("?");t++,n.push({pathname:c,search:o}),r.push(s)},replaceState(s,l,a){const[c,o=""]=a.split("?");n[t]={pathname:c,search:o},r[t]=s}}}}const yn=!!(typeof window<"u"&&window.document&&window.document.createElement),ae=vn(yn?window:bn()),{navigate:en}=ae,nn=/^:(.+)/,Ge=4,kn=3,wn=2,xn=1,Sn=1;function ie(e,t){return e.substr(0,t.length)===t}function Cn(e){return e===""}function Pn(e){return nn.test(e)}function rn(e){return e[0]==="*"}function At(e){return e.replace(/(^\/+|\/+$)/g,"").split("/")}function ne(e){return e.replace(/(^\/+|\/+$)/g,"")}function Tn(e,t){const n=e.default?0:At(e.path).reduce((r,s)=>(r+=Ge,Cn(s)?r+=Sn:Pn(s)?r+=wn:rn(s)?r-=Ge+xn:r+=kn,r),0);return{route:e,score:n,index:t}}function On(e){return e.map(Tn).sort((t,n)=>t.score<n.score?1:t.score>n.score?-1:t.index-n.index)}function sn(e,t){let n,r;const[s]=t.split("?"),l=At(s),a=l[0]==="",c=On(e);for(let o=0,u=c.length;o<u;o++){const p=c[o].route;let g=!1;if(p.default){r={route:p,params:{},uri:t};continue}const b=At(p.path),v={},y=Math.max(l.length,b.length);let m=0;for(;m<y;m++){const $=b[m],E=l[m];if($!==void 0&&rn($)){const A=$==="*"?"*":$.slice(1);v[A]=l.slice(m).map(decodeURIComponent).join("/");break}if(E===void 0){g=!0;break}let R=nn.exec($);if(R&&!a){const A=decodeURIComponent(E);v[R[1]]=A}else if($!==E){g=!0;break}}if(!g){n={route:p,params:v,uri:"/"+l.slice(0,m).join("/")};break}}return n||r||null}function En(e,t){return sn([e],t)}function re(e,t){return e+(t?`?${t}`:"")}function Nn(e,t){if(ie(e,"/"))return e;const[n,r]=e.split("?"),[s]=t.split("?"),l=At(n),a=At(s);if(l[0]==="")return re(s,r);if(!ie(l[0],".")){const u=a.concat(l).join("/");return re((s==="/"?"":"/")+u,r)}const c=a.concat(l),o=[];return c.forEach(u=>{u===".."?o.pop():u!=="."&&o.push(u)}),re("/"+o.join("/"),r)}function Ke(e,t){return`${ne(t==="/"?e:`${ne(e)}/${ne(t)}`)}/`}function Mn(e){return!e.defaultPrevented&&e.button===0&&!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function jn(e){let t;const n=e[9].default,r=ue(n,e,e[8],null);return{c(){r&&r.c()},m(s,l){r&&r.m(s,l),t=!0},p(s,[l]){r&&r.p&&(!t||l&256)&&de(r,n,s,s[8],t?fe(n,s[8],l,null):me(s[8]),null)},i(s){t||(k(r,s),t=!0)},o(s){x(r,s),t=!1},d(s){r&&r.d(s)}}}function Ln(e,t,n){let r,s,l,{$$slots:a={},$$scope:c}=t,{basepath:o="/"}=t,{url:u=null}=t;const p=Nt(Vt),g=Nt(Zt),b=jt([]);gt(e,b,_=>n(6,s=_));const v=jt(null);let y=!1;const m=p||jt(u?{pathname:u}:ae.location);gt(e,m,_=>n(5,r=_));const $=g?g.routerBase:jt({path:o,uri:o});gt(e,$,_=>n(7,l=_));const E=_n([$,v],([_,j])=>{if(j===null)return _;const{path:w}=_,{route:M,uri:z}=j;return{path:M.default?w:M.path.replace(/\*.*$/,""),uri:z}});function R(_){const{path:j}=l;let{path:w}=_;if(_._path=w,_.path=Ke(j,w),typeof window>"u"){if(y)return;const M=En(_,r.pathname);M&&(v.set(M),y=!0)}else b.update(M=>(M.push(_),M))}function A(_){b.update(j=>{const w=j.indexOf(_);return j.splice(w,1),j})}return p||(cn(()=>ae.listen(j=>{m.set(j.location)})),Je(Vt,m)),Je(Zt,{activeRoute:v,base:$,routerBase:E,registerRoute:R,unregisterRoute:A}),e.$$set=_=>{"basepath"in _&&n(3,o=_.basepath),"url"in _&&n(4,u=_.url),"$$scope"in _&&n(8,c=_.$$scope)},e.$$.update=()=>{if(e.$$.dirty&128){const{path:_}=l;b.update(j=>(j.forEach(w=>w.path=Ke(_,w._path)),j))}if(e.$$.dirty&96){const _=sn(s,r.pathname);v.set(_)}},[b,m,$,o,u,r,s,l,c,a]}class Rn extends X{constructor(t){super(),Y(this,t,Ln,jn,K,{basepath:3,url:4})}}const An=e=>({params:e&4,location:e&16}),qe=e=>({params:e[2],location:e[4]});function We(e){let t,n,r,s;const l=[Hn,In],a=[];function c(o,u){return o[0]!==null?0:1}return t=c(e),n=a[t]=l[t](e),{c(){n.c(),r=pe()},m(o,u){a[t].m(o,u),N(o,r,u),s=!0},p(o,u){let p=t;t=c(o),t===p?a[t].p(o,u):(ge(),x(a[p],1,1,()=>{a[p]=null}),he(),n=a[t],n?n.p(o,u):(n=a[t]=l[t](o),n.c()),k(n,1),n.m(r.parentNode,r))},i(o){s||(k(n),s=!0)},o(o){x(n),s=!1},d(o){a[t].d(o),o&&O(r)}}}function In(e){let t;const n=e[10].default,r=ue(n,e,e[9],qe);return{c(){r&&r.c()},m(s,l){r&&r.m(s,l),t=!0},p(s,l){r&&r.p&&(!t||l&532)&&de(r,n,s,s[9],t?fe(n,s[9],l,An):me(s[9]),qe)},i(s){t||(k(r,s),t=!0)},o(s){x(r,s),t=!1},d(s){r&&r.d(s)}}}function Hn(e){let t,n,r;const s=[{location:e[4]},e[2],e[3]];var l=e[0];function a(c){let o={};for(let u=0;u<s.length;u+=1)o=ht(o,s[u]);return{props:o}}return l&&(t=ze(l,a())),{c(){t&&T(t.$$.fragment),n=pe()},m(c,o){t&&C(t,c,o),N(c,n,o),r=!0},p(c,o){const u=o&28?tn(s,[o&16&&{location:c[4]},o&4&&Ue(c[2]),o&8&&Ue(c[3])]):{};if(o&1&&l!==(l=c[0])){if(t){ge();const p=t;x(p.$$.fragment,1,0,()=>{P(p,1)}),he()}l?(t=ze(l,a()),T(t.$$.fragment),k(t.$$.fragment,1),C(t,n.parentNode,n)):t=null}else l&&t.$set(u)},i(c){r||(t&&k(t.$$.fragment,c),r=!0)},o(c){t&&x(t.$$.fragment,c),r=!1},d(c){c&&O(n),t&&P(t,c)}}}function Bn(e){let t,n,r=e[1]!==null&&e[1].route===e[7]&&We(e);return{c(){r&&r.c(),t=pe()},m(s,l){r&&r.m(s,l),N(s,t,l),n=!0},p(s,[l]){s[1]!==null&&s[1].route===s[7]?r?(r.p(s,l),l&2&&k(r,1)):(r=We(s),r.c(),k(r,1),r.m(t.parentNode,t)):r&&(ge(),x(r,1,1,()=>{r=null}),he())},i(s){n||(k(r),n=!0)},o(s){x(r),n=!1},d(s){r&&r.d(s),s&&O(t)}}}function Dn(e,t,n){let r,s,{$$slots:l={},$$scope:a}=t,{path:c=""}=t,{component:o=null}=t;const{registerRoute:u,unregisterRoute:p,activeRoute:g}=Nt(Zt);gt(e,g,$=>n(1,r=$));const b=Nt(Vt);gt(e,b,$=>n(4,s=$));const v={path:c,default:c===""};let y={},m={};return u(v),typeof window<"u"&&un(()=>{p(v)}),e.$$set=$=>{n(13,t=ht(ht({},t),se($))),"path"in $&&n(8,c=$.path),"component"in $&&n(0,o=$.component),"$$scope"in $&&n(9,a=$.$$scope)},e.$$.update=()=>{e.$$.dirty&2&&r&&r.route===v&&n(2,y=r.params);{const{path:$,component:E,...R}=t;n(3,m=R)}},t=se(t),[o,r,y,m,s,g,b,v,c,a,l]}class mt extends X{constructor(t){super(),Y(this,t,Dn,Bn,K,{path:8,component:0})}}function zn(e){let t,n,r,s;const l=e[16].default,a=ue(l,e,e[15],null);let c=[{href:e[0]},{"aria-current":e[2]},e[1],e[6]],o={};for(let u=0;u<c.length;u+=1)o=ht(o,c[u]);return{c(){t=d("a"),a&&a.c(),De(t,o)},m(u,p){N(u,t,p),a&&a.m(t,null),n=!0,r||(s=it(t,"click",e[5]),r=!0)},p(u,[p]){a&&a.p&&(!n||p&32768)&&de(a,l,u,u[15],n?fe(l,u[15],p,null):me(u[15]),null),De(t,o=tn(c,[(!n||p&1)&&{href:u[0]},(!n||p&4)&&{"aria-current":u[2]},p&2&&u[1],p&64&&u[6]]))},i(u){n||(k(a,u),n=!0)},o(u){x(a,u),n=!1},d(u){u&&O(t),a&&a.d(u),r=!1,s()}}}function Jn(e,t,n){let r;const s=["to","replace","state","getProps"];let l=Be(t,s),a,c,{$$slots:o={},$$scope:u}=t,{to:p="#"}=t,{replace:g=!1}=t,{state:b={}}=t,{getProps:v=()=>({})}=t;const{base:y}=Nt(Zt);gt(e,y,w=>n(14,c=w));const m=Nt(Vt);gt(e,m,w=>n(13,a=w));const $=fn();let E,R,A,_;function j(w){if($("click",w),Mn(w)){w.preventDefault();const M=a.pathname===E||g;en(E,{state:b,replace:M})}}return e.$$set=w=>{t=ht(ht({},t),se(w)),n(6,l=Be(t,s)),"to"in w&&n(7,p=w.to),"replace"in w&&n(8,g=w.replace),"state"in w&&n(9,b=w.state),"getProps"in w&&n(10,v=w.getProps),"$$scope"in w&&n(15,u=w.$$scope)},e.$$.update=()=>{e.$$.dirty&16512&&n(0,E=p==="/"?c.uri:Nn(p,c.uri)),e.$$.dirty&8193&&n(11,R=ie(a.pathname,E)),e.$$.dirty&8193&&n(12,A=E===a.pathname),e.$$.dirty&4096&&n(2,r=A?"page":void 0),e.$$.dirty&15361&&n(1,_=v({location:a,href:E,isPartiallyCurrent:R,isCurrent:A}))},[E,_,r,y,m,j,l,p,g,b,v,R,A,a,c,u,o]}class W extends X{constructor(t){super(),Y(this,t,Jn,zn,K,{to:7,replace:8,state:9,getProps:10})}}function Fn(e){let t,n,r,s,l,a,c,o,u,p,g,b,v,y,m,$,E,R,A,_,j,w,M,z,H,Z,S,I,U,V,tt,q,J,nt,et,F,rt,Mt;return{c(){t=d("main"),n=d("nav"),r=d("div"),s=d("button"),s.innerHTML='<span class="navbar-toggler-icon"></span>',l=h(),a=d("a"),a.textContent="FourGuysProduction",c=h(),o=d("div"),u=d("div"),u.innerHTML=`<h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">FourGuysProduction</h5> 
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>`,p=h(),g=d("div"),b=d("ul"),v=d("li"),y=d("a"),y.textContent="Home",m=h(),$=d("li"),E=d("a"),E.textContent="Work",R=h(),A=d("li"),_=d("a"),_.textContent="About",j=h(),w=d("li"),M=d("a"),M.textContent="Members",z=h(),H=d("ul"),Z=d("li"),S=d("a"),S.textContent="TorlapSonprathed",I=h(),U=d("li"),V=d("a"),V.textContent="ChayatornOunpat",tt=h(),q=d("li"),J=d("a"),J.textContent="PiyoungkulSawang",nt=h(),et=d("li"),F=d("a"),F.textContent="JirawatSapthawarakul",f(s,"class","navbar-toggler"),f(s,"type","button"),f(s,"data-bs-toggle","offcanvas"),f(s,"data-bs-target","#offcanvasDarkNavbar"),f(s,"aria-controls","offcanvasDarkNavbar"),f(a,"class","navbar-brand"),f(u,"class","offcanvas-header"),f(y,"class","nav-link"),f(y,"href","javascript:void(0)"),f(v,"class","nav-item"),f(E,"class","nav-link"),f(E,"href","javascript:void(0)"),f($,"class","nav-item"),f(_,"class","nav-link"),f(_,"href","javascript:void(0)"),f(A,"class","nav-item"),f(M,"class","nav-link dropdown-toggle"),f(M,"role","button"),f(M,"data-bs-toggle","dropdown"),f(M,"aria-expanded","false"),f(S,"class","dropdown-item "),f(S,"href","javascript:void(0)"),f(V,"class","dropdown-item"),f(V,"href","javascript:void(0)"),f(J,"class","dropdown-item"),f(J,"href","javascript:void(0)"),f(F,"class","dropdown-item"),f(F,"href","javascript:void(0)"),f(H,"class","dropdown-menu dropdown-menu-dark"),f(w,"class","nav-item dropdown"),f(b,"class","navbar-nav justify-content-end flex-grow-1 pe-3"),f(g,"class","offcanvas-body"),f(o,"class","offcanvas offcanvas-start text-bg-dark"),f(o,"tabindex","-1"),f(o,"id","offcanvasDarkNavbar"),f(o,"aria-labelledby","offcanvasDarkNavbarLabel"),f(r,"class","container-fluid"),f(n,"class","navbar navbar-dark bg-dark fixed-top")},m(st,Ht){N(st,t,Ht),i(t,n),i(n,r),i(r,s),i(r,l),i(r,a),i(r,c),i(r,o),i(o,u),i(o,p),i(o,g),i(g,b),i(b,v),i(v,y),i(b,m),i(b,$),i($,E),i(b,R),i(b,A),i(A,_),i(b,j),i(b,w),i(w,M),i(w,z),i(w,H),i(H,Z),i(Z,S),i(H,I),i(H,U),i(U,V),i(H,tt),i(H,q),i(q,J),i(H,nt),i(H,et),i(et,F),rt||(Mt=[it(y,"click",e[1]),it(E,"click",e[2]),it(_,"click",e[3]),it(S,"click",e[4]),it(V,"click",e[5]),it(J,"click",e[6]),it(F,"click",e[7])],rt=!0)},p:D,i:D,o:D,d(st){st&&O(t),rt=!1,$t(Mt)}}}function Qn(e){var t;function n(b){t=b}function r(){en(t)}function s(b){const v=document.getElementById("offcanvasDarkNavbar");bootstrap.Offcanvas.getInstance(v).hide(),n(b),setTimeout(r,400)}return[s,()=>s("/"),()=>s("/work"),()=>s("/about"),()=>s("/TorlapSonprathed"),()=>s("/ChayatornOunpat"),()=>s("/PiyoungkulSawang"),()=>s("/JirawatSapthawarakul")]}class _t extends X{constructor(t){super(),Y(this,t,Qn,Fn,K,{})}}function Un(e){let t;return{c(){t=Q("Home")},m(n,r){N(n,t,r)},d(n){n&&O(t)}}}function Gn(e){let t;return{c(){t=Q("About")},m(n,r){N(n,t,r)},d(n){n&&O(t)}}}function Kn(e){let t;return{c(){t=Q("Work")},m(n,r){N(n,t,r)},d(n){n&&O(t)}}}function qn(e){let t;return{c(){t=Q("PiyoungkulSawang")},m(n,r){N(n,t,r)},d(n){n&&O(t)}}}function Wn(e){let t;return{c(){t=Q("TorlapSonprathed")},m(n,r){N(n,t,r)},d(n){n&&O(t)}}}function Yn(e){let t;return{c(){t=Q("JirawatSapthawarakul")},m(n,r){N(n,t,r)},d(n){n&&O(t)}}}function Xn(e){let t;return{c(){t=Q("ChayatornOunpat")},m(n,r){N(n,t,r)},d(n){n&&O(t)}}}function Vn(e){let t,n,r,s,l,a,c,o,u,p,g,b,v,y,m,$,E,R,A,_,j,w,M,z,H,Z;return l=new W({props:{to:"/",class:"nav-link px-2 text-muted",$$slots:{default:[Un]},$$scope:{ctx:e}}}),o=new W({props:{to:"/about",class:"nav-link px-2 text-muted",$$slots:{default:[Gn]},$$scope:{ctx:e}}}),g=new W({props:{to:"/work",class:"nav-link px-2 text-muted",$$slots:{default:[Kn]},$$scope:{ctx:e}}}),y=new W({props:{to:"/PiyoungkulSawang",class:"nav-link px-2 text-muted",$$slots:{default:[qn]},$$scope:{ctx:e}}}),E=new W({props:{to:"/TorlapSonprathed",class:"nav-link px-2 text-muted",$$slots:{default:[Wn]},$$scope:{ctx:e}}}),_=new W({props:{to:"/JirawatSapthawarakul",class:"nav-link px-2 text-muted",$$slots:{default:[Yn]},$$scope:{ctx:e}}}),M=new W({props:{to:"/ChayatornOunpat",class:"nav-link px-2 text-muted",$$slots:{default:[Xn]},$$scope:{ctx:e}}}),{c(){t=d("div"),n=d("div"),r=d("ul"),s=d("li"),T(l.$$.fragment),a=h(),c=d("li"),T(o.$$.fragment),u=h(),p=d("li"),T(g.$$.fragment),b=h(),v=d("li"),T(y.$$.fragment),m=h(),$=d("li"),T(E.$$.fragment),R=h(),A=d("li"),T(_.$$.fragment),j=h(),w=d("li"),T(M.$$.fragment),z=h(),H=d("p"),H.textContent="FourGuysProduction",f(s,"class","nav-item"),f(c,"class","nav-item"),f(p,"class","nav-item"),f(v,"class","nav-item"),f($,"class","nav-item"),f(A,"class","nav-item"),f(w,"class","nav-item"),f(r,"class","nav justify-content-center mt-5 mb-4"),f(H,"class","text-center text-light"),f(n,"class","mb-5"),f(t,"class","shadow-lg bg-dark align-items-center justify-content-center custom-rounded-top svelte-1s3od1r")},m(S,I){N(S,t,I),i(t,n),i(n,r),i(r,s),C(l,s,null),i(r,a),i(r,c),C(o,c,null),i(r,u),i(r,p),C(g,p,null),i(r,b),i(r,v),C(y,v,null),i(r,m),i(r,$),C(E,$,null),i(r,R),i(r,A),C(_,A,null),i(r,j),i(r,w),C(M,w,null),i(n,z),i(n,H),Z=!0},p(S,[I]){const U={};I&1&&(U.$$scope={dirty:I,ctx:S}),l.$set(U);const V={};I&1&&(V.$$scope={dirty:I,ctx:S}),o.$set(V);const tt={};I&1&&(tt.$$scope={dirty:I,ctx:S}),g.$set(tt);const q={};I&1&&(q.$$scope={dirty:I,ctx:S}),y.$set(q);const J={};I&1&&(J.$$scope={dirty:I,ctx:S}),E.$set(J);const nt={};I&1&&(nt.$$scope={dirty:I,ctx:S}),_.$set(nt);const et={};I&1&&(et.$$scope={dirty:I,ctx:S}),M.$set(et)},i(S){Z||(k(l.$$.fragment,S),k(o.$$.fragment,S),k(g.$$.fragment,S),k(y.$$.fragment,S),k(E.$$.fragment,S),k(_.$$.fragment,S),k(M.$$.fragment,S),Z=!0)},o(S){x(l.$$.fragment,S),x(o.$$.fragment,S),x(g.$$.fragment,S),x(y.$$.fragment,S),x(E.$$.fragment,S),x(_.$$.fragment,S),x(M.$$.fragment,S),Z=!1},d(S){S&&O(t),P(l),P(o),P(g),P(y),P(E),P(_),P(M)}}}class vt extends X{constructor(t){super(),Y(this,t,null,Vn,K,{})}}function Zn(e){let t;return{c(){t=Q("More about us")},m(n,r){N(n,t,r)},d(n){n&&O(t)}}}function tr(e){let t;return{c(){t=Q("More")},m(n,r){N(n,t,r)},d(n){n&&O(t)}}}function er(e){let t;return{c(){t=Q("More")},m(n,r){N(n,t,r)},d(n){n&&O(t)}}}function nr(e){let t;return{c(){t=Q("More")},m(n,r){N(n,t,r)},d(n){n&&O(t)}}}function rr(e){let t;return{c(){t=Q("More")},m(n,r){N(n,t,r)},d(n){n&&O(t)}}}function sr(e){let t;return{c(){t=Q("More of our work")},m(n,r){N(n,t,r)},d(n){n&&O(t)}}}function lr(e){let t,n,r,s,l,a,c,o,u,p,g,b,v,y,m,$,E,R,A,_,j,w,M,z,H,Z,S,I,U,V,tt,q,J,nt,et,F,rt,Mt,st,Ht,ct,$e,Bt,bt,yt,_e,ve,lt,Dt,be,zt,ye,ut,ke,Jt,kt,wt,we,xe,ot,Ft,Se,Qt,Ce,ft,Pe,Ut,xt,Gt,Te,at,Kt,Oe,qt,Ee,dt,Ne,St,Wt;return n=new _t({}),y=new W({props:{to:"/about",class:"btn btn-primary btn-lg px-4 gap-3",$$slots:{default:[Zn]},$$scope:{ctx:e}}}),U=new W({props:{to:"/TorlapSonprathed",class:"btn btn-primary",$$slots:{default:[tr]},$$scope:{ctx:e}}}),ct=new W({props:{to:"/ChayatornOunpat",class:"btn btn-primary",$$slots:{default:[er]},$$scope:{ctx:e}}}),ut=new W({props:{to:"/PiyoungkulSawang",class:"btn btn-primary",$$slots:{default:[nr]},$$scope:{ctx:e}}}),ft=new W({props:{to:"/JirawatSapthawarakul",class:"btn btn-primary",$$slots:{default:[rr]},$$scope:{ctx:e}}}),dt=new W({props:{to:"/work",class:"btn btn-primary",$$slots:{default:[sr]},$$scope:{ctx:e}}}),St=new vt({}),{c(){t=d("main"),T(n.$$.fragment),r=h(),s=d("img"),a=h(),c=d("div"),o=d("h1"),o.textContent="FourGuysProduction",u=h(),p=d("div"),g=d("p"),g.textContent="just four idiots filming stuff",b=h(),v=d("div"),T(y.$$.fragment),m=h(),$=d("div"),E=d("div"),R=d("div"),A=d("div"),_=d("div"),j=d("img"),M=h(),z=d("div"),H=d("h5"),H.textContent="Torlap Sonprathed",Z=h(),S=d("p"),S.textContent="Our great emperor, drinks coffee from african children",I=h(),T(U.$$.fragment),V=h(),tt=d("div"),q=d("div"),J=d("img"),et=h(),F=d("div"),rt=d("h5"),rt.textContent="Chayatorn Ounpat",Mt=h(),st=d("p"),st.textContent="I can dislocate all my joints when I sleep, its pretty comfy",Ht=h(),T(ct.$$.fragment),$e=h(),Bt=d("div"),bt=d("div"),yt=d("img"),ve=h(),lt=d("div"),Dt=d("h5"),Dt.textContent="Piyoungkul Sawang",be=h(),zt=d("p"),zt.textContent="drinks milk from african children instead of mont fleur",ye=h(),T(ut.$$.fragment),ke=h(),Jt=d("div"),kt=d("div"),wt=d("img"),xe=h(),ot=d("div"),Ft=d("h5"),Ft.textContent="Jirawat Sapthawarakul",Se=h(),Qt=d("p"),Qt.textContent="buy RTX3090 to play solitaire and candy crush",Ce=h(),T(ft.$$.fragment),Pe=h(),Ut=d("div"),xt=d("div"),Gt=d("div"),Gt.innerHTML='<video src="http://127.0.0.1:8000/video/reel" class="w-100" controls=""></video>',Te=h(),at=d("div"),Kt=d("h5"),Kt.textContent="Reel",Oe=h(),qt=d("p"),qt.textContent="slander compilation of all our work",Ee=h(),T(dt.$$.fragment),Ne=h(),T(St.$$.fragment),f(s,"class","img-fluid img-max svelte-1314lv7"),Tt(s.src,l="http://127.0.0.1:8000/img/homemain")||f(s,"src",l),f(o,"class","display-5 fw-bold"),f(g,"class","lead mb-4"),f(v,"class","d-grid gap-2 d-sm-flex justify-content-sm-center"),f(p,"class","col-lg-6 mx-auto"),f(c,"class","px-4 py-5 my-5 text-center"),Tt(j.src,w="http://127.0.0.1:8000/img/pentor")||f(j,"src",w),f(j,"class","card-img-top"),f(j,"alt","..."),f(H,"class","card-title"),f(S,"class","card-text"),f(z,"class","card-body"),f(_,"class","card"),f(A,"class","col"),Tt(J.src,nt="http://127.0.0.1:8000/img/me")||f(J,"src",nt),f(J,"class","card-img-top"),f(J,"alt","..."),f(rt,"class","card-title"),f(st,"class","card-text"),f(F,"class","card-body"),f(q,"class","card"),f(tt,"class","col"),Tt(yt.src,_e="http://127.0.0.1:8000/img/tonhom")||f(yt,"src",_e),f(yt,"class","card-img-top"),f(yt,"alt","..."),f(Dt,"class","card-title"),f(zt,"class","card-text"),f(lt,"class","card-body"),f(bt,"class","card"),f(Bt,"class","col"),Tt(wt.src,we="http://127.0.0.1:8000/img/mickey")||f(wt,"src",we),f(wt,"class","card-img-top"),f(wt,"alt","..."),f(Ft,"class","card-title"),f(Qt,"class","card-text"),f(ot,"class","card-body"),f(kt,"class","card"),f(Jt,"class","col"),f(R,"class","row row-cols-2 g-3 ms-4 me-4 mt-4 mb-4"),f(E,"class","shadow-lg bg-dark custom-rounded svelte-1314lv7"),f(Gt,"class","card-img-top"),f(Kt,"class","card-title"),f(qt,"class","card-text"),f(at,"class","card-body"),f(xt,"class","card"),f(Ut,"class","ms-4 me-4 mt-4 mb-4"),f($,"class","d-grid gap-3 align-items-center justify-content-center")},m(L,G){N(L,t,G),C(n,t,null),i(t,r),i(t,s),i(t,a),i(t,c),i(c,o),i(c,u),i(c,p),i(p,g),i(p,b),i(p,v),C(y,v,null),i(t,m),i(t,$),i($,E),i(E,R),i(R,A),i(A,_),i(_,j),i(_,M),i(_,z),i(z,H),i(z,Z),i(z,S),i(z,I),C(U,z,null),i(R,V),i(R,tt),i(tt,q),i(q,J),i(q,et),i(q,F),i(F,rt),i(F,Mt),i(F,st),i(F,Ht),C(ct,F,null),i(R,$e),i(R,Bt),i(Bt,bt),i(bt,yt),i(bt,ve),i(bt,lt),i(lt,Dt),i(lt,be),i(lt,zt),i(lt,ye),C(ut,lt,null),i(R,ke),i(R,Jt),i(Jt,kt),i(kt,wt),i(kt,xe),i(kt,ot),i(ot,Ft),i(ot,Se),i(ot,Qt),i(ot,Ce),C(ft,ot,null),i($,Pe),i($,Ut),i(Ut,xt),i(xt,Gt),i(xt,Te),i(xt,at),i(at,Kt),i(at,Oe),i(at,qt),i(at,Ee),C(dt,at,null),i($,Ne),C(St,$,null),Wt=!0},p(L,[G]){const Me={};G&1&&(Me.$$scope={dirty:G,ctx:L}),y.$set(Me);const je={};G&1&&(je.$$scope={dirty:G,ctx:L}),U.$set(je);const Le={};G&1&&(Le.$$scope={dirty:G,ctx:L}),ct.$set(Le);const Re={};G&1&&(Re.$$scope={dirty:G,ctx:L}),ut.$set(Re);const Ae={};G&1&&(Ae.$$scope={dirty:G,ctx:L}),ft.$set(Ae);const Ie={};G&1&&(Ie.$$scope={dirty:G,ctx:L}),dt.$set(Ie)},i(L){Wt||(k(n.$$.fragment,L),k(y.$$.fragment,L),k(U.$$.fragment,L),k(ct.$$.fragment,L),k(ut.$$.fragment,L),k(ft.$$.fragment,L),k(dt.$$.fragment,L),k(St.$$.fragment,L),Wt=!0)},o(L){x(n.$$.fragment,L),x(y.$$.fragment,L),x(U.$$.fragment,L),x(ct.$$.fragment,L),x(ut.$$.fragment,L),x(ft.$$.fragment,L),x(dt.$$.fragment,L),x(St.$$.fragment,L),Wt=!1},d(L){L&&O(t),P(n),P(y),P(U),P(ct),P(ut),P(ft),P(dt),P(St)}}}class or extends X{constructor(t){super(),Y(this,t,null,lr,K,{})}}function ar(e){let t,n,r,s,l,a,c,o,u,p;return n=new _t({}),u=new vt({}),{c(){t=d("div"),T(n.$$.fragment),r=h(),s=d("img"),a=h(),c=d("div"),c.innerHTML=`<h1 class="display-5 fw-bold">About us</h1> 
        <div class="col-lg-6 mx-auto"><p class="lead mb-4">just four idiots filming stuff</p></div>`,o=h(),T(u.$$.fragment),f(s,"class","img-fluid img-max svelte-xfk0uo"),Tt(s.src,l="http://127.0.0.1:8000/img/homemain")||f(s,"src",l),f(c,"class","px-4 py-5 my-5 text-center"),B(c,"flex-grow","1"),B(t,"height","100%"),B(t,"display","flex"),B(t,"flex-direction","column")},m(g,b){N(g,t,b),C(n,t,null),i(t,r),i(t,s),i(t,a),i(t,c),i(t,o),C(u,t,null),p=!0},p:D,i(g){p||(k(n.$$.fragment,g),k(u.$$.fragment,g),p=!0)},o(g){x(n.$$.fragment,g),x(u.$$.fragment,g),p=!1},d(g){g&&O(t),P(n),P(u)}}}class ir extends X{constructor(t){super(),Y(this,t,null,ar,K,{})}}function cr(e){let t,n,r,s,l,a,c;return n=new _t({}),a=new vt({}),{c(){t=d("div"),T(n.$$.fragment),r=h(),s=d("div"),s.innerHTML=`<div class="row flex-lg-row-reverse align-items-center g-5 py-5"><div class="col-10 col-sm-8 col-lg-6"><img src="http://127.0.0.1:8000/img/me" class="d-block mx-lg-auto img-fluid rounded border border-secondary" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/></div> 
            <div class="col-lg-6"><h1 class="display-5 fw-bold lh-1 mb-3">Chayatorn Ounpat</h1> 
                <p class="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the
                    world’s
                    most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid
                    system, extensive prebuilt components, and powerful JavaScript plugins.</p></div></div>`,l=h(),T(a.$$.fragment),f(s,"class","container col-xxl-8 px-4 py-5 row-content"),B(s,"flex-grow","1"),f(t,"class","box"),B(t,"height","100%"),B(t,"display","flex"),B(t,"flex-direction","column")},m(o,u){N(o,t,u),C(n,t,null),i(t,r),i(t,s),i(t,l),C(a,t,null),c=!0},p:D,i(o){c||(k(n.$$.fragment,o),k(a.$$.fragment,o),c=!0)},o(o){x(n.$$.fragment,o),x(a.$$.fragment,o),c=!1},d(o){o&&O(t),P(n),P(a)}}}class ur extends X{constructor(t){super(),Y(this,t,null,cr,K,{})}}function fr(e){let t,n,r,s,l,a,c;return n=new _t({}),a=new vt({}),{c(){t=d("div"),T(n.$$.fragment),r=h(),s=d("div"),s.innerHTML=`<div class="row flex-lg-row-reverse align-items-center g-5 py-5"><div class="col-10 col-sm-8 col-lg-6"><img src="http://127.0.0.1:8000/img/mickey" class="d-block mx-lg-auto img-fluid rounded border border-secondary" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/></div> 
            <div class="col-lg-6"><h1 class="display-5 fw-bold lh-1 mb-3">Jirawat Sapthawarakul</h1> 
                <p class="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the
                    world’s
                    most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid
                    system, extensive prebuilt components, and powerful JavaScript plugins.</p></div></div>`,l=h(),T(a.$$.fragment),f(s,"class","container col-xxl-8 px-4 py-5 row-content"),B(s,"flex-grow","1"),f(t,"class","box"),B(t,"height","100%"),B(t,"display","flex"),B(t,"flex-direction","column")},m(o,u){N(o,t,u),C(n,t,null),i(t,r),i(t,s),i(t,l),C(a,t,null),c=!0},p:D,i(o){c||(k(n.$$.fragment,o),k(a.$$.fragment,o),c=!0)},o(o){x(n.$$.fragment,o),x(a.$$.fragment,o),c=!1},d(o){o&&O(t),P(n),P(a)}}}class dr extends X{constructor(t){super(),Y(this,t,null,fr,K,{})}}function mr(e){let t,n,r,s,l,a,c;return n=new _t({}),a=new vt({}),{c(){t=d("div"),T(n.$$.fragment),r=h(),s=d("div"),s.innerHTML=`<div class="row flex-lg-row-reverse align-items-center g-5 py-5"><div class="col-10 col-sm-8 col-lg-6"><img src="http://127.0.0.1:8000/img/pentor" class="d-block mx-lg-auto img-fluid rounded border border-secondary" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/></div> 
            <div class="col-lg-6"><h1 class="display-5 fw-bold lh-1 mb-3">Torlap Sonprathed</h1> 
                <p class="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the
                    world’s
                    most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid
                    system, extensive prebuilt components, and powerful JavaScript plugins.</p></div></div>`,l=h(),T(a.$$.fragment),f(s,"class","container col-xxl-8 px-4 py-5 row-content"),B(s,"flex-grow","1"),B(t,"height","100%"),B(t,"display","flex"),B(t,"flex-direction","column")},m(o,u){N(o,t,u),C(n,t,null),i(t,r),i(t,s),i(t,l),C(a,t,null),c=!0},p:D,i(o){c||(k(n.$$.fragment,o),k(a.$$.fragment,o),c=!0)},o(o){x(n.$$.fragment,o),x(a.$$.fragment,o),c=!1},d(o){o&&O(t),P(n),P(a)}}}class pr extends X{constructor(t){super(),Y(this,t,null,mr,K,{})}}function gr(e){let t,n,r,s,l,a,c;return n=new _t({}),a=new vt({}),{c(){t=d("div"),T(n.$$.fragment),r=h(),s=d("div"),s.innerHTML=`<div class="row flex-lg-row-reverse align-items-center g-5 py-5"><div class="col-10 col-sm-8 col-lg-6"><img src="http://127.0.0.1:8000/img/tonhom" class="d-block mx-lg-auto img-fluid rounded border border-secondary" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/></div> 
            <div class="col-lg-6"><h1 class="display-5 fw-bold lh-1 mb-3">Piyoungkul Sawang</h1> 
                <p class="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the
                    world’s
                    most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid
                    system, extensive prebuilt components, and powerful JavaScript plugins.</p></div></div>`,l=h(),T(a.$$.fragment),f(s,"class","container col-xxl-8 px-4 py-5 row-content"),B(s,"flex-grow","1"),f(t,"class","box"),B(t,"height","100%"),B(t,"display","flex"),B(t,"flex-direction","column")},m(o,u){N(o,t,u),C(n,t,null),i(t,r),i(t,s),i(t,l),C(a,t,null),c=!0},p:D,i(o){c||(k(n.$$.fragment,o),k(a.$$.fragment,o),c=!0)},o(o){x(n.$$.fragment,o),x(a.$$.fragment,o),c=!1},d(o){o&&O(t),P(n),P(a)}}}class hr extends X{constructor(t){super(),Y(this,t,null,gr,K,{})}}function $r(e){let t,n,r,s,l;return n=new _t({}),s=new vt({}),{c(){t=d("main"),T(n.$$.fragment),r=h(),T(s.$$.fragment)},m(a,c){N(a,t,c),C(n,t,null),i(t,r),C(s,t,null),l=!0},p:D,i(a){l||(k(n.$$.fragment,a),k(s.$$.fragment,a),l=!0)},o(a){x(n.$$.fragment,a),x(s.$$.fragment,a),l=!1},d(a){a&&O(t),P(n),P(s)}}}class _r extends X{constructor(t){super(),Y(this,t,null,$r,K,{})}}function vr(e){let t,n,r,s,l,a,c,o,u,p,g,b,v,y;return t=new mt({props:{path:"/",component:or}}),r=new mt({props:{path:"/about",component:ir}}),l=new mt({props:{path:"/work",component:_r}}),c=new mt({props:{path:"/PiyoungkulSawang",component:hr}}),u=new mt({props:{path:"/TorlapSonprathed",component:pr}}),g=new mt({props:{path:"/JirawatSapthawarakul",component:dr}}),v=new mt({props:{path:"/ChayatornOunpat",component:ur}}),{c(){T(t.$$.fragment),n=h(),T(r.$$.fragment),s=h(),T(l.$$.fragment),a=h(),T(c.$$.fragment),o=h(),T(u.$$.fragment),p=h(),T(g.$$.fragment),b=h(),T(v.$$.fragment)},m(m,$){C(t,m,$),N(m,n,$),C(r,m,$),N(m,s,$),C(l,m,$),N(m,a,$),C(c,m,$),N(m,o,$),C(u,m,$),N(m,p,$),C(g,m,$),N(m,b,$),C(v,m,$),y=!0},p:D,i(m){y||(k(t.$$.fragment,m),k(r.$$.fragment,m),k(l.$$.fragment,m),k(c.$$.fragment,m),k(u.$$.fragment,m),k(g.$$.fragment,m),k(v.$$.fragment,m),y=!0)},o(m){x(t.$$.fragment,m),x(r.$$.fragment,m),x(l.$$.fragment,m),x(c.$$.fragment,m),x(u.$$.fragment,m),x(g.$$.fragment,m),x(v.$$.fragment,m),y=!1},d(m){P(t,m),m&&O(n),P(r,m),m&&O(s),P(l,m),m&&O(a),P(c,m),m&&O(o),P(u,m),m&&O(p),P(g,m),m&&O(b),P(v,m)}}}function br(e){let t,n,r,s;return r=new Rn({props:{$$slots:{default:[vr]},$$scope:{ctx:e}}}),{c(){t=d("link"),n=h(),T(r.$$.fragment),f(t,"href","https://fonts.googleapis.com/css?family=Noto Sans"),f(t,"rel","stylesheet")},m(l,a){i(document.head,t),N(l,n,a),C(r,l,a),s=!0},p(l,[a]){const c={};a&1&&(c.$$scope={dirty:a,ctx:l}),r.$set(c)},i(l){s||(k(r.$$.fragment,l),s=!0)},o(l){x(r.$$.fragment,l),s=!1},d(l){O(t),l&&O(n),P(r,l)}}}class yr extends X{constructor(t){super(),Y(this,t,null,br,K,{})}}new yr({target:document.getElementById("app")});