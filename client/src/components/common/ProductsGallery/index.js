import React, {useEffect} from "react";
import { useTheme } from '@material-ui/core/styles';
import {Container} from "@material-ui/core";
import ProductCard from "./ProductCard";
import {useDispatch, useSelector} from "react-redux";
import {getAllProducts} from "../../../store/actions/products";
import EmptyProductCard from "./EmptyProductCard";
import CategoryTitle from "./CategoryTitle";
import CategoryLink from "./CategoryLink";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import useStyles from "./useStyles";

function getFiniteValue(obj) {
    getProp(obj);

    function getProp(o) {
        for(const prop in o) {
            if(typeof(o[prop]) === 'object') {
                console.log(o[prop]);
                getProp(o[prop]);
            } else {
                console.log("_______________" + prop + ' => ',o[prop])
            }
        }
    }
}



export default function ProductGallery() {
    const productCount = 6;
    const classes = useStyles();
    const theme = useTheme();
    const dispatch = useDispatch();
    const products = useSelector(state => state.products.products);
    const matches = useMediaQuery(theme.breakpoints.down('sm'));
    useEffect(() => {dispatch(getAllProducts())},[]);
    let counter = 1;
    let rowElementsCount = 4;
    if (matches) rowElementsCount = 2;
    products.forEach(card => {
        getFiniteValue(card);
    });
    console.log(products);

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

    if (productCount === 6) {
        if (!matches) {
            productCards.push(<CategoryLink key={Date.now()+ Math.random()}
                                            categoryLink='#' categoryName='Shop Women New Arrivals'
                                            borderRight={true} />);
            productCards.push(<CategoryLink key={Date.now()+ Math.random()}
                                            categoryLink='#'
                                            categoryName='Shop Men New Arrivals'
                                            borderRight={false} />);
        } else {
            productCards.splice(2,0,<CategoryLink key={Date.now()+ Math.random()}
                                                  categoryLink='#'
                                                  categoryName='Shop Women New Arrivals'
                                                  borderRight={false}
                                                  borderBottom={true}  />);
            productCards.push(<CategoryLink key={Date.now()+ Math.random()}
                                            categoryLink='#'
                                            categoryName='Shop Men New Arrivals'
                                            borderRight={false} />);
        }
    }

    return (
        <>
            <CategoryTitle title='Selected New Arrivals'/>
            <Container maxWidth={false} className={classes.mainContainer}>
                {productCards}
            </Container>
        </>
    );
}