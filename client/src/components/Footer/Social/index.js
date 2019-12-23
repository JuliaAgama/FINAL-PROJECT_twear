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
              <Link
                href="#"
                color={"textPrimary"}
                style={{paddingRight: '25px'}}  
              >
                Instagram
              </Link>
              <Link
                href="#"
                color={"textPrimary"}
                style={{paddingRight: '5px'}}
              >
                Facebook
              </Link>
            </div>
            <Box fontFamily="Monospace" fontSize="h6.fontSize" m={1}>
              © 2019 TWEAR
            </Box>
            <div style={{ flex: "1" }}></div>
          </Grid>
        </Hidden>
        <Hidden mdUp>
          <Grid item className={classes.flexBetween}>
            <div>
              <Link
                href="#"
                color={"textPrimary"}
                style={{ paddingRight: "30px", fontSize: 14 }}
              >
                Instagram
              </Link>
              <Link
                href="#"
                color={"textPrimary"}
                style={{ paddingRight: "5 px", fontSize: 14 }}
              >
                Facebook
              </Link>
            </div>
            <div>
              <Box
                fontFamily="Monospace"
                fontSize="h6.fontSize"
                style={{ padding: "0 20px" }}
              >
                © 2019 TWEAR
              </Box>
            </div>
          </Grid>
        </Hidden>
    </div>
  );
};
