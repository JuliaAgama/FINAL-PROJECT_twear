import React from 'react';
import { Link } from 'react-router-dom';

import { Grid, Paper } from '@material-ui/core';

import useStyles from './useStyles';


export default props => {

    const {items} = props;

    const classes = useStyles();

    return(
        <div className={classes.root}>
            <Grid container className={classes.listing}>
                {items.map((el,ind) => (
                    <Grid item key={ind} xs={12}>
                        <Link to={`/admin/${el.url}`} className={classes.link}>
                            <Paper className={classes.paper}>Manage {el.name}</Paper>
                        </Link>
                    </Grid>
                ))}
            </Grid>

            <p>Go to <a href="/">shop</a>.</p>
        </div>
    )
};
