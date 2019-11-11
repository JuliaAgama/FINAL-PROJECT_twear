import React from 'react';
import Grid from '@material-ui/core/Grid';
import useStyles from './useStyles';
import Hidden from '@material-ui/core/Hidden';
import withWidth from '@material-ui/core/withWidth';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import HeaderTopBlockDesktop from "./HeaderTopBlock/Desktop";
import HeaderTopBlockMobile from "./HeaderTopBlock/Mobile";
import HeaderBottomBlockMobile from "./HeaderBottomBlock/Mobile";
import HeaderBottomBlockDesktop from "./HeaderBottomBlock/Desktop";
import HeaderDropDownBlock from "./HeaderDropDownBlock/Desktop";



function HeaderMaterialUI() {

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
            <div className={classes.root}>
                <Grid container spacing={0} className={classes.mainContainer}>
                    <Hidden smDown>
                        <Grid container item xs={12} spacing={0}>
                            <HeaderTopBlockDesktop />
                        </Grid>
                        <Grid container item xs={12} spacing={0} className={classes.bottomBlock}>
                            <HeaderBottomBlockDesktop />
                        </Grid>
                        <HeaderDropDownBlock />
                    </Hidden>
                    <Hidden mdUp>
                        <Grid container item xs={12} spacing={0}>
                            <HeaderTopBlockMobile />
                        </Grid>
                    </Hidden>
                    <Hidden mdUp>
                        <Grid container item xs={12} spacing={0}>
                            <HeaderBottomBlockMobile />
                        </Grid>
                    </Hidden>
                </Grid>
            </div>
        </ThemeProvider>
    );
}

export default withWidth()(HeaderMaterialUI);
