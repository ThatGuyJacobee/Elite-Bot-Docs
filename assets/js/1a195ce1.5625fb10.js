"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3443],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),m=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=m(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=m(n),c=a,h=u["".concat(s,".").concat(c)]||u[c]||d[c]||l;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var m=2;m<l;m++)o[m]=n[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3979:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var r=n(7462),a=(n(7294),n(3905));const l={id:"xpsystem",title:"XP System",slug:"/xp-system"},o=void 0,i={unversionedId:"xpsystem",id:"xpsystem",title:"XP System",description:"Recently reworked to v2: One of the latest update has brought major changes to the XP system and features! \ud83d\udd25 Check out the blog for more detail!",source:"@site/docs/xpsystem.md",sourceDirName:".",slug:"/xp-system",permalink:"/docs/xp-system",draft:!1,editUrl:"https://github.com/ThatGuyJacobee/Elite-Bot-Docs/edit/main/docs/xpsystem.md",tags:[],version:"current",frontMatter:{id:"xpsystem",title:"XP System",slug:"/xp-system"},sidebar:"someSidebar",previous:{title:"Support \ud83c\udd98",permalink:"/docs/contact-us"},next:{title:"Logging Feature",permalink:"/docs/logging-feature"}},s={},m=[{value:"Enabling the XP System",id:"enabling-the-xp-system",level:2},{value:"Configuring the XP System",id:"configuring-the-xp-system",level:2},{value:"Configuring role level rewards",id:"configuring-role-level-rewards",level:2}],p={toc:m},u="wrapper";function d(e){let{components:t,...l}=e;return(0,a.kt)(u,(0,r.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Recently reworked to v2: One of the latest update has brought ",(0,a.kt)("strong",{parentName:"p"},"major")," changes to the XP system and features! \ud83d\udd25 Check out the blog for more detail! "),(0,a.kt)("p",{parentName:"admonition"},"If you are looking for User XP commands and Admin XP commands, please see the ",(0,a.kt)("a",{parentName:"p",href:"xp-user-feature"},"user commands section"),"!")),(0,a.kt)("h2",{id:"enabling-the-xp-system"},"Enabling the XP System"),(0,a.kt)("p",null,'By default, the XP System is toggled off. Firstly, use the "/toggle xpsystem" command within your guild returning true to enable (or false to disable). Once this is toggled on, the default values for your XP System will be applied. If you would like to change these and also add an AFK Voice Channel, ensure to follow the next step!'),(0,a.kt)("p",null,"An Example of toggling the XP System:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"img",src:n(1271).Z,width:"1025",height:"214"})),(0,a.kt)("h2",{id:"configuring-the-xp-system"},"Configuring the XP System"),(0,a.kt)("p",null,"Next you need to configure the XP system for your guild! You can do this using the ",(0,a.kt)("strong",{parentName:"p"},"/xpsystem settings")," command alongside 6 arguments that you must fill in. Below is a table describing each."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter Name"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Default Values"),(0,a.kt)("th",{parentName:"tr",align:null},"Explanation"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"xptype"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Linear or Exponential"),(0,a.kt)("td",{parentName:"tr",align:null},"Choose whether your levelling system should have levels incremented in a linear fashion (each level requires same amount of XP to the next) or exponential (lvl1=100,lvl2=150,lvl3=375.... higher increments each level)!")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"xpmin"),(0,a.kt)("td",{parentName:"tr",align:"center"},"5"),(0,a.kt)("td",{parentName:"tr",align:null},"The minimum threshold of XP that should be given per message and per interval in voice chat.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"xpmax"),(0,a.kt)("td",{parentName:"tr",align:"center"},"25"),(0,a.kt)("td",{parentName:"tr",align:null},"The maximum threshold of XP that should be given per message and per interval in voice chat.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"xpmultiplier"),(0,a.kt)("td",{parentName:"tr",align:"center"},"50"),(0,a.kt)("td",{parentName:"tr",align:null},"This is the multiplier that each level should follow using a logarithmic equation. The higher the number, the more XP will be needed per rank! For example, at multiplier 50, lvl 1 requires 50 XP, lvl 2 requires 175 XP, lvl 3 requires 350 XP.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"levelupchannel"),(0,a.kt)("td",{parentName:"tr",align:"center"},"#\ud83c\udf7bmain-lounge"),(0,a.kt)("td",{parentName:"tr",align:null},"This is where level up messages will be posted into one a user reaches the next level threshold.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"intervalvc"),(0,a.kt)("td",{parentName:"tr",align:"center"},"60"),(0,a.kt)("td",{parentName:"tr",align:null},"This is the interval (in seconds!) at which XP is added to a user that is in a voice chat. For example 60 means that every 60 seconds, the user will receive XP whilst in the VC.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"afkvc"),(0,a.kt)("td",{parentName:"tr",align:"center"},"#\ud83d\udd57AFK"),(0,a.kt)("td",{parentName:"tr",align:null},"This should be set to an AFK channel where gaining XP is blacklisted due to inactivity so no XP is given.")))),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"It is recommended that you stick to the default values if you do not know what you are doing. These values are automatically applied when you first toggle the feature on.")),(0,a.kt)("p",null,"An example of setting the XP system settings:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"img",src:n(6950).Z,width:"1022",height:"243"})),(0,a.kt)("h2",{id:"configuring-role-level-rewards"},"Configuring role level rewards"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"You can use the command ",(0,a.kt)("strong",{parentName:"p"},"/xp rewards")," in order to check what the current level role rewards are!")),(0,a.kt)("p",null,'An additional feature, is to give roles to users once they cross a certain level threshold. This is very easily configured, using the "/xpsystem roleadd" command. The two arguments for this command are the role to give to the user and the level at which this should occur. Alternatively, you can use "/xproleremove" with a role argument to remove a role reward.'),(0,a.kt)("p",null,"An example of adding an XP Role reward:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"img",src:n(8782).Z,width:"1022",height:"208"})),(0,a.kt)("p",null,"And... that's it! The XP System is now fully configured and requires no other configuration."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"There are many more commands that can be used within the XP System including leaderboards and more! Check these out within the ",(0,a.kt)("a",{parentName:"p",href:"xp-user-feature"},"user commands section"),".")))}d.isMDXComponent=!0},8782:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/xpsystemroleadd-example-fcbb217af792ab3ccd8a66e82185a26d.png"},6950:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/xpsystemsettings-example-4b6d3430e27827eb727abb70ab21dccc.png"},1271:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/xpsystemtoggle-example-50ab6f1615b8d78d353c7901327d45b0.png"}}]);