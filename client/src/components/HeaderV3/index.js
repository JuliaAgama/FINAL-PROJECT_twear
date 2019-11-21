import React from 'react';
import withWidth from '@material-ui/core/withWidth';
import useStyles from './useStyles';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import {useDispatch, useSelector} from "react-redux";
import {hideDesktopCategoriesMenuAction} from "../../store/actions/header";
import {hideMobileMenuAction} from "../../store/actions/header";
import {Container} from "@material-ui/core";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";



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
                <Container maxWidth={false} className={classes.mainContainer}>
                    <Button fullWidth={true} className={`${classes.mainBtn} ${classes.btn25}`}>One</Button>
                    <Button fullWidth={true} className={`${classes.mainBtn} ${classes.btn50}`}>Two</Button>
                    <Button fullWidth={true} className={`${classes.mainBtn} ${classes.btn25}`}>Three</Button>
                    <Button fullWidth={true} className={`${classes.mainBtn} ${classes.btn25} ${classes.topBorder} ${classes.rightBorder}`}>Three</Button>
                    <Button fullWidth={true} className={`${classes.mainBtn} ${classes.btn25}`}>Three</Button>
                    <Button fullWidth={true} className={`${classes.mainBtn} ${classes.btn25}`}>Three</Button>
                    <Button fullWidth={true} className={`${classes.mainBtn} ${classes.btn25} ${classes.topBorder}`}>Three</Button>
                </Container>
            </ClickAwayListener>
        </ThemeProvider>
    );
}

export default withWidth()(HeaderV3);