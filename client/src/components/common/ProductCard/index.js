import React, {useState} from 'react';
import {Container} from "@material-ui/core";
import { useSpring, animated as a } from 'react-spring'
import useStyles from "./useStyles";


export default function ProductCard(props) {
    const classes = useStyles();
    const [flipped, set] = useState(false);
   const {name, price, itemNo, srcImg1, srcImg2 } = props;
    const { transform, opacity } = useSpring({
        opacity: flipped ? 1 : 0,
        transform: `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
        config: { mass: 5, tension: 350, friction: 80 }
    })
    // const imgSrc1 = "https://cdn.shopify.com/s/files/1/0092/9605/2282/products/Brenda_Coat-Jacket-0145-14006-Windsor_Wine_1512x.jpg?v=1570614063";
    // const imgSrc2 = "https://cdn.shopify.com/s/files/1/0092/9605/2282/products/Brenda_Coat-Jacket-0145-14006-Windsor_Wine-1_2048x.jpg?v=1570614071";

    return (
        <Container maxWidth={false}
                   onMouseEnter={() => set(true)}
                   onMouseLeave={() => set(false)}
                   className={classes.mainContainer}>
            {!flipped ?
                <a.div className={classes.anime} style={{opacity: opacity.interpolate(o => 1 - o), transform}}>
                    <div className={classes.imgContainer}>
                        <img className={classes.img}
                             src={srcImg1}
                             alt="NOT FOUND"/>
                    </div>
                    <div className={classes.textContainer}>
                        <p className={classes.title}>{name}</p>
                        <p className={classes.value}>{price}</p>
                    </div>
                </a.div>
                :
                <a.div className={classes.anime} style={{opacity, transform: transform.interpolate(t => `${t} rotateY(180deg)`)}}>
                    <div className={classes.imgContainer}>
                        <img className={classes.img}
                             src={srcImg2}
                             alt="NOT FOUND"/>
                    </div>
                    <div className={classes.textContainer}>
                        <p className={classes.title}>{itemNo}</p>
                        <p className={classes.value}>42 41 40 39 38</p>
                    </div>
                </a.div>
            }
        </Container>
    );
}
