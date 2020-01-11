import React, {useState} from "react";
import {useSelector} from "react-redux";

import {Container, useMediaQuery, Box} from "@material-ui/core";
import { useTheme } from '@material-ui/core/styles';
import useStyles from "./useStyles";

import ProductCard from "./ProductCard";
import EmptyProductCard from "./EmptyProductCard";
import FiltersMenu from "./FiltersMenu";
import SortMenu from "./SortMenu";
import {getSetOfProductsColors, getSetOfProductSizes, getCategoryTitle, getImgsUrl, createHomePage, filterProducts} from "./Helpers";

export default props => {
    const {products, queryString, homePage, productPage} = props;
    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));

    const [chosenColor, setChosenColor] = useState('none');

    let counter = 1;
    let rowElementsCount = 4;
    if (matches) rowElementsCount = 2;

    const productsGallery = useSelector(state => state.productsGallery.productsGalleryForShow);
    let title = 'Popular Goods in this category';
    if (!productPage) title = productsGallery.title;

    let productCards = [];
    let productsArr = [];

    if (products) {
        if (!chosenColor || chosenColor === 'none' || chosenColor === 'undefined') {
            productsArr = products;
        } else {
            productsArr = filterProducts(products, chosenColor);
        }
        productCards = productsArr.map((product) =>{
            const imgUrls = getImgsUrl(chosenColor, product);
            const img1 = imgUrls[0];
            const img2 = imgUrls[1];
            let borderRight =true;
            if (counter % rowElementsCount === 0) borderRight = false;
            counter++;
            let sizes = getSetOfProductSizes(product);

            return <ProductCard
                itemNo = {product.itemNo}
                name={product.name}
                price={product.price}
                sizes={sizes}
                srcImg1={img1}
                srcImg2={img2}
                key={product._id}
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

    const colorsArrForTab = getSetOfProductsColors(products, queryString);
    const mainTitle = getCategoryTitle(queryString);

    return (
        <>
            <Box className={classes.title} fontSize='h4.fontSize'>
                {homePage || productPage ? title : mainTitle}
            </Box>
            {!homePage && !productPage ? !matches ?
                <FiltersMenu setChosenColor={setChosenColor} colors={colorsArrForTab}/> : '' : ''
            }
            {!homePage && !productPage ?
                <SortMenu mobile={matches} colors={colorsArrForTab} queryString = {queryString} setChosenColor={setChosenColor} /> : ''
            }
            <Container maxWidth={false} className={classes.mainContainer}>
                {productCards}
            </Container>
        </>
    );
};
