import React, {useState, useEffect} from 'react';

import Modal from '@material-ui/core/Modal';

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
};


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
                    aria-labelledby="simple-modal-error"
                    aria-describedby="simple-modal-error-message"
                    open={isOpen}
                    onClose={handleClose}
                >
                    <div style={modalStyle} className={classes.paper}>
                        <h2 id="simple-modal-error">{modalText.title}</h2>
                        <p id="simple-modal-error-message">{modalText.description}</p>
                        <button type="button"
                            onClick={doFunction}
                            >
                            {modalText.button}
                        </button>
                    </div>
                </Modal>
            </div>
        </>
    );
};
