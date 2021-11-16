"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[4748],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return g}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(n),g=a,m=c["".concat(s,".").concat(g)]||c[g]||p[g]||o;return n?r.createElement(m,i(i({ref:t},d),{},{components:n})):r.createElement(m,i({ref:t},d))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},36499:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return d},default:function(){return c}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={title:"Quick Start",sidebar_position:1},s=void 0,u={unversionedId:"user_guide/quick_start",id:"user_guide/quick_start",isDocsHomePage:!1,title:"Quick Start",description:"This section contains a quick start guide to help you get started with Apache InLong.",source:"@site/docs/user_guide/quick_start.md",sourceDirName:"user_guide",slug:"/user_guide/quick_start",permalink:"/docs/next/user_guide/quick_start",editUrl:"https://github.com/apache/incubator-inlong-website/edit/master/docs/user_guide/quick_start.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Quick Start",sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"User Manual",permalink:"/docs/next/user_guide/user_manual"}},d=[{value:"Overall architecture",id:"overall-architecture",children:[]},{value:"Compile",id:"compile",children:[]},{value:"Environment Requirements",id:"environment-requirements",children:[]},{value:"deploy InLong TubeMQ Server",id:"deploy-inlong-tubemq-server",children:[]},{value:"deploy InLong TubeMQ Manager",id:"deploy-inlong-tubemq-manager",children:[]},{value:"deploy InLong Manager",id:"deploy-inlong-manager",children:[]},{value:"deploy InLong WebSite",id:"deploy-inlong-website",children:[]},{value:"deploy InLong Sort",id:"deploy-inlong-sort",children:[]},{value:"deploy InLong DataProxy",id:"deploy-inlong-dataproxy",children:[]},{value:"deploy InLong DataProxy-SDK",id:"deploy-inlong-dataproxy-sdk",children:[]},{value:"deploy InLong Agent",id:"deploy-inlong-agent",children:[]},{value:"Business configuration",id:"business-configuration",children:[]},{value:"Data report verification",id:"data-report-verification",children:[]}],p={toc:d};function c(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This section contains a quick start guide to help you get started with Apache InLong."),(0,o.kt)("h2",{id:"overall-architecture"},"Overall architecture"),(0,o.kt)("img",{src:"/img/inlong_architecture.png",align:"center",alt:"Apache InLong"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://inlong.apache.org"},"Apache InLong"),"(incubating) overall architecture is as above. This component is a one-stop data streaming platform that provides automated, secure, distributed, and efficient data publishing and subscription capabilities to help You can easily build stream-based data applications."),(0,o.kt)("p",null,"InLong (\u5e94\u9f99) is a divine beast in Chinese mythology who guides river into the sea, it is regarded as a metaphor of the InLong system for reporting streams of data."),(0,o.kt)("p",null,"InLong was originally built in Tencent and has served online business for more than 8 years. It supports massive data (over 40 trillion pieces of data per day) report services under big data scenarios. The entire platform integrates 5 modules including data collection, aggregation, caching, sorting and management modules. Through this system, the business only needs to provide data sources, data service quality, data landing clusters and data landing formats, that is, data can be continuous Push data from the source cluster to the target cluster, which greatly meets the data reporting service requirements in the business big data scenario."),(0,o.kt)("h2",{id:"compile"},"Compile"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Java ",(0,o.kt)("a",{parentName:"li",href:"https://adoptopenjdk.net/?variant=openjdk8"},"JDK 8")),(0,o.kt)("li",{parentName:"ul"},"Maven 3.6.1+")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ mvn clean install -DskipTests\n")),(0,o.kt)("p",null,"(Optional) Compile using docker image:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ docker pull maven:3.6-openjdk-8\n$ docker run -v `pwd`:/inlong  -w /inlong maven:3.6-openjdk-8 mvn clean install -DskipTests\n")),(0,o.kt)("p",null,"after compile successfully, you could find distribution file at ",(0,o.kt)("inlineCode",{parentName:"p"},"inlong-distribution/target")," with ",(0,o.kt)("inlineCode",{parentName:"p"},"tar.gz")," format, it includes following files:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"inlong-agent\ninlong-dataproxy\ninlong-dataproxy-sdk\ninlong-manager-web\ninlong-sort\ninlong-tubemq-manager\ninlong-tubemq-server\ninlong-website\n")),(0,o.kt)("h2",{id:"environment-requirements"},"Environment Requirements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"ZooKeeper 3.5+"),(0,o.kt)("li",{parentName:"ul"},"Hadoop 2.10.x \u548c Hive 2.3.x"),(0,o.kt)("li",{parentName:"ul"},"MySQL 5.7+"),(0,o.kt)("li",{parentName:"ul"},"Flink 1.9.x")),(0,o.kt)("h2",{id:"deploy-inlong-tubemq-server"},"deploy InLong TubeMQ Server"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/next/modules/tubemq/quick_start"},"deploy InLong TubeMQ Server")),(0,o.kt)("h2",{id:"deploy-inlong-tubemq-manager"},"deploy InLong TubeMQ Manager"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/next/modules/tubemq/tubemq-manager/quick_start"},"deploy InLong TubeMQ Manager")),(0,o.kt)("h2",{id:"deploy-inlong-manager"},"deploy InLong Manager"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/next/modules/manager/quick_start"},"deploy InLong Manager")),(0,o.kt)("h2",{id:"deploy-inlong-website"},"deploy InLong WebSite"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/next/modules/website/quick_start"},"deploy InLong WebSite")),(0,o.kt)("h2",{id:"deploy-inlong-sort"},"deploy InLong Sort"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/next/modules/sort/quick_start"},"deploy InLong Sort")),(0,o.kt)("h2",{id:"deploy-inlong-dataproxy"},"deploy InLong DataProxy"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/next/modules/dataproxy/quick_start"},"deploy InLong DataProxy")),(0,o.kt)("h2",{id:"deploy-inlong-dataproxy-sdk"},"deploy InLong DataProxy-SDK"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/next/modules/dataproxy-sdk/quick_start"},"deploy InLong DataProxy")),(0,o.kt)("h2",{id:"deploy-inlong-agent"},"deploy InLong Agent"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/next/modules/agent/quick_start"},"deploy InLong Agent")),(0,o.kt)("h2",{id:"business-configuration"},"Business configuration"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"docs/user_guide/user_manual"},"How to configure a new business")),(0,o.kt)("h2",{id:"data-report-verification"},"Data report verification"),(0,o.kt)("p",null,"At this stage, you can collect data through the file agent and verify whether the received data is consistent with the sent data in the specified Hive table."))}c.isMDXComponent=!0}}]);