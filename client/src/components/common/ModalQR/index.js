import React, {useState} from "react";

import { Dialog, DialogContent, DialogTitle, Box, Tooltip } from '@material-ui/core';

import useStyles from "./useStyles";


export default props => {

    // const { modalIsOpen, closeModal } = props;

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const handleClickOpen = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false)
    };

    const classes = useStyles();

    return (
        <div>
            <Tooltip title="Scan QR-code">
                <Box
                    style={{backgroundImage:`url(img/qr-code.png)`}}
                    className={classes.btnQR}
                    onClick={handleClickOpen}
                />
            </Tooltip>
            <Dialog
                open={modalIsOpen}
                onClose={() => {closeModal()}}
                aria-labelledby="alert-dialog-modalQRtitle"
                aria-describedby="alert-dialog-modalQRdescription"
            >
                <DialogTitle id="alert-dialog-title" className={classes.title}>{"https://twear.herokuapp.com/"}</DialogTitle>
                <DialogContent>
                    <Box style={{backgroundImage:`url(img/qr-code.png)`}}className={classes.imageQR}/>>
                </DialogContent>
            </Dialog>
        </div>
    );
};
