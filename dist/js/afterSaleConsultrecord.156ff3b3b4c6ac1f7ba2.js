(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{NUeF:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.orderClosereason=t.popupData=t.dispatchDelivery=t.payType=t.confimStatus=t.ordersubStatusAndIconMap=t.ordersubStatusMap=t.ordermainStatusAndIconMap=t.ordermainStatusMap=t.asStatus=t.asReminder=t.asProcess=t.groupStatus=t.afterstatusDeal=t.orderType=t.reasonList=t.asTypes=t.cancelOrderMap=t.groupStatusAndIcon=void 0,t.storeIcon=function(e){switch(e){case"icon_biz":return l.default.createElement("img",{src:n("n2/B"),style:{verticalAlign:"-4px",marginRight:"10px"},width:"15",height:"17"});case"icon_self":return l.default.createElement("img",{src:n("thos"),style:{verticalAlign:"-4px",marginRight:"10px"},width:"20",height:"20"});case"icon_good":return l.default.createElement("img",{src:n("f6Rb"),style:{verticalAlign:"-4px",marginRight:"10px"},width:"17",height:"17"});default:return l.default.createElement("img",{src:n("QS0o"),style:{verticalAlign:"-3px",marginRight:"10px"},width:"16",height:"15"})}};var a,r=n("U7vG"),l=(a=r)&&a.__esModule?a:{default:a};t.groupStatusAndIcon={IN_PROCESS:{status:"拼团中",icon:"/src/img/icon/trcOngoing.png"},SUCCESS:{status:"拼团成功",icon:"/src/img/icon/trcSuccess.png"},FAILED:{status:"拼团失败",icon:"/src/img/icon/trcFailure.png"}},t.cancelOrderMap={SUCCESS:"取消成功",NO_APPLY_CANCEL:""},t.asTypes={10:"仅退款",20:"退货退款",EXCHANGING_GOODS:"申请换货"},t.reasonList=[{name:"0",text:"不想买了"},{name:"1",text:"信息填写错误，重新下单"},{name:"2",text:"付款遇到问题"},{name:"3",text:"其他原因"}],t.orderType=["普通订单","零元购","分期购","拼团"],t.afterstatusDeal={10:"售后中",20:"售后完成",30:"售后完成",40:"售后中",50:"售后中",60:"售后关闭",70:"售后关闭",80:"售后关闭",null:"暂无售后"},t.groupStatus={0:"拼团失败",1:"拼团中",2:"拼团成功"},t.asProcess={10:"待审核",20:"售后完成",30:"售后完成",40:"等待商品寄回",50:"等待商家收货",60:"审核未通过",70:"售后关闭",80:"售后关闭"},t.asReminder={10:"您已成功发起售后申请，请耐心等待商家处理",20:"商家已操作退款给您，请注意查收",30:"商家已操作退款给您，请注意查收",40:"商家已通过您的售后申请，请退货并填写物流信息",50:"商家收到退货并验证无误，将操作退款给您",60:"商家未通过您的售后申请，您可以修改申请后再次发起",70:"您已撤销本次售后申请，最多可以在售后保障期内发起3次申请",80:"您因超时未填写物流单号，本次售后申请被撤销，最多可以在售后保障期内发起3次申请"},t.asStatus=["待处理","处理中","已处理","已驳回"],t.ordermainStatusMap={10:"等待付款"},t.ordermainStatusAndIconMap={10:{status:"等待付款",icon:"/src/img/icon/trcUnpaid2.png"},20:{status:"已付款",icon:"/src/img/icon/trcSend2.png"},30:{status:"交易关闭",icon:"/src/img/icon/trcCancel2.png"}},t.ordersubStatusMap={10:"等待付款",20:"已付款",25:"待发货",30:"交易关闭",31:"交易关闭",40:"已发货",50:"交易完成",60:"交易完成"},t.ordersubStatusAndIconMap={10:{status:"等待付款",icon:"/src/img/icon/trcUnpaid2.png"},20:{status:"已付款",icon:"/src/img/icon/trcSend2.png"},25:{status:"待发货",icon:"/src/img/icon/trcSend2.png"},30:{status:"交易关闭",icon:"/src/img/icon/trcCancel2.png"},31:{status:"交易关闭",icon:"/src/img/icon/trcCancel2.png"},40:{status:"已发货",icon:"/src/img/icon/trcWait2.png"},50:{status:"交易完成",icon:"/src/img/icon/trcEvaluation2.png"},60:{status:"交易完成",icon:"/src/img/icon/trcComplete2.png"}},t.confimStatus={10:"待发货",20:"部分发货",30:"已发货"},t.payType={10:"线上支付",20:"线下支付",30:"理财支付"},t.dispatchDelivery={10:"快递",20:"自提"};t.popupData={type:{title:"售后类型",list:[{method:"退货退款",content:"已收到货，需要退还已收到的货物",select:"restore"},{method:"仅退款",content:"无需退货",select:"refund"}],onlylist:[{method:"仅退款",content:"无需退货",select:"refund"}]},reason:{title:"退货原因",list:{restore:[{content:"商品与描述不符",select:1},{content:"商品错发漏发",select:2},{content:"收到商品破损",select:3},{content:"商品质量问题",select:4},{content:"个人原因退货",select:5},{content:"其他",select:6}],refund:[{content:"商品与描述不符",select:1},{content:"商品错发漏发",select:2},{content:"收到商品破损",select:3},{content:"商品质量问题",select:4},{content:"个人原因退货",select:5},{content:"未收到货",select:6},{content:"商品问题已拒签",select:7},{content:"退运费",select:8},{content:"其他",select:9}]}}},t.orderClosereason={10:"用户关闭",20:"平台取消订单",30:"等待付款的订单过付款时间，系统关单",40:"未在指定时间内拼团成功",50:"商品已完成售后"}},QS0o:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAdCAMAAAD8QJ61AAAAhFBMVEUAAAAzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzPF5ewFAAAAK3RSTlMAu9Lx4fp4TPcM2Wgf6LJ+VOzNxqxxJRIJ9cvBmY9cRD0xGL+hgzcpzraE/R4OsQAAAQJJREFUKM+NkdlygzAMRUVsJ8bse9gKpFna6v//rzI1zUMM5MzAXNAxlgxoCrSSgWESiWNBoQczZ4UDWLjUgQuaH+zByhEjIHzJXbvgJkxXOvyAFSLdRSUV2NG1BsDD4n/Lk0nsYEKOE13+uhDjDVQA64KLn8DSDQEUB6a2hExCKs8bwiGZZ/0jxKPZWQrzzqceLqwe5uwginniMkWBYanNVh/iiZ6KKKT7GCC/9t+IHdnCufUccyDuDRIpuVXHKH3FQMtaSiwy/T3iYTmtcqqWvz3eTXmfNgcrGX+ObeXA9oRgT+DvCsmewPmOcMUYLDzk8uWyFpnzSvBcNzYCX2EeEL8esRngiYQFBQAAAABJRU5ErkJggg=="},f6Rb:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAMAAAANmfvwAAAAgVBMVEUAAAC7Bh27Bh27Bh27Bh27Bh27Bh27Bh27Bh27Bh27Bh27Bh27Bh27Bh27Bh27Bh27Bh27Bh27Bh27Bh27Bh27Bh27Bh27Bh27Bh27Bh27Bh27Bh27Bh27Bh27Bh27Bh27Bh27Bh27Bh27Bh27Bh27Bh27Bh27Bh27Bh27Bh27Bh0TU65WAAAAKnRSTlMAu8xL+7TyIBfqsHvQLffcnGJeWk89FO6gdDglDQfmulXEq6GPgUMyA29D3FSHAAABM0lEQVQ4y4XT15qDIBAF4FEREI29xLYpm7bz/g+4m4CUbBL/G24OevgGwNKWuR+laeTnZQuvDIKgRsQAz1iITwQDx57iP3QPlhhfip3ESqbCtyrVlOJbVHYO8YMQ/jToCBg6Gusj4c67u/DHshMoCQBOlu3gCFAiHApUMt+RoVLCFldswdfdPYc+pw8Rfu6CEZC1LgQIrkjNj4TnEKh8QbLWxTeHTjyH3voNBa4ozACKgdBNrEvu9ADMGIMNYj9nsuKZB9ZtaKxI117uBcv5Vh+sywDhEnl0Ox0bmH4y50oB65aIvKzjieKiY/BQW5F0mBI09s4jqTdyaiM3mR60HhHLUU32Oh3NMzIqiudZVaA1VJ1cHUwkkKOSc56TkMGz69jqEjS+TfDS3B++SBr526IF4xd5QHFbIXQuYQAAAABJRU5ErkJggg=="},"n2/B":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAiCAMAAACUYSJFAAAAmVBMVEUAAADHs3nHs3nHs3nHs3nHs3nHs3nHs3nHs3nHs3nHs3nHs3nHs3nHs3nHs3nHs3nHs3nHs3nHs3nHs3nHs3nHs3nHs3nHs3nHs3nHs3nHs3nHs3nHs3nHs3nHs3n////49u/18ufKt4H+/fvr5M/8+/jm3cTk2r7Wx5zSwZP7+fTy7d/p4cng1rbZzKXYyqHTxJbNu4jItHpnJO/VAAAAHnRSTlMA8erlFKt2SCcJ1sOGbGIEAvexpJlmSkLd075bNzbFgpHdAAAA90lEQVQoz53TyZKCMBCA4Sbsq7jP2j2CoLjr+z/cGIKVIIGy/C85fKdOdYOSlUzYJLFAk+eEKAodryXpbxSgWhD9pIJ8d2ZiN3O28AFsA/sybMChXtdTTvfyk1bPHDmfNbrN6cjfI+VbqRI3iFmGuJEMzUCXgiP+EXIuLi2tCirxoVhSUSla7eiAUvFAO86G0D2tUVVc017qtbxhRiupt/IqlSdVpNW61XuKopeUDSgDe0BtcJvp24nfcQG+ejVMAbwx6hvXa/3downUxVqMocllHWML5b6mTzi1QG0ZKPa5hKdGc7Mxcz6Cbr5jcIu56bKiD8cHpX+stVypkx0S9gAAAABJRU5ErkJggg=="},thos:function(e,t){e.exports="data:image/png;base64,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"},zRnA:function(e,t,n){"use strict";var a=i(n("Zx67")),r=i(n("kiBT")),l=i(n("OvRC")),s=i(n("pFYg")),c=i(n("C4MV")),o=i(n("woOf"));function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u,d=o.default||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},f=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),(0,c.default)(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),m=n("U7vG"),p=(u=m)&&u.__esModule?u:{default:u},h=n("4n+p"),A=n("f2Hk"),z=n("d2xe"),g=n("5qLU"),M=n("NUeF");function E(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function v(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==(void 0===t?"undefined":(0,s.default)(t))&&"function"!=typeof t?e:t}function y(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":(0,s.default)(t)));e.prototype=(0,l.default)(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(r.default?(0,r.default)(e,t):e.__proto__=t)}var S=(0,A.concatPageAndType)("consultrecord"),B=(0,A.actionAxios)("consultrecord"),D={init:{url:g.WXAPI+"/user/sold/info",method:"get"}},H=function(e){function t(){return E(this,t),v(this,(t.__proto__||(0,a.default)(t)).apply(this,arguments))}return y(t,m.Component),f(t,[{key:"componentWillMount",value:function(){this.props.resetData(),this.props.getData()}},{key:"render",value:function(){var e=this.props,t=e.load,n=e.data,a=n.type,r=n.status,l=n.updated_at;return p.default.createElement("div",{"data-page":"after-consult-record"},t?p.default.createElement(z.LoadingRound,null):p.default.createElement("div",null,p.default.createElement("h5",{className:"newest-info"},"最新消息来源于 ",l),70==r&&p.default.createElement(N,null),80==r&&p.default.createElement(C,null),20==a&&/20|30/.test(r)&&p.default.createElement(w,{data:n}),20==a&&/20|30|50/.test(r)&&p.default.createElement(U,{data:n}),70!=r&&10!=r&&p.default.createElement(T,{data:n}),p.default.createElement(k,{data:n}),p.default.createElement(b,{data:n})))}}]),t}(),b=function(e){function t(){return E(this,t),v(this,(t.__proto__||(0,a.default)(t)).apply(this,arguments))}return y(t,m.Component),f(t,[{key:"render",value:function(){var e=this.props.data.shop.attr;return p.default.createElement(z.CustomerService,{className:"save",shopAttr:e},p.default.createElement("button",{className:"btm-btn  colour-btn"},"联系客服"))}}]),t}(),T=function(e){function t(){return E(this,t),v(this,(t.__proto__||(0,a.default)(t)).apply(this,arguments))}return y(t,m.Component),f(t,[{key:"render",value:function(){var e=this.props.data,t=e.status,n=e.type,a=e.refund_amount,r=e.nod_remark,l=e.delivery;return p.default.createElement("div",{className:"common-container"},p.default.createElement("h2",null,"商家"),10==n&&/20|30/.test(t)&&p.default.createElement("div",null,p.default.createElement("h3",null,"同意售后申请"),p.default.createElement("div",{className:"aftersale-text"},"退款金额 ：￥",a)),/10|20/.test(n)&&10==t&&p.default.createElement("div",{className:"aftersale-text"},"待审核"),20==n&&/20|30|40|50|80/.test(t)&&!!l&&p.default.createElement("div",null,p.default.createElement("h3",null,"同意售后申请并给出回寄信息"),p.default.createElement("div",{className:"aftersale-text"},"收货人 ：",l.receiver.name),p.default.createElement("div",{className:"aftersale-text"},"联系电话 ：",l.receiver.mobile),p.default.createElement("div",{className:"aftersale-text"},"收货地址 ：",l.receiver.address)),60==t&&p.default.createElement("div",null,p.default.createElement("h3",null,"商家驳回售后申请")),r&&p.default.createElement("div",{className:"aftersale-text"},"商家留言 ：",r))}}]),t}(),U=function(e){function t(){return E(this,t),v(this,(t.__proto__||(0,a.default)(t)).apply(this,arguments))}return y(t,m.Component),f(t,[{key:"render",value:function(){var e=this.props.data,t=e.delivery,n=e.status,a=t.sender,r=a.corp_name,l=a.delivery_no;return p.default.createElement("div",{className:"common-container"},p.default.createElement("h2",null,"用户"),p.default.createElement("h3",null,"寄回商品"),/30|50|20/.test(n)&&p.default.createElement("div",null,p.default.createElement("div",{className:"aftersale-text"},"物流公司 ：",r),p.default.createElement("div",{className:"aftersale-text"},"物流单号 ：",l)))}}]),t}(),N=function(e){function t(){return E(this,t),v(this,(t.__proto__||(0,a.default)(t)).apply(this,arguments))}return y(t,m.Component),f(t,[{key:"render",value:function(){return p.default.createElement("div",{className:"common-container"},p.default.createElement("h2",null,"用户"),p.default.createElement("h3",null,"用户撤回售后申请"))}}]),t}(),C=function(e){function t(){return E(this,t),v(this,(t.__proto__||(0,a.default)(t)).apply(this,arguments))}return y(t,m.Component),f(t,[{key:"render",value:function(){return p.default.createElement("div",{className:"common-container"},p.default.createElement("h2",null,"用户"),p.default.createElement("h3",null,"用户超时填写物流"))}}]),t}(),w=function(e){function t(){return E(this,t),v(this,(t.__proto__||(0,a.default)(t)).apply(this,arguments))}return y(t,m.Component),f(t,[{key:"render",value:function(){var e=this.props.data.refund_amount;return p.default.createElement("div",{className:"common-container"},p.default.createElement("h2",null,"商家"),p.default.createElement("h3",null,"收到货并操作退款"),p.default.createElement("div",{className:"aftersale-text"},"退款金额 ：￥",e))}}]),t}(),k=function(e){function t(e){E(this,t);var n=v(this,(t.__proto__||(0,a.default)(t)).call(this,e));return n.showBigPicture=function(e){n.setState({imgSrc:e.target.src,bigShow:!0})},n.hideBigPicture=function(){n.setState({imgSrc:"",bigShow:!1})},n.state={imgSrc:"",bigShow:!1},n}return y(t,m.Component),f(t,[{key:"render",value:function(){var e=this,t=this.props.data,n=t.images,a=t.user_remark,r=t.reason,l=t.type,s=t.apply_amount,c=[];return n&&(c=n),p.default.createElement("div",{className:"common-container",style:{paddingBottom:"80px"}},p.default.createElement("h2",null,"用户"),p.default.createElement("h3",null,"发起售后申请"),p.default.createElement("div",{className:"aftersale-text"},"售后类型 ：",M.asTypes[l]),p.default.createElement("div",{className:"aftersale-text"},"退款金额 ：￥",s),p.default.createElement("div",{className:"aftersale-text"},"退款原因 ：",r),a&&p.default.createElement("div",{className:"aftersale-text"},"详细说明：",a),n?p.default.createElement("div",{className:"img"},c.map(function(t,n){return p.default.createElement("img",{className:"img-voucher",src:t,key:n,width:"75",height:"75",onClick:e.showBigPicture})})):"",c&&this.state.bigShow?p.default.createElement("div",null,p.default.createElement(z.Shady,{clickHandle:this.hideBigPicture}),p.default.createElement("div",{onClick:this.hideBigPicture,className:"big-picture"},p.default.createElement("img",{src:this.state.imgSrc}))):"")}}]),t}();t.default=(0,h.connect)(function(e,t){return d({},e.consultrecord)},function(e,t){var n=t.location.query.oid;return{dispatch:e,getData:function(){e(B("getData",d({},D.init,{params:{after_sale_bn:n}})))},resetData:function(){e(S("resetData"))}}},function(e,t,n){return t.dispatch,d({},e,t,n)})(H)}}]);