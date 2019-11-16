import React from 'react';

import {Link} from "react-router-dom";

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import useStyles from './useStyles';


export default () => {
    const classes = useStyles();
    const manageList = [
        {name: 'products', url: 'products'},
        {name: 'categories', url: 'categories'},
        {name: 'options sets (colors, sizes)', url: 'options'},
        {name: 'shop info, settings & other', url: 'settings'}
    ];

    return(
        <div className={classes.root}>
            <Grid container className={classes.listing}>
                {manageList.map((el,ind) => (
                    <Grid item key={ind} xs={12}>
                        <Link to={`/admin/${el.url}`}>
                            <Paper className={classes.paper}>Manage {el.name}</Paper>
                        </Link>
                    </Grid>
                ))}
            </Grid>

            <p>Go to <a href="/">shop</a>.</p>
        </div>
    )
};
