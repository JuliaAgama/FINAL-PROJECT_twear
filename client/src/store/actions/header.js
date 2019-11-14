import * as HEADER from "../constants/header";

export function showMobileMenuAction() {
    return function (dispatch) {
        return dispatch({
            type: HEADER.HEADER_MOBILE_MENU_SHOW
        });
    };
};

export function hideMobileMenuAction() {
    return function (dispatch) {
        return dispatch({
            type: HEADER.HEADER_MOBILE_MENU_HIDE
        });
    };
};