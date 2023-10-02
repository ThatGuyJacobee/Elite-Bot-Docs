"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1499],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),u=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(r),h=n,d=p["".concat(l,".").concat(h)]||p[h]||m[h]||o;return r?a.createElement(d,i(i({ref:t},c),{},{components:r})):a.createElement(d,i({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:n,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},8459:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var a=r(7462),n=(r(7294),r(3905));const o={slug:"elite-music-v1.4",title:"Elite Music updates!",authors:"jacob",tags:["Elite-Music","Music","Update"]},i=void 0,s={permalink:"/blog/elite-music-v1.4",editUrl:"https://github.com/ThatGuyJacobee/Elite-Bot-Docs/edit/main/blog/2023-10-02-elite-music-v1.4.md",source:"@site/blog/2023-10-02-elite-music-v1.4.md",title:"Elite Music updates!",description:"Great news for Elite Music users, the bot has recently had a bunch of awesome improvements over the past two revisions... now available on the GitHub Repository! \ud83c\udf89",date:"2023-10-02T00:00:00.000Z",formattedDate:"October 2, 2023",tags:[{label:"Elite-Music",permalink:"/blog/tags/elite-music"},{label:"Music",permalink:"/blog/tags/music"},{label:"Update",permalink:"/blog/tags/update"}],readingTime:1.755,hasTruncateMarker:!0,authors:[{name:"ThatGuyJacobee",title:"Developer",url:"https://github.com/ThatGuyJacobee",imageURL:"https://avatars.githubusercontent.com/u/42719082?v=4",key:"jacob"}],frontMatter:{slug:"elite-music-v1.4",title:"Elite Music updates!",authors:"jacob",tags:["Elite-Music","Music","Update"]},nextItem:{title:"Elite Music v1.2 Out Now!",permalink:"/blog/elite-music-v1.2"}},l={authorsImageUrls:[void 0]},u=[{value:"Headline Improvements",id:"headline-improvements",level:2},{value:"First time hearing of Elite Music? \ud83d\udc40",id:"first-time-hearing-of-elite-music-",level:2}],c={toc:u},p="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Great news for Elite Music users, the bot has recently had a bunch of awesome improvements over the past two revisions... now available on the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/ThatGuyJacobee/Elite-Music"},"GitHub Repository"),"! \ud83c\udf89"),(0,n.kt)("h2",{id:"headline-improvements"},"Headline Improvements"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Docker Support \ud83d\udc33 - Elite Music can now be installed via Docker Image ",(0,n.kt)("a",{parentName:"li",href:"https://hub.docker.com/r/thatguyjacobee/elitemusic"},"via Docker Hub")," or through Docker Compose!"),(0,n.kt)("li",{parentName:"ul"},"Play command searching \ud83d\udd0d - The regular play command will now return a search embed if more than one result is found for your query."),(0,n.kt)("li",{parentName:"ul"},"Environment improvements \ud83e\uddd1\u200d\ud83d\udcbb - Added versioning to the .env configuration to ensure users do not miss out on new features in the future! Also deprecated redundant options."),(0,n.kt)("li",{parentName:"ul"},"Plex Search Accuracy \ud83c\udfaf - Plex commands will now be substantially more accurate when searching for songs in your Plex Media Server library."),(0,n.kt)("li",{parentName:"ul"},"Wide variety of bug fixes \ud83d\udc1b - A great amount of reported bugs have been resolved, including issues with Spotify url playback and more.")),(0,n.kt)("p",null,"Get the latest v1.4 update as well as an extensive list of update notes through our ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/ThatGuyJacobee/Elite-Music/releases"},"GitHub Repository Releases")," section and make sure to leave a star! \ud83d\udcaa\u2764\ufe0f\u2b50"),(0,n.kt)("p",null,"Make sure to also update your environment using the latest ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/ThatGuyJacobee/Elite-Music/blob/main/.env.example"},".env.sample")," file to ensure that you do not miss out on any of the latest features!"),(0,n.kt)("p",null,"Thank you for reading ~ Jacob \u2764\ufe0f"),(0,n.kt)("h2",{id:"first-time-hearing-of-elite-music-"},"First time hearing of Elite Music? \ud83d\udc40"),(0,n.kt)("p",null,"Elite Music is a feature-packed open-source Discord Music Bot built on top of ",(0,n.kt)("a",{parentName:"p",href:"https://discord.js.org/"},"discord.js")," & using the latest ",(0,n.kt)("a",{parentName:"p",href:"https://discord-player.js.org/"},"discord-player")," package."))}m.isMDXComponent=!0}}]);