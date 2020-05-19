import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import {PopupTip} from 'component/modal';
import Popup from 'component/modal2.jsx';
import {LoadingRound} from 'component/common';
import {getCookie} from 'js/common/cookie';
import axios from 'js/util/axios';
import {WXAPI, PAYURL} from 'config/index'

const pageApi = {
    GroupBuy: {url: `${WXAPI}/promotion/checkGroupBuy`, method: "post"},
    cashier: {url: `${WXAPI}/payment/intentions`, method: "get"}
};

export default class Cashier extends Component {
    constructor(props) {
        super(props);
        this.state = {
            prompt: {show: false, msg: ""}
        };
        this.promotionId = props.location.query.promotionId;
        this.isGroupBuy = props.location.query.isGroupBuy === 'true';
        this.tid = props.location.query.tid;
        this.from = props.location.query.from;
        this.host = window.location.origin;
    }

    componentWillMount() {
        console.log(this.isGroupBuy);
        if (this.isGroupBuy) {
            if (this.promotionId) {
                axios.request({
                    ...pageApi.GroupBuy,
                    data: {
                        promotion_id: this.promotionId,
                        object_id: 0,
                        order_no: this.tid
                    }
                }).then(({data}) => {
                    if (data.data.status) {
                        this.cashierFun();
                    }
                }).catch(err => {
                    Popup.MsgTip({msg: err.response.data.message});
                    setTimeout(() => {
                        browserHistory.replace('/tradeList/0');
                    }, 2000)
                })
            } else {
                //this.promotionId为0
                Popup.MsgTip({msg: "活动已结束"});
                setTimeout(() => { browserHistory.replace('/tradeList/0') }, 2000)
            }
        } else {
            this.cashierFun();
        }
    }

    promptClose = () => {
        this.setState({prompt: {show: false, msg: ""}});
    };

    cashierFun = () => {
        axios.request({
            ...pageApi.cashier,
            params: {order_no: this.tid}
        }).then(result => {
            //目前无线下业务（企业购已下线）
            let {business, payment_no} = result.data.data;
            const isOffline = this.from === "list" && business && business.pay_mode === 3;  //线下支付
            window.location.replace(`${PAYURL}/checkstand_wx/#/${isOffline?'successByOffline':'loading'}?payId=${ business.pay_id }` +
                `&orgId=${business.org_id}` +
                `&wechatPlatform=MEDIA_PLATFORM` +
                `&successUrl=${ encodeURIComponent(this.host + '/payResult?tid=' + this.tid + '&paymentId=' + payment_no) }` +
                `&errorUrl=${ encodeURIComponent(this.host + '/tradeList/0') }`);
        }).catch(() => {
            Popup.MsgTip({msg: error.response.data.message || "服务器繁忙"});
            setTimeout(() => { browserHistory.replace('/tradeList/0'); }, 2000);
        })
    };


    render() {
        return <div>
            <LoadingRound/>
            <PopupTip active={this.state.prompt.show} msg={this.state.prompt.msg} onClose={this.promptClose}/>
        </div>
    }
}
