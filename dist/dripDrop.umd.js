!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.dripDrop=t():e.dripDrop=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=4)}([function(e,t,n){"use strict";function r(){var e=arguments;if(1==e.length)var t={init:a},n=e[0];else var t=e[0],n=e[1];var c={};-1!==[Error,EvalError,RangeError,ReferenceError,SyntaxError,TypeError,URIError].indexOf(t)&&(t=i(t,c));var d="function"==typeof t;n[f]=d?t[f]:t;var h=new n(t);c.name=h.name,!h[u]&&d&&(h[u]=function(){t.apply(this,arguments)});var p=function(){};p[f]=h;var m=h.name?h.name:"";if(h[u]===s||h[u]===a)var g=new Function("F","return function "+m+"(){return new F()}")(p);else var g=new Function("F","i","u","n","return function "+m+"(){ var x=new F(),r=i.apply(x,arguments)\nif(r===n)\nreturn x\nelse if(r===u)\nreturn n\nelse\nreturn r\n}")(p,h[u],r[v]);h.constructor=g;for(var y in h)o(g,h,y);for(var y in t)l.call(t,y)&&g[y]===s&&o(g,t,y);return g.parent=t,g[f]=h,g}function i(e,t){function n(){var n=new e(arguments[0]);return n.name=t.name,this.message=n.message,Object.defineProperty?Object.defineProperty(this,"stack",{get:function(){return n.stack},configurable:!0}):this.stack=n.stack,this}var r=function(){};return r.prototype=e.prototype,n.prototype=new r,n}function o(e,t,n){try{var r=Object.getOwnPropertyDescriptor(t,n);r.get!==s||r.get!==s&&Object.defineProperty!==s?Object.defineProperty(e,n,r):e[n]=t[n]}catch(e){}}var s,a=function(){},f="prototype",v="undefined",u="init",l={}.hasOwnProperty;r[v]={},e.exports=r},function(e,t,n){function r(e,t,n){i(e[t][n],n),i(e[a(t)],n)}function i(e,t){if(void 0!==e)for(var n=0;n<e.length;n++)e[n](t)}function o(e,t,n,r){if(n instanceof Function&&(r=n,n=void 0),void 0!==n&&void 0!==r){var i=e[t][n];void 0===i&&(i=e[t][n]=[]),i.push(r)}else e[a(t)].push(r)}function s(e,t,n,r){if(n instanceof Function&&(r=n,n=void 0),void 0!==n&&void 0!==r)f(e[t][n],r);else if(void 0!==n)delete e[t][n];else if(void 0!==r){var i=a(t);f(e[i],r)}else{var i=a(t);e[t]={},e[i]=[]}}function a(e){return"ifonHandlers"===e?"ifonAllHandlers":"ifoffHandlers"===e?"ifoffAllHandlers":void 0}function f(e,t){var n=e.indexOf(t);e.splice(n,1)}function v(e){var t={};return e.forEach(function(e){t[e]=!0}),t}var u=n(5).EventEmitter,l=n(0);e.exports=l(u,function(e){this.init=function(){e.apply(this,arguments),this.ifonHandlers={},this.ifoffHandlers={},this.ifonAllHandlers=[],this.ifoffAllHandlers=[]},this.ifon=function(e,t){if(e instanceof Function){t=e;for(var n in this._events)this.listeners(n).length>0&&t(n)}else this.listeners(e).length>0&&t(e);o(this,"ifonHandlers",e,t)},this.removeIfon=function(e,t){s(this,"ifonHandlers",e,t)},this.ifoff=function(e,t){o(this,"ifoffHandlers",e,t)},this.removeIfoff=function(e,t){s(this,"ifoffHandlers",e,t)},this.proxy=function(e,t){if(void 0===t&&(t={}),void 0!==t.except)var n=v(t.except),r=function(e){return!(e in n)};else if(void 0!==t.only)var i=v(t.only),r=function(e){return e in i};else var r=function(){return!0};var o,s=this;this.ifon(function(t){r(t)&&e.on(t,o=function(){s.emit.apply(s,[t].concat(Array.prototype.slice.call(arguments)))})}),this.ifoff(function(t){r(t)&&e.off(t,o)})},this.on=this.addListener=function(t,n){var i=0===this.listeners(t).length;e.prototype.on.apply(this,arguments),i&&r(this,"ifonHandlers",t)},this.off=this.removeListener=function(t,n){var i=1===this.listeners(t).length;e.prototype.removeListener.apply(this,arguments),i&&r(this,"ifoffHandlers",t)},this.removeAllListeners=function(t){var n=[];if(void 0!==t)this.listeners(t).length>0&&n.push(t);else for(var t in this._events)this.listeners(t).length>0&&n.push(t);e.prototype.removeAllListeners.apply(this,arguments);for(var i=0;i<n.length;i++)r(this,"ifoffHandlers",n[i])}})},function(e,t,n){function r(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()})}var i=n(1),o=n(0);e.exports=o(i,function(e){this.init=function(t,n){var i=this;e.init.call(this),n||(n={}),t.setAttribute("draggable","true");var o={node:t},s=!1;this.ifon("start",function(){t.addEventListener("dragstart",o.start=function(e){if(void 0!==n.image){if(!0!==n.image){if("string"==typeof n.image)var a=new Image(n.image);else var a=n.image;e.dataTransfer.setDragImage(a,a.width,a.height)}}else e.dataTransfer.setDragImage(new Image,0,0);var f=e.dataTransfer;if(i.emit("start",function(e,t){f.setData(e,t);var n=r(e);n!==e&&f.setData(n,t)},e),s){var v;document.addEventListener("dragover",o.docOver=function(e){void 0!==v&&e.pageX===v.x&&e.pageY===v.y||(v={x:e.pageX,y:e.pageY},i.emit("move",e))},!0),t.addEventListener("dragend",function e(){document.removeEventListener("dragover",o.docOver,!0),o.node.removeEventListener("dragend",e)})}})}),this.ifon("move",function(){s=!0}),this.ifon("end",function(){t.addEventListener("dragend",o.end=function(e){i.emit("end",e)})}),this.ifoff("start",function(){o.node.removeEventListener("dragstart",o.start)}),this.ifoff("move",function(){s=!1,o.docOver&&document.removeEventListener("dragover",o.docOver,!0)}),this.ifoff("end",function(){o.node.removeEventListener("dragend",o.end)}),n.start&&this.on("start",n.start),n.move&&this.on("move",n.move),n.end&&this.on("end",n.end)}})},function(e,t,n){function r(e){for(var t in e)if(e[t])return!0;return!1}function i(e,t,n){var r=new FileReader;r.onloadend=function(e){e.target.readyState==FileReader.DONE&&n(void 0,r.result)},r.onerror=function(e){n(e)},r[t](e)}function o(e){var t={};e.files.length>0&&(t.Files=e.files);for(var n=0;n<e.types.length;n++){var r=e.types[n];if("Files"===r){t.Files=e.files;for(var o=0;o<t.Files.length;o++){var f=t.Files[o];f.getText=function(e){i(f,"readAsText",e)},f.getBuffer=function(e){i(f,"readAsArrayBuffer",e)}}}else{s(t,e,r);var v=a(r);v!==r&&s(t,e,v)}}return t}function s(e,t,n){Object.defineProperty(e,n,{enumerable:!0,get:function(){return t.getData(n)}})}function a(e){return e.replace(/(-[a-z])/g,function(e,t){return t[1].toUpperCase()})}var f=n(1),v=n(0);e.exports=v(f,function(e){this.init=function(t,n){var i=this;if(e.init.call(this),n||(n={}),n.allow)var s=n.allow,a=function(e){for(var t=0;t<s.length;t++)if(-1!==e.indexOf(s[t]))return!0;return!1};else var a=function(){return!0};var f,v={node:t},u=0;this.ifon("move",function(){var e,n;t.addEventListener("dragover",v.over=function(t){var r=t.stopPropagation;t.stopPropagation=function(){n=!0},void 0!==e&&t.pageX===e.x&&t.pageY===e.y||(e={x:t.pageX,y:t.pageY},a(f)&&(n=!1,i.emit("move",f,t))),n&&r.call(t)})}),this.ifon("drop",function(){t.addEventListener("drop",v.drop=function(e){if(e.preventDefault(),a(f)){var t=o(e.dataTransfer);i.emit("drop",t,e)}})});var l={};this.ifon(function(e){l[e]=!0,r(l)&&(t.addEventListener("dragenter",v.enter=function(e){if(1===++u){var t=o(e.dataTransfer);f=Object.keys(t),a(f)&&i.emit("enter",f,e)}else i.emit("in",f,e)}),t.addEventListener("dragleave",v.leave=function(e){u--,0===u?a(f)&&i.emit("leave",f,e):i.emit("out",f,e)}),t.addEventListener("drop",v.enterLeaveDropHandler=function(e){u=0}))}),this.ifoff(function(e){l[e]=!1,r(l)||(v.node.removeEventListener("dragenter",v.start),v.node.removeEventListener("dragleave",v.end),v.node.removeEventListener("drop",v.enterLeaveDropHandler))}),this.ifoff("move",function(){v.node.removeEventListener("dragover",v.over)}),this.ifoff("drop",function(){v.node.removeEventListener("drop",v.drop)}),n.enter&&this.on("enter",n.enter),n.move&&this.on("move",n.move),n.leave&&this.on("leave",n.leave),n.in&&this.on("in",n.in),n.out&&this.on("out",n.out),n.drop&&this.on("drop",n.drop)}})},function(e,t,n){t.drop=n(3),t.drag=n(2),t.dontPreventDefault=function(){document.removeEventListener("dragenter",r,!0),document.removeEventListener("dragover",i,!0)},t.ghostItem=function(e,t){void 0===t&&(t=1e3);var n=e.cloneNode(!0);return n.style.position="absolute",n.style.top="-100px",n.style.width=e.clientWidth+"px",n.style.opacity=".6",n.style.pointerEvents="none",n.style["z-index"]=t,n},t.moveAbsoluteNode=function(e,t,n){e.style.left=t+"px",e.style.top=n+"px"};var r,i;document.addEventListener("dragenter",r=function(e){e.preventDefault()},!0),document.addEventListener("dragover",i=function(e){e.preventDefault()},!0)},function(e,t){function n(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function r(e){return"function"==typeof e}function i(e){return"number"==typeof e}function o(e){return"object"==typeof e&&null!==e}function s(e){return void 0===e}e.exports=n,n.EventEmitter=n,n.prototype._events=void 0,n.prototype._maxListeners=void 0,n.defaultMaxListeners=10,n.prototype.setMaxListeners=function(e){if(!i(e)||e<0||isNaN(e))throw TypeError("n must be a positive number");return this._maxListeners=e,this},n.prototype.emit=function(e){var t,n,i,a,f,v;if(this._events||(this._events={}),"error"===e&&(!this._events.error||o(this._events.error)&&!this._events.error.length)){if((t=arguments[1])instanceof Error)throw t;var u=new Error('Uncaught, unspecified "error" event. ('+t+")");throw u.context=t,u}if(n=this._events[e],s(n))return!1;if(r(n))switch(arguments.length){case 1:n.call(this);break;case 2:n.call(this,arguments[1]);break;case 3:n.call(this,arguments[1],arguments[2]);break;default:a=Array.prototype.slice.call(arguments,1),n.apply(this,a)}else if(o(n))for(a=Array.prototype.slice.call(arguments,1),v=n.slice(),i=v.length,f=0;f<i;f++)v[f].apply(this,a);return!0},n.prototype.addListener=function(e,t){var i;if(!r(t))throw TypeError("listener must be a function");return this._events||(this._events={}),this._events.newListener&&this.emit("newListener",e,r(t.listener)?t.listener:t),this._events[e]?o(this._events[e])?this._events[e].push(t):this._events[e]=[this._events[e],t]:this._events[e]=t,o(this._events[e])&&!this._events[e].warned&&(i=s(this._maxListeners)?n.defaultMaxListeners:this._maxListeners)&&i>0&&this._events[e].length>i&&(this._events[e].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[e].length),"function"==typeof console.trace&&console.trace()),this},n.prototype.on=n.prototype.addListener,n.prototype.once=function(e,t){function n(){this.removeListener(e,n),i||(i=!0,t.apply(this,arguments))}if(!r(t))throw TypeError("listener must be a function");var i=!1;return n.listener=t,this.on(e,n),this},n.prototype.removeListener=function(e,t){var n,i,s,a;if(!r(t))throw TypeError("listener must be a function");if(!this._events||!this._events[e])return this;if(n=this._events[e],s=n.length,i=-1,n===t||r(n.listener)&&n.listener===t)delete this._events[e],this._events.removeListener&&this.emit("removeListener",e,t);else if(o(n)){for(a=s;a-- >0;)if(n[a]===t||n[a].listener&&n[a].listener===t){i=a;break}if(i<0)return this;1===n.length?(n.length=0,delete this._events[e]):n.splice(i,1),this._events.removeListener&&this.emit("removeListener",e,t)}return this},n.prototype.removeAllListeners=function(e){var t,n;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[e]&&delete this._events[e],this;if(0===arguments.length){for(t in this._events)"removeListener"!==t&&this.removeAllListeners(t);return this.removeAllListeners("removeListener"),this._events={},this}if(n=this._events[e],r(n))this.removeListener(e,n);else if(n)for(;n.length;)this.removeListener(e,n[n.length-1]);return delete this._events[e],this},n.prototype.listeners=function(e){return this._events&&this._events[e]?r(this._events[e])?[this._events[e]]:this._events[e].slice():[]},n.prototype.listenerCount=function(e){if(this._events){var t=this._events[e];if(r(t))return 1;if(t)return t.length}return 0},n.listenerCount=function(e,t){return e.listenerCount(t)}}])});