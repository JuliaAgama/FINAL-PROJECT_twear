import React, { useState, useRef } from 'react';

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

import Notification from '../../common/messages/Notification';
import Colors from './Colors';
import Sizes from './Sizes';


export default withWidth()(props => {
    const classes = useStyles();
    const optionsList = [
        {name: 'colors'},
        {name: 'sizes'}
    ];

    const [expanded, setExpanded] = useState({colors: false, sizes: false});
    const handleExpandClick = itemName => setExpanded({...expanded, [itemName]: (expanded[itemName] === true ? false : true)});

    const ref = useRef(null);
    const timeout = 2000;

    const handleNotification = itemName => {
        ref.current(` ${itemName.toUpperCase()} has been updated!`);
        setTimeout(() => {
            window.location.reload(true)
        }, timeout)
    };


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
                                        <Sizes handleNotification={handleNotification}/> : <></>
                                    }
                                </div>
                            </Collapse>
                            <Divider />
                        </div>
                    ))}
                </List>
            </Grid>
            <Notification timeout={timeout} children={add => (ref.current = add)} />
        </div>
    )
});
