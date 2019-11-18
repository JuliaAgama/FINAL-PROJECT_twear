import * as HEADER from "../constants/header";

const initState = {
    isMen: false,
    show: false,
    showMobileMenu: false
};

export default function (state = initState, action) {

    switch (action.type) {

        case HEADER.HEADER_MOBILE_MENU_SHOW:
            return {
                ...state,
                ...{
                    showMobileMenu: true
                }
            };

        case HEADER.HEADER_MOBILE_MENU_HIDE:
            return {
                ...state,
                ...{
                    showMobileMenu: false
                }
            };

        case HEADER.HEADER_DESKTOP_CATEGORIES_MENU_SHOW:
            return {
                ...state,
                ...{
                    isMen: action.data,
                    show: true
                }
            };

        case HEADER.HEADER_DESKTOP_CATEGORIES_MENU_HIDE:
            return {
                ...state,
                ...{
                    show: false
                }
            };

        case HEADER.HEADER_MOBILE_CATEGORIES_MENU_SHOW:
            return {
                ...state,
                ...{
                    isMen: action.data,
                    show: true
                }
            };

        case HEADER.HEADER_MOBILE_CATEGORIES_MENU_HIDE:
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