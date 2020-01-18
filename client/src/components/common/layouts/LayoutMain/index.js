import React from "react";

import { Container, Grid} from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import useStyles from "./useStyles";

import Header from "../../../Header";
import HeaderV2 from "../../../HeaderV2";
import Footer from "../../../Footer";

export default props => {

    const breakpointValues = {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920,
        // xs: 0,
        // sm: 576,
        // md: 768,
        // lg: 992,
        // xl: 1200,
    };

    const theme = createMuiTheme({ breakpoints: { values: breakpointValues } });

    const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth='lg' className={classes.layoutContainer} >
                <Grid container>
                    {/*<Header/>*/}
                    <HeaderV2/>
                    <Grid item xs={12}>{props.children}</Grid>
                    <Footer/>
                </Grid>
            </Container>
        </ThemeProvider>
    );
};
