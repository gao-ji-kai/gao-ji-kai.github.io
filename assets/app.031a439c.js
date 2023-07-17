import{u as ae,o as Y,b as Oe,w as Se,l as x,k as H,c as ee,J as Te,I as xe,e as Ie,n as Ne,a as $,W as F,Q as ke,j as re,z as Pe,E as je,a5 as Be,a6 as Me,a7 as Re,a8 as De,a9 as Fe,aa as Ze,ab as Ve,ac as qe,ad as Ue,ae as We,Z as Ye,d as $e,A as Xe,af as Ge,ag as Ke,ah as Je,ai as Qe}from"./chunks/framework.d3b95951.js";import{u as et,t as ie}from"./chunks/theme.ad7e5711.js";/*! medium-zoom 1.0.8 | MIT License | https://github.com/francoischalifour/medium-zoom */var E=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var d in o)Object.prototype.hasOwnProperty.call(o,d)&&(n[d]=o[d])}return n},B=function(e){return e.tagName==="IMG"},tt=function(e){return NodeList.prototype.isPrototypeOf(e)},D=function(e){return e&&e.nodeType===1},te=function(e){var o=e.currentSrc||e.src;return o.substr(-4).toLowerCase()===".svg"},ne=function(e){try{return Array.isArray(e)?e.filter(B):tt(e)?[].slice.call(e).filter(B):D(e)?[e].filter(B):typeof e=="string"?[].slice.call(document.querySelectorAll(e)).filter(B):[]}catch{throw new TypeError(`The provided selector is invalid.
Expects a CSS selector, a Node element, a NodeList or an array.
See: https://github.com/francoischalifour/medium-zoom`)}},nt=function(e){var o=document.createElement("div");return o.classList.add("medium-zoom-overlay"),o.style.background=e,o},ot=function(e){var o=e.getBoundingClientRect(),d=o.top,l=o.left,I=o.width,S=o.height,g=e.cloneNode(),Z=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,N=window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0;return g.removeAttribute("id"),g.style.position="absolute",g.style.top=d+Z+"px",g.style.left=l+N+"px",g.style.width=I+"px",g.style.height=S+"px",g.style.transform="",g},C=function(e,o){var d=E({bubbles:!1,cancelable:!1,detail:void 0},o);if(typeof window.CustomEvent=="function")return new CustomEvent(e,d);var l=document.createEvent("CustomEvent");return l.initCustomEvent(e,d.bubbles,d.cancelable,d.detail),l},at=function n(e){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},d=window.Promise||function(a){function r(){}a(r,r)},l=function(a){var r=a.target;if(r===P){z();return}v.indexOf(r)!==-1&&K({target:r})},I=function(){if(!(w||!t.original)){var a=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;Math.abs(J-a)>s.scrollOffset&&setTimeout(z,150)}},S=function(a){var r=a.key||a.keyCode;(r==="Escape"||r==="Esc"||r===27)&&z()},g=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=a;if(a.background&&(P.style.background=a.background),a.container&&a.container instanceof Object&&(r.container=E({},s.container,a.container)),a.template){var u=D(a.template)?a.template:document.querySelector(a.template);r.template=u}return s=E({},s,r),v.forEach(function(m){m.dispatchEvent(C("medium-zoom:update",{detail:{zoom:c}}))}),c},Z=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return n(E({},s,a))},N=function(){for(var a=arguments.length,r=Array(a),u=0;u<a;u++)r[u]=arguments[u];var m=r.reduce(function(i,p){return[].concat(i,ne(p))},[]);return m.filter(function(i){return v.indexOf(i)===-1}).forEach(function(i){v.push(i),i.classList.add("medium-zoom-image")}),k.forEach(function(i){var p=i.type,h=i.listener,_=i.options;m.forEach(function(b){b.addEventListener(p,h,_)})}),c},ce=function(){for(var a=arguments.length,r=Array(a),u=0;u<a;u++)r[u]=arguments[u];t.zoomed&&z();var m=r.length>0?r.reduce(function(i,p){return[].concat(i,ne(p))},[]):v;return m.forEach(function(i){i.classList.remove("medium-zoom-image"),i.dispatchEvent(C("medium-zoom:detach",{detail:{zoom:c}}))}),v=v.filter(function(i){return m.indexOf(i)===-1}),c},le=function(a,r){var u=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return v.forEach(function(m){m.addEventListener("medium-zoom:"+a,r,u)}),k.push({type:"medium-zoom:"+a,listener:r,options:u}),c},fe=function(a,r){var u=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return v.forEach(function(m){m.removeEventListener("medium-zoom:"+a,r,u)}),k=k.filter(function(m){return!(m.type==="medium-zoom:"+a&&m.listener.toString()===r.toString())}),c},G=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=a.target,u=function(){var i={width:document.documentElement.clientWidth,height:document.documentElement.clientHeight,left:0,top:0,right:0,bottom:0},p=void 0,h=void 0;if(s.container)if(s.container instanceof Object)i=E({},i,s.container),p=i.width-i.left-i.right-s.margin*2,h=i.height-i.top-i.bottom-s.margin*2;else{var _=D(s.container)?s.container:document.querySelector(s.container),b=_.getBoundingClientRect(),V=b.width,he=b.height,ze=b.left,ye=b.top;i=E({},i,{width:V,height:he,left:ze,top:ye})}p=p||i.width-s.margin*2,h=h||i.height-s.margin*2;var T=t.zoomedHd||t.original,be=te(T)?p:T.naturalWidth||p,Ee=te(T)?h:T.naturalHeight||h,j=T.getBoundingClientRect(),we=j.top,_e=j.left,q=j.width,U=j.height,Ce=Math.min(Math.max(q,be),p)/q,Le=Math.min(Math.max(U,Ee),h)/U,W=Math.min(Ce,Le),He=(-_e+(p-q)/2+s.margin+i.left)/W,Ae=(-we+(h-U)/2+s.margin+i.top)/W,Q="scale("+W+") translate3d("+He+"px, "+Ae+"px, 0)";t.zoomed.style.transform=Q,t.zoomedHd&&(t.zoomedHd.style.transform=Q)};return new d(function(m){if(r&&v.indexOf(r)===-1){m(c);return}var i=function V(){w=!1,t.zoomed.removeEventListener("transitionend",V),t.original.dispatchEvent(C("medium-zoom:opened",{detail:{zoom:c}})),m(c)};if(t.zoomed){m(c);return}if(r)t.original=r;else if(v.length>0){var p=v;t.original=p[0]}else{m(c);return}if(t.original.dispatchEvent(C("medium-zoom:open",{detail:{zoom:c}})),J=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,w=!0,t.zoomed=ot(t.original),document.body.appendChild(P),s.template){var h=D(s.template)?s.template:document.querySelector(s.template);t.template=document.createElement("div"),t.template.appendChild(h.content.cloneNode(!0)),document.body.appendChild(t.template)}if(t.original.parentElement&&t.original.parentElement.tagName==="PICTURE"&&t.original.currentSrc&&(t.zoomed.src=t.original.currentSrc),document.body.appendChild(t.zoomed),window.requestAnimationFrame(function(){document.body.classList.add("medium-zoom--opened")}),t.original.classList.add("medium-zoom-image--hidden"),t.zoomed.classList.add("medium-zoom-image--opened"),t.zoomed.addEventListener("click",z),t.zoomed.addEventListener("transitionend",i),t.original.getAttribute("data-zoom-src")){t.zoomedHd=t.zoomed.cloneNode(),t.zoomedHd.removeAttribute("srcset"),t.zoomedHd.removeAttribute("sizes"),t.zoomedHd.removeAttribute("loading"),t.zoomedHd.src=t.zoomed.getAttribute("data-zoom-src"),t.zoomedHd.onerror=function(){clearInterval(_),console.warn("Unable to reach the zoom image target "+t.zoomedHd.src),t.zoomedHd=null,u()};var _=setInterval(function(){t.zoomedHd.complete&&(clearInterval(_),t.zoomedHd.classList.add("medium-zoom-image--opened"),t.zoomedHd.addEventListener("click",z),document.body.appendChild(t.zoomedHd),u())},10)}else if(t.original.hasAttribute("srcset")){t.zoomedHd=t.zoomed.cloneNode(),t.zoomedHd.removeAttribute("sizes"),t.zoomedHd.removeAttribute("loading");var b=t.zoomedHd.addEventListener("load",function(){t.zoomedHd.removeEventListener("load",b),t.zoomedHd.classList.add("medium-zoom-image--opened"),t.zoomedHd.addEventListener("click",z),document.body.appendChild(t.zoomedHd),u()})}else u()})},z=function(){return new d(function(a){if(w||!t.original){a(c);return}var r=function u(){t.original.classList.remove("medium-zoom-image--hidden"),document.body.removeChild(t.zoomed),t.zoomedHd&&document.body.removeChild(t.zoomedHd),document.body.removeChild(P),t.zoomed.classList.remove("medium-zoom-image--opened"),t.template&&document.body.removeChild(t.template),w=!1,t.zoomed.removeEventListener("transitionend",u),t.original.dispatchEvent(C("medium-zoom:closed",{detail:{zoom:c}})),t.original=null,t.zoomed=null,t.zoomedHd=null,t.template=null,a(c)};w=!0,document.body.classList.remove("medium-zoom--opened"),t.zoomed.style.transform="",t.zoomedHd&&(t.zoomedHd.style.transform=""),t.template&&(t.template.style.transition="opacity 150ms",t.template.style.opacity=0),t.original.dispatchEvent(C("medium-zoom:close",{detail:{zoom:c}})),t.zoomed.addEventListener("transitionend",r)})},K=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=a.target;return t.original?z():G({target:r})},pe=function(){return s},ve=function(){return v},ge=function(){return t.original},v=[],k=[],w=!1,J=0,s=o,t={original:null,zoomed:null,zoomedHd:null,template:null};Object.prototype.toString.call(e)==="[object Object]"?s=e:(e||typeof e=="string")&&N(e),s=E({margin:0,background:"#fff",scrollOffset:40,container:null,template:null},s);var P=nt(s.background);document.addEventListener("click",l),document.addEventListener("keyup",S),document.addEventListener("scroll",I),window.addEventListener("resize",z);var c={open:G,close:z,toggle:K,update:g,clone:Z,attach:N,detach:ce,on:le,off:fe,getOptions:pe,getImages:ve,getZoomedImage:ge};return c};function rt(n,e){e===void 0&&(e={});var o=e.insertAt;if(!(!n||typeof document>"u")){var d=document.head||document.getElementsByTagName("head")[0],l=document.createElement("style");l.type="text/css",o==="top"&&d.firstChild?d.insertBefore(l,d.firstChild):d.appendChild(l),l.styleSheet?l.styleSheet.cssText=n:l.appendChild(document.createTextNode(n))}}var it=".medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--opened .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s cubic-bezier(.2,0,.2,1)!important}.medium-zoom-image--hidden{visibility:hidden}.medium-zoom-image--opened{position:relative;cursor:pointer;cursor:zoom-out;will-change:transform}";rt(it);const dt=at;function st(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var de,A,y,se,X,oe,L,M=!1,R=[];typeof document<"u"&&(se=function(n){return M||document.readyState==="interactive"||document.readyState==="complete"?n.call(document):R.push(function(){return n.call(this)}),this},oe=function(){for(var n=0,e=R.length;n<e;n++)R[n].apply(document);R=[]},L=function(){M||(M=!0,oe.call(window),document.removeEventListener?document.removeEventListener("DOMContentLoaded",L,!1):document.attachEvent&&(document.detachEvent("onreadystatechange",L),window==window.top&&(clearInterval(X),X=null)))},document.addEventListener?document.addEventListener("DOMContentLoaded",L,!1):document.attachEvent&&(document.attachEvent("onreadystatechange",function(){/loaded|complete/.test(document.readyState)&&L()}),window==window.top&&(X=setInterval(function(){try{M||document.documentElement.doScroll("left")}catch{return}L()},5))));de={fetch:function(n,e){var o="BusuanziCallback_"+Math.floor(1099511627776*Math.random());n=n.replace("=BusuanziCallback","="+o),y=document.createElement("SCRIPT"),y.type="text/javascript",y.defer=!0,y.src=n,document.getElementsByTagName("HEAD")[0].appendChild(y),window[o]=this.evalCall(e)},evalCall:function(n){return function(e){se(function(){try{n(e),y&&y.parentElement&&y.parentElement.removeChild&&y.parentElement.removeChild(y)}catch(o){console.log(o),A.hides()}})}}};const ue=()=>{A&&A.hides(),de.fetch("//busuanzi.ibruce.info/busuanzi?jsonpCallback=BusuanziCallback",function(n){A.texts(n),A.shows()})};A={bszs:["site_pv","page_pv","site_uv"],texts:function(n){this.bszs.map(function(e){var o=document.getElementById("busuanzi_value_"+e);o&&(o.innerHTML=n[e])})},hides:function(){this.bszs.map(function(n){var e=document.getElementById("busuanzi_container_"+n);e&&(e.style.display="none")})},shows:function(){this.bszs.map(function(n){var e=document.getElementById("busuanzi_container_"+n);e&&(e.style.display="inline")})}};typeof document<"u"&&ue();var ut={fetch:ue},mt=ut;const ct=st(mt);const lt=["innerHTML"],ft=H("div",{class:"i-footer-column"},[H("span",{id:"busuanzi_container_site_pv"},[$("总访问量"),H("span",{id:"busuanzi_value_site_pv"})]),$("， "),H("span",{id:"busuanzi_container_site_uv"},[$("总访客数"),H("span",{id:"busuanzi_value_site_uv"})])],-1),pt={__name:"IFooter",setup(n){const{Layout:e}=ie,{theme:o}=ae(),{hasSidebar:d}=et();return(l,I)=>(Y(),Oe(x(e),null,{"layout-bottom":Se(()=>[H("div",{class:Ne(["i-footer",{"has-sidebar":x(d)}])},[x(o).footers&&x(o).footers.length?(Y(!0),ee(xe,{key:0},Te(x(o).footers,(S,g)=>(Y(),ee("div",{class:"i-footer-column",innerHTML:S,key:g},null,8,lt))),128)):Ie("",!0),ft],2)]),_:1}))}},vt={...ie,Layout:pt,enhanceApp({router:n}){F&&(n.onAfterRouteChanged=()=>{ct.fetch()})},setup(){const n=ke(),e=()=>{dt(".main img")};re(()=>{e()}),Pe(()=>n.path,()=>je(()=>e()))}};function me(n){if(n.extends){const e=me(n.extends);return{...e,...n,async enhanceApp(o){e.enhanceApp&&await e.enhanceApp(o),n.enhanceApp&&await n.enhanceApp(o)}}}return n}const O=me(vt),gt=$e({name:"VitePressApp",setup(){const{site:n}=ae();return re(()=>{Xe(()=>{document.documentElement.lang=n.value.lang,document.documentElement.dir=n.value.dir})}),Ge(),Ke(),Je(),O.setup&&O.setup(),()=>Qe(O.Layout)}});async function ht(){const n=yt(),e=zt();e.provide(Me,n);const o=Re(n.route);return e.provide(De,o),e.component("Content",Fe),e.component("ClientOnly",Ze),Object.defineProperties(e.config.globalProperties,{$frontmatter:{get(){return o.frontmatter.value}},$params:{get(){return o.page.value.params}}}),O.enhanceApp&&await O.enhanceApp({app:e,router:n,siteData:Ve}),{app:e,router:n,data:o}}function zt(){return qe(gt)}function yt(){let n=F,e;return Ue(o=>{let d=We(o);return d?(n&&(e=d),(n||e===d)&&(d=d.replace(/\.js$/,".lean.js")),F&&(n=!1),Ye(()=>import(d),[])):null},O.NotFound)}F&&ht().then(({app:n,router:e,data:o})=>{e.go().then(()=>{Be(e.route,o.site),n.mount("#app")})});export{ht as createApp};