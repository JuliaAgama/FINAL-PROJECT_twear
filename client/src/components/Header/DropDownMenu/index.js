import React from "react";
import Button from "@material-ui/core/Button";
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import {useDispatch, useSelector} from "react-redux";
import {headerCloseAction, hideMobileMenuAction, showMobileMenuAction} from "../../../store/actions/header";
import useStyles from "./useStyles";

export default function DropDownMenu() {

    const classes = useStyles();
    const showMobileMenu  = useSelector(state => state.header.showMobileMenu);

    const dispatch = useDispatch();
    const showMenu = (event) => {
        if (!showMobileMenu) {
            dispatch(showMobileMenuAction());
        } else {
            dispatch(headerCloseAction())
        }
    };

    return (
        <React.Fragment>
            <Button onClick={showMenu}
                    className={classes.btn}
                    id='dropMenu'>
                <CloseIcon id='dropMenuIcon' className={showMobileMenu ? '' : classes.hide}/>
                <MenuIcon className={showMobileMenu ? classes.hide : ''}/>
            </Button>
        </React.Fragment>
    );
}