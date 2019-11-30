import React, {useState, useEffect, useRef} from 'react';
// import { useDispatch, useSelector } from 'react-redux';

import { Typography, Box, Grid, Link, List } from '@material-ui/core';

import useStyles from './useStyles';

import OpenEditButton from '../../../common/buttons/Edit';
import CarouselResponsive from '../../../common/images/CarouselResponsive';
import "react-responsive-carousel/lib/styles/carousel.min.css";


const imgs =[
    'https://i.pinimg.com/736x/22/47/19/224719733e7376fc1b68f94fb30d2234.jpg',
    'https://d111vui60acwyt.cloudfront.net/product_photos/65716917/file_76d1b94c88_original.jpg',
    'https://ae01.alicdn.com/kf/HTB19CQPfKuSBuNjSsziq6zq8pXa0/Newbestyle-Women-Summer-Casual-Sleeveless-Dress-Yellow-Short-Mini-Dress-Chiffon-Pleated-Dress-Ball-Gown-Simple.jpg',
    'https://www.dressystar.com/media/catalog/product/cache/1/image/600x805.97014925373/9df78eab33525d08d6e5fb8d27136e95/4/0/40002560.jpg',
    'https://c3d320970a2e983659e8-4914634f0a844d7d4d4ef3e84a87f294.ssl.cf2.rackcdn.com/product-hugerect-703444-209991-1465542332-c529c2d3b0b2327afd9c2b3446d45310.jpg'
];


export default props => {

    console.log(props);

    const classes = useStyles();

    return (
        <>
        <Box color="secondary.main" p={3} borderBottom={1} textAlign="center" fontSize="h6.fontSize">PRODUCT TITLE </Box>
        <Typography component="div" className={classes.root}>
            <Grid container className={classes.paper}>
                <Link href={""} className={classes.editBtn}> <OpenEditButton/> </Link>
                <Grid item xs={12} sm={6} lg={8} className={classes.relative}>
                    <Typography component="div" variant="body2">
                        <Box fontSize="h6.fontSize" ml={6} pt={2} pb={2}>Art: itemNo </Box>
                        <Box> Product Description: blalblblak dfkjdf lkjkdf ldsjfoe oeuoeiu sliuea ghfdk; lj lkejr; l fuasifduareuisf dfkalf; eiwu diug'iesf leis leigus; lir igieasleu gie; ei; geiu g; aieu ;iu;ga e; ieug eiua; eoueigi ldjflów ga; oeig aeogoekg rgirsrd gsir gjsi </Box>
                        <Box fontSize="h6.fontSize" className={classes.price}>Price: </Box>
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6} lg={4} className={classes.carousel}>
                    <CarouselResponsive
                    imgs={imgs}
                    showIndicators={false}
                    width={250}
                    showThumbs={false}
                    />
                </Grid>
            </Grid>
                <Box>
                    Product Options (Colors (&images))
                </Box>
                <Box>
                    Product Inventory (Sizes, quantity, enabled\disabled (?))
                </Box>
                <Link href={`/admin/products`}>
                    <button >Back</button>
                </Link>
        </Typography>
        </>

    )
};