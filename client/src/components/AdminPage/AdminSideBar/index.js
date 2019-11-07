import React, {useState} from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import {Link} from "react-router-dom";


const useStyles = makeStyles((theme) => (
    {
        root: {
            padding: '1rem',
            flexGrow: 1,
        },
        paper: {
            marginTop: '1rem',
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
            textTransform: 'capitalize'
        },
    }
));

export default () => {
    const classes = useStyles();
    const manageList = [
        {title: 'products', url: 'products'},
        {title: 'categories', url: 'categories'},
        {title: 'options sets (colors, sizes)', url: 'options'}]

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
