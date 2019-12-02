import React, {useEffect} from "react";
import {Container} from "@material-ui/core";
import ProductCard from "../ProductCard";
import useStyles from "./useStyles";
import {useDispatch, useSelector} from "react-redux";
import {getAllProducts} from "../../../store/actions/products";



export default function ProductGallery() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const products = useSelector(state => state.products.products);
    useEffect(() => {dispatch(getAllProducts())},[]);
    const productCards = products.map(product => <ProductCard name={product.name}
                                                              price={product.price}
                                                              itemNo={product.itemNo}
                                                              srcImg1={product.imgs[0]}
                                                              srcImg2={product.imgs[1]}/>);
    console.log(products);

    return (
        <Container maxWidth={false} className={classes.mainContainer}>
            {productCards}
        </Container>
    );
}