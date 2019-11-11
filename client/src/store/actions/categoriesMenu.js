import * as CATEGORIES_MENU from "../constants/categoriesMenu";

export function showCategoriesMenuAction(isMen) {
    return function (dispatch) {
        return dispatch({
            type: CATEGORIES_MENU.CATEGORIES_MENU_SHOW,
            data: isMen
        });
    };
};

export function hideCategoriesMenuAction() {
    return function (dispatch) {
        return dispatch({
            type: CATEGORIES_MENU.CATEGORIES_MENU_HIDE
        });
    };
};