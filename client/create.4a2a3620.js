import{S as s,i as a,s as e,B as t,c as r,a as n,w as l,b as o,d as c,m as f,l as i,p as u,C as h,o as d,q as $,j as m,x as p,e as g,t as w,f as v,g as y,h as A,k as S,n as b,G as j,y as x,v as E,A as C,I}from"./client.571ac0c8.js";import{S as N}from"./ShuffleConfigs.1a21092b.js";function B(s){let a,e;return{c(){a=g("h1"),e=w("New Shuffle"),this.h()},l(s){a=v(s,"H1",{class:!0});var t=y(a);e=A(t,"New Shuffle"),t.forEach(m),this.h()},h(){S(a,"class","page-title")},m(s,t){i(s,a,t),b(a,e)},d(s){s&&m(a)}}}function D(s){let a,e,t;return{c(){a=g("div"),e=g("p"),t=w("You must connect your wallet to create a shuffle."),this.h()},l(s){a=v(s,"DIV",{class:!0});var r=y(a);e=v(r,"P",{});var n=y(e);t=A(n,"You must connect your wallet to create a shuffle."),n.forEach(m),r.forEach(m),this.h()},h(){S(a,"class","container svelte-1vjcpaf")},m(s,r){i(s,a,r),b(a,e),b(e,t)},p:E,i:E,o:E,d(s){s&&m(a)}}}function P(s){let a,e,t,l,h,p,j,x,E,B,D=C(s[0].currentAddress)+"";return E=new N({props:{mode:"create"}}),{c(){a=g("div"),e=g("p"),t=w("Creating a shuffle will add an ASA to your wallet ("),l=w(D),h=w("). "),p=g("br"),j=w(" \n      This asset will be used to store the shuffle configs and winners history."),x=n(),r(E.$$.fragment),this.h()},l(s){a=v(s,"DIV",{class:!0});var r=y(a);e=v(r,"P",{});var n=y(e);t=A(n,"Creating a shuffle will add an ASA to your wallet ("),l=A(n,D),h=A(n,"). "),p=v(n,"BR",{}),j=A(n," \n      This asset will be used to store the shuffle configs and winners history."),n.forEach(m),x=c(r),o(E.$$.fragment,r),r.forEach(m),this.h()},h(){S(a,"class","container svelte-1vjcpaf")},m(s,r){i(s,a,r),b(a,e),b(e,t),b(e,l),b(e,h),b(e,p),b(e,j),b(a,x),f(E,a,null),B=!0},p(s,a){(!B||1&a)&&D!==(D=C(s[0].currentAddress)+"")&&I(l,D)},i(s){B||(d(E.$$.fragment,s),B=!0)},o(s){u(E.$$.fragment,s),B=!1},d(s){s&&m(a),$(E)}}}function T(s){let a,e,p,g,w,v;a=new t({props:{$$slots:{default:[B]},$$scope:{ctx:s}}});const y=[P,D],A=[];function S(s,a){return s[0].currentAddress?0:1}return p=S(s),g=A[p]=y[p](s),{c(){r(a.$$.fragment),e=n(),g.c(),w=l()},l(s){o(a.$$.fragment,s),e=c(s),g.l(s),w=l()},m(s,t){f(a,s,t),i(s,e,t),A[p].m(s,t),i(s,w,t),v=!0},p(s,[e]){const t={};2&e&&(t.$$scope={dirty:e,ctx:s}),a.$set(t);let r=p;p=S(s),p===r?A[p].p(s,e):(j(),u(A[r],1,1,(()=>{A[r]=null})),h(),g=A[p],g?g.p(s,e):(g=A[p]=y[p](s),g.c()),d(g,1),g.m(w.parentNode,w))},i(s){v||(d(a.$$.fragment,s),d(g),v=!0)},o(s){u(a.$$.fragment,s),u(g),v=!1},d(s){$(a,s),s&&m(e),A[p].d(s),s&&m(w)}}}function V(s,a,e){let t;return p(s,x,(s=>e(0,t=s))),[t]}export default class extends s{constructor(s){super(),a(this,s,V,T,e,{})}}
