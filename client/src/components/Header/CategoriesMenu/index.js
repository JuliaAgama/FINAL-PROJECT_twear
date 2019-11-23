import useStyles from "./useStyles";
import React from "react";
import Button from "@material-ui/core/Button";
import {useDispatch} from "react-redux";
import {showMenCategoriesAction, showWomenCategoriesAction} from "../../../store/actions/header";

export default function CategoriesMenu(props) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const clickHandler = () => {
        if (props.isMen){
            dispatch(showMenCategoriesAction());
        } else {
            dispatch(showWomenCategoriesAction());
        }
    };

    return (
        <React.Fragment>
            <Button className={props.border ?`${classes.btn} ${classes.btnBorder}`: classes.btn}
                    onClick={clickHandler}
            >
                {props.title}
            </Button>
        </React.Fragment>
    );
}