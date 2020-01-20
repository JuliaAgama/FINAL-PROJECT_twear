import React, {useEffect} from "react";
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import ProductsGallery from "../common/ProductsGallery";
import { getProductsBySearch} from "../../store/actions/products";
import {getCategoriesBySearch} from "../../store/actions/categories";
import {Grid} from "@material-ui/core";
import CategoryCard from "../TopCatPage/CategoryCard";

import useStyles from "./useStyles";


export default () => {

    const dispatch = useDispatch();
    const searchQuery = useParams().searchQuery;
    const classes = useStyles();
    const products = useSelector(state => state.products.products);
    const categories = useSelector(state => state.categories.categoriesSearchResult);

    useEffect(() => {
        dispatch(getProductsBySearch(searchQuery));
        dispatch(getCategoriesBySearch(searchQuery));
        },[searchQuery, dispatch]);

    const catMenuItem = categories.map(item => <CategoryCard name={item.name} key={item._id} image={item.img} gender={item.gender.name} />)

    return (
        <>
            {products ? <ProductsGallery products={products} searchPage={true}/> : ''}
            {categories ?
                <Grid container className={classes.Media}>
                    {catMenuItem}
                </Grid>
                : ''
            }
        </>
    )

}