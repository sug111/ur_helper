function h(){}function H(t,n){for(const e in n)t[e]=n[e];return t}function z(t){return t()}function L(){return Object.create(null)}function y(t){t.forEach(z)}function V(t){return typeof t=="function"}function G(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let x;function ft(t,n){return x||(x=document.createElement("a")),x.href=n,t===x.href}function K(t){return Object.keys(t).length===0}function B(t,...n){if(t==null)return h;const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function Q(t){let n;return B(t,e=>n=e)(),n}function dt(t,n,e){t.$$.on_destroy.push(B(n,e))}function _t(t,n,e,i){if(t){const c=I(t,n,e,i);return t[0](c)}}function I(t,n,e,i){return t[1]&&i?H(e.ctx.slice(),t[1](i(n))):e.ctx}function ht(t,n,e,i){if(t[2]&&i){const c=t[2](i(e));if(n.dirty===void 0)return c;if(typeof c=="object"){const l=[],u=Math.max(n.dirty.length,c.length);for(let o=0;o<u;o+=1)l[o]=n.dirty[o]|c[o];return l}return n.dirty|c}return n.dirty}function mt(t,n,e,i,c,l){if(c){const u=I(n,e,i,l);t.p(u,c)}}function pt(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function gt(t){const n={};for(const e in t)e[0]!=="$"&&(n[e]=t[e]);return n}function yt(t,n,e){return t.set(e),n}let E=!1;function R(){E=!0}function U(){E=!1}function W(t,n,e,i){for(;t<n;){const c=t+(n-t>>1);e(c)<=i?t=c+1:n=c}return t}function X(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const r=[];for(let s=0;s<n.length;s++){const a=n[s];a.claim_order!==void 0&&r.push(a)}n=r}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let c=0;for(let r=0;r<n.length;r++){const s=n[r].claim_order,a=(c>0&&n[e[c]].claim_order<=s?c+1:W(1,c,b=>n[e[b]].claim_order,s))-1;i[r]=e[a]+1;const f=a+1;e[f]=r,c=Math.max(f,c)}const l=[],u=[];let o=n.length-1;for(let r=e[c]+1;r!=0;r=i[r-1]){for(l.push(n[r-1]);o>=r;o--)u.push(n[o]);o--}for(;o>=0;o--)u.push(n[o]);l.reverse(),u.sort((r,s)=>r.claim_order-s.claim_order);for(let r=0,s=0;r<u.length;r++){for(;s<l.length&&u[r].claim_order>=l[s].claim_order;)s++;const a=s<l.length?l[s]:null;t.insertBefore(u[r],a)}}function Y(t,n){if(E){for(X(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function bt(t,n,e){E&&!e?Y(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function Z(t){t.parentNode.removeChild(t)}function tt(t){return document.createElement(t)}function C(t){return document.createTextNode(t)}function xt(){return C(" ")}function $t(){return C("")}function wt(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function St(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function nt(t){return Array.from(t.childNodes)}function et(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function J(t,n,e,i,c=!1){et(t);const l=(()=>{for(let u=t.claim_info.last_index;u<t.length;u++){const o=t[u];if(n(o)){const r=e(o);return r===void 0?t.splice(u,1):t[u]=r,c||(t.claim_info.last_index=u),o}}for(let u=t.claim_info.last_index-1;u>=0;u--){const o=t[u];if(n(o)){const r=e(o);return r===void 0?t.splice(u,1):t[u]=r,c?r===void 0&&t.claim_info.last_index--:t.claim_info.last_index=u,o}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function it(t,n,e,i){return J(t,c=>c.nodeName===n,c=>{const l=[];for(let u=0;u<c.attributes.length;u++){const o=c.attributes[u];e[o.name]||l.push(o.name)}l.forEach(u=>c.removeAttribute(u))},()=>i(n))}function Et(t,n,e){return it(t,n,e,tt)}function rt(t,n){return J(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>C(n),!0)}function Nt(t){return rt(t," ")}function jt(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function At(t,n,e,i){e===null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function vt(t,n=document.body){return Array.from(n.querySelectorAll(t))}let g;function p(t){g=t}function N(){if(!g)throw new Error("Function called outside component initialization");return g}function qt(t){N().$$.on_mount.push(t)}function Ct(t){N().$$.after_update.push(t)}function kt(t,n){N().$$.context.set(t,n)}function Ot(t){return N().$$.context.get(t)}const m=[],M=[],w=[],T=[],P=Promise.resolve();let v=!1;function D(){v||(v=!0,P.then(F))}function Lt(){return D(),P}function q(t){w.push(t)}const j=new Set;let $=0;function F(){const t=g;do{for(;$<m.length;){const n=m[$];$++,p(n),ct(n.$$)}for(p(null),m.length=0,$=0;M.length;)M.pop()();for(let n=0;n<w.length;n+=1){const e=w[n];j.has(e)||(j.add(e),e())}w.length=0}while(m.length);for(;T.length;)T.pop()();v=!1,j.clear(),p(t)}function ct(t){if(t.fragment!==null){t.update(),y(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(q)}}const S=new Set;let d;function Mt(){d={r:0,c:[],p:d}}function Tt(){d.r||y(d.c),d=d.p}function ot(t,n){t&&t.i&&(S.delete(t),t.i(n))}function zt(t,n,e,i){if(t&&t.o){if(S.has(t))return;S.add(t),d.c.push(()=>{S.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}}function Bt(t,n){const e={},i={},c={$$scope:1};let l=t.length;for(;l--;){const u=t[l],o=n[l];if(o){for(const r in u)r in o||(i[r]=1);for(const r in o)c[r]||(e[r]=o[r],c[r]=1);t[l]=o}else for(const r in u)c[r]=1}for(const u in i)u in e||(e[u]=void 0);return e}function It(t){return typeof t=="object"&&t!==null?t:{}}function Jt(t){t&&t.c()}function Pt(t,n){t&&t.l(n)}function ut(t,n,e,i){const{fragment:c,on_mount:l,on_destroy:u,after_update:o}=t.$$;c&&c.m(n,e),i||q(()=>{const r=l.map(z).filter(V);u?u.push(...r):y(r),t.$$.on_mount=[]}),o.forEach(q)}function st(t,n){const e=t.$$;e.fragment!==null&&(y(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function lt(t,n){t.$$.dirty[0]===-1&&(m.push(t),D(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Dt(t,n,e,i,c,l,u,o=[-1]){const r=g;p(t);const s=t.$$={fragment:null,ctx:null,props:l,update:h,not_equal:c,bound:L(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(r?r.$$.context:[])),callbacks:L(),dirty:o,skip_bound:!1,root:n.target||r.$$.root};u&&u(s.root);let a=!1;if(s.ctx=e?e(t,n.props||{},(f,b,...k)=>{const O=k.length?k[0]:b;return s.ctx&&c(s.ctx[f],s.ctx[f]=O)&&(!s.skip_bound&&s.bound[f]&&s.bound[f](O),a&&lt(t,f)),b}):[],s.update(),a=!0,y(s.before_update),s.fragment=i?i(s.ctx):!1,n.target){if(n.hydrate){R();const f=nt(n.target);s.fragment&&s.fragment.l(f),f.forEach(Z)}else s.fragment&&s.fragment.c();n.intro&&ot(t.$$.fragment),ut(t,n.target,n.anchor,n.customElement),U(),F()}p(r)}class Ft{$destroy(){st(this,1),this.$destroy=h}$on(n,e){const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const c=i.indexOf(e);c!==-1&&i.splice(c,1)}}$set(n){this.$$set&&!K(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}const _=[];function at(t,n=h){let e;const i=new Set;function c(o){if(G(t,o)&&(t=o,e)){const r=!_.length;for(const s of i)s[1](),_.push(s,t);if(r){for(let s=0;s<_.length;s+=2)_[s][0](_[s+1]);_.length=0}}}function l(o){c(o(t))}function u(o,r=h){const s=[o,r];return i.add(s),i.size===1&&(e=n(c)||h),o(t),()=>{i.delete(s),i.size===0&&(e(),e=null)}}return{set:c,update:l,subscribe:u}}var A={};function Ht(t,n){const e=typeof localStorage!="undefined";function i(c,l){!e||localStorage.setItem(c,JSON.stringify(l))}if(!A[t]){const c=at(n,o=>{const r=e?localStorage.getItem(t):null;if(r&&o(JSON.parse(r)),e){const s=a=>{a.key===t&&o(a.newValue?JSON.parse(a.newValue):null)};return window.addEventListener("storage",s),()=>window.removeEventListener("storage",s)}}),{subscribe:l,set:u}=c;A[t]={set(o){i(t,o),u(o)},update(o){const r=o(Q(c));i(t,r),u(r)},subscribe:l}}return A[t]}export{It as A,st as B,H as C,at as D,Lt as E,Y as F,h as G,Ot as H,dt as I,ft as J,Ht as K,_t as L,vt as M,mt as N,pt as O,ht as P,yt as Q,gt as R,Ft as S,wt as T,y as U,nt as a,St as b,Et as c,Z as d,tt as e,At as f,bt as g,rt as h,Dt as i,jt as j,xt as k,$t as l,Nt as m,Mt as n,zt as o,Tt as p,ot as q,kt as r,G as s,C as t,Ct as u,qt as v,Jt as w,Pt as x,ut as y,Bt as z};
