import React, {Component} from 'react';
import {Layout} from 'antd';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import TitleWidget from './component/header/titleWidget/TitleWidget';
import MenuWidget from './component/header/menuWidget/MenuWidget';
import FooterWidget from './component/footer/FooterWidget';
import routers from './router/routers';
import './mainStyle.css';

const {Header, Footer, Content} = Layout;

class Main extends Component {
    render() {
        return (
            <Router>
                <Layout className='mainView'>
                    <Header className='mainView-header floatHeader'>
                        <TitleWidget />
                        <MenuWidget />
                    </Header>
                    <Content className='mainView-content'>
                        {
                            routers.map((value, key) => {
                                if (value.exact) {
                                    return <Route exact path={value.path} component={value.component} key={key} />;
                                } else {
                                    return <Route path={value.path} component={value.component} key={key} />;
                                }
                            })
                        }
                    </Content>
                    <Footer className='mainView-footer'>
                        <FooterWidget />
                    </Footer>
                </Layout>
            </Router>
        );
    }
}

export default Main;
