import React, {useState, useEffect} from 'react';
import useStyles from './useStyles';
import Modal from '@material-ui/core/Modal';

const rand = () => (Math.round(Math.random() * 20) - 10);

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
    const {openConfirm, modalText, doFunction, closeFunction} = props;
    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);

    useEffect(() => {setOpen(openConfirm)},[openConfirm]);

    const handleClose = () => closeFunction();

    return (
        <>
            <div>
                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={open}
                    onClose={handleClose}
                >
                    <div style={modalStyle} className={classes.paper}>
                        <h2 id="simple-modal-title">{modalText.title}</h2>
                        <p id="simple-modal-description">{modalText.description}</p>
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
}