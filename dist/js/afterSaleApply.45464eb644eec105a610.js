(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{NUeF:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.orderClosereason=t.popupData=t.dispatchDelivery=t.payType=t.confimStatus=t.ordersubStatusAndIconMap=t.ordersubStatusMap=t.ordermainStatusAndIconMap=t.ordermainStatusMap=t.asStatus=t.asReminder=t.asProcess=t.groupStatus=t.afterstatusDeal=t.orderType=t.reasonList=t.asTypes=t.cancelOrderMap=t.groupStatusAndIcon=void 0,t.storeIcon=function(e){switch(e){case"icon_biz":return s.default.createElement("img",{src:n("n2/B"),style:{verticalAlign:"-4px",marginRight:"10px"},width:"15",height:"17"});case"icon_self":return s.default.createElement("img",{src:n("thos"),style:{verticalAlign:"-4px",marginRight:"10px"},width:"20",height:"20"});case"icon_good":return s.default.createElement("img",{src:n("f6Rb"),style:{verticalAlign:"-4px",marginRight:"10px"},width:"17",height:"17"});default:return s.default.createElement("img",{src:n("QS0o"),style:{verticalAlign:"-3px",marginRight:"10px"},width:"16",height:"15"})}};var a,r=n("U7vG"),s=(a=r)&&a.__esModule?a:{default:a};t.groupStatusAndIcon={IN_PROCESS:{status:"拼团中",icon:"/src/img/icon/trcOngoing.png"},SUCCESS:{status:"拼团成功",icon:"/src/img/icon/trcSuccess.png"},FAILED:{status:"拼团失败",icon:"/src/img/icon/trcFailure.png"}},t.cancelOrderMap={SUCCESS:"取消成功",NO_APPLY_CANCEL:""},t.asTypes={10:"仅退款",20:"退货退款",EXCHANGING_GOODS:"申请换货"},t.reasonList=[{name:"0",text:"不想买了"},{name:"1",text:"信息填写错误，重新下单"},{name:"2",text:"付款遇到问题"},{name:"3",text:"其他原因"}],t.orderType=["普通订单","零元购","分期购","拼团"],t.afterstatusDeal={10:"售后中",20:"售后完成",30:"售后完成",40:"售后中",50:"售后中",60:"售后关闭",70:"售后关闭",80:"售后关闭",null:"暂无售后"},t.groupStatus={0:"拼团失败",1:"拼团中",2:"拼团成功"},t.asProcess={10:"待审核",20:"售后完成",30:"售后完成",40:"等待商品寄回",50:"等待商家收货",60:"审核未通过",70:"售后关闭",80:"售后关闭"},t.asReminder={10:"您已成功发起售后申请，请耐心等待商家处理",20:"商家已操作退款给您，请注意查收",30:"商家已操作退款给您，请注意查收",40:"商家已通过您的售后申请，请退货并填写物流信息",50:"商家收到退货并验证无误，将操作退款给您",60:"商家未通过您的售后申请，您可以修改申请后再次发起",70:"您已撤销本次售后申请，最多可以在售后保障期内发起3次申请",80:"您因超时未填写物流单号，本次售后申请被撤销，最多可以在售后保障期内发起3次申请"},t.asStatus=["待处理","处理中","已处理","已驳回"],t.ordermainStatusMap={10:"等待付款"},t.ordermainStatusAndIconMap={10:{status:"等待付款",icon:"/src/img/icon/trcUnpaid2.png"},20:{status:"已付款",icon:"/src/img/icon/trcSend2.png"},30:{status:"交易关闭",icon:"/src/img/icon/trcCancel2.png"}},t.ordersubStatusMap={10:"等待付款",20:"已付款",25:"待发货",30:"交易关闭",31:"交易关闭",40:"已发货",50:"交易完成",60:"交易完成"},t.ordersubStatusAndIconMap={10:{status:"等待付款",icon:"/src/img/icon/trcUnpaid2.png"},20:{status:"已付款",icon:"/src/img/icon/trcSend2.png"},25:{status:"待发货",icon:"/src/img/icon/trcSend2.png"},30:{status:"交易关闭",icon:"/src/img/icon/trcCancel2.png"},31:{status:"交易关闭",icon:"/src/img/icon/trcCancel2.png"},40:{status:"已发货",icon:"/src/img/icon/trcWait2.png"},50:{status:"交易完成",icon:"/src/img/icon/trcEvaluation2.png"},60:{status:"交易完成",icon:"/src/img/icon/trcComplete2.png"}},t.confimStatus={10:"待发货",20:"部分发货",30:"已发货"},t.payType={10:"线上支付",20:"线下支付",30:"理财支付"},t.dispatchDelivery={10:"快递",20:"自提"};t.popupData={type:{title:"售后类型",list:[{method:"退货退款",content:"已收到货，需要退还已收到的货物",select:"restore"},{method:"仅退款",content:"无需退货",select:"refund"}],onlylist:[{method:"仅退款",content:"无需退货",select:"refund"}]},reason:{title:"退货原因",list:{restore:[{content:"商品与描述不符",select:1},{content:"商品错发漏发",select:2},{content:"收到商品破损",select:3},{content:"商品质量问题",select:4},{content:"个人原因退货",select:5},{content:"其他",select:6}],refund:[{content:"商品与描述不符",select:1},{content:"商品错发漏发",select:2},{content:"收到商品破损",select:3},{content:"商品质量问题",select:4},{content:"个人原因退货",select:5},{content:"未收到货",select:6},{content:"商品问题已拒签",select:7},{content:"退运费",select:8},{content:"其他",select:9}]}}},t.orderClosereason={10:"用户关闭",20:"平台取消订单",30:"等待付款的订单过付款时间，系统关单",40:"未在指定时间内拼团成功",50:"商品已完成售后"}},QS0o:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAdCAMAAAD8QJ61AAAAhFBMVEUAAAAzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzPF5ewFAAAAK3RSTlMAu9Lx4fp4TPcM2Wgf6LJ+VOzNxqxxJRIJ9cvBmY9cRD0xGL+hgzcpzraE/R4OsQAAAQJJREFUKM+NkdlygzAMRUVsJ8bse9gKpFna6v//rzI1zUMM5MzAXNAxlgxoCrSSgWESiWNBoQczZ4UDWLjUgQuaH+zByhEjIHzJXbvgJkxXOvyAFSLdRSUV2NG1BsDD4n/Lk0nsYEKOE13+uhDjDVQA64KLn8DSDQEUB6a2hExCKs8bwiGZZ/0jxKPZWQrzzqceLqwe5uwginniMkWBYanNVh/iiZ6KKKT7GCC/9t+IHdnCufUccyDuDRIpuVXHKH3FQMtaSiwy/T3iYTmtcqqWvz3eTXmfNgcrGX+ObeXA9oRgT+DvCsmewPmOcMUYLDzk8uWyFpnzSvBcNzYCX2EeEL8esRngiYQFBQAAAABJRU5ErkJggg=="},VM8K:function(e,t){e.exports="data:image/png;base64,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"},f6Rb:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAMAAAANmfvwAAAAgVBMVEUAAAC7Bh27Bh27Bh27Bh27Bh27Bh27Bh27Bh27Bh27Bh27Bh27Bh27Bh27Bh27Bh27Bh27Bh27Bh27Bh27Bh27Bh27Bh27Bh27Bh27Bh27Bh27Bh27Bh27Bh27Bh27Bh27Bh27Bh27Bh27Bh27Bh27Bh27Bh27Bh27Bh27Bh27Bh0TU65WAAAAKnRSTlMAu8xL+7TyIBfqsHvQLffcnGJeWk89FO6gdDglDQfmulXEq6GPgUMyA29D3FSHAAABM0lEQVQ4y4XT15qDIBAF4FEREI29xLYpm7bz/g+4m4CUbBL/G24OevgGwNKWuR+laeTnZQuvDIKgRsQAz1iITwQDx57iP3QPlhhfip3ESqbCtyrVlOJbVHYO8YMQ/jToCBg6Gusj4c67u/DHshMoCQBOlu3gCFAiHApUMt+RoVLCFldswdfdPYc+pw8Rfu6CEZC1LgQIrkjNj4TnEKh8QbLWxTeHTjyH3voNBa4ozACKgdBNrEvu9ADMGIMNYj9nsuKZB9ZtaKxI117uBcv5Vh+sywDhEnl0Ox0bmH4y50oB65aIvKzjieKiY/BQW5F0mBI09s4jqTdyaiM3mR60HhHLUU32Oh3NMzIqiudZVaA1VJ1cHUwkkKOSc56TkMGz69jqEjS+TfDS3B++SBr526IF4xd5QHFbIXQuYQAAAABJRU5ErkJggg=="},"n2/B":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAiCAMAAACUYSJFAAAAmVBMVEUAAADHs3nHs3nHs3nHs3nHs3nHs3nHs3nHs3nHs3nHs3nHs3nHs3nHs3nHs3nHs3nHs3nHs3nHs3nHs3nHs3nHs3nHs3nHs3nHs3nHs3nHs3nHs3nHs3nHs3nHs3n////49u/18ufKt4H+/fvr5M/8+/jm3cTk2r7Wx5zSwZP7+fTy7d/p4cng1rbZzKXYyqHTxJbNu4jItHpnJO/VAAAAHnRSTlMA8erlFKt2SCcJ1sOGbGIEAvexpJlmSkLd075bNzbFgpHdAAAA90lEQVQoz53TyZKCMBCA4Sbsq7jP2j2CoLjr+z/cGIKVIIGy/C85fKdOdYOSlUzYJLFAk+eEKAodryXpbxSgWhD9pIJ8d2ZiN3O28AFsA/sybMChXtdTTvfyk1bPHDmfNbrN6cjfI+VbqRI3iFmGuJEMzUCXgiP+EXIuLi2tCirxoVhSUSla7eiAUvFAO86G0D2tUVVc017qtbxhRiupt/IqlSdVpNW61XuKopeUDSgDe0BtcJvp24nfcQG+ejVMAbwx6hvXa/3downUxVqMocllHWML5b6mTzi1QG0ZKPa5hKdGc7Mxcz6Cbr5jcIu56bKiD8cHpX+stVypkx0S9gAAAABJRU5ErkJggg=="},thos:function(e,t){e.exports="data:image/png;base64,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"},yxlI:function(e,t,n){"use strict";(function(e){var a=p(n("Xxa5")),r=p(n("Zx67")),s=p(n("kiBT")),o=p(n("OvRC")),i=p(n("pFYg")),c=p(n("//Fk")),l=p(n("C4MV")),u=p(n("woOf"));function p(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var d=u.default||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},m=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),(0,l.default)(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),f=n("U7vG"),h=k(f),g=n("4n+p"),A=n("Zfgq"),z=n("f2Hk"),y=n("NUeF"),v=n("d2xe"),M=n("mskG"),E=n("fw66"),b=k(n("qAHI")),T=n("f2t5"),P=n("5qLU");function k(e){return e&&e.__esModule?e:{default:e}}function D(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function N(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==(void 0===t?"undefined":(0,i.default)(t))&&"function"!=typeof t?e:t}function C(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":(0,i.default)(t)));e.prototype=(0,o.default)(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(s.default?(0,s.default)(e,t):e.__proto__=t)}var B={submit:{url:P.WXAPI+"/user/sold/apply",method:"post"},soldorder:{url:P.WXAPI+"/user/sold/goods-order",method:"get"},compressPhoto:{url:P.WXAPI+"/uploadImage",method:"post"}},S=(0,z.concatPageAndType)("afterSaleApply"),H=(0,z.concatPageAndType)("popup"),w=(0,z.actionAxios)("afterSaleApply"),I={restore:{0:"请选择",1:"商品与描述不符",2:"商品错发漏发",3:"收到商品破损",4:"商品质量问题",5:"个人原因退货",6:"其他"},refund:{0:"请选择",1:"商品与描述不符",2:"商品错发漏发",3:"收到商品破损",4:"商品质量问题",5:"个人原因退货",6:"未收到货",7:"商品问题已拒签",8:"退运费",9:"其他"}},L=function(e){function t(){return D(this,t),N(this,(t.__proto__||(0,r.default)(t)).apply(this,arguments))}return C(t,f.Component),m(t,[{key:"componentWillMount",value:function(){var e=this.props.location.query.tid;this.props.resetData(),this.props.dispatch(w("getData",d({},B.soldorder,{params:{order_good_no:e}})))}},{key:"render",value:function(){var e=this.props,t=e.refund,n=e.popup,a=e.ctrlPopup,r=e.listType,s=e.reason,o=e.typeChange,i=e.hidePopup,c=e.popupShow,l=e.reasonChange,u=(e.moneyChange,e.describeChange),p=e.dispatch,d=e.applySubmit,m=e.prompt,f=e.promptClose,g=e.load,A=e.data,z=A.payment,M=A.is_gift;return h.default.createElement("div",{"data-page":"after-sale-apply"},g?h.default.createElement(v.LoadingRound,null):h.default.createElement("div",null,h.default.createElement(x,{refund:t,typeChange:o,listType:r,reason:s,reasonChange:l}),h.default.createElement(U,{payment:z,refund:t,ctrlPopup:a,listType:r,reason:s,data:A,dispatch:p,is_gift:M}),h.default.createElement(O,{changeHandle:u}),h.default.createElement(j,{dispatch:p,submitHandle:d}),h.default.createElement(X,{popup:n,listData:y.popupData[n],listType:r,reason:s,hidePopup:i,show:c,reasonChange:l,typeChange:o}),h.default.createElement(E.PopupTip,{active:m.show,msg:m.msg,onClose:f})))}}]),t}(),x=function(t){function n(){var t,a,s;D(this,n);for(var o=arguments.length,i=Array(o),c=0;c<o;c++)i[c]=arguments[c];return a=s=N(this,(t=n.__proto__||(0,r.default)(n)).call.apply(t,[this].concat(i))),s.checkAftertype=function(t){var n=s.props,a=n.typeChange,r=n.reasonChange,o=n.refund;"退货退款"==e(t.target).text()&&1==o||(!e(t.target).hasClass("current-yesround")&&r(0),e(t.target).addClass("current-yesround").siblings().removeClass("current-yesround"),a(e(t.target).attr("data-type")))},N(s,a)}return C(n,f.Component),m(n,[{key:"componentDidMount",value:function(){var t=this.props,n=t.refund,a=t.typeChange;1==n&&(a("refund"),e(".current-noround").addClass("current-yesround"))}},{key:"render",value:function(){var e=this,t=void 0;return t=0==this.props.refund?y.popupData.type.list:y.popupData.type.onlylist,h.default.createElement("section",{className:"apply-section"},h.default.createElement("div",{className:"type-container"},h.default.createElement("div",null,"售后类型"),h.default.createElement("div",{className:"after-type"},t.map(function(t,n){return h.default.createElement("i",{key:t.select,"data-type":t.select,className:"current-noround",onClick:function(t){e.checkAftertype(t)}},t.method)}))))}}]),n}(),U=function(t){function a(t){D(this,a);var n=N(this,(a.__proto__||(0,r.default)(a)).call(this,t));return n.changeAmout=function(t){var a=t.target.value,r=n.props.dispatch;n.setState({num:(a.match(/^(\d)*\.?\d*$/)||[""])[0]},function(){r(S("changeMoney",{money:e("#logiCode").val()}))})},n.state={num:n.props.payment},n}return C(a,f.Component),m(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.refund,r=t.ctrlPopup,s=t.reason,o=t.listType,i=t.data,c=i.num,l=i.primary_image,u=i.spec_nature_info,p=i.title,d=i.payment,m=i.freight,f=i.is_gift;return h.default.createElement("section",{className:"apply-section"},h.default.createElement("div",{className:"list-body"},h.default.createElement("div",{className:"list-img"},h.default.createElement(A.Link,null,h.default.createElement("img",{src:l?(0,T.addImageSuffix)(l,"_s"):n("VM8K")}))),h.default.createElement("div",{className:"list-body-ctt"},h.default.createElement("div",{className:"order-info-detail"},h.default.createElement("div",{className:"order-info-top"},h.default.createElement(A.Link,{className:"order-info-title"},p),h.default.createElement("div",{className:"info-price"},h.default.createElement("div",{className:"order-info-type"},u),h.default.createElement("div",{className:"right"},"×",c)))))),h.default.createElement("div",null,h.default.createElement("div",{className:"logic logic-company"},h.default.createElement("span",null,"退款原因："),h.default.createElement("input",{type:"text",placeholder:"请选择",maxLength:"20",value:"SELECT"===o?"请选择":I[o][s],disabled:!0}),h.default.createElement("span",{onClick:r.bind(null,"reason",!0)},h.default.createElement("img",{src:"/src/img/icon/arrow/arrow-right-m-icon.png",width:"10"}))),h.default.createElement("div",{className:"logic logic-order"},h.default.createElement("span",null,"退款金额：￥"),h.default.createElement("input",{type:"text",id:"logiCode",readOnly:1==a||f,value:this.state.num,onChange:function(t){e.changeAmout(t)},placeholder:"最多可退￥"+d+"元",maxLength:"9",name:"amount"})),h.default.createElement("div",{className:"limit-money"},"最多可退￥"+d+"元","含运费￥"+m)))}}]),a}(),O=function(e){function t(){return D(this,t),N(this,(t.__proto__||(0,r.default)(t)).apply(this,arguments))}return C(t,f.Component),m(t,[{key:"render",value:function(){return h.default.createElement("div",{className:"apply-section"},h.default.createElement("section",{className:"apply-detail"},h.default.createElement("h3",null,"详细说明"),h.default.createElement("div",{className:"area"},h.default.createElement("textarea",{name:"description",placeholder:"最多200字",maxLength:"200",onBlur:this.props.changeHandle}))))}}]),t}(),j=function(e){function t(){return D(this,t),N(this,(t.__proto__||(0,r.default)(t)).apply(this,arguments))}return C(t,f.Component),m(t,[{key:"render",value:function(){return h.default.createElement("section",{className:"apply-section"},h.default.createElement("div",{className:"apply-detail"},h.default.createElement("h3",null,"申请凭证"),h.default.createElement(V,{maxLength:3,dispatch:this.props.dispatch,submitHandle:this.props.submitHandle})))}}]),t}(),V=function(t){function n(t){var s=this;D(this,n);var o,i,u=N(this,(n.__proto__||(0,r.default)(n)).call(this,t));return u.choosePhoto=(o=a.default.mark(function t(n,r){var o,i,c;return a.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(o=u.props.dispatch,i=r.files[0],/^image\/(jpg|png|jpeg|bmp)$/.test(i.type)){t.next=5;break}return o(H("ctrlPrompt",{prompt:{show:!0,msg:"亲，请上传jpg/png/jpeg/bmp格式的图片哦~"}})),t.abrupt("return");case 5:if(!(i.size>=5242880)){t.next=8;break}return o(H("ctrlPrompt",{prompt:{show:!0,msg:"亲，请上传小于5M的图片哦~"}})),t.abrupt("return");case 8:return u.selectIndex=n,t.next=11,(0,M.compress)(i);case 11:c=t.sent,u.changeMask(!0),b.default.request(d({},B.compressPhoto,{data:{img:c}})).then(function(t){u.changeMask(!1),u.changePhoto(t.data.data.file.complete_url,t.data.data.file.url),e("#imgfile").val("")}).catch(function(e){o(H("ctrlPrompt",{prompt:{show:!0,msg:"图片上传失败"}})),u.changeMask(!1)});case 14:case"end":return t.stop()}},t,s)}),i=function(){var e=o.apply(this,arguments);return new c.default(function(t,n){return function a(r,s){try{var o=e[r](s),i=o.value}catch(e){return void n(e)}if(!o.done)return c.default.resolve(i).then(function(e){a("next",e)},function(e){a("throw",e)});t(i)}("next")})},function(e,t){return i.apply(this,arguments)}),u.changePhoto=function(e,t){var n=u.state,a=n.imgArr,r=n.subArr;u.selectIndex>=a.length?(a.push(e),r.push(t),u.setState({imgArr:a,subArr:r}),u.props.dispatch(S("setImgArr",{imgArr:a})),u.props.dispatch(S("setsubImgArr",{subArr:r}))):(a[u.selectIndex]=e,r[u.selectIndex]=t,u.setState({imgArr:a,subArr:r}),u.props.dispatch(S("setImgArr",{imgArr:a})),u.props.dispatch(S("setsubImgArr",{subArr:r})))},u.changeMask=function(e){u.setState({mask:e})},u.deletePhoto=function(e){var t,n,a,r=u.state,s=r.imgArr,o=r.subArr;s.splice(e,1),o.splice(e,1),u.setState((a=o,(n="subArr")in(t={imgArr:s,subArr:o})?(0,l.default)(t,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[n]=a,t)),u.props.dispatch(S("setImgArr",{imgArr:s})),u.props.dispatch(S("setsubImgArr",{subArr:o}))},u.state={imgArr:[],subArr:[],mask:!1},u.maxLength=t.maxLength||3,u.selectIndex=0,u}return C(n,f.Component),m(n,[{key:"render",value:function(){var e=this,t=this.props.submitHandle;return h.default.createElement("div",{className:"multi-img-choose c-clrfix"},this.state.imgArr.map(function(t,n){return h.default.createElement("form",{className:"photo",key:n},h.default.createElement("img",{src:t}),h.default.createElement("input",{type:"file",name:"file",onChange:function(t){return e.choosePhoto(n,t.target)}}),h.default.createElement("i",{className:"red-delete-icon",onClick:function(t){return e.deletePhoto(n)}}," "))}),this.state.imgArr.length<this.maxLength&&h.default.createElement("form",{className:"photo"},h.default.createElement("img",{src:"/src/img/afterSale/voucher-img.png"}),h.default.createElement("input",{type:"file",name:"file",accept:"image/gif,image/jpeg,image/jpg,image/png",id:"imgfile",onChange:function(t){return e.choosePhoto(e.state.imgArr.length,t.target)}}),this.state.mask&&h.default.createElement("div",{className:"img-mask"},"图片上传中")),h.default.createElement(Q,{mask:this.state.mask,submitHandle:t}))}}]),n}(),Q=function(e){function t(){return D(this,t),N(this,(t.__proto__||(0,r.default)(t)).apply(this,arguments))}return C(t,f.Component),m(t,[{key:"render",value:function(){var e=this.props,t=e.mask,n=e.submitHandle;return h.default.createElement("div",{className:"btm-btn colour-btn",onClick:function(){n(t)}},"提交申请")}}]),t}(),X=function(e){function t(){return D(this,t),N(this,(t.__proto__||(0,r.default)(t)).apply(this,arguments))}return C(t,f.Component),m(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.listData,a=t.popup,r=t.listType,s=t.reason,o=t.show,i="";return"reason"===a&&(i=n.list[r].map(function(t,n){return h.default.createElement("div",{className:"list",key:"reason-"+n,onClick:function(n){return e.props.reasonChange(t.select)}},h.default.createElement("div",{className:"one"},t.content),t.select==s&&h.default.createElement("i",{className:"current-yesround-icon"}," "))})),h.default.createElement("div",null,o&&h.default.createElement(v.Shady,{clickHandle:this.props.hidePopup}),h.default.createElement("div",{className:"total-popup "+(o?"active":"")},h.default.createElement("div",{className:"popup-top"},o&&n.title,h.default.createElement("i",{className:"black-close-icon",onClick:this.props.hidePopup}," ")),h.default.createElement("div",{className:"popup-body"},i)))}}]),t}();t.default=(0,g.connect)(function(e,t){return d({},e.popup,e.afterSaleApply)},function(e,t){var n=t.location.query,a=n.tid,r=n.refund;return{dispatch:e,resetData:function(){e(S("resetData",{query:{tid:a,listType:(Number(r),"SELECT"),refund:void 0!==r?Number(r):""}}))},moneyChange:function(t){e(S("changeMoney",{money:t.target.value.trim()}))},describeChange:function(t){e(S("changeDescribe",{description:t.target.value.trim()}))},ctrlPopup:function(t,n){e("reason"===t?function(e,a){"SELECT"===a().afterSaleApply.listType?e(H("ctrlPrompt",{prompt:{show:!0,msg:"请选择售后类型"}})):e(S("ctrlPopup",{popup:t,show:n}))}:S("ctrlPopup",{popup:t,show:n}))},reasonChange:function(t){e(S("reasonChange",{reason:t}))},typeChange:function(t,n){e(S("typeChange",{listType:t,reasonList:n}))},hidePopup:function(){e(S("hidePopup",{show:!1}))},promptClose:function(){e(H("ctrlPrompt",{prompt:{show:!1,msg:""}}))}}},function(e,t,n){var a=!1,r=t.dispatch;return d({},e,t,n,{applySubmit:function(t){if(!a)if("SELECT"!==e.listType)if(0!=e.reason)if(/^(\d)*\.?\d*$/.test(e.money)&&e.money){if(e.data.is_gift){if(parseFloat(e.money)<0)return void r(H("ctrlPrompt",{prompt:{show:!0,msg:"退款金额不能小于0.00"}}))}else if(parseFloat(e.money)<.01)return void r(H("ctrlPrompt",{prompt:{show:!0,msg:"退款金额不能小于0.01"}}));parseFloat(e.money)>parseFloat(e.paymentLarg)?r(H("ctrlPrompt",{prompt:{show:!0,msg:"超出最多可退金额"}})):t?r(H("ctrlPrompt",{prompt:{show:!0,msg:"正在上传图片，请稍候提交"}})):(a=!0,b.default.request(d({},B.submit,{data:{order_good_no:e.tid,type:e.listType,reason:I[e.listType][e.reason],amount:e.money,remark:e.description,images:e.subArr}})).then(function(e){r(H("ctrlPrompt",{prompt:{show:!0,msg:e.data.message||"申请成功"}})),setTimeout(function(){A.browserHistory.replace("/afterSale/list")},1e3)}).catch(function(e){throw r(H("ctrlPrompt",{prompt:{show:!0,msg:e.response.data.message||"网络繁忙！"}})),a=!1,new Error(e)}))}else r(H("ctrlPrompt",{prompt:{show:!0,msg:"请输入正确的退款金额"}}));else r(H("ctrlPrompt",{prompt:{show:!0,msg:"请选择退款原因"}}));else r(H("ctrlPrompt",{prompt:{show:!0,msg:"请选择售后类型"}}))}})})(L)}).call(this,n("OOjC"))}}]);