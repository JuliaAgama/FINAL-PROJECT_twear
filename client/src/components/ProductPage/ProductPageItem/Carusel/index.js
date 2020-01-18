import React from "react";
import {Container} from "@material-ui/core";
import { Carousel } from "react-responsive-carousel";
import Spinner from '../../../common/Spinner'
// import clamp from 'lodash-es/clamp'
// import { useSpring, animated } from 'react-spring'
// import { useGesture } from 'react-with-gesture'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import useStyles from "./useStyles";


function CarouselProductPage(props) {
    const classes = useStyles();
    const {imgs} = props;

    // const [{ xy }, set] = useSpring(() => ({ xy: [0, 0] }));
    // const bind = useGesture(({ down, delta, velocity }) => {
    //     velocity = clamp(velocity, 1, 8)
    //     set({ xy: down ? delta : [0, 0], config: { mass: velocity, tension: 500 * velocity, friction: 50 } })
    // })


    return (
            <Container maxWidth={false} className={classes.imgContainer} >
                {/*<animated.div {...bind()} style={{ transform: xy.interpolate((x, y) => `translate3d(${x}px,${y}px,0)`) }}>*/}
                <Container maxWidth={false} className={classes.imgScale}>
                    <Carousel showThumbs={false}
                              showArrows={true}
                              showStatus={false}
                        // axis="vertical"
                              infiniteLoop={true}>
                        {imgs[0] ? imgs : <Spinner/>}
                    </Carousel>
                </Container>
                {/*</animated.div>*/}
            </Container>
    );
}

export default CarouselProductPage;
