import React, {useEffect} from "react";
import Box from "@material-ui/core/Box";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {Container} from "@material-ui/core";
import useStyles from "./useStyles";
import {getAllCategories} from "../../../store/actions/categories";

export function Item(props) {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Link to={props.url} className={props.mobile ? classes.mobileLink : classes.link}>
                <Box className={classes.box}>{props.title}</Box>
            </Link>
        </React.Fragment>
    );
};

export function CategoryItems(props) {
    const classes = useStyles();
    const {show}  = useSelector(state => state.header);
    const {isMen, isWomen}  = useSelector(state => state.header);
    const dispatch = useDispatch();
    const {categories}  = useSelector(state => state.categories);
    useEffect(() => getAllCategories()(dispatch), []);

    let items = [];

    if (isMen) {
        items = categories.map(item => <Item key={item._id} url='someWhere' title={item.name} mobile={props.mobile} />)
    } else if (isWomen) {
        items = categories.map(item => <Item key={item._id} url='someWhere' title={item.name} mobile={props.mobile} />)
    }

    return (
        <Container maxWidth={false} className={show ? `${classes.border} ${classes.container}` : classes.hide}>
            {items}
        </Container>
    )
}