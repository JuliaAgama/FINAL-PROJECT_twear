import React from "react";

import {Link} from "react-router-dom";

import {Container, Typography, Badge, Hidden} from "@material-ui/core";
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';

import useStyles from "./useStyles";


export default function MiniCart() {

    const classes = useStyles();

    return (
        <React.Fragment>
            <Container className={classes.container}>
                <Link to='/cart' className={classes.link}>
                    <Hidden smDown>
                        <Badge
                            badgeContent={4}
                            color="secondary"
                            overlap="circle"
                            //anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
                            className={classes.badge}
                        >
                            <p className={classes.padding}>Shopping Bag</p>
                        </Badge>
                    </Hidden>
                    <Hidden mdUp>
                        <Badge
                            badgeContent={4}
                            color="secondary"
                            overlap="circle"
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