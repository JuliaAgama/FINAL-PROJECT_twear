import React, {useState} from "react";

import { Dialog, DialogContent, DialogTitle, DialogActions, Box, Tooltip, useMediaQuery, Grid, Button } from '@material-ui/core';

import { useTheme } from '@material-ui/core/styles';

import useStyles from "./useStyles";


export default props => {

    // const { modalIsOpen, closeModal } = props;

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.up('xs'));

    const handleClickOpen = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false)
    };

    const classes = useStyles();

    return (
        <div>
            <Tooltip title="Meet Team">
                <Box
                    style={{backgroundImage:`url(img/team-code.png)`}}
                    className={classes.btnQR}
                    onClick={handleClickOpen}
                />
            </Tooltip>
            <Dialog
                fullScreen={fullScreen}
                open={modalIsOpen}
                onClose={() => {closeModal()}}
                aria-labelledby="alert-dialog-modalQRtitle"
                aria-describedby="alert-dialog-modalQRdescription"
            >
                <DialogTitle id="alert-dialog-title" className={classes.title}>{"Collaborators:"}</DialogTitle>

                <DialogContent>
                    <Grid container className={classes.personContainer}>
                        <Grid item xs={4} md={3} lg={2}>
                            <Box fontSize='body1.fontSize'>Julia Verchyonova</Box>
                            <Box style={{backgroundImage:`url(team/jverchyonova.jpg)`}}className={classes.photo}/>
                        </Grid>
                    </Grid>
                </DialogContent>

                <DialogActions>
                    <Button autoFocus onClick={closeModal} color="primary">
                        Close
                    </Button>
                </DialogActions>

            </Dialog>
        </div>
    );
};
