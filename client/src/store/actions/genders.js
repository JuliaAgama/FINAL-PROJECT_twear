import * as GENDERS from '../constants/genders';
import GendersApi from '../../services/Genders';


export function gendersSendRequest() {
    return {
        type: GENDERS.GENDERS_SEND_REQUEST
    };
};

export function genderItemSendRequest() {
    return {
        type: GENDERS.GENDER_SEND_REQUEST
    };
};

export function getAllGenders() {
    return function (dispatch) {
        dispatch(gendersSendRequest());
        (new GendersApi()).getGenders().then(res => {
            return dispatch({
                type: GENDERS.GENDERS_GET_ALL_GENDERS,
                data: res
            });
        })
        .catch(err => {
            return dispatch({
                type: GENDERS.GENDERS_RESPONSE_FAILED,
                error: err.message
            })
        });
    };
};

export function getGenderItem(id) {
    return function (dispatch) {
        dispatch(genderItemSendRequest());
        (new GendersApi()).getGenderById(id).then(res => {
            return dispatch({
                type: GENDERS.GENDER_GET_GENDER_ITEM,
                data: res
            });
        })
        .catch(err => {
            return dispatch({
                type: GENDERS.GENDER_RESPONSE_FAILED,
                error: err.message
            })
        });
    };
};

export function addGender(item){
    return function (dispatch) {
        dispatch(gendersSendRequest());
        (new GendersApi()).addGender(item).then(res => {
            return dispatch({
                type: GENDERS.GENDERS_ADD_GENDER,
                data: res,
            });
        })
        .catch(err => {
            return dispatch({
                type: GENDERS.GENDERS_RESPONSE_FAILED,
                error: err.message
            })
        })
    };
};

export function updateGender (item){
    return function (dispatch) {
        dispatch(gendersSendRequest());
        (new GendersApi()).updateGender(item).then(res => {
            return dispatch({
                type: GENDERS.GENDERS_UPDATE_GENDER,
                data: res,
            });
        })
        .catch(err => {
            return dispatch({
                type: GENDERS.GENDERS_RESPONSE_FAILED,
                error: err.message
            })
        })
    };
};

export function deleteGender(item){
    return function (dispatch) {
        dispatch(gendersSendRequest());
        (new GendersApi()).deleteGender(item).then(res => {
            return dispatch({
                type: GENDERS.GENDERS_DELETE_GENDER,
                data: res,
            });
        })
        .catch(err => {
            return dispatch({
                type: GENDERS.GENDERS_RESPONSE_FAILED,
                error: err.message
            })
        })
    };
};
