(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{"+Rhp":function(e,t,a){},CtTd:function(e,t,a){"use strict";(function(e){var o=u(a("mvHQ")),n=u(a("Zx67")),r=u(a("kiBT")),c=u(a("OvRC")),s=u(a("pFYg")),l=u(a("C4MV")),i=u(a("woOf"));function u(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var d=i.default||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e},m=function(){function e(e,t){for(var a=0;a<t.length;a++){var o=t[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),(0,l.default)(e,o.key,o)}}return function(t,a,o){return a&&e(t.prototype,a),o&&e(t,o),t}}(),p=a("U7vG"),g=y(p),f=(a("Zfgq"),a("d2xe"));a("+Rhp");var h=y(a("4GUf")),v=a("f+hS"),C=a("nztU"),E=a("5qLU"),S=y(a("mtWM"));function y(e){return e&&e.__esModule?e:{default:e}}function M(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==(void 0===t?"undefined":(0,s.default)(t))&&"function"!=typeof t?e:t}function w(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":(0,s.default)(t)));e.prototype=(0,c.default)(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(r.default?(0,r.default)(e,t):e.__proto__=t)}var N={uc_phoneExist:function(e){return{url:E.UCENTER+"/user/phone_"+e+"/exists"}},uc_sendCode:{url:E.UCENTER+"/mock/send_code",method:"post"},uc_loginOrRegister:{url:E.UCENTER+"/login/quick_login_register",method:"post"}},k=function(t){function a(e){M(this,a);var t=_(this,(a.__proto__||(0,n.default)(a)).call(this,e));return t.state={updata:!0,showSuccessModal:!1},t}return w(a,p.Component),m(a,[{key:"componentWillMount",value:function(){document.title="泰然城新人福利"}},{key:"componentDidMount",value:function(){e("#copWrap").css({minHeight:e(window).height()})}},{key:"render",value:function(){var e=this.state,t=e.updata;e.showSuccessModal;return t?g.default.createElement("div",{"data-page":"copWrap",id:"copWrap"},g.default.createElement("div",{className:"bannerCo"},g.default.createElement("img",{src:"src/pages/activity/cooperActivity58/img/father.jpg",alt:""})),g.default.createElement(x,null),g.default.createElement("div",{className:"btnIcon"},g.default.createElement("img",{src:"src/pages/activity/cooperActivity58/img/bot.png",alt:""})),g.default.createElement("div",{className:"activetyRule"},g.default.createElement("div",{className:"rulesAc"},"活动规则"),g.default.createElement("p",null,"1、新人专享福利仅限泰然城新注册用户专享；"),g.default.createElement("p",null,"2、1分钱专享优惠券为商品抵扣券，不含运费，具 体运费以订单结算页为准；"),g.default.createElement("p",null,'3、下载泰然城APP或关注泰然城公众号使用，具体 在"泰然城-我的-优惠券"查看。'))):g.default.createElement(f.LoadingRound,null)}}]),a}(),b=function(e){function t(e){M(this,t);var a=_(this,(t.__proto__||(0,n.default)(t)).call(this,e));return a.closePopupModal=function(){a.setState({show:!1})},a.state={show:!1},a}return w(t,p.Component),m(t,[{key:"componentDidMount",value:function(){this.props.status&&this.setState({show:!0})}},{key:"render",value:function(){return this.state.show?g.default.createElement("div",{className:"popup-modal"},g.default.createElement(f.Shady,null),g.default.createElement("div",{className:"msg-wrapper"},this.props.msg,g.default.createElement("div",{className:"closeMsg",onClick:this.closePopupModal},g.default.createElement("img",{src:"/src/img/icon/close/close-l-x-icon.png"})))):null}}]),t}(),I=new v.Prompt(b),P=function(e){function t(){return M(this,t),_(this,(t.__proto__||(0,n.default)(t)).apply(this,arguments))}return w(t,p.Component),m(t,[{key:"render",value:function(){return this.props.showSuccessModal?g.default.createElement("div",{className:"success-modal"},g.default.createElement(f.Shady,null),g.default.createElement("div",{className:"success-img"},g.default.createElement("a",{href:E.WXURL+"/item?item_id=61938"},g.default.createElement("button",{className:"left"})),g.default.createElement("button",{className:"right",onClick:this.props.closeModal}))):null}}]),t}(),x=function(t){function a(t){M(this,a);var r=_(this,(a.__proto__||(0,n.default)(a)).call(this,t));return r.getCaptcha=function(){var t=r;e.ajax({url:"/wxapi/getRandomCaptcha.api",type:"get",contentType:"application/json",success:function(e){t.setState({imgFlag:!t.state.imgFlag}),e.status&&(t.setState({reciveCode:e.data.captcha_code}),t.setState({captchaId:e.data.primary_image}))},error:function(e){t.setState({imgFlag:!t.state.imgFlag})}})},r.refreshImg=function(){r.state.imgFlag&&(r.setState({imgFlag:!r.state.imgFlag}),r.state.imgFlag&&r.getCaptcha())},r.checkTel=function(){var t=e("#tel").val().replace(/\s+/g,"");return!!/^1/.test(t)&&(r.setState({telCorrect:!0}),!0)},r.checkCodeImg=function(){var t=e("#codeImg").val().replace(/\s+/g,""),a=new RegExp("^"+r.state.reciveCode+"$","i");return t.match(a)?(r.setState({errroMsgcoimg:""}),!0):(r.setState({errroMsgcoimg:"输入错误请重新输入"}),!1)},r.getCode=function(){var t=e("#tel").val();if(r.setState({getcodeFlag:!0}),r.setState({errroMsgcode:""}),11!==t.length&&!r.checkTel())return!1;if(!r.checkCodeImg())return!1;var a=r.state,o=a.count,n=a.codeSend,c=r;S.default.request(d({},N.uc_sendCode,{data:{appId:E.UCAPPID,phone:t,usage:"QUICK_LOGIN_REGISTER"}})).then(function(t){var a=t.data;"200"===a.code?(h.default.MsgTip({msg:"验证码已发送"}),e(".get-code").addClass("countdown").removeClass("send-code"),c.setState({codeSend:!0}),c.timer=setInterval(function(){n=!0,0===--o&&(o=60,n=!1,clearInterval(c.timer),e(".get-code").addClass("send-code").removeClass("countdown")),c.setState({count:o,codeSend:n})}.bind(c),1e3)):c.setState({errroMsgcode:a.message})}).catch(function(){c.setState({errroMsgcode:"服务器繁忙"})})},r.changeHandle=function(){r.setState({errroMsgcode:""});var t=e("#tel").val(),a=e("#code").val();/^1/.test(t)&&r.state.isNew&&r.checkCodeImg()&&a&&r.state.codeSend?r.setState({inputComp:!0}):r.setState({inputComp:!1})},r.formatPhone=function(t){var a=t.target.value;if(11===a.length&&/^1/.test(a)){e("#tel").removeClass("tel_error"),r.setState({errroMsgco:""});var o=r;S.default.request(d({},N.uc_phoneExist(a),{params:{appId:E.UCAPPID}})).then(function(t){var a=t.data;"200"==a.code?a.body?(o.setState({errroMsgco:"您已是泰然城会员，点击活动主图查看更多优惠"}),o.setState({isNew:!1}),e("#tel").addClass("tel_error"),o.changeHandle()):(e("#tel").removeClass("tel_error"),o.setState({isNew:!0})):o.setState({errroMsgcode:a.message})}).catch(function(e){console.log(e),o.setState({errroMsgcode:"服务器繁忙"})})}else r.setState({errroMsgco:"请输入正确的手机号"}),e("#tel").addClass("tel_error")},r.checkPhone=function(t){var a=t.target.value;r.setState({errroMsgcode:""}),/^1/.test(a)||!a.length?(e("#tel").removeClass("tel_error"),r.setState({errroMsgco:""})):(r.setState({errroMsgco:"请输入正确的手机号"}),e("#tel").addClass("tel_error"))},r.loginHandleco=function(){var t=e("#tel").val(),a=e("#code").val(),n=r;r.checkTel()&&r.checkCodeImg()&&a&&r.state.isNew&&(n.setState({errroMsgcode:""}),S.default.request(d({},N.uc_loginOrRegister,{headers:{"X-Platform-Info":"WECHAT"},data:{appId:E.UCAPPID,phone:t,phoneCode:a}})).then(function(a){var r=a.data;if("200"===r.code){var c=r.body,s=c.token,l=c.isNew,i=c.userId;if((0,C.setCookie)("token",s),!l)return n.setState({errroMsgco:"您已是泰然城会员，点击活动主图查看更多优惠"}),void e("#tel").addClass("tel_error");e.ajax({url:"/wxapi/obtainCoupon.api",type:"POST",headers:{domain:".tairanmall.com"},data:(0,o.default)({phone:t,ucenter_id:i}),contentType:"application/json",success:function(e){200==e.code?(n.setState({showSuccessModal:!0}),n.setState({inputComp:!1}),n.setState({isNew:!1})):I.show({msg:e.msg,status:!0})},error:function(e){I.show({msg:JSON.parse(e.response).error.description,status:!0})}})}else n.setState({errroMsgcode:r.message})}).catch(function(e){console.log(e.response),n.setState({errroMsgcode:e.response.data.message})}))},r.onlyNum=function(){e("#tel").val(e("#tel").val().replace(/\D/g,"")),e("#code").val(e("#code").val().replace(/\D/g,""))},r.onlyLetter=function(){e("#codeImg").val(e("#codeImg").val().replace(/[^a-zA-Z0-9]/g,""))},r.closeModal=function(){r.setState({showSuccessModal:!1})},r.state={count:60,codeSend:!1,telCorrect:!1,inputComp:!1,errroMsgco:"",captchaId:"",reciveCode:"",userId:"",isNew:!1,getcodeFlag:!1,errroMsgcoimg:"",imgFlag:!1},r}return w(a,p.Component),m(a,[{key:"componentWillMount",value:function(){this.getCaptcha()}},{key:"componentWillUnmount",value:function(){clearInterval(this.timer)}},{key:"render",value:function(){var t=this.state,a=t.count,o=t.codeSend,n=t.inputComp,r=t.telCorrect,c=t.errroMsgco,s=t.errroMsgcoimg,l=t.errroMsgcode,i=t.captchaId,u=t.showSuccessModal,d=t.isNew,m=(t.handleUpdate,t.getcodeFlag),p=o?a+"s后重发":"获取验证码";e("#tel").val();return g.default.createElement("div",{className:"input-area"},g.default.createElement("div",{className:"logoTrc"},g.default.createElement("img",{src:"src/pages/activity/cooperActivity58/img/logotrc.png",alt:""})),g.default.createElement("div",{className:"input-info c-pr"},g.default.createElement("input",{type:"text",id:"tel",placeholder:"请输入手机号码",maxLength:"11",onKeyUp:this.onlyNum,onPaste:this.onlyNum,onBlur:this.formatPhone,onChange:this.checkPhone}),g.default.createElement("span",{className:"errroMsgco"},c)),g.default.createElement("div",{className:"input-info c-pr posImg"},g.default.createElement("input",{type:"text",id:"codeImg",placeholder:"请输入图形验证码",maxLength:"10",onBlur:this.checkCodeImg}),g.default.createElement("span",{className:"get-img c-tc"},g.default.createElement("img",{className:"img-captcha",src:i,onClick:this.refreshImg})),g.default.createElement("span",{className:"errroMsgimg"},s)),g.default.createElement("div",{className:"input-info c-pr posCode"},g.default.createElement("input",{type:"text",id:"code",placeholder:"请输入验证码",maxLength:"10",onChange:this.changeHandle,onKeyUp:this.onlyNum,onPaste:this.onlyNum}),g.default.createElement("span",{className:"get-code c-tc send-code",id:"codeSend",onClick:o||!d?"":this.getCode,disabled:!(r&&o)},p),g.default.createElement("span",{className:"errroMsgcode"},l)),g.default.createElement("div",null,g.default.createElement("input",{type:"button",className:"submit-btn c-tc",disabled:!n||!m,style:{background:n&&m?"#bd976e":"#c9c9c9"},value:"立即注册领取福利",onClick:this.loginHandleco}),g.default.createElement("p",{className:"agreement"},g.default.createElement("span",{className:"agreeIcon"},g.default.createElement("img",{src:"src/pages/activity/cooperActivity58/img/circle.png"})),g.default.createElement("span",{style:{color:"#6d6d6d"}},"我已阅读并同意",g.default.createElement("a",{id:"serviceproto",style:{color:"#bd976e"},href:"https://passport.tairanmall.com/appprotocol/taihe_service.html"},"《泰然一账通会员服务协议》")))),g.default.createElement(P,{showSuccessModal:u,closeModal:this.closeModal}))}}]),a}();t.default=k}).call(this,a("OOjC"))}}]);