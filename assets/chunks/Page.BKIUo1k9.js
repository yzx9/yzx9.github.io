import{d as S}from"../app.BVgTNGGR.js";import{c as _,Q as F,d as C,a as q,r as H,o as s,h as a,k as d,N as p,e as E,M as v,x as R,T as f,U as T,p as G,s as M,X as O,v as P,b as c,q as y,m as K,Y as Q,g as X,n as b,C as J}from"./framework.BOQ8FqoK.js";import{r as W,g as Z}from"./tag.data.C6ahxkrm.js";import{u as A,a as L,_ as ee}from"./LayoutBase.vue_vue_type_style_index_0_lang.Ci2SyCD7.js";import{a as te,p as ne,b as se,u as N,c as B,d as ae,e as oe,f as re}from"./theme.BX7bBmrh.js";import{d as le}from"./posts.data.4HleVuhd.js";import{d as ce}from"./timeline.data.C7MYZVdC.js";function ie(){const i=A(),t=L();function l(e){if(Reflect.has(t.value.category,e.slug))return t.value.category[e.slug];const n=ne(e.slug).parts.pop();return n&&Reflect.has(t.value.category,n)?t.value.category[n]:e.raw}function o(e){return{...e,title:l(e),children:e.children.map(o)}}return _(()=>te(i.frontmatter.value).map(o))}function ue(){const i=F();function t(){const e=l(ce.timeline);return{type:"timeline",prev:(e==null?void 0:e.prev)??null,next:(e==null?void 0:e.next)??null}}function l(e){if(!e)return null;const n=e.findIndex(r=>r===i.route.path);return n===-1?null:{prev:n+1<=e.length?o(e[n+1]):null,next:n-1>=0?o(e[n-1]):null}}function o(e){var n;return{title:((n=le.posts[e])==null?void 0:n.title)??e,url:e,go:()=>i.go(e)}}return _(()=>t())}function de(){const i=A(),t=L();function l(o){var e;return((e=t.value.tag)==null?void 0:e[o.slug])??o.raw}return _(()=>se(i.frontmatter.value).map(o=>({...o,title:l(o)})))}const _e=C({__name:"CatalogItem",props:{header:{}},setup(i){const t=i,l=F(),o=L(),e=q(U,H(null)),n=_(()=>k(t.header)),r=_(()=>t.header.level<o.value.catalogExpandedLessThan||n.value);function h(){l.go(l.route.path+t.header.link)}function k(g){return g.link===e.value||g.children.some(k)}return(g,u)=>(s(),a("li",{class:R(["catalog__item p-1 pl-2 border-l transition-colors duration-300",{"catalog__item--active border-l border-primary-300":n.value,"catalog__item--expand":r.value}])},[d("a",{class:"catalog__link text-gray-500 hover:text-primary-500 cursor-pointer transition-colors duration-300",onClick:h},p(t.header.title),1),r.value?(s(),E(I,{key:0,class:"pl-4",headers:t.header.children},null,8,["headers"])):v("",!0)],2))}}),pe={key:0},I=C({__name:"CatalogGroup",props:{headers:{}},setup(i){const t=i;return(l,o)=>{var e;return(e=t.headers)!=null&&e.length?(s(),a("ul",pe,[(s(!0),a(f,null,T(t.headers,n=>(s(),E(_e,{header:n},null,8,["header"]))),256))])):v("",!0)}}}),he={class:"sticky top-12 p-4 mr-8"},me={class:"pb-1 font-bold"},U=Symbol("activeAnchor"),ve=C({__name:"Catalog",setup(i){const{page:l}=A(),o=N(),e=H(null);G(U,e);const n=W(h,100);M(()=>{requestAnimationFrame(h),window.addEventListener("scroll",()=>n())}),O(()=>{r(location.hash)}),P(()=>{window.removeEventListener("scroll",()=>n())});function r(u){e.value=u&&decodeURIComponent(u)}function h(){const u=Array.from(window.document.querySelectorAll(".page a.header-anchor")),$=window.scrollY,m=window.innerHeight,w=document.body.offsetHeight,V=Math.abs($+m-w)<1;if(u.length&&V){const x=u[u.length-1];r(x.hash);return}for(let x=0;x<u.length;x++){const Y=u[x],j=x+1<u.length?u[x+1]:null,[z,D]=k(x,Y,j);if(z){r(D);return}}}function k(u,$,m){const w=window.scrollY;return u===0&&w===0?[!0,null]:w<g($)?[!1,null]:!m||w<g(m)?[!0,$.hash]:[!1,null]}function g(u){return u.parentElement.offsetTop-71}return(u,$)=>{var m;return s(),a("section",he,[(m=c(l).headers)!=null&&m.length?(s(),a(f,{key:0},[d("h3",me,p(c(o).catalog),1),y(I,{headers:c(l).headers},null,8,["headers"])],64)):v("",!0)])}}}),fe=["title"],ge=d("span",{class:"px-1"},">",-1),xe={key:0,class:"px-1"},ye={key:1},ke={key:2,class:"pr-1"},$e={key:3,class:"pr-2"},we=C({__name:"Categories",props:{data:{},depth:{default:0}},setup(i){const t=i;return(l,o)=>{const e=K("Categories",!0);return s(!0),a(f,null,T(t.data,(n,r)=>(s(),a(f,null,[d("span",{class:"underline cursor-pointer transition-colors hover:text-primary-500",title:n.raw},p(n.title),9,fe),n.children.length?(s(),a(f,{key:0},[ge,y(e,{data:n.children,depth:t.depth+1},null,8,["data","depth"])],64)):v("",!0),r<t.data.length-1?(s(),a(f,{key:1},[t.depth===0?(s(),a("span",xe,"/")):t.depth===1?(s(),a("span",ye,", ")):t.depth===2?(s(),a("span",ke,", ")):(s(),a("span",$e,", "))],64)):v("",!0)],64))),256)}}}),Ce={class:"header relative h-full flex flex-col justify-center items-center px-16 overflow-hidden"},Ae={class:"flex flex-col items-start"},be={class:"z-30 min-w-max"},Te=["title"],Le={class:"my-6 z-30 text-8xl font-medium"},Ee={key:0,class:"text-sm"},Ne={class:"pr-2"},Se={key:1,class:"text-sm"},Fe={class:"pr-2"},He=["title"],Re=C({__name:"Header",setup(i){const{page:t}=A(),l=ie(),o=de(),e=N(),n=_(()=>B(t.value.frontmatter)),r=_(()=>ae(t.value.frontmatter)),h=_(()=>r.value?new Date(r.value):null),k=_(()=>r.value&&r.value!==n.value);return(g,u)=>(s(),a("div",Ce,[d("div",Ae,[d("div",be,[(s(!0),a(f,null,T(c(o),({title:$,slug:m,raw:w})=>(s(),a("a",{key:`tag-${m}`,class:"header__pill-link mr-2 px-3 py-1 border rounded-full cursor-pointer transition-colors duration-300",style:Q({"--pill-link-color":c(Z)(m)}),title:w},p($),13,Te))),128))]),d("h1",Le,p(c(t).title),1)]),c(l).length?(s(),a("div",Ee,[d("span",Ne,p(c(e).classifyAt),1),y(we,{data:c(l)},null,8,["data"])])):v("",!0),k.value&&h.value&&r.value?(s(),a("div",Se,[d("span",Fe,p(c(e).updatedAt),1),d("span",{title:r.value},p(c(S)(h.value).format(c(e).dateFormat)),9,He)])):v("",!0)]))}}),Be={key:0,class:"flex justify-between my-4"},Ie=["onClick"],Ue={key:1},Ve=C({__name:"Navigator",setup(i){const t=ue();return(l,o)=>c(t).prev||c(t).next?(s(),a("div",Be,[(s(!0),a(f,null,T([{link:c(t).prev,cls:"navigator__prev"},{link:c(t).next,cls:"navigator__next"}],({link:e,cls:n})=>(s(),a(f,null,[e?(s(),a("div",{key:0,class:R(["cursor-pointer overflow-hidden whitespace-nowrap text-ellipsis underline decoration-transparent transition-colors hover:text-primary-500 hover:decoration-primary-500",n]),onClick:e.go},p(e.title),11,Ie)):(s(),a("div",Ue))],64))),256))])):v("",!0)}}),Ye={},je={class:"siderbar"};function ze(i,t){return s(),a("section",je)}const De=X(Ye,[["render",ze]]),qe={class:"page__article p-10 vp-doc max-w-none"},Ge={class:"my-8 px-10 flex flex-col items-end"},Me={class:"theme-font-primary my-8 mx-4 text-2xl"},Oe={key:0,class:"my-2 text-sm"},Pe=["title"],Ke={class:"w-full px-10 my-8 flex flex-col text-gray-600"},Qe=d("div",{class:"my-4 border-t"},null,-1),st=C({__name:"Page",setup(i){const t=A(),l=L(),o=N(),e=_(()=>oe(t.frontmatter.value)??l.value.author),n=_(()=>B(t.frontmatter.value)),r=_(()=>n.value?new Date(n.value):null),h=_(()=>re(t.frontmatter.value));return(k,g)=>(s(),E(ee,{class:"page"},{header:b(()=>[y(Re)]),main:b(()=>[d("article",qe,[y(c(J))]),d("div",Ge,[d("div",Me,p(e.value),1),h.value?(s(),a("div",Oe,p(h.value),1)):v("",!0),r.value&&n.value?(s(),a("div",{key:1,class:"my-2 text-sm",title:n.value},p(c(S)(r.value).format(c(o).dateFormat)),9,Pe)):v("",!0)]),d("div",Ke,[Qe,y(Ve)])]),sub:b(()=>[y(De)]),extra:b(()=>[y(ve)]),_:1}))}});export{st as default};
