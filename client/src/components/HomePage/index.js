import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getAllTopCats} from "../../store/actions/topCats";
import {getProductsGalleryForShow} from "../../store/actions/productsGallery";

import {Hidden, Box, Grid} from "@material-ui/core";

import useStyles from "./useStyles";

import TopCatItem from "./TopCatItem";
import ProductGallery from "../common/ProductsGallery";
import Marquee from "../common/Marquee";


export default () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllTopCats());
        dispatch(getProductsGalleryForShow(true));
    },[dispatch]);

    const topCats = useSelector(state => state.topCats.topCats);
    let products = useSelector(state => state.productsGallery.productsGalleryForShow);
    products = products.checkedProduct;


    const mainAnnouncement = {
        texts: [
            'autumn winter 2019',
            '40% off',
            'autumn winter 2019',
            '40% off',
            'autumn winter 2019',
            '40% off',
            'autumn winter 2019',
            '40% off',
            'autumn winter 2019',
            '40% off',
            'autumn winter 2019',
            '40% off',
            'autumn winter 2019',
            '40% off',
            'autumn winter 2019',
            '40% off',
        ],
        styles: {
            container: {
            },
            text: {
                color: '#ED1472',
                paddingLeft: '30px',
                paddingRight: '30px',
                fontSize: '40px',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                WebkitAnimation: 'marquee 300s infinite linear',
                animation: 'marquee 300s infinite linear'
            }
        }
    };

    const selectedAnnouncement = {
        texts: [
            "free shipping above 1000 euro",
            'quick pay with paypal',
            "free shipping above 1000 euro",
            'quick pay with paypal',
            "free shipping above 1000 euro",
            'quick pay with paypal',
        ],
        styles: {
            container: {
            },
            text: {
                color: '#000',
                textTransform: 'uppercase',
                // color: '#B515FF',
                fontSize: '40px',
                letterSpacing: '2px',
                WebkitAnimation: 'marquee 200s infinite linear',
                animation: 'marquee 200s infinite linear'
            }
        }
    };

    const classes = useStyles();

    return (
        <main>
            <Box position='relative'>
                <Hidden smDown>
                    <Box position='absolute' top='-90px' width='100%'><Marquee text={mainAnnouncement.texts.join(' ... !!! ... sale ... !!! ... ')} styles={mainAnnouncement.styles}/></Box>
                </Hidden>
                <Box className={classes.header} fontSize='h4.fontSize'>
                    Pre Spring 20
                </Box>
                <Box className={classes.subHeader}>
                    Get ready for the festive season with our Pre Party collection —
                    including a lot of new jeans.
                </Box>
                <Grid container className={classes.Media}>
                    {topCats.map((item, index) =>
                        <TopCatItem href = {`top-category/${item.name}`} name = {item.name} id={index+1} key = {item._id} image = {item.img}/>
                    )}
                </Grid>
            </Box>
            <Hidden smDown>
                <Box mt={6}><Marquee text={selectedAnnouncement.texts.join(' ... !!! ... !!! ... ')} styles={selectedAnnouncement.styles}/></Box>
            </Hidden>
            <ProductGallery products={products} homePage={true}/>
            <Hidden smDown>
                <Box mt={6}><Marquee text={selectedAnnouncement.texts.join(' ... !!! ... !!! ... ')} styles={selectedAnnouncement.styles}/></Box>
            </Hidden>
        </main>
    )
};
