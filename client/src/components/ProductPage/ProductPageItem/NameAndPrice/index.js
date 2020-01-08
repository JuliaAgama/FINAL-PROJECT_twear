import React from "react";
import useStyles from "./useStyles";

function NameAndPrice(props) {
    const classes = useStyles();
    const {product} = props;

    return (
        <>
            <p className={classes.productName}>{product.name}</p>
            <p className={classes.productPrice}>{product.price} usa</p>
        </>
    );
}

export default NameAndPrice;
