(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{3646:function(e,t,n){var r=n(7228);e.exports=function(e){if(Array.isArray(e))return r(e)}},9713:function(e){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},6156:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{Z:function(){return r}})},6860:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},319:function(e,t,n){var r=n(3646),a=n(6860),o=n(379),c=n(8206);e.exports=function(e){return r(e)||a(e)||o(e)||c()}},3398:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var a=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=a},6393:function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=c,t.useAmp=function(){return c(a.default.useContext(o.AmpStateContext))};var r,a=(r=n(7294))&&r.__esModule?r:{default:r},o=n(3398);function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,o=e.hasQuery,c=void 0!==o&&o;return n||a&&c}},2775:function(e,t,n){"use strict";var r=n(9713);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}t.__esModule=!0,t.defaultHead=l,t.default=void 0;var o,c=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=f();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=r?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n(7294)),i=(o=n(3244))&&o.__esModule?o:{default:o},p=n(3398),u=n(1165),s=n(6393);function f(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return f=function(){return e},e}function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[c.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(c.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function h(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===c.default.Fragment?e.concat(c.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var d=["name","httpEquiv","charSet","itemProp"];function m(e,t){return e.reduce((function(e,t){var n=c.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(h,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var o=!0,c=!1;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){c=!0;var i=a.key.slice(a.key.indexOf("$")+1);e.has(i)?o=!1:e.add(i)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var p=0,u=d.length;p<u;p++){var s=d[p];if(a.props.hasOwnProperty(s))if("charSet"===s)n.has(s)?o=!1:n.add(s);else{var f=a.props[s],l=r[s]||new Set;"name"===s&&c||!l.has(f)?(l.add(f),r[s]=l):o=!1}}}return o}}()).reverse().map((function(e,n){var o=e.key||n;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var i=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.props||{});return i["data-href"]=i.href,i.href=void 0,i["data-optimized-fonts"]=!0,c.default.cloneElement(e,i)}return c.default.cloneElement(e,{key:o})}))}var v=function(e){var t=e.children,n=(0,c.useContext)(p.AmpStateContext),r=(0,c.useContext)(u.HeadManagerContext);return c.default.createElement(i.default,{reduceComponentsToState:m,headManager:r,inAmpMode:(0,s.isInAmpMode)(n)},t)};t.default=v},3244:function(e,t,n){"use strict";var r=n(319),a=n(4575),o=n(3913),c=(n(1506),n(2205)),i=n(8585),p=n(9754);function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=p(e);if(t){var a=p(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return i(this,n)}}t.__esModule=!0,t.default=void 0;var s=n(7294),f=function(e){c(n,e);var t=u(n);function n(e){var o;return a(this,n),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(r(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(s.Component);t.default=f},1476:function(e,t,n){"use strict";n.r(t);var r=n(5893),a=n(6156),o=n(9008);n(8980),n(1724);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.default=function(e){var t=e.Component,n=e.pageProps;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(o.default,{children:[(0,r.jsx)("link",{rel:"apple-touch-icon",sizes:"57x57",href:"".concat("/lawnchair.app","/favicon-57x57.png")}),(0,r.jsx)("link",{rel:"apple-touch-icon",sizes:"60x60",href:"".concat("/lawnchair.app","/favicon-60x60.png")}),(0,r.jsx)("link",{rel:"apple-touch-icon",sizes:"72x72",href:"".concat("/lawnchair.app","/favicon-72x72.png")}),(0,r.jsx)("link",{rel:"apple-touch-icon",sizes:"76x76",href:"".concat("/lawnchair.app","/favicon-76x76.png")}),(0,r.jsx)("link",{rel:"apple-touch-icon",sizes:"114x114",href:"".concat("/lawnchair.app","/favicon-114x114.png")}),(0,r.jsx)("link",{rel:"apple-touch-icon",sizes:"120x120",href:"".concat("/lawnchair.app","/favicon-120x120.png")}),(0,r.jsx)("link",{rel:"apple-touch-icon",sizes:"144x144",href:"".concat("/lawnchair.app","/favicon-144x144.png")}),(0,r.jsx)("link",{rel:"apple-touch-icon",sizes:"152x152",href:"".concat("/lawnchair.app","/favicon-152x152.png")}),(0,r.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"".concat("/lawnchair.app","/favicon-180x180.png")}),(0,r.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"".concat("/lawnchair.app","/favicon-16x16.png")}),(0,r.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"".concat("/lawnchair.app","/favicon-32x32.png")}),(0,r.jsx)("link",{rel:"icon",type:"image/png",sizes:"96x96",href:"".concat("/lawnchair.app","/favicon-96x96.png")}),(0,r.jsx)("link",{rel:"icon",type:"image/png",sizes:"192x192",href:"".concat("/lawnchair.app","/favicon-192x192.png")}),(0,r.jsx)("link",{rel:"shortcut icon",type:"image/x-icon",href:"".concat("/lawnchair.app","/favicon.ico")}),(0,r.jsx)("link",{rel:"icon",type:"image/x-icon",href:"".concat("/lawnchair.app","/favicon.ico")}),(0,r.jsx)("meta",{name:"msapplication-TileColor",content:"#ffffff"}),(0,r.jsx)("meta",{name:"msapplication-TileImage",content:"".concat("/lawnchair.app","/favicon-144x144.png")}),(0,r.jsx)("meta",{name:"msapplication-config",content:"".concat("/lawnchair.app","/browserconfig.xml")}),(0,r.jsx)("link",{rel:"manifest",href:"".concat("/lawnchair.app","/manifest.json")}),(0,r.jsx)("meta",{name:"theme-color",content:"#ffffff"})]}),(0,r.jsx)(t,i({},n))]})}},6363:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(1476)}])},1724:function(){},8980:function(){},9008:function(e,t,n){e.exports=n(2775)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(6363),t(4651)}));var n=e.O();_N_E=n}]);