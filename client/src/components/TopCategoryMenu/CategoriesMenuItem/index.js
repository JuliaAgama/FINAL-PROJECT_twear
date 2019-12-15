import React from 'react';
import {Link, Grid} from '@material-ui/core';
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../../../theme";
import useStyles from './useStyles';
import './CategoriesMenuItem.css';





function CategoriesMenuItem(props) {

   const {name} = props;
   const classes = useStyles();


    return (
        // <ThemeProvider theme={theme}>
        <Grid className='category-item-home' item xs={3}>
          <p className='top-cat-name'>{name}</p>
        </Grid>
        // </ThemeProvider>/
    )
}

export default CategoriesMenuItem;