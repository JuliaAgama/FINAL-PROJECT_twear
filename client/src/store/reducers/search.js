import * as SEARCH from "../constants/search";

const initState = {
    showTitle: true
};

export default function (state = initState, action) {

    switch (action.type) {

        case SEARCH.SEARCH_SHOW_TITLE:
            return {
                ...state,
                ...{
                    showTitle: true
                }
            };

        case SEARCH.SEARCH_HIDE_TITLE:
            return {
                ...state,
                ...{
                    showTitle: false
                }
            };

        default:
            return state
    }
}