import React, {Component} from 'react';
import CarouselWidget from '../../component/widget/Carousel/CarouselWidget';
import './Home.css';

class Home extends Component {

    render() {
        return (
            <div>
                <div className='CarouselWidget_view'>
                    <CarouselWidget />
                </div>
                <div className='otherWidget_view'>
                    <h1>主页组件</h1>
                </div>
            </div>
        );
    }
}

export default Home;
