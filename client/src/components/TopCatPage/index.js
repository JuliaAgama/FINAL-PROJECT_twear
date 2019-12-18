import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCategoriesByParentId } from "../../store/actions/categories";
import CategoryCard from "./CategoryCard";
import CategoriesHome from "../CatergoriesHome";
import {Grid} from "@material-ui/core";
import useStyles from "./useStyles";
import "./CategoryCard/categoryCard.css"


const TopCatPage = () => {
  const classes = useStyles();
  const topCatLink = useParams().name;
  const topCatLinkNoGender = topCatLink.slice(0, topCatLink.indexOf("&"));
  const dispatch = useDispatch();
  const categoriesItem = useSelector(state => state.categories.categories);

  console.log(topCatLink);

  const catMenuItem = categoriesItem.map(item => {
    if (
      item.topCategory.name === topCatLinkNoGender &&
      (item.gender.name === "women" || item.gender.name === "unisex") &&
      topCatLink.includes("&women")
    ) {
      return <CategoryCard name={item.name} key={item._id} image={item.img} />;
    }
    if (
      item.topCategory.name === topCatLinkNoGender &&
      (item.gender.name === "men" || item.gender.name === "unisex") &&
      topCatLink.includes("&men")
    ) {
      return <CategoryCard name={item.name} key={item._id} image={item.img} />;
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

export default TopCatPage;
