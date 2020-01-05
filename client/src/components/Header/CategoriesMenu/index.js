import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    hideDesktopCategoriesMenuAction,
    showMenCategoriesAction,
    showWomenCategoriesAction
} from "../../../store/actions/header";

import {Container, Box} from "@material-ui/core";
import useStyles from "./useStyles";


export default props => {
    const classes = useStyles();
    const show  = useSelector(state => state.header.show);
    const dispatch = useDispatch();

    const clickHandler = () => {
        if (props.isMen){
            if (!show){
                dispatch(showMenCategoriesAction());
            } else {
                dispatch(hideDesktopCategoriesMenuAction());
            }
        } else {
            if (!show){
                dispatch(showWomenCategoriesAction());
            } else {
                dispatch(hideDesktopCategoriesMenuAction());
            }

        }
    };

    return (
        <React.Fragment>
            <Box className={classes.genderContainer}
            //<Box className={props.border ? `${classes.container} ${classes.containerBorder}`: classes.container}
            //<Container className={props.border ? `${classes.container} ${classes.containerBorder}`: classes.container}
                    onClick={clickHandler}
            >
                {props.title}
            {/* </Container> */}
            </Box>
        </React.Fragment>
    );
};
