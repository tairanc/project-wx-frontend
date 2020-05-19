import React, {Component} from 'react';
import {LoadingRound, Shady} from 'component/common';
import {Link, browserHistory} from 'react-router';
import {connect} from 'react-redux';
import {tip} from 'component/modules/popup/tip/tip';
import axios from 'axios';
import {WXAPI} from 'config/index'
import {browser} from 'js/common/utils';
import './index.scss';
//接口请求
const pageApi = {
	submit: {url: `${WXAPI}/questionnaire/save`, method: "post"},
};

export default class Questionnaire extends Component {
	constructor(props) {
		super(props);
		this.state = {
			answers: [
				{
					id: 1,
					title: "您平时多久会来一次中贸广场？",
					type: "radio",
					option: [{num: "0", value: "每周都来及更高频率"}, {num: "1", value: "一个月一两次"}, {
						num: "2",
						value: "三个月一两次"
					}, {num: "3", value: "偶然来一次"}, {num: "4", value: "其他，请填写", type: "custom", inputVal: ""}],
					select: {}
				},
				{
					id: 2,
					title: "您来中贸广场的原因？",
					type: "radio",
					option: [{num: "0", value: "家住附近，临近购物"}, {num: "1", value: "上班族，上班顺便来逛一下"}, {
						num: "2",
						value: "学生，出于娱乐游玩目的"
					}, {num: "3", value: "医疗工作者，附近医院上班"}, {num: "4", value: "游客，旅游经过"}, {
						num: "5",
						value: "其他，请填写",
						type: "custom",
						inputVal: ""
					}],
					select: {}
				},
				{
					id: 3,
					title: "日常购物当中，您在饮品方面购买频率最高的是？[可多选]",
					type: "checkbox",
					option: [{num: "0", value: "咖啡"}, {num: "1", value: "水果茶"}, {
						num: "2",
						value: "奶茶"
					}, {num: "3", value: "鲜榨果汁"}, {num: "4", value: "新鲜水果"}, {
						num: "5", value: "其他，请填写", type: "custom",
						inputVal: ""
					}],
					select: {}
				},
				{
					id: 4,
					title: "日常购物当中，您购买消费最多的品类？[可多选]",
					type: "checkbox",
					option: [{num: "0", value: "家纺床品"}, {num: "1", value: "生活日用"}, {
						num: "2",
						value: "杯具茶具"
					}, {num: "3", value: "软装饰品"}, {num: "4", value: "餐具用品"}, {num: "5", value: "厨房用具"}, {
						num: "6",
						value: "卫浴系列"
					}, {
						num: "7",
						value: "收纳系列"
					}, {
						num: "8", value: "其他，请填写", type: "custom",
						inputVal: ""
					}, {
						num: "9", value: "请任意填写三款您想购买的产品", type: "custom", title: "产品",
						inputVal: ""
					}],
					select: {}
				},
				{
					id: 5,
					title: "您的家居床品多久购买一次?",
					type: "radio",
					option: [{num: "0", value: "每季一次"}, {num: "1", value: "每半年一次"}, {
						num: "2",
						value: "每年一次"
					},{
						num: "3",
						value: "其他，请填写",
						type: "custom",
						inputVal: ""
					}],
					select: {}
				},
				{
					id: 6,
					title: "您的家居床品四件套每次花费多少？",
					type: "radio",
					option: [{num: "0", value: "200元以下"}, {num: "1", value: "200元-400元"}, {num: "2", value: "500元-1000元"}, {
						num: "3",
						value: "1000元以上"
					},{
						num: "4",
						value: "其他，请填写",
						type: "custom",
						inputVal: ""
					}],
					select: {}
				},
				{
					id: 7,
					title: "如果泰然城有您心仪的数码产品，您希望品牌是？[可多选]",
					type: "checkbox",
					option: [{num: "0", value: "Sony"}, {num: "1", value: "Beats"}, {
						num: "2",
						value: "Bose"
					}, {num: "3", value: "漫步者"}, {
						num: "4",
						value: "其他，请填写",
						type: "custom",
						inputVal: ""
					}],
					select: {}
				}, {
					id: 8,
					title: "如果泰然城有您喜爱的数码产品，您希望品类是？[可多选]",
					type: "checkbox",
					option: [{num: "0", value: "耳机"}, {num: "1", value: "蓝牙音箱"}, {
						num: "2",
						value: "鼠标键盘"
					}, {num: "3", value: "智能手环"}, {
						num: "4",
						value: "其他，请填写",
						type: "custom",
						inputVal: ""
					}],
					select: {}
				}, {
					id: 9,
					title: "如果泰然城有您喜爱的进口商品，您希望的品类是？[可多选]",
					type: "checkbox",
					option: [{num: "0", value: "进口美食"}, {num: "1", value: "进口生活用品"}, {
						num: "2",
						value: "进口小家电"
					}, {
						num: "3",
						value: "其他，请填写",
						type: "custom",
						inputVal: ""
					}, {
						num: "4",
						value: "具体商品，请填写",
						type: "custom",
						inputVal: "",
						title: "产品"
					}],
					select: {}
				}, {
					id: 10,
					title: "您的性别:",
					type: "radio",
					option: [{num: "0", value: "男"}, {num: "1", value: "女"}],
					select: {}
				}, {
					id: 11,
					title: "您的年龄:",
					type: "radio",
					option: [{num: "0", value: "20以下"}, {num: "1", value: "20-30"}, {
						num: "2",
						value: "30-40"
					}, {num: "3", value: "40以上"}],
					select: {}
				},  {
					id: 12,
					title: "您的居住位置距离中贸广场的距离？",
					type: "radio",
					option: [{num: "0", value: "1公里范围内"}, {num: "1", value: "3公里范围内"}, {
						num: "2",
						value: "10公里范围内（公交车30分钟内到达）"
					}, {num: "3", value: "20公里范围内（公交车1小时内到达）"}, {num: "4", value: "更远"}],
					select: {}
				}, {
					id: 13,
					title: "您主要通过什么渠道来进行购物？",
					type: "radio",
					option: [{num: "0", value: "线上电商平台"}, {num: "1", value: "线下实体门店"}, {
						num: "2",
						value: "线上、线下较为平均"
					}],
					select: {}
				}, {
					id: 14,
					title: "您一般是通过什么途径来了解和促动自己进行商品购买？[可多选]",
					type: "checkbox",
					option: [{num: "0", value: "自己在网上浏览查询"}, {num: "1", value: "通过网友和网红的推荐"}, {
						num: "2",
						value: "通过朋友的介绍推荐"
					}, {num: "3", value: "自己在实体门店的浏览咨询"}],
					select: {}
				},  {
					id: 15,
					title: "您或您的家庭日常购物的消费品类集中在哪些？[可多选]",
					type: "checkbox",
					option: [{num: "0", value: "居家生活"}, {num: "1", value: "餐厨用具"}, {
						num: "2",
						value: "个护健康"
					}, {num: "3", value: "服饰服装"}, {num: "4", value: "品质箱包"}, {
						num: "5",
						value: "文具办公"
					}, {num: "6", value: "新鲜果蔬"}, {num: "7", value: "休闲食品"}, {num: "8", value: "米面杂粮"}, {
						num: "9",
						value: "生活电器"
					}, {num: "10", value: "3C数码"}],
					select: {}
				}, {
					id: 16,
					title: "您日常逛街时消费购物的金额范围一般是多少？",
					type: "radio",
					option: [{num: "0", value: "0-50元"}, {num: "1", value: "50-100元"}, {
						num: "2",
						value: "100-150元"
					}, {num: "3", value: "150-200元"}, {num: "4", value: "200-500元"}, {
						num: "5",
						value: "500-1000元"
					}, {num: "6", value: "1000元以上"}],
					select: {}
				}, {
					id: 17,
					title: "您认为哪种促销方式最吸引您？[可多选]",
					type: "checkbox",
					option: [{num: "0", value: "满赠券（比如：消费满***元获赠**一件）"}, {num: "1", value: "满减券（比如：消费满***元减**元）"}, {
						num: "2",
						value: "满额换购（比如：消费满***元加**元换购**商品一件）"
					}, {num: "3", value: "满额抽奖（比如：消费满***元参加抽奖）"}, {num: "4", value: "折扣（比如：全场*折，消费满***元*折）"}, {
						num: "5",
						value: "限时秒杀（比如：单品直降***元，仅限*天）"
					}, {num: "6", value: "其他，请填写", type: "custom", inputVal: ""}],
					select: {}
				}, {
					id: 18,
					title: "泰然城每周都有促销商品，请问对于促销商品您希望通过什么方式了解？[可多选]",
					type: "checkbox",
					option: [{num: "0", value: "短信"}, {num: "1", value: "邮箱"}, {num: "2", value: "宣传单邮寄上门"}, {
						num: "3",
						value: "微信公众号"
					}, {num: "4", value: "微信订阅号"}, {num: "5", value: "微博"}, {num: "6", value: "抖音"}, {
						num: "7",
						value: "App推送",
					}, {num: "8", value: "其他，请填写", type: "custom", inputVal: ""}],
					select: {},
				},
				{
					id: 19,
					title: "您想要在门店获得的商品、体验、定期活动等？",
					type: "custom",
					option: [{num: "0", value: "请任意填写", type: "custom", inputVal: ""}],
					select: {},
				}
			],
			phone: "",
			phoneFlag: false,
			submitFlag: false,
			guideLead: false
		}
	}

	handleChange = (index, num, type) => {
		let {answers} = this.state;
		switch (type) {
			case "radio":
				if (!answers[index].option[num].type && Object.keys(answers[index].select)[0]) {  //点击，其他选项置空
					if(answers[index].option[Object.keys(answers[index].select)[0]].inputVal){
						answers[index].option[Object.keys(answers[index].select)[0]].inputVal = "";
					}
				}
				answers[index].select = {};
				answers[index].select[num] = true;
				break;
			case "checkbox":
				if (answers[index].select[num]) {
					delete answers[index].select[num];
					if(answers[index].option[num].type) answers[index].option[num].inputVal = "";
				} else {
					answers[index].select[num] = true;
				}
				break;
			default:
				break;
		}
		this.setState({answers});
	};

	handleCustomInput = (e, index, num, type) => {
		let {answers} = this.state;
		if (type == "radio") {
			answers[index].select = {};
		}
		if (e.target.value.length > 20) return;
		/*if(type=="custom"){

		}*/
		answers[index].option[num].inputVal = e.target.value;
		answers[index].select[num] = e.target.value;
		this.setState({answers});
	};

	handlePhoneNum = (e) => {
		let val = e.target.value;
		this.setState({phone: val});
	};

	handlePhoneNumBlur = (e) => {
		let val = e.target.value;
		if (val.length !== 11) {
			this.setState({phoneFlag: true})
		} else {
			this.setState({phoneFlag: false})
		}
	};

	submit = () => {
		let self = this, answerArr = [];
		let {answers, phone} = this.state;
		for (let i = 0; i < answers.length; i++) {
			let key = Object.keys(answers[i].select)[0];
			let keys = Object.keys(answers[i].select);
			for (let j = 0; j < keys.length; j++) {
				if (answers[i].option[keys[j]].inputVal == "") {
					this.setState({submitFlag: true});
					$(window).scrollTop($(`.each-one${i}`)[0].offsetTop);
					return
				}
			}

			if ((i == 3 && !(Object.keys(answers[i].select).length >= 2 && answers[i].select[9] && answers[i].option[9].inputVal)) || (i == 8 && !(Object.keys(answers[i].select).length >= 2 && answers[i].select[4] && answers[i].option[4].inputVal)) || (!Object.keys(answers[i].select).length || (answers[i].option[key].type && typeof answers[i].select[key] === "boolean"))) { //其他选项并且值已填
				this.setState({submitFlag: true});
				$(window).scrollTop($(`.each-one${i}`)[0].offsetTop);
				return
			}
		}

		if (phone.length !== 11) {
			this.setState({phoneFlag: true});
			return
		} else {
			this.setState({phoneFlag: false})
		}

		answers.map((item, i) => {
			answerArr.push({id: item.id, type: item.type, select: item.select})
		});

		axios.request({...pageApi.submit, data: {answers: answerArr, phone: phone}}).then(
			({data}) => {
				self.setState({guideLead: true});
			}
		).catch(error => {
			console.log(error);
			tip.show({msg: error.response.data.message || '服务器繁忙'});
		});
	};

	render() {
		const {answers, phone, phoneFlag, submitFlag, guideLead} = this.state;
		console.log(answers);
		const html = answers.map((item, i) => {
			return <li key={i} className={`each-one each-one${i}`}>
				<div className="title"><span className="c-cdred star">* </span><span>{item.id}.</span>{item.title}</div>
				{item.option.map((op, j) => {
					return <div key={j}>
						<div className="answer-title">{op.title}</div>
						{item.type === "radio" ?
							<div className="option">
								<input checked={!!item.select[op.num]}
									   id={`color-input-radio${i}_${j}`}
									   className="color-input color-input-radio" onChange={() => {
									this.handleChange(i, op.num, item.type)
								}} type={item.type}/>
								<label htmlFor={`color-input-radio${i}_${j}`}></label>
								<span>{op.value}</span>
								{!!op.type &&
								<div className="custom">
									<input type="text" value={op.inputVal} onChange={(e) => {
										this.handleCustomInput(e, i, op.num, "radio")
									}}
										   style={typeof item.select[op.num] === "boolean" ? {border: "1px solid red"} : {}}/>
									{typeof item.select[op.num] === "boolean" &&
									<span className="c-fs10 c-cdred">请输入1~20个字符</span>}
								</div>}
							</div>
							:
							(item.type === "checkbox" ? <div className="option">
								<input checked={!!item.select[op.num]} id={`color-input-checkbox${i}_${j}`}
									   className="color-input color-input-checkbox"
									   onChange={() => {
										   this.handleChange(i, op.num, item.type)
									   }} type={item.type}/>
								<label htmlFor={`color-input-checkbox${i}_${j}`}></label>
								<span>{op.value}</span>
								{op.type &&
								<div className="custom">
									<input type="text" value={op.inputVal} onChange={(e) => {
										this.handleCustomInput(e, i, op.num)
									}}
										   style={typeof item.select[op.num] === "boolean" ? {border: "1px solid red"} : {}}/>
									{typeof item.select[op.num] === "boolean" &&
									<span className="c-fs10 c-cdred">请输入1~20个字符</span>}
								</div>}
							</div> : <div className="option">
								<span>{op.value}</span>
								{op.type &&
								<div className="custom" style={{marginLeft:"0"}}>
									<input type="text" value={op.inputVal} onChange={(e) => {
										this.handleCustomInput(e, i, op.num,"custom")
									}} style={typeof item.select[op.num] === "boolean" ? {border: "1px solid red"} : {}}/>
									{!item.select[op.num] && submitFlag &&
									<span className="c-fs10 c-cdred">请输入1~20个字符</span>}
								</div>}
							</div>)}
					</div>
				})}
				{i == 3 && submitFlag && (!Object.keys(item.select).length && !answers[i].select[9] ?
					<div className="error-tip">
						请选择选项</div> : (answers[i].select[9] ? (Object.keys(item.select).length < 2 ?
						<div className="error-tip">请选择选项</div> : "") : <div className="error-tip">请选择产品</div>))}
				{i == 8 && submitFlag && (!Object.keys(item.select).length && !answers[i].select[4] ?
					<div className="error-tip">
						请选择选项</div> : (answers[i].select[4] ? (Object.keys(item.select).length < 2 ?
						<div className="error-tip">请选择选项</div> : "") : <div className="error-tip">请选择产品</div>))}
				{i != 3 && i != 8 && i != 18 && !Object.keys(item.select).length && submitFlag &&
				<div className="error-tip">请选择选项</div>}
			</li>
		});
		return (
			<div data-page="question-naire">
				{guideLead ?
					<div className="guide-leade" style={{minHeight: $(window).height()}}>
						<img src="../src/img/activity/questionnaire/guide-01.jpg"/>
						<img src="../src/img/activity/questionnaire/guide-02.jpg"/>
						<img src="../src/img/activity/questionnaire/guide-03.jpg"/>
					</div>
					:
					<div className="question-naire" style={{minHeight: $(window).height()}}>
						<div className="question-naire-title-wraper">
							<div className="question-naire-title">泰然城中贸广场问卷调查</div>
							<div className="question-naire-content">
								亲爱的顾客：<br/>
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								您好！泰然城中贸广场店马上就要盛大开幕了。我们欣喜的成为了您生活圈的一员。泰然城是一家一站式品质生活综合服务体验馆，集生活家居休闲娱乐于一体，这里有咖啡吧、书吧，家居生活、数码家电、美妆个护、进口美食、旅行办公等商品。
								为了更好的给您提供完善的购物体验，我们特别设计了这份问卷。完成问卷并注册成为会员即可获得精美礼品一份。<span className="c-fb thank">非常感谢您的配合！</span>
							</div>
						</div>
						<ul className="question-naire-wraper">
							{html}
							<li className="each-one">
								<div className="title">泰然城中贸广场店开业在即，开业月多款商品钜惠来袭，欢迎您入店选购！<br/>地址：中贸街于南关正街交叉口西100米（原中贸广场售楼中心）</div>
								<div className="title"><span className="c-cdred">* </span>您的联系方式：电话
									<div className="phone-input-wraper">
										<input className="phone-input" value={phone} maxLength="11" onChange={(e) => {
											this.handlePhoneNum(e)
										}} onBlur={(e) => {
											this.handlePhoneNumBlur(e)
										}} type="text"/>
										{phoneFlag && <div className="error-tip">请输入正确的电话号码</div>}
									</div>
								</div>
								<button className="button" onClick={this.submit}>点 击 提 交</button>
							</li>
						</ul>
						<div className="trc-img"><img src="../src/img/activity/questionnaire/trc-thank.png"/></div>
					</div>}
			</div>
		)
	}
}
