(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{252:function(e,t,r){"use strict";r.r(t);r(11),r(231),r(13);var n=r(0),a=r.n(n),o=r(2),i=r(232),c=r.n(i),s=r(5),l=(r(149),r(34),r(50)),p=r(240);function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){m(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const b={song:e=>{var t;const r=e.artists.length?[...e.artists].reverse().reduce((e,t)=>`${t.name} ${e}`,""):"";return{type:"song",noImg:!0,noIndex:!0,title:""+e.name,artistId:null===(t=e.artists[0])||void 0===t?void 0:t.id,albumId:e.album.id,artistName:r,albumName:e.album.name,desc:`${r} · ${e.album.name}`,id:e.id}},mv:e=>d(d({},p.a.mv.selector(e)),{},{type:"mv"}),playlist:e=>d(d({},p.a.playlist.selector(e)),{},{type:"playlist"}),album:e=>d(d({},p.a.album.selector(e)),{},{type:"album"}),artist:e=>d(d({},p.a.artist.selector(e)),{},{type:"artist"})};class f extends l.a{constructor(...e){var t;super(...e),t=this,m(this,"requestSearch",(async function(e,r,n){var a;const o=await t.fetcher.get(e),i=null==o||null===(a=o.data)||void 0===a?void 0:a.result[r+"s"];if(i){var c;const e=i.length+n*i.length,t=null==o||null===(c=o.data)||void 0===c?void 0:c.result[r+"Count"];let a=e<t;return 0===n&&e<t&&(a=!0),[[...i].reverse().map(e=>d({},b[r](e))).reverse(),a,t]}return[null]})),m(this,"getInitialData",(async function(){}))}}var y=new f,g=r(243),O=r(237),h=r(239),v=r(26);function w(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function j(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?w(Object(r),!0).forEach((function(t){P(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function P(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const k=o.d.div.withConfig({displayName:"SearchMore__ListWrapper",componentId:"sc-1q2evi9-0"})(["margin-top:78px;width:100%;"]),x=o.d.div.withConfig({displayName:"SearchMore__SearchMorePage",componentId:"sc-1q2evi9-1"})(["min-height:100%;padding:30px 15px 40px 15px;overflow:hidden;"]),$=o.d.div.withConfig({displayName:"SearchMore__PageBackWrapper",componentId:"sc-1q2evi9-2"})(["position:fixed;padding:25px 15px 15px 15px;top:0;left:0;width:100%;z-index:501;background-color:",";"],e=>e.theme.mg),E={playlist:(e,t)=>`/api/search?keywords=${e}&offset=${t}&type=1000&limit=30`,song:(e,t)=>`/api/search?keywords=${e}&offset=${t}&type=1&limit=30`,artist:(e,t)=>`/api/search?keywords=${e}&offset=${t}&type=100&limit=30`,mv:(e,t)=>`/api/search?keywords=${e}&offset=${t}&type=1004&limit=30`,album:(e,t)=>`/api/search?keywords=${e}&offset=${t}&type=10&limit=30`},I=()=>{const[e,t]=Object(n.useState)(0),r=Object(n.useRef)(),o=Object(s.h)().search,{type:i,keyword:l}=c.a.parse(o),u=Object(n.useCallback)(()=>r.current,[]),d=Object(n.useCallback)(e=>[E[i](l,e),i,e],[l,i]);Object(v.c)(()=>{document.getElementById("root").scrollTop=0},[]);const m=Object(n.useMemo)(()=>{let e={type:i};return"song"===i&&(e=j(j({},e),{},{noImg:!0,noIndex:!0})),e},[i]);return a.a.createElement(x,{ref:r},a.a.createElement($,null,a.a.createElement(O.a,{title:p.a[i.toLowerCase()].desc}),a.a.createElement("div",{style:{marginTop:20}},a.a.createElement(h.a,{songsCount:e,withoutBar:!0}))),a.a.createElement(k,null,a.a.createElement(g.a,{keyPage:"search-more",getScrollRef:u,pageFetch:y.requestSearch,getUrl:d,mockLoadingOption:m,setItemsCount:t})))};I.csr=!0;t.default=I}}]);
//# sourceMappingURL=search-more-76e05dcb258d719af54e.js.map