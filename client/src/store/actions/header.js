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

export function hideDesktopCategoriesMenuAction() {
    return function (dispatch) {
        return dispatch({
            type: HEADER.HEADER_DESKTOP_CATEGORIES_MENU_HIDE
        });
    };
};

export function showMenCategoriesAction() {
    return function (dispatch) {
        return dispatch({
            type: HEADER.HEADER_MEN_CATEGORIES_SHOW
        });
    };
};

export function showWomenCategoriesAction() {
    return function (dispatch) {
        return dispatch({
            type: HEADER.HEADER_WOMEN_CATEGORIES_SHOW
        });
    };
};

export function showPersonalCabinetMenuAction() {
    return function (dispatch) {
        return dispatch({
            type: HEADER.HEADER_SHOW_PERSONAL_CABINET_MENU
        });
    };
};

export function hidePersonalCabinetMenuAction() {
    return function (dispatch) {
        return dispatch({
            type: HEADER.HEADER_HIDE_PERSONAL_CABINET_MENU
        });
    };
};

export function hideLoginMenuAction() {
    return function (dispatch) {
        return dispatch({
            type: HEADER.HEADER_HIDE_LOGIN_MENU
        });
    };
};

export function showLoginMenuAction() {
    return function (dispatch) {
        return dispatch({
            type: HEADER.HEADER_SHOW_LOGIN_MENU
        });
    };
};
