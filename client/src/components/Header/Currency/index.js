import React, {useState} from "react";

import { ClickAwayListener, Container } from "@material-ui/core/";
import useStyles from "./useStyles";
import {useDispatch} from "react-redux";
import {changeCurrency} from "../../../store/actions/currency";

// import ModalQR from '../../common/ModalQR';

export default () => {

    const classes = useStyles();
    const dispatch = useDispatch();
    const [isVisible, setVisibility] = useState(false);
    // const [modalIsOpen, setModalIsOpen] = useState(false);
    const handleClickAway = () => setVisibility(false);

    const handleClickOpen = () => {
        setVisibility(true)
        // setModalIsOpen(true);
    };

    const clickHandler = event => {
        dispatch(changeCurrency(event.target.textContent))
    };

    // const closeModal = () => {
    //     setModalIsOpen(false)
    // };


    return (
        <React.Fragment>
            <ClickAwayListener onClickAway={handleClickAway}>
                <Container className={classes.container}
                    onClick={handleClickOpen}>
                    {!isVisible ? 'Currency' :
                        (<>
                            <span  data-currency='USA' onClick={clickHandler}>USA</span>
                            <span  data-currency='EUR' onClick={clickHandler}>EUR</span>
                            <span  data-currency='UA' onClick={clickHandler}>UA</span>
                        </>)
                    }
                </Container>
            </ClickAwayListener>
            {/* <ModalQR
                modalIsOpen={modalIsOpen}
                closeModal={closeModal}
            /> */}
        </React.Fragment>
    );
};
