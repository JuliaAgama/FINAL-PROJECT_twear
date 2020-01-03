import React, {useEffect} from "react";
import useStyles from "./useStyles";
import {Grid, Hidden} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {getAllTopCats} from "../../../store/actions/topCats";
import CategoryHomeItem from "./CategoryHomeItem";
import CategoryHomeItemMobile from "./CategoryHomeItemMobile";

const CategoriesHome = () => {
    const dispatch = useDispatch();
    const topCats = useSelector(state => state.topCats.topCats);
    const topCatsItem = topCats.map((item, index) =>
        <CategoryHomeItem href = {`top-category/${item.name}`} name = {item.name} id={index+1} key = {item._id} image = {item.img}/>
    );
    const topCatsItemMobile = topCats.map((item, index) =>
        <CategoryHomeItemMobile href = {`top-category/${item.name}`} name = {item.name} id={index+1} key = {item._id} image = {item.img}/>
    );

    useEffect(() => dispatch(getAllTopCats()),
    [dispatch]
    );

    const classes = useStyles();

    return (
        <>
        {/* <Hidden smDown> */}
            <Grid container className={classes.Media}>
                {topCats.map((item, index) =>
                    <CategoryHomeItem href = {`top-category/${item.name}`} name = {item.name} id={index+1} key = {item._id} image = {item.img}/>
                )}
                {/* {topCatsItem} */}
            </Grid>
        {/* </Hidden> */}
        {/* <Hidden mdUp>
            <Grid container>
                {topCatsItemMobile}
            </Grid>
        </Hidden> */}
        </>
    );
};

export default CategoriesHome;
