import{S as V,i as $,s as G,e as g,t as P,k as j,c as b,a as w,h as A,d as h,m as M,b as E,g as O,F as f,T as S,G as I,U as z,H as K,I as Q,Q as L,j as R,L as J,w as W,x as X,y as Y,N as Z,O as x,P as ee,q,o as D,B as te}from"./vendor-5dfb4020.js";import{c as N}from"./singletons-d1fb5791.js";N.disable_scroll_handling;const se=N.goto;N.invalidate;N.prefetch;N.prefetch_routes;N.before_navigate;N.after_navigate;function ae(n){let e,s,t,r,v,_,i,m,o,c,a,y,d,l;return{c(){e=g("div"),s=g("button"),t=g("span"),r=P("arrow_back"),v=j(),_=g("button"),i=g("span"),m=P("home"),o=j(),c=g("button"),a=g("span"),y=P("arrow_forward"),this.h()},l(u){e=b(u,"DIV",{class:!0});var p=w(e);s=b(p,"BUTTON",{class:!0});var k=w(s);t=b(k,"SPAN",{class:!0});var T=w(t);r=A(T,"arrow_back"),T.forEach(h),k.forEach(h),v=M(p),_=b(p,"BUTTON",{class:!0});var B=w(_);i=b(B,"SPAN",{class:!0});var C=w(i);m=A(C,"home"),C.forEach(h),B.forEach(h),o=M(p),c=b(p,"BUTTON",{class:!0});var H=w(c);a=b(H,"SPAN",{class:!0});var U=w(a);y=A(U,"arrow_forward"),U.forEach(h),H.forEach(h),p.forEach(h),this.h()},h(){E(t,"class","material-icons"),E(s,"class","previous-page svelte-1xvjera"),s.disabled=n[2],E(i,"class","material-icons"),E(_,"class","svelte-1xvjera"),E(a,"class","material-icons"),c.disabled=n[3],E(c,"class","svelte-1xvjera"),E(e,"class","buttons svelte-1xvjera")},m(u,p){O(u,e,p),f(e,s),f(s,t),f(t,r),f(e,v),f(e,_),f(_,i),f(i,m),f(e,o),f(e,c),f(c,a),f(a,y),d||(l=[S(window,"keydown",n[1]),S(s,"click",n[5]),S(_,"click",n[6]),S(c,"click",n[4])],d=!0)},p:I,i:I,o:I,d(u){u&&h(e),d=!1,z(l)}}}function ne(n,e,s){let t;const r=K("page");Q(n,r,a=>s(7,t=a));function v(a){a.key=="ArrowLeft"&&!_&&o(),a.key=="ArrowRight"&&!i&&m(),a.key=="Escape"&&c()}const _=t.pageNum<=0,i=t.pageNum>=t.maxCurrentPage,m=()=>L(r,t.pageNum+=1,t),o=()=>L(r,t.pageNum-=1,t),c=()=>se("/ur_helper/");return[r,v,_,i,m,o,c]}class le extends V{constructor(e){super();$(this,e,ne,ae,G,{})}}function F(n){let e,s;return{c(){e=g("h2"),s=P(n[1]),this.h()},l(t){e=b(t,"H2",{class:!0});var r=w(e);s=A(r,n[1]),r.forEach(h),this.h()},h(){E(e,"class","svelte-sdj6dr")},m(t,r){O(t,e,r),f(e,s)},p(t,r){r&2&&R(s,t[1])},d(t){t&&h(e)}}}function oe(n){let e,s,t,r,v,_,i,m,o,c,a=n[1]&&F(n);const y=n[4].default,d=J(y,n,n[3],null);return o=new le({}),{c(){e=g("main"),s=g("div"),t=g("h1"),r=P(n[0]),v=j(),a&&a.c(),_=j(),i=g("section"),d&&d.c(),m=j(),W(o.$$.fragment),this.h()},l(l){e=b(l,"MAIN",{class:!0});var u=w(e);s=b(u,"DIV",{class:!0});var p=w(s);t=b(p,"H1",{class:!0});var k=w(t);r=A(k,n[0]),k.forEach(h),v=M(p),a&&a.l(p),p.forEach(h),_=M(u),i=b(u,"SECTION",{});var T=w(i);d&&d.l(T),T.forEach(h),m=M(u),X(o.$$.fragment,u),u.forEach(h),this.h()},h(){E(t,"class","svelte-sdj6dr"),E(s,"class","title"),E(e,"class","svelte-sdj6dr")},m(l,u){O(l,e,u),f(e,s),f(s,t),f(t,r),f(s,v),a&&a.m(s,null),f(e,_),f(e,i),d&&d.m(i,null),f(e,m),Y(o,e,null),c=!0},p(l,[u]){(!c||u&1)&&R(r,l[0]),l[1]?a?a.p(l,u):(a=F(l),a.c(),a.m(s,null)):a&&(a.d(1),a=null),d&&d.p&&(!c||u&8)&&Z(d,y,l,l[3],c?ee(y,l[3],u,null):x(l[3]),null)},i(l){c||(q(d,l),q(o.$$.fragment,l),c=!0)},o(l){D(d,l),D(o.$$.fragment,l),c=!1},d(l){l&&h(e),a&&a.d(),d&&d.d(l),te(o)}}}function re(n,e,s){let t,{$$slots:r={},$$scope:v}=e,{title:_}=e,{subTitle:i}=e;const m=K("page");return Q(n,m,o=>s(5,t=o)),L(m,t.currentPage=i,t),n.$$set=o=>{"title"in o&&s(0,_=o.title),"subTitle"in o&&s(1,i=o.subTitle),"$$scope"in o&&s(3,v=o.$$scope)},[_,i,m,v,r]}class ue extends V{constructor(e){super();$(this,e,re,oe,G,{title:0,subTitle:1})}}export{ue as M};