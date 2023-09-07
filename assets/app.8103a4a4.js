import{d as ne,g as W,C as je,o as h,c as b,k as x,F as q,l as I,f as Re,e as L,n as ee,t as te,b as oe,_ as ue,a as $e,D as me,L as De,u as fe,w as Fe,s as U,K as Ve,j as pe,x as We,O as Ze,a1 as qe,a2 as Ue,a3 as Ye,a4 as Ke,a5 as Xe,a6 as Ge,a7 as Je,a8 as Qe,a9 as et,aa as tt,V as nt,y as ot,ab as at,ac as rt,ad as it,ae as st}from"./chunks/framework.01af844e.js";import{u as dt,t as ve}from"./chunks/theme.19e15cba.js";/*! medium-zoom 1.0.8 | MIT License | https://github.com/francoischalifour/medium-zoom */var k=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r])}return t},D=function(e){return e.tagName==="IMG"},ct=function(e){return NodeList.prototype.isPrototypeOf(e)},Z=function(e){return e&&e.nodeType===1},de=function(e){var o=e.currentSrc||e.src;return o.substr(-4).toLowerCase()===".svg"},ce=function(e){try{return Array.isArray(e)?e.filter(D):ct(e)?[].slice.call(e).filter(D):Z(e)?[e].filter(D):typeof e=="string"?[].slice.call(document.querySelectorAll(e)).filter(D):[]}catch{throw new TypeError(`The provided selector is invalid.
Expects a CSS selector, a Node element, a NodeList or an array.
See: https://github.com/francoischalifour/medium-zoom`)}},lt=function(e){var o=document.createElement("div");return o.classList.add("medium-zoom-overlay"),o.style.background=e,o},ut=function(e){var o=e.getBoundingClientRect(),r=o.top,l=o.left,m=o.width,H=o.height,g=e.cloneNode(),Y=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,B=window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0;return g.removeAttribute("id"),g.style.position="absolute",g.style.top=r+Y+"px",g.style.left=l+B+"px",g.style.width=m+"px",g.style.height=H+"px",g.style.transform="",g},O=function(e,o){var r=k({bubbles:!1,cancelable:!1,detail:void 0},o);if(typeof window.CustomEvent=="function")return new CustomEvent(e,r);var l=document.createEvent("CustomEvent");return l.initCustomEvent(e,r.bubbles,r.cancelable,r.detail),l},mt=function t(e){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=window.Promise||function(a){function i(){}a(i,i)},l=function(a){var i=a.target;if(i===R){_();return}y.indexOf(i)!==-1&&re({target:i})},m=function(){if(!(S||!n.original)){var a=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;Math.abs(ie-a)>d.scrollOffset&&setTimeout(_,150)}},H=function(a){var i=a.key||a.keyCode;(i==="Escape"||i==="Esc"||i===27)&&_()},g=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=a;if(a.background&&(R.style.background=a.background),a.container&&a.container instanceof Object&&(i.container=k({},d.container,a.container)),a.template){var c=Z(a.template)?a.template:document.querySelector(a.template);i.template=c}return d=k({},d,i),y.forEach(function(u){u.dispatchEvent(O("medium-zoom:update",{detail:{zoom:f}}))}),f},Y=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return t(k({},d,a))},B=function(){for(var a=arguments.length,i=Array(a),c=0;c<a;c++)i[c]=arguments[c];var u=i.reduce(function(s,v){return[].concat(s,ce(v))},[]);return u.filter(function(s){return y.indexOf(s)===-1}).forEach(function(s){y.push(s),s.classList.add("medium-zoom-image")}),j.forEach(function(s){var v=s.type,z=s.listener,T=s.options;u.forEach(function(w){w.addEventListener(v,z,T)})}),f},_e=function(){for(var a=arguments.length,i=Array(a),c=0;c<a;c++)i[c]=arguments[c];n.zoomed&&_();var u=i.length>0?i.reduce(function(s,v){return[].concat(s,ce(v))},[]):y;return u.forEach(function(s){s.classList.remove("medium-zoom-image"),s.dispatchEvent(O("medium-zoom:detach",{detail:{zoom:f}}))}),y=y.filter(function(s){return u.indexOf(s)===-1}),f},Ee=function(a,i){var c=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return y.forEach(function(u){u.addEventListener("medium-zoom:"+a,i,c)}),j.push({type:"medium-zoom:"+a,listener:i,options:c}),f},we=function(a,i){var c=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return y.forEach(function(u){u.removeEventListener("medium-zoom:"+a,i,c)}),j=j.filter(function(u){return!(u.type==="medium-zoom:"+a&&u.listener.toString()===i.toString())}),f},ae=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=a.target,c=function(){var s={width:document.documentElement.clientWidth,height:document.documentElement.clientHeight,left:0,top:0,right:0,bottom:0},v=void 0,z=void 0;if(d.container)if(d.container instanceof Object)s=k({},s,d.container),v=s.width-s.left-s.right-d.margin*2,z=s.height-s.top-s.bottom-d.margin*2;else{var T=Z(d.container)?d.container:document.querySelector(d.container),w=T.getBoundingClientRect(),K=w.width,He=w.height,Se=w.left,Te=w.top;s=k({},s,{width:K,height:He,left:Se,top:Te})}v=v||s.width-d.margin*2,z=z||s.height-d.margin*2;var P=n.zoomedHd||n.original,Oe=de(P)?v:P.naturalWidth||v,Ae=de(P)?z:P.naturalHeight||z,$=P.getBoundingClientRect(),Ie=$.top,Ne=$.left,X=$.width,G=$.height,xe=Math.min(Math.max(X,Oe),v)/X,Me=Math.min(Math.max(G,Ae),z)/G,J=Math.min(xe,Me),Pe=(-Ne+(v-X)/2+d.margin+s.left)/J,Be=(-Ie+(z-G)/2+d.margin+s.top)/J,se="scale("+J+") translate3d("+Pe+"px, "+Be+"px, 0)";n.zoomed.style.transform=se,n.zoomedHd&&(n.zoomedHd.style.transform=se)};return new r(function(u){if(i&&y.indexOf(i)===-1){u(f);return}var s=function K(){S=!1,n.zoomed.removeEventListener("transitionend",K),n.original.dispatchEvent(O("medium-zoom:opened",{detail:{zoom:f}})),u(f)};if(n.zoomed){u(f);return}if(i)n.original=i;else if(y.length>0){var v=y;n.original=v[0]}else{u(f);return}if(n.original.dispatchEvent(O("medium-zoom:open",{detail:{zoom:f}})),ie=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,S=!0,n.zoomed=ut(n.original),document.body.appendChild(R),d.template){var z=Z(d.template)?d.template:document.querySelector(d.template);n.template=document.createElement("div"),n.template.appendChild(z.content.cloneNode(!0)),document.body.appendChild(n.template)}if(n.original.parentElement&&n.original.parentElement.tagName==="PICTURE"&&n.original.currentSrc&&(n.zoomed.src=n.original.currentSrc),document.body.appendChild(n.zoomed),window.requestAnimationFrame(function(){document.body.classList.add("medium-zoom--opened")}),n.original.classList.add("medium-zoom-image--hidden"),n.zoomed.classList.add("medium-zoom-image--opened"),n.zoomed.addEventListener("click",_),n.zoomed.addEventListener("transitionend",s),n.original.getAttribute("data-zoom-src")){n.zoomedHd=n.zoomed.cloneNode(),n.zoomedHd.removeAttribute("srcset"),n.zoomedHd.removeAttribute("sizes"),n.zoomedHd.removeAttribute("loading"),n.zoomedHd.src=n.zoomed.getAttribute("data-zoom-src"),n.zoomedHd.onerror=function(){clearInterval(T),console.warn("Unable to reach the zoom image target "+n.zoomedHd.src),n.zoomedHd=null,c()};var T=setInterval(function(){n.zoomedHd.complete&&(clearInterval(T),n.zoomedHd.classList.add("medium-zoom-image--opened"),n.zoomedHd.addEventListener("click",_),document.body.appendChild(n.zoomedHd),c())},10)}else if(n.original.hasAttribute("srcset")){n.zoomedHd=n.zoomed.cloneNode(),n.zoomedHd.removeAttribute("sizes"),n.zoomedHd.removeAttribute("loading");var w=n.zoomedHd.addEventListener("load",function(){n.zoomedHd.removeEventListener("load",w),n.zoomedHd.classList.add("medium-zoom-image--opened"),n.zoomedHd.addEventListener("click",_),document.body.appendChild(n.zoomedHd),c()})}else c()})},_=function(){return new r(function(a){if(S||!n.original){a(f);return}var i=function c(){n.original.classList.remove("medium-zoom-image--hidden"),document.body.removeChild(n.zoomed),n.zoomedHd&&document.body.removeChild(n.zoomedHd),document.body.removeChild(R),n.zoomed.classList.remove("medium-zoom-image--opened"),n.template&&document.body.removeChild(n.template),S=!1,n.zoomed.removeEventListener("transitionend",c),n.original.dispatchEvent(O("medium-zoom:closed",{detail:{zoom:f}})),n.original=null,n.zoomed=null,n.zoomedHd=null,n.template=null,a(f)};S=!0,document.body.classList.remove("medium-zoom--opened"),n.zoomed.style.transform="",n.zoomedHd&&(n.zoomedHd.style.transform=""),n.template&&(n.template.style.transition="opacity 150ms",n.template.style.opacity=0),n.original.dispatchEvent(O("medium-zoom:close",{detail:{zoom:f}})),n.zoomed.addEventListener("transitionend",i)})},re=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=a.target;return n.original?_():ae({target:i})},Le=function(){return d},Ce=function(){return y},ke=function(){return n.original},y=[],j=[],S=!1,ie=0,d=o,n={original:null,zoomed:null,zoomedHd:null,template:null};Object.prototype.toString.call(e)==="[object Object]"?d=e:(e||typeof e=="string")&&B(e),d=k({margin:0,background:"#fff",scrollOffset:40,container:null,template:null},d);var R=lt(d.background);document.addEventListener("click",l),document.addEventListener("keyup",H),document.addEventListener("scroll",m),window.addEventListener("resize",_);var f={open:ae,close:_,toggle:re,update:g,clone:Y,attach:B,detach:_e,on:Ee,off:we,getOptions:Le,getImages:Ce,getZoomedImage:ke};return f};function ft(t,e){e===void 0&&(e={});var o=e.insertAt;if(!(!t||typeof document>"u")){var r=document.head||document.getElementsByTagName("head")[0],l=document.createElement("style");l.type="text/css",o==="top"&&r.firstChild?r.insertBefore(l,r.firstChild):r.appendChild(l),l.styleSheet?l.styleSheet.cssText=t:l.appendChild(document.createTextNode(t))}}var pt=".medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--opened .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s cubic-bezier(.2,0,.2,1)!important}.medium-zoom-image--hidden{visibility:hidden}.medium-zoom-image--opened{position:relative;cursor:pointer;cursor:zoom-out;will-change:transform}";ft(pt);const vt=mt;function gt(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var ge,N,E,he,Q,le,A,F=!1,V=[];typeof document<"u"&&(he=function(t){return F||document.readyState==="interactive"||document.readyState==="complete"?t.call(document):V.push(function(){return t.call(this)}),this},le=function(){for(var t=0,e=V.length;t<e;t++)V[t].apply(document);V=[]},A=function(){F||(F=!0,le.call(window),document.removeEventListener?document.removeEventListener("DOMContentLoaded",A,!1):document.attachEvent&&(document.detachEvent("onreadystatechange",A),window==window.top&&(clearInterval(Q),Q=null)))},document.addEventListener?document.addEventListener("DOMContentLoaded",A,!1):document.attachEvent&&(document.attachEvent("onreadystatechange",function(){/loaded|complete/.test(document.readyState)&&A()}),window==window.top&&(Q=setInterval(function(){try{F||document.documentElement.doScroll("left")}catch{return}A()},5))));ge={fetch:function(t,e){var o="BusuanziCallback_"+Math.floor(1099511627776*Math.random());t=t.replace("=BusuanziCallback","="+o),E=document.createElement("SCRIPT"),E.type="text/javascript",E.defer=!0,E.src=t,document.getElementsByTagName("HEAD")[0].appendChild(E),window[o]=this.evalCall(e)},evalCall:function(t){return function(e){he(function(){try{t(e),E&&E.parentElement&&E.parentElement.removeChild&&E.parentElement.removeChild(E)}catch(o){console.log(o),N.hides()}})}}};const ye=()=>{N&&N.hides(),ge.fetch("//busuanzi.ibruce.info/busuanzi?jsonpCallback=BusuanziCallback",function(t){N.texts(t),N.shows()})};N={bszs:["site_pv","page_pv","site_uv"],texts:function(t){this.bszs.map(function(e){var o=document.getElementById("busuanzi_value_"+e);o&&(o.innerHTML=t[e])})},hides:function(){this.bszs.map(function(t){var e=document.getElementById("busuanzi_container_"+t);e&&(e.style.display="none")})},shows:function(){this.bszs.map(function(t){var e=document.getElementById("busuanzi_container_"+t);e&&(e.style.display="inline")})}};typeof document<"u"&&ye();var ht={fetch:ye},yt=ht;const zt=gt(yt);const bt=/[\u0000-\u001f]/g,_t=/[\s~`!@#$%^&*()\-_+=[\]{}|\\;:"'“”‘’<>,.?/]+/g,Et=/[\u0300-\u036F]/g,ze=t=>t.normalize("NFKD").replace(Et,"").replace(bt,"").replace(_t,"-").replace(/-{2,}/g,"-").replace(/^-+|-+$/g,"").replace(/^(\d)/,"_$1").toLowerCase(),wt=["href"],Lt={class:"box-header"},Ct=["innerHTML"],kt={key:1,class:"icon"},Ht=["src","alt"],St=["id"],Tt={key:1,class:"desc"},Ot=ne({__name:"MNavLink",props:{noIcon:{type:Boolean},icon:{},badge:{},title:{},desc:{},link:{}},setup(t){const e=t,o=W(()=>e.title?ze(e.title):""),r=W(()=>typeof e.icon=="object"?e.icon.svg:""),l=W(()=>typeof e.badge=="string"?{text:e.badge,type:"info"}:e.badge);return(m,H)=>{const g=je("Badge");return m.link?(h(),b("a",{key:0,class:"m-nav-link",href:m.link,target:"_blank",rel:"noreferrer"},[x("article",{class:ee(["box",{"has-badge":l.value}])},[x("div",Lt,[m.noIcon?L("",!0):(h(),b(q,{key:0},[r.value?(h(),b("div",{key:0,class:"icon",innerHTML:r.value},null,8,Ct)):m.icon&&typeof m.icon=="string"?(h(),b("div",kt,[x("img",{src:I(Re)(m.icon),alt:m.title,onerror:"this.parentElement.style.display='none'"},null,8,Ht)])):L("",!0)],64)),m.title?(h(),b("h5",{key:1,id:o.value,class:ee(["title",{"no-icon":m.noIcon}])},te(m.title),11,St)):L("",!0)]),l.value?(h(),oe(g,{key:0,class:"badge",type:l.value.type,text:l.value.text},null,8,["type","text"])):L("",!0),m.desc?(h(),b("p",Tt,te(m.desc),1)):L("",!0)],2)],8,wt)):L("",!0)}}});const At=ue(Ot,[["__scopeId","data-v-f6a1464b"]]),It=["id"],Nt=["href"],xt={class:"m-nav-links"},Mt=ne({__name:"MNavLinks",props:{title:{},noIcon:{type:Boolean},items:{}},setup(t){const e=t,o=W(()=>ze(e.title));return(r,l)=>(h(),b(q,null,[r.title?(h(),b("h2",{key:0,id:o.value,tabindex:"-1"},[$e(te(r.title)+" ",1),x("a",{class:"header-anchor",href:`#${o.value}`,"aria-hidden":"true"},null,8,Nt)],8,It)):L("",!0),x("div",xt,[(h(!0),b(q,null,me(r.items,m=>(h(),oe(At,De({noIcon:r.noIcon},m),null,16,["noIcon"]))),256))])],64))}});const Pt=ue(Mt,[["__scopeId","data-v-3a009e39"]]);const Bt=["innerHTML"],jt={__name:"IFooter",setup(t){const{Layout:e}=ve,{theme:o}=fe(),{hasSidebar:r}=dt();return(l,m)=>(h(),oe(I(e),null,{"layout-bottom":Fe(()=>[x("div",{class:ee(["i-footer",{"has-sidebar":I(r)}])},[I(o).footers&&I(o).footers.length?(h(!0),b(q,{key:0},me(I(o).footers,(H,g)=>(h(),b("div",{class:"i-footer-column",innerHTML:H,key:g},null,8,Bt))),128)):L("",!0)],2)]),_:1}))}};typeof window<"u"&&(window.navigator&&navigator.serviceWorker&&navigator.serviceWorker.getRegistrations().then(function(t){for(let e of t)e.unregister()}),"caches"in window&&caches.keys().then(function(t){return Promise.all(t.map(function(e){return caches.delete(e)}))}));const Rt={extends:ve,Layout:jt,enhanceApp({app:t,router:e}){t.component("MNavLinks",Pt),U&&(e.onAfterRouteChanged=()=>{zt.fetch()})},setup(){const t=Ve(),e=()=>{vt(".main img")};pe(()=>{e()}),We(()=>t.path,()=>Ze(()=>e()),()=>$t(location.pathname==="/"))}};let C;if(typeof window<"u"){const t=navigator.userAgent.toLowerCase();t.includes("chrome")?document.documentElement.classList.add("browser-chrome"):t.includes("firefox")?document.documentElement.classList.add("browser-firefox"):t.includes("safari")&&document.documentElement.classList.add("browser-safari")}function $t(t){if(t){if(C)return;C=document.createElement("style"),C.innerHTML=`
    :root {
      animation: rainbow 12s linear infinite;
    }`,document.body.appendChild(C)}else{if(!C)return;C.remove(),C=void 0}}function be(t){if(t.extends){const e=be(t.extends);return{...e,...t,async enhanceApp(o){e.enhanceApp&&await e.enhanceApp(o),t.enhanceApp&&await t.enhanceApp(o)}}}return t}const M=be(Rt),Dt=ne({name:"VitePressApp",setup(){const{site:t}=fe();return pe(()=>{ot(()=>{document.documentElement.lang=t.value.lang,document.documentElement.dir=t.value.dir})}),at(),rt(),it(),M.setup&&M.setup(),()=>st(M.Layout)}});async function Ft(){const t=Wt(),e=Vt();e.provide(Ue,t);const o=Ye(t.route);return e.provide(Ke,o),e.component("Content",Xe),e.component("ClientOnly",Ge),Object.defineProperties(e.config.globalProperties,{$frontmatter:{get(){return o.frontmatter.value}},$params:{get(){return o.page.value.params}}}),M.enhanceApp&&await M.enhanceApp({app:e,router:t,siteData:Je}),{app:e,router:t,data:o}}function Vt(){return Qe(Dt)}function Wt(){let t=U,e;return et(o=>{let r=tt(o);return r?(t&&(e=r),(t||e===r)&&(r=r.replace(/\.js$/,".lean.js")),U&&(t=!1),nt(()=>import(r),[])):null},M.NotFound)}U&&Ft().then(({app:t,router:e,data:o})=>{e.go().then(()=>{qe(e.route,o.site),t.mount("#app")})});export{Ft as createApp};