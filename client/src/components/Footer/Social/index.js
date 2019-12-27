import React from "react";
import useStyles from "./useStyles";
import { Link, Grid, Box } from "@material-ui/core";
import Hidden from "@material-ui/core/Hidden";

export default () => {
    const classes = useStyles();

    return (
        <div>
            <Hidden smDown>
                <Grid container className={classes.flexBetween}>
                    <div style={{ display: "flex", flex: "1" }}>
                        <Link href="/" className={classes.link} >Instagram</Link>
                        <Link href="/" className={classes.link} >Facebook</Link>
                    </div>
                        <Box fontFamily="Monospace" fontSize="h6.fontSize" m={1}>© 2019 TWEAR</Box>
                    <div style={{ flex: "1" }}></div>
                </Grid>
            </Hidden>
            <Hidden mdUp>
                <Grid item className={classes.flexBetween}>
                    <div>
                        <Link href="/" className={classes.linkXS} >Instagram</Link>
                        <Link href="/" className={classes.linkXS} >Facebook</Link>
                    </div>
                    <div>
                        <Box fontFamily="Monospace" fontSize="h6.fontSize" pr={2}>© 2019 TWEAR</Box>
                    </div>
                </Grid>
            </Hidden>
        </div>
    );
};
