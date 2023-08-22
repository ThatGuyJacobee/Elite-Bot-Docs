"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6348],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>h});var n=o(7294);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,i=function(e,t){if(null==e)return{};var o,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(o),m=i,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||a;return o?n.createElement(h,r(r({ref:t},u),{},{components:o})):n.createElement(h,r({ref:t},u))}));function h(e,t){var o=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=o.length,r=new Array(a);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:i,r[1]=l;for(var p=2;p<a;p++)r[p]=o[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},566:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=o(7462),i=(o(7294),o(3905));const a={id:"installationelitemusic",title:"Installation \ud83d\udd0c",slug:"/installation-elite-music"},r=void 0,l={unversionedId:"installationelitemusic",id:"installationelitemusic",title:"Installation \ud83d\udd0c",description:"Setting up your own bot using Elite Music is quite simple. Ensure that you follow the prerequisites section first, before heading over and continuing with the main setup. \ud83d\udc4d",source:"@site/docs/installationelitemusic.md",sourceDirName:".",slug:"/installation-elite-music",permalink:"/docs/installation-elite-music",draft:!1,editUrl:"https://github.com/ThatGuyJacobee/Elite-Bot-Docs/edit/main/docs/installationelitemusic.md",tags:[],version:"current",frontMatter:{id:"installationelitemusic",title:"Installation \ud83d\udd0c",slug:"/installation-elite-music"},sidebar:"someSidebar",previous:{title:"Welcome to Elite Music Docs \ud83d\udc4b",permalink:"/docs/getting-started-music"},next:{title:"Optional Features \u2705",permalink:"/docs/additional-optional-features"}},s={},p=[{value:"Prerequisites \ud83d\udec2",id:"prerequisites-",level:2},{value:"Setup \ud83d\udd27",id:"setup-",level:2},{value:"Basic download",id:"basic-download",level:4},{value:"Download using Git",id:"download-using-git",level:4},{value:"Continuing the Setup",id:"continuing-the-setup",level:4}],u={toc:p},d="wrapper";function c(e){let{components:t,...o}=e;return(0,i.kt)(d,(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Setting up your own bot using Elite Music is quite simple. Ensure that you follow the prerequisites section ",(0,i.kt)("strong",{parentName:"p"},"first"),", before heading over and continuing with the main setup. \ud83d\udc4d"),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Want to test out and demo the bot before hosting and configuring it yourself?"),(0,i.kt)("p",{parentName:"admonition"},"You can ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://discord.com/oauth2/authorize?client_id=528660579208921098&permissions=274881129536&scope=bot%20applications.commands",title:"Discord OAuth2"},"invite Elite Music to your server here"))," to test it out!")),(0,i.kt)("h2",{id:"prerequisites-"},"Prerequisites \ud83d\udec2"),(0,i.kt)("p",null,"In order for the bot to function correctly, there are a few prerequisites that you must have on your system."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://nodejs.org/en"},"NodeJS")," - For the bot to function, it must be running in a NodeJS environment running on v16.9.0 or higher. It is highly recommended that you download the LTS build which is available for your OS to remain on the latest stable version. Head over to the ",(0,i.kt)("a",{parentName:"p",href:"https://nodejs.org/en/download"},"NodeJS Download website")," to download and install an appropriate version.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://ffmpeg.org/"},"FFmpeg")," or Avconv - You will require either of these for transcoding. It is recommended to use FFmpeg. By default, the bot comes with the ",(0,i.kt)("inlineCode",{parentName:"p"},"ffmpeg-static")," binaries as a dependency which allows the bot to work out of the box. Alternatively, you may decide to set your own ffmpeg binaries. In this case, head over to the ",(0,i.kt)("a",{parentName:"p",href:"https://ffmpeg.org/download.html"},"FFmpeg Download website"),", select your OS and download the appropriate package. You can then place ",(0,i.kt)("inlineCode",{parentName:"p"},"FFMPEG_PATH")," as a new option into your ",(0,i.kt)("inlineCode",{parentName:"p"},".ENV")," file stating the custom path to your custom FFmpeg binaries.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://discord.com/developers/applications"},"Discord Bot Account")," - You must register a bot on the Discord Developer site to access a token to run the bot. Head over to the ",(0,i.kt)("a",{parentName:"p",href:"https://discord.com/developers/applications"},"Developer website")," and click on ",(0,i.kt)("inlineCode",{parentName:"p"},"New Application")," button. Provide a name and press ",(0,i.kt)("inlineCode",{parentName:"p"},"Create"),". Next on the left-hand menu, select the ",(0,i.kt)("inlineCode",{parentName:"p"},"Bot")," section and press ",(0,i.kt)("inlineCode",{parentName:"p"},"Add Bot")," alongside the confirmation. Finally, press ",(0,i.kt)("inlineCode",{parentName:"p"},"Reset Token")," and finally copy the token and keep it safe. This is what you will have to place into your ",(0,i.kt)("inlineCode",{parentName:"p"},".ENV")," file for the bot to function."))),(0,i.kt)("h2",{id:"setup-"},"Setup \ud83d\udd27"),(0,i.kt)("p",null,"The first step is to clone the repository or download it manually as a folder to host it directly. The Git option is recommended for more advanced users and for users who already have it installed."),(0,i.kt)("h4",{id:"basic-download"},"Basic download"),(0,i.kt)("p",null,"Head over to the download page and download the .zip source code. Next, using a tool such as ",(0,i.kt)("a",{parentName:"p",href:"https://www.7-zip.org/"},"7-Zip"),", extract the files from the .zip folder. You can now move on to the following steps."),(0,i.kt)("h4",{id:"download-using-git"},"Download using Git"),(0,i.kt)("p",null,"An alternative way to download the repository is through the usage of ",(0,i.kt)("a",{parentName:"p",href:"https://git-scm.com/"},"Git"),". If you do not have Git installed, please use the basic download method. Git users can run the command ",(0,i.kt)("inlineCode",{parentName:"p"},"git clone https://github.com/ThatGuyJacobee/Elite-Bot-Music/tree/main")," to automatically clone the repository to a new folder."),(0,i.kt)("h4",{id:"continuing-the-setup"},"Continuing the Setup"),(0,i.kt)("p",null,"Now that you have downloaded the repository, you can continue with the following steps."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Open a new command/shell/terminal window within your new folder. You should be able to right-click and open the Windows terminal/command prompt if on Windows."),(0,i.kt)("li",{parentName:"ol"},"Run the command ",(0,i.kt)("inlineCode",{parentName:"li"},"npm install")," to download all of the module dependencies."),(0,i.kt)("li",{parentName:"ol"},"Rename the file ",(0,i.kt)("inlineCode",{parentName:"li"},".env.example")," to simply ",(0,i.kt)("inlineCode",{parentName:"li"},".env"),". Once down, edit the ",(0,i.kt)("inlineCode",{parentName:"li"},".env")," file with the configuration options that you would like!"),(0,i.kt)("li",{parentName:"ol"},"Finally, run your bot using ",(0,i.kt)("inlineCode",{parentName:"li"},"node .")," within a command/shell/terminal window. The bot should now become online and provide a success message if everything was configured correctly. \ud83c\udf89"),(0,i.kt)("li",{parentName:"ol"},"(Optional) If you are editing the code, you can use ",(0,i.kt)("inlineCode",{parentName:"li"},"npm run dev")," within your IDE to activate nodemon, which will automatically restart the bot on any change which is ideal for development.")),(0,i.kt)("p",null,"Of course, you need to add your bot to your server now in order to use it. Follow this ",(0,i.kt)("a",{parentName:"p",href:"https://discordjs.guide/preparations/adding-your-bot-to-servers.html#bot-invite-links"},"useful guide")," from the discord.js Guide which explains how to do this with great detail if you need help understanding how to do this."),(0,i.kt)("p",null,"Congratulations! Just like that, you have setup your own bot using Elite Bot and invited it to your server! \ud83c\udf89"))}c.isMDXComponent=!0}}]);