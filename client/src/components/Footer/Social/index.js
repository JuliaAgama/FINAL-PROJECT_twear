import React from "react";
import useStyles from "./useStyles";
import { Typography, Link, Grid, Box } from "@material-ui/core";
import Hidden from "@material-ui/core/Hidden";

export default function Company() {
  const classes = useStyles();

  return (
    <div className={classes.borderNoTop}>
      <Typography>
        <Hidden smDown>
          <Grid container className={classes.flexBetween}>
            {/* <div style={{ display: "flex", flex: "1", justifyContent: "flex-start" }}> */}
            <div style={{ display: "flex", flex: "1" }}>
              <Link
                href="#"
                color={"textPrimary"}
                style={{padding:10}}  
                // style={{ position: "absolute", left: "40px", top: "218px" }}
              >
                Instagram
              </Link>
              <Link
                href="#"
                color={"textPrimary"}
                style={{padding:10}}
                // style={{ flex: "1" }}
                // style={{ position: "absolute", left: "140px", top: "218px" }}
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
                style={{ padding: "0 10px", fontSize: 14 }}
              >
                Instagram
              </Link>
              <Link
                href="#"
                color={"textPrimary"}
                style={{ padding: "0 5 px", fontSize: 14 }}
              >
                Facebook
              </Link>
            </div>
            <div>
              <Box
                fontFamily="Monospace"
                fontSize="h7.fontSize"
                style={{ padding: "5px 20px" }}
              >
                © 2019 TWEAR
              </Box>
            </div>
          </Grid>
        </Hidden>
      </Typography>
    </div>
  );
}
