import * as HEADER from "../constants/header";

const initState = {
    isMen: false,
    isWomen: false,
    show: false,
    showMobileMenu: false,
    showLoginMenu: false
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
                    showMobileMenu: false,
                    show: false
                }
            }

        case HEADER.HEADER_MEN_CATEGORIES_SHOW:
            return {
                ...state,
                ...{
                    isMen: true,
                    isWomen: false,
                    show: true
                }
            };

        case HEADER.HEADER_WOMEN_CATEGORIES_SHOW:
            return {
                ...state,
                ...{
                    isMen: false,
                    isWomen: true,
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


        case HEADER.HEADER_SHOW_LOGIN_MENU:
            return {
                ...state,
                ...{
                    showLoginMenu: true
                }
            };

        case HEADER.HEADER_HIDE_LOGIN_MENU:
            return {
                ...state,
                ...{
                    showLoginMenu: false
                }
            };

        case HEADER.HEADER_CLOSE_MENU:
            return {
                ...state,
                ...{
                    show: false,
                    showMobileMenu: false,
                    showLoginMenu: false
                }
            };

        default:
            return state
    }
}