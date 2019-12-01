import React from "react";
import {Container} from "@material-ui/core";
import ProductCard from "../ProductCard";
import useStyles from "./useStyles";



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