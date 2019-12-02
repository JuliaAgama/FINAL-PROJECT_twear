import React from 'react';

import { withStyles, makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

import useStyles from './useStyles';

const ColorCircularProgress = withStyles({
    root: {
        color: '#00495c',
    },
})(CircularProgress);


export default () => {
    const classes = useStyles();

    return (
        <>
        <div className={classes.root}>
            <ColorCircularProgress size={30} thickness={5} />
        </div>
        </>
    )
};
