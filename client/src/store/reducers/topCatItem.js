import * as TOPCATS from '../constants/topCats';

const initState = {
    topCatItem: {},
    loaded: false
};


export default function (state = initState, action) {

    switch (action.type) {

        case TOPCATS.TOPCAT_SEND_REQUEST:
            return {
                ...state,
                ...{
                    loaded : false
                }
            };

        case TOPCATS.TOPCAT_GET_TOPCAT_ITEM:
            return {
                ...state,
                ...{
                    topCatItem: action.data,
                    loaded: true
                }
            };

        default:
            return state
    }
}
