"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8325],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>c});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),g=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=g(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=g(a),m=r,c=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return a?n.createElement(c,o(o({ref:t},p),{},{components:a})):n.createElement(c,o({ref:t},p))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var g=2;g<i;g++)o[g]=a[g];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},799:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>g});var n=a(7462),r=(a(7294),a(3905));const i={id:"giveawayfeature",title:"Giveaway Feature",slug:"/giveaway-feature"},o=void 0,l={unversionedId:"giveawayfeature",id:"giveawayfeature",title:"Giveaway Feature",description:"Recently reworked to v2: This update adds a couple of new parameters for creating giveaways, improves code and provides new textual looks for the giveaway embeds and messages! One headline new option is CAPTCHA verification prior to joining a giveaway to prevent bots, this is on by default. \ud83c\udf81",source:"@site/docs/giveawayfeature.md",sourceDirName:".",slug:"/giveaway-feature",permalink:"/docs/giveaway-feature",draft:!1,editUrl:"https://github.com/ThatGuyJacobee/Elite-Bot-Docs/edit/main/docs/giveawayfeature.md",tags:[],version:"current",frontMatter:{id:"giveawayfeature",title:"Giveaway Feature",slug:"/giveaway-feature"},sidebar:"someSidebar",previous:{title:"Buttons Feature",permalink:"/docs/buttons-feature"},next:{title:"AI Chat Conversation",permalink:"/docs/aichat-feature"}},s={},g=[{value:"How does this work?",id:"how-does-this-work",level:2},{value:"Starting a giveaway",id:"starting-a-giveaway",level:2},{value:"Editing a giveaway",id:"editing-a-giveaway",level:2},{value:"Ending early &amp; re-rolling a giveaway",id:"ending-early--re-rolling-a-giveaway",level:2}],p={toc:g},u="wrapper";function d(e){let{components:t,...i}=e;return(0,r.kt)(u,(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Recently reworked to v2: This update adds a couple of new parameters for creating giveaways, improves code and provides new textual looks for the giveaway embeds and messages! One headline new option is CAPTCHA verification prior to joining a giveaway to prevent bots, this is on by default. \ud83c\udf81")),(0,r.kt)("h2",{id:"how-does-this-work"},"How does this work?"),(0,r.kt)("p",null,"Through the giveaway feature, you can easily create giveaways within your guild, with a range of customisation including timing, requires roles, minimum account age requirements and more! There are total of four utility commands related to giveaways which used to create and manage giveaways within your guild which can be seen in the table below!"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Command"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Example"),(0,r.kt)("th",{parentName:"tr",align:null},"Usage"),(0,r.kt)("th",{parentName:"tr",align:null},"Permission"),(0,r.kt)("th",{parentName:"tr",align:null},"Timeout"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"/giveaway start"),(0,r.kt)("td",{parentName:"tr",align:"center"},"/giveaway start ","[duration][prize]"," ","[winners][#channel]"," ","[Optional: description/captcha/accountage/serverage/requiredrole/pingusers]"),(0,r.kt)("td",{parentName:"tr",align:null},"Start a new giveaway for your guild."),(0,r.kt)("td",{parentName:"tr",align:null},"Manage Events"),(0,r.kt)("td",{parentName:"tr",align:null},"30 secs")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"/giveaway edit"),(0,r.kt)("td",{parentName:"tr",align:"center"},"/giveaway edit ","[giveawayid][Optional: changeprize/description/winneramount/captcha/accountage/serverage/requiredrole/addtime/subtime]"),(0,r.kt)("td",{parentName:"tr",align:null},"Edit the prize of a giveaway now within your guild."),(0,r.kt)("td",{parentName:"tr",align:null},"Manage Events"),(0,r.kt)("td",{parentName:"tr",align:null},"30 secs")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"/giveaway end"),(0,r.kt)("td",{parentName:"tr",align:"center"},"/giveaway end ","[giveawayid]"),(0,r.kt)("td",{parentName:"tr",align:null},"End a giveaway now within your guild."),(0,r.kt)("td",{parentName:"tr",align:null},"Manage Events"),(0,r.kt)("td",{parentName:"tr",align:null},"30 secs")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"/giveaway reroll"),(0,r.kt)("td",{parentName:"tr",align:"center"},"/giveaway reroll ","[giveawayid][howmany]"),(0,r.kt)("td",{parentName:"tr",align:null},"Re-roll a giveaway within your guild."),(0,r.kt)("td",{parentName:"tr",align:null},"Manage Events"),(0,r.kt)("td",{parentName:"tr",align:null},"30 secs")))),(0,r.kt)("h2",{id:"starting-a-giveaway"},"Starting a giveaway"),(0,r.kt)("p",null,"Beginning a giveaway is an easy process, the command requires a duration, prize, winners amount and the channel as essential parameters. The other couple of parameters are all optional to be used if you wish!"),(0,r.kt)("p",null,"An example of starting a giveaway:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"img",src:a(2657).Z,width:"1030",height:"426"})),(0,r.kt)("h2",{id:"editing-a-giveaway"},"Editing a giveaway"),(0,r.kt)("p",null,"Likewise with the start command, you can edit any part of the giveaway via the appropirate parameter. The most important part is the Giveaway ID, which can be found in the footer of the giveaway embed! You don't have to fill all of them, they are all option so only set a parameter for what you want to edit!"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can get the Giveaway ID from the footer of the giveaway embed!")),(0,r.kt)("p",null,"An example of editing a giveaway:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"img",src:a(129).Z,width:"1032",height:"403"})),(0,r.kt)("h2",{id:"ending-early--re-rolling-a-giveaway"},"Ending early & re-rolling a giveaway"),(0,r.kt)("p",null,"The giveaway end command is simple to use, you just require the Giveaway ID as the parameter. "),(0,r.kt)("p",null,"An example of ending a giveaway early:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"img",src:a(935).Z,width:"1040",height:"570"})),(0,r.kt)("p",null,"The giveaway reroll command is also simple with two parameters, the Giveaway ID and also the amount of winners to re-roll (which can max be the amount of winners)."),(0,r.kt)("p",null,"An example of rerolling a giveaway winner:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"img",src:a(9950).Z,width:"1032",height:"435"})))}d.isMDXComponent=!0},129:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/giveaway-edit-example-079a6bbb90fa5011343f66f7584d3082.png"},935:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/giveaway-end-example-9853192fc28e16221ae79e555b2b1047.png"},9950:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/giveaway-reroll-example-a496359d68b89c0b5237b13eeee2fe68.png"},2657:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/giveaway-start-example-bc25a646f8a17c34ba3df16379b7512e.png"}}]);