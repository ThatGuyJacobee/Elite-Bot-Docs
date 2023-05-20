"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3525],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>d});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),u=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=u(n),h=r,d=f["".concat(s,".").concat(h)]||f[h]||p[h]||a;return n?i.createElement(d,o(o({ref:t},l),{},{components:n})):i.createElement(d,o({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[f]="string"==typeof e?e:r,o[1]=c;for(var u=2;u<a;u++)o[u]=n[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},364:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var i=n(7462),r=(n(7294),n(3905));const a={id:"verificationfeature",title:"Verification Feature",slug:"/verification-feature"},o=void 0,c={unversionedId:"verificationfeature",id:"verificationfeature",title:"Verification Feature",description:"Recently reworked to v2: This update was entirely recreated from scratch, and now offers captcha functionality which significantly improves security of your server and prevents bot accounts to a much greater effectiveness. As per Google's data, captcha is 99.8% accurate \ud83d\ude0f",source:"@site/docs/verificationfeature.md",sourceDirName:".",slug:"/verification-feature",permalink:"/docs/verification-feature",draft:!1,editUrl:"https://github.com/ThatGuyJacobee/Elite-Bot-Docs/edit/main/docs/verificationfeature.md",tags:[],version:"current",frontMatter:{id:"verificationfeature",title:"Verification Feature",slug:"/verification-feature"},sidebar:"someSidebar",previous:{title:"Role Select Feature",permalink:"/docs/role-select-feature"},next:{title:"Community Utilities Feature",permalink:"/docs/community-feature"}},s={},u=[{value:"Toggling the feature",id:"toggling-the-feature",level:2},{value:"Configurating the feature",id:"configurating-the-feature",level:2},{value:"Posting the embed",id:"posting-the-embed",level:2}],l={toc:u},f="wrapper";function p(e){let{components:t,...a}=e;return(0,r.kt)(f,(0,i.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Recently reworked to v2: This update was entirely recreated from scratch, and now offers captcha functionality which significantly improves security of your server and prevents bot accounts to a much greater effectiveness. As per Google's data, captcha is 99.8% accurate \ud83d\ude0f")),(0,r.kt)("h2",{id:"toggling-the-feature"},"Toggling the feature"),(0,r.kt)("p",null,'Firstly, you can toggle the feature on using the "/toggle verification" command within your guild returning true to enable (or false to disable).'),(0,r.kt)("p",null,"An example of toggling the feature on:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"img",src:n(3397).Z,width:"1226",height:"96"})),(0,r.kt)("h2",{id:"configurating-the-feature"},"Configurating the feature"),(0,r.kt)("p",null,'Next, you have to configure two settings, the description of the embed that is posted and the role that the user should be given if the verification is successful using the "/verification settings" command.'),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"It's up to you to ensure that the role that you have set in the configuration, is one which grants users access to the rest of the discord. The best way is to deny read and write permissions from @everyone role excluding the verification channel, and the verify role to unlock this.")),(0,r.kt)("p",null,"An example of configurating the two settings:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"img",src:n(3815).Z,width:"1222",height:"91"})),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},'One of the recent updates has introduced the ability to use "/n" to create new lines! If you wish to create a new line within your description, you can now use "/n" to create a new line at that point!')),(0,r.kt)("h2",{id:"posting-the-embed"},"Posting the embed"),(0,r.kt)("p",null,'Finally, use the command "/verification menu" in order to post the embed into the channel you wish to use for verification.'),(0,r.kt)("p",null,"An example of running the command and creating the embed:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"img",src:n(7651).Z,width:"1046",height:"380"})),(0,r.kt)("p",null,"An example of the captcha embed after pressing begin verification button:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"img",src:n(2283).Z,width:"544",height:"422"})),(0,r.kt)("p",null,"An example of verification prompt after pressing the verify button:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"img",src:n(6798).Z,width:"443",height:"285"})),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Users can close the verification prompt screen, to see the captcha again without losing already-typed contents, making this easy! You may also press the original begin verification button if you wish to see a new captcha.")),(0,r.kt)("p",null,"Once the user submits the prompt, if the captcha answer is correct then they will receive the role configured previously, otherwise they are returned with an error to try again! And... that's it! The verification system is now fully configured and requires no other configuration."))}p.isMDXComponent=!0},2283:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/verificationmenu-captcha-62a0147f55d4e19e9be6343670a03836.png"},7651:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/verificationmenu-embed-5f6454f2161c91a1c86db23a15f6a8ce.png"},6798:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/verificationmenu-modal-c5f7933b39cae1f1e0440679cf26cd2f.png"},3815:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/verificationsettings-example-b96028459d29bb69519f6bb275d54265.png"},3397:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/verificationtoggle-example-50d95ae5015d7f6c6f403768c6a5a4e7.png"}}]);