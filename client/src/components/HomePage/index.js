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

<<<<<<< HEAD
const HomePage = () => {
=======
// import '../../../node_modules/bootstrap/dist/css/bootstrap.css';

const bestProducts = [
    {   _id: '1-120', name: 'short top tile', categories: ['31']},
    {   _id: '2-10', name: 'high-heels shoes', categories: ['42']},
    {   _id: '2-40', name: 'party purse', categories: ['13']},
    {   _id: '1-20', name: 'great dress tile', categories: ['21']},
    {   _id: '2-30', name: 'fancy bootlets', categories: ['52']},
    {   _id: '1-50', name: 'sexy bra tile', categories: ['91']},
    {   _id: '1-60', name: 'black jeans tile', categories: ['81']},
    {   _id: '1-110', name: 'rainy  coat tile', categories: ['41']},
    {   _id: '1-30', name: 'xxl shirt tile', categories: ['71']}
];
>>>>>>> 1fb4d9a36223ad8ecca7a93cbec328afb03763c5

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