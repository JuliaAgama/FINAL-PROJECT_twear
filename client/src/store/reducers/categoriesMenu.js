import * as CATEGORIES_MENU from "../constants/categoriesMenu";

const initState = {
    isMen: false,
    show: false
};

export default function (state = initState, action) {

    switch (action.type) {

        case CATEGORIES_MENU.CATEGORIES_MENU_SHOW:
            return {
                ...state,
                ...{
                    isMen: action.data,
                    show: true
                }
            };

        case CATEGORIES_MENU.CATEGORIES_MENU_HIDE:
            return {
                ...state,
                ...{
                    show: false
                }
            };

        default:
            return state
    }
}