import React from 'react';

import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import useStyles from './useStyles';


export default props => {
    const classes = useStyles();
    return (
        <Fab
            size={props.size || "medium"}
            className={classes[props.className] || classes.fabGreen}
            color={props.color || "primary"}
            aria-label="add"
            onClick={props.onClick}
        >
            <AddIcon/>
        </Fab>
    )
};
