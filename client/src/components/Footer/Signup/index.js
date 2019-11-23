import React from "react";
import useStyles from "./useStyles";
import { Typography, Grid, Input, Button } from "@material-ui/core";
import Hidden from "@material-ui/core/Hidden";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

export default function Signup() {
  const classes = useStyles();

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#212121"
      }
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <>
        <Hidden smDown>
          <div
            className={classes.signupSize}
          >
            <Typography>  
              <h4 className={classes.pl10}>Sign up to newsletter</h4>
              <Grid container className={classes.flexMid}>
                <Input
                  type="email"
                  className={classes.pl10}
                  placeholder={"Enter your email"}
                  fullWidth={"true"}
                ></Input>
                <Button className={classes.border} style={{ margin: "20px" }}>
                  Women
                </Button>
                <Button className={classes.border} style={{ margin: "20px" }}>
                  Men
                </Button>
              </Grid>
            </Typography>
          </div>
        </Hidden>
        <Hidden mdUp>
          <div>
            <h4 style={{ textAlign: "center" }}>Sign up to newsletter</h4>
            <Grid item className={classes.flexMid}>
              <Input
                type="email"
                className={classes.borderNoBottom}
                placeholder={"Enter your email"}
                style={{ width: "80%", margin: 20, paddingLeft: 10 }}
              ></Input>
            </Grid>
            <Grid item className={classes.flexMid}>
              <Button className={classes.border} style={{ margin: "10px" }}>
                Women
              </Button>
              <Button className={classes.border} style={{ margin: "10px" }}>
                Men
              </Button>
            </Grid>
          </div>
        </Hidden>
      </>
    </ThemeProvider>
  );
}
