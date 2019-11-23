import React from 'react';

import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import useStyles from './useStyles';


export default props => {

    const classes = useStyles();

    return (
        <Fab
            className={classes[props.className] || classes.fabPink}
            color={props.color || "primary"}
            variant="extended"
            aria-label="add"
            onClick={props.onClick}
        >
            <AddIcon className={classes.wideIcon} aria-label="add"></AddIcon>
            <span> {props.text} </span>
        </Fab>
    )
};
