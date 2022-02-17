"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[1466],{3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return s}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var u=r.createContext({}),p=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},d=function(t){var e=p(t.components);return r.createElement(u.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,u=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),c=p(n),s=a,g=c["".concat(u,".").concat(s)]||c[s]||m[s]||l;return n?r.createElement(g,o(o({ref:e},d),{},{components:n})):r.createElement(g,o({ref:e},d))}));function s(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i.mdxType="string"==typeof t?t:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},41888:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return d},default:function(){return c}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),o=["components"],i={title:"Bare Metal \u90e8\u7f72",sidebar_position:4},u=void 0,p={unversionedId:"deployment/bare_metal",id:"version-1.0.0/deployment/bare_metal",title:"Bare Metal \u90e8\u7f72",description:"\u73af\u5883\u8981\u6c42",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.0.0/deployment/bare_metal.md",sourceDirName:"deployment",slug:"/deployment/bare_metal",permalink:"/zh-CN/docs/deployment/bare_metal",editUrl:"https://github.com/apache/incubator-inlong-website/edit/master/versioned_docs/version-1.0.0/deployment/bare_metal.md",tags:[],version:"1.0.0",sidebarPosition:4,frontMatter:{title:"Bare Metal \u90e8\u7f72",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Kubernetes \u90e8\u7f72",permalink:"/zh-CN/docs/deployment/k8s"},next:{title:"\u603b\u89c8",permalink:"/zh-CN/docs/modules/agent/overview"}},d=[{value:"\u73af\u5883\u8981\u6c42",id:"\u73af\u5883\u8981\u6c42",children:[],level:2},{value:"\u5b89\u88c5InLong",id:"\u5b89\u88c5inlong",children:[],level:2},{value:"\u521b\u5efa\u6570\u636e\u6d41",id:"\u521b\u5efa\u6570\u636e\u6d41",children:[],level:2}],m={toc:d};function c(t){var e=t.components,n=(0,a.Z)(t,o);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u73af\u5883\u8981\u6c42"},"\u73af\u5883\u8981\u6c42"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"ZooKeeper 3.5+"),(0,l.kt)("li",{parentName:"ul"},"MySQL 5.7+"),(0,l.kt)("li",{parentName:"ul"},"Flink 1.13.5"),(0,l.kt)("li",{parentName:"ul"},"Apache Pulsar 2.6+ (\u53ef\u9009)")),(0,l.kt)("h2",{id:"\u5b89\u88c5inlong"},"\u5b89\u88c5InLong"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u987a\u5e8f"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7ec4\u4ef6"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7b2c\u4e09\u65b9\u4f9d\u8d56"),(0,l.kt)("th",{parentName:"tr",align:null},"\u90e8\u7f72\u6307\u5f15"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"inlong-tubemq-server"),(0,l.kt)("td",{parentName:"tr",align:null},"ZooKeeper"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/zh-CN/docs/modules/tubemq/quick_start"},"InLong TubeMQ Server")),(0,l.kt)("td",{parentName:"tr",align:null},"\u82e5\u4f7f\u7528Apache Pulsar\uff0c\u53ef\u4e0d\u5b89\u88c5\u8be5\u7ec4\u4ef6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"inlong-tubemq-manager"),(0,l.kt)("td",{parentName:"tr",align:null},"MySQL"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/zh-CN/docs/modules/tubemq/tubemq-manager/quick_start"},"InLong TubeMQ Manager")),(0,l.kt)("td",{parentName:"tr",align:null},"\u82e5\u4f7f\u7528Apache Pulsar\uff0c\u53ef\u4e0d\u5b89\u88c5\u8be5\u7ec4\u4ef6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"inlong-audit"),(0,l.kt)("td",{parentName:"tr",align:null},"MySQL \u6216\u8005 Elasticsearch"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/zh-CN/docs/modules/audit/quick_start"},"InLong Audit")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"inlong-manager"),(0,l.kt)("td",{parentName:"tr",align:null},"MySQL, ZooKeeper"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/zh-CN/docs/modules/manager/quick_start"},"InLong Manager")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"inlong-dashboard"),(0,l.kt)("td",{parentName:"tr",align:null},"Nginx \u6216\u8005 Docker"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/zh-CN/docs/modules/dashboard/quick_start"},"InLong Dashboard")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"6"),(0,l.kt)("td",{parentName:"tr",align:null},"inlong-dataproxy"),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/zh-CN/docs/modules/dataproxy/quick_start"},"InLong DataProxy")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"7"),(0,l.kt)("td",{parentName:"tr",align:null},"inlong-sort"),(0,l.kt)("td",{parentName:"tr",align:null},"ZooKeeper, Flink"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/zh-CN/docs/modules/sort/quick_start"},"InLong Sort")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"8"),(0,l.kt)("td",{parentName:"tr",align:null},"inlong-agent"),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/zh-CN/docs/modules/agent/quick_start"},"InLong Agent")),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h2",{id:"\u521b\u5efa\u6570\u636e\u6d41"},"\u521b\u5efa\u6570\u636e\u6d41"),(0,l.kt)("p",null,"InLong \u96c6\u7fa4\u90e8\u7f72\u6210\u529f\u540e\uff0c\u4f60\u53ef\u4ee5\u53c2\u8003",(0,l.kt)("a",{parentName:"p",href:"/zh-CN/docs/user_guide/user_manual"},"\u7528\u6237\u624b\u518c"),"\u521b\u5efa\u4e00\u4e2a\u6570\u636e\u6d41\u5f00\u59cb\u4f7f\u7528\u3002"))}c.isMDXComponent=!0}}]);