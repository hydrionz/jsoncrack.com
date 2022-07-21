"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[395],{8395:function(n,e,t){t.r(e),t.d(e,{default:function(){return yn}});var r=t(5893),i=t(7294),o=t(2125),u=t(6126),c=t(7341),a=t(8193),l=t(9647),f=t(3854),s=t(5434),d=t(155),h=t(9896);function p(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function b(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function y(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,i,o=[],u=!0,c=!1;try{for(t=t.call(n);!(u=(r=t.next()).done)&&(o.push(r.value),!e||o.length!==e);u=!0);}catch(a){c=!0,i=a}finally{try{u||null==t.return||t.return()}finally{if(c)throw i}}return o}}(n,e)||function(n,e){if(!n)return;if("string"===typeof n)return p(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return p(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var g=function(){var n=y(i.useState(0),2),e=n[0],t=n[1],r=y(i.useState({value:"",debounced:""}),2),o=r[0],u=r[1],c=(0,h.Z)((function(n){return n.settings.zoomPanPinch}));return i.useEffect((function(){var n=setTimeout((function(){u((function(n){return function(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})))),r.forEach((function(e){b(n,e,t[e])}))}return n}({},n,{debounced:o.value})}))}),1500);return function(){return clearTimeout(n)}}),[o.value]),i.useEffect((function(){if(c){var n,r=c.instance.wrapperComponent,i=(n="span[data-key*='".concat(o.debounced,"' i]"),document.querySelectorAll("".concat(n))),u=i[e]||null;if(function(){var n=document.querySelectorAll("foreignObject.searched, .highlight");null===n||void 0===n||n.forEach((function(n){n.classList.remove("highlight"),n.classList.remove("searched")}))}(),r&&u&&u.parentElement){var a=Number(u.getAttribute("data-x")),l=Number(u.getAttribute("data-y")),f=1*(r.offsetLeft-a)+r.clientWidth/2-u.getBoundingClientRect().width/2,s=1*(r.offsetLeft-l)+r.clientHeight/2-u.getBoundingClientRect().height/2;!function(n,e){null===n||void 0===n||n.forEach((function(n){var e,t,r;null===(r=null===(e=n.parentElement)||void 0===e||null===(t=e.parentElement)||void 0===t?void 0:t.closest("foreignObject"))||void 0===r||r.classList.add("searched")})),n[e].classList.add("highlight")}(i,e),null===c||void 0===c||c.setTransform(f,s,1)}else t(0);return function(){o.value||t(0)}}}),[o.debounced,c,e,t]),[o,u,function(){return t((function(n){return n+1}))}]};function v(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function m(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function w(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,i,o=[],u=!0,c=!1;try{for(t=t.call(n);!(u=(r=t.next()).done)&&(o.push(r.value),!e||o.length!==e);u=!0);}catch(a){c=!0,i=a}finally{try{u||null==t.return||t.return()}finally{if(c)throw i}}return o}}(n,e)||function(n,e){if(!n)return;if("string"===typeof n)return v(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return v(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function x(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function j(){var n=x(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: ",";\n  border-radius: 4px;\n  padding: 4px 6px;\n"]);return j=function(){return n},n}function O(){var n=x(["\n  display: flex;\n"]);return O=function(){return n},n}function S(){var n=x(["\n  background: none;\n  color: ",";\n  outline: none;\n  border: none;\n  width: 112px;\n  font-size: 14px;\n  font-weight: 500;\n  transition: width 0.3s;\n\n  &::-webkit-search-decoration,\n  &::-webkit-search-cancel-button,\n  &::-webkit-search-results-button,\n  &::-webkit-search-results-decoration {\n    display: none;\n  }\n\n  &:focus {\n    width: 208px;\n  }\n"]);return S=function(){return n},n}function I(){var n=x(["\n  display: grid;\n  background: none;\n  color: ",";\n  padding: 0;\n  min-height: unset;\n\n  &:hover {\n    box-shadow: none;\n  }\n"]);return I=function(){return n},n}var A=o.ZP.div.withConfig({componentId:"sc-28d130cd-0"})(j(),(function(n){return n.theme.BACKGROUND_TERTIARY})),C=o.ZP.form.withConfig({componentId:"sc-28d130cd-1"})(O()),E=o.ZP.input.withConfig({componentId:"sc-28d130cd-2"})(S(),(function(n){return n.theme.TEXT_NORMAL})),P=o.ZP.button.withConfig({componentId:"sc-28d130cd-3"})(I(),(function(n){return n.theme.INTERACTIVE_NORMAL})),k=function(){var n=w(g(),3),e=n[0],t=n[1],i=n[2];return(0,r.jsxs)(A,{children:[(0,r.jsx)(C,{onSubmit:function(n){n.preventDefault(),i()},children:(0,r.jsx)(E,{type:"text",value:e.value,onChange:function(n){return t((function(e){return function(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})))),r.forEach((function(e){m(n,e,t[e])}))}return n}({},e,{value:n.target.value})}))},placeholder:"Search Node"})}),(0,r.jsx)(P,{"aria-label":"search",onClick:function(){return t({value:"",debounced:""})},children:e.value?(0,r.jsx)(d.Lp2,{size:18}):(0,r.jsx)(a.RB5,{size:18})})]})},T=t(374);function Z(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function R(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,i,o=[],u=!0,c=!1;try{for(t=t.call(n);!(u=(r=t.next()).done)&&(o.push(r.value),!e||o.length!==e);u=!0);}catch(a){c=!0,i=a}finally{try{u||null==t.return||t.return()}finally{if(c)throw i}}return o}}(n,e)||function(n,e){if(!n)return;if("string"===typeof n)return Z(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Z(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function z(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function N(){var n=z(["\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  flex-direction: row-reverse;\n  height: 28px;\n  padding: 4px 16px;\n  background: ",";\n  color: ",";\n\n  box-shadow: 0 1px 0px ",";\n"]);return N=function(){return n},n}function L(){var n=z(["\n  display: grid;\n  place-content: center;\n  font-size: 20px;\n  background: none;\n  color: ",";\n\n  &:hover {\n    color: ",";\n    opacity: 1;\n    box-shadow: none;\n  }\n"]);return L=function(){return n},n}var _=o.ZP.div.withConfig({componentId:"sc-5fc78907-0"})(N(),(function(n){return n.theme.BACKGROUND_PRIMARY}),(function(n){return n.theme.SILVER}),(function(n){return n.theme.BACKGROUND_TERTIARY})),D=o.ZP.button.withConfig({componentId:"sc-5fc78907-1"})(L(),(function(n){return n.theme.INTERACTIVE_NORMAL}),(function(n){return n.theme.INTERACTIVE_HOVER})),M=function(){var n=R((0,h.Z)((function(n){return[n.settings.lightmode,n.settings.performance,n.settings.hideEditor]}),T.Z),3),e=n[0],t=n[1],i=n[2],o=(0,h.Z)((function(n){return n.updateSetting})),u=(0,h.Z)((function(n){return n.zoomIn})),d=(0,h.Z)((function(n){return n.zoomOut})),p=(0,h.Z)((function(n){return n.centerView}));return(0,r.jsxs)(_,{children:[(0,r.jsx)(D,{"aria-label":"fullscreen",onClick:function(){return o("hideEditor",!i)},children:(0,r.jsx)(a.vju,{})}),(0,r.jsx)(D,{"aria-label":"switch theme",onClick:function(){return o("lightmode",!e)},children:e?(0,r.jsx)(f.Fxr,{}):(0,r.jsx)(f.YGJ,{})}),!t&&(0,r.jsx)(k,{}),!t&&(0,r.jsx)(D,{"aria-label":"save",onClick:function(){(0,c.wu)(document.querySelector("svg[id*='ref']"),{filename:"jsonvisio.com",printDate:!0})},children:(0,r.jsx)(l._hL,{})}),(0,r.jsx)(D,{"aria-label":"center canvas",onClick:p,children:(0,r.jsx)(s.XIv,{})}),(0,r.jsx)(D,{"aria-label":"zoom out",onClick:d,children:(0,r.jsx)(a.ywL,{})}),(0,r.jsx)(D,{"aria-label":"zoom in",onClick:u,children:(0,r.jsx)(a.Lfi,{})})]})},V=t(8188),U=t(4159);function B(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function K(){var n=B(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 12px;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  cursor: pointer;\n"]);return K=function(){return n},n}function G(){var n=B(["\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  width: ",";\n  height: ",";\n  min-height: 50;\n  color: ",";\n"]);return G=function(){return n},n}function X(){var n=B(['\n  pointer-events: none;\n\n  * {\n    font-family: "Roboto Mono", monospace;\n  }\n\n  &.searched {\n    border: 2px solid ',";\n    border-radius: 2px;\n  }\n\n  .highlight {\n    background-color: rgba(255, 0, 255, 0.5);\n    filter: hue-rotate();\n  }\n\n  .renderVisible {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 12px;\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n    cursor: pointer;\n  }\n"]);return X=function(){return n},n}function Y(){var n=B(["\n  font-weight: 500;\n  color: ",";\n"]);return Y=function(){return n},n}function $(){var n=B(["\n  height: 18px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  padding: 0 auto;\n  width: ",";\n"]);return $=function(){return n},n}var q=o.ZP.div.withConfig({componentId:"sc-8fe9debd-0"})(K()),H=o.ZP.pre.withConfig({componentId:"sc-8fe9debd-1"})(G(),(function(n){return n.width}),(function(n){return n.height}),(function(n){return n.theme.TEXT_NORMAL})),W=o.ZP.foreignObject.withConfig({componentId:"sc-8fe9debd-2"})(X(),(function(n){return n.theme.TEXT_POSITIVE})),F=o.ZP.span.withConfig({componentId:"sc-8fe9debd-3"})(Y(),(function(n){var e=n.theme,t=n.objectKey;return n.parent?e.NODE_KEY:t?"#5c87ff":e.TEXT_POSITIVE})),J=o.ZP.span.withConfig({componentId:"sc-8fe9debd-4"})($(),(function(n){var e=n.width;return"".concat(e-20,"px")})),Q=function(n){var e=n.width,t=n.height,i=n.value,o=n.x,u=n.y,c=(0,h.Z)((function(n){return n.settings.performance}));return(0,r.jsx)(W,{width:e,height:t,x:0,y:0,children:(0,r.jsx)(rn,{condition:c,children:(0,r.jsx)(H,{width:e,height:t,children:i.map((function(n,t){return n[1]&&(0,r.jsxs)(J,{"data-key":n[1],"data-x":o,"data-y":u,width:e,children:[(0,r.jsxs)(F,{objectKey:!0,children:[n[0],": "]}),n[1]]},t)}))})})})},nn=function(n){var e=n.width,t=n.height,i=n.value,o=n.isParent,u=void 0!==o&&o,c=n.x,a=n.y,l=(0,h.Z)((function(n){return n.settings.performance}));return(0,r.jsx)(W,{width:e,height:t,x:0,y:0,children:(0,r.jsx)(rn,{condition:l,children:(0,r.jsx)(H,{width:e,height:t,children:(0,r.jsx)(F,{"data-x":c,"data-y":a,"data-key":i,parent:u,children:i})})})})};function en(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var tn={fill:"transparent",stroke:"transparent",strokeWidth:0},rn=function(n){var e=n.condition,t=n.children;return e?(0,r.jsx)(U.Z,{rootElementClass:"renderVisible",children:t}):(0,r.jsx)(q,{children:t})},on=function(n){var e=n.properties;return(0,r.jsx)(V.Node,function(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})))),r.forEach((function(e){en(n,e,t[e])}))}return n}({},n,{label:(0,r.jsx)(V.Label,{style:tn}),children:function(n){var t,i,o=n.width,u=n.height,c=n.x,a=n.y;if(t=e.text,null!=(i=Object)&&"undefined"!==typeof Symbol&&i[Symbol.hasInstance]?i[Symbol.hasInstance](t):t instanceof i){var l=Object.entries(e.text);return(0,r.jsx)(Q,{value:l,width:o,height:u,x:c,y:a})}return(0,r.jsx)(nn,{isParent:e.data.isParent,value:e.text,width:o,height:u,x:c,y:a})}}))},un=t(1676);function cn(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function an(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,i,o=[],u=!0,c=!1;try{for(t=t.call(n);!(u=(r=t.next()).done)&&(o.push(r.value),!e||o.length!==e);u=!0);}catch(a){c=!0,i=a}finally{try{u||null==t.return||t.return()}finally{if(c)throw i}}return o}}(n,e)||function(n,e){if(!n)return;if("string"===typeof n)return cn(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return cn(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var ln=function(){var n=(0,h.Z)((function(n){return n.json})),e=an((0,h.Z)((function(n){return[n.settings.expand,n.settings.layout]}),T.Z),2),t=e[0],o=e[1],u=an(i.useState([]),2),c=u[0],a=u[1],l=an(i.useState([]),2),f=l[0],s=l[1],d=an(i.useState({width:2e3,height:2e3}),2),p=d[0],b=d[1];i.useEffect((function(){var e=(0,un.h)(n,t),r=e.nodes,i=e.edges;a(r),s(i)}),[n,t]);return(0,r.jsx)(V.Canvas,{nodes:c,edges:f,maxWidth:p.width,maxHeight:p.height,direction:o,onCanvasClick:function(){var n=document.querySelector("input:focus");n&&n.blur()},onLayoutChange:function(n){n.width&&n.height&&b({width:n.width,height:n.height})},node:on,zoomable:!1,readonly:!0},o)};function fn(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function sn(){var n=fn(["\n  position: relative;\n"]);return sn=function(){return n},n}function dn(){var n=fn(["\n  position: absolute;\n  width: 100%;\n  height: calc(100vh - 36px);\n\n  :active {\n    cursor: move;\n  }\n\n  rect {\n    fill: ",";\n  }\n"]);return dn=function(){return n},n}var hn=o.ZP.div.withConfig({componentId:"sc-a0d71090-0"})(sn()),pn=o.ZP.div.withConfig({componentId:"sc-a0d71090-1"})(dn(),(function(n){return n.theme.BACKGROUND_NODE})),bn={step:.05},yn=function(){var n=(0,h.Z)((function(n){return n.updateSetting}));return(0,r.jsxs)(hn,{children:[(0,r.jsx)(M,{}),(0,r.jsx)(pn,{children:(0,r.jsx)(u.d$,{maxScale:1.8,minScale:.4,initialScale:.9,wheel:bn,onInit:function(e){n("zoomPanPinch",e)},children:(0,r.jsx)(u.Uv,{wrapperStyle:{width:"100%",height:"100%",overflow:"hidden"},children:(0,r.jsx)(ln,{})})})})]})}}}]);