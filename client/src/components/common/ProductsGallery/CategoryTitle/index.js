import React from 'react';
import {Typography} from "@material-ui/core";
import useStyles from "./useStyles";


export default function CategoryTitle(props) {
    const classes = useStyles();
    return (
        <Typography component="div">
            <Typography className={classes.title} variant="h4" component="h4">{props.title}</Typography>
        </Typography>
    );
};
