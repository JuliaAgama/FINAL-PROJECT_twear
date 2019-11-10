import useStyles from "./useStyles";
import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

export default function HeaderBottomBlockDesktop() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Grid item xs={3}>
                <Box className={classes.box}>Currency</Box>
            </Grid>
            <Grid item xs={3}>
                <Box className={`${classes.box} ${classes.women}`}>Women</Box>
            </Grid>
            <Grid item xs={3}>
                <Box className={`${classes.box} ${classes.men}`}>Men</Box>
            </Grid>
            <Grid item xs={3}>
                <Box className={classes.box}>Login</Box>
            </Grid>
        </React.Fragment>
    );
}