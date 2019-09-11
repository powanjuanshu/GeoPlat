import React, {Component} from 'react';
import {Icon} from 'antd';
import './LoginWidget.css';

class LoginWidget extends Component {
    state = {
        currentUser: '游客',       //当前用户
        loginState: '登录',        //登录状态  登录/退出
    }
    render() {
        return (
            <div className='loginWeidget_position_style'>
                <Icon type="user" />
                <span>当前用户：{this.state.currentUser} | </span>
                <span className='loginWeidget_loginstate_style'>{this.state.loginState}</span>
            </div>
        );
    }
}

export default LoginWidget;
