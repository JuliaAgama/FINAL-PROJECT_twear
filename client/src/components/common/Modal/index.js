import React from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import useStyles from "./useStyles";
// import Login from "../../LoginForm";
import {useDispatch, useSelector} from "react-redux";
import {closeModalAction} from "../../../store/actions/modal";
import Registration from "../../RegistrationForm";


export default function TransitionsModal() {
    const classes = useStyles();
    const {open}  = useSelector(state => state.modal);
    const dispatch = useDispatch();

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
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
                        {/*<Login/>*/}
                        <Registration/>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}