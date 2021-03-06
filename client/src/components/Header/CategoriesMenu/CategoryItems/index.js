import React, {useEffect} from "react";
import Box from "@material-ui/core/Box";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {Container} from "@material-ui/core";
import useStyles from "./useStyles";
import {getAllCategories} from "../../../../store/actions/categories";

export function Item(props) {
    const classes = useStyles();

    const clickHandler = () => {

    };
    return (
        <React.Fragment>
            <Link to={props.url} onClick={clickHandler} className={props.mobile ? classes.mobileLink : classes.link}>
                <Box className={classes.box}>{props.title}</Box>
            </Link>
        </React.Fragment>
    );
};

function CategoriesFilter(categories, gender) {
    return categories.filter(category => category.gender.name === gender || category.gender.name === 'unisex');

};

export function CategoryItems(props) {
    const classes = useStyles();
    const isMen  = useSelector(state => state.header.isMen);
    const isWomen  = useSelector(state => state.header.isWomen);
    const show  = useSelector(state => state.header.show);
    const categories  = useSelector(state => state.categories.categories);
    const dispatch = useDispatch();
    useEffect(() => getAllCategories()(dispatch), [dispatch]);
    let items = [];

    if (isMen) {
        items = CategoriesFilter(categories, 'men').map(item => <Item key={item._id} url={`/categories/page=shop&gender=${item.gender.name}&category=${item.name}`} title={item.name} mobile={props.mobile} />)
    } else if (isWomen) {
        items = CategoriesFilter(categories, 'women').map(item => <Item key={item._id} url={`/categories/page=shop&gender=${item.gender.name}&category=${item.name}`} title={item.name} mobile={props.mobile} />)
    }

    return (
        <Container maxWidth={false} className={show ? `${classes.border} ${classes.container}` : classes.hide}>
            {items}
        </Container>
    )
}