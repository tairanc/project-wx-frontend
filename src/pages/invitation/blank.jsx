import React, { Component } from 'react';
import ReactDOM,{ render } from 'react-dom';
import { ZXURL } from 'config/index';

export default class Blank extends Component{
    constructor(props, context) {
        super(props);
        let { invite_code } = props.location.query;
        this.state = {
            invite_code: invite_code
        }
    };
    componentWillMount(){
        location.href = ZXURL+'/register?invite_code='+this.state.invite_code;
    };
    render(){
        return <div></div>
    }
}