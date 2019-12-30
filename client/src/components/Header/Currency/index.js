import React, {useState} from "react";

import { ClickAwayListener, Container } from "@material-ui/core/";
import useStyles from "./useStyles";

import ModalQR from '../../common/ModalQR';

export default () => {

    const classes = useStyles();
    const [isVisible, setVisibility] = useState(false);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const handleClickAway = () => setVisibility(false);

    const handleClickOpen = () => {
        setVisibility(true)
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false)
    };


    return (
        <React.Fragment>
            <ClickAwayListener onClickAway={handleClickAway}>
                <Container className={classes.container}
                    onClick={handleClickOpen}>
                    {!isVisible ? 'Currency' :
                        (<>
                            <span  data-currency='USA'>USA</span>
                            <span  data-currency='EUR'>EUR</span>
                            <span  data-currency='UA'>UA</span>
                        </>)
                    }
                </Container>
            </ClickAwayListener>
            <ModalQR
                modalIsOpen={modalIsOpen}
                closeModal={closeModal}
            />
        </React.Fragment>
    );
};
