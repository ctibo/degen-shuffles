import{S as s,i as a,s as t,e,t as r,a as n,f as c,g as l,h as o,j as f,d as i,k as u,l as d,n as h,r as p,u as $,v as m,p as g,w as v,o as E,x,y as A,z as y,A as I,C as N,c as b,b as S,m as w,D as k,q,E as P,B as D}from"./client.11ed2a3b.js";import{S as L}from"./index.665515ba.js";function j(s){let a,t=s[0]&&function(s){let a,t,$,g,v,E,x,A,y,I,N,b,S,w,k,q,P=s[0].assetId+"",D=m(s[0].creatorAddress)+"";return{c(){a=e("ul"),t=e("li"),$=e("span"),g=r("Asset ID:"),v=n(),E=e("span"),x=e("a"),A=r(P),y=n(),I=e("li"),N=e("span"),b=r("Creator:"),S=n(),w=e("span"),k=e("a"),q=r(D),this.h()},l(s){a=c(s,"UL",{class:!0});var e=l(a);t=c(e,"LI",{class:!0});var r=l(t);$=c(r,"SPAN",{class:!0});var n=l($);g=o(n,"Asset ID:"),n.forEach(f),v=i(r),E=c(r,"SPAN",{class:!0});var u=l(E);x=c(u,"A",{class:!0,href:!0,target:!0});var d=l(x);A=o(d,P),d.forEach(f),u.forEach(f),r.forEach(f),y=i(e),I=c(e,"LI",{class:!0});var h=l(I);N=c(h,"SPAN",{class:!0});var p=l(N);b=o(p,"Creator:"),p.forEach(f),S=i(h),w=c(h,"SPAN",{class:!0});var m=l(w);k=c(m,"A",{class:!0,href:!0,target:!0});var L=l(k);q=o(L,D),L.forEach(f),m.forEach(f),h.forEach(f),e.forEach(f),this.h()},h(){u($,"class","label"),u(x,"class","text-link"),u(x,"href","https://algoexplorer.io/asset/"+s[0].assetId),u(x,"target","_blank"),u(E,"class","value"),u(t,"class","asaId"),u(N,"class","label"),u(k,"class","text-link"),u(k,"href","https://algoexplorer.io/address/"+s[0].creatorAddress),u(k,"target","_blank"),u(w,"class","value"),u(I,"class","creator"),u(a,"class","meta svelte-15y2dzg")},m(s,e){d(s,a,e),h(a,t),h(t,$),h($,g),h(t,v),h(t,E),h(E,x),h(x,A),h(a,y),h(a,I),h(I,N),h(N,b),h(I,S),h(I,w),h(w,k),h(k,q)},p:p,d(s){s&&f(a)}}}(s);return{c(){t&&t.c(),a=$()},l(s){t&&t.l(s),a=$()},m(s,e){t&&t.m(s,e),d(s,a,e)},p(s,[a]){s[0]&&t.p(s,a)},i:p,o:p,d(s){t&&t.d(s),s&&f(a)}}}function C(s,a,t){let{shuffle:e={}}=a;const r=e.configs;return s.$$set=s=>{"shuffle"in s&&t(1,e=s.shuffle)},[r,e]}class z extends s{constructor(s){super(),a(this,s,C,j,t,{shuffle:1})}}function _(s){let a,e,r=s[3],n=V(s);return{c(){n.c(),a=$()},l(s){n.l(s),a=$()},m(s,t){n.m(s,t),d(s,a,t),e=!0},p(s,e){8&e&&t(r,r=s[3])?(I(),g(n,1,1,p),v(),n=V(s),n.c(),E(n),n.m(a.parentNode,a)):n.p(s,e)},i(s){e||(E(n),e=!0)},o(s){g(n),e=!1},d(s){s&&f(a),n.d(s)}}}function B(s){let a,t;return a=new P({props:{status:"Shuffle not found"}}),{c(){b(a.$$.fragment)},l(s){S(a.$$.fragment,s)},m(s,e){w(a,s,e),t=!0},p:p,i(s){t||(E(a.$$.fragment,s),t=!0)},o(s){g(a.$$.fragment,s),t=!1},d(s){q(a,s)}}}function H(s){let a,t,n=s[0].configs.assetName+"";return{c(){a=e("h1"),t=r(n),this.h()},l(s){a=c(s,"H1",{class:!0});var e=l(a);t=o(e,n),e.forEach(f),this.h()},h(){u(a,"class","page-title")},m(s,e){d(s,a,e),h(a,t)},p(s,a){1&a&&n!==(n=s[0].configs.assetName+"")&&k(t,n)},d(s){s&&f(a)}}}function U(s){let a,t,n=s[0].configs.description+"";return{c(){a=e("p"),t=r(n)},l(s){a=c(s,"P",{});var e=l(a);t=o(e,n),e.forEach(f)},m(s,e){d(s,a,e),h(a,t)},p(s,a){1&a&&n!==(n=s[0].configs.description+"")&&k(t,n)},d(s){s&&f(a)}}}function V(s){let a,t,r,o,p,$;a=new D({props:{$$slots:{default:[H]},$$scope:{ctx:s}}}),o=new z({props:{shuffle:s[0]}});let m=s[0].configs.description&&U(s);return{c(){b(a.$$.fragment),t=n(),r=e("div"),b(o.$$.fragment),p=n(),m&&m.c(),this.h()},l(s){S(a.$$.fragment,s),t=i(s),r=c(s,"DIV",{class:!0});var e=l(r);S(o.$$.fragment,e),p=i(e),m&&m.l(e),e.forEach(f),this.h()},h(){u(r,"class","container")},m(s,e){w(a,s,e),d(s,t,e),d(s,r,e),w(o,r,null),h(r,p),m&&m.m(r,null),$=!0},p(s,t){const e={};257&t&&(e.$$scope={dirty:t,ctx:s}),a.$set(e);const n={};1&t&&(n.shuffle=s[0]),o.$set(n),s[0].configs.description?m?m.p(s,t):(m=U(s),m.c(),m.m(r,null)):m&&(m.d(1),m=null)},i(s){$||(E(a.$$.fragment,s),E(o.$$.fragment,s),$=!0)},o(s){g(a.$$.fragment,s),g(o.$$.fragment,s),$=!1},d(s){q(a,s),s&&f(t),s&&f(r),q(o),m&&m.d()}}}function F(s){let a,t,e,r;const n=[B,_],c=[];function l(s,a){return s[1]?0:s[2]?1:-1}return~(a=l(s))&&(t=c[a]=n[a](s)),{c(){t&&t.c(),e=$()},l(s){t&&t.l(s),e=$()},m(s,t){~a&&c[a].m(s,t),d(s,e,t),r=!0},p(s,[r]){let o=a;a=l(s),a===o?~a&&c[a].p(s,r):(t&&(I(),g(c[o],1,1,(()=>{c[o]=null})),v()),~a?(t=c[a],t?t.p(s,r):(t=c[a]=n[a](s),t.c()),E(t,1),t.m(e.parentNode,e)):t=null)},i(s){r||(E(t),r=!0)},o(s){g(t),r=!1},d(s){~a&&c[a].d(s),s&&f(e)}}}function G(s,a,t){let e,r;const{page:n}=x();A(s,n,(s=>t(5,e=s)));let c,l=!1,o=!1,f=!1;async function i(){if(!f)return;if(!e.query||!e.query.id)return void t(1,l=!0);N.set("Loading shuffle data..."),t(0,r=new L);await r.fetch(e.query.id)||t(1,l=!0),console.log(r),t(3,c=r.configs.assetId),t(2,o=!0),N.set(!1)}return y((()=>{f=!0,i()})),s.$$.update=()=>{32&s.$$.dirty&&(e.query,i())},[r,l,o,c,n,e]}export default class extends s{constructor(s){super(),a(this,s,G,F,t,{})}}
