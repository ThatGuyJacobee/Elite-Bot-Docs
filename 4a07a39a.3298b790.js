(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{115:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return p}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),m=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=m(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=m(n),d=a,p=u["".concat(i,".").concat(d)]||u[d]||b[d]||o;return n?r.a.createElement(p,l(l({ref:t},s),{},{components:n})):r.a.createElement(p,l({ref:t},s))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},162:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/roleselectioncreate-example-5015fc734b6b650947ad1bef05721cd9.png"},163:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/roleselectiondelete-example-291c22df0ebb51bce3b713b58d377b4c.png"},164:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/roleselectionadd-example-3a6c900bb2bbc44655810215f02ce6ec.png"},165:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/roleselectionremove-example-e38cf93831ed93d8cdaa8c2b2cedc857.png"},166:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/roleselectionmenu-example-e2c2bc26c23374f4be9d80a6843b5808.png"},167:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/roleselectionmenu-embed-ec2479f49450b7f3ddcd055c9c7917e6.png"},82:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return m}));var a=n(3),r=n(7),o=(n(0),n(115)),i={id:"roleselectfeature",title:"Role Select Feature",slug:"/role-select-feature"},l={unversionedId:"roleselectfeature",id:"roleselectfeature",isDocsHomePage:!1,title:"Role Select Feature",description:"Managing new and old role selection menus",source:"@site/docs\\roleselectfeature.md",slug:"/role-select-feature",permalink:"/docs/role-select-feature",editUrl:"https://github.com/ThatGuyJacobee/Elite-Bot-Docs/edit/main/docs/roleselectfeature.md",version:"current",sidebar:"someSidebar",previous:{title:"Five M Server Status",permalink:"/docs/fivem-status-feature"},next:{title:"Moderation Commands",permalink:"/docs/moderation-commands"}},c=[{value:"Managing new and old role selection menus",id:"managing-new-and-old-role-selection-menus",children:[]},{value:"Managing roles within the role selection menu",id:"managing-roles-within-the-role-selection-menu",children:[]},{value:"Posting the role selection menu",id:"posting-the-role-selection-menu",children:[]}],s={toc:c};function m(e){var t=e.components,i=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"managing-new-and-old-role-selection-menus"},"Managing new and old role selection menus"),Object(o.b)("p",null,'Firstly, you must create a new role selection menu, with a unique name and description which is used for the embed description. Use the command "/roleselectioncreate" which has two arguments needed, the menu name which must be unique and the menu description which is what the message embed will show.'),Object(o.b)("p",null,"An Example of creating a role selection menu:"),Object(o.b)("p",null,Object(o.b)("img",{alt:"img",src:n(162).default})),Object(o.b)("p",null,'If you are wanting to delete a menu, use the command "/roleselectiondelete" which requires one argument, which is the menu name that you wish to remove.'),Object(o.b)("p",null,"An Example of deleting a role selection menu:"),Object(o.b)("p",null,Object(o.b)("img",{alt:"img",src:n(163).default})),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},'You can use the command "/roleselectioncheck" in order to see the current role selection names that are currently active within your guild!'))),Object(o.b)("h2",{id:"managing-roles-within-the-role-selection-menu"},"Managing roles within the role selection menu"),Object(o.b)("p",null,'Adding a role to a role selection menu is relatively easy. Use the command "/roleselectionadd" which consists of 4 arguments, of which menu name and role are necessary, with the description and emoji being option for extra customisability! Below is a table explaining each.'),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Argument Name"),Object(o.b)("th",{parentName:"tr",align:"center"},"Example"),Object(o.b)("th",{parentName:"tr",align:null},"Explanation"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"menuname"),Object(o.b)("td",{parentName:"tr",align:"center"},"games"),Object(o.b)("td",{parentName:"tr",align:null},"This is the name of the role selection menu you want to add a role to.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"role"),Object(o.b)("td",{parentName:"tr",align:"center"},"@Youtube"),Object(o.b)("td",{parentName:"tr",align:null},"This is the role that you want to add.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"description"),Object(o.b)("td",{parentName:"tr",align:"center"},"This is for Youtube streamers"),Object(o.b)("td",{parentName:"tr",align:null},"Optional: This is the description for the role which will show within the role selection menu.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"emoji"),Object(o.b)("td",{parentName:"tr",align:"center"},"\u25b6\ufe0f"),Object(o.b)("td",{parentName:"tr",align:null},"Optional: You can set an emoji which will show within the role selection menu.")))),Object(o.b)("p",null,"An Example of adding a role to a role selection menu:"),Object(o.b)("p",null,Object(o.b)("img",{alt:"img",src:n(164).default})),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"The emoji can be set to a custom one too! There is no limits currently on the amount of roles per role selection menu."))),Object(o.b)("p",null,'If you wish to remove a role from a role selection menu, the process is even easier. Use the command "/roleselectionremove" which has two arguments, one is the menu name which you want to delete a role from, and the second is the role that you want to remove.'),Object(o.b)("p",null,"An Example of removing a role from the role selection menu:"),Object(o.b)("p",null,Object(o.b)("img",{alt:"img",src:n(165).default})),Object(o.b)("h2",{id:"posting-the-role-selection-menu"},"Posting the role selection menu"),Object(o.b)("p",null,'Finally, you can post the role selection menu ones you\'ve added roles to a menu. Use the command "/roleselectionmenu" which has one argument, the menu name that you would like to post. This will create a message embed where users can grab or remove roles from by using the interactive menu.'),Object(o.b)("p",null,"An Example of posting the role selection menu:"),Object(o.b)("p",null,Object(o.b)("img",{alt:"img",src:n(166).default})),Object(o.b)("p",null,Object(o.b)("img",{alt:"img",src:n(167).default})),Object(o.b)("p",null,"And... that's it! The role selection menu is now fully configured and requires no other configuration."))}m.isMDXComponent=!0}}]);