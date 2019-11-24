import React from "react";
import Button from "@material-ui/core/Button";
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import {useDispatch, useSelector} from "react-redux";
import {hideMobileMenuAction, showMobileMenuAction} from "../../../store/actions/header";
import useStyles from "./useStyles";

export default function DropDownMenu() {

    const classes = useStyles();
    const {showMobileMenu}  = useSelector(state => state.header);

    const dispatch = useDispatch();
    const showMenu = () => {
        if (showMobileMenu){
            dispatch(hideMobileMenuAction())
        } else {
            dispatch(showMobileMenuAction());
        }
    };

    return (
        <React.Fragment>
            <Button onClick={showMenu}
                    className={classes.btn}>
                <CloseIcon className={showMobileMenu ? '' : classes.hide}/>
                <MenuIcon className={showMobileMenu ? classes.hide : ''}/>
            </Button>
        </React.Fragment>
    );
}