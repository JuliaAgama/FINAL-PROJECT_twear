import * as MODAL from "../constants/modal";

export function openLoginModalAction(login) {
    return function (dispatch) {
        return dispatch({
            type: MODAL.MODAL_OPEN_LOGIN,
            data: login
        });
    };
};

export function openRegistrationModalAction(registration) {
    return function (dispatch) {
        return dispatch({
            type: MODAL.MODAL_OPEN_REGISTRATION,
            data: registration
        });
    };
};

export function openUpdateNameAction(name) {
    return function (dispatch) {
        return dispatch({
            type: MODAL.MODAL_OPEN_NAME_UPDATE,
            data: name
        });
    };
};

export function openUpdateLoginAction(updateLogin) {
    return function (dispatch) {
        return dispatch({
            type: MODAL.MODAL_OPEN_LOGIN_UPDATE,
            data: updateLogin
        });
    };
};

export function openUpdateEmailAction(updateEmail) {
    return function (dispatch) {
        return dispatch({
            type: MODAL.MODAL_OPEN_EMAIL_UPDATE,
            data: updateEmail
        });
    };
};

export function openUpdateTelephoneAction(updateTelephone) {
    return function (dispatch) {
        return dispatch({
            type: MODAL.MODAL_OPEN_TELEPHONE_UPDATE,
            data: updateTelephone
        });
    };
};

export function openUpdatePasswordAction(updatePassword) {
    return function (dispatch) {
        return dispatch({
            type: MODAL.MODAL_OPEN_PASSWORD_UPDATE,
            data: updatePassword
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