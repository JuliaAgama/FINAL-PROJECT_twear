import React from 'react';
import clsx from 'clsx';

import {useDispatch, useSelector} from "react-redux";

import {hideDesktopCategoriesMenuAction} from "../../store/actions/header";
import {hideMobileMenuAction} from "../../store/actions/header";

import {withWidth, Hidden, Grid, Box, ClickAwayListener} from '@material-ui/core';

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
        <React.Fragment>
            <ClickAwayListener onClickAway={handleClickAway}>
                <>
                    <Hidden smDown>
                        <Grid item xs={3} className={clsx(classes.headerItem, classes.sticky, classes.leftBorder)}>
                            <Box zIndex='modal'>
                                <Search/>
                            </Box>
                        </Grid>
                        <Grid item xs={6} className={clsx(classes.headerItem, classes.topBorder)}>
                            <Logo/>
                        </Grid>
                        <Grid item xs={3} className={clsx(classes.headerItem, classes.sticky)}>
                            <MiniCart/>
                        </Grid>
                        <Grid item xs={3} className={clsx(classes.headerItem, classes.bottomBorder, classes.leftBorder)}>
                            <Currency/>
                        </Grid>
                        <Grid item xs={3} className={clsx(classes.headerItem, classes.sticky)}>
                            <CategoriesMenu title='Women'/>
                        </Grid>
                        <Grid item xs={3} className={clsx(classes.headerItem, classes.sticky)}>
                            <CategoriesMenu title='Men' isMen={true}/>
                        </Grid>
                        <Grid item xs={3} className={clsx(classes.headerItem, classes.bottomBorder)}>
                            <Login/>
                        </Grid>
                        <Grid item xs={12} >
                            <CategoryItems/>
                        </Grid>
                    </Hidden>
                    {/* <div> */}
                    <Hidden mdUp>
                        <Grid item xs={2} sm={1} className={clsx(classes.headerItemXS, classes.leftBorder, classes.topBorder)}>
                            <DropDownMenu/>
                        </Grid>
                        <Grid item xs={8} sm={10} className={clsx(classes.headerItemXS, classes.topBorder)}>
                            <Logo/>
                        </Grid>
                        <Grid item xs={2} sm={1} className={clsx(classes.headerItemXS, classes.topBorder)}>
                            <MiniCart/>
                        </Grid>
                        <Grid item xs={12} className={clsx(classes.headerItemXS, classes.leftBorder)}>
                            <Search/>
                        </Grid>
                        <Box className={showMobileMenu ? classes.mobileMenuContainer : classes.hide}>
                            <Grid item xs={12} container style={{borderBottom: '1px solid #000', height: '60px'}}>
                                <Grid item xs={6} style={{borderRight: '1px solid #000'}}>
                                    <CategoriesMenu title='Women' border={true}/>
                                </Grid>
                                <Grid item xs={6}>
                                    <CategoriesMenu title='Men' isMen={true}/>
                                </Grid>
                                <CategoryItems mobile={true}/>
                            </Grid>
                            <Grid item xs={12} container style={{borderBottom: '1px solid #000', height: '60px'}}>
                                <Grid item xs={6} style={{borderRight: '1px solid #000'}}>
                                    <Currency/>
                                </Grid>
                                <Grid item xs={6}>
                                    <Login/>
                                </Grid>
                            </Grid>
                        </Box>
                    </Hidden>
                    <Modal/>
                </>
            </ClickAwayListener>
        </React.Fragment>
    );
});