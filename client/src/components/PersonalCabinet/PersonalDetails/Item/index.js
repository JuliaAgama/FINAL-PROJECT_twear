import React from "react";
import {Container} from "@material-ui/core";
import useStyles from "./useStyles";
import Button from '@material-ui/core/Button';
import {useDispatch} from "react-redux";
import {openUpdateFirstNameAction,
        openUpdateLastNameAction,
        openUpdateLoginAction,
        openUpdateEmailAction,
        openUpdatePasswordAction,
        openUpdateTelephoneAction} from '../../../../store/actions/modal'


export default function Item(props) {

    const classes = useStyles();
    const dispatch = useDispatch();
    let {title, titleValue} = props;
    if (title === 'password') titleValue = 'XXXXXXXXX';

    const clickHandler = event => {
        const actionType = event.target.innerText.split(' ')[2];
        switch (actionType) {
            case 'FIRSTNAME' : {
                dispatch(openUpdateFirstNameAction('firstName'));
                return;
            }
            case 'LASTNAME' : {
                dispatch(openUpdateLastNameAction('lastName'));
                return;
            }
            case 'LOGIN' : {
                dispatch(openUpdateLoginAction('loginUpdate'));
                return;
            }
            case 'EMAIL' : {
                dispatch(openUpdateEmailAction('email'));
                return;
            }
            case 'PASSWORD' : {
                dispatch(openUpdatePasswordAction('password'));
                return;
            }
            case 'TELEPHONE' : {
                dispatch(openUpdateTelephoneAction('telephone'));
                return;
            }
        }
    };

    return (
        <React.Fragment>
                <Container className={classes.itemContainer}>
                    <p>{title}: {titleValue}</p>
                    <Button variant="outlined" onClick={clickHandler} className={classes.btn}>Change your {title}</Button>
                </Container>
        </React.Fragment>
    );
}