import React from "react";
import Company from "./Company";
import Shopping from "./Shopping";
import Signup from "./Signup";
import Social from "./Social";
import Hidden from "@material-ui/core/Hidden";
import useStyles from "./useStyles";
import { Grid } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import withWidth from "@material-ui/core/withWidth";
import theme from "../../theme"

const Footer = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <Hidden smDown>
          <Grid container >
            <Grid item xs={6} className={classes.border} >
              <Signup />
            </Grid>
            <Grid item xs={3}>
              <Shopping />
            </Grid>
            <Grid item xs={3}>
              <Company />
            </Grid>
            <Grid item xs={12}>
              <Social />
            </Grid>
          </Grid>
        </Hidden>
        <Hidden mdUp>
          <Grid container>
            <Grid item xs={12} className={classes.borderNoBottom}>
              <Signup />
            </Grid>
            <Grid item xs={6} className={classes.borderNoRight}>
              <Shopping />
            </Grid>
            <Grid item xs={6} className={classes.border}>
              <Company />
            </Grid>
            <Grid item xs={12}>
              <Social />
            </Grid>
          </Grid>
        </Hidden>
      </React.Fragment>
    </ThemeProvider>
  );
};

export default withWidth()(Footer);
