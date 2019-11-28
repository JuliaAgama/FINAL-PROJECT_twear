import React from 'react';

import { Grid, Link, Paper } from '@material-ui/core';

import useStyles from './useStyles';


export default () => {
    const classes = useStyles();
    const manageList = [
        {name: 'products', url: 'products'},
        {name: 'categories', url: 'categories'},
        {name: 'colors & sizes', url: 'options'},
        {name: 'info & settings', url: 'settings'}
    ];

    return(
        <div className={classes.root}>
            <Grid container className={classes.listing}>
                {manageList.map((el,ind) => (
                    <Grid item key={ind} xs={12}>
                        <Link href={`/admin/${el.url}`} className={classes.link}>
                            <Paper className={classes.paper}>Manage {el.name}</Paper>
                        </Link>
                    </Grid>
                ))}
            </Grid>

            <p>Go to <a href="/">shop</a>.</p>
        </div>
    )
};
