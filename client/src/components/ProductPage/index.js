import React, {useEffect } from "react";
import { useParams } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { getProductItemByItemNo } from "../../store/actions/products";

import ProductPageItem from "./ProductPageItem";

export default() => {
    const productLink = useParams().product;
    const dispatch = useDispatch();
    // const product = useSelector(state => state.productItem.productItem);

    useEffect(() => dispatch(getProductItemByItemNo(productLink)), [dispatch]);

    return <ProductPageItem />
};

