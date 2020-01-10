import * as SIZETYPES from '../constants/sizeTypes';
import SizeTypesApi from '../../services/SizeTypes';


export function sizeTypesSendRequest() {
    return {
        type: SIZETYPES.SIZETYPES_SEND_REQUEST
    };
};

export function sizeTypeItemSendRequest() {
    return {
        type: SIZETYPES.SIZETYPE_SEND_REQUEST
    };
};

export function getAllSizeTypes() {
    return function (dispatch) {
        dispatch(sizeTypesSendRequest());
        (new SizeTypesApi()).getSizeTypes().then(res => {
            return dispatch({
                type: SIZETYPES.SIZETYPES_GET_ALL_SIZETYPES,
                data: res
            });
        })
        .catch(err => {
            return dispatch({
                type: SIZETYPES.SIZETYPES_RESPONSE_FAILED,
                error: err.message
            })
        });
    };
};

export function getSizeTypeItem(id) {
    return function (dispatch) {
        dispatch(sizeTypeItemSendRequest());
        (new SizeTypesApi()).getSizeTypeById(id).then(res => {
            return dispatch({
                type: SIZETYPES.SIZETYPE_GET_SIZETYPE_ITEM,
                data: res
            });
        })
        .catch(err => {
            return dispatch({
                type: SIZETYPES.SIZETYPE_RESPONSE_FAILED,
                error: err.message
            })
        });
    };
};

export function addSizeType(item){
    return function (dispatch) {
        dispatch(sizeTypesSendRequest());
        (new SizeTypesApi()).addSizeType(item).then(res => {
            return dispatch({
                type: SIZETYPES.SIZETYPES_ADD_SIZETYPE,
                data: res,
            });
        })
        .catch(err => {
            return dispatch({
                type: SIZETYPES.SIZETYPES_RESPONSE_FAILED,
                error: err.message
            })
        })
    };
};

export function updateSizeType (item){
    return function (dispatch) {
        dispatch(sizeTypesSendRequest());
        (new SizeTypesApi()).updateSizeType(item).then(res => {
            return dispatch({
                type: SIZETYPES.SIZETYPES_UPDATE_SIZETYPE,
                data: res,
            });
        })
        .catch(err => {
            return dispatch({
                type: SIZETYPES.SIZETYPES_RESPONSE_FAILED,
                error: err.message
            })
        })
    };
};

export function deleteSizeType(item){
    console.log(item);
    return function (dispatch) {
        dispatch(sizeTypesSendRequest());
        (new SizeTypesApi()).deleteSizeType(item).then(res => {
            return dispatch({
                type: SIZETYPES.SIZETYPES_DELETE_SIZETYPE,
                data: res,
            });
        })
        .catch(err => {
            return dispatch({
                type: SIZETYPES.SIZETYPES_RESPONSE_FAILED,
                error: err.message
            })
        })
    };
};
