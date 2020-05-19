import React, {Component} from 'react';
import {LoadingRound, ShareConfig, Shady, getJSApi} from 'component/common';
import {Link, browserHistory} from 'react-router';
import {connect} from 'react-redux';
import {tip} from 'component/modules/popup/tip/tip';
import axios from 'axios';
import {WXAPI, ZXURL} from 'config/index'
import {browser} from 'js/common/utils';
import {platform, getQueryString} from 'js/util/index'
import {base64encode, utf16to8} from "src/js/util/index"
import './index.scss';
//接口请求
const pageApi = {
	getDrawRecordList: {url: `${WXAPI}/draw/getDrawRecordList`, method: "get", headers: {"Cache-Control": "no-cache"}}, //获取最新的奖池记录
	getUserTask: {url: `${WXAPI}/draw/getUserTask`, method: "get", headers: {"Cache-Control": "no-cache"}}, //获取用户任务参与情况接口
	getActivityData: {url: `${WXAPI}/draw/getActivityData`, method: "get", headers: {"Cache-Control": "no-cache"}}, //获取活动详情接口
	getUserDrawNum: {url: `${WXAPI}/draw/getUserDrawNum`, method: "get", headers: {"Cache-Control": "no-cache"}}, //获取剩余抽奖次数
	getMyPrizeRecord: {url: `${WXAPI}/draw/getMyPrizeRecord`, method: "get", headers: {"Cache-Control": "no-cache"}}, //获取当前用户的中奖记录
	getDrawResult: {url: `${WXAPI}/draw/draw`, method: "post", headers: {"Cache-Control": "no-cache"}}, //抽奖处理接口
	shareTask: {url: `${WXAPI}/draw/shareTask`, method: "post", headers: {"Cache-Control": "no-cache"}}, //分享任务回调接口
};

const mainUrl = window.location.protocol + "//www.tairanmall.com/wap/activities/tai1111.html";

/**
 * 判断当前环境
 * 泰然城app
 * 金融app
 * 小程序
 * web
 */
const _platform = (function getPlatform() {
  if(platform.mall) {    // 泰然城app
    return 'mall'
  }
  if(platform.finance) { // 金融app
    return 'finance'
  }
  return 'web'
})()


// app登入路径, 金融app：已经登入，不需要处理登入相关
const loginUrl = (function (plat) {
	const url = {
		'mall': `trmall://to_login?redirectUri=${encodeURIComponent(window.location.href)}`
	}
	return url[plat] || `/login?redirect_uri=${location.href}`
})(_platform)


/**
 * 跳转登入
 */
function turnLogin() {
	if(_platform === 'mall') {
    window.location.href = loginUrl;
	} else if(_platform === 'finance') {
    window.location.href = `https://jr-m.tairanmall.com/login?redirect_uri=${location.href}`;
	} else {
    browserHistory.push(`/login?redirect_uri=${location.href}`);
	}
}


@connect((state) => {
	return {
		...state.global
	}
})
export default class LuckyDraw extends Component {
	constructor(props) {
		super(props);
		this.state = {
			update: false,
			ruleModal: false,
			winModal: false,
      taskModal: false, // 任务弹窗
      prizeModal: false, // 我的奖品弹窗
			drawRecordList: "",
			userDrawNum: 0,
			myPrizeRecord: "",
			prizeList: [],
			activityData: "",
			userTask: "",
			drawResult: "",
			enableClick: true,
			leadShare: false,
			successFlag: false,
			timeout: false,
			isSending: false
		}
	}

	backReload = () => {
		window.addEventListener("popstate", function (e) {
			self.location.reload();
		}, false);
		var state = {
			title: "",
			url: "#"
		};
		window.history.replaceState(state, "", "#");
	};

	componentWillMount() {
		this.backReload();
		const {activity_id} = this.props.location.query;
		const {iPhone, iPad, weixin} = browser.versions;
		const self = this;
		let targetUrl = location.href.split("#")[0];
		weixin && !iPad && !iPhone && getJSApi(targetUrl); //非ios系统在相关页面中调用微信分享签名
		if (!activity_id) {
			browserHistory.push("/");
		}
		this.getDrawData("getActivityData", activity_id);
		setTimeout(function () {  //延时加载
			self.getDrawData("getDrawRecordList", activity_id);
			oneTimer();
		});
		this.getDrawData("getUserDrawNum", activity_id);
		let oneTimer = () => {
			this.timer = setInterval(() => {
				this.getDrawData("getDrawRecordList", activity_id);
			}, 60000)
		};
	}

	componentDidMount() {
		const {activity_id} = this.props.location.query;
		this.getDrawData("getMyPrizeRecord", activity_id, 1);
		this.getDrawData("getUserTask", activity_id);
	}

	componentWillUnmount() {
		$("body").css({overflow: "", position: ""});
		this.oneTimer = null;
	}

	getDrawResult = (activity_id, goKinerLottery) => {
		axios.request({
			...pageApi.getDrawResult, params: {
				activity_id: activity_id,
			}, timeout: 1000 * 10
		}).then(({data}) => {
				function random() {
					switch ($(`.${data.data.prize_id}`)[0].id) {
						case "0":
							return Math.floor(Math.random() * 30 + 210);
						case "1":
							return Math.floor(Math.random() * 30 + 255);
						case "2":
							return Math.floor(Math.random() * 30 + 300);
						case "3":
							return Math.floor(Math.random() * 30 + 345);
						case "4":
							return Math.floor(Math.random() * 30 + 30);
						case "5":
							return Math.floor(Math.random() * 30 + 75);
						case "6":
							return Math.floor(Math.random() * 30 + 120);
						case "7":
							return Math.floor(Math.random() * 30 + 165);
						default:
							return;
					}

				}

				goKinerLottery.goKinerLottery(random());
				//点击抽奖成功后设置成功标志successFlag
				// this.getDrawData("getUserDrawNum", activity_id);
				return this.setState({drawResult: data.data, userDrawNum: data.data.draw_num, successFlag: true});
			}
		).catch(error => {
			console.log(error);
			this.setState({enableClick: true});
			if (!error.response || error.response.status == 504) {  //网络超时
				this.setState({timeout: true})
			} else {  //正常业务报错
				tip.show({msg: error.response.data.message || '服务器繁忙'});
				goKinerLottery.stopKinerLottery(goKinerLottery.defNum);
				this.getDrawData("getUserDrawNum", activity_id);
				if (error.response.data.message === "完成任务可获得额外抽奖机会") {
					$(window).scrollTop($(window).height() * 0.6)
				}
			}
		});
	};

	getDrawData = (requestType, activity_id, page) => {
		const self = this;
		axios.request(requestType === "getDrawRecordList" ? {
			...pageApi.getDrawRecordList, params: {
				activity_id: activity_id,
			}
		} : (requestType === "getUserDrawNum" ? {
			...pageApi.getUserDrawNum, params: {
				activity_id: activity_id,
			}
		} : (requestType === "getMyPrizeRecord" ? {
			...pageApi.getMyPrizeRecord, params: {
				activity_id: activity_id,
				page_size: 12,
				page: page
			}
		} : (requestType === "getActivityData" ? {
			...pageApi.getActivityData, params: {
				activity_id: activity_id,
			}
		} : (requestType === "getUserTask" ? {
			...pageApi.getUserTask, params: {
				activity_id: activity_id,
			}
		} : (requestType === "shareTask" ? {
			...pageApi.shareTask, params: {
				activity_id: activity_id,
			}
		} : "")))))).then(({data}) => {
				switch (requestType) {
					case "getDrawRecordList":
						return this.setState({drawRecordList: data.data.data});
					case "getUserDrawNum":
						return this.setState({userDrawNum: data.data});
					case "getMyPrizeRecord":
						return this.setState({
							myPrizeRecord: data.data,
							prizeList: page === 1 ? data.data.data : self.state.prizeList.concat(data.data.data),
							isSending: false
						});
					case "getActivityData":
						this.setState({activityData: data.data, update: true});
						const shareInfo = {
							title: data.data.share_title, // 分享标题
							desc: data.data.share_description, // 分享描述
							link: location.protocol + "//" + location.host + `/luckyDraw?activity_id=${activity_id}`, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
							imgUrl: data.data.share_image, // 分享图标
							success: function () {
								// 用户确认分享后执行的回调函数
								self.getDrawData("shareTask", activity_id);
							},
							cancel: function () {
								// 用户取消分享后执行的回调函数
							}
						};
						ShareConfig(shareInfo);
						return;
					case "getUserTask":
						return this.setState({userTask: data.data});
					case "shareTask":
						self.getDrawData("getUserDrawNum", activity_id); //改变次数
						self.getDrawData("getUserTask", activity_id);  //改变任务状态
						return;
					// location.reload();
					//return self.getDrawData("getUserTask", activity_id);
					default:
						return;
				}
			}
		).catch(error => {
			console.log(error);
			tip.show({msg: error.response.data.message || '服务器繁忙'})
		});
	};

  // 规则弹窗
	handleRuleModal = () => {
		this.setState({ruleModal: !this.state.ruleModal})
	};

	handleCloseWinModal = () => {
		this.setState({winModal: !this.state.winModal})
	};

	// 任务弹窗
	handleTaskModal = () => {
    this.setState({taskModal: !this.state.taskModal})
	}

	// 奖品弹窗
  handlePrizeModal = () => {
    this.setState({prizeModal: !this.state.prizeModal})
  }

  // 去主会场
  goMainUrl = () => {
		window.location.href = mainUrl
	}

  handleleadShare = () => {
		if(platform.mall || platform.finance) {
    	// 泰然城App 或 泰然金融App
			this.shareMsg()
		} else {
			const activityId = this.props.location.query.activity_id
      this.setState({leadShare: !this.state.leadShare});
      if (!browser.versions.weixin) {
        setTimeout(() => {
          this.getDrawData("shareTask", activityId);
        }, 1000)
      }
		}
	}

  //获取分享信息
  shareMsg = () => {
    const self = this;
    const {iPhone} = browser.versions;
    const {activityData} = this.state;
    const {activity_id} = this.props.location.query;
    const config = {
      title: activityData.share_title,
      content: activityData.share_description,
      icon: activityData.share_image,
      link: location.protocol + `//wx.tairanmall.com/luckyDraw?activity_id=${activity_id}`,
    };

    setTimeout(function () {
      self.getDrawData("shareTask", activity_id);
    }, 1000);

    const params = base64encode(utf16to8(JSON.stringify(config)));
    if(_platform === 'mall') {
      window.location.href = "trmall://share?params=" + params;
		} else if(_platform === 'finance') {
      window.location.href = "trc://share?params=" + params;
		}
  };


	render() {
		const {update, ruleModal, drawRecordList, userDrawNum, myPrizeRecord, prizeList, activityData, userTask, winModal, taskModal, prizeModal, enableClick, drawResult, leadShare, successFlag, timeout, isSending} = this.state;
		const {activity_id} = this.props.location.query;
		return (
			update ?
				<div data-page="lucky-draw" style={{minHeight: this.props.winHeight}}>
          {drawRecordList && <DrawRecordList drawRecordList={drawRecordList}/>}

          <button className="rule-btn" onClick={this.handleRuleModal}>规则</button>
					<div className="draw-content">
            <div className="top"></div>
            <DrawTurntable activityData={activityData} getDrawData={this.getDrawData}
                           getDrawResult={this.getDrawResult}
                           activity_id={activity_id} enableClick={enableClick} handleEnableClick={(flag) => {
              this.setState({enableClick: flag})
            }} handleWinModalStatus={this.handleCloseWinModal} successFlag={successFlag} timeout={timeout}
                           userDrawNum={userDrawNum} isLogin={this.props.isLogin}/>
					</div>

					<div className='draw-footer'>
						<img src='/src/img/activity/20191111/renwu.png' onClick={this.handleTaskModal}/>
            <img src='/src/img/activity/20191111/mine.png' onClick={this.handlePrizeModal}/>
            <img src='/src/img/activity/20191111/go.png' onClick={this.goMainUrl}/>
					</div>

					{/*抽奖任务*/}
					{userTask && !(userTask instanceof Array) && taskModal &&
					<TaskArea
						closeTaskModal={this.handleTaskModal}
						userTask={userTask}
						isLogin={this.props.isLogin}
						handleleadShare={this.handleleadShare}
					/>}

					{/*我的奖品*/}
					{myPrizeRecord && prizeModal &&
					<MyPrizeRecord
            closePrizeModal={this.handlePrizeModal}
						myPrizeRecord={myPrizeRecord}
						isLogin={this.props.isLogin}
						isSending={isSending}
						prizeList={prizeList}
						getDrawData={this.getDrawData}
						activity_id={activity_id}
						handleIsSending={(flag) => {
									   this.setState({isSending: flag})
								   }}/>}



					<RuleModal closeRuleModal={this.handleRuleModal} ruleModal={ruleModal} activityData={activityData}/>
					<WinInformationModal winModal={winModal} handleWinModalStatus={this.handleCloseWinModal} drawResult={drawResult}/>
					<LeadCom leadShare={leadShare} handleleadShare={() => {
						this.setState({leadShare: !leadShare})
					}}/>

				</div>
				:
				<LoadingRound />
		)
	}
}

class Wrapper extends  Component {
  constructor(props) {
    super(props)
    this.state = {
      left: 150 + this.props.start + this.props.index * 65
    }
    this.unMount = false
  }
  componentDidMount() {
    const step = () => {
    	if(this.unMount) {
    		return
			}
      let left = this.state.left - 0.6
      if(left < -(210 - this.props.start)) {
        left = 150 + this.props.start
      }
      this.setState({
        left
      }, () => {
        window.requestAnimationFrame(step)
      })
    }
    window.requestAnimationFrame(step)
  }
  componentWillUnmount() {
  	this.unMount = true;
	}
  render() {
    const {index, item} = this.props
    const style = {
      left: this.state.left + '%'
    }
    return (
      <div className="swiper-slide each-one" style={style}>
        {item.tel}&nbsp;抽中了{item.prize_alias}
      </div>
    )
  }
}

//中奖消息轮播
class DrawRecordList extends Component {
  getHtml = (data, start) => {
    return data.map((item, i) => {
      return <Wrapper index={i} key={i}  item={item} start={start}></Wrapper>
    })
  };
  render() {
    const {drawRecordList} = this.props;
    const halfLength = drawRecordList && drawRecordList.length ? Math.floor(drawRecordList.length / 2): 0;
    return drawRecordList && !!drawRecordList.length ?
      <div className="winning-radio">
        <div className="swiper-container" ref="swiperWinningRadio">
          <div className="swiper-wrapper" id="swiperWinningRadioWrapper">
            {this.getHtml(drawRecordList.slice(0, halfLength), 0)}
          </div>
        </div>
        <div className="swiper-container" ref="swiperWinningRadio2">
          <div className="swiper-wrapper">
            {this.getHtml(drawRecordList.slice(halfLength, drawRecordList.length), 10)}
          </div>
        </div>
      </div> : <div className="winning-radio"></div>
  }
}

//转盘抽奖
class DrawTurntable extends Component {
	componentDidMount() {
		let self = this;
		this.KinerLottery = new KinerLottery({
			rotateNum: 5, //转盘转动圈数
			body: ".draw", //大转盘整体的选择符或zepto对象
			direction: 0, //0为顺时针转动,1为逆时针转动
			disabledHandler: function (key) {
				switch (key) {
					case "noStart":
            turnLogin()
						break;
					case "completed":
						alert("活动已结束");
						break;
				}
			}, //禁止抽奖时回调
			clickCallback: function () {
				//此处访问接口获取奖品
				if (self.props.enableClick) {
					self.props.handleEnableClick(false);
					self.props.getDrawResult(self.props.activity_id, this);
					if (self.props.userDrawNum) {
						function random() {
							return Math.floor(Math.random() * 30 + 210);
						}

						this.goKinerLottery(random());
					}

				}

			}, //点击抽奖按钮,再次回调中实现访问后台获取抽奖结果,拿到抽奖结果后显示抽奖画面
			KinerLotteryHandler: function (deg) {
				if (self.props.successFlag) { //请求接口成功
					self.props.handleEnableClick(true);
					self.props.handleWinModalStatus();
					self.props.getDrawData("getMyPrizeRecord", self.props.activity_id, 1);
				} else {
					if (self.props.timeout) {
						tip.show({msg: "您的网络丢了，我帮您重新刷一下"});
						setTimeout(function () {
							location.reload();
						}, 2000);
					}
				}
			} //抽奖结束回调
		});
	}

	render() {
		const {activityData, isLogin, userDrawNum} = this.props;
		let prizeHtml = activityData.prize_list && activityData.prize_list.map((item, i) => {
				return <div className={`each-prize  each-prize${i} ${item.id}`} id={i} key={i}>
					<div className="img-wraper">
						<img className="prize-img" src={item.prize_image}/>
					</div>
				</div>
			});
		return <div className="draw-area">
			<img src="/src/img/activity/20191111/marquee.gif" className="marquee-bg"/>
      <img src='/src/img/activity/20191111/turndate.png' className='turndate-bg'></img>
      <div className={`draw-button inner KinerLotteryBtn ${isLogin ? "start" : "no-start"}`}>
      	<div className='button-text'><p>{isLogin ? '点击': '登录'}</p><p>抽奖</p></div>
      </div>
			<div className="draw">
				<div className="draw-turntable outer KinerLottery KinerLotteryContent" style={{position: "relative"}}>
					{prizeHtml}
					<img src="/src/img/activity/20191111/turntable.png" className="draw-bg"/>
				</div>
				{isLogin ?
					<div className="tip c-fs12 c-tc">剩余{userDrawNum}次</div> : <div className="tip c-fs13 c-tc">登录后可查看抽奖机会</div> }
			</div>
			<div className="draw-bottom">
				<img src="/src/img/activity/20191111/turntable_bottom.png"/>
			</div>
		</div>
	}
}

//做任务区域
class TaskArea extends Component {
  beforeGoTask = (isLogin, finished, taskName) => {
    if(!isLogin) {
      this.goLogin()
      return
    }
    if(finished) {
      location.href = mainUrl;
    } else {
      const task = this[taskName] ? this[taskName]: this.props[taskName] ? this.props[taskName]: null
      task && task()
    }
  }

	goLogin = () => {
    turnLogin()
	};

	goMainMeeting = () => {
		location.href = mainUrl;
	};

  goTradeList = () => {
  	if( _platform === 'mall') {
      location.href = 'trmall://myOrder?type=0&registLifecircle=true';
		} else if(_platform === 'finance') {
      window.location.href = `https://jr-m.tairanmall.com/tradeList/0`;
		} else {
      browserHistory.push('/tradeList/0');
		}
	}

	render() {
		const {userTask, handleleadShare, isLogin, closeTaskModal} = this.props;
		return <div className="task-area">
      <Shady clickHandle={closeTaskModal}/>
			<div className="task-modal">
				<div className="task-content">
          <img className="task-top" src='/src/img/activity/20191111/task_top.png'></img>
          <div className="title c-fs14 c-cfff c-tc">做任务获抽奖机会</div>
          <img src='/src/img/activity/20191111/task_close.png' className="task-close" onClick={closeTaskModal}></img>
          {userTask && <ul className="task-list">
            {!!userTask.share.reward_times && <li>
              <img className="c-fl" src="/src/img/activity/20191111/icon_share.png"/>
              <div className="c-dpib content">
                <p className="c-fb">分享活动(次数 {userTask.share.draw_times}/1）
                </p>
                <span>每天分享该活动可抽奖{userTask.share.reward_times}次</span>
              </div>
              <button className="share-button" onClick={this.beforeGoTask.bind(this, isLogin, userTask.share.finished, 'handleleadShare')}>{ userTask.share.finished ? '再逛逛': '去分享'}</button>
            </li>}
            {!!userTask.shop_cart.reward_times && <li>
              <img className="c-fl" src="/src/img/activity/20191111/icon_cart.png"/>
              <div className="c-dpib content">
                <p className="c-fb">加入购物袋(次数 {userTask.shop_cart.draw_times}/2）
                </p>
                <span>将任意商品加入购物袋可获得{userTask.shop_cart.reward_times}次</span>
              </div>
              <button className="share-button" onClick={this.beforeGoTask.bind(this, isLogin, userTask.shop_cart.finished, 'goMainMeeting')}>{ userTask.shop_cart.finished ? '再逛逛': '去逛逛'}</button>
            </li>}
            {!!userTask.payment.reward_times && <li>
              <img className="c-fl" src="/src/img/activity/20191111/icon_order.png"/>
              <div className="c-dpib content">
                <p className="c-fb">购买下单(次数 {userTask.payment.draw_times}/2）
                </p>
                <span>支付完成一笔订单可获得{userTask.payment.reward_times}次</span>
              </div>
              <button className="share-button" onClick={this.beforeGoTask.bind(this, isLogin, userTask.payment.finished, 'goMainMeeting')}>{ userTask.payment.finished ? '再逛逛': '去逛逛'}</button>
            </li>}
            {!!userTask.rate.reward_times && <li>
              <img className="c-fl" src="/src/img/activity/20191111/icon_evaluate.png"/>
              <div className="c-dpib content">
                <p className="c-fb">晒图评价(次数 {userTask.rate.draw_times}/2）
                </p>
                <span>评价订单并晒图可获得{userTask.rate.reward_times}次</span>
              </div>
              <button className="share-button" onClick={this.beforeGoTask.bind(this, isLogin, userTask.rate.finished, 'goTradeList')}>{ userTask.rate.finished ? '再逛逛': '去晒图'}</button>
            </li>}
          </ul>}
				</div>
			</div>
		</div>
	}
}

//引导页面
class LeadCom extends Component {
	render() {
		let {leadShare, handleleadShare} = this.props;
		return (
			leadShare ?
				<div className="lead-share" style={{height: $(window).height()}}>
					<Shady clickHandle={handleleadShare}/>
					<div className="share-icon">
						<img src="/src/img/activity/20181111/lead_img.png" className="lead-img"/>
						<img src="/src/img/activity/20181111/ok_btn.png" className="button" onClick={handleleadShare}/>
					</div>
				</div> : null
		)
	}
}

//我的奖品
class MyPrizeRecord extends Component {

	componentDidMount() {
		const self = this;
		const {activity_id} = this.props;
		$(".myPrize-record-wrapper").bind('scroll.loadmore', function () {
			const {page: {total_page, current_page}} = self.props.myPrizeRecord;
			let $this = $(this);
			let scrollH = $this.scrollTop();
			let scrollHeight = $(".myPrize-record ul").height() - $(".myPrize-record-wrapper").height();
			if (scrollH > scrollHeight) {
				if ($('.add span').html() === "下拉加载更多") {
					self.props.handleIsSending(true);
					self.props.getDrawData("getMyPrizeRecord", activity_id, +current_page + 1)
				}
			}
		})
	}

	render() {
		const {myPrizeRecord, isLogin, isSending, prizeList, closePrizeModal} = this.props;
		const {page: {total_page, current_page}} = myPrizeRecord;
		return <div className="my-prize">
      <Shady clickHandle={closePrizeModal}/>
			<div className="prize-modal">
        <div className="myPrize-record">
          <div className="myPrize-record-wrapper">
            <ul className="c-clrfix">{/* style={{marginHeight:$(window).height()}}*/}
              {isLogin ? prizeList.length ? prizeList.map((item, i) => {
                return <li className="" key={i} style={i % 2 === 1 ? {float: "right"} : {float: "left"}}>
                  <div className="c-tc prize-detail">
                    <span className="c-fb gift_title">{item.prize_alias}</span><br/>
                    {(item.prize_type === "0" || item.prize_type === "1" || item.prize_type === "2") &&
                    <span><span className="sub_title">{item.arguments.use_condition}</span><br/></span>}
                    <span className="c-fs10 c-c35">{item.created_at.substr(5)}</span>
                  </div>
                </li>
              }) : <div className="no-prize">
                <img src="/src/img/activity/20181111/no_prize.png"/>
                <span className="c-fs14 c-cc9 no-prize-tip">您还没有获得奖品哦</span>
              </div> : <div className="no-prize">
                <button onClick={turnLogin} className="button">登录查看</button>
                <span className="c-fs14 c-cc9 no-prize-tip c-tc">登录后可以查看您的奖品哦</span>
              </div>}
            </ul>
            {isLogin && !!prizeList.length && <div className="add">
              {current_page != total_page ? (isSending ?
                <span className="loading">加载中...</span> :
                <span style={{height: "30px", lineHeight: "50px"}}>下拉加载更多</span>) : null}
            </div>
            }
          </div>
        </div>
				<div className='prize-close'>
          <img src='/src/img/icon/close/close-l-x-icon.png' onClick={closePrizeModal}/>
				</div>

			</div>
		</div>
	}
}

//规则弹框
class RuleModal extends Component {
	render() {
		const {ruleModal, closeRuleModal, activityData} = this.props;
		return ruleModal ? <div className="rule">
			<Shady clickHandle={closeRuleModal}/>
			<div className="rule-modal">
				<div>
          <button className="close-rule-button" onClick={closeRuleModal}></button>
					<div className="rule-content" dangerouslySetInnerHTML={{__html: activityData.activity_rule}}></div>
					<button className="sure-button" onClick={closeRuleModal}></button>
				</div>
			</div>
		</div> : null
	}
}

//中奖信息弹框
class WinInformationModal extends Component {
  goWinUrl = () => {
  	const drawResult = this.props.drawResult
    if( _platform === 'mall') {
      location.href = `trmall://getCouponBag?registLifecircle=true&type=${drawResult.type === "3" ? "redPacket" : "coupon"}`;
    } else {
      const winUrl = drawResult.type === "3" ? `/redList` : `/couponList`
      if(_platform === 'finance') {
        window.location.href = `https://jr-m.tairanmall.com${winUrl}`;
      } else {
        browserHistory.push(winUrl);
      }
		}
  }

  render() {
		const {winModal, handleWinModalStatus, drawResult} = this.props;
		return winModal ? <div className="win">
			<Shady />
			<div className=" modal-bg">
				{$(`.${drawResult.prize_id}`)[0].id === "0" ? <div className="losing-lottery">
						<img src='/src/img/activity/20191111/lose_bg.png'/>
						<a className="button button-center" href={mainUrl}></a>
				</div> :
					<div className="win-modal">
						<div className="content">
							<img src={drawResult.prize_image}/>
						</div>
						<p className="title">{drawResult.prize_alias}</p>
						<a className="button button-left" href={mainUrl}></a>
						<button className="button button-right"
							  onClick={this.goWinUrl}></button>
					</div>}
				<button className="close" onClick={handleWinModalStatus}></button>
			</div>
		</div> : null
	}
}
