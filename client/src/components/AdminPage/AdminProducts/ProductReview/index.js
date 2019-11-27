import React, {useState, useEffect, useRef} from 'react';
// import { useDispatch, useSelector } from 'react-redux';

import useStyles from './useStyles';

import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';





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