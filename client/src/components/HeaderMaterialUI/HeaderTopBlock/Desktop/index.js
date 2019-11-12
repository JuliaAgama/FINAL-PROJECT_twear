import useStyles from "./useStyles";
import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from '@material-ui/icons/Search';


export default function HeaderTopBlockDesktop() {

    const classes = useStyles();

    return (
        <React.Fragment>
            <Grid item xs={3}>
                <Box className={`${classes.box} ${classes.searchTitle}`}>
                    <span>Search</span>
                    {/*<SearchIcon className={classes.icon}/>*/}
                    {/*<InputBase className={classes.input} />*/}
                </Box>
            </Grid>
            <Grid item xs={6}>
                <Box className={`${classes.box} ${classes.brand}`}><img className={classes.img} src='/img/twear_logo_grey-on-transparent.png' alt='NOT FOUND'/></Box>
            </Grid>
            <Grid item xs={3}>
                <Box className={`${classes.box} ${classes.bag}`}>Shopping Bag</Box>
            </Grid>
        </React.Fragment>
    );
}