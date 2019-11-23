import * as GENDERS from '../constants/genders';

const initState = {
    genders: [],
    loaded: false,
    error: null
};

export default function (state = initState, action) {

    switch (action.type) {

        case GENDERS.GENDERS_SEND_REQUEST:
            return {
                ...state,
                ...{
                    loaded : false
                }
            };

            case GENDERS.GENDERS_RESPONSE_FAILED:
                return {
                    ...state,
                    ...{
                        error : action.error
                    }
                };

        case GENDERS.GENDERS_GET_ALL_GENDERS:
            return {
                ...state,
                ...{
                    genders: action.data,
                    loaded: true
                }
            };

        case GENDERS.GENDERS_ADD_GENDER:
            return {
                ...state,
                ...{
                    genders : [...state.genders, ...[action.data]],
                    loaded : true
                }
            };

            case GENDERS.GENDERS_UPDATE_GENDER:
            let updatedGenders = state.GENDERS.map(el => {
                if(el._id === action.data._id){
                    return action.data
                }
                return el;
            });
            return{
                ...state,
                ...{
                    genders : updatedGenders,
                    loaded : true
                }
            };

            case GENDERS.GENDERS_DELETE_GENDER:
            let updated = state.genders.filter(el => {
                return el._id !== action.data._id
            });
            return {
                ...state,
                ...{
                    genders : updated,
                    loaded : true
                }
            };
        default:
            return state
    }
}
