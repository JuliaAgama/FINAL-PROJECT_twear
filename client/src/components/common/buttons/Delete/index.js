import React from 'react';

import Fab from '@material-ui/core/Fab';
import DeleteIcon from '@material-ui/icons/Delete';
import useStyles from './useStyles';


export default props => {
    const classes = useStyles();
    return (
        <Fab
            className={classes.fab}
            color="default"
            aria-label="delete"
            onClick={props.onDelete}
        >
            <DeleteIcon className={classes.whiteText}/>
        </Fab>
    )
};
