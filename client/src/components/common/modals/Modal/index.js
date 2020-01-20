import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import {useDispatch, useSelector} from "react-redux";
import {closeModalAction} from "../../../../store/actions/modal";
import Registration from "../../../RegistrationForm";
import Login from "../../../LoginForm";
import NameLoginUpdateForm from '../../../UpdateForms/NameLoginUpdateForm'
import EmailUpdateForm from '../../../UpdateForms/EmailUpdateForm'
import PasswordUpdateForm from '../../../UpdateForms/PasswordUpdateForm'
import TelephoneUpdateForm from '../../../UpdateForms/TelephoneUpdateForm'
import NewAddressForm from '../../../UpdateForms/NewAddressForm'
import RestorePassword from '../../../UpdateForms/RestorePassword'
import {Dialog} from "@material-ui/core";
import useStyles from "./useStyles";

export default function TransitionsModal() {
    const classes = useStyles();
    const {open, name, loginUpdate}  = useSelector(state => state.modal);
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
            case 'name' : return <NameLoginUpdateForm typeForm={name} />;
            case 'loginUpdate' : return <NameLoginUpdateForm typeForm={loginUpdate} />;
            case 'email' : return <EmailUpdateForm />;
            case 'password' : return <PasswordUpdateForm />;
            case 'telephone' : return <TelephoneUpdateForm />;
            case 'address' : return <NewAddressForm />;
            case 'restorePassword' : return <RestorePassword />;
            default : return
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
