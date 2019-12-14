import React, {useEffect} from "react";
import useStyles from "./useStyles";
import {Link, Grid, Hidden} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {getAllTopCats} from "../../store/actions/topCats";
import CategoriesMainItem from "./CategoryMainItem";

const CategoriesMain = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const topCats = useSelector(state => state.topCats.topCats);
    const topCatsArray = topCats.map((item, index) => <CategoriesMainItem href = {`topcategorymenu/${item._id}`} name = {item.name} id={index+1} key = {item._id}/>);

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
                    {topCatsArray}
                    {/*<Grid item xs={3} id="item1" className="category-item-home">*/}
                    {/*    <p className="top-cat-name">{Clothes}</p>*/}
                    {/*    <Link className="hidden-link" href="#">*/}
                    {/*        MEN*/}
                    {/*    </Link>*/}
                    {/*    <Link className="hidden-link" href="#">*/}
                    {/*        WOMEN*/}
                    {/*    </Link>*/}
                    {/*</Grid>*/}
                    {/*<Grid item xs={3} id="item2" className="category-item-home">*/}
                    {/*    <p className="top-cat-name">Footwear</p>*/}
                    {/*    <Link className="hidden-link" href="#">*/}
                    {/*        MEN*/}
                    {/*    </Link>*/}
                    {/*    <Link className="hidden-link" href="#">*/}
                    {/*        WOMEN*/}
                    {/*    </Link>*/}
                    {/*</Grid>*/}
                    {/*<Grid item xs={3} id="item3" className="category-item-home">*/}
                    {/*    <p className="top-cat-name">Bags</p>*/}
                    {/*    <Link className="hidden-link" href="#">*/}
                    {/*        MEN*/}
                    {/*    </Link>*/}
                    {/*    <Link className="hidden-link" href="#">*/}
                    {/*        WOMEN*/}
                    {/*    </Link>*/}
                    {/*</Grid>*/}
                    {/*<Grid item xs={3} id="item4" className="category-item-home">*/}
                    {/*    <p className="top-cat-name">Accessories</p>*/}
                    {/*    <Link className="hidden-link" href="#">*/}
                    {/*        MEN*/}
                    {/*    </Link>*/}
                    {/*    <Link className="hidden-link" href="#">*/}
                    {/*        WOMEN*/}
                    {/*    </Link>*/}
                    {/*</Grid>*/}
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
