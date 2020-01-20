import React, {useState} from "react";

import { Dialog, DialogContent, DialogTitle, DialogActions, Box, Tooltip, useMediaQuery, Grid, List, ListItem, Avatar, Button } from '@material-ui/core';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

import { useTheme } from '@material-ui/core/styles';

import useStyles from "./useStyles";

const collaborators = [
    {
        name: 'Julia Verchyonova',
        imgUrl: 'team/jverchyonova.jpg',
        tasks: [
            'App architecture',
            'Environment setting',
            'App deployment (Heroku, Git, Cloudinary)',
            'Database setting',
            'Backend controllers and routes',
            'Frontend REST API services',
            'Redux settings, actions, reducers, persist',
            'Admin panel: all pages for catalogue management',
            'Images upload to Cloudinary',
            'Common components: buttons, modals, messages, sliders, inputs',
            'Footer',
            'Consumer cart component and all functionality',
            'Checkout page',
            'Code review and troubleshooting on all components'
        ],
    },
    {
        name: 'Olexandr Shtuka',
        imgUrl: 'team/oshtuka.jpg',
        tasks: [
            'Authentification routes and logics',
            'Login & Registration',
            'Header',
            'Main page',
            'Topcategory page',
            'Category page and filters',
            'Products gallery and card',
            'Product page',
            'Currency options recalculation',
            'Consumer Search',
            'Personal CabinetPage',
            'Admin Panel: settings for home page',
        ],
    },
    // {
    //     name: 'Olexandr Shaporda',
    //     imgUrl: 'team/oshaporda.jpg',
    //     tasks: [
    //         'Footer',
    //         'Topcategory page',
    //         'Main page TopCats section for desktop',
    //     ],
    // },
];


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
                    className={classes.btnTeam}
                    onClick={handleClickOpen}
                />
            </Tooltip>
            <Dialog
                fullScreen={fullScreen}
                open={modalIsOpen}
                onClose={() => {closeModal()}}
                aria-labelledby="team"
                aria-describedby="collaborators"
            >
                <DialogTitle id="team" className={classes.title}>{"Collaborators:"}</DialogTitle>

                <DialogContent>
                    <Grid container className={classes.container}>
                        {collaborators.map(item => (
                            <Grid container item xs={12} md={6} className={classes.personContainer} direction="column" alignItems='center' key={Math.random()}>
                            {/* <Grid container item xs={12} md={4} className={classes.personContainer} direction="column" alignItems='center' key={Math.random()}> */}
                                <Grid item container alignItems='center' className={classes.personTitle}>
                                    <Grid item>
                                        <Avatar alt={item.name} src={item.imgUrl} className={classes.avatar}></Avatar>
                                    </Grid>
                                    <Grid item>
                                        <Box fontSize='body1.fontSize'>{item.name}</Box>
                                    </Grid>
                                </Grid>
                                <Grid item container direction="column" className={classes.tasksContainer}>
                                    <List>
                                        {item.tasks.map(el => (
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
