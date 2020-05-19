// application's entry
require('es6-promise').polyfill();
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider, connect } from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Router , browserHistory } from 'react-router';
import reducers from 'reducers/index';
import { composeWithDevTools } from 'redux-devtools-extension';
import { concatPageAndType } from 'js/actions/actions';
import { browser } from 'js/common/utils';
import { getCookie } from 'js/common/cookie';
import { getJSApi } from 'component/common';
import { UCENTER,COLLECTURL } from 'config/index';
import { loadScript,sdkUse } from 'js/util/loadSdk';
import axios from 'axios';

import createTapEventPlugin from 'react-tap-event-plugin';
createTapEventPlugin(); //添加touchTap事件

//公用scss
import '../scss/common.scss';
import '../scss/grid.scss';
import '../scss/animation.scss';
import 'src/scss/ReactTransition.scss';

//公用插件
import 'plugin/flexible.min.js';
import 'plugin/secCaptcha.js';
import 'src/plugin/swiper/swiper.scss';

const pageApi = {
	/*uc前缀为用户中心接口*/
    uc_isLogin: {url: `${UCENTER}/user`}, //是否登录
    uc_logout: { url: `${UCENTER}/user/logout`, method: 'post' }  //退出登录
};

const globalActions = concatPageAndType("global");

//页面最外层
class Application extends Component {
	componentWillMount() {
		this.props.getLogin();

		const { iPhone, iPad, weixin } = browser.versions;
        let targetUrl = location.href.split("#")[0];
        weixin && (iPad||iPhone) && getJSApi(targetUrl);   //ios系统在页面入口处调用微信分享签名
        window.sessionStorage.removeItem("dcpPageTitle");  //移除话务系统需要的商品标题

	}
	render() {
		return (
			<section id="wap-main">
				{this.props.children}
			</section>
		);
	}
}

function applicationDispatch(dispatch) {
	return {
		getLogin: ()=>{
            let token = getCookie('token'),
				openId = getCookie('openId');
            if(!token){
                loadScript(COLLECTURL,sdkUse,"");//埋点存userId
                dispatch( globalActions('changeLogin', { login: false }) );
            }else{
            	//判断用户是否登录
                axios.request({
                    ...pageApi.uc_isLogin,
                    headers: { 'Authorization': "Bearer " + token }
                }).then(({data}) =>{
                	if(data.code==="200"){
		                dispatch( globalActions('changeLogin', { login: true }) );
                        loadScript(COLLECTURL,sdkUse,data.body.userId);  //埋点存userId
                        if( browser.versions.weixin && !openId ){
                            //已登录却未绑定则退出登录
                            axios.request({
                                ...pageApi.uc_logout,
                                headers: { 'Authorization': "Bearer " + token }
                            }).then(() =>{
                                browserHistory.push(`/login?redirect_uri=${encodeURIComponent(location.href)}`);
                            }).catch(() =>{
                                browserHistory.push(`/login?redirect_uri=${encodeURIComponent(location.href)}`);
                            })
                        }
					}else{
                        loadScript(COLLECTURL,sdkUse,"");
                        dispatch( globalActions('changeLogin', { login: false }) );
                    }
                }).catch( error =>{
                    console.error(error);
                    dispatch( globalActions('getLoginError'));
                })
			}
		}
	}
}

Application = connect(null, applicationDispatch)(Application);

const store = createStore(reducers, {}, composeWithDevTools(applyMiddleware(thunk)));

const rootRoute = {
	childRoutes: [
		{
			path: "/",
			component: Application,
			indexRoute: {
				/*首页*/
				onEnter: (nextState, replaceState) => replaceState("/homeIndex")
			},
			childRoutes: [
				/*个人信息*/
				{ path: "userInfo",  getComponent: require('src/route/userInfo').default, onEnter:()=>{ document.title="个人信息" }},

				/*升级企业会员*/
				/*{ path: "enterprise/update",  getComponent: require('src/route/updateEnterprise').default, onEnter:()=>{ document.title="升级企业会员" }},

				/!*企业购邀请好友*!/
                { path: "enterprise/invite", component: require('./member/userCenter/enterpriseBuy/invite').default },

				/!*企业购邀请好友注册*!/
                { path: "enterprise/register", getComponent: require('src/route/registerEnterprise').default, onEnter:()=>{ document.title="邀请好友赚收益" }},*/

				/*用户修改昵称*/
				{
					path: "userNickname",
                    getComponent:(nextState, callback)=>{
                        require.ensure([], (require) => {
                            callback(null, require('pages/member/userCenter/userNickname').default);
                        }, "userNickname")
                    },
					onEnter:()=>{ document.title="昵称" } },

				{ path: "/homeIndex", getComponent: require('src/route/homeIndex').default, onEnter:()=>{ document.title="小泰拼团" } },
				{
					path: "/notice",
                    getComponent:(nextState, callback)=>{
                        require.ensure([], (require) => {
                            callback(null, require('pages/home/notice').default);
                        }, "notice")
                    },
					onEnter:()=>{ document.title="公告" }
				},

				/*用户中心*/
				{
					path: "/userCenter",
                    getComponent:(nextState, callback)=>{
                        require.ensure([], (require) => {
                            callback(null, require('pages/member/userCenter/index').default);
                        }, "userCenter")
                    },
					onEnter:()=>{ document.title="我的拼团" }
				},

				/*用户登录*/
				//{path: "/login", component: require('./user/login.jsx').default, onEnter:( )=>{ document.title="登录" } },
				{path: "/login",  getComponent: require('src/route/login').default, onEnter:( )=>{ document.title="登录" } },
                //{path: "/wapLogin", getComponent: require('src/route/wapLogin').default },
				/*用户登录中转*/
				{
					path: "/loginTransfer",
                    getComponent:(nextState, callback)=>{
                        require.ensure([], (require) => {
                            callback(null, require('pages/user/loginTransfer').default);
                        }, "loginTransfer")
                    },
					onEnter:( )=>{ document.title="登录" }
				},

				{
					path: "/loginTest",
                    getComponent:(nextState, callback)=>{
                        require.ensure([], (require) => {
                            callback(null, require('pages/user/loginTest').default);
                        }, "loginTest")
                    },
					onEnter:()=>{ 	document.title= '订单确认' }
				},

                /*WAP登录*/
                /*{path: "/wapLogin", component: require('./user/wapLogin.jsx').default },*/
                {path: "/wapLogin", getComponent: require('src/route/wapLogin').default },

                /*忘记密码*/
                {path: "/forgetPwd", getComponent: require('src/route/forgetPwd').default },

				/*用户二维码*/
				{ path:"/userQrCode", getComponent: require('src/route/userQrCodeShare').default, onEnter:()=>{ document.title='邀请好友'} },

				/*购物袋*/
				{
					path:"/shopCart",
                    getComponent:(nextState, callback)=>{
                        require.ensure([], (require) => {
                            callback(null, require('pages/trade/shopCart/index').default);
                        }, "shopCart")
                    },
					onEnter:()=>{ document.title ="购物袋" }
				},

				/*搜索页*/
				{
					path:"/search",
                    getComponent:(nextState, callback)=>{
                        require.ensure([], (require) => {
                            callback(null, require('pages/search/index').default);
                        }, "search")
                    },
					onEnter:()=>{ document.title ="搜索" }
				},

				/*搜索结果页*/
				{ path:"/searchResult",getComponent:require('src/route/searchResult').default, onEnter:()=>{ document.title ="搜索结果" } },

				/*确认订单页*/
				{
					path: "/orderConfirm",
                    getComponent:(nextState, callback)=>{
                        require.ensure([], (require) => {
                            callback(null, require('pages/trade/orderConfirm/index').default);
                        }, "orderConfirm")
                    },
					onEnter:()=>{ 	document.title= '订单确认' }
				},

				//供应链无库存商品列表
				{
					path:"/unStockItem",
					getComponent:(nextState, callback)=>{
						require.ensure([], (require) => {
							callback(null, require('pages/trade/orderConfirm/invalidSupplyGoods').default);
						}, "unStockItem")
					},
					onEnter:()=>{ document.title = '缺货商品' }
				},

				/*普通订单列表*/
				{path: 'tradeList/:status', getComponent: require('src/route/tradeList').default,onEnter:()=>{ 	document.title= '我的订单' }},
				/*订单搜索*/
				{path: 'tradeSearch', getComponent: require('src/route/tradeSearch').default,onEnter:()=>{ 	document.title= '订单搜索' }},
				/*拼团订单列表*/
				{path: 'groupList/:status', getComponent: require('src/route/groupList').default, onEnter:()=>{ document.title= '我的拼团' }},

				/*订单详情*/
				{
					path:"/tradeDetail",
                    getComponent:(nextState, callback)=>{
                        require.ensure([], (require) => {
                            callback(null, require('pages/member/trade/tradeDetail').default);
                        }, "tradeDetail")
                    },
					onEnter:()=>{ document.title = '订单详情' }
				},

				/*取消订单页*/
				{
					path:"/orderCancel",
                    getComponent:(nextState, callback)=>{
                        require.ensure([], (require) => {
                            callback(null, require('pages/member/trade/orderCancel').default);
                        }, "orderCancel")
                    },
					onEnter:()=>{ 	document.title="取消订单" }
				},

				/*客户服务*/
				{
					path: 'customerService',
                    getComponent:(nextState, callback)=>{
                        require.ensure([], (require) => {
                            callback(null, require('pages/customerService/index').default);
                        }, "customerService")
                    },
					onEnter:()=>{ 	document.title="客服消息" }
				},

				/*拼团详情页*/
				{
					path: "/groupDetail",
                    getComponent:(nextState, callback)=>{
                        require.ensure([], (require) => {
                            callback(null, require('pages/item/groupDetail/groupDetail').default);
                        }, "groupDetail")
                    }
				},

				/*优惠券列表页*/
				{ path: "/couponList", getComponent:require('src/route/couponList').default },

				/*使用优惠券页面*/
				{
					path: "/useCoupon",
                    getComponent:(nextState, callback)=>{
                        require.ensure([], (require) => {
                            callback(null, require('pages/member/coupon/useCoupon').default);
                        }, "useCoupon")
                    }
				},

				/*红包列表页*/
				{ path: "/redList", getComponent:require('src/route/redList').default },

				/*收货地址选择*/
				{
					path: "addressSelect",
                    getComponent:(nextState, callback)=>{
                        require.ensure([], (require) => {
                            callback(null, require('pages/member/selectList/addressSelect').default);
                        }, "addressSelect")
                    },
					onEnter:()=>{ document.title="地址选择"; } },

				/*身份证选择*/
				{
					path:"identifySelect",
                    getComponent:(nextState, callback)=>{
                        require.ensure([], (require) => {
                            callback(null, require('pages/member/selectList/identifySelect').default);
                        }, "identifySelect")
                    },
					onEnter:()=>{ document.title="身份证选择"; } },

				/*发票选择*/
				{
					path:"invoiceSelect",
                    getComponent:(nextState, callback)=>{
                        require.ensure([], (require) => {
                            callback(null, require('pages/member/selectList/invoice').default);
                        }, "invoice")
                    },
					onEnter:()=>{ document.title="发票信息"} },

                /*订单售后列表页*/
                {
                    path:"/afterSale",
                    getComponent:(nextState, callback)=>{
                        require.ensure([], (require) => {
                            callback(null, require('pages/member/afterSale/index').default);
                        }, "afterSale")
                    },
                    childRoutes:[

                        /*订单售后列表页*/
                        {
                            path:"list",
                            getComponent:(nextState, callback)=>{
                                require.ensure([], (require) => {
                                    callback(null, require('pages/member/afterSale/list').default);
                                }, "afterSaleList")
                            },
                            onEnter:()=>{ document.title="退款/售后"; }
                        },

                        /*订单售后申请页*/
                        {
                            path:"apply",
                            getComponent:(nextState, callback)=>{
                                require.ensure([], (require) => {
                                    callback(null, require('pages/member/afterSale/apply').default);
                                }, "afterSaleApply")
                            },
                            onEnter:()=>{ document.title="售后申请单"; }
                        },

                        /*售后订单详情页*/
                        {
                            path:"detail",
                            getComponent:(nextState, callback)=>{
                                require.ensure([], (require) => {
                                    callback(null, require('pages/member/afterSale/detail').default);
                                }, "afterSaleDetail")
                            },
                            onEnter:()=>{ document.title ="售后申请单详情"; }
                        },
                        /*物流公司列表页*/
                        {
                            path:"logicompany",
                            getComponent:(nextState, callback)=>{
                                require.ensure([], (require) => {
                                    callback(null, require('pages/member/afterSale/logicompany').default);
                                }, "afterSaleLogicompany")
                            },
                            onEnter:()=>{ document.title ="物流公司"; }
                        },
                        /*协商记录*/
                        {
                            path:"consultrecord",
                            getComponent:(nextState, callback)=>{
                                require.ensure([], (require) => {
                                    callback(null, require('pages/member/afterSale/consultrecord').default);
                                }, "afterSaleConsultrecord")
                            },
                            onEnter:()=>{ document.title ="协商记录"; }
                        }

                        /*售后填写物流页*/
                        //{ path:"logistics",  component:require('./member/afterSale/logistics').default,onEnter:()=>{ 	document.title =" 物流填写"; } },

                    ]
                },

				/*收银台*/
				{ path:"cashier",
                    getComponent:(nextState, callback)=>{
                        require.ensure([], (require) => {
                            callback(null, require('pages/trade/cashier/cashier').default);
                        }, "cashier")
                    },
					onEnter:()=>{ 	document.title =" 订单支付"; } },

				/*付款结果*/
				{
					path:"payResult",
                    getComponent:(nextState, callback)=>{
                        require.ensure([], (require) => {
                            callback(null, require('pages/trade/cashier/payResult').default);
                        }, "payResult")
                    },
					onEnter: ()=>{ document.title = '支付详情' } },

				/*收货信息*/
				{ path: "goodsReceiveInfo", component: require('./member/goodsReceiveInfo/info').default,
					indexRoute: {component: require('./member/goodsReceiveInfo/goodsReceiveInfo').default},
					childRoutes: [
						/*地址管理编辑页面*/
						{ path: "addressManage",  getComponent: require('src/route/addressManage').default },

						/*身份管理*/
						{path: "identityManage", component: require('./member/goodsReceiveInfo/identityManage').default},

						/*照片示例*/
						{path: "identityExample", component: require('./member/goodsReceiveInfo/identityExample').default}
					]
				},

				/*商品详情页*/
				{ path:"/item",  getComponent: require('src/route/item').default },
				/*  评团玩法 */
				{
					path: "pintuan-rules",
                    getComponent:(nextState, callback)=>{
                        require.ensure([], (require) => {
                            callback(null, require('pages/item/groupDetail/pintuanRules').default);
                        }, "pintuanRules")
                    }
				},
				/*评价页面&物流*/
				{ path: "/evaluate", getComponent: require('src/route/evaluate').default },

				{
					path: "/evaluateInput",
                    getComponent:(nextState, callback)=>{
                        require.ensure([], (require) => {
                            callback(null, require('pages/member/trade/evaluateInput').default);
                        }, "evaluateInput")
                    }
				},

				// { path: "/logistics", getComponent: require('src/route/logistics').default },
				//重构物流页
				{ path:"logistics",  getComponent:require('src/route/logisticsList').default,onEnter:()=>{ 	document.title ="订单跟踪"; } },
				//物流详情页
				{ path:"logisticDetail",  getComponent:require('src/route/logisticDetail').default,onEnter:()=>{ document.title ="物流详情"; } },
				/*换购商品*/
				{
					path: "/exchangeItem",
                    getComponent:(nextState, callback)=>{
                        require.ensure([], (require) => {
                            callback(null, require('pages/activity/exchangeItem').default);
                        }, "exchangeItem")
                    },
					onEnter: ()=>{ document.title = '换购商品' }
					},

				/*频道页---小泰良品*/
				{ path: "/xtlp", getComponent: require('src/route/xtlp').default },

				/* 专题页 */
                {path: "/topic", getComponent: require('src/route/topic').default},

				/*我的收藏*/
				// { path: "/myCollection", getComponent: require('src/route/collection').default },

				/*商品收藏*/
				{ path: "/myCollection", getComponent: require('src/route/goodCollection').default },
				/*商品收藏搜索*/
				{ path: "/goodCollectionSearch", getComponent: require('src/route/goodCollectionSearch').default },
				/*失效商品列表*/
				{ path: "/goodOverdue", getComponent: require('src/route/goodOverdue').default },

				/*直销分享页*/
				{ path: "/invitation", getComponent: require('src/route/invitation').default },
				{
					path: "/blank",
                    getComponent:(nextState, callback)=>{
                        require.ensure([], (require) => {
                            callback(null, require('pages/invitation/blank').default);
                        }, "blank")
                    }
				},

				/*  泰然5周年 */
				{
					path: "/5years",
                    getComponent:(nextState, callback)=>{
                        require.ensure([], (require) => {
                            callback(null, require('pages/5year/5year').default);
                        }, "5year")
                    }
				},
				{
					path: "/5yearsQrcode",
                    getComponent:(nextState, callback)=>{
                        require.ensure([], (require) => {
                            callback(null, require('pages/5year/5yearQrcode').default);
                        }, "5yearQrcode")
                    }
				},

				/* 双十一礼包领取 */
                {path: "/giftPackage", getComponent: require('src/route/giftPackage').default},

				/* 2018-11 大转盘 */
				{path: "/luckyDraw", getComponent: require('src/route/luckyDraw').default,onEnter:()=>{ 	document.title ="超级转转转"; } },

				/* 问卷调查 */
				{path: "/questionnaire", getComponent: require('src/route/questionnaire').default,onEnter:()=>{ 	document.title ="问卷调查"; } },

				/*/!*满减活动*!/
                {path: "/minusActivity", getComponent: require('src/route/minusActivity').default},

				/!*满折活动*!/
                {path: "/discountActivity", getComponent: require('src/route/discountActivity').default},

				/!* n元任选 *!/
                {path: "/optionBuyActivity", getComponent: require('src/route/optionBuyActivity').default},

				/!*  加价换购 *!/
				{path: "/exchangeBuy", getComponent: require('src/route/exchangeBuy').default},*/

				/*店铺首页*/
				{
					path:"store/home",
					getComponent( nextState, callback ){
						require.ensure([], (require)=> {
							window.IScroll =require('plugin/iscroll/iscroll.js');
							require('plugin/swiper/swiper.min.js');
							callback(null, require("./store/home/index").default);
						}, "StoreIndex");
					}
				},
				{
					path: "store/detail",
					getComponent( nextState, callback ){
						require.ensure([], (require)=> {
							callback(null, require("./store/home/detail").default );
						}, "StoreIndex");
					}
				},

				/* 新人礼包 */
				{path: "/newUserGift", getComponent: require('src/route/newUserGift').default},

				/*/!* 企业礼品定制 *!/
				{path: "/giftsCustom", getComponent: require('src/route/giftsCustom').default},*/

                /*联合58活动登录领劵*/
                {
                	path: "/cooperlogin",
                    getComponent:(nextState, callback)=>{
                        require.ensure([], (require) => {
                            callback(null, require('pages/activity/cooperActivity58/cooper58').default);
                        }, "cooperlogin")
                    },
					onEnter:( )=>{ document.title="泰然城新人福利" } },


                /*未匹配的重定向*/
				{ path: "*", onEnter: (nextState, replaceState) => replaceState("/") },

			]
		},

		/*未匹配的重定向*/
		{ path: "*", onEnter: (nextState, replaceState) => replaceState("/") }
	]
};

render((
	<Provider store={store}>
		<Router history={browserHistory} routes={rootRoute} />
	</Provider>
), document.getElementById('app'));
