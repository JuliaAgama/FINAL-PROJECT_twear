import React, {useEffect, useState} from "react";
import Button from "@material-ui/core/Button";
import {useDispatch, useSelector} from "react-redux";
import {showMenCategoriesAction, showWomenCategoriesAction} from "../../../store/actions/header";
import useStyles from "./useStyles";
import {getAllCategories} from "../../../store/actions/categories";

export default function CategoriesMenu(props) {
    const classes = useStyles();
    const {categories, loaded}  = useSelector(state => state.categories);
    const dispatch = useDispatch();
    useEffect(dispatch(getAllCategories()));
    console.log(categories);
    // const clickHandler = () => {
    //     if (props.isMen){
    //         dispatch(showMenCategoriesAction());
    //     } else {
    //         dispatch(showWomenCategoriesAction());
    //     }
    // };

    return (
        <React.Fragment>
            <Button className={props.border ?`${classes.btn} ${classes.btnBorder}`: classes.btn}
                    // onClick={clickHandler}
            >
                {props.title}
            </Button>
        </React.Fragment>
    );
}