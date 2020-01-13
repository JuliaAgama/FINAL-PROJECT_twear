import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';

import ProductsGallery from '../common/ProductsGallery';
import {useDispatch, useSelector} from "react-redux";
import { getProductsByFilter} from "../../store/actions/products";
import {headerCloseAction} from "../../store/actions/header";


export default () => {
    const queryString = useParams().category;
    const dispatch = useDispatch();
    dispatch(headerCloseAction());
    let products = useSelector(state => state.products.productsFiltered.products);
    useEffect(() => {dispatch(getProductsByFilter(queryString))},[queryString, dispatch]);

    return (
            products ? <ProductsGallery  products={products} queryString={queryString}/> : ""
    )
};
