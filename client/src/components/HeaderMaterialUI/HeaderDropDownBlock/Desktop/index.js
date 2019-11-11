import useStyles from "./useStyles";
import React, {useRef, useEffect} from "react";
import Grid from "@material-ui/core/Grid";
import Item from "./Item";
import {Container} from "@material-ui/core";
import {useSelector} from "react-redux";

import { useDispatch } from 'react-redux';
import {hideCategoriesMenuAction} from '../../../../store/actions/categoriesMenu';


export default function HeaderDropDownBlock() {

    let categoriesContainer = useRef();

    useEffect(() => {categoriesContainer.current.focus()});

    const clickHandler = (event) => {
       event.currentTarget.focus();
    };


    const {menCategories, womenCategories}  = useSelector(state => state.categories);
    const {isMen, show}  = useSelector(state => state.categoriesMenu);

    const dispatch = useDispatch();
    const hideMenu = () => {
        dispatch(hideCategoriesMenuAction());
    }

    let items = [];

    if (isMen) {
        items = menCategories.map(item => <Item key={item.id} url={item.url} title={item.title} />)
    } else {
        items = womenCategories.map(item => <Item key={item.id} url={item.url} title={item.title} />)
    }

    const classes = useStyles();
    return (
        <React.Fragment>
            <Grid container
                  item xs={12}
                  spacing={0}
                  className={show ? classes.border : classes.hide}>
                <Container tabIndex="-1"
                           ref={categoriesContainer}
                           maxWidth={false}
                           className={classes.container}
                           onClick={clickHandler}
                           onBlur={hideMenu}>
                    {items}
                </Container>
            </Grid>
        </React.Fragment>
    );
}