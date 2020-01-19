import React, { Component } from "react";
import Slider from "react-slick";

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

        const {imgs} = this.props;

        return (
            <Container maxWidth={false} className='imgContainerCSS'>
                <Slider {...settings}>
                    {imgs ? imgs : ''}
                </Slider>
            </Container>
        );
    }
}