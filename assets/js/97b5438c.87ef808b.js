"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[18],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),l=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(u.Provider,{value:t},e.children)},m="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(n),p=r,h=m["".concat(u,".").concat(p)]||m[p]||g[p]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[m]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7716:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const o={id:"countinggamefeature",title:"Counting Game Feature",slug:"/counting-game-feature"},i=void 0,s={unversionedId:"countinggamefeature",id:"countinggamefeature",title:"Counting Game Feature",description:"How does this work?",source:"@site/docs/countinggamefeature.md",sourceDirName:".",slug:"/counting-game-feature",permalink:"/docs/counting-game-feature",draft:!1,editUrl:"https://github.com/ThatGuyJacobee/Elite-Bot-Docs/edit/main/docs/countinggamefeature.md",tags:[],version:"current",frontMatter:{id:"countinggamefeature",title:"Counting Game Feature",slug:"/counting-game-feature"},sidebar:"someSidebar",previous:{title:"Custom Embed Feature",permalink:"/docs/custom-embed-feature"},next:{title:"ChatGPT Feature",permalink:"/docs/chatgpt-feature"}},u={},l=[{value:"How does this work?",id:"how-does-this-work",level:2},{value:"Playing the game",id:"playing-the-game",level:2}],c={toc:l},m="wrapper";function g(e){let{components:t,...o}=e;return(0,r.kt)(m,(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"how-does-this-work"},"How does this work?"),(0,r.kt)("p",null,"The counting game is a game where you count... as funny as it sounds \ud83d\ude00. In essence, you first setup the game by setting the channel and a few configuration options including the choice to count up in integers or binary (for a challenge \ud83d\ude0e). After it is setup, any user can now count up within the channel to reach milestones, without making a mistake or the same user counting twice in a row if you choose to set it as that. The ultimate aim of the game, is to simply for the community to count as high as they can, with a cross-guild leaderboard coming soon\u2122\ufe0f to compete for the highest place!"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Command"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Example"),(0,r.kt)("th",{parentName:"tr",align:null},"Usage"),(0,r.kt)("th",{parentName:"tr",align:null},"Permission"),(0,r.kt)("th",{parentName:"tr",align:null},"Timeout"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"/countgame config"),(0,r.kt)("td",{parentName:"tr",align:"center"},"/countgame config ","[#channel][gamemode]"," ","[resetwrong][sameuser]"),(0,r.kt)("td",{parentName:"tr",align:null},"Change multiple configuration settings for the join roles feature using this command!"),(0,r.kt)("td",{parentName:"tr",align:null},"Manage Events"),(0,r.kt)("td",{parentName:"tr",align:null},"30 secs")))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Here are the configuration options explained in depth:\n-> Gamemode: You can pick for users to count in either integer (1..2..3..etc) or in binary for a challenge (1..01..11..etc).\n-> Resetwrong: This is set to true/false and configures whether the count should reset to 0 after a wrong answer.\n-> Sameuser: This is also set to true/false and configures whether a same user is allowed to count more than once in a row.")),(0,r.kt)("h2",{id:"playing-the-game"},"Playing the game"),(0,r.kt)("p",null,'Once you configure the game, an embed which shows the configured game "rules" will show up. It may be best to pin this message in-case a user needs to see what the rules are. Afterwards, simply begin counting as easy as that!'),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Any non-numerical messages are instantly deleted to prevent clutter. Moreover, messages warning users that they wrote the incorrect next number delete after 15 seconds, unless it's a reset message which will remain as it is important to the game.")),(0,r.kt)("p",null,"An example of the game showing all config options in effect:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"img",src:n(4164).Z,width:"1480",height:"1111"})))}g.isMDXComponent=!0},4164:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/countgame-example-a5e0b22166c13747005788de4edc0503.png"}}]);