import React, { Component } from 'react';
import ReactImageMagnify from 'react-image-magnify';
import ReactSlick from 'react-slick';
import {Container} from "@material-ui/core";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



export default class ReactSlickExample extends Component {


    render() {
        const {
            rimProps,
            rsProps,
            dataSource
        } = this.props;

        return (
            <Container maxWidth={false} className='imgContainerCSS'>
            <ReactSlick
                {...{
                    dots: true,
                    infinite: true,
                    speed: 500,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }}
                {...rsProps}
            >
                {dataSource.map((src, index) => (
                    <div key={index}>
                        <ReactImageMagnify
                            {...{
                                smallImage: {
                                    alt: 'IMG NOT FOUND',
                                    isFluidWidth: true,
                                    src: src.props.src,
                                    // srcSet: src.srcSet,
                                    // sizes: '(max-width: 480px) 100vw, (max-width: 1200px) 30vw, 360px'
                                },
                                largeImage: {
                                    src: src.props.src,
                                    width: 400,
                                    height: 1000
                                },
                                lensStyle: { backgroundColor: 'rgba(0,0,0,.6)' }
                            }}
                            {...rimProps}
                        />
                    </div>
                ))}
            </ReactSlick>
            </Container>
        );
    }
}