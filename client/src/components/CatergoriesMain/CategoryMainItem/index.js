import React from "react";
// import useStyles from "./useStyles";
import {Link, Grid} from "@material-ui/core";
import './categoryMainItem.css';

const CategoriesMainItem = (props) => {

    const {name, id, href} = props;

    return (
            <Grid item xs={3} id={`item${id}`} className="category-item-home">
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

export default CategoriesMainItem;
