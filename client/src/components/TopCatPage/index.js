import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getAllCategories} from "../../store/actions/categories";

import {Grid, Typography} from "@material-ui/core";

import useStyles from "./useStyles";
import "./CategoryCard/categoryCard.css"

import CategoryCard from "./CategoryCard";


export default () => {
    const topCatLink = useParams().name;
    const topCatName = topCatLink.split('&')[0];
    const gender = topCatLink.split('&')[1];
    const title = topCatLink.split("&").join(' ');

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCategories());
    }, [dispatch]);

    const categoriesItem = useSelector(state => state.categories.categories);

    const catMenuItem = categoriesItem.map(item => {
        if (item.topCategory.name === topCatName && (item.gender.name === "women" || item.gender.name === "unisex") && gender === 'women') {
            return <CategoryCard name={item.name} key={item._id} image={item.img} gender={item.gender.name} />;
        }
        if (item.topCategory.name === topCatName && (item.gender.name === "men" || item.gender.name === "unisex") && gender === 'men') {
            return <CategoryCard name={item.name} key={item._id} image={item.img} gender={item.gender.name} />;
        }
        return '';
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
