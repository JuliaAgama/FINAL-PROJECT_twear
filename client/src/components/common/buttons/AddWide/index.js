import React from 'react';

import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import useStyles from './useStyles';


export default props => {

    const classes = useStyles();

    return (
        <Fab variant="extended" aria-label="add" color="secondary" className={classes.fab}>
            <AddIcon className={classes.wideIcon} aria-label="add"></AddIcon>
            <span> {props.text} </span>
        </Fab>
    )
};
