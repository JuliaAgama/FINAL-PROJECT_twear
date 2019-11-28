import React, {useState, useEffect, useRef} from 'react';
// import { useDispatch, useSelector } from 'react-redux';

import { Typography, Box, Grid, Link, List } from '@material-ui/core';

import useStyles from './useStyles';


export default props => {

    return (
        <Typography component="div" variant="body1">
            <Box>
                Product Description (basic info: title, art, description, images, price)
            </Box>
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
    )
};