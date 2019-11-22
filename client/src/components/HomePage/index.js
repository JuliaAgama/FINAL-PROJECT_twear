import React from 'react';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import withWidth from '@material-ui/core/withWidth';
import Container from "@material-ui/core/Container";
import useStyles from './useStyles';
import Paper from '@material-ui/core/Paper';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import ProductsSection from "./ProductsSection";
import PhotosSection from "./PhotosSection";
import SectionTicker from "../common/SectionTicker";

const HomePage = () => {

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
        <Container maxWidth={false} className={classes.mainContainer}>
            <PhotosSection />
            <ProductsSection />
            <SectionTicker />
        </Container>
    );
}

export default HomePage;