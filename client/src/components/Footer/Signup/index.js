import React from "react";

import {Box, Grid, Input, Hidden } from "@material-ui/core";
import useStyles from "./useStyles";

export default () => {

    const classes = useStyles();

    return (
        <>
        <Hidden smDown>
            <Box fontSize="body2.fontSize" mb={2}>Sign up to newsletter</Box>
        </Hidden>
        <Hidden mdUp>
            <Box fontSize="body2.fontSize" textAlign="center" mb={2}>Sign up to newsletter</Box>
        </Hidden>
        <Grid container className={classes.container}>
            <Grid item xs={12} md={6} className={classes.paper}>
                <Input type="email" placeholder={"Your E-mail"} fullWidth={true} disableUnderline={true} className={classes.input}/>
            </Grid>
            <Grid item xs={6} md={3} className={classes.paperBtn}>
                <Box>Women</Box>
            </Grid>
            <Grid item item xs={6} md={3} className={classes.paperBtn}>
                <Box>Men</Box>
            </Grid>
        </Grid>
        </>
    );
};
