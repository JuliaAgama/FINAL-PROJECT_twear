import React, {useState} from 'react';
import {Link} from "react-router-dom";

import {Container, Box} from "@material-ui/core";
import { useSpring, animated as a } from 'react-spring'


import useStyles from "./useStyles";
import {useSelector} from "react-redux";

const createPriceStr = (currentCurrency, price, currency) => {
    if (currentCurrency === 'USD') {
        return price + ' ' + currentCurrency;
    } else if (currentCurrency === 'EUR') {
        if (currency.length > 0) {
            return Math.ceil(price / (currency[1].sale / currency[0].sale)) + ' ' + currentCurrency;
        }
    } else {
        if (currency.length > 0) {
            return Math.ceil(price * currency[0].sale) + ' ' + currentCurrency;
        }
    }
}



export default function ProductCard(props) {
    const classes = useStyles();
    const currentCurrency = useSelector(state => state.currency.currentCurrency);
    const exchangeRates = useSelector(state => state.currency.currency);
    const [flipped, set] = useState(false);
    const {name, price, sizes, srcImg1, srcImg2, borderRight, href} = props;
    const { transform, opacity } = useSpring({
        opacity: flipped ? 1 : 0,
        transform: `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
        config: { mass: 5, tension: 200, friction: 80 }
    });

    const priceString = createPriceStr(currentCurrency, price, exchangeRates);
    const cutName = (string, l) => string.length > l ? string.slice(0, l-2)+'..' : string;

    return (
        <Container
            maxWidth={false}
            onMouseEnter={() => set(true)}
            onMouseLeave={() => set(false)}
            className={borderRight ? classes.mainContainer : `${classes.mainContainer} ${classes.borderRight}`}
        >
            {!flipped ?
                <a.div className={classes.anime} style={{opacity: opacity.interpolate(o => 1 - o), transform}}>
                    <div className={classes.imgContainer}>
                        <img
                            className={classes.img}
                            src={srcImg1}
                            alt="NOT FOUND"/>
                    </div>
                    <div className={classes.textContainer}>
                        <p className={classes.title}>{cutName(name, 16)}</p>
                        <p className={classes.value}>{priceString}</p>
                    </div>
                </a.div>
                :
                <a.div className={classes.anime} style={{opacity, transform: transform.interpolate(t => `${t} rotateY(180deg)`)}}>
                    <div className={classes.imgContainer}>
                        <img
                            className={classes.img}
                            src={srcImg2}
                            alt="NOT FOUND"/>
                    </div>
                    <div className={classes.textContainer}>
                        <p className={classes.title}>Sizes</p>
                        <p className={classes.value}>{sizes}</p>
                    </div>
                </a.div>
            }
            <Link to={href} className={classes.link}><Box fontSize='body1.fontSize'>VIEW PRODUCT</Box></Link>
        </Container>
    );
};
