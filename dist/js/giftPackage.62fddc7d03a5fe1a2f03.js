(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{BqSt:function(t,e,a){},tr2h:function(t,e,a){"use strict";(function(t){var o=u(a("Zx67")),n=u(a("kiBT")),i=u(a("OvRC")),c=u(a("pFYg")),r=u(a("C4MV"));function u(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var l,s,d=function(){function t(t,e){for(var a=0;a<e.length;a++){var o=e[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),(0,r.default)(t,o.key,o)}}return function(e,a,o){return a&&t(e.prototype,a),o&&t(e,o),e}}(),f=a("U7vG"),p=y(f),g=a("d2xe"),m=a("Zfgq"),v=y(a("4GUf"));function y(t){return t&&t.__esModule?t:{default:t}}a("BqSt");var h=(l=function(e){function a(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a);var e=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==(void 0===e?"undefined":(0,c.default)(e))&&"function"!=typeof e?t:e}(this,(a.__proto__||(0,o.default)(a)).call(this,t));s.call(e);var n=t.location.query.activityId;return e.state={getPackage:!1,activityId:n,data:{},update:!1,promoteTxt:""},e}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+(void 0===e?"undefined":(0,c.default)(e)));t.prototype=(0,i.default)(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(n.default?(0,n.default)(t,e):t.__proto__=e)}(a,f.Component),d(a,[{key:"componentWillMount",value:function(){var e=this.state.activityId,a=this;t.ajax({url:"/wxapi/activityInfo.api?activityId="+e,type:"get",success:function(e){200===e.code&&!0===e.status?(a.setState({data:e.data,update:!0}),document.title=("1"===e.data.couponType?"优惠券":"礼包")+"领取",a.context.isApp&&(window.location.href="jsbridge://set_title?"+("1"===e.data.couponType?"优惠券":"礼包")+"领取"),t("[data-page='gift-package']").css({minHeight:t(window).height()}),a.showTxt()):400===e.code&&!1===e.status?v.default.MsgTip({msg:"活动太过火爆，请稍后再来"}):v.default.MsgTip({msg:e.msg})},error:function(t){v.default.MsgTip({msg:"活动太过火爆，请稍后再来"})}})}},{key:"componentDidMount",value:function(){var t=this.state.activityId,e={title:"嗨，客官，泰然城喊你来领优惠券啦！",desc:"听说购物有券时，会有种莫名的自豪感！",link:location.protocol+"//"+location.host+"/giftPackage?activityId="+t,imgUrl:location.protocol+"//"+location.host+"/src/img/activity/11giftPackage/gift-package.png"};(0,g.ShareConfig)(e)}},{key:"render",value:function(){var t=this.state,e=t.getPackage,a=t.data,o=t.update,n=o?this.getColor(a.backgroundColor):"";return o?p.default.createElement("div",{"data-page":"gift-package",style:{backgroundColor:"rgb("+n[0]+","+n[1]+","+n[2]+")"}},p.default.createElement("div",{className:"banner",style:{backgroundImage:"url("+a.activityImage+")"}}),p.default.createElement("div",{className:"collect-gift c-tc"},p.default.createElement("p",{style:{color:e?"#f01e20":"#666"}},this.state.promoteTxt),e?p.default.createElement("button",{onClick:this.collect},"立即领取"):p.default.createElement(m.Link,{to:"/"},p.default.createElement("button",null,"随便逛逛"))),p.default.createElement("div",{className:"activity-rule c-pr"},p.default.createElement("div",{className:"split-line c-pa"}),p.default.createElement("h3",null,"活动细则"),p.default.createElement("ul",null,a.activityRules.split("\n").map(function(t,e){return p.default.createElement("li",{key:e},t)})))):p.default.createElement(g.LoadingRound,null)}}]),a}(),s=function(){var e=this;this.collect=function(){var a=e.state.activityId,o=e;t.ajax({url:"/wxapi/getActCoupon.api?activityId="+a,type:"get",success:function(t){if(401!==t.biz_code)"该礼包已被领完"===t.msg?o.setState({promoteTxt:"对不起，礼包已经被抢空，下次再来吧~",getPackage:!1}):"该优惠券已被领完"===t.msg?o.setState({promoteTxt:"对不起，优惠券已经被抢空，下次再来吧~",getPackage:!1}):200===t.code&&!0===t.status?o.setState({promoteTxt:"恭喜您领取成功！快去泰然城看看吧",getPackage:!1}):o.setState({promoteTxt:t.msg,getPackage:!1});else{var e=encodeURIComponent("/giftPackage?activityId="+a);m.browserHistory.push("/login?redirect_uri="+e)}},error:function(t){v.default.MsgTip({msg:"活动太过火爆，请稍后再来"}),o.setState({getPackage:!1})}})},this.showTxt=function(){var t=e.state.data;t.nowTime<t.startTime?e.setState({promoteTxt:"亲，活动还没开始哦~"}):t.nowTime<=t.endTime?!0===t.caseStatus.dailyReceived?e.setState({promoteTxt:"当日礼包已领取，别着急，明天再来！"}):!0===t.caseStatus.received?e.setState({promoteTxt:"您已经领取，贪心会长胖哦~"}):!0===t.caseStatus.outReceived&&"1"===t.couponType?e.setState({promoteTxt:"对不起，优惠券已经被抢空，下次再来吧~"}):!0===t.caseStatus.outReceived&&"2"===t.couponType?e.setState({promoteTxt:"对不起，礼包已经被抢空，下次再来吧~"}):e.setState({promoteTxt:"点击领取，收获意外惊喜！",getPackage:!0}):t.nowTime>t.endTime&&e.setState({promoteTxt:"很抱歉，您来晚了哦~"})},this.getColor=function(t){var e=[];return t.split(",").map(function(t,a){if((t=parseInt(t))<0||t>255)return[255,255,255];e.push(t)}),e}},l);e.default=h}).call(this,a("OOjC"))}}]);