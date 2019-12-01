import React from "react";
import Button from "@material-ui/core/Button";
import useStyles from "./useStyles";
import {Link} from "react-router-dom";
import {Container} from "@material-ui/core";
import ProductCard from "../ProductCard";



export default function ProductGallery() {
    const classes = useStyles();

    return (
        <Container maxWidth={false} className={classes.mainContainer}>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
        </Container>
    );
}