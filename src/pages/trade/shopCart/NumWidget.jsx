import React, {Component} from 'react';
import CSSModules from 'react-css-modules'
import styles from './NumWidget.scss';
import {getNextPlusQuantity} from './utils';

//数量控制
@CSSModules(styles)
export default class NumWidget extends Component{
	scrollView(e){
		let aimPos = 70;
		window.scrollTo(0, window.scrollY + e.target.getBoundingClientRect().top - aimPos );
	}
	render(){
		const { buyLimit, quantity, disable, minLimit, minimumQuantityRule } = this.props;
		const nextPlusQuantity = getNextPlusQuantity(minimumQuantityRule, quantity);           // 下一次增加后的数量
		return(
			<div styleName="numCtrl">
				{quantity <= minLimit || disable ?
					<div styleName="link" className="c-bgf4" ><i styleName="subLDisIcon"> </i></div>:
					<div styleName="link" onTouchTap={this.props.handleReduce }><i styleName="subLIcon"> </i></div>
				}
				{
                    buyLimit !== null ?
                        <input type="number" min={minLimit}
                               value={this.props.quantity }
                               onChange={ this.props.handleNum }
                               max={ buyLimit }
                               onFocus={ this.scrollView }
                               onBlur={ this.props.handleInputNum }/>
						:
                        <input type="number" min={minLimit}
                               value={this.props.quantity }
                               onChange={ this.props.handleNum }
                               onFocus={ this.scrollView }
                               onBlur={ this.props.handleInputNum }/>
				}
				{(buyLimit !== null && quantity >= buyLimit) || nextPlusQuantity > buyLimit || disable ?
					<div  styleName="link" className="c-bgf4" ><i styleName="plusLDisIcon"> </i></div> :
					<div styleName="link" onTouchTap={this.props.handlePlus }><i styleName="plusLIcon"> </i></div>
				}
			</div>
		)
	}
}