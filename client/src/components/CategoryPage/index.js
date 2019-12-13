import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';

import ProductsGallery from '../common/ProductsGallery';
import {useDispatch, useSelector} from "react-redux";
import {getAllProducts} from "../../store/actions/products";


export default () => {
    const dispatch = useDispatch();
    useEffect(() => {dispatch(getAllProducts())},[dispatch]);
    let products = useSelector(state => state.products.products);
    
    const categoryName = useParams().category;

    return <ProductsGallery  products={products} categoryName={categoryName}/>


};
