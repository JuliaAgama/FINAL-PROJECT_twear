import * as CURRENCY from '../constants/currency';
import CurrencyApi from '../../services/Currency';

export function getCurrency() {
    return function (dispatch) {
        (new CurrencyApi()).getCurrency()
            .then(res => {
                return dispatch({
                    type: CURRENCY.CURRENCY_CURRENCY_GET_CURRENCY,
                    data: res
                });
            })
            .catch(err => {
                return dispatch({
                    type: CURRENCY.CURRENCY_CURRENCY_REQUEST_FAILED,
                    error: err.response.data
                })
            });
    };
};

export function changeCurrency(currency) {
    return async function (dispatch) {

        await dispatch(getCurrency());

        return await dispatch({
            type: CURRENCY.CURRENCY_CHANGE_CURRENCY,
            data: currency
        });
    };
};
