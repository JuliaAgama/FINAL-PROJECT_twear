import React from "react";

import { Dialog, DialogContent, DialogTitle, Box } from '@material-ui/core';

import useStyles from "./useStyles";


export default props => {

    const classes = useStyles();

    return (
        <div>
            <Dialog
                open={props.modalIsOpen}
                onClose={() => {props.closeModal()}}
                aria-labelledby="alert-dialog-modalQRtitle"
                aria-describedby="alert-dialog-modalQRdescription"
            >
                <DialogTitle id="alert-dialog-title" className={classes.title}>{"https://twear.herokuapp.com/"}</DialogTitle>
                <DialogContent>
                    <Box style={{backgroundImage:`url(img/qr-code.png)`}}className={classes.imageQR}></Box>
                </DialogContent>
            </Dialog>
        </div>
    );
};
