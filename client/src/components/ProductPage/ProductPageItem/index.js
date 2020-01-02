import React from "react";
import useStyles from "./useStyles";
import {useSelector} from "react-redux";
import {Container} from "@material-ui/core";
import { Carousel } from "react-responsive-carousel";
import clamp from 'lodash-es/clamp'
import { useSpring, animated } from 'react-spring'
import { useGesture } from 'react-with-gesture'
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Product() {
  const classes = useStyles();
  const product = useSelector(state => state.products.product);
  let imgs =[];

    const [{ xy }, set] = useSpring(() => ({ xy: [0, 0] }))
    const bind = useGesture(({ down, delta, velocity }) => {
        velocity = clamp(velocity, 1, 8)
        set({ xy: down ? delta : [0, 0], config: { mass: velocity, tension: 500 * velocity, friction: 50 } })
    })

  if(product.imgs) {
      imgs = product.imgs.map(item => {
          return <img key={item}
                      src={item}
                      className={classes.img}
                      alt="Img not found"
          />
      })
  }

    return (
        <Container maxWidth={false} className={classes.mainContainer} >
            <Container maxWidth={false} className={classes.imgContainer} >
                <animated.div {...bind()} style={{ transform: xy.interpolate((x, y) => `translate3d(${x}px,${y}px,0)`) }}>
                    <Container maxWidth={false} className={classes.imgScale}>
                        <Carousel showThumbs={false}
                                  showArrows={false}
                                  showStatus={false}
                                  axis="vertical">
                            {imgs[0] ? imgs : ''}
                        </Carousel>
                    </Container>
                </animated.div>
            </Container>
            <Container maxWidth={false} className={classes.container}>
                <p className={classes.productName}>{product.name}</p>
                <p className={classes.productPrice}>{product.price} usa</p>
            </Container>
        </Container>
    );
}

export default Product;
