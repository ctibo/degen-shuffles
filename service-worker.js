!function(){"use strict";const e=1639751797300,t=`cache${e}`,n=["/client/client.999938db.js","/client/inject_styles.803b7e80.js","/client/index.2a169983.js","/client/shuffle.31303116.js","/client/ShuffleConfigs.8072cce1.js","/client/create.c1d578d0.js"].concat(["/service-worker-index.html","/browserconfig.xml","/favicon.ico","/icons/android-chrome-192x192.png","/icons/android-chrome-512x512.png","/icons/apple-touch-icon.png","/icons/favicon-16x16.png","/icons/favicon-32x32.png","/images/degen-shuffles-white.svg","/images/myalgo-logo.png","/images/walletconnect-logo.svg","/manifest.json","/mstile-150x150.png","/safari-pinned-tab.svg","/scripts/algosdk.min.js","/scripts/myalgo.min.js"]),s=new Set(n);self.addEventListener("install",(e=>{e.waitUntil(caches.open(t).then((e=>e.addAll(n))).then((()=>{self.skipWaiting()})))})),self.addEventListener("activate",(e=>{e.waitUntil(caches.keys().then((async e=>{for(const n of e)n!==t&&await caches.delete(n);self.clients.claim()})))})),self.addEventListener("fetch",(t=>{if("GET"!==t.request.method||t.request.headers.has("range"))return;const n=new URL(t.request.url),c=n.protocol.startsWith("http"),i=n.hostname===self.location.hostname&&n.port!==self.location.port,a=n.host===self.location.host&&s.has(n.pathname),o="only-if-cached"===t.request.cache&&!a;!c||i||o||t.respondWith((async()=>a&&await caches.match(t.request)||async function(t){const n=await caches.open(`offline${e}`);try{const e=await fetch(t);return n.put(t,e.clone()),e}catch(e){const s=await n.match(t);if(s)return s;throw e}}(t.request))())}))}();
