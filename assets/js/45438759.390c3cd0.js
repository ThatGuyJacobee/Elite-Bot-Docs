"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6269],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=a.createContext({}),s=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(m.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,m=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),g=r,d=u["".concat(m,".").concat(g)]||u[g]||c[g]||i;return n?a.createElement(d,o(o({ref:t},p),{},{components:n})):a.createElement(d,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=g;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},3842:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const i={id:"imagegenerationfeature",title:"Image Generation Feature (Dall-E 2)",slug:"/imagegeneration-feature"},o=void 0,l={unversionedId:"imagegenerationfeature",id:"imagegenerationfeature",title:"Image Generation Feature (Dall-E 2)",description:"How does this work?",source:"@site/docs/imagegenerationfeature.md",sourceDirName:".",slug:"/imagegeneration-feature",permalink:"/docs/imagegeneration-feature",draft:!1,editUrl:"https://github.com/ThatGuyJacobee/Elite-Bot-Docs/edit/main/docs/imagegenerationfeature.md",tags:[],version:"current",frontMatter:{id:"imagegenerationfeature",title:"Image Generation Feature (Dall-E 2)",slug:"/imagegeneration-feature"},sidebar:"someSidebar",previous:{title:"ChatGPT Feature",permalink:"/docs/chatgpt-feature"},next:{title:"Configuration Commands \u2699\ufe0f",permalink:"/docs/configuration-commands"}},m={},s=[{value:"How does this work?",id:"how-does-this-work",level:2}],p={toc:s},u="wrapper";function c(e){let{components:t,...i}=e;return(0,r.kt)(u,(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"how-does-this-work"},"How does this work?"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The Image Generator command is one of the latest additions to Elite Bot with update v3.2.3!")),(0,r.kt)("p",null,"The /imagegenerator command is standalone and extremely simple to use. All you have to do is run the command and provide a query, and Dall-E 2 will generate an image for you. From testing I can tell you AI is extremely interesting and unique! "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Command"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Example"),(0,r.kt)("th",{parentName:"tr",align:null},"Usage"),(0,r.kt)("th",{parentName:"tr",align:null},"Permission"),(0,r.kt)("th",{parentName:"tr",align:null},"Timeout"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"/imagegenerator"),(0,r.kt)("td",{parentName:"tr",align:"center"},"/imagegenerator ","[query]"),(0,r.kt)("td",{parentName:"tr",align:null},"Ask Dall-E 2 AI to generate an image \ud83d\udc40"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A"),(0,r.kt)("td",{parentName:"tr",align:null},"60 secs")))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Please keep in mind this is a beta implementation. Link to the official site: ",(0,r.kt)("a",{parentName:"p",href:"https://openai.com/dall-e-2/"},"https://openai.com/dall-e-2/"))),(0,r.kt)("p",null,"Examples of asking questions:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"img",src:n(5507).Z,width:"472",height:"681"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"img",src:n(8844).Z,width:"457",height:"631"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"img",src:n(5553).Z,width:"496",height:"678"})))}c.isMDXComponent=!0},5507:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/imagegenerator-feature-134b2c7bd3b71d0175fd9a750b7f5c5a.png"},8844:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/imagegenerator-feature2-2072140cb092426d6ca9bea486e07e54.png"},5553:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/imagegenerator-feature3-b4c0a624546bd67771b069ebc8141942.png"}}]);