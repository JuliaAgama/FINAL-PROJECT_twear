import * as SIZES from '../constants/sizes';

const initState = {
    sizes: [],
    loaded: false,
    error: null,
};


export default function (state = initState, action) {

    switch (action.type) {

        case SIZES.SIZES_SEND_REQUEST:
            return {
                ...state,
                ...{
                    loaded : false
                }
            };

        case SIZES.SIZES_RESPONSE_FAILED:
            return {
                ...state,
                ...{
                    error : action.error
                }
            };

        case SIZES.SIZES_GET_ALL_SIZES:
            return {
                ...state,
                ...{
                    sizes: action.data,
                    loaded: true
                }
            };

        case SIZES.SIZES_ADD_SIZE:
            return {
                ...state,
                ...{
                    sizes : [...state.sizes, ...[action.data]],
                    loaded : true
                }
            };

            case SIZES.SIZES_UPDATE_SIZE:
            let updatedSizes = state.sizes.map(el => {
                if(el._id === action.data._id){
                    return action.data
                }
                return el;
            });
            return{
                ...state,
                ...{
                    sizes : updatedSizes,
                    loaded : true
                }
            };

            case SIZES.SIZES_DELETE_SIZE:
            let updated = state.sizes.filter(el => {
                return el._id !== action.data._id
            });
            return {
                ...state,
                ...{
                    sizes : updated,
                    loaded : true
                }
            };
        default:
            return state
    }
}
