import React from "react";
import { Grid, Hidden } from "@material-ui/core";

// import useStyles from "./useStyles";
import "./categoryCard.css";

function CategoryCard(props) {
  const { name, image } = props;
  // const classes = useStyles();

  return (
    <>
      <Hidden smDown>
        <Grid
          className="category-item-home2"
          item
          xs={3}
          style={{ backgroundImage: `url(${image})` }}
        >
          <p className="top-cat-name">{name}</p>
        </Grid>
      </Hidden>
      <Hidden smUp>
        <Grid
          className="category-item-home"
          item
          xs={12}
          style={{ backgroundImage: `url(${image})`, height: "50vh" }}
        >
          <p className="top-cat-name">{name}</p>
        </Grid>
      </Hidden>
    </>
  );
}

export default CategoryCard;
