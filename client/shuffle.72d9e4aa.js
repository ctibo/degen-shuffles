import{S as s,i as t,s as a,r as e,l as n,p as r,u as c,o,j as i,v as f,w as l,x as u,y as p,z as d,B as m,e as $,t as h,f as g,g as v,h as x,n as w,A as y,c as E,a as j,b as N,d as S,k as q,m as b,q as k,E as z}from"./client.5fff2d42.js";import{S as A}from"./index.ae8925e7.js";function B(s){let t,a,e,c;t=new m({props:{$$slots:{default:[H]},$$scope:{ctx:s}}});let f=s[2].configs.description&&function(s){let t,a,e=s[2].configs.description+"";return{c(){t=$("p"),a=h(e)},l(s){t=g(s,"P",{});var n=v(t);a=x(n,e),n.forEach(i)},m(s,e){n(s,t,e),w(t,a)},p:y,d(s){s&&i(t)}}}(s);return{c(){E(t.$$.fragment),a=j(),e=$("div"),f&&f.c(),this.h()},l(s){N(t.$$.fragment,s),a=S(s),e=g(s,"DIV",{class:!0});var n=v(e);f&&f.l(n),n.forEach(i),this.h()},h(){q(e,"class","container")},m(s,r){b(t,s,r),n(s,a,r),n(s,e,r),f&&f.m(e,null),c=!0},p(s,a){const e={};64&a&&(e.$$scope={dirty:a,ctx:s}),t.$set(e),s[2].configs.description&&f.p(s,a)},i(s){c||(o(t.$$.fragment,s),c=!0)},o(s){r(t.$$.fragment,s),c=!1},d(s){k(t,s),s&&i(a),s&&i(e),f&&f.d()}}}function D(s){let t,a;return t=new z({props:{status:"Shuffle not found"}}),{c(){E(t.$$.fragment)},l(s){N(t.$$.fragment,s)},m(s,e){b(t,s,e),a=!0},p:y,i(s){a||(o(t.$$.fragment,s),a=!0)},o(s){r(t.$$.fragment,s),a=!1},d(s){k(t,s)}}}function H(s){let t,a,e=(s[2].configs.displayName||s[2].configs.assetName)+"";return{c(){t=$("h1"),a=h(e),this.h()},l(s){t=g(s,"H1",{class:!0});var n=v(t);a=x(n,e),n.forEach(i),this.h()},h(){q(t,"class","page-title")},m(s,e){n(s,t,e),w(t,a)},p:y,d(s){s&&i(t)}}}function I(s){let t,a,f,l;const u=[D,B],d=[];function m(s,t){return s[0]?0:s[1]?1:-1}return~(t=m(s))&&(a=d[t]=u[t](s)),{c(){a&&a.c(),f=e()},l(s){a&&a.l(s),f=e()},m(s,a){~t&&d[t].m(s,a),n(s,f,a),l=!0},p(s,[e]){let n=t;t=m(s),t===n?~t&&d[t].p(s,e):(a&&(p(),r(d[n],1,1,(()=>{d[n]=null})),c()),~t?(a=d[t],a?a.p(s,e):(a=d[t]=u[t](s),a.c()),o(a,1),a.m(f.parentNode,f)):a=null)},i(s){l||(o(a),l=!0)},o(s){r(a),l=!1},d(s){~t&&d[t].d(s),s&&i(f)}}}function L(s,t,a){let e;const n=new A,{page:r}=f();l(s,r,(s=>a(4,e=s)));const{query:c}=e;let o=!1,i=!1;return u((async()=>{if(!c||!c.id)return void a(0,o=!0);d.set("Loading shuffle data...");await n.fetch(c.id)||a(0,o=!0),a(1,i=!0),d.set(!1)})),[o,i,n,r]}export default class extends s{constructor(s){super(),t(this,s,L,I,a,{})}}
