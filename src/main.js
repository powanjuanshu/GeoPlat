import React, {Component} from 'react';
import {Layout} from 'antd';
import './mainStyle.css';

const {Header, Footer, Content} = Layout;

class Main extends Component {
    render() {
        return (
            <div>
                <Layout className='mainView'>
                    <Header className='mainView-header floatHeader'>
                        Header
                    </Header>
                    <Content className='mainView-content'>Content</Content>
                    <Footer className='mainView-footer'>Footer</Footer>
                </Layout>
            </div>
        );
    }
}

export default Main;
