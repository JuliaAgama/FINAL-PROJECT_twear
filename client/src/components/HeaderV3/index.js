import React from 'react';
import withWidth from '@material-ui/core/withWidth';
import useStyles from './useStyles';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import {useDispatch, useSelector} from "react-redux";
import {hideDesktopCategoriesMenuAction} from "../../store/actions/header";
import {hideMobileMenuAction} from "../../store/actions/header";
import {Container} from "@material-ui/core";
import Hidden from "@material-ui/core/Hidden";
import Logo from "./Logo";
import Search from "./Search";
import MiniCart from "./MiniCart";
import Currency from "./Currency";
import CategoriesMenu from "./CategoriesMenu";
import Login from "./Login";
import DropDownMenu from "./DropDownMenu";
import {CategoryItems} from "./CategoryItems";

function HeaderV3() {

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
                            <Container maxWidth={false} className={classes.mainContainerMobile}>
                                <DropDownMenu/>
                                <Logo/>
                                <MiniCart/>
                                <Search/>
                                <Container maxWidth={false} className={classes.mobileMenuContainer}>
                                    <CategoriesMenu title='Women' border={true}/>
                                    <CategoriesMenu title='Men' isMen={true}/>
                                    <Currency/>
                                    <Login/>
                                </Container>
                            </Container>
                        </Hidden>
                    </div>
                </ClickAwayListener>
            </ThemeProvider>
    );
}

export default withWidth()(HeaderV3);
