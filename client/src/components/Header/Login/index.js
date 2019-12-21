import React, {useEffect, useState} from "react";
import PersonIcon from '@material-ui/icons/Person';
import {Link} from "react-router-dom";
import {openLoginModalAction} from "../../../store/actions/modal";
import {useDispatch, useSelector} from "react-redux";
import useStyles from "./useStyles";
import {getCustomerAction, logoutAction} from "../../../store/actions/customer";
import {Container} from "@material-ui/core";


export default function Login() {

    const classes = useStyles();
    const dispatch = useDispatch();
    const customer = useSelector(state => state.customers.customer);
    const [isVisible, setVisibility] = useState(false);
    useEffect(() => {dispatch(getCustomerAction())},[dispatch]);

    const clickHandler = () => {
        setVisibility(!isVisible);
    };

    const logOutHandler = () => {
        setVisibility(!isVisible);
        dispatch(logoutAction());
    };

    return (
        <React.Fragment>
            <Container className={classes.container}
                    onClick={customer.firstName ? () => clickHandler() : () => dispatch(openLoginModalAction())}>
                {customer.firstName ?
                    <div className={classes.link}>
                        <PersonIcon/>
                        <span className={classes.name}>My Account</span>
                    </div>
                    :
                    <span className={classes.span}>Log In</span>
                }
            </Container>
            {isVisible ?
                <Container maxWidth={false}  className={classes.subMenu}>
                    <Container className={`${classes.subMenuItem} ${classes.borderRB}`}>
                        <Link to='/#' className={classes.linkContainer}>Personal Cabinet</Link>
                    </Container>
                    <Container className={classes.subMenuItem}>
                        {customer.isAdmin ? <Link to={'/admin'} className={classes.linkContainer}>Admin Page</Link> : ''}
                    </Container>
                    <Container className={`${classes.subMenuItem} ${classes.borderLT}`}>
                        <Link to={'/'} className={classes.linkContainer} onClick={logOutHandler}>Log Out</Link>
                    </Container>
                </Container> : ""
            }
        </React.Fragment>
    );
}