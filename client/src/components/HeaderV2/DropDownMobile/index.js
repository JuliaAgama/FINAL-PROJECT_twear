import useStyles from "./useStyles";
import React from "react";
import {Button, Container} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {ItemsList} from "../Item";
import {showMenCategoriesAction, showWomenCategoriesAction} from "../../../store/actions/header";

export default function DropDownMobile() {

    const {showMobileMenu, show}  = useSelector(state => state.header);
    const dispatch = useDispatch();
    const items = ItemsList(true);
    const classes = useStyles();

    return (
        <React.Fragment>
                     <Container maxWidth={false} className={showMobileMenu ? classes.container : classes.hide}>
                         <Button className={classes.btn} onClick={() => dispatch(showWomenCategoriesAction())}>Women</Button>
                         <Button id='menCategories' className={classes.btn} onClick={() => dispatch(showMenCategoriesAction())}>Men</Button>
                         <Container maxWidth={false} className={show ? classes.categoriesContainer : classes.hide}>
                             {items}
                         </Container>
                         <Button className={classes.btn}>Currency</Button>
                         <Button className={classes.btn}>Login</Button>
                     </Container>
        </React.Fragment>
);
}