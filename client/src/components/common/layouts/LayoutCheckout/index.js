import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";

import { Container, Grid, Hidden, Box} from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import useStyles from './useStyles';


export default props => {

    const breakpointValues = {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920,
    };

    const theme = createMuiTheme({ breakpoints: { values: breakpointValues } });
    const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth='xl' className={classes.layoutContainer} >
                <Grid container component="main">
                    <Grid item xs={12} md={7} className={classes.root}>
                        <Link to="/" >
                            <div className={classes.logo}>
                                <img className={classes.image} src="/img/twear_logo_grey-on-transparent.png" alt="NOT FOUND"/>
                            </div>
                        </Link>
                        <Hidden mdUp>
                            <Box> Show order summary</Box>
                        </Hidden>
                        <div>{props.children}</div>
                        <Box component="footer" fontSize={14} py={3} textAlign='left' className={classes.footer}>All rights reserved</Box>
                    </Grid>
                    <Hidden smDown>
                        <Grid item xs={12} md={5} className={classes.paper}>
                            <Box fontSize='h6.fontSize'> Your Ordered Products: </Box>
                            <Box fontSize='body1.fontSize'> Cart List</Box>
                        </Grid>
                    </Hidden>
                </Grid>
            </Container>
        </ThemeProvider>
    );
};
