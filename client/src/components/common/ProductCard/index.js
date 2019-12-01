import React from 'react';
import {Link} from "react-router-dom";
import useStyles from "./useStyles";
import {Container} from "@material-ui/core";


export default function ProductCard() {
    const classes = useStyles();

    return (
        <Container maxWidth={false} className={classes.mainContainer}>ProductGallery</Container>
    );
}
