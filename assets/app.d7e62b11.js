import{d as oe,g as V,H as $e,o as h,c as b,k as _,I as W,l as N,f as Re,e as C,n as te,t as ne,b as ae,_ as me,a as q,J as pe,R as De,u as fe,w as Fe,W as Y,Q as Ze,j as ve,z as Ve,E as qe,a5 as Ue,a6 as We,a7 as Ye,a8 as Ke,a9 as Xe,aa as Ge,ab as Je,ac as Qe,ad as et,ae as tt,Z as nt,A as ot,af as at,ag as rt,ah as it,ai as st}from"./chunks/framework.2959a6f2.js";import{u as dt,t as ge}from"./chunks/theme.3c73136f.js";/*! medium-zoom 1.0.8 | MIT License | https://github.com/francoischalifour/medium-zoom */var k=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r])}return t},D=function(e){return e.tagName==="IMG"},lt=function(e){return NodeList.prototype.isPrototypeOf(e)},U=function(e){return e&&e.nodeType===1},le=function(e){var o=e.currentSrc||e.src;return o.substr(-4).toLowerCase()===".svg"},ce=function(e){try{return Array.isArray(e)?e.filter(D):lt(e)?[].slice.call(e).filter(D):U(e)?[e].filter(D):typeof e=="string"?[].slice.call(document.querySelectorAll(e)).filter(D):[]}catch{throw new TypeError(`The provided selector is invalid.
Expects a CSS selector, a Node element, a NodeList or an array.
See: https://github.com/francoischalifour/medium-zoom`)}},ct=function(e){var o=document.createElement("div");return o.classList.add("medium-zoom-overlay"),o.style.background=e,o},ut=function(e){var o=e.getBoundingClientRect(),r=o.top,c=o.left,m=o.width,S=o.height,g=e.cloneNode(),K=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,P=window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0;return g.removeAttribute("id"),g.style.position="absolute",g.style.top=r+K+"px",g.style.left=c+P+"px",g.style.width=m+"px",g.style.height=S+"px",g.style.transform="",g},O=function(e,o){var r=k({bubbles:!1,cancelable:!1,detail:void 0},o);if(typeof window.CustomEvent=="function")return new CustomEvent(e,r);var c=document.createEvent("CustomEvent");return c.initCustomEvent(e,r.bubbles,r.cancelable,r.detail),c},mt=function t(e){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=window.Promise||function(a){function i(){}a(i,i)},c=function(a){var i=a.target;if(i===$){E();return}y.indexOf(i)!==-1&&ie({target:i})},m=function(){if(!(T||!n.original)){var a=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;Math.abs(se-a)>d.scrollOffset&&setTimeout(E,150)}},S=function(a){var i=a.key||a.keyCode;(i==="Escape"||i==="Esc"||i===27)&&E()},g=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=a;if(a.background&&($.style.background=a.background),a.container&&a.container instanceof Object&&(i.container=k({},d.container,a.container)),a.template){var l=U(a.template)?a.template:document.querySelector(a.template);i.template=l}return d=k({},d,i),y.forEach(function(u){u.dispatchEvent(O("medium-zoom:update",{detail:{zoom:p}}))}),p},K=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return t(k({},d,a))},P=function(){for(var a=arguments.length,i=Array(a),l=0;l<a;l++)i[l]=arguments[l];var u=i.reduce(function(s,v){return[].concat(s,ce(v))},[]);return u.filter(function(s){return y.indexOf(s)===-1}).forEach(function(s){y.push(s),s.classList.add("medium-zoom-image")}),j.forEach(function(s){var v=s.type,z=s.listener,A=s.options;u.forEach(function(L){L.addEventListener(v,z,A)})}),p},Ee=function(){for(var a=arguments.length,i=Array(a),l=0;l<a;l++)i[l]=arguments[l];n.zoomed&&E();var u=i.length>0?i.reduce(function(s,v){return[].concat(s,ce(v))},[]):y;return u.forEach(function(s){s.classList.remove("medium-zoom-image"),s.dispatchEvent(O("medium-zoom:detach",{detail:{zoom:p}}))}),y=y.filter(function(s){return u.indexOf(s)===-1}),p},we=function(a,i){var l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return y.forEach(function(u){u.addEventListener("medium-zoom:"+a,i,l)}),j.push({type:"medium-zoom:"+a,listener:i,options:l}),p},Le=function(a,i){var l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return y.forEach(function(u){u.removeEventListener("medium-zoom:"+a,i,l)}),j=j.filter(function(u){return!(u.type==="medium-zoom:"+a&&u.listener.toString()===i.toString())}),p},re=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=a.target,l=function(){var s={width:document.documentElement.clientWidth,height:document.documentElement.clientHeight,left:0,top:0,right:0,bottom:0},v=void 0,z=void 0;if(d.container)if(d.container instanceof Object)s=k({},s,d.container),v=s.width-s.left-s.right-d.margin*2,z=s.height-s.top-s.bottom-d.margin*2;else{var A=U(d.container)?d.container:document.querySelector(d.container),L=A.getBoundingClientRect(),X=L.width,Se=L.height,Te=L.left,Ae=L.top;s=k({},s,{width:X,height:Se,left:Te,top:Ae})}v=v||s.width-d.margin*2,z=z||s.height-d.margin*2;var B=n.zoomedHd||n.original,Oe=le(B)?v:B.naturalWidth||v,Ie=le(B)?z:B.naturalHeight||z,R=B.getBoundingClientRect(),Ne=R.top,Me=R.left,G=R.width,J=R.height,xe=Math.min(Math.max(G,Oe),v)/G,Be=Math.min(Math.max(J,Ie),z)/J,Q=Math.min(xe,Be),Pe=(-Me+(v-G)/2+d.margin+s.left)/Q,je=(-Ne+(z-J)/2+d.margin+s.top)/Q,de="scale("+Q+") translate3d("+Pe+"px, "+je+"px, 0)";n.zoomed.style.transform=de,n.zoomedHd&&(n.zoomedHd.style.transform=de)};return new r(function(u){if(i&&y.indexOf(i)===-1){u(p);return}var s=function X(){T=!1,n.zoomed.removeEventListener("transitionend",X),n.original.dispatchEvent(O("medium-zoom:opened",{detail:{zoom:p}})),u(p)};if(n.zoomed){u(p);return}if(i)n.original=i;else if(y.length>0){var v=y;n.original=v[0]}else{u(p);return}if(n.original.dispatchEvent(O("medium-zoom:open",{detail:{zoom:p}})),se=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,T=!0,n.zoomed=ut(n.original),document.body.appendChild($),d.template){var z=U(d.template)?d.template:document.querySelector(d.template);n.template=document.createElement("div"),n.template.appendChild(z.content.cloneNode(!0)),document.body.appendChild(n.template)}if(n.original.parentElement&&n.original.parentElement.tagName==="PICTURE"&&n.original.currentSrc&&(n.zoomed.src=n.original.currentSrc),document.body.appendChild(n.zoomed),window.requestAnimationFrame(function(){document.body.classList.add("medium-zoom--opened")}),n.original.classList.add("medium-zoom-image--hidden"),n.zoomed.classList.add("medium-zoom-image--opened"),n.zoomed.addEventListener("click",E),n.zoomed.addEventListener("transitionend",s),n.original.getAttribute("data-zoom-src")){n.zoomedHd=n.zoomed.cloneNode(),n.zoomedHd.removeAttribute("srcset"),n.zoomedHd.removeAttribute("sizes"),n.zoomedHd.removeAttribute("loading"),n.zoomedHd.src=n.zoomed.getAttribute("data-zoom-src"),n.zoomedHd.onerror=function(){clearInterval(A),console.warn("Unable to reach the zoom image target "+n.zoomedHd.src),n.zoomedHd=null,l()};var A=setInterval(function(){n.zoomedHd.complete&&(clearInterval(A),n.zoomedHd.classList.add("medium-zoom-image--opened"),n.zoomedHd.addEventListener("click",E),document.body.appendChild(n.zoomedHd),l())},10)}else if(n.original.hasAttribute("srcset")){n.zoomedHd=n.zoomed.cloneNode(),n.zoomedHd.removeAttribute("sizes"),n.zoomedHd.removeAttribute("loading");var L=n.zoomedHd.addEventListener("load",function(){n.zoomedHd.removeEventListener("load",L),n.zoomedHd.classList.add("medium-zoom-image--opened"),n.zoomedHd.addEventListener("click",E),document.body.appendChild(n.zoomedHd),l()})}else l()})},E=function(){return new r(function(a){if(T||!n.original){a(p);return}var i=function l(){n.original.classList.remove("medium-zoom-image--hidden"),document.body.removeChild(n.zoomed),n.zoomedHd&&document.body.removeChild(n.zoomedHd),document.body.removeChild($),n.zoomed.classList.remove("medium-zoom-image--opened"),n.template&&document.body.removeChild(n.template),T=!1,n.zoomed.removeEventListener("transitionend",l),n.original.dispatchEvent(O("medium-zoom:closed",{detail:{zoom:p}})),n.original=null,n.zoomed=null,n.zoomedHd=null,n.template=null,a(p)};T=!0,document.body.classList.remove("medium-zoom--opened"),n.zoomed.style.transform="",n.zoomedHd&&(n.zoomedHd.style.transform=""),n.template&&(n.template.style.transition="opacity 150ms",n.template.style.opacity=0),n.original.dispatchEvent(O("medium-zoom:close",{detail:{zoom:p}})),n.zoomed.addEventListener("transitionend",i)})},ie=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=a.target;return n.original?E():re({target:i})},Ce=function(){return d},He=function(){return y},ke=function(){return n.original},y=[],j=[],T=!1,se=0,d=o,n={original:null,zoomed:null,zoomedHd:null,template:null};Object.prototype.toString.call(e)==="[object Object]"?d=e:(e||typeof e=="string")&&P(e),d=k({margin:0,background:"#fff",scrollOffset:40,container:null,template:null},d);var $=ct(d.background);document.addEventListener("click",c),document.addEventListener("keyup",S),document.addEventListener("scroll",m),window.addEventListener("resize",E);var p={open:re,close:E,toggle:ie,update:g,clone:K,attach:P,detach:Ee,on:we,off:Le,getOptions:Ce,getImages:He,getZoomedImage:ke};return p};function pt(t,e){e===void 0&&(e={});var o=e.insertAt;if(!(!t||typeof document>"u")){var r=document.head||document.getElementsByTagName("head")[0],c=document.createElement("style");c.type="text/css",o==="top"&&r.firstChild?r.insertBefore(c,r.firstChild):r.appendChild(c),c.styleSheet?c.styleSheet.cssText=t:c.appendChild(document.createTextNode(t))}}var ft=".medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--opened .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s cubic-bezier(.2,0,.2,1)!important}.medium-zoom-image--hidden{visibility:hidden}.medium-zoom-image--opened{position:relative;cursor:pointer;cursor:zoom-out;will-change:transform}";pt(ft);const vt=mt;function gt(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var he,M,w,ye,ee,ue,I,F=!1,Z=[];typeof document<"u"&&(ye=function(t){return F||document.readyState==="interactive"||document.readyState==="complete"?t.call(document):Z.push(function(){return t.call(this)}),this},ue=function(){for(var t=0,e=Z.length;t<e;t++)Z[t].apply(document);Z=[]},I=function(){F||(F=!0,ue.call(window),document.removeEventListener?document.removeEventListener("DOMContentLoaded",I,!1):document.attachEvent&&(document.detachEvent("onreadystatechange",I),window==window.top&&(clearInterval(ee),ee=null)))},document.addEventListener?document.addEventListener("DOMContentLoaded",I,!1):document.attachEvent&&(document.attachEvent("onreadystatechange",function(){/loaded|complete/.test(document.readyState)&&I()}),window==window.top&&(ee=setInterval(function(){try{F||document.documentElement.doScroll("left")}catch{return}I()},5))));he={fetch:function(t,e){var o="BusuanziCallback_"+Math.floor(1099511627776*Math.random());t=t.replace("=BusuanziCallback","="+o),w=document.createElement("SCRIPT"),w.type="text/javascript",w.defer=!0,w.src=t,document.getElementsByTagName("HEAD")[0].appendChild(w),window[o]=this.evalCall(e)},evalCall:function(t){return function(e){ye(function(){try{t(e),w&&w.parentElement&&w.parentElement.removeChild&&w.parentElement.removeChild(w)}catch(o){console.log(o),M.hides()}})}}};const ze=()=>{M&&M.hides(),he.fetch("//busuanzi.ibruce.info/busuanzi?jsonpCallback=BusuanziCallback",function(t){M.texts(t),M.shows()})};M={bszs:["site_pv","page_pv","site_uv"],texts:function(t){this.bszs.map(function(e){var o=document.getElementById("busuanzi_value_"+e);o&&(o.innerHTML=t[e])})},hides:function(){this.bszs.map(function(t){var e=document.getElementById("busuanzi_container_"+t);e&&(e.style.display="none")})},shows:function(){this.bszs.map(function(t){var e=document.getElementById("busuanzi_container_"+t);e&&(e.style.display="inline")})}};typeof document<"u"&&ze();var ht={fetch:ze},yt=ht;const zt=gt(yt);const bt=/[\u0000-\u001f]/g,_t=/[\s~`!@#$%^&*()\-_+=[\]{}|\\;:"'“”‘’<>,.?/]+/g,Et=/[\u0300-\u036F]/g,be=t=>t.normalize("NFKD").replace(Et,"").replace(bt,"").replace(_t,"-").replace(/-{2,}/g,"-").replace(/^-+|-+$/g,"").replace(/^(\d)/,"_$1").toLowerCase(),wt=["href"],Lt={class:"box-header"},Ct=["innerHTML"],Ht={key:1,class:"icon"},kt=["src","alt"],St=["id"],Tt={key:1,class:"desc"},At=oe({__name:"MNavLink",props:{noIcon:{type:Boolean},icon:{},badge:{},title:{},desc:{},link:{}},setup(t){const e=t,o=V(()=>e.title?be(e.title):""),r=V(()=>typeof e.icon=="object"?e.icon.svg:""),c=V(()=>typeof e.badge=="string"?{text:e.badge,type:"info"}:e.badge);return(m,S)=>{const g=$e("Badge");return m.link?(h(),b("a",{key:0,class:"m-nav-link",href:m.link,target:"_blank",rel:"noreferrer"},[_("article",{class:te(["box",{"has-badge":c.value}])},[_("div",Lt,[m.noIcon?C("",!0):(h(),b(W,{key:0},[r.value?(h(),b("div",{key:0,class:"icon",innerHTML:r.value},null,8,Ct)):m.icon&&typeof m.icon=="string"?(h(),b("div",Ht,[_("img",{src:N(Re)(m.icon),alt:m.title,onerror:"this.parentElement.style.display='none'"},null,8,kt)])):C("",!0)],64)),m.title?(h(),b("h5",{key:1,id:o.value,class:te(["title",{"no-icon":m.noIcon}])},ne(m.title),11,St)):C("",!0)]),c.value?(h(),ae(g,{key:0,class:"badge",type:c.value.type,text:c.value.text},null,8,["type","text"])):C("",!0),m.desc?(h(),b("p",Tt,ne(m.desc),1)):C("",!0)],2)],8,wt)):C("",!0)}}});const Ot=me(At,[["__scopeId","data-v-f6a1464b"]]),It=["id"],Nt=["href"],Mt={class:"m-nav-links"},xt=oe({__name:"MNavLinks",props:{title:{},noIcon:{type:Boolean},items:{}},setup(t){const e=t,o=V(()=>be(e.title));return(r,c)=>(h(),b(W,null,[r.title?(h(),b("h2",{key:0,id:o.value,tabindex:"-1"},[q(ne(r.title)+" ",1),_("a",{class:"header-anchor",href:`#${o.value}`,"aria-hidden":"true"},null,8,Nt)],8,It)):C("",!0),_("div",Mt,[(h(!0),b(W,null,pe(r.items,m=>(h(),ae(Ot,De({noIcon:r.noIcon},m),null,16,["noIcon"]))),256))])],64))}});const Bt=me(xt,[["__scopeId","data-v-3a009e39"]]);const Pt=["innerHTML"],jt=_("div",{class:"i-footer-column"},[_("span",{id:"busuanzi_container_site_pv"},[q("总访问量"),_("span",{id:"busuanzi_value_site_pv"})]),q("， "),_("span",{id:"busuanzi_container_site_uv"},[q("总访客数"),_("span",{id:"busuanzi_value_site_uv"})])],-1),$t={__name:"IFooter",setup(t){const{Layout:e}=ge,{theme:o}=fe(),{hasSidebar:r}=dt();return(c,m)=>(h(),ae(N(e),null,{"layout-bottom":Fe(()=>[_("div",{class:te(["i-footer",{"has-sidebar":N(r)}])},[N(o).footers&&N(o).footers.length?(h(!0),b(W,{key:0},pe(N(o).footers,(S,g)=>(h(),b("div",{class:"i-footer-column",innerHTML:S,key:g},null,8,Pt))),128)):C("",!0),jt],2)]),_:1}))}},Rt={...ge,Layout:$t,enhanceApp({app:t,router:e}){t.component("MNavLinks",Bt),Y&&(e.onAfterRouteChanged=()=>{zt.fetch()})},setup(){const t=Ze(),e=()=>{vt(".main img")};ve(()=>{e()}),Ve(()=>t.path,()=>qe(()=>e()),()=>Dt(location.pathname==="/"))}};let H;function Dt(t){if(t){if(H)return;H=document.createElement("style"),H.innerHTML=`
    :root {
      animation: rainbow 12s linear infinite;
    }`,document.body.appendChild(H)}else{if(!H)return;H.remove(),H=void 0}}function _e(t){if(t.extends){const e=_e(t.extends);return{...e,...t,async enhanceApp(o){e.enhanceApp&&await e.enhanceApp(o),t.enhanceApp&&await t.enhanceApp(o)}}}return t}const x=_e(Rt),Ft=oe({name:"VitePressApp",setup(){const{site:t}=fe();return ve(()=>{ot(()=>{document.documentElement.lang=t.value.lang,document.documentElement.dir=t.value.dir})}),at(),rt(),it(),x.setup&&x.setup(),()=>st(x.Layout)}});async function Zt(){const t=qt(),e=Vt();e.provide(We,t);const o=Ye(t.route);return e.provide(Ke,o),e.component("Content",Xe),e.component("ClientOnly",Ge),Object.defineProperties(e.config.globalProperties,{$frontmatter:{get(){return o.frontmatter.value}},$params:{get(){return o.page.value.params}}}),x.enhanceApp&&await x.enhanceApp({app:e,router:t,siteData:Je}),{app:e,router:t,data:o}}function Vt(){return Qe(Ft)}function qt(){let t=Y,e;return et(o=>{let r=tt(o);return r?(t&&(e=r),(t||e===r)&&(r=r.replace(/\.js$/,".lean.js")),Y&&(t=!1),nt(()=>import(r),[])):null},x.NotFound)}Y&&Zt().then(({app:t,router:e,data:o})=>{e.go().then(()=>{Ue(e.route,o.site),t.mount("#app")})});export{Zt as createApp};
