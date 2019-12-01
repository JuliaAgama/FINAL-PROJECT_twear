import React, {useState} from 'react';
import {Container} from "@material-ui/core";
import { useSpring, animated as a } from 'react-spring'
import useStyles from "./useStyles";


export default function ProductCard() {
    const classes = useStyles();
    const [flipped, set] = useState(false)
    const { transform, opacity } = useSpring({
        opacity: flipped ? 0 : 1,
        transform: `perspective(600px) rotateY(${flipped ? 0 : 180}deg)`,
        config: { mass: 5, tension: 350, friction: 80 }
    })
    const imgSrc1 = "https://cdn.shopify.com/s/files/1/0092/9605/2282/products/Brenda_Coat-Jacket-0145-14006-Windsor_Wine_1512x.jpg?v=1570614063";
    const imgSrc2 = "https://cdn.shopify.com/s/files/1/0092/9605/2282/products/Brenda_Coat-Jacket-0145-14006-Windsor_Wine-1_2048x.jpg?v=1570614071";

    return (
        <Container maxWidth={false}
                   onMouseEnter={() => set(true)}
                   onMouseLeave={() => set(false)}
                   className={classes.mainContainer}>
            {flipped ?
                <a.div className={classes.anime} style={{opacity: opacity.interpolate(o => 1 - o), transform}}>
                    <div className={classes.imgContainer}>
                        <img className={classes.img}
                             src={imgSrc2}
                             alt="NOT FOUND"/>
                    </div>
                    <div className={classes.textContainer}>
                        <p className={classes.title}>Title fsdfsd sdfdsfds sfd</p>
                        <p className={classes.value}>4500</p>
                    </div>
                </a.div>
                :
                <a.div className={classes.anime} style={{opacity, transform: transform.interpolate(t => `${t} rotateY(180deg)`)}}>
                    <div className={classes.imgContainer}>
                        <img className={classes.img}
                             src={imgSrc1}
                             alt="NOT FOUND"/>
                    </div>
                    <div className={classes.textContainer}>
                        <p className={classes.title}>Size</p>
                        <p className={classes.value}>42 41 40 39 38</p>
                    </div>
                </a.div>
            }
        </Container>
    );
}
