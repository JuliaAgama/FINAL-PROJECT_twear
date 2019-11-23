import React from "react";
import useStyles from "./useStyles";
import { Typography, Link, Grid } from "@material-ui/core";
import Hidden from "@material-ui/core/Hidden";

export default function Company() {
  const classes = useStyles();

  return (
    <>
      <Hidden smDown>
        <div className={classes.border}>
          <Typography>
            <h4 className={classes.pl10}>Company</h4>
            <div>
              <Grid container>
                <Grid
                  item
                  xs={6}
                  className={classes.pl10}
                  style={{ fontSize: "12px" }}
                >
                  <p>
                    <Link color={"textPrimary"} href="#">
                      Contact
                    </Link>
                  </p>
                  <p>
                    <Link color={"textPrimary"} href="#">
                      Sustainability
                    </Link>
                  </p>
                  <p>
                    <Link color={"textPrimary"} href="#">
                      About
                    </Link>
                  </p>
                  <p>
                    <Link color={"textPrimary"} href="#">
                      Careers
                    </Link>
                  </p>
                </Grid>
                <Grid item xs={6} style={{ fontSize: "12px" }}>
                  <p>
                    <Link color={"textPrimary"} href="#">
                      Stores
                    </Link>
                  </p>
                  <p>
                    <Link color={"textPrimary"} href="#">
                      Press
                    </Link>
                  </p>
                  <p>
                    <Link color={"textPrimary"} href="#">
                      B2B
                    </Link>
                  </p>
                </Grid>
              </Grid>
            </div>
          </Typography>
        </div>
      </Hidden>
      <Hidden mdUp>
        <Grid container className={classes.flexToBot14px}>
          <h4 className={classes.subHeader}>Company</h4>
          <p>
            <Link color={"textPrimary"} href="#">
              Contact{" "}
            </Link>
          </p>
          <p>
            <Link color={"textPrimary"} href="#">
              Sustainability
            </Link>
          </p>
          <p>
            <Link color={"textPrimary"} href="#">
              About{" "}
            </Link>
          </p>
          <p>
            <Link color={"textPrimary"} href="#">
              Careers{" "}
            </Link>
          </p>
          <p>
            <Link color={"textPrimary"} href="#">
              Stores
            </Link>
          </p>
          <p>
            <Link color={"textPrimary"} href="#">
              Press
            </Link>
          </p>
          <p>
            <Link color={"textPrimary"} href="#">
              B2B
            </Link>
          </p>
        </Grid>
      </Hidden>
    </>
  );
}
