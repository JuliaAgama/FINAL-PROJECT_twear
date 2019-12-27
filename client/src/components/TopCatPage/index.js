import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getCategoriesByParentId } from "../../store/actions/categories";

import {Grid, Typography} from "@material-ui/core";

import useStyles from "./useStyles";
import "./CategoryCard/categoryCard.css"

import CategoryCard from "./CategoryCard";


export default () => {
    const topCatLink = useParams().name;
    const topCatLinkNoGender = topCatLink.slice(0, topCatLink.indexOf("&"));
    const title = topCatLink.split("&").join(' ');

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategoriesByParentId(topCatLinkNoGender));
    }, [dispatch]);

    const categoriesItem = useSelector(state => state.categories.categories);

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
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography component="div">
                <Typography className={classes.header} variant="h4" component="h4">{title}</Typography>
            </Typography>
        <Grid container className={classes.Media}>
        {catMenuItem}
        </Grid>
        </div>
    );
};
