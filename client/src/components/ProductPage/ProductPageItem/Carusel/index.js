import React from "react";
import {Container} from "@material-ui/core";
import { Carousel } from "react-responsive-carousel";
import Spinner from '../../../common/Spinner'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import useStyles from "./useStyles";


function CarouselProductPage(props) {
    const classes = useStyles();
    const {imgs} = props;

    return (
            <Container maxWidth={false} className={classes.imgContainer} >
                    <Carousel showThumbs={false}
                              showArrows={true}
                              showStatus={false}
                              infiniteLoop={true}>
                        {imgs[0] ? imgs : <Spinner/>}
                    </Carousel>
            </Container>
    );
}

export default CarouselProductPage;
