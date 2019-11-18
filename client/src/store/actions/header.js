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

export function showDesktopCategoriesMenuAction(isMen) {
    return function (dispatch) {
        return dispatch({
            type: HEADER.HEADER_DESKTOP_CATEGORIES_MENU_SHOW,
            data: isMen
        });
    };
};

export function hideDesktopCategoriesMenuAction() {
    return function (dispatch) {
        return dispatch({
            type: HEADER.HEADER_DESKTOP_CATEGORIES_MENU_HIDE
        });
    };
};

export function showMobileCategoriesMenuAction(isMen) {
    return function (dispatch) {
        return dispatch({
            type: HEADER.HEADER_MOBILE_CATEGORIES_MENU_SHOW,
            data: isMen
        });
    };
};

export function hideMobileCategoriesMenuAction() {
    return function (dispatch) {
        return dispatch({
            type: HEADER.HEADER_MOBILE_CATEGORIES_MENU_HIDE
        });
    };
};