(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{"7/b0":function(e,t,n){"use strict";var r=u(n("Zx67")),a=u(n("kiBT")),o=u(n("OvRC")),i=u(n("pFYg")),l=u(n("C4MV")),s=u(n("woOf"));function u(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var c,d=s.default||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),(0,l.default)(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),p=n("U7vG"),m=(c=p)&&c.__esModule?c:{default:c},v=n("Zfgq"),g=n("4n+p"),h=n("d2xe"),y=n("f2Hk");function _(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==(void 0===t?"undefined":(0,i.default)(t))&&"function"!=typeof t?e:t}function w(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":(0,i.default)(t)));e.prototype=(0,o.default)(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(a.default?(0,a.default)(e,t):e.__proto__=t)}n("iB9U");var E={init:{url:"/wxapi/addressList.api",method:"get"}},k=(0,y.concatPageAndType)("addressSelect"),C=(0,y.actionAxios)("addressSelect"),N=(0,y.concatPageAndType)("orderConfirm"),P=(0,y.concatPageAndType)("invoiceSelect"),H=(0,y.concatPageAndType)("popup"),M=function(e){function t(){return _(this,t),b(this,(t.__proto__||(0,r.default)(t)).apply(this,arguments))}return w(t,p.Component),f(t,[{key:"componentWillMount",value:function(){this.props.initialPage()}},{key:"componentDidMount",value:function(){this.props.getData()}},{key:"render",value:function(){return this.props.load?m.default.createElement(h.LoadingRound,null):m.default.createElement("div",{"data-page":"address-select",style:{minHeight:this.props.winHeight}},m.default.createElement("div",{className:"colour-strip"}," "),m.default.createElement(S,{data:this.props.data,from:this.props.from}),m.default.createElement(v.Link,{className:"manage-btn",to:"/goodsReceiveInfo/addressManage?from=submit"},"管理地址"))}}]),t}(),S=function(e){function t(){return _(this,t),b(this,(t.__proto__||(0,r.default)(t)).apply(this,arguments))}return w(t,p.Component),f(t,[{key:"getHtml",value:function(){var e=this;return this.props.data.map(function(t,n){return m.default.createElement("div",{className:"one-list-grid",key:n},m.default.createElement(T,{data:t,from:e.props.from}))})}},{key:"render",value:function(){return m.default.createElement("div",{className:"address-list"},this.getHtml())}}]),t}(),A=function(e){function t(){return _(this,t),b(this,(t.__proto__||(0,r.default)(t)).apply(this,arguments))}return w(t,p.Component),f(t,[{key:"render",value:function(){var e=this.props.data;return m.default.createElement("div",{className:"one-list"},m.default.createElement("div",{className:"list-info",onClick:this.props.listSelect},m.default.createElement("div",{className:"top"},m.default.createElement("span",null,e.name)," ",e.mobile),m.default.createElement("div",{className:"text"},e.def_addr?m.default.createElement("span",null,"[默认地址]"):""," ",e.area_string,e.addr)),m.default.createElement(v.Link,{className:"edit",to:"/goodsReceiveInfo/addressManage?id="+e.addr_id},m.default.createElement("i",{className:"edit-icon"}," ")))}}]),t}(),O={orderConfirm:function(e,t){e(N("selectAddress",{data:t})),v.browserHistory.goBack()},invoice:function(e,t){e(P("selectAddress",{data:t})),v.browserHistory.goBack()}};var T=(0,g.connect)(null,function(e,t){return{listSelect:function(){O[t.from](e,t.data)}}})(A),x={orderConfirm:function(e){e(N("setOrigin",{origin:"address"})),e(k("setFrom",{from:"orderConfirm"}))},invoice:function(e){e(P("setOrigin",{origin:"address"})),e(k("setFrom",{from:"invoice"}))}};t.default=(0,g.connect)(function(e,t){return d({},e.popup,e.addressSelect,e.global)},function(e,t){var n=t.location.query.from;return{initialPage:function(){e(k("resetState")),n?x[n](e):v.browserHistory.goBack()},getData:function(){e(C("initialData",E.init))},promptClose:function(){e(H("ctrlPrompt",{prompt:{show:!1,msg:""}}))}}})(M)},iB9U:function(e,t,n){}}]);