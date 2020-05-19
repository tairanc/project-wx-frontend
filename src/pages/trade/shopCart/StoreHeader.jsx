import React,{Component} from 'react';
import CSSModules from 'react-css-modules'
import styles from './StoreHeader.scss';
import { PureComponent } from 'component/modules/HOC';
import CheckIcon from './CheckIcon';
import {Link} from 'react-router';

//购物车store 头部
@CSSModules(styles)
export default class StoreHeader extends PureComponent {
    storeIcon( type ){
        switch(type){
            // icon_biz 企业购 icon_good 小泰良品 icon_self自营店铺 icon_business 商家店铺
            case 'icon_biz':
                return <img src={require('../../../img/icon/store/qyg-shop-icon.png')}
                            style={{verticalAlign:"-4px"}}
                            width="15"
                            height="17" />;
            case 'icon_self':
                return <img src={require('../../../img/icon/store/trc-self-icon.png')}
                            style={{verticalAlign:"-4px"}}
                            width="20"
                            height="20" />;
            case 'icon_good':
                return <img src={require('../../../img/icon/store/xt-shop-icon.png')}
                            style={{verticalAlign:"-4px"}}
                            width="17"
                            height="17" />;
            default:
                return <img src={require('../../../img/icon/store/common-shop-icon.png')}
                            style={{verticalAlign:"-3px"}}
                            width="16"
                            height="15"/>;
        }
    }
    toggle = () => {
        const {initialData, toggleEdit, edit} = this.props
        toggleEdit()
       // edit && initialData()
    }
    /**
    * 转化折扣
    */
    getDiscount = (vip_discount) => {
        const discounts = '' + vip_discount;
        let discountText = discounts.charAt(0);
        discounts.charAt(1) != 0 && (discountText = `${discountText}.${discounts.charAt(1)}`);
        return discountText
    }

    render() {
        const {data, edit} = this.props;
        const {vip_discount} = data;
        let discountText = '';  //折扣文字
        if(!!vip_discount) {
            discountText = this.getDiscount(vip_discount)
        }
        return (
            <div styleName="storeHeader">
                <div styleName="checkbox">
                    <CheckIcon isCheck={data.storeCheck } handleCheck={ this.props.handleCheck }/>
                </div>
                <Link to={ (data.is_open == 1 && !edit) ? `/store/home?shop=${data.shop_id}` : "/shopCart"}
                      styleName="storeName">
                    <div styleName="storeNameText">
                        {this.storeIcon(data.shop_icon)}{ data.alias || data.name}
                    </div>
                    { (data.is_open == 1 && !edit) &&
                        <div styleName="openIcon">
                            <i styleName="arrowRightIcon"> </i>
                        </div>
                     }
                    {
                        !!vip_discount && (
                            <div styleName="vipLogoBox">
                                <img src={require('src/img/icon/vipLogo.png')} styleName="vipLogo"/>
                                <div styleName={discountText.length > 1 ? 'vipTextBgLong':'vipTextBg'}></div>
                                <div styleName={discountText.length > 1 ? 'vipTextLong':'vipText'}>会员{discountText}折</div>
                            </div>
                        )
                    }
                </Link>
                <div styleName="storeEdit">
                    {(data.show_coupons && !edit) ? <span styleName="one" onClick={this.props.popupCoupon.bind(null, data.shop_id )}>领券</span>:""}
                    <span styleName="two" onClick={ this.toggle } >{edit ? "完成" : "编辑"}</span>
                </div>
            </div>
        )
    }
}