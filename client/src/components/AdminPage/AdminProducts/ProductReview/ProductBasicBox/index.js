import React from 'react';

import { Typography, Box, Grid } from '@material-ui/core';

import useStyles from './useStyles';

import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery-no-icon.css';


export default props => {

    const {product} = props;

    const classes = useStyles();

    return (
        <>
            <Grid item xs={8} sm={9} lg={10} className={classes.details}>
                <Typography component="div" variant="body2">
                    <Box fontSize="h6.fontSize" ml={6} pt={2} pb={2}>Art: {product.itemNo} </Box>
                    <Box> {product.description} </Box>
                    <Box fontSize="body1.fontSize" pt={2}> Categories: {product.categories.map(el => el.category.name.toUpperCase()).join(', ')} </Box>
                    <Box fontSize="h6.fontSize" className={classes.price}>Price: $ {product.price}</Box>
                </Typography>
            </Grid>
            <Grid item xs={4} sm={3} lg={2} container >
                <Grid item className={classes.carousel}>
                    <ImageGallery
                        items={product.imgs.map(url => ({original: url, thumbnail: url} ))}
                        showIndex={true}
                        showBullets={true}
                        showThumbnails={false}
                        thumbnailPosition={'top'}
                    />
                </Grid>
            </Grid>
        </>
    )
};
