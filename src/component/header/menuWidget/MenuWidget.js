import React, {Component} from 'react';
import {Menu} from 'antd';
import {Link} from 'react-router-dom';
import './MenuWidget.css';

const { SubMenu } = Menu;

class MenuWidget extends Component {
    state = {
        current: 'home',         //当前选中的菜单
    };

    handleClick = e => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };

    render() {
        return (
            <div>
                <div className='menuwidget_position_style'>
                    <Menu selectedKeys={[this.state.current]}
                          mode="horizontal"
                          onClick={this.handleClick}>
                        <Menu.Item key="home">
                            <Link to='/'>首页</Link>
                        </Menu.Item>
                        <SubMenu
                            title={
                                <span className="submenu-title-wrapper">
                                资源中心
                            </span>
                            }
                        >
                            <Menu.Item key="dataserver">
                                <Link to='/dataserver'>数据服务</Link>
                            </Menu.Item>
                            <Menu.Item key="functionserver">
                                <Link to='/functionserver'>功能服务</Link>
                            </Menu.Item>
                        </SubMenu>
                        <SubMenu
                            title={
                                <span className="submenu-title-wrapper">
                                智能地图
                            </span>
                            }
                        >
                            <Menu.Item key="2dmap">
                                <Link to='/mapview'>二维地图</Link>
                            </Menu.Item>
                            <Menu.Item key="3dmap">
                                <Link to='/sceneview'>三维场景</Link>
                            </Menu.Item>
                        </SubMenu>
                        <Menu.Item key="newscenter">
                            <Link to='/newscenter'>新闻中心</Link>
                        </Menu.Item>
                        <Menu.Item key="downloadcenter">
                            <Link to='/downloadcenter'>下载中心</Link>
                        </Menu.Item>
                        <Menu.Item key="cloudserver">
                            <Link to='/cloudserver'>云服务</Link>
                        </Menu.Item>
                        <SubMenu
                            title={
                                <span className="submenu-title-wrapper">
                                大数据
                            </span>
                            }
                        >
                            <Menu.Item key="chartanalyst">
                                <Link to='/chartanalyst'>图表分析</Link>
                            </Menu.Item>
                            <Menu.Item key="bigdataanalyst">
                                <Link to='/bigdataanalyst'>大数据分析</Link>
                            </Menu.Item>
                            <Menu.Item key="realtimegis">
                                <Link to='/realtimegis'>实时GIS</Link>
                            </Menu.Item>
                        </SubMenu>
                        <Menu.Item key="platformuse">
                            <Link to='/platformuse'>平台应用</Link>
                        </Menu.Item>
                        <SubMenu
                            title={
                                <span className="submenu-title-wrapper">
                                个人中心
                            </span>
                            }
                        >
                            <Menu.Item key="mycontent">
                                <Link to='/mycontent'>我的内容</Link>
                            </Menu.Item>
                            <Menu.Item key="mycollection">
                                <Link to='/mycollection'>我的收藏</Link>
                            </Menu.Item>
                            <Menu.Item key="myportalsetting">
                                <Link to='/myportalsetting'>门户配置</Link>
                            </Menu.Item>
                        </SubMenu>
                    </Menu>
                </div>
            </div>
        );
    }
}

export default MenuWidget;
