(this["webpackJsonpmoodle-learning-analytics"]=this["webpackJsonpmoodle-learning-analytics"]||[]).push([[0],{45:function(e,t,s){},46:function(e,t,s){"use strict";s.r(t);var l=s(2),a=s.n(l),c=s(18),n=s.n(c),o=s(47),i=s(48),r=s(49),d=s(50),x=s(51),j=s(52),m=s(53),u=s(1),f=function(e){return Object(u.jsxs)("div",{className:"flex flex-col max-w-md h-auto",children:[Object(u.jsxs)("div",{className:"flex gap-x-4 items-center",children:[Object(u.jsx)("div",{className:"flex bg-indigo-200 rounded-md w-12 h-12 place-items-center justify-center",children:e.feature.icon}),Object(u.jsxs)("div",{className:"font-bold text-xl flex-1",children:[" ",e.feature.title," "]})]}),Object(u.jsxs)("div",{className:"flex flex-col pl-16",children:[Object(u.jsxs)("p",{className:"max-w-full",children:[" ",e.feature.description," "]}),Object(u.jsx)("span",{className:"place-self-end font-bold text-sm mt-4",children:Object(u.jsx)("a",{href:"#",children:e.feature.extra})})]})]})},b=function(e){var t=[{title:"Cross-platform",description:"MLA works across operating systems. Use it on OS X, Windows or Linux.",icon:Object(u.jsx)(o.a,{size:24})},{title:"Portable",description:"Use it on the go. No installation is required.",icon:Object(u.jsx)(i.a,{size:24}),extra:"More information"},{title:"Private",description:"Process all the data in your local computer. Your data is yours and only yours.",icon:Object(u.jsx)(r.b,{size:24}),extra:"More information"},{title:"File system browser",description:"Easily browse and open Moodle log files.",icon:Object(u.jsx)(d.a,{size:24})}],s=[{title:"Plugins",description:"Enhance and power-up MLA with plugins. Add extra features to the application.",icon:Object(u.jsx)(x.a,{size:24})},{title:"Dark mode",description:"For night owls. Only one click away to turn everything dark. Toggle it on or off as you prefer.",icon:Object(u.jsx)(j.a,{size:24})},{title:"Customizable",description:"Modify the application according to your needs.",icon:Object(u.jsx)(m.a,{size:24})},{title:"Themes",description:"MLA ships pre-installed with UI themes in both dark and light colours. Can't find what you're looking for? Create your own.",icon:Object(u.jsx)(i.b,{size:24})}];return Object(u.jsxs)("section",{id:"features",className:"flex flex-col min-h-screen w-full m-auto justify-center content-center gap-y-20\r px-20 md:px-32 lg:42 2xl:px-96",children:[Object(u.jsx)("h1",{className:"flex text-3xl justify-center font-bold md:justify-start md:font-normal",children:" Got you covered "}),Object(u.jsx)("div",{className:"grid grid-cols-1 lg:grid-cols-2 auto-rows-auto gap-10 gap-y-20",children:t.map((function(e,t){return Object(u.jsx)(f,{feature:e},t)}))}),Object(u.jsx)("h1",{className:"flex text-3xl justify-center md:justify-start",children:" Make it yours "}),Object(u.jsx)("div",{className:"grid grid-cols-1 lg:grid-cols-2 auto-rows-auto gap-10 gap-y-20",children:s.map((function(e,t){return Object(u.jsx)(f,{feature:e},t)}))})]})},h=s(20),p=s(21),O=function(e){return Object(u.jsx)("button",{type:"button",className:"bg-indigo-300 rounded-md px-5 py-3 hover:bg-indigo-400 ".concat(""===e.download_url?"cursor-not-allowed":""),children:Object(u.jsxs)("div",{className:"flex items-center",children:[Object(u.jsx)(j.b,{className:"mr-2"}),""!==e.download_url?Object(u.jsx)("a",{href:e.download_url,download:!0,children:"Download"}):"Download"]})})},g=function(e){return Object(u.jsxs)("div",{className:"flex flex-col border-2 border-indigo-400 rounded-md p-10\r hover:bg-indigo-200 place-items-center gap-y-5",children:[Object(u.jsx)("div",{className:"flex flex-auto",children:e.os.icon}),Object(u.jsx)("span",{className:"flex flex-auto",children:e.os.name}),Object(u.jsx)(O,{download_url:e.os.download_url})]})},w=s.p+"static/media/mla_logo.75de0684.svg",y=s(19),v=s.n(y),N=function(e){var t=Object(l.useState)([{name:"Windows",download_url:"",icon:Object(u.jsx)(r.c,{size:64})},{name:"Windows Portable",download_url:"",icon:Object(u.jsx)(r.c,{size:64})},{name:"macOS",download_url:"",icon:Object(u.jsx)(r.a,{size:64})},{name:"Linux",download_url:"",icon:Object(u.jsx)(x.b,{size:64})}]),s=Object(p.a)(t,2),a=s[0],c=s[1];return Object(l.useEffect)((function(){v.a.get("https://api.github.com/repos/LS-LEDA/MLA/releases").then((function(e){var t=e.data[0].assets,s=Object(h.a)(a);t.forEach((function(e){"application/octet-stream"===e.content_type&&e.name.includes("Setup")&&(s[0].download_url=e.browser_download_url),"application/octet-stream"!==e.content_type||e.name.includes("Setup")||(s[1].download_url=e.browser_download_url)})),c(s)}))}),[a]),Object(u.jsx)("section",{className:"flex w-full h-screen",children:Object(u.jsxs)("div",{className:"flex flex-col w-full h-full justify-center place-items-center gap-y-20",children:[Object(u.jsx)("h1",{className:"flex w-auto text-6xl font-bold",children:" Moodle Learning Analytics "}),Object(u.jsx)("img",{src:w,alt:"MLA Logo",width:128}),Object(u.jsx)("div",{className:"flex flex-col gap-y-20 md:flex-row md:gap-x-20",children:a.map((function(e,t){return Object(u.jsx)(g,{os:e},t)}))})]})})},_=function(e){return Object(u.jsxs)("div",{className:"flex flex-col w-full bg-white rounded-md shadow-lg p-5",children:[Object(u.jsx)("span",{className:"text-gray-500",children:e.event.date}),Object(u.jsx)("p",{className:"text-base",children:e.event.message})]})},k=function(){return Object(u.jsx)("div",{className:"min-h-screen w-full py-6 flex flex-col justify-center sm:py-12",children:Object(u.jsx)("div",{className:"py-3 sm:max-w-xl sm:mx-auto w-full px-2 sm:px-0",children:Object(u.jsxs)("div",{className:"relative text-gray-700 antialiased text-sm font-semibold",children:[Object(u.jsx)("div",{className:"hidden sm:block w-1 bg-indigo-400 absolute h-full left-1/2 transform -translate-x-1/2"}),[{message:"Windows platform release v1.0.0 .",date:"December 12th, 2021"},{message:"macOS & Linux platforms release v1.0.0 .",date:"To Be Announced"},{message:"Micro-services back-end with API. Better data processing performance and additional features."},{message:"Mobile application for `on the go` use."}].map((function(e,t){return Object(u.jsx)("div",{className:"mt-10 sm:mt-0 sm:mb-12",children:Object(u.jsxs)("div",{className:"flex flex-col sm:flex-row items-center",children:[Object(u.jsx)("div",{className:"flex w-full mx-auto items-center\n                                                        ".concat(t%2!==0?"justify-start":"justify-end"),children:Object(u.jsx)("div",{className:"w-full sm:w-1/2 ".concat(t%2!==0?"sm:pr-8":"sm:pl-8"),children:Object(u.jsx)(_,{event:e},t)})}),Object(u.jsx)("div",{className:"rounded-full bg-indigo-300 border-white border-4 w-10 h-10\r absolute left-1/2 -translate-y-4 sm:translate-y-0 transform\r -translate-x-1/2 flex items-center justify-center"})]})})}))]})})})},M=function(){return Object(u.jsxs)("section",{id:"roadmap",className:"flex w-full bg-indigo-200",children:[Object(u.jsxs)("div",{className:"flex flex-col w-1/2 align-middle m-auto pl-20 hidden lg:block",children:[Object(u.jsx)("h1",{className:"font-black text-7xl 2xl:text-9xl",children:"MLA"}),Object(u.jsx)("h1",{className:"font-black text-7xl 2xl:text-9xl",children:"Development"}),Object(u.jsx)("h1",{className:"font-black text-7xl 2xl:text-9xl",children:"Roadmap"})]}),Object(u.jsx)("div",{className:"flex w-full lg:w-1/2",children:Object(u.jsx)(k,{})})]})};var z=function(){return Object(u.jsxs)("div",{className:"content-center",children:[Object(u.jsx)(N,{}),Object(u.jsx)(b,{}),Object(u.jsx)(M,{})]})};s(45);n.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(z,{})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.8ccbb4f0.chunk.js.map