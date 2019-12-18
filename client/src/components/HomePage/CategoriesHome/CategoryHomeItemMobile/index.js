import React from "react";
// import useStyles from "./useStyles";
import {Link, Grid, Button} from "@material-ui/core";
import "./categoryHomeItemMobile.css"
import useStyles from './useStyles';

const CategoryHomeItemMobile = (props) => {

    const {name, id, href, image} = props;
    const classes = useStyles();


    return (
            <Grid item xs={12} id={`item${id}`} style = {{border:"1px solid black"}}>
                <p className={classes.header}>{name}</p>
                <div className={classes.flex}>
                <Link href={href+'&men'}>
                    <Button className={classes.btn}>MEN</Button>
                </Link>
                <Link href={href+'&women'}>
                    <Button className={classes.btn}>WOMEN</Button>
                </Link>
                </div>
            </Grid>
    );
};

export default CategoryHomeItemMobile;
