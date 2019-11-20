import * as MODAL from "../constants/modal";

const initState = {
    open: false
};

export default function (state = initState, action) {

    switch (action.type) {

        case MODAL.MODAL_OPEN:
            return {
                ...state,
                ...{
                    open: true
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