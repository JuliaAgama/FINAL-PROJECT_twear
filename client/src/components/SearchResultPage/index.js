import React, {useEffect} from "react";
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import ProductsGallery from "../common/ProductsGallery";
import { getProductsBySearch} from "../../store/actions/products";


export default () => {

    const dispatch = useDispatch();
    const searchQuery = useParams().searchQuery;
    let products = useSelector(state => state.products.products);
    useEffect(() => { dispatch(getProductsBySearch(searchQuery));},[searchQuery, dispatch]);

    return products ? <ProductsGallery products={products} searchPage={true}/> : ''
}