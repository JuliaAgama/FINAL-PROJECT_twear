import useStyles from "./useStyles";
import React from "react";
import Box from "@material-ui/core/Box";
import {Link} from "react-router-dom";

export default function Item(props) {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Link to={props.url} className={classes.link}>
                <Box className={classes.box}>{props.title}</Box>
            </Link>
        </React.Fragment>
    );
}