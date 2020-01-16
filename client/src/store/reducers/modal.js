import * as MODAL from "../constants/modal";

const initState = {
    open: false,
    login: '',
    registration: '',
    name: '',
    loginUpdate: '',
    email: '',
    password: '',
    telephone: '',
    address: ''
};

const newState = (data) => {
    const currentState = initState;
    let newState = {};
    for(const field in currentState) {
        if (field === data && field !== 'open') {
            newState[field] = data
        } else {
            newState[field] = ''
        }
    }
    return newState;
};


export default function (state = initState, action) {

    switch (action.type) {

        case MODAL.MODAL_OPEN_LOGIN:
            const loginState = newState(action.data);
            return {
                ...loginState,
                ...{
                    open: true
                }
            };

        case MODAL.MODAL_OPEN_REGISTRATION:
            let registrationState = newState(action.data);

            return {
                ...registrationState,
                ...{
                    open: true
                }
            };

        case MODAL.MODAL_OPEN_NAME_UPDATE:
            let nameState = newState(action.data);

            return {
                ...nameState,
                ...{
                    open: true
                }
            };

        case MODAL.MODAL_OPEN_LOGIN_UPDATE:
            let loginUpdateState = newState(action.data);

            return {
                ...loginUpdateState,
                ...{
                    open: true
                }
            };

        case MODAL.MODAL_OPEN_EMAIL_UPDATE:
            let emailState = newState(action.data);

            return {
                ...emailState,
                ...{
                    open: true
                }
            };

        case MODAL.MODAL_OPEN_PASSWORD_UPDATE:
            let passwordState = newState(action.data);

            return {
                ...passwordState,
                ...{
                    open: true
                }
            };

        case MODAL.MODAL_OPEN_TELEPHONE_UPDATE:
            let telephoneState = newState(action.data);

            return {
                ...telephoneState,
                ...{
                    open: true
                }
            };

        case MODAL.MODAL_OPEN_ADD_NEW_ADDRESS:
            let addressState = newState(action.data);

            return {
                ...addressState,
                ...{
                    open: true
                }
            };


        case MODAL.MODAL_CLOSE:
            return {
                ...state,
                ...{
                    open: false,
                    login: '',
                    registration: '',
                    name: '',
                    loginUpdate: '',
                    email: '',
                    password: '',
                    telephone: '',
                    address: ''
                }
            };

        default:
            return state
    }
}