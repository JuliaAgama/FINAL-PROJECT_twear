import React, {useEffect} from "react";
import {Container} from "@material-ui/core";
import ProductCard from "../ProductCard";
import useStyles from "./useStyles";
import {useDispatch, useSelector} from "react-redux";
import {getAllProducts} from "../../../store/actions/products";
import EmptyProductCard from "../EmptyProductCard";



export default function ProductGallery() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const products = useSelector(state => state.products.products);

    useEffect(() => {dispatch(getAllProducts())},[]);
    let counter = 1;
    const rowElementsCount = 4;
    const productCards = products.map((product) =>{
        let borderRight =true;
        if (counter % rowElementsCount === 0) borderRight = false;
        counter++;
        return <ProductCard name={product.name}
                     price={product.price}
                     itemNo={product.itemNo}
                     srcImg1={product.imgs[0]}
                     srcImg2={product.imgs[1]}
                     key={product._id}
                     borderRight={borderRight}/>;
    });
    const lastRowElementsCount = productCards.length % rowElementsCount;
    if (lastRowElementsCount !== 0) {
        const emptyProductCardCount = rowElementsCount - 1 - lastRowElementsCount;
        for (let i = 0; i < emptyProductCardCount; i++) {
            productCards.push(<EmptyProductCard  key={Date.now()+ Math.random()}/>);
        }
    }
    // console.log(products);

    return (
        <Container maxWidth={false} className={classes.mainContainer}>
            {productCards}
        </Container>
    );
}