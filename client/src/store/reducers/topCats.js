import * as TOPCATS from '../constants/topCats';

const initState = {
    topCats: [],
    loaded: false,
    error: null
};

export default function (state = initState, action) {

    switch (action.type) {

        case TOPCATS.TOPCATS_SEND_REQUEST:
            return {
                ...state,
                ...{
                    loaded : false
                }
            };

            case TOPCATS.TOPCATS_RESPONSE_FAILED:
                return {
                    ...state,
                    ...{
                        error : action.error
                    }
                };

        case TOPCATS.TOPCATS_GET_ALL_TOPCATS:
            return {
                ...state,
                ...{
                    topCats: action.data,
                    loaded: true
                }
            };

        case TOPCATS.TOPCAT_GET_TOPCAT_ITEM:
            return {
                ...state,
                ...{
                    topCats: action.data,
                    loaded: true
                }
            };

        case TOPCATS.TOPCATS_ADD_TOPCAT:
            return {
                ...state,
                ...{
                    topCats : [...state.topCats, ...[action.data]],
                    loaded : true
                }
            };

            case TOPCATS.TOPCATS_UPDATE_TOPCAT:
            let updatedTopCats = state.topCats.map(el => {
                if(el._id === action.data._id){
                    return action.data
                }
                return el;
            });
            return{
                ...state,
                ...{
                    topCats : updatedTopCats,
                    loaded : true
                }
            };

            case TOPCATS.TOPCATS_DELETE_TOPCAT:
            let updated = state.topCats.filter(el => {
                return el._id !== action.data._id
            });
            return {
                ...state,
                ...{
                    topCats : updated,
                    loaded : true
                }
            };
        default:
            return state
    }
}
