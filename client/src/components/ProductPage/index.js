import React, {useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import {getProductItemByItemNo, getProductsByFilter} from "../../store/actions/products";
import ProductPageItem from "./ProductPageItem";

const ProductPage = () => {
  const productLink = useParams().product;
  const dispatch = useDispatch();

  const category = productLink.split('&')[0].split('=')[1];
  const itemNo = productLink.split('&')[1].split('=')[1];

  useEffect(() => {
    dispatch(getProductItemByItemNo(itemNo));
    dispatch(getProductsByFilter(`page=shop&category=${category}`))
  }, [dispatch, itemNo, category]);

  return <ProductPageItem />


};

export default ProductPage;
