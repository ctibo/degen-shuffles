import{S as s,i as a,s as t,e,t as r,f as n,g as c,h as l,j as o,k as f,l as i,n as u,r as h,u as d,v as p,w as $,a as m,d as g,x as v,p as E,y as A,o as x,z as I,A as N,C as w,D as y,c as b,b as S,m as k,E as D,q,F as P,B as L}from"./client.5660c00f.js";import{S as j}from"./index.02a113de.js";function C(s){let a,t=s[0]&&function(s){let a,t,h;return{c(){a=e("div"),t=e("button"),h=r("Edit"),this.h()},l(s){a=n(s,"DIV",{class:!0});var e=c(a);t=n(e,"BUTTON",{class:!0});var r=c(t);h=l(r,"Edit"),r.forEach(o),e.forEach(o),this.h()},h(){f(t,"class","btn"),f(a,"class","container")},m(s,e){i(s,a,e),u(a,t),u(t,h)},d(s){s&&o(a)}}}();return{c(){t&&t.c(),a=h()},l(s){t&&t.l(s),a=h()},m(s,e){t&&t.m(s,e),i(s,a,e)},p:d,i:d,o:d,d(s){t&&t.d(s),s&&o(a)}}}function V(s,a,t){let e;p(s,$,(s=>t(2,e=s)));let{shuffle:r={}}=a;const n=e.currentAddress===r.configs.creatorAddress;return s.$$set=s=>{"shuffle"in s&&t(1,r=s.shuffle)},[n,r]}class B extends s{constructor(s){super(),a(this,s,V,C,t,{shuffle:1})}}function T(s){let a,t=s[0]&&function(s){let a,t,h,p,$,E,A,x,I,N,w,y,b,S,k,D,q,P=s[0].assetId+"",L=v(s[0].creatorAddress)+"";return{c(){a=e("div"),t=e("ul"),h=e("li"),p=e("span"),$=r("Asset ID:"),E=m(),A=e("span"),x=e("a"),I=r(P),N=m(),w=e("li"),y=e("span"),b=r("Creator:"),S=m(),k=e("span"),D=e("a"),q=r(L),this.h()},l(s){a=n(s,"DIV",{class:!0});var e=c(a);t=n(e,"UL",{class:!0});var r=c(t);h=n(r,"LI",{class:!0});var f=c(h);p=n(f,"SPAN",{class:!0});var i=c(p);$=l(i,"Asset ID:"),i.forEach(o),E=g(f),A=n(f,"SPAN",{class:!0});var u=c(A);x=n(u,"A",{class:!0,href:!0,target:!0});var d=c(x);I=l(d,P),d.forEach(o),u.forEach(o),f.forEach(o),N=g(r),w=n(r,"LI",{class:!0});var m=c(w);y=n(m,"SPAN",{class:!0});var v=c(y);b=l(v,"Creator:"),v.forEach(o),S=g(m),k=n(m,"SPAN",{class:!0});var j=c(k);D=n(j,"A",{class:!0,href:!0,target:!0});var C=c(D);q=l(C,L),C.forEach(o),j.forEach(o),m.forEach(o),r.forEach(o),e.forEach(o),this.h()},h(){f(p,"class","label"),f(x,"class","text-link"),f(x,"href","https://algoexplorer.io/asset/"+s[0].assetId),f(x,"target","_blank"),f(A,"class","value"),f(h,"class","asaId"),f(y,"class","label"),f(D,"class","text-link"),f(D,"href","https://algoexplorer.io/address/"+s[0].creatorAddress),f(D,"target","_blank"),f(k,"class","value"),f(w,"class","creator"),f(t,"class","meta svelte-ewkf1s"),f(a,"class","container")},m(s,e){i(s,a,e),u(a,t),u(t,h),u(h,p),u(p,$),u(h,E),u(h,A),u(A,x),u(x,I),u(t,N),u(t,w),u(w,y),u(y,b),u(w,S),u(w,k),u(k,D),u(D,q)},p:d,d(s){s&&o(a)}}}(s);return{c(){t&&t.c(),a=h()},l(s){t&&t.l(s),a=h()},m(s,e){t&&t.m(s,e),i(s,a,e)},p(s,[a]){s[0]&&t.p(s,a)},i:d,o:d,d(s){t&&t.d(s),s&&o(a)}}}function U(s,a,t){let{shuffle:e={}}=a;const r=e.configs;return s.$$set=s=>{"shuffle"in s&&t(1,e=s.shuffle)},[r,e]}class _ extends s{constructor(s){super(),a(this,s,U,T,t,{shuffle:1})}}function z(s){let a,e,r=s[3],n=G(s);return{c(){n.c(),a=h()},l(s){n.l(s),a=h()},m(s,t){n.m(s,t),i(s,a,t),e=!0},p(s,e){8&e&&t(r,r=s[3])?(w(),E(n,1,1,d),A(),n=G(s),n.c(),x(n),n.m(a.parentNode,a)):n.p(s,e)},i(s){e||(x(n),e=!0)},o(s){E(n),e=!1},d(s){s&&o(a),n.d(s)}}}function F(s){let a,t;return a=new P({props:{status:"Shuffle not found"}}),{c(){b(a.$$.fragment)},l(s){S(a.$$.fragment,s)},m(s,e){k(a,s,e),t=!0},p:d,i(s){t||(x(a.$$.fragment,s),t=!0)},o(s){E(a.$$.fragment,s),t=!1},d(s){q(a,s)}}}function H(s){let a,t,h=s[0].configs.assetName+"";return{c(){a=e("h1"),t=r(h),this.h()},l(s){a=n(s,"H1",{class:!0});var e=c(a);t=l(e,h),e.forEach(o),this.h()},h(){f(a,"class","page-title")},m(s,e){i(s,a,e),u(a,t)},p(s,a){1&a&&h!==(h=s[0].configs.assetName+"")&&D(t,h)},d(s){s&&o(a)}}}function O(s){let a,t,f=s[0].configs.description+"";return{c(){a=e("p"),t=r(f)},l(s){a=n(s,"P",{});var e=c(a);t=l(e,f),e.forEach(o)},m(s,e){i(s,a,e),u(a,t)},p(s,a){1&a&&f!==(f=s[0].configs.description+"")&&D(t,f)},d(s){s&&o(a)}}}function G(s){let a,t,r,l,u,h,d,p;a=new B({props:{shuffle:s[0]}}),r=new L({props:{$$slots:{default:[H]},$$scope:{ctx:s}}}),u=new _({props:{shuffle:s[0]}});let $=s[0].configs.description&&O(s);return{c(){b(a.$$.fragment),t=m(),b(r.$$.fragment),l=m(),b(u.$$.fragment),h=m(),d=e("div"),$&&$.c(),this.h()},l(s){S(a.$$.fragment,s),t=g(s),S(r.$$.fragment,s),l=g(s),S(u.$$.fragment,s),h=g(s),d=n(s,"DIV",{class:!0});var e=c(d);$&&$.l(e),e.forEach(o),this.h()},h(){f(d,"class","container")},m(s,e){k(a,s,e),i(s,t,e),k(r,s,e),i(s,l,e),k(u,s,e),i(s,h,e),i(s,d,e),$&&$.m(d,null),p=!0},p(s,t){const e={};1&t&&(e.shuffle=s[0]),a.$set(e);const n={};257&t&&(n.$$scope={dirty:t,ctx:s}),r.$set(n);const c={};1&t&&(c.shuffle=s[0]),u.$set(c),s[0].configs.description?$?$.p(s,t):($=O(s),$.c(),$.m(d,null)):$&&($.d(1),$=null)},i(s){p||(x(a.$$.fragment,s),x(r.$$.fragment,s),x(u.$$.fragment,s),p=!0)},o(s){E(a.$$.fragment,s),E(r.$$.fragment,s),E(u.$$.fragment,s),p=!1},d(s){q(a,s),s&&o(t),q(r,s),s&&o(l),q(u,s),s&&o(h),s&&o(d),$&&$.d()}}}function J(s){let a,t,e,r;const n=[F,z],c=[];function l(s,a){return s[1]?0:s[2]?1:-1}return~(a=l(s))&&(t=c[a]=n[a](s)),{c(){t&&t.c(),e=h()},l(s){t&&t.l(s),e=h()},m(s,t){~a&&c[a].m(s,t),i(s,e,t),r=!0},p(s,[r]){let o=a;a=l(s),a===o?~a&&c[a].p(s,r):(t&&(w(),E(c[o],1,1,(()=>{c[o]=null})),A()),~a?(t=c[a],t?t.p(s,r):(t=c[a]=n[a](s),t.c()),x(t,1),t.m(e.parentNode,e)):t=null)},i(s){r||(x(t),r=!0)},o(s){E(t),r=!1},d(s){~a&&c[a].d(s),s&&o(e)}}}function K(s,a,t){let e,r;const{page:n}=I();p(s,n,(s=>t(5,e=s)));let c,l=!1,o=!1,f=!1;async function i(){if(!f)return;if(!e.query||!e.query.id)return void t(1,l=!0);y.set("Loading shuffle data..."),t(0,r=new j);await r.load(e.query.id)||t(1,l=!0),console.log(r),t(3,c=r.configs.assetId),t(2,o=!0),y.set(!1)}return N((()=>{f=!0,i()})),s.$$.update=()=>{32&s.$$.dirty&&(e.query,i())},[r,l,o,c,n,e]}export default class extends s{constructor(s){super(),a(this,s,K,J,t,{})}}
