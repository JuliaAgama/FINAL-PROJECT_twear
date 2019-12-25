import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {Link} from "react-router-dom";

import {Container, Typography, Badge, Hidden} from "@material-ui/core";
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';

import useStyles from "./useStyles";


export default () => {

    const [skus, setSkus] = useState(0);
    const [invisible, setInvisible] = useState(true);

    const cart = useSelector(state => state.cart.cart);

    useEffect(() => {
        if(cart && cart.products && cart.products.length > 0) {
            setSkus(cart.products.length);
            setInvisible(false);
        } else if ( !cart && localStorage.getItem('cart') && localStorage.getItem('cart').products && localStorage.getItem('cart').products.length > 0) {
            setSkus(localStorage.getItem('cart').products.length);
            setInvisible(false);
        }
        return () => {
            setSkus(0);
            setInvisible(true);
        }
    }, [cart, localStorage.getItem('cart')]);

    const classes = useStyles();

    return (
        <React.Fragment>
            <Container className={classes.container}>
                <Link to='/cart' className={classes.link}>
                    <Hidden smDown>
                        <Badge
                            badgeContent={parseInt(skus)}
                            color="secondary"
                            overlap="circle"
                            invisible={invisible}
                            //anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
                            className={classes.badge}
                        >
                            <p className={classes.padding}>Shopping Bag</p>
                        </Badge>
                    </Hidden>
                    <Hidden mdUp>
                        <Badge
                            badgeContent={parseInt(skus)}
                            color="secondary"
                            overlap="circle"
                            invisible={invisible}
                            className={classes.badge}
                        >
                            <LocalMallOutlinedIcon/>
                        </Badge>
                    </Hidden>
                </Link>
            </Container>
        </React.Fragment>
    );
}