import useStyles from "./useStyles";
import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

import { useDispatch } from 'react-redux';
import { showCategoriesMenuAction, hideCategoriesMenuAction } from '../../../../store/actions/categoriesMenu';

export default function HeaderBottomBlockDesktop() {

    const dispatch = useDispatch();
    const showMenu = (isMen) => dispatch(showCategoriesMenuAction(isMen));
    // const hideMenu = () => dispatch(hideCategoriesMenuAction());


    const show = (event) => {
        const isMen = event.target.innerText;
        if (isMen === 'Men') {
            showMenu(true);
        } else {
            showMenu(false)
        }
    };

    // const hide = (event) => {
    //     // if (event.relatedTarget) makeStyles-link
    //     // if(!event.relatedTarget.childNodes[0].className.includes('makeStyles-link')) hideMenu();
    // };

    const classes = useStyles();
    return (
        <React.Fragment>
            <Grid item xs={3}>
                <Box className={classes.box}>Currency</Box>
            </Grid>
            <Grid item xs={3}>
                <Box
                    className={`${classes.box} ${classes.women}`}
                    onClick={show}
                    // onMouseLeave={hide}
                >
                    Women
                </Box>
            </Grid>
            <Grid item xs={3}>
                <Box
                    className={`${classes.box} ${classes.men}`}
                    onClick={show}
                    // onMouseLeave={hide}
                >
                    Men
                </Box>
            </Grid>
            <Grid item xs={3}>
                <Box className={classes.box}>Login</Box>
            </Grid>
        </React.Fragment>
    );
}