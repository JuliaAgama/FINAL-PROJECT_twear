import React, {useEffect} from "react";
import useStyles from "./useStyles";
import {Grid, Hidden} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {getAllTopCats} from "../../store/actions/topCats";
import CategoriesMainItem from "./CategoryMainItem";

const CategoriesMain = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const topCats = useSelector(state => state.topCats.topCats);
    const topCatsItem = topCats.map((item, index) => <CategoriesMainItem href = {`topcategorymenu/${item._id}`} name = {item.name} id={index+1} key = {item._id}/>);

    useEffect(() => dispatch(getAllTopCats()),
        [
            //пустой массив говорит что юзефект отработает один раз при любом перерендеринге
        ]
    );

    return (
        <>
            <p className={classes.categoriesMainHeader}>
                Pre Spring 20
            </p>
            <p className={classes.categoriesMainSUbheader}>
                Get ready for the festive season with our Pre Party collection —
                including a lot of new jeans.
            </p>
            <Hidden smDown>
                <Grid container className={classes.Media}>
                    {topCatsItem}
                </Grid>
            </Hidden>
            <Hidden mdUp>
                <>
                </>
            </Hidden>
        </>
    );
};

export default CategoriesMain;
