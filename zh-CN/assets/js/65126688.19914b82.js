"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[264],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),g=p(r),m=a,d=g["".concat(s,".").concat(m)]||g[m]||u[m]||i;return r?n.createElement(d,l(l({ref:t},c),{},{components:r})):n.createElement(d,l({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=g;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},69846:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return g}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),l=["components"],o={title:"\u5982\u4f55\u9a8c\u8bc1\u7248\u672c",sidebar_position:7},s="\u9a8c\u8bc1\u5019\u9009\u7248\u672c",p={unversionedId:"how-to-verify",id:"how-to-verify",isDocsHomePage:!1,title:"\u5982\u4f55\u9a8c\u8bc1\u7248\u672c",description:"\u8be6\u7ec6\u7684\u68c0\u67e5\u5217\u8868\u8bf7\u53c2\u8003: check list",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs-development/current/how-to-verify.md",sourceDirName:".",slug:"/how-to-verify",permalink:"/zh-CN/development/how-to-verify",editUrl:"https://github.com/apache/incubator-inlong-website/edit/master/i18n/zh-CN/how-to-verify.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"\u5982\u4f55\u9a8c\u8bc1\u7248\u672c",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"\u5982\u4f55\u53d1\u5e03\u7248\u672c",permalink:"/zh-CN/development/how-to-release"}},c=[{value:"1. \u4e0b\u8f7d\u8981\u53d1\u5e03\u7684\u5019\u9009\u7248\u672c\u5230\u672c\u5730\u73af\u5883",id:"1-\u4e0b\u8f7d\u8981\u53d1\u5e03\u7684\u5019\u9009\u7248\u672c\u5230\u672c\u5730\u73af\u5883",children:[],level:2},{value:"2. \u9a8c\u8bc1\u4e0a\u4f20\u7684\u7248\u672c\u662f\u5426\u5408\u89c4",id:"2-\u9a8c\u8bc1\u4e0a\u4f20\u7684\u7248\u672c\u662f\u5426\u5408\u89c4",children:[{value:"2.1 \u67e5\u770b\u53d1\u5e03\u5305\u662f\u5426\u5b8c\u6574",id:"21-\u67e5\u770b\u53d1\u5e03\u5305\u662f\u5426\u5b8c\u6574",children:[],level:3},{value:"2.2 \u68c0\u67e5gpg\u7b7e\u540d",id:"22-\u68c0\u67e5gpg\u7b7e\u540d",children:[],level:3},{value:"2.3 \u68c0\u67e5sha512\u54c8\u5e0c",id:"23-\u68c0\u67e5sha512\u54c8\u5e0c",children:[],level:3},{value:"2.4. \u68c0\u67e5\u6e90\u7801\u5305\u7684\u6587\u4ef6\u5185\u5bb9",id:"24-\u68c0\u67e5\u6e90\u7801\u5305\u7684\u6587\u4ef6\u5185\u5bb9",children:[],level:3},{value:"2.5 \u68c0\u67e5\u4e8c\u8fdb\u5236\u5305(\u5982\u679c\u4e0a\u4f20\u4e86\u4e8c\u8fdb\u5236\u5305)",id:"25-\u68c0\u67e5\u4e8c\u8fdb\u5236\u5305\u5982\u679c\u4e0a\u4f20\u4e86\u4e8c\u8fdb\u5236\u5305",children:[],level:3}],level:2}],u={toc:c};function g(e){var t=e.components,r=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u9a8c\u8bc1\u5019\u9009\u7248\u672c"},"\u9a8c\u8bc1\u5019\u9009\u7248\u672c"),(0,i.kt)("p",null,"\u8be6\u7ec6\u7684\u68c0\u67e5\u5217\u8868\u8bf7\u53c2\u8003: ",(0,i.kt)("a",{parentName:"p",href:"https://cwiki.apache.org/confluence/display/INCUBATOR/Incubator+Release+Checklist"},"check list")),(0,i.kt)("h2",{id:"1-\u4e0b\u8f7d\u8981\u53d1\u5e03\u7684\u5019\u9009\u7248\u672c\u5230\u672c\u5730\u73af\u5883"},"1. \u4e0b\u8f7d\u8981\u53d1\u5e03\u7684\u5019\u9009\u7248\u672c\u5230\u672c\u5730\u73af\u5883"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"svn co https://dist.apache.org/repos/dist/dev/incubator/inlong/${release_version}-${rc_version}/\n")),(0,i.kt)("h2",{id:"2-\u9a8c\u8bc1\u4e0a\u4f20\u7684\u7248\u672c\u662f\u5426\u5408\u89c4"},"2. \u9a8c\u8bc1\u4e0a\u4f20\u7684\u7248\u672c\u662f\u5426\u5408\u89c4"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u5f00\u59cb\u9a8c\u8bc1\u73af\u8282\uff0c\u9a8c\u8bc1\u5305\u542b\u4f46\u4e0d\u5c40\u9650\u4e8e\u4ee5\u4e0b\u5185\u5bb9\u548c\u5f62\u5f0f")),(0,i.kt)("h3",{id:"21-\u67e5\u770b\u53d1\u5e03\u5305\u662f\u5426\u5b8c\u6574"},"2.1 \u67e5\u770b\u53d1\u5e03\u5305\u662f\u5426\u5b8c\u6574"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u4e0a\u4f20\u5230dist\u7684\u5305\u5fc5\u987b\u5305\u542b\u6e90\u7801\u5305\uff0c\u4e8c\u8fdb\u5236\u5305\u53ef\u9009")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u662f\u5426\u5305\u542b\u6e90\u7801\u5305"),(0,i.kt)("li",{parentName:"ol"},"\u662f\u5426\u5305\u542b\u6e90\u7801\u5305\u7684\u7b7e\u540d"),(0,i.kt)("li",{parentName:"ol"},"\u662f\u5426\u5305\u542b\u6e90\u7801\u5305\u7684sha512"),(0,i.kt)("li",{parentName:"ol"},"\u5982\u679c\u4e0a\u4f20\u4e86\u4e8c\u8fdb\u5236\u5305\uff0c\u5219\u540c\u6837\u68c0\u67e5(2)-(4)\u6240\u5217\u7684\u5185\u5bb9")),(0,i.kt)("h3",{id:"22-\u68c0\u67e5gpg\u7b7e\u540d"},"2.2 \u68c0\u67e5gpg\u7b7e\u540d"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5bfc\u5165\u516c\u94a5",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"curl https://dist.apache.org/repos/dist/dev/incubator/inlong/KEYS > KEYS # \u4e0b\u8f7dKEYS\ngpg --import KEYS # \u5bfc\u5165KEYS\u5230\u672c\u5730\n"))),(0,i.kt)("li",{parentName:"ul"},"\u4fe1\u4efb\u516c\u94a5",(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},"\u4fe1\u4efb\u6b64\u6b21\u7248\u672c\u6240\u4f7f\u7528\u7684KEY"),(0,i.kt)("pre",{parentName:"blockquote"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"  gpg --edit-key xxxxxxxxxx #\u6b64\u6b21\u7248\u672c\u6240\u4f7f\u7528\u7684KEY\n  gpg (GnuPG) 2.2.21; Copyright (C) 2020 Free Software Foundation, Inc.\n  This is free software: you are free to change and redistribute it.\n  There is NO WARRANTY, to the extent permitted by law.\n"))),"  Secret key is available.","  sec  rsa4096/5EF3A66D57EC647A\ncreated: 2020-05-19  expires: never       usage: SC",(0,i.kt)("br",{parentName:"li"}),"trust: ultimate      validity: ultimate\nssb  rsa4096/17628566FEED6AF7\ncreated: 2020-05-19  expires: never       usage: E",(0,i.kt)("br",{parentName:"li"}),"","[ultimate]"," (1). Guangxu Cheng ",(0,i.kt)("a",{parentName:"li",href:"mailto:gxcheng@apache.org"},"gxcheng@apache.org"),"  gpg> trust #\u4fe1\u4efb\nsec  rsa4096/5EF3A66D57EC647A\ncreated: 2020-05-19  expires: never       usage: SC",(0,i.kt)("br",{parentName:"li"}),"trust: ultimate      validity: ultimate\nssb  rsa4096/17628566FEED6AF7\ncreated: 2020-05-19  expires: never       usage: E",(0,i.kt)("br",{parentName:"li"}),"","[ultimate]"," (1). Guangxu Cheng ",(0,i.kt)("a",{parentName:"li",href:"mailto:gxcheng@apache.org"},"gxcheng@apache.org"),"  Please decide how far you trust this user to correctly verify other users' keys\n(by looking at passports, checking fingerprints from different sources, etc.)",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"1 = I don't know or won't say\n2 = I do NOT trust\n3 = I trust marginally\n4 = I trust fully\n5 = I trust ultimately\nm = back to the main menu\n")),"  Your decision? 5 #\u9009\u62e95\nDo you really want to set this key to ultimate trust? (y/N) y #\u9009\u62e9y","  sec  rsa4096/5EF3A66D57EC647A\ncreated: 2020-05-19  expires: never       usage: SC",(0,i.kt)("br",{parentName:"li"}),"trust: ultimate      validity: ultimate\nssb  rsa4096/17628566FEED6AF7\ncreated: 2020-05-19  expires: never       usage: E",(0,i.kt)("br",{parentName:"li"}),"","[ultimate]"," (1). Guangxu Cheng ",(0,i.kt)("a",{parentName:"li",href:"mailto:gxcheng@apache.org"},"gxcheng@apache.org"),"  gpg> ","  sec  rsa4096/5EF3A66D57EC647A\ncreated: 2020-05-19  expires: never       usage: SC",(0,i.kt)("br",{parentName:"li"}),"trust: ultimate      validity: ultimate\nssb  rsa4096/17628566FEED6AF7\ncreated: 2020-05-19  expires: never       usage: E",(0,i.kt)("br",{parentName:"li"}),"","[ultimate]"," (1). Guangxu Cheng ",(0,i.kt)("a",{parentName:"li",href:"mailto:gxcheng@apache.org"},"gxcheng@apache.org"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},""))),(0,i.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u5982\u4e0b\u547d\u4ee4\u68c0\u67e5\u7b7e\u540d",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"for i in *.tar.gz; do echo $i; gpg --verify $i.asc $i ; done\n#\u6216\u8005\ngpg --verify apache-inlong-${release_version}-src.tar.gz.asc apache-inlong-${release_version}-src.tar.gz\n# \u5982\u679c\u4e0a\u4f20\u4e8c\u8fdb\u5236\u5305\uff0c\u5219\u540c\u6837\u9700\u8981\u68c0\u67e5\u4e8c\u8fdb\u5236\u5305\u7684\u7b7e\u540d\u662f\u5426\u6b63\u786e\ngpg --verify apache-inlong-server-${release_version}-bin.tar.gz.asc apache-inlong-server-${release_version}-bin.tar.gz\ngpg --verify apache-inlong-client-${release_version}-bin.tar.gz.asc apache-inlong-client-${release_version}-bin.tar.gz\n")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'  - \u68c0\u67e5\u7ed3\u679c\n  > \u51fa\u73b0\u7c7b\u4f3c\u4ee5\u4e0b\u5185\u5bb9\u5219\u8bf4\u660e\u7b7e\u540d\u6b63\u786e\uff0c\u5173\u952e\u5b57\uff1a**`Good signature`**\n```shell\napache-inlong-0.3.0-incubating-src.tar.gz\ngpg: Signature made Sat May 30 11:45:01 2020 CST\ngpg:                using RSA key 9B12C2228BDFF4F4CFE849445EF3A66D57EC647A\ngpg: Good signature from "Guangxu Cheng <gxcheng@apache.org>" [ultimate]gular2\n')),(0,i.kt)("h3",{id:"23-\u68c0\u67e5sha512\u54c8\u5e0c"},"2.3 \u68c0\u67e5sha512\u54c8\u5e0c"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u672c\u5730\u8ba1\u7b97sha512\u54c8\u5e0c\u540e\uff0c\u9a8c\u8bc1\u662f\u5426\u4e0edist\u4e0a\u7684\u4e00\u81f4"),(0,i.kt)("pre",{parentName:"blockquote"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"for i in *.tar.gz; do echo $i; gpg --print-md SHA512 $i; done\n#\u6216\u8005\ngpg --print-md SHA512 apache-inlong-${release_version}-src.tar.gz\n# \u5982\u679c\u4e0a\u4f20\u4e8c\u8fdb\u5236\u5305\uff0c\u5219\u540c\u6837\u9700\u8981\u68c0\u67e5\u4e8c\u8fdb\u5236\u5305\u7684sha512\u54c8\u5e0c\ngpg --print-md SHA512 apache-inlong-server-${release_version}-bin.tar.gz\ngpg --print-md SHA512 apache-inlong-client-${release_version}-bin.tar.gz\n# \u6216\u8005\nfor i in *.tar.gz.sha512; do echo $i; sha512sum -c $i; done\n"))),(0,i.kt)("h3",{id:"24-\u68c0\u67e5\u6e90\u7801\u5305\u7684\u6587\u4ef6\u5185\u5bb9"},"2.4. \u68c0\u67e5\u6e90\u7801\u5305\u7684\u6587\u4ef6\u5185\u5bb9"),(0,i.kt)("p",null,"  \u89e3\u538b\u7f29",(0,i.kt)("inlineCode",{parentName:"p"},"apache-inlong-${release_version}-src.tar.gz"),"\uff0c\u8fdb\u884c\u5982\u4e0b\u68c0\u67e5:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"DISCLAIMER\u6587\u4ef6\u662f\u5426\u5b58\u5728\u53ca\u5185\u5bb9\u662f\u5426\u6b63\u786e"),(0,i.kt)("li",{parentName:"ul"},"LICENSE and NOTICE\u6587\u4ef6\u662f\u5426\u5b58\u5728\u53ca\u5185\u5bb9\u662f\u5426\u6b63\u786e"),(0,i.kt)("li",{parentName:"ul"},"\u6240\u6709\u6587\u4ef6\u662f\u5426\u5e26\u6709ASF License\u5934"),(0,i.kt)("li",{parentName:"ul"},"\u6e90\u7801\u662f\u5426\u80fd\u591f\u6b63\u5e38\u7f16\u8bd1"),(0,i.kt)("li",{parentName:"ul"},"\u5355\u6d4b\u662f\u5426\u80fd\u591f\u8dd1\u901a"),(0,i.kt)("li",{parentName:"ul"},"....")),(0,i.kt)("h3",{id:"25-\u68c0\u67e5\u4e8c\u8fdb\u5236\u5305\u5982\u679c\u4e0a\u4f20\u4e86\u4e8c\u8fdb\u5236\u5305"},"2.5 \u68c0\u67e5\u4e8c\u8fdb\u5236\u5305(\u5982\u679c\u4e0a\u4f20\u4e86\u4e8c\u8fdb\u5236\u5305)"),(0,i.kt)("p",null,"  \u89e3\u538b\u7f29",(0,i.kt)("inlineCode",{parentName:"p"},"apache-inlong-client-${release_version}-src.tar.gz"),"\u548c",(0,i.kt)("inlineCode",{parentName:"p"},"\n  apache-inlong-server-${release_version}-src.tar.gz"),"\uff0c\u8fdb\u884c\u5982\u4e0b\u68c0\u67e5:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"DISCLAIMER\u6587\u4ef6\u662f\u5426\u5b58\u5728\u53ca\u5185\u5bb9\u662f\u5426\u6b63\u786e"),(0,i.kt)("li",{parentName:"ul"},"LICENSE and NOTICE\u6587\u4ef6\u662f\u5426\u5b58\u5728\u53ca\u5185\u5bb9\u662f\u5426\u6b63\u786e"),(0,i.kt)("li",{parentName:"ul"},"\u80fd\u5426\u6b63\u5e38\u90e8\u7f72\u6210\u529f"),(0,i.kt)("li",{parentName:"ul"},"\u90e8\u7f72\u6d4b\u8bd5\u73af\u5883\u3001\u9a8c\u8bc1\u751f\u4ea7\u6d88\u8d39\u80fd\u5426\u6b63\u5e38\u8fd0\u884c"),(0,i.kt)("li",{parentName:"ul"},"\u9a8c\u8bc1\u4f60\u8ba4\u4e3a\u53ef\u80fd\u4f1a\u51fa\u95ee\u9898\u7684\u5730\u65b9"),(0,i.kt)("li",{parentName:"ul"},"....")))}g.isMDXComponent=!0}}]);