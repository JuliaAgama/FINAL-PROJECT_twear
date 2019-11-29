import React from 'react';

import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import {Container} from "@material-ui/core";

import useStyles from "./useStyles";
import Grid from "@material-ui/core/Grid";

import Header from '../../../Header';
import Footer from '../../../Footer';
import SettingsButton from '../../../common/buttons/Settings';

export default () => {

    const redirectToAdmin = () => {
        window.location.assign(`/admin/`);
    };

    const breakpointValues = {
        xs: 0,
        sm: 576,
        md: 768,
        lg: 992,
        xl: 1200,
    };

    const theme = createMuiTheme({ breakpoints: { values: breakpointValues } });

    const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth={false} className={classes.layoutContainer}>
                <div className={classes.header}><Header/></div>

                    <div style={{textAlign: 'center'}}>YURA'S BLOCK</div>
                <div className={classes.footer}><Footer/></div>
                <SettingsButton title='Admin Page' size={2} color='red' onClick={redirectToAdmin}/>
            </Container>
        </ThemeProvider>
    );
};
