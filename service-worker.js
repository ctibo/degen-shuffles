!function(){"use strict";const e=1639375446784,t=`cache${e}`,n=["/client/client.a58c3688.js","/client/inject_styles.803b7e80.js","/client/index.2b0fb2bc.js","/client/shuffle.ffa4e678.js","/client/index.fe16b2a5.js","/client/create.21c4bdad.js"].concat(["/service-worker-index.html","/browserconfig.xml","/favicon.ico","/icons/android-chrome-192x192.png","/icons/android-chrome-512x512.png","/icons/apple-touch-icon.png","/icons/favicon-16x16.png","/icons/favicon-32x32.png","/images/degen-shuffles-white.svg","/images/myalgo-logo.png","/images/walletconnect-logo.svg","/manifest.json","/mstile-150x150.png","/safari-pinned-tab.svg","/scripts/algosdk.min.js","/scripts/myalgo.min.js"]),s=new Set(n);self.addEventListener("install",(e=>{e.waitUntil(caches.open(t).then((e=>e.addAll(n))).then((()=>{self.skipWaiting()})))})),self.addEventListener("activate",(e=>{e.waitUntil(caches.keys().then((async e=>{for(const n of e)n!==t&&await caches.delete(n);self.clients.claim()})))})),self.addEventListener("fetch",(t=>{if("GET"!==t.request.method||t.request.headers.has("range"))return;const n=new URL(t.request.url),c=n.protocol.startsWith("http"),a=n.hostname===self.location.hostname&&n.port!==self.location.port,i=n.host===self.location.host&&s.has(n.pathname),o="only-if-cached"===t.request.cache&&!i;!c||a||o||t.respondWith((async()=>i&&await caches.match(t.request)||async function(t){const n=await caches.open(`offline${e}`);try{const e=await fetch(t);return n.put(t,e.clone()),e}catch(e){const s=await n.match(t);if(s)return s;throw e}}(t.request))())}))}();
