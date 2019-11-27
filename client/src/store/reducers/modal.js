import * as MODAL from "../constants/modal";

const initState = {
    open: false,
    login: false
};

export default function (state = initState, action) {

    switch (action.type) {

        case MODAL.MODAL_OPEN_LOGIN:
            return {
                ...state,
                ...{
                    open: true,
                    login: true
                }
            };

        case MODAL.MODAL_OPEN_REGISTRATION:
            return {
                ...state,
                ...{
                    open: true,
                    login: false
                }
            };

        case MODAL.MODAL_CLOSE:
            return {
                ...state,
                ...{
                    open: false
                }
            };

        default:
            return state
    }
}