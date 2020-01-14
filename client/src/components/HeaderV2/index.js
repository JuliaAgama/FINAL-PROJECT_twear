import React from 'react';
import clsx from 'clsx';
import {useDispatch, useSelector} from "react-redux";

import {Hidden, Container, ClickAwayListener} from '@material-ui/core';

import Logo from "./Logo";
import Search from "./Search";
import MiniCart from "./MiniCart";
import Currency from "./Currency";
import DropDownMenu from "./DropDownMenu";
import CategoriesMenu from "./CategoriesMenu";
import {CategoryItems} from "./CategoriesMenu/CategoryItems";
import Login from "./Login";
import LoginMenu from "./Login/LoginMenu";
import Modal from '../common/modals/Modal'

import useStyles from './useStyles';
import {
    headerCloseAction,
    hideDesktopCategoriesMenuAction,
    hideLoginMenuAction,
} from "../../store/actions/header";

const isDropMenuBtn = event => {
    if (event.target.id === 'dropMenu' || event.target.id === 'dropMenuIcon') {
        return true;
    } else if (event.target.firstChild) {
        return event.target.firstChild.id === 'dropMenuIcon'
    } else {
        return false;
    }
};

export default () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const showMobileMenu  = useSelector(state => state.header.showMobileMenu);
    const showLoginMenu  = useSelector(state => state.header.showLoginMenu);
    const show  = useSelector(state => state.header.show);

    const handleClickAwayMobileMenu = (event) => {
        if (!isDropMenuBtn(event)) dispatch(headerCloseAction());
    };

    const handleClickAwayLoginMenu = (event) => {
        if (event.target.innerText !== 'My Account' && showLoginMenu) {
            dispatch(hideLoginMenuAction());
        }
    };
    const handleClickAwayCategoriesMenu = (event) => {
        if (event.target.innerText !== 'Women' && event.target.innerText !== 'Men' && show) dispatch(hideDesktopCategoriesMenuAction(false));
    };

    return (
            <>
                <Hidden smDown>
                    <Container maxWidth={false} className={clsx(classes.search, classes.headerItem, classes.sticky)}><Search/></Container>
                    <Container maxWidth={false} className={clsx(classes.logo, classes.headerItem)}><Logo/></Container>
                    <Container maxWidth={false} className={clsx(classes.cart, classes.headerItem, classes.sticky)}><MiniCart/></Container>
                    <Container maxWidth={false} className={clsx(classes.currency, classes.headerItem)}><Currency/></Container>
                    <Container maxWidth={false} className={clsx(classes.women, classes.headerItem, classes.sticky)}><CategoriesMenu title='Women'/></Container>
                    <Container maxWidth={false} className={clsx(classes.men, classes.headerItem, classes.sticky)}><CategoriesMenu title='Men' isMen={true}/></Container>
                    <Container maxWidth={false} className={clsx(classes.login, classes.headerItem)}><Login/></Container>
                    <ClickAwayListener onClickAway={handleClickAwayLoginMenu}>
                        <Container maxWidth={false} className={clsx(classes.dropSubMenu, classes.dropSubMenuItem, classes.sticky)}><LoginMenu/></Container>
                    </ClickAwayListener>
                    <ClickAwayListener onClickAway={handleClickAwayCategoriesMenu}>
                        <Container maxWidth={false} className={clsx(classes.dropSubMenu, classes.dropSubMenuItem, classes.sticky)}><CategoryItems/></Container>
                    </ClickAwayListener>
                </Hidden>
                <Hidden mdUp>
                    <Container maxWidth={false} className={clsx(classes.dropMenu, classes.mobileHeaderItem, classes.sticky)}><DropDownMenu/></Container>
                    <Container maxWidth={false} className={clsx(classes.mobileLogo, classes.mobileHeaderItem, classes.sticky)}><Logo/></Container>
                    <Container maxWidth={false} className={clsx(classes.mobileCart, classes.mobileHeaderItem, classes.sticky)}><MiniCart/></Container>
                    {showMobileMenu ?
                        <ClickAwayListener onClickAway={handleClickAwayMobileMenu}>
                            <Container maxWidth={false} className={clsx(classes.mobileDropMenu, classes.mobileMenuItem, classes.sticky)}>
                                <Container maxWidth={false} className={classes.mobileSearch}><Search/></Container>
                                <Container maxWidth={false} className={clsx(classes.mobileMenuItemContainer)}><CategoriesMenu title='Women'/></Container>
                                <Container maxWidth={false} className={clsx(classes.mobileMenuItemContainer, classes.borderLeft)}><CategoriesMenu title='Men' isMen={true}/></Container>
                                <Container maxWidth={false} className={classes.dropSubMenu}><CategoryItems mobile={true}/></Container>
                                <Container maxWidth={false} className={clsx(classes.mobileMenuItemContainer)}><Currency/></Container>
                                <Container maxWidth={false} className={clsx(classes.mobileMenuItemContainer, classes.borderLeft)}><Login/></Container>
                                <Container maxWidth={false} className={clsx(classes.dropSubMenu, classes.dropSubMenuItemMobile, classes.sticky)}><LoginMenu/></Container>
                            </Container>
                        </ClickAwayListener>:
                        <></> }
                    {!showMobileMenu ? <Container maxWidth={false} className={clsx(classes.mobileSearch, classes.mobileHeaderItem)}><Search/></Container> : <></>}
                </Hidden>
                <Modal/>
            </>
    )
}
