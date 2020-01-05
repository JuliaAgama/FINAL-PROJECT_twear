import React from "react";

// import { Dialog, DialogContent, DialogTitle, DialogActions, Box, Tooltip, useMediaQuery, Grid, List, ListItem, Avatar, Button } from '@material-ui/core';

// import useStyles from "./useStyles";
import "./marquee.css";


export default props => {
    const {text, styles} = props;

    // const classes = useStyles();

    return (
        <div className='container' style={styles.container}>
            <span className='text' style={styles.text}>{text}</span>
        </div>
    );
};
