import useStyles from "./useStyles";
import React from "react";
import {Container} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {useDispatch} from "react-redux";
import {openModalAction} from "../../../../store/actions/modal";

export default function ThirdColumn() {

    const classes = useStyles();
    const dispatch = useDispatch();

    return (
        <React.Fragment>
            <Container maxWidth={false} className={classes.container}>
                <Button className={classes.btn}>Shopping Bag</Button>
                <Button onClick={() => dispatch(openModalAction())} className={classes.btn}>Login</Button>
            </Container>
        </React.Fragment>
    );
}