import React from 'react';
import {useDispatch, useSelector} from "react-redux";

import { Dialog, Backdrop, Fade } from "@material-ui/core";

import useStyles from "./useStyles";

import {closeModalAction} from "../../../store/actions/modal";

import Login from "../../LoginForm";
import Registration from "../../RegistrationForm";


export default function TransitionsModal() {
    const {open, login}  = useSelector(state => state.modal);
    const dispatch = useDispatch();

    const classes = useStyles();

    return (
        <div>
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
                        {login ? <Login/> : <Registration/>}
                    </div>
                </Fade>
            </Dialog>
        </div>
    );
}
