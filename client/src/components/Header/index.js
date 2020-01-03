import React from 'react';

import {useDispatch, useSelector} from "react-redux";

import {hideDesktopCategoriesMenuAction} from "../../store/actions/header";
import {hideMobileMenuAction} from "../../store/actions/header";

import {withWidth, Container, Hidden} from '@material-ui/core';
import ClickAwayListener from "@material-ui/core/ClickAwayListener";

import useStyles from './useStyles';

import Logo from "./Logo";
import Search from "./Search";
import MiniCart from "./MiniCart";
import Currency from "./Currency";
import CategoriesMenu from "./CategoriesMenu";
import Login from "./Login";
import DropDownMenu from "./DropDownMenu";
import {CategoryItems} from "./CategoriesMenu/CategoryItems";
import Modal from '../common/modals/Modal'

export default withWidth()( () => {

    const classes = useStyles();
    const show  = useSelector(state => state.header.show);
    const showMobileMenu  = useSelector(state => state.header.showMobileMenu);
    const dispatch = useDispatch();

    const handleClickAway = () =>{
        if(showMobileMenu) {
            dispatch(hideMobileMenuAction());
        } else if (show && showMobileMenu) {
            dispatch(hideMobileMenuAction());
        } else if (show) {
            dispatch(hideDesktopCategoriesMenuAction());
        }
    };

    return (
        <>
            <ClickAwayListener onClickAway={handleClickAway}>
                <div>
                    <Hidden smDown>
                        <Container maxWidth={false} className={classes.mainContainer}>
                            <Container maxWidth={false} className={classes.container}>
                                <Search/>
                                <Currency/>
                            </Container>
                            <Container maxWidth={false} className={`${classes.container} ${classes.logoContainer}`}>
                                <Logo/>
                                <CategoriesMenu title='Women' border={true}/>
                                <CategoriesMenu title='Men' isMen={true}/>
                            </Container>
                            <Container maxWidth={false} className={classes.container}>
                                <MiniCart/>
                                <Login/>
                            </Container>
                            <CategoryItems/>
                        </Container>
                    </Hidden>
                    <Hidden mdUp>
                        <div className={classes.mainContainerMobile}>
                            <DropDownMenu/>
                            <Logo/>
                            <MiniCart/>
                            <Search/>
                            <div className={showMobileMenu ? classes.mobileMenuContainer : classes.hide}>
                                <CategoriesMenu title='Women' border={true}/>
                                <CategoriesMenu title='Men' isMen={true}/>
                                <CategoryItems mobile={true}/>
                                <Currency/>
                                <Login/>
                            </div>
                        </div>
                    </Hidden>
                    <Modal/>
                </div>
            </ClickAwayListener>
        </>
    );
});
