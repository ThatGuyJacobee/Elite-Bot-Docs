"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9564],{6356:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var i=o(4848),n=o(8453);const a={id:"optionalfeaturesmusic",title:"Optional Features \u2705",slug:"/additional-optional-features"},s=void 0,r={id:"optionalfeaturesmusic",title:"Optional Features \u2705",description:"You may decide to want to enable additional optional features for your bot. Follow the appropriate sub-heading to learn how to set up and enable the selected feature!",source:"@site/docs/optionalfeaturesmusic.md",sourceDirName:".",slug:"/additional-optional-features",permalink:"/docs/additional-optional-features",draft:!1,unlisted:!1,editUrl:"https://github.com/ThatGuyJacobee/Elite-Bot-Docs/edit/main/docs/optionalfeaturesmusic.md",tags:[],version:"current",frontMatter:{id:"optionalfeaturesmusic",title:"Optional Features \u2705",slug:"/additional-optional-features"},sidebar:"someSidebar",previous:{title:"Installation \ud83d\udd0c",permalink:"/docs/installation-elite-music"},next:{title:"Music Commands \ud83c\udfb5",permalink:"/docs/music-commands"}},l={},c=[{value:"Plex Media Server playback",id:"plex-media-server-playback",level:3},{value:"DJ Mode",id:"dj-mode",level:3}];function d(e){const t={a:"a",code:"code",h3:"h3",li:"li",ol:"ol",p:"p",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"You may decide to want to enable additional optional features for your bot. Follow the appropriate sub-heading to learn how to set up and enable the selected feature!"}),"\n",(0,i.jsxs)(t.p,{children:["If you are missing the relevant option in your environmental (",(0,i.jsx)(t.code,{children:".env"}),") file, make sure to check the latest ",(0,i.jsxs)(t.a,{href:"https://github.com/ThatGuyJacobee/Elite-Music/blob/main/.env.example",children:[(0,i.jsx)(t.code,{children:".env.sample"})," file"]})," to ensure you are on the latest version."]}),"\n",(0,i.jsxs)(t.p,{children:["Once you have followed the appropriate steps for the optional feature that you want to enable, you should start the bot and ensure that the configuration option returns as ",(0,i.jsx)(t.code,{children:"true"})," when the configuration loads. If the feature still shows as disabled, this suggests that you have a configuration error. Follow the error logs that are provided in your console to resolve this. If you are still having trouble with your issue, feel free to create an issue on the ",(0,i.jsx)(t.a,{href:"https://github.com/ThatGuyJacobee/Elite-Music/issues/new",children:"repository"})," or join the ",(0,i.jsx)(t.a,{href:"https://discord.elitegami.ng",children:"Support Discord server"}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"plex-media-server-playback",children:"Plex Media Server playback"}),"\n",(0,i.jsxs)(t.p,{children:["The Plex optional feature when enabled, allows you to stream music directly from your Plex Media Server through the /plex command. In order to enable the Plex feature, you must go into your ",(0,i.jsx)(t.code,{children:".env"})," file and set up the configuration to your own Plex Media Server."]}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["Firstly, set ",(0,i.jsx)(t.code,{children:"ENABLE_PLEX"})," to ",(0,i.jsx)(t.code,{children:"true"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["Next, you must provide a direct URL to your Plex Media Center. The default port that Plex Media Server runs on is ",(0,i.jsx)(t.code,{children:"32400"}),". You can test that your ",(0,i.jsx)(t.code,{children:"PLEX_SERVER"})," URL is correct, by pasting it into any web browser, and it should load successfully with a login page."]}),"\n",(0,i.jsxs)(t.li,{children:["Finally, you must place your plex authentication token into the ",(0,i.jsx)(t.code,{children:"PLEX_AUTHTOKEN"})," field. You can do this by browsing the XML file for a library item. Please follow the ",(0,i.jsx)(t.a,{href:"https://support.plex.tv/articles/204059436-finding-an-authentication-token-x-plex-token/",children:"official Plex Support article"})," to access your token. Once you have access to it, place it into your .env file."]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"dj-mode",children:"DJ Mode"}),"\n",(0,i.jsx)(t.p,{children:"Elite Music comes with a DJ Mode optional feature, which locks down the use of commands and interactions to members who have the specified DJ Role."}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["Firstly, set ",(0,i.jsx)(t.code,{children:"ENABLE_DJMODE"})," to ",(0,i.jsx)(t.code,{children:"true"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["Now create a role on your server which you wish to be used as the DJ Role. Copy the ID of the role and place it into the ",(0,i.jsx)(t.code,{children:"DJ_ROLE"})," field."]}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,t,o)=>{o.d(t,{R:()=>s,x:()=>r});var i=o(6540);const n={},a=i.createContext(n);function s(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);