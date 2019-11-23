import * as COLORS from '../constants/colors';
import ColorsApi from '../../services/Colors';


export function colorsSendRequest() {
    return {
        type: COLORS.COLORS_SEND_REQUEST
    };
};

export function colorItemSendRequest() {
    return {
        type: COLORS.COLOR_SEND_REQUEST
    };
};

export function getAllColors() {
    return function (dispatch) {
        dispatch(colorsSendRequest());
        (new ColorsApi()).getColors().then(res => {
            return dispatch({
                type: COLORS.COLORS_GET_ALL_COLORS,
                data: res
            });
        })
        .catch(err => {
            return dispatch({
                type: COLORS.COLORS_RESPONSE_FAILED,
                error: err.response.data
            })
        });
    };
};

export function getColorItem(id) {
    return function (dispatch) {
        dispatch(colorItemSendRequest());
        (new ColorsApi()).getColorById(id).then(res => {
            return dispatch({
                type: COLORS.COLOR_GET_COLOR_ITEM,
                data: res
            });
        })
        .catch(err => {
            return dispatch({
                type: COLORS.COLOR_RESPONSE_FAILED,
                error: err.response.data
            })
        });
    };
};

export function addColor(item){
    return function (dispatch) {
        dispatch(colorsSendRequest());
        (new ColorsApi()).addColor(item).then(res => {
            return dispatch({
                type: COLORS.COLORS_ADD_COLOR,
                data: res,
            });
        })
        .catch(err => {
            return dispatch({
                type: COLORS.COLORS_RESPONSE_FAILED,
                error: err.response.data
            })
        })
    };
};

export function updateColor (item){
    return function (dispatch) {
        dispatch(colorsSendRequest());
        (new ColorsApi()).updateColor(item).then(res => {
            return dispatch({
                type: COLORS.COLORS_UPDATE_COLOR,
                data: res,
            });
        })
        .catch(err => {
            return dispatch({
                type: COLORS.COLORS_RESPONSE_FAILED,
                error: err.response.data
            })
        })
    };
};

export function deleteColor(item){
    return function (dispatch) {
        dispatch(colorsSendRequest());
        (new ColorsApi()).deleteColor(item).then(res => {
            return dispatch({
                type: COLORS.COLORS_DELETE_COLOR,
                data: res,
            });
        })
        .catch(err => {
            return dispatch({
                type: COLORS.COLORS_RESPONSE_FAILED,
                error: err.response.data
            })
        })
    };
};
