"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[3608],{63012:function(e,t,a){a.r(t),a.d(t,{default:function(){return m}});var r=a(67294),n=a(99067),l=a(39960),c=a(95999);function i(e){var t=e.year,a=e.posts;return r.createElement(r.Fragment,null,r.createElement("h3",null,t),r.createElement("ul",null,a.map((function(e){return r.createElement("li",{key:e.metadata.date},r.createElement(l.Z,{to:e.metadata.permalink},e.metadata.formattedDate," - ",e.metadata.title))}))))}function s(e){var t=e.years;return r.createElement("section",{className:"margin-vert--lg"},r.createElement("div",{className:"container"},r.createElement("div",{className:"row"},t.map((function(e,t){return r.createElement("div",{key:t,className:"col col--4 margin-vert--lg"},r.createElement(i,e))})))))}function m(e){var t,a,l=e.archive,i=(0,c.I)({id:"theme.blog.archive.title",message:"Archive",description:"The page & hero title of the blog archive page"}),m=(0,c.I)({id:"theme.blog.archive.description",message:"Archive",description:"The page & hero description of the blog archive page"}),o=(t=l.blogPosts,a=t.reduceRight((function(e,t){var a=t.metadata.date.split("-")[0],r=e.get(a)||[];return e.set(a,[t].concat(r))}),new Map),Array.from(a,(function(e){return{year:e[0],posts:e[1]}})));return r.createElement(n.Z,{title:i,description:m},r.createElement("header",{className:"hero hero--primary"},r.createElement("div",{className:"container"},r.createElement("h1",{className:"hero__title"},i),r.createElement("p",{className:"hero__subtitle"},m))),r.createElement("main",null,o.length>0&&r.createElement(s,{years:o})))}},96196:function(e,t,a){var r=a(87462),n=a(63366),l=a(67294),c=["width","height"];t.Z=function(e){e.width,e.height;var t=(0,n.Z)(e,c);return l.createElement("svg",(0,r.Z)({t:"1631348384596",className:"icon",viewBox:"0 0 1024 1024",version:"1.1"},t,{"p-id":"557",width:"20",height:"20"}),l.createElement("path",{d:"M547.797333 638.208l-104.405333-103.168 1.237333-1.28a720.170667 720.170667 0 0 0 152.490667-268.373333h120.448V183.082667h-287.744V100.906667H347.605333v82.218666H59.818667V265.386667h459.178666a648.234667 648.234667 0 0 1-130.304 219.946666 643.242667 643.242667 0 0 1-94.976-137.728H211.541333a722.048 722.048 0 0 0 122.453334 187.434667l-209.194667 206.378667 58.368 58.368 205.525333-205.525334 127.872 127.829334 31.232-83.84m231.424-208.426667h-82.218666l-184.96 493.312h82.218666l46.037334-123.306667h195.242666l46.464 123.306667h82.218667l-185.002667-493.312m-107.690666 287.744l66.56-178.005333 66.602666 178.005333z",fill:"currentColor","p-id":"558"}))}}}]);