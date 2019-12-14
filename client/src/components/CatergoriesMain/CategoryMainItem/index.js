import React from "react";
import useStyles from "./useStyles";
import {Link, Grid} from "@material-ui/core";

const CategoriesMainItem = (props) => {
    // const classes = useStyles();
    const {name, id, href} = props;
    // console.log(name);
    return (
            <Grid item xs={3} id={`item${id}`} className="category-item-home">
                <p className="top-cat-name">{name}</p>
                <Link className="hidden-link" href={href}>
                    MEN
                </Link>
                <Link className="hidden-link" href={href}>
                    WOMEN
                </Link>
            </Grid>
    );
};

export default CategoriesMainItem;
