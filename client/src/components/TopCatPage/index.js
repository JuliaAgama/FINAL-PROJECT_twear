import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCategoriesByParentId } from "../../store/actions/categories";
import CategoriesMenuItem from "./CategoryCard";
import CategoriesMain from "../CatergoriesMain";
import {Grid} from "@material-ui/core";
import useStyles from "./useStyles";
import "./CategoryCard/categoryCard.css"


const TopCategoryMenu = () => {
  const classes = useStyles();
  const topCatLink = useParams().id;
  const topCatLinkNoGender = topCatLink.slice(0, topCatLink.indexOf("&"));
  const dispatch = useDispatch();
  const categoriesItem = useSelector(state => state.categories.categories);

  const catMenuItem = categoriesItem.map(item => {
    if (
      item.topCategory._id === topCatLinkNoGender &&
      (item.gender.name === "women" || item.gender.name === "unisex") &&
      topCatLink.includes("&women")
    ) {
      return <CategoriesMenuItem name={item.name} key={item._id} />;
    }
    if (
      item.topCategory._id === topCatLinkNoGender &&
      (item.gender.name === "men" || item.gender.name === "unisex") &&
      topCatLink.includes("&men")
    ) {
      return <CategoriesMenuItem name={item.name} key={item._id} image={item.img} />;
    }
  });

  useEffect(() => {
    dispatch(getCategoriesByParentId(topCatLinkNoGender));
  }, [dispatch]);

  return (
    <Grid container className={classes.Media}>
      {catMenuItem}
    </Grid>
  );
};

export default TopCategoryMenu;
