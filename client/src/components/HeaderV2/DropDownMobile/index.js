import useStyles from "./useStyles";
import React from "react";
import Grid from "@material-ui/core/Grid";
import {Button, Container} from "@material-ui/core";
import {useSelector} from "react-redux";
// import {useSelector} from "react-redux";

// import { useDispatch } from 'react-redux';
// import {hideCategoriesMenuAction} from '../../../../store/actions/categoriesMenu';
// import ClickAwayListener from "@material-ui/core/ClickAwayListener";


export default function DropDownMobile() {

    const {show}  = useSelector(state => state.header);

    const classes = useStyles();
    return (
        <React.Fragment>
                 {/*<ClickAwayListener onClickAway={handleClickAway}>*/}
                     <Container maxWidth={false} className={show ? classes.container : classes.hide}>
                         <Button className={classes.btn}>Women</Button>
                         <Button className={classes.btn}>Men</Button>
                         <Button className={classes.btn}>Currency</Button>
                         <Button className={classes.btn}>Login</Button>
                     </Container>
                {/*</ClickAwayListener>*/}
        </React.Fragment>
);
}