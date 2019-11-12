import useStyles from "./useStyles";
import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

import { useDispatch } from 'react-redux';
import { showCategoriesMenuAction} from '../../../../store/actions/categoriesMenu';

export default function HeaderBottomBlockDesktop() {

    const dispatch = useDispatch();
    const showMenu = (isMen) => dispatch(showCategoriesMenuAction(isMen));

    const show = (event) => {
        const isMen = event.target.innerText;
        if (isMen === 'Men') {
            showMenu(true);
        } else {
            showMenu(false)
        }
    };

    const classes = useStyles();
    return (
        <React.Fragment>
            <Grid item xs={3}>
                <Box className={classes.box}>Currency</Box>
            </Grid>
            <Grid item xs={3}>
                <Box
                    className={`${classes.box} ${classes.women}`}
                    onClick={show}>Women</Box>
            </Grid>
            <Grid item xs={3}>
                <Box className={`${classes.box} ${classes.men}`}
                     onClick={show}>Men</Box>
            </Grid>
            <Grid item xs={3}>
                <Box className={classes.box}>Login</Box>
            </Grid>
        </React.Fragment>
    );
}