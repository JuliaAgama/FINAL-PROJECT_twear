import * as MODAL from "../constants/modal";

export function openLoginModalAction() {
    return function (dispatch) {
        return dispatch({
            type: MODAL.MODAL_OPEN_LOGIN
        });
    };
};

export function openRegistrationModalAction() {
    return function (dispatch) {
        return dispatch({
            type: MODAL.MODAL_OPEN_REGISTRATION
        });
    };
};

export function closeModalAction() {
    return function (dispatch) {
        return dispatch({
            type: MODAL.MODAL_CLOSE
        });
    };
};