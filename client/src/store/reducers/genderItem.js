import * as GENDERS from '../constants/genders';

const initState = {
    genderItem: {},
    loaded: false,
    error: null
};

export default function (state = initState, action) {

    switch (action.type) {

        case GENDERS.GENDER_SEND_REQUEST:
            return {
                ...state,
                ...{
                    loaded : false
                }
            };

            case GENDERS.GENDER_RESPONSE_FAILED:
                return {
                    ...state,
                    ...{
                        error : action.error
                    }
                };

            case GENDERS.GENDER_GET_GENDER_ITEM:
                return {
                    ...state,
                    ...{
                        genderItem: action.data,
                        loaded: true
                    }
                };

        default:
            return state
    }
}
