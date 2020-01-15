import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import {useDispatch, useSelector} from "react-redux";
import {closeModalAction} from "../../../../store/actions/modal";
import Registration from "../../../RegistrationForm";
import Login from "../../../LoginForm";
import NameLoginUpdateForm from '../../../UpdateForms/NameLoginUpdateForm'
import EmailUpdateForm from '../../../UpdateForms/NameLoginUpdateForm'
import PasswordUpdateForm from '../../../UpdateForms/NameLoginUpdateForm'
import TelephoneUpdateForm from '../../../UpdateForms/NameLoginUpdateForm'
import {Dialog} from "@material-ui/core";
import useStyles from "./useStyles";

export default function TransitionsModal() {
    const classes = useStyles();
    const {open, login, registration, firstName, lastName, loginUpdate, email, password, telephone}  = useSelector(state => state.modal);
    const dispatch = useDispatch();

    const stateObj = useSelector(state => state.modal);
    let elName = '';
    for (const field in stateObj) {
        if (stateObj[field] !== '' && field !== 'open') {
            elName = stateObj[field];
        }
    }

    const elForShow = () => {
        switch (elName) {
            case 'login' : return <Login />;
            case 'registration' : return <Registration />;
            case 'firstName' : return <NameLoginUpdateForm typeForm={firstName} />;
            case 'lastName' : return <NameLoginUpdateForm typeForm={lastName} />;
            case 'loginUpdate' : return <NameLoginUpdateForm typeForm={loginUpdate} />;
            case 'email' : return <EmailUpdateForm />;
            case 'password' : return <PasswordUpdateForm />;
            case 'telephone' : return <TelephoneUpdateForm />;
        }
    };

    return (
            <Dialog
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                scroll='paper'
                maxWidth='lg'
                open={open}
                onClose={() => dispatch(closeModalAction())}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        {elForShow()}
                    </div>
                </Fade>
            </Dialog>
    );
}
