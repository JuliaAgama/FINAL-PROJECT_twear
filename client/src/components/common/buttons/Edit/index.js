import React from 'react';

import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';

import useStyles from './useStyles';


export default props => {
    const classes = useStyles();
    return (
        <Fab
            size={props.size || "medium"}
            className={classes[props.className] || classes.fabBlue}
            color={props.color || "primary"}
            aria-label="edit"
            onClick={props.onClick}
        >
            <EditIcon/>
        </Fab>
    )
};
