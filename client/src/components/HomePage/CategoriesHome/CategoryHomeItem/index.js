import React from "react";

import {Link, Grid, Box} from "@material-ui/core";

import useStyles from "./useStyles";

import './categoryHomeItem.css';

const CategoryHomeItem = props => {

    const {name, id, href, image} = props;

    const classes = useStyles();

    return (
            <Grid item xs={6} md={3} id={`item${id}`} className="category-item-home" style = {{backgroundImage:`url(${image})`}}>
                <p className="top-cat-name">{name}</p>
                <Link className='hidden-link' href={href+'&men'}>
                    <Box className={classes.gender}>MEN</Box>
                </Link>
                <Link className='hidden-link' href={href+'&women'}>
                    <Box className={classes.gender}>WOMEN</Box>
                </Link>
            </Grid>
    );
};

export default CategoryHomeItem;
