import * as SIZES from '../constants/sizes';
import SizesApi from '../../services/Sizes';


export function sizesSendRequest() {
    return {
        type: SIZES.SIZES_SEND_REQUEST
    };
};

export function sizeItemSendRequest() {
    return {
        type: SIZES.SIZE_SEND_REQUEST
    };
};

export function getAllSizes() {
    return function (dispatch) {
        dispatch(sizesSendRequest());
        (new SizesApi()).getSizes()
        .then(res => {
            return dispatch({
                type: SIZES.SIZES_GET_ALL_SIZES,
                data: res
            });
        })
        .catch(err => {
            return dispatch({
                type: SIZES.SIZES_RESPONSE_FAILED,
                error: err.response.data
            })
        });
    };
};

export function getSizeItem(id) {
    return function (dispatch) {
        dispatch(sizeItemSendRequest());
        (new SizesApi()).getSizeById(id)
        .then(res => {
            return dispatch({
                type: SIZES.SIZE_GET_SIZE_ITEM,
                data: res
            });
        })
        .catch(err => {
            return dispatch({
                type: SIZES.SIZE_RESPONSE_FAILED,
                error: err.response.data
            })
        });
    };
};

export function addSize(item){
    return function (dispatch) {
        dispatch(sizesSendRequest());
        (new SizesApi()).addSize(item)
        .then(res => {
            console.log(res);
            return dispatch({
                type: SIZES.SIZES_ADD_SIZE,
                data: res,
            });
        })
        .catch(err => {
            return dispatch({
                type: SIZES.SIZES_RESPONSE_FAILED,
                error: err.response.data
            })
        });
    };
};

export function updateSize (item){
    return function (dispatch) {
        dispatch(sizesSendRequest());
        (new SizesApi()).updateSize(item).then(res => {
            console.log(res);
            return dispatch({
                type: SIZES.SIZES_UPDATE_SIZE,
                data: res,
            });
        })
        .catch(err => {
            return dispatch({
                type: SIZES.SIZES_RESPONSE_FAILED,
                error: err.response.data
            })
        });
    };
};

export function deleteSize(item){
    return function (dispatch) {
        dispatch(sizesSendRequest());
        (new SizesApi()).deleteSize(item).then(res => {
            return dispatch({
                type: SIZES.SIZES_DELETE_SIZE,
                data: res,
            });
        })
        .catch(err => {
            return dispatch({
                type: SIZES.SIZES_RESPONSE_FAILED,
                error: err.response.data
            })
        });
    };
};
