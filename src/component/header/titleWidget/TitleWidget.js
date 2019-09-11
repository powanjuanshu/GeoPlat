import React, {Component} from 'react';
import mainConfig from '../../../config/mainConfig';
import LoginWidget from '../loginWidget/LoginWidget';

import './TitleWidget.css';
import logoImg from '../../../assets/image/logo.png';

class TitleWidget extends Component {
    render() {
        return (
            <div>
                <img src={logoImg} alt='系统logo图片' className='system_logo_style'/>
                <span className='system_title_style'>{mainConfig.system_title}</span>
                <LoginWidget />
            </div>
        );
    }
}

export default TitleWidget;
