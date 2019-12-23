import React from "react";

import { Box, Grid, Hidden } from "@material-ui/core";
import useStyles from "./useStyles";


export default () => {
    const classes = useStyles();

    return (
        <>
            <Hidden smDown>
            <Box fontSize="body2.fontSize" mb={2}>Shopping</Box>
                <Grid container className={classes.container} direction="column" justify="flex-start" spacing={1}>
                    <Grid item className={classes.paper}>
                        <a href="/" className={classes.link}>Gift Card</a>
                    </Grid>
                    <Grid item className={classes.paper}>
                        <a href="/" className={classes.link}>Terms & Conditions</a>
                    </Grid>
                    <Grid item className={classes.paper}>
                        <a href="/" className={classes.link}>Privacy Policy</a>
                    </Grid>
                    <Grid item className={classes.paper}>
                        <a href="/" className={classes.link}>Cookie Policy</a>
                    </Grid>
                    <Grid item className={classes.paper}>
                        <a href="/" className={classes.link}>Delivery</a>
                    </Grid>
                    <Grid item className={classes.paper}>
                        <a href="/" className={classes.link}>Payment</a>
                    </Grid>
                    <Grid item className={classes.paper}>
                        <a href="/" className={classes.link}>Returns</a>
                    </Grid>
                    <Grid item className={classes.paper}>
                        <a href="/" className={classes.link}>Account</a>
                    </Grid>
                </Grid>
            </Hidden>
            <Hidden mdUp>
                <Box fontSize="body2.fontSize" textAlign='center' mb={2}>Shopping</Box>
                <Box textAlign='center'>
                    <a href="/" className={classes.link}>Gift Card</a>
                    <a href="/" className={classes.link}>Terms & Conditions</a>
                    <a href="/" className={classes.link}>Privacy Policy</a>
                    <a href="/" className={classes.link}>Cookie Policy</a>
                    <a href="/" className={classes.link}>Delivery</a>
                    <a href="/" className={classes.link}>Payment</a>
                    <a href="/" className={classes.link}>Returns</a>
                    <a href="/" className={classes.link}>Account</a>
                </Box>
            </Hidden>
        </>
    );
}
