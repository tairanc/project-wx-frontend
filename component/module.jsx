import React, {Component} from 'react';
import {connect} from 'react-redux';
import {concatPageAndType, actionAxios} from 'js/actions/actions';
import {urlReplace} from 'js/common/utils';
import {setCookie} from 'js/common/cookie';
import {UCENTER, UCGEE, UCAPPID, WXAPI} from 'config/index';
import axios from 'axios';
import Popup from "./modal2";
import './module.scss';

const pageApi = {
    uc_phoneExist: (phone) => { return {url: `${UCENTER}/user/phone_${phone}/exists`}},
    uc_sendCode: {url: `${UCENTER}/mock/send_code`, method: 'post'},    //发送手机验证码
	uc_loginOrReg: (code)=>{ return { url: `${UCENTER}/login/quick_login_register?spm=${code}`, method: 'post' }},   //登录注册一体
    uc_wxBind: {url: `${UCENTER}/login/wechat/bind?platform=MEDIA_PLATFORM`, method: 'post'}, //微信授权绑定
    uc_isLogin: {url: `${UCENTER}/user`}, //是否登录
    uc_logout: {url: `${UCENTER}/user/logout`, method: 'post'},  //退出登录
    setOpenId: {url: `${WXAPI}/userBind`},   //设置openid
	uc_geeInit: (tel) => { return {url: `${UCGEE}/gee/getChallenge?addressIp=${tel}&appId=${UCAPPID}&t=${(new Date()).getTime()}` }}, // 加随机数防止缓存
	uc_geeVerify: { url: `${UCGEE}/gee/verifyLogin`, method: 'post' } //极验初始化
};
const createActionsLogin = concatPageAndType("userLogin");
const createActionsGlobal = concatPageAndType("global");

class LoginPopup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phone: "",
            validateCode: "",
            phoneFocus: false,
            codeFocus: false,
            canSend: false,
            sending: false,
            countDown: 60,
            canSure: false,
            isRegister: false,
	        secretCode: ''
        };
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    //检查手机号
    changePhone = (e) => {
        let phone = e.target.value;
        if (phone.length > 11) return;
        this.setState({phone: phone});
        if (phone.length === 11) {
            this.setState({canSend: true});
        } else {
            this.setState({canSend: false});
	    }
        this.checkCanSure();
    };

    changeValidate = (e) => {
        let validate = e.target.value;
        if (validate.length > 4) return;
        this.setState({validateCode: validate});
        this.checkCanSure();
    };

    //清空手机输入框
    clearPhone = () => {
        this.setState({phone: ""});
        this.checkCanSure();
    };

    clearValidate = () => {
        this.setState({validateCode: ""});
        this.checkCanSure();
    };

    //手机号是否正确
    checkTel = (tel)=> {
        if(!(/^1\d{10}$/.test(tel))) {
            Popup.MsgTip({ msg: "请输入正确的手机号码" });
            return false;
        }else {
            this.setState({telCorrect: true});
            return true;
        }
    };

    focusCtrl = (type, value) => {
        this.setState({[type + 'Focus']: value});
    };

    checkCanSure = () => {
        setTimeout(() => {
            let {phone, validateCode} = this.state;
            if (phone.length === 11 && validateCode.length === 4) {
                this.setState({canSure: true});
            } else {
                this.setState({canSure: false});
            }
        }, 0);
    };

	//初始化极验验证码
	loadCaptchas = (tel) => {
		axios.request(pageApi.uc_geeInit(tel)).then(data=>{
			if(data.status===200){
				let res  = data.data;
				initGeetest({
					// 以下 4 个配置参数为必须，不能缺少
					gt: res.gt,
					challenge: res.challenge,
					offline: !res.success, // 表示用户后台检测极验服务器是否宕机
					new_captcha: res.serverStatus, // 用于宕机时表示是新验证码的宕机
					product:  "bind",//"float", // 产品形式，包括：float，popup
				}, this.handlerEmbed);
				this.setState({serverStatus: res.serverStatus});
			}
		}).catch(err=>{
			console.log(err);
			Popup.MsgTip({ msg: '服务器繁忙' })
		})
	};

	//极验验证
	handlerEmbed = (captchaObj) => {
		captchaObj.onError(function () {
			Popup.MsgTip({
				msg: "验证错误"
			});
		}).onSuccess(()=>{
			let result = captchaObj.getValidate();
			let { serverStatus,phone } = this.state;
			if (!result) {
				Popup.MsgTip({  msg: "请完成验证" });
			}
			axios.request({
				...pageApi.uc_geeVerify,
				data: {
					addressIp: phone,
					appId: UCAPPID,
					challenge: result.geetest_challenge,
					validate: result.geetest_validate,
					seccode: result.geetest_seccode,
					serverStatus
				}
			}).then(data=>{

				if(data.data.body && data.data.body.status === 'success'){
					//继续下一步操作
					this.setState({secretCode: data.data.body.secretCode});
					this.nextHandle();
				}else{
					captchaObj.reset();
					Popup.MsgTip({ msg: data.data.message||"校验失败" })
				}

				/*if (data.status !== 200) {
					captchaObj.reset();
				}else{
					this.setState({ secretCode: data.data.body.secretCode });
				}*/
			}).catch(err=>{
				console.log(err);
				Popup.MsgTip({ msg: '服务器繁忙' })
			});
			//this.nextHandle();
		});
		if (captchaObj) {
			this.setState({ captchaObj: captchaObj });
		}
	};

	//下一步
	nextHandle = () => {
		let {phone} = this.state;
		let interval = () => {
			let {countDown} = this.state;
			if (countDown > 1) {
				this.setState({countDown: countDown-1});
				return;
			}
			clearInterval(this.timer);
			this.setState({sending: false, countDown: 60});
		};
		this.setState({sending: true});
		this.timer = setInterval(interval, 1000);

		let {dispatch} = this.props;
		//验证手机号是否存在
		axios.request({
			...pageApi.uc_phoneExist(phone),
			params: {
				appId: UCAPPID
			}
		}).then(({data}) => {
			if (data.code !== "200") {
				this.setState({phoneExist: data.body})
			}
		}).catch(error => {
			console.log(error);
		});
		//发送手机验证码
		axios.request({
			...pageApi.uc_sendCode,
			data: {
				appId: UCAPPID,
				phone: phone,
				usage: "QUICK_LOGIN_REGISTER"
			}
		}).then(({data}) => {
			if (data.code !== "200") {
				dispatch(createActionsLogin('ctrlPrompt', {prompt: true, msg: data.message}));
			}
		}).catch(error => {
			console.log(error);
			dispatch(createActionsLogin('ctrlPrompt', {prompt: true, msg:'服务器繁忙'}));
			throw new Error(error);
		});
	};

	//获取验证码倒计时
	sendValidate = ()=> {
		let {phone} = this.state;

		if (!this.checkTel(phone)) {
			return;
		}
		this.loadCaptchas(phone);
		this.getCatcha();
	};

	//循环测试极验是否初始化成功
	getCatcha = ()=>{
		let {captchaObj} = this.state;
		if(captchaObj){
			captchaObj.verify();
		}else{
			setTimeout(this.getCatcha, 1000);
		}
	};

    //注册
    sendRegister = () => {
        this.setState({isRegister: true});
        let {phone, validateCode, phoneExist, secretCode} = this.state;
        let {from, invite} = this.props;
        let {dispatch} = this.props;

        if (from === "ecard_red_jr") {
            //快速注册
            axios.request({
	            ...pageApi.uc_loginOrReg(secretCode),
                //...pageApi.uc_loginOrRegister,
                headers: {'X-Platform-Info': 'WECHAT'},
                data: {
                    appId: UCAPPID,
                    phone: phone,
                    phoneCode: validateCode,
                    inviteCode: invite
                }
            }).then(({data}) => {
                if (data.code === "200") {
                    let token = data.body.token;
                    this.setState({isRegister: false});
                    setCookie('token', token);
                    dispatch(createActionsGlobal('changeLogin', {login:true}));

                    /*判断是新、老用户*/
                    let user = phoneExist ? "old" : "new";
                    let redirect_uri = decodeURIComponent(this.props.redirect_uri);
                    if (/\?/.test(this.props.redirect_uri)) {
                        redirect_uri = redirect_uri + "&user=" + user;
                    } else {
                        redirect_uri = redirect_uri + "?user=" + user;
                    }
                    let { ident, openId } = this.props;

                    //绑定微信
                    axios.request({
                        ...pageApi.uc_wxBind,
                        headers: {'Authorization': "Bearer " + token},
                        params: {ident: ident}
                    }).then(({data}) => {
                        if (data.code === "200") {
                            //传openId给服务器
                            axios.request({
                                ...pageApi.setOpenId,
                                params:{ openid:  openId }
                            }).then( ()=>{
                                window.location.replace(redirect_uri);
                            }).catch( error =>{
                                console.log( error );
                                window.location.replace(redirect_uri);
                            });
                        } else {
                            dispatch(createActionsLogin("ctrlPrompt", {prompt: true, msg: data.message}));
                        }
                    }).catch(error => {
                        console.log('error',error);
                        this.setState({isRegister: false});
                        dispatch(createActionsLogin("ctrlPrompt", {prompt: true, msg: "服务器繁忙"}));
                        urlReplace( redirect_uri );
                        throw new Error(error);
                    })
                } else {
                    this.setState({isRegister: false});
                    dispatch(createActionsGlobal('changeLogin', {login: false}));
                    dispatch(createActionsLogin("ctrlPrompt", {prompt: true, msg: data.message}));
                    urlReplace(this.props.redirect_uri);
                }
            }).catch(error => {
                console.log(error);
                this.setState({isRegister: false});
                dispatch(createActionsLogin('ctrlPrompt', {prompt: true, msg: "服务器繁忙"}));
                urlReplace( redirect_uri );
                throw new Error(error);
            })
        } else {
            axios.request({
	            ...pageApi.uc_loginOrReg(secretCode),
	            //...pageApi.uc_loginOrRegister,
                data: {
                    appId: UCAPPID,
                    phone: phone,
                    phoneCode: validateCode,
                    inviteCode: invite
                }
            }).then(({data}) => {
                if(data.code==="200"){
                    let { token } = data.body;
                    let { ident, openId, redirect_uri } = this.props;
                    //绑定泰然城和微信
                    axios.request({
                        ...pageApi.uc_wxBind,
                        headers: { 'Authorization': "Bearer " + token },
                        params: { ident: ident }
                    }).then(({data}) => {
                        if(data.code==="200"){
                            //绑定状态正常之后setcookie 避免绑定异常 返回上一页是登录状态
                            setCookie('token', token);
                            this.setState({isRegister: false});
                            dispatch(createActionsGlobal('changeLogin', {login:true}));
                        }else{
                            Popup.MsgTip({ msg: data.message });
                            return false
                        }
                        //传openId给服务器
                        axios.request({
                            ...pageApi.setOpenId,
                            params:{ openid:  openId }
                        }).then( ()=>{
                            window.location.replace(redirect_uri);
                        }).catch( error =>{
                            console.log( error );
                            window.location.replace(redirect_uri);
                        });
                    }).catch(error => {
                        console.log('error',error);
                        this.setState({isRegister: false});
                        dispatch(createActionsLogin("ctrlPrompt", {prompt: true, msg: "服务器繁忙"}));
                        urlReplace( redirect_uri );
                        throw new Error(error);
                    })
                } else {
                    this.setState({isRegister: false});
                    dispatch(createActionsGlobal('changeLogin', {login: false}));
                    dispatch(createActionsLogin("ctrlPrompt", {prompt: true, msg: data.message}));
                }
            }).catch(error => {
                console.log(error);
                this.setState({isRegister: false});
                dispatch(createActionsLogin('ctrlPrompt', {prompt: true, msg: "服务器繁忙"}));
                urlReplace( redirect_uri );
                throw new Error(error);
            })
        }
    };

    render() {
        const {phone, validateCode, phoneFocus, codeFocus, canSend, sending, countDown, canSure, isRegister} = this.state;
        return (
            <div data-comp="login-popup">
                <div className="login-popup">
                    <h3>绑定手机更安全</h3>
                    <i className="close-xa-icon" onClick={this.props.popupClose}> </i>
                    <label className="strip-grid phone-input">
                        <div className="icon-grid"><i className="phone-shape-icon"> </i></div>
                        <div className="input-grid">
                            <input type="number" placeholder="请输入手机号码" value={phone} onInput={this.changePhone}
                                   onFocus={(e) => {
                                       this.focusCtrl('phone', true)
                                   }} onBlur={(e) => this.focusCtrl('phone', false)}/>
                            {phone !== "" && phoneFocus &&
                            <i className="close-x-icon" onTouchTap={this.clearPhone}> </i>}
                        </div>
                    </label>
                    <div className="strip-grid">
                        <label className="validate-grid">
                            <div className="icon-grid"><i className="key-shape-icon"> </i></div>
                            <div className="input-grid">
                                <input type="number" placeholder="短信验证码" value={validateCode}
                                       onInput={this.changeValidate} onFocus={(e) => {
                                    this.focusCtrl('code', true)
                                }} onBlur={(e) => this.focusCtrl('code', false)}/>
                                {validateCode !== "" && codeFocus &&
                                <i className="close-x-icon" onTouchTap={this.clearValidate}> </i>}
                            </div>
                        </label>
                        <div className={`send-validate ${ (canSend && !sending) ? 'active' : '' }`}
                             onClick={(canSend && !sending) && this.sendValidate}>
                            {sending ? `${countDown}秒后重发` : "发送验证码"}
                        </div>
                    </div>
                    <div className="login-btn-grid">
                        <div className={`login-btn ${ (canSure && !isRegister) ? "" : "dis"}`}
                             onClick={canSure && !isRegister && this.sendRegister}>确认
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export const LoginPopupModule = connect()(LoginPopup);


