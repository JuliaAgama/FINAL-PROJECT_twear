import React from 'react';
import { Link } from "react-router-dom";

import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import {Container} from "@material-ui/core";

import useStyles from "./useStyles";

import Header from '../../../Header';
import Footer from '../../../Footer';
import SettingsButton from '../../../common/buttons/Settings';
import CategoriesMain from '../../../CatergoriesMain';

export default () => {

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
            <div style={{height: '1500 px'}}>
            <Container maxWidth={false} className={classes.layoutContainer}>
                <Header/>
                <CategoriesMain/>
                <Footer style= {{position: 'absolute', bottom: '0' }}/>
                <Link to={`/admin`}>
                    <SettingsButton title='Admin Page' size={2} color='red' />
                </Link>
            </Container>
            </div>
        </ThemeProvider>    
    );
};
