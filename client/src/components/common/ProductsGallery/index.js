import React from "react";
import {useSelector} from "react-redux";

import {Container, useMediaQuery, Box} from "@material-ui/core";
import { useTheme } from '@material-ui/core/styles';
import useStyles from "./useStyles";

import ProductCard from "./ProductCard";
import EmptyProductCard from "./EmptyProductCard";
import FiltersMenu from "./FiltersMenu";
import SortMenu from "./SortMenu";
import {getSetOfProductsColors, getSetOfProductSizes, getCategoryTitle, getImgsUrl, createHomePage} from "./Helpers";

export default props => {
    const {products, queryString, homePage, productPage} = props;
    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));

    let counter = 1;
    let rowElementsCount = 4;
    if (matches) rowElementsCount = 2;

    const productsGallery = useSelector(state => state.productsGallery.productsGalleryForShow);
    let title = 'Popular Goods in this category';
    if (!productPage) title = productsGallery.title;

    let productCards = [];

    if (products) {
        productCards = products.map((product) =>{
        const imgUrls = getImgsUrl(queryString, product);
        const img1 = imgUrls[0];
        const img2 = imgUrls[1];
        let borderRight =true;
        if (counter % rowElementsCount === 0) borderRight = false;
        counter++;
        let sizes = getSetOfProductSizes(product);
        const category = product.categories[0].category.name;
        return <ProductCard
            itemNo = {product.itemNo}
            name={product.name}
            price={product.price}
            sizes={sizes}
            srcImg1={img1}
            srcImg2={img2}
            key={product._id}
            //href = {`products/${product.itemNo.toLowerCase()}`}
            //href = {`products/category=${category}&itemNo=${product.itemNo}`}
            borderRight={borderRight}
            />;
        });
    };

    const lastRowElementsCount = productCards.length % rowElementsCount;

    if (lastRowElementsCount !== 0) {
        const emptyProductCardCount = rowElementsCount - 1 - lastRowElementsCount;
        for (let i = 0; i < emptyProductCardCount; i++) {
            productCards.push(<EmptyProductCard  key={Date.now()+ Math.random()}/>);
        }
    };

    if (homePage) {
        createHomePage(productCards, matches, productsGallery);
    };

    return (
        <>
            <Box className={classes.title} fontSize='h4.fontSize'>
                {homePage || productPage ? title : getCategoryTitle(queryString)}
            </Box>
            {!homePage && !productPage ? !matches ?
                <FiltersMenu colors={getSetOfProductsColors(products, queryString)} queryString = {queryString}/> : '' : ''
            }
            {!homePage && !productPage ?
                <SortMenu mobile={matches} colors={getSetOfProductsColors(products, queryString)} queryString = {queryString}/> : ''
            }
            <Container maxWidth={false} className={classes.mainContainer}>
                {productCards}
            </Container>
        </>
    );
};
