import useStyles from "./useStyles";
import React from "react";
import {Button, Container} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import Item from "../Item";
import {hideMobileCategoriesMenuAction, showMobileCategoriesMenuAction} from "../../../store/actions/header";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";



export default function DropDownMobile() {

    const {showMobileMenu, show, isMen}  = useSelector(state => state.header);
    const {menCategories, womenCategories}  = useSelector(state => state.categories);

    const dispatch = useDispatch();
    const showMenu = (isMen) => dispatch(showMobileCategoriesMenuAction(isMen));
    const hideMenu = () => {dispatch(hideMobileCategoriesMenuAction());};

    const handleClickAway = (event) =>{
        if (show && !(event.target.innerText === 'Men' ||
                    event.target.innerText === 'Women' ||
                    event.target.innerText === 'Currency' ||
                    event.target.innerText === 'Login' )){
            hideMenu();
        }
    };

    const showCategories = (event) => {
        const isMen = event.target.innerText;
        if (isMen === 'Men') {
            showMenu(true);
        } else {
            showMenu(false)
        }
    };

    let items = [];

    if (isMen) {
        items = menCategories.map(item => <Item key={item.id} url={item.url} title={item.title} mobile={true}/>)
    } else {
        items = womenCategories.map(item => <Item key={item.id} url={item.url} title={item.title} mobile={true}/>)
    }

    const classes = useStyles();
    return (
        <React.Fragment>
                     <Container maxWidth={false} className={showMobileMenu ? classes.container : classes.hide}>
                         <Button className={classes.btn} onClick={showCategories}>Women</Button>
                         <Button className={classes.btn} onClick={showCategories}>Men</Button>
                         <ClickAwayListener onClickAway={handleClickAway}>
                             <Container id='categoriesContainer' maxWidth={false} className={show ? classes.categoriesContainer : classes.hide}>
                                 {items}
                             </Container>
                         </ClickAwayListener>
                         <Button className={classes.btn}>Currency</Button>
                         <Button className={classes.btn}>Login</Button>
                     </Container>
        </React.Fragment>
);
}