"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7603],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(r),d=o,h=m["".concat(s,".").concat(d)]||m[d]||p[d]||i;return r?n.createElement(h,a(a({ref:t},u),{},{components:r})):n.createElement(h,a({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8975:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const i={id:"joinroles",title:"Join Roles",slug:"/join-roles"},a=void 0,l={unversionedId:"joinroles",id:"joinroles",title:"Join Roles",description:"Configurating the join roles",source:"@site/docs/joinroles.md",sourceDirName:".",slug:"/join-roles",permalink:"/docs/join-roles",draft:!1,editUrl:"https://github.com/ThatGuyJacobee/Elite-Bot-Docs/edit/main/docs/joinroles.md",tags:[],version:"current",frontMatter:{id:"joinroles",title:"Join Roles",slug:"/join-roles"},sidebar:"someSidebar",previous:{title:"Welcome Feature",permalink:"/docs/welcome-feature"},next:{title:"Five M Server Status",permalink:"/docs/fivem-status-feature"}},s={},c=[{value:"Configurating the join roles",id:"configurating-the-join-roles",level:2}],u={toc:c};function p(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"configurating-the-join-roles"},"Configurating the join roles"),(0,o.kt)("p",null,"Configuring the roles that users are added when they join your server is extremely easy!"),(0,o.kt)("p",null,'All you have to do is use the command "/joinrole add" with the single argument being the actual role. Once you submit this, new users will now be given the picked role. You can use this command as much as you wish, with no limit to how many roles can be added when a user connects.'),(0,o.kt)("admonition",{type:"important"},(0,o.kt)("p",{parentName:"admonition"},"The role you want to be automatically added to a user when they join the server, MUST be lower in the role hierarchy than Elite Bot's role, otherwise you will receive an error as the bot cannot manage roles that are higher than its own.")),(0,o.kt)("p",null,"An example of adding a role:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img",src:r(1242).Z,width:"1222",height:"94"})),(0,o.kt)("p",null,'Similarly, you can use the "/joinrole remove" command which has a single argument for the role that you want to remove from being automatically added.'),(0,o.kt)("p",null,"And... that's it! The Join Roles are now fully configured and requires no other configuration."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},'If you forgot what roles are part of the join roles, you can use the command "/joinrolecheck" which will check your guild\'s settings and return the roles that are currently set to be given automatically on user join.')))}p.isMDXComponent=!0},1242:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/joinroles-example-6df223b9cb26c71774905fd08a45fb89.png"}}]);