import React, {useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductItemByItemNo } from "../../store/actions/products";
import ProductPageItem from "./ProductPageItem";    

const ProductPage = () => {
  const productLink = useParams().product;
  const dispatch = useDispatch();
  const product = useSelector(state => state.products.product);

  useEffect(() => dispatch(getProductItemByItemNo(productLink)), [dispatch]);

  return <ProductPageItem />


};

export default ProductPage;
