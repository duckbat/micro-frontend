import{importShared as l}from"./__federation_fn_import-CrsKBspk.js";import{j as t}from"./jsx-runtime-BQMR-BYT.js";import{r as u}from"./__federation_shared_react-dom-Dnnd693R.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();var d,a=u;d=a.createRoot,a.hydrateRoot;const m="/~khaic/S2024/microfrontend/login/assets/react-CHdo91hT.svg",f="/~khaic/S2024/microfrontend/login/vite.svg",{useState:h}=await l("react");function p(){const[i,o]=h(0);return t.jsxs(t.Fragment,{children:[t.jsxs("div",{children:[t.jsx("a",{href:"https://vitejs.dev",target:"_blank",children:t.jsx("img",{src:f,className:"logo",alt:"Vite logo"})}),t.jsx("a",{href:"https://react.dev",target:"_blank",children:t.jsx("img",{src:m,className:"logo react",alt:"React logo"})})]}),t.jsx("h1",{children:"Vite + React"}),t.jsxs("div",{className:"card",children:[t.jsxs("button",{onClick:()=>o(s=>s+1),children:["count is ",i]}),t.jsxs("p",{children:["Edit ",t.jsx("code",{children:"src/App.tsx"})," and save to test HMR"]})]}),t.jsx("p",{className:"read-the-docs",children:"Click on the Vite and React logos to learn more"})]})}const{StrictMode:g}=await l("react");d(document.getElementById("root")).render(t.jsx(g,{children:t.jsx(p,{})}));
