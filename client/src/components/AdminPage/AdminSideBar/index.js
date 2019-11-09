import React from 'react';

import {Link} from "react-router-dom";

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import useStyles from './useStyles';


export default () => {
    const classes = useStyles();
    const manageList = [
        {title: 'products', url: 'products'},
        {title: 'categories', url: 'categories'},
        {title: 'options sets (colors, sizes)', url: 'options'},
        {title: 'shop info, settings & other', url: 'settings'}
    ];

    return(
        <>
        <Grid container className={classes.root}>
            {manageList.map((el,ind) => (
                <Grid item key={ind} xs={12}>
                    <Link to={`/admin/${el.url}`}>
                        <Paper className={classes.paper}>Manage {el.title}</Paper>
                    </Link>
                </Grid>
            ))}
        </Grid>
        </>
    )
};
