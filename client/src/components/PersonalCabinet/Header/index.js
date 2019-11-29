import React from "react";
import {Container} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {logoutAction} from "../../../store/actions/customer";
import useStyles from "./useStyles";



export default function PersonalCabinet() {

    const classes = useStyles();
    const dispatch = useDispatch();
    const {customer}  = useSelector(state => state.customers);

    return (
        <React.Fragment>
            <Container maxWidth={false} className={classes.mainContainer}>
                <p>WELCOME {customer.firstName}</p>
                <div className={classes.container}>
                    <p className={classes.link}>ORDERS</p>
                    <p className={classes.link}>WISH LIST</p>
                    <p className={classes.link}>ADDRESS BOOK</p>
                    <p className={classes.link}>PERSONAL DETAILS</p>
                    {customer.isAdmin ? <Link to={'/admin'}><p className={classes.link}>ADMIN PAGE</p></Link> : ''}
                </div>
                <Link to={'/'} onClick={() => {dispatch(logoutAction())}}><p className={classes.link}>LOG OUT</p></Link>
            </Container>
        </React.Fragment>
    );
}