import React from "react";
import { useTheme } from '@material-ui/core/styles';
import {Container} from "@material-ui/core";
import ProductCard from "./ProductCard";
import EmptyProductCard from "./EmptyProductCard";
import CategoryTitle from "./CategoryTitle";
import CategoryLink from "./CategoryLink";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import useStyles from "./useStyles";
import FiltersMenu from "./FiltersMenu";

function getSetOfProductsColors(products) {
    let colorSet = new Set();
    products.forEach(card => {
        card.colors.forEach(item => {
            if (item.color) {
                colorSet.add(item.color.name);
            }
        })
    });
    return colorSet;
}

function getSetOfProductSizes(product) {
    let sizesSet = new Set();
    product.colors.forEach(item => {
        if (item.sizes) {
            item.sizes.forEach(size => {
                sizesSet.add(size.size.name + " ");
            });
        }
    })
    return sizesSet;
};

function getCategoryTitle(categoryName) {
    let title = "Selected New Arrivals";
    if (categoryName) {
        const arr = categoryName.split('-');
        if (arr[0] === 'men') {
            title = `Men's ${arr[1]}`
        } else if (arr[0] === 'women') {
            title = `Women's ${arr[1]}`
        } else if (arr[0] === 'unisex') {
            title = arr[1];
        }
    }
    return title;
}



export default function ProductGallery(props) {
    const {products, categoryName} = props;
    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));
    let counter = 1;
    let rowElementsCount = 4;
    if (matches) rowElementsCount = 2;

    const productCards = products.map((product) =>{
        let borderRight =true;
        if (counter % rowElementsCount === 0) borderRight = false;
        counter++;
        let sizes = getSetOfProductSizes(product);
        return <ProductCard name={product.name}
                     price={product.price}
                     sizes={sizes}
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

    if (products.length === 4) {
        if (!matches) {
            productCards.push(<CategoryLink key={Date.now()+ Math.random()}
                                            categoryLink={`/categories/${categoryName}`}
                                            categoryName={getCategoryTitle(categoryName)}
                                            borderRight={true} />);
            productCards.push(<CategoryLink key={Date.now()+ Math.random()}
                                            categoryLink={`/categories/${categoryName}`}
                                            categoryName={getCategoryTitle(categoryName)}
                                            borderRight={false} />);
        } else {
            productCards.splice(2,0,<CategoryLink key={Date.now()+ Math.random()}
                                                  categoryLink={`/categories/${categoryName}`}
                                                  categoryName={getCategoryTitle(categoryName)}
                                                  borderRight={false}
                                                  borderBottom={true}  />);
            productCards.push(<CategoryLink key={Date.now()+ Math.random()}
                                            categoryLink={`/categories/${categoryName}`}
                                            categoryName={getCategoryTitle(categoryName)}
                                            borderRight={false} />);
        }
    }

    return (
        <>
            <CategoryTitle title={getCategoryTitle(categoryName)}/>
            <FiltersMenu colors={getSetOfProductsColors(products)}/>
            <Container maxWidth={false} className={classes.mainContainer}>
                {productCards}
            </Container>
        </>
    );
}