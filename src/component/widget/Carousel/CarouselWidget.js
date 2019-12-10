import React, {Component} from 'react';
import {Carousel} from 'antd';
import carouselConfig from '../../../config/carouselConfig';
import './CarouselWidget.css';

class CarouselWidget extends Component {
    render() {
        return (
            <div>
                <Carousel autoplay className='carousel_style'>
                    <div className='carousel_content_view carousel_content_view01'>
                        <img src={carouselConfig.carousel_view_one.image} alt='img01' />
                        <h2>{carouselConfig.carousel_view_one.title}</h2>
                        <h4>{carouselConfig.carousel_view_one.desc}</h4>
                    </div>
                    <div className='carousel_content_view carousel_content_view02'>
                        <img src={carouselConfig.carousel_view_two.image} alt='img02' />
                        <h2>{carouselConfig.carousel_view_two.title}</h2>
                        <h4>{carouselConfig.carousel_view_two.desc}</h4>
                    </div>
                    <div className='carousel_content_view carousel_content_view03'>
                        <img src={carouselConfig.carousel_view_three.image} alt='img03' />
                        <h2>{carouselConfig.carousel_view_three.title}</h2>
                        <h4>{carouselConfig.carousel_view_three.desc}</h4>
                    </div>
                    <div className='carousel_content_view carousel_content_view04'>
                        <img src={carouselConfig.carousel_view_four.image} alt='img04' />
                        <h2>{carouselConfig.carousel_view_four.title}</h2>
                        <h4>{carouselConfig.carousel_view_four.desc}</h4>
                    </div>
                </Carousel>
            </div>
        );
    }
}

export default CarouselWidget;
