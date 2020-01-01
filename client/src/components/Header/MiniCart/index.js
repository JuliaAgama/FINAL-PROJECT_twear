import React, {useState, useEffect} from 'react';
import {useSelector} from "react-redux";


import {Link} from "react-router-dom";

import {Container, Badge, Hidden} from "@material-ui/core";
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';

import useStyles from "./useStyles";


export default () => {

    const [skus, setSkus] = useState(0);
    const [invisible, setInvisible] = useState(true);

    const {cart} = useSelector(state => state.cart);

    useEffect(() => {
        if(cart.products && cart.products.length > 0 && cart.products.reduce(((sum, el) => sum + el.quantity), 0) > 0) {
            setSkus(cart.products.length);
            setInvisible(false);
        } else {
            setSkus(0);
            setInvisible(true);
        }
        return () => {
            setSkus(0);
            setInvisible(true);
        }
    }, [cart]);

    const classes = useStyles();

    return (
        <React.Fragment>
            <Container className={classes.container}>
                <Link to='/cart' className={classes.link}>
                    <Badge
                        badgeContent={parseInt(skus)}
                        color="secondary"
                        overlap="circle"
                        invisible={invisible}
                        className={classes.badge}
                    >
                        <Hidden smDown>
                            <p className={classes.padding}>Shopping Bag</p>
                        </Hidden>
                        <Hidden mdUp>
                            <LocalMallOutlinedIcon/>
                        </Hidden>
                    </Badge>
                </Link>
            </Container>
        </React.Fragment>
    );
};
