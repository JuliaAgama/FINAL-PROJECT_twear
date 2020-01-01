import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Login from "../../LoginForm";
import {useDispatch, useSelector} from "react-redux";
import {closeModalAction} from "../../../store/actions/modal";
import Registration from "../../RegistrationForm";
import {Dialog} from "@material-ui/core";
import useStyles from "./useStyles";

export default function TransitionsModal() {
    const classes = useStyles();
    const {open, login}  = useSelector(state => state.modal);
    const dispatch = useDispatch();

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
                        {login ? <Login/> : <Registration/>}
                    </div>
                </Fade>
            </Dialog>
    );
}
