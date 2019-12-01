import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';

import { Grid, Paper } from '@material-ui/core';

import useStyles from './useStyles';
import {getCustomerAction} from "../../../store/actions/customer";
import {useDispatch} from "react-redux";


export default props => {

    const {items} = props;

    const classes = useStyles();
    const dispatch = useDispatch();
    useEffect(() => {dispatch(getCustomerAction())},[]);

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
