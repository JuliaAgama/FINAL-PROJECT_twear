import React from 'react';

import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import useStyles from './useStyles';


export default () => {
    const classes = useStyles();
    return (
        <Fab
            className={classes.fab}
            color="primary"
            aria-label="edit"
        >
            <EditIcon/>
        </Fab>
    )
};
