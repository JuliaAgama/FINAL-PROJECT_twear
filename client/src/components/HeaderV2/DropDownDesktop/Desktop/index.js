import useStyles from "./useStyles";
import React from "react";
import Grid from "@material-ui/core/Grid";
import Item from "../../Item";
import {Container} from "@material-ui/core";
import {useSelector} from "react-redux";

import { useDispatch } from 'react-redux';
import {hideCategoriesMenuAction} from '../../../../store/actions/categoriesMenu';
import ClickAwayListener from "@material-ui/core/ClickAwayListener";


export default function HeaderDropDownBlock() {

    const {menCategories, womenCategories}  = useSelector(state => state.categories);
    const {isMen, show}  = useSelector(state => state.categoriesMenu);

    const dispatch = useDispatch();
    const hideMenu = () => {
        dispatch(hideCategoriesMenuAction());
    };

    const handleClickAway = (event) =>{
        if (show && !(event.target.innerText === 'Men' || event.target.innerText === 'Women')) hideMenu();
    };

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
                <ClickAwayListener onClickAway={handleClickAway}>
                    <Container maxWidth={false} className={classes.container}>
                        {items}
                    </Container>
                </ClickAwayListener>
            </Grid>
        </React.Fragment>
    );
}