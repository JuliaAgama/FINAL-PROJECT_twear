import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';

import ProductsGallery from '../common/ProductsGallery';
import {useDispatch, useSelector} from "react-redux";
import {getProductsByParentId} from "../../store/actions/products";


export default () => {
    const categoryName = useParams().category;
    let id = categoryName.split("-");
    id = id[2];
    const dispatch = useDispatch();
    useEffect(() => {dispatch(getProductsByParentId(id))},[]);
    let products = useSelector(state => state.products.products);


    return <ProductsGallery  products={products} categoryName={categoryName}/>


};
