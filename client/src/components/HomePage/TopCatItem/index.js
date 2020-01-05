import React from "react";

import {Link, Grid, Box} from "@material-ui/core";

import './topCatItem.css';

export default props => {

    const {name, id, href, image} = props;

    return (
            <Grid item xs={6} md={3} id={`item${id}`}
                className='category-item-home'
                style={{backgroundImage:`url(${image})`}}
            >
                <Box className='top-cat-home'>{name}</Box>
                <Link className='hidden-link' href={href+'&men'}>
                    <Box className='gender'>MEN</Box>
                </Link>
                <Link className='hidden-link' href={href+'&women'}>
                    <Box className='gender'>WOMEN</Box>
                </Link>
            </Grid>
    );
};
