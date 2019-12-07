import React from "react";
import useStyles from "./useStyles";
import { Link, Grid, Hidden } from "@material-ui/core";

const CategoriesMain = () => {
  const classes = useStyles();

  return (
    <>
      <p className = {classes.categoriesMainHeader}>
        Pre Spring 20
      </p>
      <p className={classes.categoriesMainSUbheader}>
        Get ready for the festive season with our Pre Party collection —
        including a lot of new jeans.
      </p>
      <Hidden smDown>
        <Grid container  className={classes.Media}>
          <Grid item xs={3} id="item1" className="category-item-home">
            <Link className="hidden-link" href="#">
              MEN
            </Link>
            <Link className="hidden-link" href="#">
              WOMEN
            </Link>
          </Grid>
          <Grid item xs={3} id="item2" className="category-item-home">
            <Link className="hidden-link" href="#">
              MEN
            </Link>
            <Link className="hidden-link" href="#">
              WOMEN
            </Link>
          </Grid>
          <Grid item xs={3} id="item3" className="category-item-home">
            <Link className="hidden-link" href="#">
              MEN
            </Link>
            <Link className="hidden-link" href="#">
              WOMEN
            </Link>
          </Grid>
          <Grid item xs={3} id="item4" className="category-item-home">
            <Link className="hidden-link" href="#">
              MEN
            </Link>
            <Link className="hidden-link" href="#">
              WOMEN
            </Link>
          </Grid>
        </Grid>
      </Hidden>
      <Hidden mdUp>
        <Grid container className={classes.Media}>
          <Grid item xs={12} id="item1" className="category-item-home">
            <Link className="hidden-link" href="#">
              MEN
            </Link>
            <Link className="hidden-link" href="#">
              WOMEN
            </Link>
          </Grid>
          <Grid item xs={12} id="item2" className="category-item-home">
            <Link className="hidden-link" href="#">
              MEN
            </Link>
            <Link className="hidden-link" href="#">
              WOMEN
            </Link>
          </Grid>
        </Grid>
      </Hidden>
    </>
  );
};

export default CategoriesMain;
