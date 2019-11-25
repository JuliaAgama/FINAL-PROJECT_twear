import React from 'react';
import Header from '../../../Header';
import Footer from '../../../Footer';
import SettingsButton from '../../../common/buttons/Settings';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import {Container} from "@material-ui/core";
import useStyles from "./useStyles";

export default props => {

    const redirectToAdmin = () => {
        window.location.assign(`/admin/login`);
    };
    const classes = useStyles();

    const breakpointValues = {
        xs: 0,
        sm: 576,
        md: 768,
        lg: 992,
        xl: 1200,
    };

    const theme = createMuiTheme({ breakpoints: { values: breakpointValues } });

    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth={false} className={classes.layoutContainer}>
                <Header/>
                <Footer/>
                <SettingsButton title='Admin Page' size={2} color='red' onClick={redirectToAdmin}/>
            </Container>
        </ThemeProvider>
    );
};
