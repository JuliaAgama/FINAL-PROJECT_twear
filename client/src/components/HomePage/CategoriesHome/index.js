import React, {useEffect} from "react";
import useStyles from "./useStyles";
import {Grid, Hidden} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {getAllTopCats} from "../../../store/actions/topCats";
import CategoryHomeItem from "./CategoryHomeItem";
import CategoryHomeItemMobile from "./CategoryHomeItemMobile";

const CategoriesHome = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const topCats = useSelector(state => state.topCats.topCats);
    const topCatsItem = topCats.map((item, index) => <CategoryHomeItem href = {`top-category/${item.name}`} name = {item.name} id={index+1} key = {item._id} image = {item.img}/>);
    const topCatsItemMobile = topCats.map((item, index) => <CategoryHomeItemMobile href = {`top-category/${item.name}`} name = {item.name} id={index+1} key = {item._id} image = {item.img}/>);

    useEffect(() => dispatch(getAllTopCats()),
        []
    );

    return (
        <>
            <Hidden smDown>
                <p className={classes.categoriesMainHeader}>
                    Pre Spring 20
                </p>
            </Hidden>
            <Hidden mdUp>
                <p className={classes.categoriesMainHeaderXS}>
                    Pre Spring 20
                </p>
            </Hidden>
            <p className={classes.categoriesMainSubheader}>
                Get ready for the festive season with our Pre Party collection —
                including a lot of new jeans.
            </p>
            <Hidden smDown>
                <Grid container className={classes.Media}>
                    {topCatsItem}
                </Grid>
            </Hidden>
            <Hidden mdUp>
                <Grid container>
                    {topCatsItemMobile}
                </Grid>
            </Hidden>
        </>
    );
};

export default CategoriesHome;
