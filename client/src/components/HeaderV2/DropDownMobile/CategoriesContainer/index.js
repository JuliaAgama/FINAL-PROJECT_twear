import useStyles from "./useStyles";
import React from "react";
import {Button, Container} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import Item from "../../Item";



export default function CategoriesContainer() {

    const {menCategories, womenCategories}  = useSelector(state => state.categories);
    let items = menCategories.map(item => <Item key={item.id} url={item.url} title={item.title} mobile={true} />);

    const classes = useStyles();
    return (
        <React.Fragment>
            {/*<ClickAwayListener onClickAway={handleClickAway}>*/}
            <Container maxWidth={false} className={classes.container}
                       // className={show ? classes.container : classes.hide}
            >
                {items}
            </Container>
            {/*</ClickAwayListener>*/}
        </React.Fragment>
    );
}