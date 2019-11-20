import * as MODAL from "../constants/modal";

export function openModalAction() {
    return function (dispatch) {
        return dispatch({
            type: MODAL.MODAL_OPEN
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