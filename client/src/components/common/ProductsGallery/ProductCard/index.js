import React, {useState} from 'react';
import {Link, useHistory} from "react-router-dom";

import {Container, Box} from "@material-ui/core";
import { useSpring, animated as a } from 'react-spring'
import Currency from "../../Currency";

import useStyles from "./useStyles";

export default function ProductCard(props) {
    const classes = useStyles();
    const history = useHistory();
    const [flipped, set] = useState(false);
    const {itemNo, name, price, sizes, srcImg1, srcImg2, borderRight, outOfStock} = props;
    const { transform, opacity } = useSpring({
        opacity: flipped ? 1 : 0,
        transform: `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
        config: { mass: 5, tension: 200, friction: 80 }
    });

    const clickHandler = () => history.push(`/products/${itemNo}`);

    const cutName = (string, l) => string.length > l ? string.slice(0, l-2)+'..' : string;

    return (
        <Container
            maxWidth={false}
            onMouseEnter={() => set(true)}
            onMouseLeave={() => set(false)}
            onClick={clickHandler}
            className={borderRight ? classes.mainContainer : `${classes.mainContainer} ${classes.borderRight}`}
        >
            {!flipped ?
                <a.div className={classes.anime} style={{opacity: opacity.interpolate(o => 1 - o), transform}}>
                    <div className={classes.imgContainer}>
                        <img
                            className={outOfStock ? classes.imgOut : classes.img}
                            src={srcImg1}
                            alt="NOT FOUND"/>
                    </div>
                    <div className={classes.textContainer}>
                        <p className={outOfStock ? classes.titleOut : classes.title}>{cutName(name, 16)}</p>
                        <p className={outOfStock ? classes.valueOut : classes.value}><Currency price={price}/></p>
                    </div>
                </a.div>
                :
                <a.div className={classes.anime} style={{opacity, transform: transform.interpolate(t => `${t} rotateY(180deg)`)}}>
                    <div className={classes.imgContainer}>
                        <img
                            className={outOfStock ? classes.imgOut : classes.img}
                            src={srcImg2}
                            alt="NOT FOUND"/>
                    </div>
                    <div className={classes.textContainer}>
                        {outOfStock ? 
                            <>
                                <p className={classes.titleOut}>Product is out of stock</p>
                                <p className={classes.valueOut}>Not available</p>
                            </> :
                            <>
                                <p className={classes.title}>Sizes</p>
                                <p className={classes.value}>{sizes}</p>
                            </>
                        }
                    </div>
                </a.div>
            }
            <Link to={`/products/${itemNo}`} className={classes.link}>
            {outOfStock ? 
                <Box fontSize='body1.fontSize' className={classes.viewOut}>OUT OF STOCK</Box> :
                <Box fontSize='body1.fontSize'>VIEW PRODUCT</Box>
            }
            </Link>
        </Container>
    );
};