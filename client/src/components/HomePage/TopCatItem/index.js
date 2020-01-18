import React from "react";

import {Grid, Box} from "@material-ui/core";
import {Link} from "react-router-dom";

import './topCatItem.css';

export default props => {

    const {name, id, href, image} = props;

    return (
            <Grid item xs={6} md={3} id={`item${id}`}
                className='category-item-home'
                style={{backgroundImage:`url(${image})`}}
            >
                <Box className='top-cat-home'>{name}</Box>
                <Link className='hidden-link' to={href+'&men'}>
                    <Box className='gender'>MEN</Box>
                </Link>
                <Link className='hidden-link' to={href+'&women'}>
                    <Box className='gender'>WOMEN</Box>
                </Link>
            </Grid>
    );
};
