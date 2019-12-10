import React, {Component} from 'react';
import {Menu, Empty, Button, Icon, BackTop} from 'antd';
import CarouselWidget from '../../component/widget/Carousel/CarouselWidget';
import basicDataSerImg from './image/thumbs/data.png';
import basicFunctionSerImg from './image/thumbs/function.png';
import cloudSerImg from './image/thumbs/cloud.png';
import platformUseImg from './image/thumbs/application.png';
import './Home.css';

class Home extends Component {
    state = {
        current: 'webmap', // 当前选中的菜单
    };

    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };

    render() {
        return (
            <div>
                <div className='CarouselWidget_view'>
                    <CarouselWidget />
                </div>
                <div className='otherWidget_view'>
                    <div className='hoem_index_view'>
                        <div className='hoem_index_widget hoem_index_widget01'>
                            <a href='#basicDataServerView'>
                                <img src={basicDataSerImg} alt='基础数据服务' />
                                <span>基础数据服务</span>
                            </a>
                        </div>
                        <div className='hoem_index_widget hoem_index_widget02'>
                            <a href='#basicFunctionServerView'>
                                <img src={basicFunctionSerImg} alt='基础功能服务' />
                                <span>基础功能服务</span>
                            </a>
                        </div>
                        <div className='hoem_index_widget hoem_index_widget03'>
                            <a href='#cloudServerView'>
                                <img src={cloudSerImg} alt='云服务' />
                                <span>云服务</span>
                            </a>
                        </div>
                        <div className='hoem_index_widget hoem_index_widget04' style={{borderRight: '1px solid #d8d8d8'}}>
                            <a href='#platformUse'>
                                <img src={platformUseImg} alt='平台应用' />
                                <span>平台应用</span>
                            </a>
                        </div>
                    </div>
                    <div id='basicDataServerView' className='basicDataServerView'>
                        <div className='basicDataServerView_header'>
                            <h2>基础数据服务</h2>
                            <p>一体化公共服务平台遵循开放地理空间联盟（OGC）服务标准，提供了包括WMS（Web地图服务）、WFS（Web要素服务）、WFS-G（地名地址服务）等，以及KML、街景数据服务、全景数据服务和与平台对接系统的相关专题服务</p>
                            <Menu selectedKeys={[this.state.current]}
                                mode="horizontal"
                                onClick={this.handleClick}>
                                <Menu.Item key="webmap">
                                    <Icon type="eye" />
                                    智能地图
                                </Menu.Item>
                                <Menu.Item key="vecdata">
                                    <Icon type="radar-chart" />
                                    矢量数据服务
                                </Menu.Item>
                                <Menu.Item key="imgdata">
                                    <Icon type="file-image" />
                                    影像数据服务
                                </Menu.Item>
                                <Menu.Item key="3ddata">
                                    <Icon type="global" />
                                    三维数据服务
                                </Menu.Item>
                                <Menu.Item key="timedata">
                                    <Icon type="environment" />
                                    时态数据服务
                                </Menu.Item>
                                <Menu.Item key="application">
                                    <Icon type="appstore" />
                                    应用程序
                                </Menu.Item>
                                <Menu.Item key="ogc">
                                    <Icon type="bank" />
                                    OGC
                                </Menu.Item>
                                <Menu.Item key="other">
                                    <Icon type="ellipsis" />
                                    其他
                                </Menu.Item>
                            </Menu>
                        </div>
                        <div className='basicDataServerView_body'>
                            <Empty description='暂无数据，请检查是否登录Portal' />
                        </div>
                        <div className='basicDataServerView_footer'>
                            <Button>查看更多</Button>
                        </div>
                    </div>
                    <div id='basicFunctionServerView' className='basicFunctionServerView'>
                        <div className='basicFunctionServerView_header'>
                            <h2>基础功能服务</h2>
                            <p>一体化公共服务平台提供用于辅助应用程序执行的各种几何计算能力和基于网络的地理处理分析功能服务，为用户提供了一个在线地理处理的工具箱</p>
                        </div>
                        <div className='basicFunctionServerView_body'>

                        </div>
                        <div className='basicFunctionServerView_footer'>
                            <Button>查看更多</Button>
                        </div>
                    </div>
                    <div id='cloudServerView' className='cloudServerView'>
                        <div className='cloudServerView_header'>
                            <h2>云服务</h2>
                            <p>云GIS服务平台，依托于基础设施层，将数据中心的基础架构资源整合成虚拟数据中心资源池，包括计算资源池、存储资源池、网络资源池，根据用户业务的实际需求消费这些资源</p>
                        </div>
                        <div className='cloudServerView_body'>

                        </div>
                        <div className='cloudServerView_footer'>
                            <Button>快速申请</Button>
                        </div>
                    </div>
                    <div id='platformUse' className='platformUse'>
                        <div className='platformUse_header'>
                            <h2>平台应用</h2>
                            <p>GeoPlat一体化应用中心由在线应用模板、行业应用支撑、智能地图应用、Office集成应用以及Web Mapping API等几部分组成</p>
                        </div>
                        <div className='platformUse_body'>

                        </div>
                    </div>
                </div>
                <BackTop />
            </div>
        );
    }
}

export default Home;
