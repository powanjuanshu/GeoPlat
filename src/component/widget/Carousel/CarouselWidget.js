import React, {Component} from 'react';
import {Carousel} from 'antd';
import carouselConfig from '../../../config/carouselConfig';
import './CarouselWidget.css';

class CarouselWidget extends Component {
    render() {
        return (
            <div>
                <Carousel className='carousel_style'>
                    <div className='carousel_content_view carousel_content_view01'>
                        <img src={carouselConfig.carousel_view_one.image} alt='img01' />
                        <h2>{carouselConfig.carousel_view_one.title}</h2>
                        <h4>{carouselConfig.carousel_view_one.desc}</h4>
                    </div>
                    <div className='carousel_content_view'>
                        <h3>2</h3>
                    </div>
                    <div className='carousel_content_view'>
                        <h3>3</h3>
                    </div>
                    <div className='carousel_content_view'>
                        <h3>4</h3>
                    </div>
                </Carousel>
            </div>
        );
    }
}

export default CarouselWidget;
