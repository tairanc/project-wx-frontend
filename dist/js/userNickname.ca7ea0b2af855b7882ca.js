(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{"1RZ3":function(e,t,n){},wUPt:function(e,t,n){"use strict";(function(e){var a=c(n("Zx67")),i=c(n("kiBT")),r=c(n("OvRC")),o=c(n("pFYg")),u=c(n("C4MV")),l=c(n("woOf"));function c(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=l.default||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},f=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),(0,u.default)(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),d=n("U7vG"),p=w(d),m=w(n("4GUf")),v=n("Zfgq"),h=n("5qLU"),g=n("nztU"),k=w(n("mtWM"));function w(e){return e&&e.__esModule?e:{default:e}}n("1RZ3");var y={uc_setUserInfo:{url:h.UCENTER+"/user",method:"put"}},b=function(t){function n(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n);var i=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==(void 0===t?"undefined":(0,o.default)(t))&&"function"!=typeof t?e:t}(this,(n.__proto__||(0,a.default)(n)).call(this,t));i.delHandle=function(t){e(t.target).prev().val("").focus(),i.setState({nickname:""})},i.handleChange=function(){var t=e(".nick-val").val();i.setState({nickname:t||""})},i.saveNickname=function(){var t=e(".nick-val").val();if(t.length<4)return m.default.MsgTip({msg:"至少需要四个字符哦~"}),!1;if(!/^[a-zA-Z0-9\u4e00-\u9fa5]{4,20}$/.test(t))return m.default.MsgTip({msg:"只支持中英文和数字哦~"}),!1;if(!t||t===i.state.originName)return m.default.MsgTip({msg:"未修改昵称哦~"}),location.href="/userInfo",!1;var n=(0,g.getCookie)("token");k.default.request(s({},y.uc_setUserInfo,{headers:{Authorization:"Bearer "+n},data:{nickname:t}})).then(function(e){"200"===e.data.code?(m.default.MsgTip({msg:"昵称修改成功"}),v.browserHistory.replace("/userInfo")):m.default.MsgTip({msg:"昵称修改失败"})})};var r=t.location.query.nickname;return i.state={originName:r,nickname:r},i}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":(0,o.default)(t)));e.prototype=(0,r.default)(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(i.default?(0,i.default)(e,t):e.__proto__=t)}(n,d.Component),f(n,[{key:"componentWillMount",value:function(){document.title="昵称",this.context.isApp&&(window.location.href="jsbridge://set_title?title=昵称")}},{key:"componentDidMount",value:function(){e(".nick-val").val(this.state.nickname).focus()}},{key:"componentWillUnmount",value:function(){clearInterval(this.timer)}},{key:"render",value:function(){var t=this.state.nickname;return p.default.createElement("div",{"data-page":"user-nick-name",style:{minHeight:e(window).height()}},p.default.createElement("div",{className:"c-pr"},p.default.createElement("input",{type:"text",className:"nick-val",maxLength:"20",onChange:this.handleChange}),p.default.createElement("img",{className:"del-icon c-pa "+(t?"":"c-dpno"),src:"/src/img/user/delete.png",onClick:this.delHandle})),p.default.createElement("div",{className:"nick-rule"},"昵称仅在论坛、评论等场景显示，4-20个字符，支持中英文，数字"),p.default.createElement("input",{type:"button",className:"save-btn",value:"保存",onClick:this.saveNickname}))}}]),n}();t.default=b}).call(this,n("OOjC"))}}]);