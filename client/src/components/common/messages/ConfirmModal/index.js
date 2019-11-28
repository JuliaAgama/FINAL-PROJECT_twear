import React, {useState, useEffect} from 'react';

import { Grid, Modal } from '@material-ui/core';

import useStyles from './useStyles';

const rand = () => (0);
// const rand = () => (Math.round(Math.random() * 20) - 10);

const getModalStyle = () => {
    const top = 50 + rand();
    const left = 50 + rand();
    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}


export default props => {
    const classes = useStyles();
    const {modalIsOpen = false, modalText = {title: '', description: '' }, doFunction = () => {}, closeFunction = ()=>{}} = props;
    const [modalStyle] = useState(getModalStyle);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {setIsOpen(modalIsOpen)},[modalIsOpen]);

    const handleClose = () => closeFunction();

    return (
        <>
            <div>
                <Modal
                    aria-labelledby="simple-modal-confirm"
                    aria-describedby="simple-modal-confirm-message"
                    open={isOpen}
                    onClose={handleClose}
                >
                    <div style={modalStyle} className={classes.paper}>
                        <h2 id="simple-modal-confirm">{modalText.title}</h2>
                        <p id="simple-modal-confirm-message">{modalText.description}</p>
                        <Grid container>
                            <Grid item xs={6}>
                                <button type="button" onClick={doFunction}>{modalText.buttonYes}</button>
                            </Grid>
                            <Grid item xs={6}>
                                <button type="button" onClick={handleClose}>{modalText.buttonNo}</button>
                            </Grid>
                        </Grid>
                    </div>
                </Modal>
            </div>
        </>
    );
};
