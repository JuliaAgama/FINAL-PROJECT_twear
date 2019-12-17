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
import SortMenu from "./SortMenu";

function getImgByColor(product, color) {
    const colorObg  = product.colors.filter(item => item.color.name === color);
    if (colorObg.length > 0) return colorObg[0].imgsColor;
}

function getSetOfProductsColors(products, queryString) {
    let colorSet = new Set();
    const color = getChosenColor(queryString);
    if (color) {
        colorSet.add(color);
        return colorSet;
    }
    products.forEach(card => {
        card.colors.forEach(item => {
            if (item.color) {
                colorSet.add(item.color.name);
            }
        })
    });
    return colorSet;
}

function getChosenColor(queryString) {
    let color = null;
    if (queryString) {
        const queryStringItems = queryString.split('&');
        queryStringItems.forEach(item => {
            if (item.startsWith('color')){
                const tmpStr = item.substring(6);
                if (tmpStr !== 'undefined') color = tmpStr;
            }
        });
    }
    return color;
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

function getCategoryTitle(queryString) {
    let title = "Selected New Arrivals";
    let gender = '';
    let name = '';
    if (queryString) {
        const genderAndName = queryString.split('&');
        gender = genderAndName[0].split('=')[1];
        name = genderAndName[1].split('=')[1];
        if (gender === 'men') {
            gender = `Men's`;
        } else if (gender === 'women') {
            gender = `Women's`
        } else gender = '';
        title = gender + " " + name;
    }
    return title;
}



export default function ProductGallery(props) {
    const {products, queryString} = props;
    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));
    let counter = 1;
    let rowElementsCount = 4;
    if (matches) rowElementsCount = 2;
    const color = getChosenColor(queryString);
    const productCards = products.map((product) =>{
        let img1, img2;
        if (color) {
            const imgsColor = getImgByColor(product, color);
            if (imgsColor) {
                img1 = imgsColor[0];
                img2 = imgsColor[1]
            }
        } else {
            img1 = product.imgs[0];
            img2 = product.imgs[1]
        }
        let borderRight =true;
        if (counter % rowElementsCount === 0) borderRight = false;
        counter++;
        let sizes = getSetOfProductSizes(product);
        return <ProductCard name={product.name}
                     price={product.price}
                     sizes={sizes}
                     srcImg1={img1}
                     srcImg2={img2}
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
                                            categoryLink={`/categories/${queryString}`}
                                            categoryName={getCategoryTitle(queryString)}
                                            borderRight={true} />);
            productCards.push(<CategoryLink key={Date.now()+ Math.random()}
                                            categoryLink={`/categories/${queryString}`}
                                            categoryName={getCategoryTitle(queryString)}
                                            borderRight={false} />);
        } else {
            productCards.splice(2,0,<CategoryLink key={Date.now()+ Math.random()}
                                                  categoryLink={`/categories/${queryString}`}
                                                  categoryName={getCategoryTitle(queryString)}
                                                  borderRight={false}
                                                  borderBottom={true}  />);
            productCards.push(<CategoryLink key={Date.now()+ Math.random()}
                                            categoryLink={`/categories/${queryString}`}
                                            categoryName={getCategoryTitle(queryString)}
                                            borderRight={false} />);
        }
    }

    return (
        <>
            <CategoryTitle title={getCategoryTitle(queryString)}/>
            {!matches ? <FiltersMenu colors={getSetOfProductsColors(products, queryString)} queryString = {queryString}/> : ''}
            <SortMenu mobile={matches} colors={getSetOfProductsColors(products, queryString)} queryString = {queryString}/>
            <Container maxWidth={false} className={classes.mainContainer}>
                {productCards}
            </Container>
        </>
    );
}