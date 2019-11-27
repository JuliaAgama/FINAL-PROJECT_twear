import React from "react";
import useStyles from "./useStyles";
import { Link, Grid } from "@material-ui/core";
import Hidden from "@material-ui/core/Hidden";

export default function Shopping() {
  const classes = useStyles();

  return (
    <>
      <Hidden smDown>
        <div className={classes.borderBotTop}>
            <h4 className={classes.pl10}>Shopping</h4>
            <div>
              <Grid container>
                <Grid
                  item
                  xs={6}
                  className={classes.pl10}
                  style={{ fontSize: "12px" }}
                >
                  <p>
                    <Link href="#">
                      Gift Card
                    </Link>
                  </p>
                  <p>
                    <Link href="#">
                      Terms
                    </Link>
                  </p>
                  <p>
                    <Link href="#">
                      Privacy Policy
                    </Link>
                  </p>
                  <p>
                    <Link href="#">
                      Cookie Policy
                    </Link>
                  </p>
                </Grid>
                <Grid item xs={6} style={{ fontSize: "12px" }}>
                  <p>
                    <Link href="#">
                      Delivery
                    </Link>
                  </p>
                  <p>
                    <Link href="#">
                      Payment
                    </Link>
                  </p>
                  <p>
                    <Link href="#">
                      Returns
                    </Link>
                  </p>
                  <p>
                    <Link href="#">
                      Account
                    </Link>
                  </p>
                </Grid>
              </Grid>
            </div>
        </div>
      </Hidden>
      <Hidden mdUp>
        <Grid container className={classes.flexToBot14px}>
          <h4 className={classes.subHeader}>Shopping</h4>
          <p>
            <Link href="#">
              Gift Card
            </Link>
          </p>
          <p>
            <Link href="#">
              Terms
            </Link>
          </p>
          <p>
            <Link href="#">
              Privacy Policy
            </Link>
          </p>
          <p>
            <Link href="#">
              Cookie Policy
            </Link>
          </p>
          <p>
            <Link href="#">
              Delivery
            </Link>
          </p>
          <p>
            <Link href="#">
              Payment
            </Link>
          </p>
          <p>
            <Link href="#">
              Returns
            </Link>
          </p>
          <p>
            <Link href="#">
              Account
            </Link>
          </p>
        </Grid>
      </Hidden>
    </>
  );
}
