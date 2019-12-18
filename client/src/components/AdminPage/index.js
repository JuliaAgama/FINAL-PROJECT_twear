import React from 'react';
import { Typography, withWidth, Box } from '@material-ui/core';

import useStyles from './useStyles';


export default withWidth()(() => {

    const classes = useStyles();

    return(
        <Box className={classes.root}>
            <Box className={classes.background}>
                <Typography className={classes.header} variant="h2">ADMIN PANEL</Typography>
                <img className={classes.img} src="/img/twear_logo_scarlet-on-transparent.png" alt="NOT FOUND"/>
            </Box>
        </Box>
    )
});
