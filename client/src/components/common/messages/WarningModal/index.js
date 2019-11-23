import React, {useState, useEffect} from 'react';
import useStyles from './useStyles';
import Modal from '@material-ui/core/Modal';

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
    const {modalIsOpen = false, modalText = {title: '', description: '' }, closeFunction = ()=>{}} = props;
    const [modalStyle] = useState(getModalStyle);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {setIsOpen(modalIsOpen)},[modalIsOpen]);

    const handleClose = () => closeFunction();

    return (
        <>
            <div>
                <Modal
                    aria-labelledby="simple-modal-warning"
                    aria-describedby="simple-modal-warning-message"
                    open={isOpen}
                    onClose={handleClose}
                >
                    <div style={modalStyle} className={classes.paper}>
                        <h2 id="simple-modal-warning">{modalText.title}</h2>
                        <p id="simple-modal-warning-message">{modalText.description}</p>
                    </div>
                </Modal>
            </div>
        </>
    );
}