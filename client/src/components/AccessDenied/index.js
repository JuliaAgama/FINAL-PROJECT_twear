import React from 'react';
import { Link } from 'react-router-dom';

import { Typography, Box } from '@material-ui/core';

import useStyles from "./useStyles";

export default () => {
    const classes = useStyles();

    return  (
        <Typography component="div" variant="body1" className={classes.container}>
            <Box color="secondary.main" p={3} pl={6} pr={6} ml={2} mr={2} borderBottom={1} textAlign="center" fontSize="h6.fontSize">403 - Forbidden: Access is denied </Box>
            <Box p={2} textAlign="center">You do not have permission to visit this page</Box>
            <span className={classes.link}><Link to="/">Return to twear</Link></span>
            {/* <img  className={classes.img} src="/img/wiki-access-denied.jpg" alt="NOT FOUND"/> */}
        </Typography>
    )
};
