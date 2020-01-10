import React, {useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import * as productsActions from '../../store/actions/products';

import ProductPageItem from "./ProductPageItem";

export default () => {
    const itemNo = useParams().product;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(productsActions.getProductItemByItemNo(itemNo));
    }, [dispatch, itemNo]);

    const product = useSelector(state => state.productItem.productItem);

    useEffect(()=> {
        if (product && product.categories) {
            dispatch(productsActions.getProductsByParentId(product.categories[0].category._id))
        }
    },[dispatch, product])

    return <ProductPageItem />
};
