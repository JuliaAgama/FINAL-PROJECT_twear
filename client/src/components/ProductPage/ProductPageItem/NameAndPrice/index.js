import React from "react";
import useStyles from "./useStyles";
import {useSelector} from "react-redux";

const createPriceStr = (currentCurrency, price, currency) => {
    if (currentCurrency === 'USD') {
        return price + ' ' + currentCurrency;
    } else if (currentCurrency === 'EUR') {
        if (currency.length > 0) {
            return Math.ceil(price / (currency[1].sale / currency[0].sale)) + ' ' + currentCurrency;
        }
    } else {
        if (currency.length > 0) {
            return Math.ceil(price * currency[0].sale) + ' ' + currentCurrency;
        }
    }
}

function NameAndPrice(props) {
    const classes = useStyles();
    const {product} = props;
    const currentCurrency = useSelector(state => state.currency.currentCurrency);
    const exchangeRates = useSelector(state => state.currency.currency);

    const priceString = createPriceStr(currentCurrency, product.price, exchangeRates);

    return (
        <>
            <p className={classes.productName}>{product.name}</p>
            <p className={classes.productPrice}>{priceString}</p>
        </>
    );
}

export default NameAndPrice;
