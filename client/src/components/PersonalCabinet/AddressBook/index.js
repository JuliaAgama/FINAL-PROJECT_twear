import React from "react";
import {Container} from "@material-ui/core";
import useStyles from "./useStyles";
import {useDispatch, useSelector} from "react-redux";
import Button from "@material-ui/core/Button";
import {openAddNewAddress} from "../../../store/actions/modal";

export default function AddressBook() {

    const classes = useStyles();
    const dispatch = useDispatch();
    const {customer}  = useSelector(state => state.customers);
    const clickHandler = () => dispatch(openAddNewAddress('address'));

    return (
        <React.Fragment>
            <Container maxWidth={false} className={classes.container}>
                <Button variant="outlined" onClick={clickHandler} className={classes.btn}>ADD NEW ADDRESS</Button>
            </Container>
        </React.Fragment>
    );
}