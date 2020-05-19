import React, {Component} from 'react';
import {LoadingRound, FYURL, ZXURL} from 'config/index';
import Popup from 'component/modal2';
import {connect} from 'react-redux';
import {concatPageAndType, actionAxios} from 'js/actions/actions';
import {browser} from 'src/js/common/utils.js';

import './index.scss';

const createActions = concatPageAndType("invitation");
const axiosCreator = actionAxios("invitation");

class Invitation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            update: false,
            cover: false
        }
    };

    static contextTypes = {
        store: React.PropTypes.object,
        isLogin: React.PropTypes.bool
    };

    componentWillMount() {
        if (!browser.versions.weixin) {
            location.href = browser.versions.ios ? 'http://a.app.qq.com/o/simple.jsp?pkgname=com.tairanchina.taiheapp' : 'https://m.tairanmall.com/guide?redirect=trmall://main?page=home';
        }
        document.title = "邀请有奖";
        let targetUrl = location.href.split("#")[0];
        this.getJSApi(targetUrl);
        let self = this;
        $.ajax({
            url: "/wxapi/inviteSellAwardPreview.api",
            type: "get",
            success: function (data) {
                if (!self.props.isLogin) {
                    location.href = "/login?redirect_uri=%2FuserCenter";
                }
                if (data.code === 200 && data.status) {
                    self.setState({
                        data: data.data,
                        update: true
                    });
                } else {
                    Popup.MsgTip({msg: data.msg});
                }
            },
            error: function (err) {
                Popup.MsgTip({msg: err.msg});
                if (!self.props.isLogin) {
                    location.href = "/login?redirect_uri=%2FuserCenter";
                }
            }
        });
    };

    btnClick = () => {
        this.setState({
            cover: true
        });
    };
    //获取分享信息
    getShareMsg = () => {
        let self = this;
        $.ajax({
            url: '/wxapi/inviteSellPersonal.api',
            type: "get",
            success: function (data) {
                if (data.code === 200 && data.status) {
                    //微信分享
                    let shareConfig = {
                        title: data.data.share.title, // 分享标题
                        desc: data.data.share.description, // 分享描述
                        link: location.origin + '/blank?invite_code=' + data.data.invite_code, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                        imgUrl: data.data.share.image, // 分享图标
                        type: '', // 分享类型,music、video或link，不填默认为link
                        dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
                        success: function () {
                            // 用户确认分享后执行的回调函数
                            //Popup.MsgTip({msg: '分享成功'});
                        },
                        cancel: function () {
                            // 用户取消分享后执行的回调函数
                        }
                    };
                    wx.ready(function () {
                        wx.onMenuShareTimeline(shareConfig);
                        wx.onMenuShareAppMessage(shareConfig);
                        wx.onMenuShareQQ(shareConfig);
                        wx.onMenuShareQZone(shareConfig);
                    });
                } else {
                    Popup.MsgTip({msg: data.msg});
                }
            },
            error: function (err) {
                Popup.MsgTip({msg: "服务器繁忙"});
            }
        });
    };
    closeCover = () => {
        this.setState({
            cover: false
        })
    };
    getJSApi = (targetUrl) => {
        let self = this;
        $.ajax({
            url: '/wxapi/getJSApi?url=' + encodeURIComponent(targetUrl),
            type: 'GET',
            dataType: 'json',
            contentType: 'application/json;chartset=utf-8',
            success: function (data) {
                wx.config({
                    debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                    appId: data.appId, // 必填，公众号的唯一标识
                    timestamp: data.timestamp, // 必填，生成签名的时间戳
                    nonceStr: data.nonceStr, // 必填，生成签名的随机串
                    signature: data.signature,// 必填，签名，见附录1
                    jsApiList: ["onMenuShareTimeline", "onMenuShareAppMessage", "onMenuShareQQ", "onMenuShareWeibo", "onMenuShareQZone"] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
                });
                self.setState({config: true});
                wx.error(function (res) {
                    console.log(JSON.stringify(res))
                });
                self.getShareMsg();
            },
            error: function (msg) {
                self.showMsg = "绑定域名不正确！";
                self.setState({showStatus: true});
            }
        });
    };

    render() {
        let {data, update} = this.state;
        return (
            <div data-page="invitation">
                {update ?
                    <section id="invitation" ref="invitation">
                        <Banner/>
                        <Detail data={data}/>
                        <div className="footer">
                            <button onClick={this.btnClick}>邀请好友，一起赚钱</button>
                        </div>
                        {this.state.cover ? <Cover fn={this.closeCover}/> : ''}
                    </section>
                    : <LoadingRound/>}
            </div>
        );
    }
}

//微信分享
class Cover extends Component {
    render() {
        let {fn} = this.props;
        return (
            <div className="cover">
                <img className="hand" src="src/img/logistics/img/hand.png"/>
                <img onClick={fn} className="btn" src="src/img/logistics/img/button.png"/>
            </div>
        )
    }
}

//banner头部
class Banner extends Component {
    render() {
        return (
            <div className="banner c-pr">
                <img src="src/img/logistics/img/banner.png" style={{width: '100%'}}/>
            </div>
        )
    }
}

//明细部分
class Detail extends Component {
    render() {
        let {data} = this.props;
        return (
            <div className="detail">
                <ul className="rule c-mb10">
                    <li><p>1</p>
                        <div>成功邀请好友<br/>您可获得优惠券</div>
                    </li>
                    <li><p>2</p>
                        <div>好友购小泰良品<br/>您可获得提成</div>
                    </li>
                    <li style={{border: 'none'}}><p>3</p>
                        <div>您购小泰良品<br/>可获得返点</div>
                    </li>
                </ul>
                <MyReward data={data}/>
                <RewardDetail/>
            </div>
        )
    }
}

//获得的奖励
class MyReward extends Component {
    render() {
        let {data} = this.props;
        return (
            <div className="reward c-mb35">
                <img className="icon" src="src/img/logistics/img/icon.png"/>
                {data.invite_count ?
                    <HasReward data={data}/>
                    : <NoReward/>}
            </div>
        )
    }
}

//没有奖励
class NoReward extends Component {
    render() {
        return (
            <div className="no-reward">
                <h2 className="c-tc c-fs18 c-mb20">我获得的奖励</h2>
                <img src="src/img/logistics/img/line.png"/>
                <p className="c-fs14 c-c666 c-tc">还没有奖励,快去邀请好友领奖励吧！</p>
            </div>
        )
    }
}

//有奖励
class HasReward extends Component {
    static contextTypes = {
        isApp: React.PropTypes.bool,
        isLogin: React.PropTypes.bool
    };

    componentWillMount() {
        this.setState({
            btn: true,
        });
    };

    render() {
        let {data} = this.props;
        return (
            <div className="has-reward c-pr">
                <p className="c-fs18 c-tc c-mb30">我获得的奖励</p>
                <ul className="c-clrfix">
                    <a href={ZXURL + "/invitedFriends"}>
                        <li>
                            <p className="c-fs12 c-c666">成功邀请（人）</p>
                            <p className="c-fs18 c-fb">{data.invite_count}</p>
                        </li>
                    </a>
                    <a href={FYURL + "/balanceList"}>
                        <li>
                            <p className="c-fs12 c-c666">累计提成（元）</p>
                            <p className="c-fs18 c-fb">{data.total_income}</p>
                        </li>
                    </a>
                    <a href={FYURL + "/balanceList"}>
                        <li>
                            <p className="c-fs12 c-c666">累计返点（元）</p>
                            <p className="c-fs18 c-fb">{data.total_rebate}</p>
                        </li>
                    </a>
                </ul>
                <div className="c-tc" style={{paddingTop: '16px'}}>
                    <a href="https://m.tairanmall.com/guide?redirect=trmall://main?page=home">
                        <button className="c-fs14">去客户端提现 ></button>
                    </a>
                </div>
            </div>
        )
    }
}

//我的奖励明细
class RewardDetail extends Component {
    componentWillMount() {
        this.setState({
            list: []
        })
    };

    componentDidMount() {
        let self = this;
        $.ajax({
            url: '/wxapi/inviteSellAwards.api',
            type: "get",
            data: {
                page: 1,
                page_size: 10
            },
            success: function (data) {
                if (data.code === 200 && data.status) {
                    self.setState({
                        list: data.data.awards
                    })
                } else {
                    Popup.MsgTip({msg: data.msg});
                }
            },
            error: function (err) {
                Popup.MsgTip({msg: "服务器繁忙"});
            }
        });
    };

    render() {
        let {list} = this.state, html = '';
        if (list.length) {
            html = list.map(function (item, i) {
                return <EachReward data={item} key={i}/>
            })
        }
        ;
        return (
            <div className="reward-detail">
                <div className="reward-detail-head">
                    <div className="head c-tc c-fs14 c-c666">
                        我的奖励明细
                        <span className="left-one"></span><span className="right-one"></span>
                    </div>
                </div>
                <ul className="rewards">
                    {html}
                </ul>
                {list.length ? <div className="check c-pr"><a href={ZXURL + "/orderList"}>
                    <button>查看明细 ></button>
                </a></div> : ''}
            </div>
        )
    }
}

//奖励明细
class EachReward extends Component {
    getDate = (tm) => {
        let tt = new Date(parseInt(tm) * 1000);
        let ttyear = tt.getFullYear(),
            ttmonth = (parseInt(tt.getMonth()) + 1) > 9 ? (parseInt(tt.getMonth()) + 1) : '0' + (parseInt(tt.getMonth()) + 1),
            ttday = tt.getDate() > 9 ? tt.getDate() : '0' + tt.getDate();
        let couponTime = ttyear + "-" + ttmonth + "-" + ttday;
        return couponTime;
    };

    render() {
        let {data} = this.props;
        let times = this.getDate(data.awarded_at);
        let typeObj = {
            'Invite': 'coupon',
            'Consume': 'money',
            'Rebate': 'return'
        };
        let typeName = {
            'Invite': '优惠券',
            'Consume': '提成',
            'Rebate': '返点'
        };
        let type = data.type;
        return (
            <li className="each-reward c-fs12 c-c666 c-pr">
                <div className="user-img c-fl"><img
                    src={"src/img/logistics/img/" + typeObj[type] + ".png"}/>{typeName[type]}</div>
                <p style={{marginTop: '2px'}}>{data.message}</p>
                <p>{times}</p>
                <span className="c-fs14 c-pa">{data.award.worth}元</span>
            </li>
        )
    }
}

const stateInvitation = function (state, props) {
    return {
        ...state.userCenter,
        ...state.global
    }
}

export default connect(stateInvitation)(Invitation);