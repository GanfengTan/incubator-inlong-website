"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[2417],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return g}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=s(n),g=i,h=f["".concat(l,".").concat(g)]||f[g]||d[g]||a;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},857:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return f}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),o=["components"],c={title:"Architecture"},l=void 0,s={unversionedId:"modules/agent/architecture",id:"modules/agent/architecture",isDocsHomePage:!1,title:"Architecture",description:"1. Overview of InLong-Agent",source:"@site/docs/modules/agent/architecture.md",sourceDirName:"modules/agent",slug:"/modules/agent/architecture",permalink:"/docs/next/modules/agent/architecture",editUrl:"https://github.com/apache/incubator-inlong-website/edit/master/docs/modules/agent/architecture.md",tags:[],version:"current",frontMatter:{title:"Architecture"},sidebar:"tutorialSidebar",previous:{title:"Build && Deployment",permalink:"/docs/next/modules/website/quick_start"},next:{title:"Build && Deployment",permalink:"/docs/next/modules/agent/quick_start"}},u=[{value:"1. Overview of InLong-Agent",id:"1-overview-of-inlong-agent",children:[{value:"The brief architecture diagram is as follows:",id:"the-brief-architecture-diagram-is-as-follows",children:[]},{value:"design concept",id:"design-concept",children:[]},{value:"Current status of use",id:"current-status-of-use",children:[]}]},{value:"2. InLong-Agent architecture",id:"2-inlong-agent-architecture",children:[]},{value:"3. Different kinds of agent",id:"3-different-kinds-of-agent",children:[{value:"3.1 file agent",id:"31-file-agent",children:[]},{value:"3.2 sql agent",id:"32-sql-agent",children:[]},{value:"3.3 binlog agent",id:"33-binlog-agent",children:[]}]}],d={toc:u};function f(e){var t=e.components,c=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,c,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"1-overview-of-inlong-agent"},"1. Overview of InLong-Agent"),(0,a.kt)("p",null,"InLong-Agent is a collection tool that supports multiple types of data sources, and is committed to achieving stable and efficient data collection functions between multiple heterogeneous data sources including file, sql, Binlog, metrics, etc."),(0,a.kt)("h3",{id:"the-brief-architecture-diagram-is-as-follows"},"The brief architecture diagram is as follows:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(96570).Z})),(0,a.kt)("h3",{id:"design-concept"},"design concept"),(0,a.kt)("p",null,"In order to solve the problem of data source diversity, InLong-agent abstracts multiple data sources into a unified source concept, and abstracts sinks to write data. When you need to access a new data source, you only need to configure the format and reading parameters of the data source to achieve efficient reading."),(0,a.kt)("h3",{id:"current-status-of-use"},"Current status of use"),(0,a.kt)("p",null,"InLong-Agent is widely used within the Tencent Group, undertaking most of the data collection business, and the amount of online data reaches tens of billions."),(0,a.kt)("h2",{id:"2-inlong-agent-architecture"},"2. InLong-Agent architecture"),(0,a.kt)("p",null,"The InLong Agent task is used as a data acquisition framework, constructed with a channel + plug-in architecture. Read and write the data source into a reader/writer plug-in, and then into the entire framework."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Reader: Reader is the data collection module, responsible for collecting data from the data source and sending the data to the channel."),(0,a.kt)("li",{parentName:"ul"},"Writer: Writer is a data writing module, which reuses data continuously to the channel and writes the data to the destination."),(0,a.kt)("li",{parentName:"ul"},"Channel: The channel used to connect the reader and writer, and as the data transmission channel of the connection, which realizes the function of data reading and monitoring")),(0,a.kt)("h2",{id:"3-different-kinds-of-agent"},"3. Different kinds of agent"),(0,a.kt)("h3",{id:"31-file-agent"},"3.1 file agent"),(0,a.kt)("p",null,"File collection includes the following functions:"),(0,a.kt)("p",null,"User-configured path monitoring, able to monitor the created file information\nDirectory regular filtering, support YYYYMMDD+regular expression path configuration\nBreakpoint retransmission, when InLong-Agent restarts, it can automatically re-read from the last read position to ensure no reread or missed reading."),(0,a.kt)("h3",{id:"32-sql-agent"},"3.2 sql agent"),(0,a.kt)("p",null,"This type of data refers to the way it is executed through SQL\nSQL regular decomposition, converted into multiple SQL statements\nExecute SQL separately, pull the data set, the pull process needs to pay attention to the impact on mysql itself\nThe execution cycle, which is generally executed regularly"),(0,a.kt)("h3",{id:"33-binlog-agent"},"3.3 binlog agent"),(0,a.kt)("p",null,"This type of collection reads binlog and restores data by configuring mysql slave\nNeed to pay attention to multi-threaded parsing when binlog is read, and multi-threaded parsing data needs to be labeled in order\nThe code is based on the old version of dbsync, the main modification is to change the sending of tdbus-sender to push to agent-channel for integration"))}f.isMDXComponent=!0},96570:function(e,t,n){t.Z=n.p+"assets/images/architecture-4c55eb883104dccdff77e8b8e57f2678.png"}}]);