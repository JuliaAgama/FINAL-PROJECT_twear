import * as SIZETYPES from '../constants/sizeTypes';

const initState = {
    sizeTypes: [],
    loaded: false,
    error: null
};

export default function (state = initState, action) {

    switch (action.type) {

        case SIZETYPES.SIZETYPES_SEND_REQUEST:
            return {
                ...state,
                ...{
                    loaded : false
                }
            };

            case SIZETYPES.SIZETYPES_RESPONSE_FAILED:
                return {
                    ...state,
                    ...{
                        error : action.error
                    }
                };

        case SIZETYPES.SIZETYPES_GET_ALL_SIZETYPES:
            return {
                ...state,
                ...{
                    sizeTypes: action.data,
                    loaded: true
                }
            };

        case SIZETYPES.SIZETYPES_ADD_SIZETYPE:
            return {
                ...state,
                ...{
                    sizeTypes : [...state.sizeTypes, ...[action.data]],
                    loaded : true
                }
            };

            case SIZETYPES.SIZETYPES_UPDATE_SIZETYPE:
            let updatedSizeTypes = state.sizeTypes.map(el => {
                if(el._id === action.data._id){
                    return action.data
                }
                return el;
            });
            return{
                ...state,
                ...{
                    sizeTypes : updatedSizeTypes,
                    loaded : true
                }
            };

            case SIZETYPES.SIZETYPES_DELETE_SIZETYPE:
            let updated = state.sizeTypes.filter(el => {
                return el._id !== action.data._id
            });
            return {
                ...state,
                ...{
                    sizeTypes : updated,
                    loaded : true
                }
            };
        default:
            return state
    }
}
