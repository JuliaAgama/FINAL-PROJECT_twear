import React from 'react';
import clsx from 'clsx';
import { useSelector} from "react-redux";

import {withWidth, Hidden, Grid, Box} from '@material-ui/core';


import Logo from "./Logo";
import Search from "./Search";
import MiniCart from "./MiniCart";
import Currency from "./Currency";
import CategoriesMenu from "./CategoriesMenu";
import Login from "./Login";
import DropDownMenu from "./DropDownMenu";
import {CategoryItems} from "./CategoriesMenu/CategoryItems";
import Modal from '../common/modals/Modal'

import useStyles from './useStyles';

export default withWidth()( () => {

    const classes = useStyles();
    const showMobileMenu  = useSelector(state => state.header.showMobileMenu);

    return (
        <React.Fragment>
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
        </React.Fragment>
    );
});
