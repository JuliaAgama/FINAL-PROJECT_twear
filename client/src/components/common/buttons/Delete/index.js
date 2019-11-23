import React from 'react';

import Fab from '@material-ui/core/Fab';
import DeleteIcon from '@material-ui/icons/Delete';
import useStyles from './useStyles';


export default props => {
    const classes = useStyles();
    return (
        <Fab
            size={props.size || "medium"}
            className={classes[props.className] || classes.fabGrey}
            color={props.color || "default"}
            aria-label="delete"
            onClick={props.onClick}
        >
            <DeleteIcon/>
        </Fab>
    )
};
