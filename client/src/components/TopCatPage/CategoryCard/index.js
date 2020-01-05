import React from "react";
import { Grid, Hidden } from "@material-ui/core";
import {useHistory} from "react-router-dom";

// import useStyles from "./useStyles";
import "./categoryCard.css";

function CategoryCard(props) {
  const { name, image, gender } = props;
  const history = useHistory();
  // const classes = useStyles();

    const clickHandler = () => {
        console.log(name + " " + gender)
    }

  return (
    <>
      <Hidden smDown>
            <Grid
              className="category-item-home2"
              item
              xs={3}
              style={{ backgroundImage: `url(${image})` }}
              onClick={() => history.push(`/categories/page=shop&gender=${gender}&category=${name}`)}
            >
              <p className="top-cat-name" >{name}</p>
            </Grid>
      </Hidden>
      <Hidden mdUp>
            <Grid
              className="category-item-home"
              item
              xs={12}
              style={{ backgroundImage: `url(${image})`, height: "50vh" }}
              onClick={() => history.push(`/categories/page=shop&gender=${gender}&category=${name}`)}
            >
              <p className="top-cat-name-xs" >{name}</p>
            </Grid>
      </Hidden>
    </>
  );
}

export default CategoryCard;

// categories/page=shop&gender=unisex&category=Jeans
// return history.push("/admin/products/"+formData.itemNo);
// to={`/categories/page=shop&gender=${gender}&category=${name}`}
