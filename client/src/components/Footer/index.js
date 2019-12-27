import React from "react";

import { Grid } from "@material-ui/core";
import useStyles from "./useStyles";

import Company from "./Company";
import Shopping from "./Shopping";
import Signup from "./Signup";
import Social from "./Social";

export default () => {

    const classes = useStyles();

    return (
        <Grid container className={classes.container}>
            <Grid item xs={12} md={6} className={classes.paper}><Signup/></Grid>
            <Grid item xs={6} md={3} className={classes.paper}><Shopping/></Grid>
            <Grid item xs={6} md={3} className={classes.paper}><Company/></Grid>
            <Grid item xs={12} className={classes.paperSocial}><Social/></Grid>
        </Grid>
    );
};
