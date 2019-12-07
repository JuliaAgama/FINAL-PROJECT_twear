import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    hideDesktopCategoriesMenuAction,
    showMenCategoriesAction,
    showWomenCategoriesAction
} from "../../../store/actions/header";
import useStyles from "./useStyles";
import {Container} from "@material-ui/core";

export default function CategoriesMenu(props) {
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
            <Container className={props.border ? `${classes.container} ${classes.containerBorder}`: classes.container}
                    onClick={clickHandler}
            >
                {props.title}
            </Container>
        </React.Fragment>
    );
}