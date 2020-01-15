import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    hideDesktopCategoriesMenuAction,
    showMenCategoriesAction,
    showWomenCategoriesAction
} from "../../../store/actions/header";

import {Box} from "@material-ui/core";
import useStyles from "./useStyles";


export default props => {
    const show  = useSelector(state => state.header.show);
    const dispatch = useDispatch();

    const clickHandler = () => {
        if (props.isMen){
            !show ? dispatch(showMenCategoriesAction()) : dispatch(hideDesktopCategoriesMenuAction())
        } else {
            !show ? dispatch(showWomenCategoriesAction()) : dispatch(hideDesktopCategoriesMenuAction())
        }
    };

    const classes = useStyles();

    return (
        <React.Fragment>
            <Box className={classes.genderContainer} onClick={clickHandler}>
                {props.title}
            </Box>
        </React.Fragment>
    );
};
