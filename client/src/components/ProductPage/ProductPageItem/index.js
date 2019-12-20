import React from "react";
import { Link, Grid, Hidden } from "@material-ui/core";
// import { ThemeProvider } from "@material-ui/core/styles";
// import theme from "../../../theme";
import useStyles from "./useStyles";

function CategoryCard(props) {
  const { name, image } = props;
  const classes = useStyles();

  return (
    <>
      <Hidden smDown>
      <div>
        {name}
      </div>
      </Hidden>
    </>
  );
}

export default CategoryCard;
