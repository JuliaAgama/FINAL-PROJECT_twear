import React from "react";
import {useSelector} from "react-redux";

const createPriceStr = (currentCurrency, price, currency) => {
    if (currentCurrency === 'USD') {
        return '$' + ' ' + price;
    } else if (currentCurrency === 'EUR') {
        if (currency.length > 0) {
            return Math.ceil(price / (currency[1].sale / currency[0].sale)) + ' ' + currentCurrency;
        }
    } else {
        if (currency.length > 0) {
            return Math.ceil(price * currency[0].sale) + ' ' + currentCurrency;
        }
    }
};

function Currency(props) {
    const {price} = props;
    const currentCurrency = useSelector(state => state.currency.currentCurrency);
    const exchangeRates = useSelector(state => state.currency.currency);

    const priceString = createPriceStr(currentCurrency, price, exchangeRates);

    return (
        <>
            <span>{priceString}</span>
        </>
    );
}

export default Currency;