webpackJsonp([1],{191:function(t,e,r){r(467);var n=r(47)(r(313),r(494),"data-v-1a536808",null);t.exports=n.exports},250:function(t,e,r){"use strict";function n(t){var e,r;this.promise=new t(function(t,n){if(void 0!==e||void 0!==r)throw TypeError("Bad Promise constructor");e=t,r=n}),this.resolve=o(e),this.reject=o(r)}var o=r(81);t.exports.f=function(t){return new n(t)}},264:function(t,e,r){var n=r(48),o=r(7)("toStringTag"),i="Arguments"==n(function(){return arguments}()),a=function(t,e){try{return t[e]}catch(t){}};t.exports=function(t){var e,r,s;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=a(e=Object(t),o))?r:i?n(e):"Object"==(s=n(e))&&"function"==typeof e.callee?"Arguments":s}},265:function(t,e){t.exports=function(t){try{return{e:!1,v:t()}}catch(t){return{e:!0,v:t}}}},266:function(t,e,r){var n=r(17),o=r(15),i=r(250);t.exports=function(t,e){if(n(t),o(e)&&e.constructor===t)return e;var r=i.f(t);return(0,r.resolve)(e),r.promise}},267:function(t,e,r){var n=r(17),o=r(81),i=r(7)("species");t.exports=function(t,e){var r,a=n(t).constructor;return void 0===a||void 0==(r=n(a)[i])?e:o(r)}},268:function(t,e,r){var n,o,i,a=r(82),s=r(339),c=r(83),u=r(50),f=r(4),l=f.process,h=f.setImmediate,p=f.clearImmediate,v=f.MessageChannel,d=f.Dispatch,m=0,g={},y=function(){var t=+this;if(g.hasOwnProperty(t)){var e=g[t];delete g[t],e()}},_=function(t){y.call(t.data)};h&&p||(h=function(t){for(var e=[],r=1;arguments.length>r;)e.push(arguments[r++]);return g[++m]=function(){s("function"==typeof t?t:Function(t),e)},n(m),m},p=function(t){delete g[t]},"process"==r(48)(l)?n=function(t){l.nextTick(a(y,t,1))}:d&&d.now?n=function(t){d.now(a(y,t,1))}:v?(o=new v,i=o.port2,o.port1.onmessage=_,n=a(i.postMessage,i,1)):f.addEventListener&&"function"==typeof postMessage&&!f.importScripts?(n=function(t){f.postMessage(t+"","*")},f.addEventListener("message",_,!1)):n="onreadystatechange"in u("script")?function(t){c.appendChild(u("script")).onreadystatechange=function(){c.removeChild(this),y.call(t)}}:function(t){setTimeout(a(y,t,1),0)}),t.exports={set:h,clear:p}},313:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(335),o=r.n(n),i=r(334),a=r.n(i),s=r(49),c=r.n(s),u=r(80);e.default={data:function(){return{loginForm:{username:"",password:""},rules:{username:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}]},showLogin:!1}},mounted:function(){this.showLogin=!0,this.adminInfo.id||this.getAdminData()},computed:c()({},r.i(u.b)(["adminInfo"])),methods:c()({},r.i(u.c)(["getAdminData"]),{submitForm:function(t){var e=this;return a()(o.a.mark(function r(){return o.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:e.$refs[t].validate(function(){var t=a()(o.a.mark(function t(r){var n;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!r){t.next=7;break}return t.next=3,login({user_name:e.loginForm.username,password:e.loginForm.password});case 3:n=t.sent,1==n.status?(e.$message({type:"success",message:"登录成功"}),e.$router.push("manage")):e.$message({type:"error",message:n.message}),t.next=9;break;case 7:return e.$notify.error({title:"错误",message:"请输入正确的用户名密码",offset:100}),t.abrupt("return",!1);case 9:case"end":return t.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}());case 1:case"end":return r.stop()}},r,e)}))()}}),watch:{adminInfo:function(t){t.id&&(this.$message({type:"success",message:"检测到您之前登录过，将自动登录"}),this.$router.push("manage"))}}}},333:function(t,e,r){t.exports={default:r(336),__esModule:!0}},334:function(t,e,r){"use strict";e.__esModule=!0;var n=r(333),o=function(t){return t&&t.__esModule?t:{default:t}}(n);e.default=function(t){return function(){var e=t.apply(this,arguments);return new o.default(function(t,r){function n(i,a){try{var s=e[i](a),c=s.value}catch(t){return void r(t)}if(!s.done)return o.default.resolve(c).then(function(t){n("next",t)},function(t){n("throw",t)});t(c)}return n("next")})}}},335:function(t,e,r){t.exports=r(486)},336:function(t,e,r){r(85),r(86),r(87),r(348),r(349),r(350),t.exports=r(14).Promise},337:function(t,e){t.exports=function(t,e,r,n){if(!(t instanceof e)||void 0!==n&&n in t)throw TypeError(r+": incorrect invocation!");return t}},338:function(t,e,r){var n=r(82),o=r(341),i=r(340),a=r(17),s=r(84),c=r(347),u={},f={},e=t.exports=function(t,e,r,l,h){var p,v,d,m,g=h?function(){return t}:c(t),y=n(r,l,e?2:1),_=0;if("function"!=typeof g)throw TypeError(t+" is not iterable!");if(i(g)){for(p=s(t.length);p>_;_++)if((m=e?y(a(v=t[_])[0],v[1]):y(t[_]))===u||m===f)return m}else for(d=g.call(t);!(v=d.next()).done;)if((m=o(d,y,v.value,e))===u||m===f)return m};e.BREAK=u,e.RETURN=f},339:function(t,e){t.exports=function(t,e,r){var n=void 0===r;switch(e.length){case 0:return n?t():t.call(r);case 1:return n?t(e[0]):t.call(r,e[0]);case 2:return n?t(e[0],e[1]):t.call(r,e[0],e[1]);case 3:return n?t(e[0],e[1],e[2]):t.call(r,e[0],e[1],e[2]);case 4:return n?t(e[0],e[1],e[2],e[3]):t.call(r,e[0],e[1],e[2],e[3])}return t.apply(r,e)}},340:function(t,e,r){var n=r(27),o=r(7)("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(n.Array===t||i[o]===t)}},341:function(t,e,r){var n=r(17);t.exports=function(t,e,r,o){try{return o?e(n(r)[0],r[1]):e(r)}catch(e){var i=t.return;throw void 0!==i&&n(i.call(t)),e}}},342:function(t,e,r){var n=r(7)("iterator"),o=!1;try{var i=[7][n]();i.return=function(){o=!0},Array.from(i,function(){throw 2})}catch(t){}t.exports=function(t,e){if(!e&&!o)return!1;var r=!1;try{var i=[7],a=i[n]();a.next=function(){return{done:r=!0}},i[n]=function(){return a},t(i)}catch(t){}return r}},343:function(t,e,r){var n=r(4),o=r(268).set,i=n.MutationObserver||n.WebKitMutationObserver,a=n.process,s=n.Promise,c="process"==r(48)(a);t.exports=function(){var t,e,r,u=function(){var n,o;for(c&&(n=a.domain)&&n.exit();t;){o=t.fn,t=t.next;try{o()}catch(n){throw t?r():e=void 0,n}}e=void 0,n&&n.enter()};if(c)r=function(){a.nextTick(u)};else if(!i||n.navigator&&n.navigator.standalone)if(s&&s.resolve){var f=s.resolve(void 0);r=function(){f.then(u)}}else r=function(){o.call(n,u)};else{var l=!0,h=document.createTextNode("");new i(u).observe(h,{characterData:!0}),r=function(){h.data=l=!l}}return function(n){var o={fn:n,next:void 0};e&&(e.next=o),t||(t=o,r()),e=o}}},344:function(t,e,r){var n=r(9);t.exports=function(t,e,r){for(var o in e)r&&t[o]?t[o]=e[o]:n(t,o,e[o]);return t}},345:function(t,e,r){"use strict";var n=r(4),o=r(14),i=r(10),a=r(8),s=r(7)("species");t.exports=function(t){var e="function"==typeof o[t]?o[t]:n[t];a&&e&&!e[s]&&i.f(e,s,{configurable:!0,get:function(){return this}})}},346:function(t,e,r){var n=r(4),o=n.navigator;t.exports=o&&o.userAgent||""},347:function(t,e,r){var n=r(264),o=r(7)("iterator"),i=r(27);t.exports=r(14).getIteratorMethod=function(t){if(void 0!=t)return t[o]||t["@@iterator"]||i[n(t)]}},348:function(t,e,r){"use strict";var n,o,i,a,s=r(18),c=r(4),u=r(82),f=r(264),l=r(26),h=r(15),p=r(81),v=r(337),d=r(338),m=r(267),g=r(268).set,y=r(343)(),_=r(250),w=r(265),x=r(346),b=r(266),L=c.TypeError,E=c.process,P=E&&E.versions,j=P&&P.v8||"",F=c.Promise,k="process"==f(E),O=function(){},R=o=_.f,T=!!function(){try{var t=F.resolve(1),e=(t.constructor={})[r(7)("species")]=function(t){t(O,O)};return(k||"function"==typeof PromiseRejectionEvent)&&t.then(O)instanceof e&&0!==j.indexOf("6.6")&&-1===x.indexOf("Chrome/66")}catch(t){}}(),N=function(t){var e;return!(!h(t)||"function"!=typeof(e=t.then))&&e},S=function(t,e){if(!t._n){t._n=!0;var r=t._c;y(function(){for(var n=t._v,o=1==t._s,i=0;r.length>i;)!function(e){var r,i,a,s=o?e.ok:e.fail,c=e.resolve,u=e.reject,f=e.domain;try{s?(o||(2==t._h&&M(t),t._h=1),!0===s?r=n:(f&&f.enter(),r=s(n),f&&(f.exit(),a=!0)),r===e.promise?u(L("Promise-chain cycle")):(i=N(r))?i.call(r,c,u):c(r)):u(n)}catch(t){f&&!a&&f.exit(),u(t)}}(r[i++]);t._c=[],t._n=!1,e&&!t._h&&A(t)})}},A=function(t){g.call(c,function(){var e,r,n,o=t._v,i=C(t);if(i&&(e=w(function(){k?E.emit("unhandledRejection",o,t):(r=c.onunhandledrejection)?r({promise:t,reason:o}):(n=c.console)&&n.error&&n.error("Unhandled promise rejection",o)}),t._h=k||C(t)?2:1),t._a=void 0,i&&e.e)throw e.v})},C=function(t){return 1!==t._h&&0===(t._a||t._c).length},M=function(t){g.call(c,function(){var e;k?E.emit("rejectionHandled",t):(e=c.onrejectionhandled)&&e({promise:t,reason:t._v})})},$=function(t){var e=this;e._d||(e._d=!0,e=e._w||e,e._v=t,e._s=2,e._a||(e._a=e._c.slice()),S(e,!0))},G=function(t){var e,r=this;if(!r._d){r._d=!0,r=r._w||r;try{if(r===t)throw L("Promise can't be resolved itself");(e=N(t))?y(function(){var n={_w:r,_d:!1};try{e.call(t,u(G,n,1),u($,n,1))}catch(t){$.call(n,t)}}):(r._v=t,r._s=1,S(r,!1))}catch(t){$.call({_w:r,_d:!1},t)}}};T||(F=function(t){v(this,F,"Promise","_h"),p(t),n.call(this);try{t(u(G,this,1),u($,this,1))}catch(t){$.call(this,t)}},n=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1},n.prototype=r(344)(F.prototype,{then:function(t,e){var r=R(m(this,F));return r.ok="function"!=typeof t||t,r.fail="function"==typeof e&&e,r.domain=k?E.domain:void 0,this._c.push(r),this._a&&this._a.push(r),this._s&&S(this,!1),r.promise},catch:function(t){return this.then(void 0,t)}}),i=function(){var t=new n;this.promise=t,this.resolve=u(G,t,1),this.reject=u($,t,1)},_.f=R=function(t){return t===F||t===a?new i(t):o(t)}),l(l.G+l.W+l.F*!T,{Promise:F}),r(29)(F,"Promise"),r(345)("Promise"),a=r(14).Promise,l(l.S+l.F*!T,"Promise",{reject:function(t){var e=R(this);return(0,e.reject)(t),e.promise}}),l(l.S+l.F*(s||!T),"Promise",{resolve:function(t){return b(s&&this===a?F:this,t)}}),l(l.S+l.F*!(T&&r(342)(function(t){F.all(t).catch(O)})),"Promise",{all:function(t){var e=this,r=R(e),n=r.resolve,o=r.reject,i=w(function(){var r=[],i=0,a=1;d(t,!1,function(t){var s=i++,c=!1;r.push(void 0),a++,e.resolve(t).then(function(t){c||(c=!0,r[s]=t,--a||n(r))},o)}),--a||n(r)});return i.e&&o(i.v),r.promise},race:function(t){var e=this,r=R(e),n=r.reject,o=w(function(){d(t,!1,function(t){e.resolve(t).then(r.resolve,n)})});return o.e&&n(o.v),r.promise}})},349:function(t,e,r){"use strict";var n=r(26),o=r(14),i=r(4),a=r(267),s=r(266);n(n.P+n.R,"Promise",{finally:function(t){var e=a(this,o.Promise||i.Promise),r="function"==typeof t;return this.then(r?function(r){return s(e,t()).then(function(){return r})}:t,r?function(r){return s(e,t()).then(function(){throw r})}:t)}})},350:function(t,e,r){"use strict";var n=r(26),o=r(250),i=r(265);n(n.S,"Promise",{try:function(t){var e=o.f(this),r=i(t);return(r.e?e.reject:e.resolve)(r.v),e.promise}})},356:function(t,e,r){e=t.exports=r(185)(!1),e.push([t.i,".allcover[data-v-1a536808]{position:absolute;top:0;right:0}.ctt[data-v-1a536808]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.tb[data-v-1a536808]{position:absolute;top:50%;transform:translateY(-50%)}.lr[data-v-1a536808]{position:absolute;left:50%;transform:translateX(-50%)}.login_page[data-v-1a536808]{background-color:#324057}.manage_tip[data-v-1a536808]{position:absolute;width:100%;top:-100px;left:0}.manage_tip p[data-v-1a536808]{font-size:34px;color:#fff}.form_contianer[data-v-1a536808]{width:320px;height:210px;position:absolute;top:50%;left:50%;margin-top:-105px;margin-left:-160px;padding:25px;border-radius:5px;text-align:center;background-color:#fff}.form_contianer .submit_btn[data-v-1a536808]{width:100%;font-size:16px}.tip[data-v-1a536808]{font-size:12px;color:red}.form-fade-enter-active[data-v-1a536808],.form-fade-leave-active[data-v-1a536808]{transition:all 1s}.form-fade-enter[data-v-1a536808],.form-fade-leave-active[data-v-1a536808]{transform:translate3d(0,-50px,0);opacity:0}",""])},467:function(t,e,r){var n=r(356);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);r(186)("217dc6c8",n,!0)},486:function(t,e,r){var n=function(){return this}()||Function("return this")(),o=n.regeneratorRuntime&&Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime")>=0,i=o&&n.regeneratorRuntime;if(n.regeneratorRuntime=void 0,t.exports=r(487),o)n.regeneratorRuntime=i;else try{delete n.regeneratorRuntime}catch(t){n.regeneratorRuntime=void 0}},487:function(t,e){!function(e){"use strict";function r(t,e,r,n){var i=e&&e.prototype instanceof o?e:o,a=Object.create(i.prototype),s=new p(n||[]);return a._invoke=u(t,r,s),a}function n(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}function o(){}function i(){}function a(){}function s(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function c(t){function e(r,o,i,a){var s=n(t[r],t,o);if("throw"!==s.type){var c=s.arg,u=c.value;return u&&"object"==typeof u&&y.call(u,"__await")?Promise.resolve(u.__await).then(function(t){e("next",t,i,a)},function(t){e("throw",t,i,a)}):Promise.resolve(u).then(function(t){c.value=t,i(c)},a)}a(s.arg)}function r(t,r){function n(){return new Promise(function(n,o){e(t,r,n,o)})}return o=o?o.then(n,n):n()}var o;this._invoke=r}function u(t,e,r){var o=P;return function(i,a){if(o===F)throw new Error("Generator is already running");if(o===k){if("throw"===i)throw a;return d()}for(r.method=i,r.arg=a;;){var s=r.delegate;if(s){var c=f(s,r);if(c){if(c===O)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===P)throw o=k,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=F;var u=n(t,e,r);if("normal"===u.type){if(o=r.done?k:j,u.arg===O)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(o=k,r.method="throw",r.arg=u.arg)}}}function f(t,e){var r=t.iterator[e.method];if(r===m){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=m,f(t,e),"throw"===e.method))return O;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return O}var o=n(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,O;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=m),e.delegate=null,O):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,O)}function l(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function h(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function p(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(l,this),this.reset(!0)}function v(t){if(t){var e=t[w];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(y.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=m,e.done=!0,e};return n.next=n}}return{next:d}}function d(){return{value:m,done:!0}}var m,g=Object.prototype,y=g.hasOwnProperty,_="function"==typeof Symbol?Symbol:{},w=_.iterator||"@@iterator",x=_.asyncIterator||"@@asyncIterator",b=_.toStringTag||"@@toStringTag",L="object"==typeof t,E=e.regeneratorRuntime;if(E)return void(L&&(t.exports=E));E=e.regeneratorRuntime=L?t.exports:{},E.wrap=r;var P="suspendedStart",j="suspendedYield",F="executing",k="completed",O={},R={};R[w]=function(){return this};var T=Object.getPrototypeOf,N=T&&T(T(v([])));N&&N!==g&&y.call(N,w)&&(R=N);var S=a.prototype=o.prototype=Object.create(R);i.prototype=S.constructor=a,a.constructor=i,a[b]=i.displayName="GeneratorFunction",E.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===i||"GeneratorFunction"===(e.displayName||e.name))},E.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,a):(t.__proto__=a,b in t||(t[b]="GeneratorFunction")),t.prototype=Object.create(S),t},E.awrap=function(t){return{__await:t}},s(c.prototype),c.prototype[x]=function(){return this},E.AsyncIterator=c,E.async=function(t,e,n,o){var i=new c(r(t,e,n,o));return E.isGeneratorFunction(e)?i:i.next().then(function(t){return t.done?t.value:i.next()})},s(S),S[b]="Generator",S[w]=function(){return this},S.toString=function(){return"[object Generator]"},E.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},E.values=v,p.prototype={constructor:p,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=m,this.done=!1,this.delegate=null,this.method="next",this.arg=m,this.tryEntries.forEach(h),!t)for(var e in this)"t"===e.charAt(0)&&y.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=m)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){function e(e,n){return i.type="throw",i.arg=t,r.next=e,n&&(r.method="next",r.arg=m),!!n}if(this.done)throw t;for(var r=this,n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],i=o.completion;if("root"===o.tryLoc)return e("end");if(o.tryLoc<=this.prev){var a=y.call(o,"catchLoc"),s=y.call(o,"finallyLoc");if(a&&s){if(this.prev<o.catchLoc)return e(o.catchLoc,!0);if(this.prev<o.finallyLoc)return e(o.finallyLoc)}else if(a){if(this.prev<o.catchLoc)return e(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return e(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&y.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,O):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),O},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),h(r),O}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;h(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:v(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=m),O}}}(function(){return this}()||Function("return this")())},494:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"login_page fillcontain"},[r("transition",{attrs:{name:"form-fade",mode:"in-out"}},[r("section",{directives:[{name:"show",rawName:"v-show",value:t.showLogin,expression:"showLogin"}],staticClass:"form_contianer"},[r("div",{staticClass:"manage_tip"},[r("p",[t._v("elm后台管理系统")])]),t._v(" "),r("el-form",{ref:"loginForm",attrs:{model:t.loginForm,rules:t.rules}},[r("el-form-item",{attrs:{prop:"username"}},[r("el-input",{attrs:{placeholder:"用户名"},model:{value:t.loginForm.username,callback:function(e){t.$set(t.loginForm,"username",e)},expression:"loginForm.username"}},[r("span",[t._v("dsfsf")])])],1),t._v(" "),r("el-form-item",{attrs:{prop:"password"}},[r("el-input",{attrs:{type:"password",placeholder:"密码"},model:{value:t.loginForm.password,callback:function(e){t.$set(t.loginForm,"password",e)},expression:"loginForm.password"}})],1),t._v(" "),r("el-form-item",[r("el-button",{staticClass:"submit_btn",attrs:{type:"primary"},on:{click:function(e){t.submitForm("loginForm")}}},[t._v("登陆")])],1)],1),t._v(" "),r("p",{staticClass:"tip"},[t._v("温馨提示：")]),t._v(" "),r("p",{staticClass:"tip"},[t._v("未登录过的新用户，自动注册")]),t._v(" "),r("p",{staticClass:"tip"},[t._v("注册过的用户可凭账号密码登录")])],1)])],1)},staticRenderFns:[]}}});