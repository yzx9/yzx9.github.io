import{W as H,s as k,v as L,d as R,r as i,w as y,o as b,h as M,k as t,Q as W,c as g,q as B,N as p}from"./framework.BOQ8FqoK.js";import{r as N}from"./tag.data.C6ahxkrm.js";import"./posts.data.4HleVuhd.js";import"./timeline.data.C7MYZVdC.js";import{u as T}from"./theme.BX7bBmrh.js";const w=(r={delay:33,maxWait:!0})=>{const{delay:n=33,maxWait:e=!0}=r,c=H({x:0,y:0}),o=N(s=>{c.x=s.clientX,c.y=s.clientY},n,e!==!1?{maxWait:e===!0?n:e}:{});return k(()=>{document.addEventListener("mousemove",o)}),L(()=>{document.removeEventListener("mousemove",o)}),c},C={class:"ghost__body"},j={class:"ghost__face"},F={class:"ghost__eyes"},P=t("div",{class:"ghost__smile"},null,-1),V=t("div",{class:"ghost__rosy ghost__rosy--left"},null,-1),X=t("div",{class:"ghost__rosy ghost__rosy--right"},null,-1),Y=t("div",{class:"ghost__arm ghost__arm--left"},null,-1),q=t("div",{class:"ghost__arm ghost__arm--right"},null,-1),D=t("div",{class:"ghost__bottom"},[t("div"),t("div"),t("div"),t("div"),t("div")],-1),G=t("div",{class:"ghost__shadow"},null,-1),x=3,I=13,O=11,Q=5,S=11,U=R({__name:"Ghost",setup(r){const n=i(null),e=i(null),c=i(null),a=w();return k(()=>{var s,l;const _={x:((s=n.value)==null?void 0:s.offsetLeft)||0,y:((l=n.value)==null?void 0:l.offsetTop)||0},o=(d,u,h)=>()=>{var m,v;const f=Math.atan2(a.x-u-_.x,a.y-h-_.y),$=x*Math.cos(f)+h-10,E=x*Math.sin(f)+u-10;(m=d.value)==null||m.style.setProperty("--offset-top",`${$}px`),(v=d.value)==null||v.style.setProperty("--offset-left",`${E}px`)};y(a,o(e,I,O)),y(a,o(c,Q,S))}),(_,o)=>(b(),M("div",{class:"ghost",ref_key:"ghostRef",ref:n},[t("div",C,[t("div",j,[t("div",F,[t("div",{class:"ghost__eye ghost__eye--left",ref_key:"eyeLeftRef",ref:e},null,512),t("div",{class:"ghost__eye ghost__eye--right",ref_key:"eyeRightRef",ref:c},null,512)]),P,V,X]),Y,q,D]),G],512))}}),z={class:"flex justify-center items-center min-h-screen"},A={class:"flex justify-center items-center m-20 pb-64"},J={class:"not-found__info flex flex-col items-start"},K=t("h1",{class:"text-8xl text-primary-500"},"404",-1),Z={class:"text-gray-400 border-l-4 my-4 p-1 pl-4"},ct=R({__name:"NotFound",setup(r){const n=W(),e=T(),c=g(()=>o((e==null?void 0:e.value.notFound)??"not found")),a=g(()=>o((e==null?void 0:e.value.backToHome)??"back to home"));function _(){n.go("/")}function o(s){return typeof s=="string"?s:s[Math.floor(Math.random()*s.length)]}return(s,l)=>(b(),M("div",z,[t("div",A,[B(U),t("div",J,[K,t("h2",Z,p(c.value),1),t("a",{class:"cursor-pointer text-primary-500 font-bold hover:underline",onClick:_},p(a.value),1)])])]))}});export{ct as default};
