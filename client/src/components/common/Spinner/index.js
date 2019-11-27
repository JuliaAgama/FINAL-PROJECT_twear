import React from 'react';

import { withStyles, makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const ColorCircularProgress = withStyles({
    root: {
        color: '#00495c',
    },
})(CircularProgress);

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        margin: theme.spacing(1),
        padding: theme.spacing(1)
    },
}));

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
