"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[9284],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},l=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),l=s(r),m=o,f=l["".concat(u,".").concat(m)]||l[m]||p[m]||a;return r?n.createElement(f,i(i({ref:t},d),{},{components:r})):n.createElement(f,i({ref:t},d))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=l;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}l.displayName="MDXCreateElement"},33387:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return d},default:function(){return l}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],c={title:"Build && Deployment"},u="how to use",s={unversionedId:"modules/dataproxy-sdk/quick_start",id:"version-0.11.0/modules/dataproxy-sdk/quick_start",isDocsHomePage:!1,title:"Build && Deployment",description:"add dependency in pom and use the api in architecture",source:"@site/versioned_docs/version-0.11.0/modules/dataproxy-sdk/quick_start.md",sourceDirName:"modules/dataproxy-sdk",slug:"/modules/dataproxy-sdk/quick_start",permalink:"/docs/modules/dataproxy-sdk/quick_start",editUrl:"https://github.com/apache/incubator-inlong-website/edit/master/versioned_docs/version-0.11.0/modules/dataproxy-sdk/quick_start.md",tags:[],version:"0.11.0",frontMatter:{title:"Build && Deployment"},sidebar:"version-0.11.0/tutorialSidebar",previous:{title:"Architecture",permalink:"/docs/modules/dataproxy-sdk/architecture"},next:{title:"Architecture",permalink:"/docs/modules/tubemq/architecture"}},d=[],p={toc:d};function l(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"how-to-use"},"how to use"),(0,a.kt)("p",null,"add dependency in pom and use the api in ",(0,a.kt)("a",{parentName:"p",href:"/docs/modules/dataproxy-sdk/architecture"},"architecture")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<dependency>\n        <groupId>org.apache.inlong</groupId>\n        <artifactId>inlong-dataproxy-sdk</artifactId>\n        <version>0.10.0-incubating-SNAPSHOT</version>\n</dependency>\n")))}l.isMDXComponent=!0}}]);