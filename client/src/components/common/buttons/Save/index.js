import React from 'react';

import Fab from '@material-ui/core/Fab';
import PublishIcon from '@material-ui/icons/Publish';

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
            <PublishIcon/>
        </Fab>
    )
};
