import * as COLORS from '../constants/colors';

const initState = {
    colors: [],
    loaded: false,
    error: null
};

export default function (state = initState, action) {

    switch (action.type) {

        case COLORS.COLORS_SEND_REQUEST:
            return {
                ...state,
                ...{
                    loaded : false
                }
            };

            case COLORS.COLORS_RESPONSE_FAILED:
                return {
                    ...state,
                    ...{
                        error : action.error
                    }
                };

        case COLORS.COLORS_GET_ALL_COLORS:
            return {
                ...state,
                ...{
                    colors: action.data,
                    loaded: true
                }
            };

        case COLORS.COLORS_ADD_COLOR:
            return {
                ...state,
                ...{
                    colors : [...state.colors, ...[action.data]],
                    loaded : true
                }
            };

            case COLORS.COLORS_UPDATE_COLOR:
            let updatedColors = state.colors.map(el => {
                if(el._id === action.data._id){
                    return action.data
                }
                return el;
            });
            return{
                ...state,
                ...{
                    colors : updatedColors,
                    loaded : true
                }
            };

            case COLORS.COLORS_DELETE_COLOR:
            let updated = state.colors.filter(el => {
                return el._id !== action.data._id
            });
            return {
                ...state,
                ...{
                    colors : updated,
                    loaded : true
                }
            };
        default:
            return state
    }
}
