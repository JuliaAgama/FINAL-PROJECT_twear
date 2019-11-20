import * as SIZES from '../constants/sizes';

const initState = {
    sizeItem: {},
    loaded: false,
    error: null
};


export default function (state = initState, action) {

    switch (action.type) {

        case SIZES.SIZE_SEND_REQUEST:
            return {
                ...state,
                ...{
                    loaded : false
                }
            };

            case SIZES.SIZE_RESPONSE_FAILED:
                return {
                    ...state,
                    ...{
                        error : action.error
                    }
                };

        case SIZES.SIZE_GET_SIZE_ITEM:
            return {
                ...state,
                ...{
                    sizeItem: action.data,
                    loaded: true
                }
            };

        default:
            return state
    }
}
