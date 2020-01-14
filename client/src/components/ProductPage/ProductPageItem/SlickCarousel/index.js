import React, { Component } from "react";
import Slider from "react-slick";
import ReactImageZoom from 'react-image-zoom';


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Container} from "@material-ui/core";

export default class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        const zoom = {
            width: 630,
            zoomPosition: 'original',
        }

        const {imgs} = this.props;
        const elements = imgs.map((src, index) =>(<ReactImageZoom key={index}
                                                                  img={src.props.src}
                                                                  {...zoom}
        />));

        return (
            <Container maxWidth={false} className='imgContainerCSS'>
                <Slider {...settings}>
                    {/*{elements}*/}
                    {imgs ? imgs : ''}
                </Slider>
            </Container>
        );
    }
}