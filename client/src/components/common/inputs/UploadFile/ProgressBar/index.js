import React from 'react';

import { Typography, Box } from '@material-ui/core';

import useStyles from './useStyles';


export default props => {

    const {progress} = props;

    const classes = useStyles();

    return (
        <Typography component="div" className={classes.progressBar}>
            <Box
                className={classes.progress}
                style={{ width: progress + '%' }}
            >
            </Box>
        </Typography>
    )
};
