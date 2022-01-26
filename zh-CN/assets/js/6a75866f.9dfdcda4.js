"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[4583],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(t),m=a,f=d["".concat(u,".").concat(m)]||d[m]||c[m]||o;return t?r.createElement(f,l(l({ref:n},p),{},{components:t})):r.createElement(f,l({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=d;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},79357:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),l=["components"],i={title:"\u5355\u673a\u90e8\u7f72",sidebar_position:1},u=void 0,s={unversionedId:"deployment/standalone",id:"deployment/standalone",isDocsHomePage:!1,title:"\u5355\u673a\u90e8\u7f72",description:"\u73af\u5883\u8981\u6c42",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/deployment/standalone.md",sourceDirName:"deployment",slug:"/deployment/standalone",permalink:"/zh-CN/docs/next/deployment/standalone",editUrl:"https://github.com/apache/incubator-inlong-website/edit/master/docs/deployment/standalone.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"\u5355\u673a\u90e8\u7f72",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528 Pulsar \u793a\u4f8b",permalink:"/zh-CN/docs/next/quick_start/pulsar_example"},next:{title:"Docker \u90e8\u7f72",permalink:"/zh-CN/docs/next/deployment/docker"}},p=[{value:"\u73af\u5883\u8981\u6c42",id:"\u73af\u5883\u8981\u6c42",children:[]},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",children:[]},{value:"\u542f\u52a8",id:"\u542f\u52a8",children:[]},{value:"\u505c\u6b62",id:"\u505c\u6b62",children:[]},{value:"\u68c0\u67e5",id:"\u68c0\u67e5",children:[]}],c={toc:p};function d(e){var n=e.components,t=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u73af\u5883\u8981\u6c42"},"\u73af\u5883\u8981\u6c42"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"ZooKeeper 3.5+"),(0,o.kt)("li",{parentName:"ul"},"MySQL 5.7+"),(0,o.kt)("li",{parentName:"ul"},"Flink 1.13.5"),(0,o.kt)("li",{parentName:"ul"},"Apache Pulsar 2.6+ (\u53ef\u9009)"),(0,o.kt)("li",{parentName:"ul"},"Docker or Nginx")),(0,o.kt)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,o.kt)("p",null,"\u5728conf/standalone.conf\u6587\u4ef6\u4e2d\u6dfb\u52a0\u76f8\u5173\u5168\u5c40\u914d\u7f6e\u53c2\u6570\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini"},"# Selection of message queue source: tubemq or pulsar\nsource_type=tubemq\n# Selection of sort sink: hive or clickhouse\nsink_type=hive\n# MySQL service, IP, port, user and password\nspring_datasource_hostname=MYSQL_HOSTNAME\nspring_datasource_port=MYSQL_PORT\nspring_datasource_username=MYSQL_USERNAME\nspring_datasource_password=MYSQL_PASSWORD\n###############################################################################\n# zookeeper address\nzkServerAddr=127.0.0.1:2181\n###############################################################################\n# tubemq (Optional)\ntubemqMaster_hostName=YOU_LOCAL_IP\ntubemqBroker_hostName=YOU_LOCAL_IP\nTUBE_MANAGER_IP=YOU_LOCAL_IP\nmetaDataPath=/stage/meta_data\nprimaryPath=/stage/msg_data\n###############################################################################\n# pulsar (Optional)\n###############################################################################\n# Service address of pulsar (Required)\npulsar_adminUrl=http://pulsar_ip:web_port\n# Pulsar broker address\uff08Required\uff09\npulsar_serviceUrl=pulsar://pulsar_ip:api_port\n# Default tenant of Pulsar\npulsar_defaultTenant=public\n###############################################################################\n# local_ip(Required)\n###############################################################################\nlocal_ip=YOU_LOCAL_IP\n###############################################################################\n")),(0,o.kt)("p",null,"\u4e00\u952e\u521d\u59cb\u5316inlong\u5404\u7ec4\u4ef6\u5168\u5c40\u914d\u7f6e\u53c2\u6570"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"bin/init-config.sh \n")),(0,o.kt)("h2",{id:"\u542f\u52a8"},"\u542f\u52a8"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"bin/inlong-daemon.sh start standalone\n")),(0,o.kt)("h2",{id:"\u505c\u6b62"},"\u505c\u6b62"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"bin/inlong-daemon.sh stop standalone\n")),(0,o.kt)("h2",{id:"\u68c0\u67e5"},"\u68c0\u67e5"),(0,o.kt)("p",null,"1.\u542f\u52a8\u811a\u672c\u5b8c\u6210\u540e\uff0cjps\u67e5\u770b\u662f\u5426\u90fd\u6709\u5982\u4e0b\u8fdb\u7a0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"1393 QuorumPeerMain\n24529 Application\n23058 MasterStartup\n23812 InLongWebApplication\n2148 Jps\n24631 CliFrontend\n24908 AgentMain\n23548 TubeMQManager\n23149 BrokerStartup\n")),(0,o.kt)("p",null,"2.\u5982\u679c\u7528tubemq\u4f5c\u4e3a\u6d88\u606f\u4e2d\u95f4\u4ef6\uff0c\u8bbf\u95ee\u5176\u63d0\u4f9b\u7684web\u9875\u9762\uff0c\u53ef\u4ee5\u5f97\u5230\u5982\u56fe\u6240\u793a\u4fe1\u606f \uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/97139576/150918086-d7c35eab-bc9f-4e39-aa8a-7e018b88bf56.png",alt:"1643034789289"}),"\n3.\u662f\u5426\u80fd\u6b63\u5e38\u8bbf\u95eeinlong web\u9875\u9762\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/97139576/150918194-587f5e50-3c1c-47aa-893b-edf2df683a2f.png",alt:"1643034702665"})),(0,o.kt)("p",null,"\u90fd\u6ca1\u95ee\u9898\u7684\u8bdd\uff0c\u81f3\u6b64inlong\u5355\u673a\u90e8\u7f72\u6210\u529f\u3002"))}d.isMDXComponent=!0}}]);