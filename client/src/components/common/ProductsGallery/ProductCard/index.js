import React, {useState} from 'react';
import {Container} from "@material-ui/core";
import { useSpring, animated as a } from 'react-spring'
import useStyles from "./useStyles";


export default function ProductCard(props) {
    const classes = useStyles();
    const [flipped, set] = useState(false);
    const {name, price, sizes, srcImg1, srcImg2, borderRight} = props;
    const { transform, opacity } = useSpring({
        opacity: flipped ? 1 : 0,
        transform: `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
        config: { mass: 5, tension: 200, friction: 80 }
    });

    const cutName = (string, l) => string.length > l ? string.slice(0, l-3)+'...' : string;

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
                        <p className={classes.title}>{cutName(name, 25)}</p>
                        <p className={classes.value}>$ {price}</p>
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
                        <p className={classes.title}>Size</p>
                        <p className={classes.value}>{sizes}</p>
                    </div>
                </a.div>
            }
        </Container>
    );
};
