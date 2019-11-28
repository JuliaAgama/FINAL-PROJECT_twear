import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import clsx from 'clsx';

import { Grid, Link, ListItem, Divider } from '@material-ui/core';

import useStyles from './useStyles';

import ImgIcon from '../../../../common/images/ImgIcon';


export default props => {

    const dispatch = useDispatch();

    const {item} = props;

    const classes = useStyles();

    return (
        <>
        <Divider />
        <ListItem>
            <Link href={"/admin/products/"+item.name} className={classes.link}>
                <Grid container className={classes.paper}>
                    <Grid item xs={6}>
                        <Grid container className={classes.paper}>
                            <Grid item xs={4} >
                                <ImgIcon src={item.imgs[0]}/>
                            </Grid>
                            <Grid item xs={7}> {item.name} </Grid>
                            <Grid item xs={1}>
                            </Grid>
                            <Grid item xs={1}></Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={1}>
                    </Grid>
                    <Grid item xs={1}>
                    </Grid>
                </Grid>
            </Link>
        </ListItem>
        </>
    )
};
