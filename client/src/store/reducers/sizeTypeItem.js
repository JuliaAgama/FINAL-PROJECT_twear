import * as SIZETYPES from '../constants/sizeTypes';

const initState = {
    sizeTypeItem: {},
    loaded: false,
    error: null
};


export default function (state = initState, action) {

    switch (action.type) {

        case SIZETYPES.SIZETYPE_SEND_REQUEST:
            return {
                ...state,
                ...{
                    loaded : false
                }
            };

            case SIZETYPES.SIZETYPE_RESPONSE_FAILED:
                return {
                    ...state,
                    ...{
                        error : action.error
                    }
                };

        case SIZETYPES.SIZETYPE_GET_SIZETYPE_ITEM:
            return {
                ...state,
                ...{
                    sizeTypeItem: action.data,
                    loaded: true
                }
            };

        default:
            return state
    }
}
