import React from "react";
import Currency from "../../../common/Currency";
import useStyles from "./useStyles";

function NameAndPrice(props) {
    const classes = useStyles();
    const {product} = props;

    return (
        <>
            <p className={classes.productName}>{product.name}</p>
            <p className={classes.productPrice}><Currency price={product.price}/></p>
        </>
    );
}

export default NameAndPrice;
