import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import { Container, Typography, Box, Grid, Hidden } from '@material-ui/core';

import useStyles from './useStyles';

export default () => {

    const dispatch = useDispatch();

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography component="div">
                <Hidden smDown>
                    <Typography className={classes.header} variant="h4" component="h4">shopping bag</Typography>
                </Hidden>
                <Hidden mdUp>
                    <Typography className={classes.headerXS} variant="h4" component="h4">shopping bag</Typography>
                </Hidden>
            </Typography>
            <Grid container spacing={2} justify="flex-end">
                <Hidden smDown>
                    <Grid item md={5} lg={4}>
                        <Typography component="div" className={classes.btnRegular}>
                            <Box fontSize="body2.fontSize">Continue shopping</Box>
                        </Typography>
                    </Grid>
                </Hidden>
                <Grid item xs={12} md={7} lg={5}>
                    <Typography component="div" className={classes.btnImportant}>
                        <Box fontSize="body2.fontSize">Checkout</Box>
                    </Typography>
                </Grid>

            </Grid>

        </div>
    )
};
