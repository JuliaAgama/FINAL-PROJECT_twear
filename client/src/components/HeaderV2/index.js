import React from 'react';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import withWidth from '@material-ui/core/withWidth';
import useStyles from './useStyles';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Desktop from './Desktop'
import Mobile from './Mobile'
import DropDownDesktop from "./DropDownDesktop";
import DropDownMobile from "./DropDownMobile";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import {useDispatch, useSelector} from "react-redux";
import {hideDesktopCategoriesMenuAction} from "../../store/actions/header";
import {hideMobileMenuAction} from "../../store/actions/header";
import Modal from '../common/Modal'



function HeaderMaterialUI() {

    const classes = useStyles();
    const {show, showMobileMenu}  = useSelector(state => state.header);

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

    const breakpointValues = {
        xs: 0,
        sm: 576,
        md: 768,
        lg: 992,
        xl: 1200,
    };

    const theme = createMuiTheme({ breakpoints: { values: breakpointValues } });

    return (
        <ThemeProvider theme={theme}>
            <ClickAwayListener onClickAway={handleClickAway}>
                <Grid container spacing={0} className={classes.mainContainer}>
                    <Hidden smDown>
                        <Grid container item xs={12} spacing={0}>
                            <Desktop/>
                        </Grid>
                        <DropDownDesktop/>
                    </Hidden>
                    <Hidden mdUp>
                        <Grid container item xs={12} spacing={0}>
                            <Mobile/>
                            <DropDownMobile/>
                        </Grid>
                    </Hidden>
                    <Modal/>
                </Grid>
            </ClickAwayListener>
        </ThemeProvider>
    );
}

export default withWidth()(HeaderMaterialUI);