import React, {useState} from "react";

import { Dialog, DialogContent, DialogTitle, DialogActions, Box, Tooltip, useMediaQuery, Grid, List, ListItem, Avatar, Button } from '@material-ui/core';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

import { useTheme } from '@material-ui/core/styles';

import useStyles from "./useStyles";

const collaborators = [
    {
        name: '',
        imgUrl: '',
        techs: [
            'React JS: Redux, Redux Form, Redux Persist, Hooks;',
            'React styles & libraries: axios, lodash, material-ui; react-sLick, react-spring, react-stripe; see more in package.json;',
            'Backend: Node.js;',
            'Database MongoDB: mlab/MongoDB Cloud;',
            'Cloud storage: Cloudinary;',
            'Deployment server: Heroku server;',
        ],
    },
];


export default props => {

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
            <Tooltip title="Technology Stack">
                <Box
                    style={{backgroundImage:`url(img/team-code.png)`}}
                    className={classes.btnTeam}
                    onClick={handleClickOpen}
                />
            </Tooltip>
            <Dialog
                fullScreen={fullScreen}
                open={modalIsOpen}
                onClose={() => {closeModal()}}
                aria-labelledby="team"
                aria-describedby="technologies"
            >
                <DialogTitle id="team" className={classes.title}>{"Stack of technologies:"}</DialogTitle>

                <DialogContent>
                    <Grid container className={classes.container}>
                        {collaborators.map(item => (
                            <Grid container item xs={12} md={6} className={classes.personContainer} direction="column" alignItems='center' key={Math.random()}>
                                <Grid item container direction="column" className={classes.tasksContainer}>
                                    <List>
                                        {item.techs.map(el => (
                                            <Grid item key={Math.random()}>
                                                <ListItem className={classes.listItem}><span>
                                                    <KeyboardArrowRightIcon/>
                                                </span>{el}</ListItem>
                                            </Grid>
                                        ))}
                                    </List>
                                </Grid>
                            </Grid>
                            ))}
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
