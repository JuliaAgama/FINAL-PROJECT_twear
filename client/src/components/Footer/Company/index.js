import React from "react";

import { Box, Grid, Hidden } from "@material-ui/core";
import useStyles from "./useStyles";


export default () => {
    const classes = useStyles();

    return (
        <>
            <Hidden smDown>
            <Box fontSize="body2.fontSize" mb={2}>Company</Box>
                <Grid container className={classes.container} direction="column" justify="flex-start" spacing={1}>
                    <Grid item className={classes.paper}>
                        <a href="/" className={classes.link}>Contact</a>
                    </Grid>
                    <Grid item className={classes.paper}>
                        <a href="/" className={classes.link}>Sustainability</a>
                    </Grid>
                    <Grid item className={classes.paper}>
                        <a href="/" className={classes.link}>About</a>
                    </Grid>
                    <Grid item className={classes.paper}>
                        <a href="/" className={classes.link}>Careers</a>
                    </Grid>
                    <Grid item className={classes.paper}>
                        <a href="/" className={classes.link}>Stores</a>
                    </Grid>
                    <Grid item className={classes.paper}>
                        <a href="/" className={classes.link}>Press</a>
                    </Grid>
                    <Grid item className={classes.paper}>
                        <a href="/" className={classes.link}>B2B</a>
                    </Grid>
                </Grid>
            </Hidden>
            <Hidden mdUp>
                <Box fontSize="body2.fontSize" textAlign='center' mb={2}>Company</Box>
                <Box textAlign='center'>
                    <a href="/" className={classes.link}>Contact</a>
                    <a href="/" className={classes.link}>Sustainability</a>
                    <a href="/" className={classes.link}>About</a>
                    <a href="/" className={classes.link}>Careers</a>
                    <a href="/" className={classes.link}>Stores</a>
                    <a href="/" className={classes.link}>Press</a>
                    <a href="/" className={classes.link}>B2B</a>
                </Box>
            </Hidden>
        </>
    );
};
