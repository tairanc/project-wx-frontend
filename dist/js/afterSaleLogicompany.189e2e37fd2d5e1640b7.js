(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{MX37:function(e,t,n){"use strict";(function(e){var o=l(n("Zx67")),a=l(n("kiBT")),r=l(n("OvRC")),u=l(n("pFYg")),c=l(n("C4MV")),i=l(n("woOf"));function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var f,d=i.default||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},p=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),(0,c.default)(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),s=n("U7vG"),h=(f=s)&&f.__esModule?f:{default:f},m=n("4n+p"),v=n("f2Hk"),g=n("d2xe"),y=n("5qLU");function w(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==(void 0===t?"undefined":(0,u.default)(t))&&"function"!=typeof t?e:t}var b=(0,v.concatPageAndType)("logicompany"),E=(0,v.actionAxios)("logicompany"),_={init:{url:y.WXAPI+"/user/sold/logistics",method:"get"}},k=function(t){function n(){var t,a,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n);for(var u=arguments.length,c=Array(u),i=0;i<u;i++)c[i]=arguments[i];return a=r=w(this,(t=n.__proto__||(0,o.default)(n)).call.apply(t,[this].concat(c))),r.getCompany=function(e){(0,r.props.dispatch)(b("changeCompany",{name:e.name,code:e.code,id:e.id})),history.go(-1)},r.getHtml=function(){var e=r.props.data,t=[];for(var n in e)t.push(h.default.createElement("div",{id:n,key:n},h.default.createElement("h1",null,n),e[n].map(function(e){return h.default.createElement("div",{className:"one-company",onClick:function(){r.getCompany(e)},key:e.id+e.code},e.name)})));return t},r.anchorJump=function(t){var n=e(t).text();e(t).href="#"+n;var o=location,a=o.pathname+o.search;window.location.replace(a+"#"+n)},r.move=function(){event.preventDefault(),anchorJump(document.elementFromPoint(event.changedTouches[0].clientX,event.changedTouches[0].clientY))},r.touchEnd=function(){var t=1;setInterval(function(){(t-=.1)>0?e(".letter").css({opacity:t}):clearInterval()},50)},r.getsubLitter=function(){var e=r.props.data,t=[];for(var n in e)t.push(h.default.createElement("a",{key:n,onTouchStart:function(e){r.anchorJump(e.target)}},n));return t},w(r,a)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":(0,u.default)(t)));e.prototype=(0,r.default)(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(a.default?(0,a.default)(e,t):e.__proto__=t)}(n,s.Component),p(n,[{key:"componentWillMount",value:function(){this.props.getData()}},{key:"render",value:function(){var e=this,t=this.props.load;return h.default.createElement("div",null,t?h.default.createElement(g.LoadingRound,null):h.default.createElement("div",{"data-page":"after-sale-company"},this.getHtml(),h.default.createElement("div",{className:"slidePage flex-def flex-zTopBottom flex-zCenter flex-cEnd",onTouchEnd:function(){e.touchEnd()},onTouchMove:function(){e.move()}},h.default.createElement("div",{className:"wrap"},this.getsubLitter()))))}}]),n}();t.default=(0,m.connect)(function(e,t){return d({},e.logicompany)},function(e,t){return{dispatch:e,getData:function(){e(E("getData",d({},_.init,{params:{}})))}}},function(e,t,n){return t.dispatch,d({},e,t,n)})(k)}).call(this,n("OOjC"))}}]);