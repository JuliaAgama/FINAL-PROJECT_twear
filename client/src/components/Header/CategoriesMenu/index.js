import React from "react";
import {useDispatch} from "react-redux";
import {
    showMenCategoriesAction,
    showWomenCategoriesAction
} from "../../../store/actions/header";

import {Box} from "@material-ui/core";
import useStyles from "./useStyles";


export default props => {
    const dispatch = useDispatch();

    const clickHandler = () => {
        if (props.isMen){
            dispatch(showMenCategoriesAction())
        } else {
            dispatch(showWomenCategoriesAction())
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