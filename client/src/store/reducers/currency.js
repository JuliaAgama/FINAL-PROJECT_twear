import * as CURRENCY from '../constants/currency';

const initState = {
    currency: [],
    currentCurrency: 'USA',
    loaded: false,
    error: null
};

export default function (state = initState, action) {

    switch (action.type) {

        case CURRENCY.CURRENCY_CURRENCY_GET_CURRENCY:
            return {
                ...state,
                ...{
                    currency : action.data,
                    loaded : true
                }
            };

        case CURRENCY.CURRENCY_CURRENCY_REQUEST_FAILED:
            return {
                ...state,
                ...{
                    error: action.data
                }
            };

        case CURRENCY.CURRENCY_CHANGE_CURRENCY:
            return {
                ...state,
                ...{
                    currentCurrency: action.data
                }
            };

        default:
            return state
    }
}
