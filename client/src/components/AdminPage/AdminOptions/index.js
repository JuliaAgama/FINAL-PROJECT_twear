import React, { useState, useEffect, useRef} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';

import * as colorsActions from '../../../store/actions/colors';
import * as sizeTypesActions from '../../../store/actions/sizeTypes';
import * as sizesActions from '../../../store/actions/sizes';

import { Typography, Box, Grid, List, ListItem, Divider, Collapse, IconButton, withWidth } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import useStyles from './useStyles';

import Colors from './Colors';
import SizeTypes from './SizeTypes';
import ErrorModal from '../../common/messages/ErrorModal';
import Notification from '../../common/messages/Notification';


export default withWidth()(() => {

    const dispatch = useDispatch();

    const getColorsList = () => {
        colorsActions.getAllColors()(dispatch);
    };
    const getSizeTypesList = () => {
        sizeTypesActions.getAllSizeTypes()(dispatch);
    };
    const getSizesList = () => {
        sizesActions.getAllSizes()(dispatch);
    };

    useEffect(() => {
        getColorsList();
        getSizeTypesList();
        getSizesList();
    }, []);

    const optionsList = [{name: 'colors'}, {name: 'sizes'}];

    const [expanded, setExpanded] = useState({colors: false, sizes: false});
    const handleExpandClick = itemName => setExpanded({...expanded, [itemName]: (expanded[itemName] === true ? false : true)});

    //server errors catching:
    const colorsError = useSelector(state => state.colors.error);
    const sizeTypesError = useSelector(state => state.sizeTypes.error);
    const sizesError = useSelector(state => state.sizes.error);

    const [errorIsOpen, setErrorIsOpen] = useState(false);

    useEffect(() => {
        if(colorsError || sizeTypesError || sizesError) {setErrorIsOpen(true)}
    // },[]
    },[colorsError, sizeTypesError, sizesError]
    );
    const errorModalText = {
        title: `NO RESPONSE FROM SERVER`,
        description: `Request to server failed`,
        button: 'TRY AGAIN'
    };
    const closeErrorModal = () => setErrorIsOpen(false);


    // notification after saving or deleting item:
    const ref = useRef(null);
    const timeout = 2000;
    const handleNotification = (itemName, actionDescription) => {
        ref.current(` ${itemName.toUpperCase()} has been ${actionDescription}.`);
    };

    const classes = useStyles();

    return (
        <Typography component="div" variant="body1">
            <Box color="secondary.main" p={3} pl={6} pr={6} ml={2} mr={2} borderBottom={1} textAlign="center" fontSize="h6.fontSize">OPTIONS SETS</Box>

            <Box className={classes.paper}>
                <List >
                    <Divider />
                    {optionsList.map((el, ind) => (
                        <Box key={ind}>
                            <ListItem >
                                <Grid container className={classes.container}>
                                    <Grid item> {el.name.toUpperCase()} </Grid>
                                    <Grid item>
                                        <IconButton
                                            className={clsx(classes.expand, {[classes.expandOpen]: expanded[el.name]})}
                                            onClick={() => handleExpandClick(el.name)}
                                            aria-expanded={expanded[el.name]}
                                            color="secondary"
                                            aria-label="expandDown"
                                        >
                                            <ExpandMoreIcon />
                                        </IconButton>
                                    </Grid>
                                </Grid>
                            </ListItem>
                            <Collapse in={expanded[el.name]} timeout="auto" unmountOnExit>
                                <Box className={classes.expanded}>
                                    {el.name === 'colors' ?
                                        <Colors handleNotification={handleNotification}/> : <></>
                                    }
                                    {el.name === 'sizes' ?
                                        <SizeTypes handleNotification={handleNotification}/> : <></>
                                    }
                                </Box>
                            </Collapse>
                            <Divider />
                        </Box>
                    ))}
                </List>
            </Box>
            <ErrorModal
                modalIsOpen={errorIsOpen}
                modalText={errorModalText}
                doFunction={() => {closeErrorModal(); getColorsList(); getSizeTypesList(); getSizesList();}}
                closeFunction={closeErrorModal}
            />
            <Notification timeout={timeout} children={add => (ref.current = add)} />

        </Typography>
    )
});
