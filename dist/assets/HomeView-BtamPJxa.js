import{d as p,u as _,c as l,o as g,a as t,b as o,F as m,r as f,e as a,f as b,t as c}from"./index-KnaskvQn.js";const v={class:""},R={class:"container-fluid"},x={class:"container bg-dark bg-gradient text-danger"},B=p({__name:"HomeView",setup(S){const e=_();l(()=>e.ssoResponse);const i=["given_name","email"],d=l(()=>{if(!e.ssoResponse)return{};const n=Object.entries(e.ssoResponse).filter(([s])=>i.includes(s));return console.log(n[0][0]),n??""});return g(()=>{console.log("On mounted"),console.log(e.ssoResponse),console.log(e.ssoResponse.picture)}),(n,s)=>(a(),t("div",v,[o("div",R,[o("div",x,[(a(!0),t(m,null,f(d.value,(r,u)=>(a(),t("div",{key:u,class:"bg"},[o("span",null,c(r[0]),1),s[0]||(s[0]=b(": ")),o("span",null,c(r[1]),1)]))),128))])])]))}});export{B as default};
