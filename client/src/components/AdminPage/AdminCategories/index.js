import React from 'react';

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import ManageTopCategories from './ManageTopCategories';


const useStyles = makeStyles((theme) => {

    return ({
        root: {
            height: '100vh',
        },
        header: {
            paddingTop: '1rem',
            textAlign: 'center',
            color: theme.palette.secondary.main,
        },
        paper: {
            margin: theme.spacing(3,1),
        },
    });
});


export default props => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.header}>
                <h3>CATEGORIES</h3>
            </div>
            <Grid container className={classes.paper}>
                <ManageTopCategories/>
            </Grid>
        </div>
    )
};
