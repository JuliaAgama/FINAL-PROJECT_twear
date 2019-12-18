import React from "react";
// import useStyles from "./useStyles";
import {Link, Grid} from "@material-ui/core";
import './categoryHomeItem.css';

const CategoryHomeItem = (props) => {

    const {name, id, href, image} = props;


    return (
            <Grid item xs={3} id={`item${id}`} className="category-item-home" style = {{backgroundImage:`url(${image})`}}>
                <p className="top-cat-name">{name}</p>
                <Link className="hidden-link" href={href+'&men'}>
                    MEN
                </Link>
                <Link className="hidden-link" href={href+'&women'}>
                    WOMEN
                </Link>
            </Grid>
    );
};

export default CategoryHomeItem;
