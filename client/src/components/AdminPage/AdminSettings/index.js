import React from 'react';
import { Link } from "react-router-dom";

import { Typography, Box, List, ListItem, Divider } from '@material-ui/core';

import useStyles from './useStyles';


export default () => {

    const classes = useStyles();

    return (
        <Typography component="div" variant="body1">
            <Box color="secondary.main" p={3} pl={6} pr={6} ml={2} mr={2} borderBottom={1} textAlign="center" fontSize="h6.fontSize">SITE SETTINGS</Box>

            <Box className={classes.paper}>
                <List >
                    <Divider />
                    <ListItem >
                        <Link to={`/admin/selectedProducts`} className={classes.linkPink}> SELECTED PRODUCTS</Link>
                    </ListItem>
                    <Divider />
                    <ListItem >
                        <Link to={`/admin/settings`} className={classes.linkPink}> FOOTER LINKS </Link>
                    </ListItem>
                    <Divider />
                    <ListItem >
                        <Link to={`/admin/settings`} className={classes.linkPink}> AD BLOCKS </Link>
                    </ListItem>
                    <Divider/>
                </List>
            </Box>
        </Typography>
    )
};
