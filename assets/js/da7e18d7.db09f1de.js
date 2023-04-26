"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[391],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>h});var n=o(7294);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,i=function(e,t){if(null==e)return{};var o,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var l=n.createContext({}),u=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},d=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=u(o),m=i,h=c["".concat(l,".").concat(m)]||c[m]||p[m]||r;return o?n.createElement(h,a(a({ref:t},d),{},{components:o})):n.createElement(h,a({ref:t},d))}));function h(e,t){var o=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=o.length,a=new Array(r);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:i,a[1]=s;for(var u=2;u<r;u++)a[u]=o[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},5787:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var n=o(7462),i=(o(7294),o(3905));const r={id:"gettingstarted",title:"Welcome to Elite Bot Docs",slug:"/"},a=void 0,s={unversionedId:"gettingstarted",id:"gettingstarted",title:"Welcome to Elite Bot Docs",description:"Elite Bot is a highly customisable and feature packed Discord Bot with simple setup and in-depth documentation.",source:"@site/docs/gettingstarted.md",sourceDirName:".",slug:"/",permalink:"/docs/",draft:!1,editUrl:"https://github.com/ThatGuyJacobee/Elite-Bot-Docs/edit/main/docs/gettingstarted.md",tags:[],version:"current",frontMatter:{id:"gettingstarted",title:"Welcome to Elite Bot Docs",slug:"/"},sidebar:"someSidebar",next:{title:"Adding Elite Bot",permalink:"/docs/adding-elite-bot"}},l={},u=[{value:"Navigating the Docs",id:"navigating-the-docs",level:2},{value:"Reporting Elite Bot bugs",id:"reporting-elite-bot-bugs",level:2},{value:"Improving these docs",id:"improving-these-docs",level:2},{value:"Key Admonitions",id:"key-admonitions",level:2}],d={toc:u},c="wrapper";function p(e){let{components:t,...o}=e;return(0,i.kt)(c,(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Elite Bot is a highly customisable and feature packed Discord Bot with simple setup and in-depth documentation."),(0,i.kt)("p",null,"This documentation provides you with all information about each command/module, including usage, examples and customisation options."),(0,i.kt)("p",null,"For any additional support, head over to our ",(0,i.kt)("a",{parentName:"p",href:"http://discord.eguk.me"},"Discord server"),"!"),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},'For quickest support, head over to the "EG | Elite Bot" category on our discord!')),(0,i.kt)("h2",{id:"navigating-the-docs"},"Navigating the Docs"),(0,i.kt)("p",null,"Use the left-side bar to navigate around different parts of the documentations. Within each category, there are sub-topics with different information about commands/modules or other features of Elite Bot."),(0,i.kt)("p",null,'If you think that something is missing across any parts of the documentation, you may use "Edit this page" to create a github request for change (reviewed daily). Alternatively, you can head over to our Discord server and report an Docs issue there.'),(0,i.kt)("h2",{id:"reporting-elite-bot-bugs"},"Reporting Elite Bot bugs"),(0,i.kt)("p",null,"We're sorry to hear that you encountered an issue. It's our top priority to assist anyone who's experiencing any abnormalities with Elite Bot.\nIf you or anyone else in your community encounter any problems with Elite Bot on your Discord server, you may report it by:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Joining our ",(0,i.kt)("a",{parentName:"li",href:"http://discord.eguk.me"},"Discord server"),' and using the #support channel in the "EG | Elite Bot" category'),(0,i.kt)("li",{parentName:"ul"},"Using the /bugreport command built-in to Elite Bot which sends some logs our way alongside your message and supporting details")),(0,i.kt)("p",null,"Once we receive your bug report, we may proceed to do more debugging in order to find the root cause of the bug and to fix it. This may involve some action from you depending on the scenario."),(0,i.kt)("h2",{id:"improving-these-docs"},"Improving these docs"),(0,i.kt)("p",null,"If you have any suggestions or would like to contribute to this documentation, you may do so by either accessing the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ThatGuyJacobee/Elite-Bot-Docs"},"GitHub Page"),' or pressing the "Edit this page" button under each section which will directly allow you to contribute and edit.'),(0,i.kt)("p",null,"Commit changes will be looked at and replied to at the latest available opportunity. I'm deeply greatful for any commits and improvements \ud83d\ude01"),(0,i.kt)("h2",{id:"key-admonitions"},"Key Admonitions"),(0,i.kt)("p",null,"Across the Docs you'll see a range of different admonitions being used to improve user experience and to highlight certain infomation."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"This is used to show any additional notes that may become useful.")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"This is used to show tips for the user.")),(0,i.kt)("admonition",{type:"important"},(0,i.kt)("p",{parentName:"admonition"},"This is used to state important infomation across the docs.")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"This is used warn you to be careful within a process.")),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"This is used to show crucial infomation and to warn about something. Will also be used to show known bugs and depriciated features.")))}p.isMDXComponent=!0}}]);