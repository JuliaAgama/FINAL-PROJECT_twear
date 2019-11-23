import useStyles from "./useStyles";
import React from "react";
import Button from "@material-ui/core/Button";
import {openLoginModalAction} from "../../../store/actions/modal";
import {useDispatch} from "react-redux";


export default function Login() {

    const classes = useStyles();
    const dispatch = useDispatch();

    return (
        <React.Fragment>
            <Button className={classes.btn}
                    onClick={() => dispatch(openLoginModalAction())}>
                Log In
            </Button>
        </React.Fragment>
    );
}