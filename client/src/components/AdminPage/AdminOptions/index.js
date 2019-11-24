import React, { useState, useEffect, useRef} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as colorsActions from '../../../store/actions/colors';
import * as sizeTypesActions from '../../../store/actions/sizeTypes';
import * as sizesActions from '../../../store/actions/sizes';

import clsx from 'clsx';
import { Hidden } from '@material-ui/core';
import withWidth from '@material-ui/core/withWidth';

import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Collapse from '@material-ui/core/Collapse';

import Divider from '@material-ui/core/Divider';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton';
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
        ref.current(`Category ${itemName.toUpperCase()} has been ${actionDescription}.`);
    };

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.header}>
                <Hidden >
                    <h3>OPTIONS SETS</h3>
                </Hidden>
            </div>
            <Grid container className={classes.paper}>
                <List className={classes.listing}>
                    <Divider />
                    {optionsList.map((el, ind) => (
                        <div key={ind}>
                            <ListItem >
                                <Grid container className={classes.paper}>
                                    <Grid item xs={2} ></Grid>
                                    <Grid item xs={8}> {el.name.toUpperCase()} </Grid>
                                    <Grid item xs={1}>
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
                                    <Grid item xs={1}></Grid>
                                </Grid>

                            </ListItem>
                            <Collapse in={expanded[el.name]} timeout="auto" unmountOnExit>
                                <div className={classes.expanded}>
                                    {el.name === 'colors' ?
                                        <Colors handleNotification={handleNotification}/> : <></>
                                    }
                                    {el.name === 'sizes' ?
                                        <SizeTypes handleNotification={handleNotification}/> : <></>
                                    }
                                </div>
                            </Collapse>
                            <Divider />
                        </div>
                    ))}
                </List>
            </Grid>
            <ErrorModal
                modalIsOpen={errorIsOpen}
                modalText={errorModalText}
                doFunction={() => {closeErrorModal(); getColorsList(); getSizeTypesList(); getSizesList();}}
                closeFunction={closeErrorModal}
            />
            <Notification timeout={timeout} children={add => (ref.current = add)} />
        </div>
    )
});
