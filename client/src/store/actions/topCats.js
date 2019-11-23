import * as TOPCATS from '../constants/topCats';
import TopCatsApi from '../../services/TopCats';


export function topCatsSendRequest() {
    return {
        type: TOPCATS.TOPCATS_SEND_REQUEST
    };
};

export function topCatItemSendRequest() {
    return {
        type: TOPCATS.TOPCAT_SEND_REQUEST
    };
};

export function getAllTopCats() {
    return function (dispatch) {
        dispatch(topCatsSendRequest());
        (new TopCatsApi()).getTopCategories().then(res => {
            return dispatch({
                type: TOPCATS.TOPCATS_GET_ALL_TOPCATS,
                data: res
            });
        })
        .catch(err => {
            return dispatch({
                type: TOPCATS.TOPCATS_RESPONSE_FAILED,
                error: err.response.data
            })
        });
    };
};

export function getTopCatItem(id) {
    return function (dispatch) {
        dispatch(topCatItemSendRequest());
        (new TopCatsApi()).getTopCategoryById(id).then(res => {
            return dispatch({
                type: TOPCATS.TOPCAT_GET_TOPCAT_ITEM,
                data: res
            });
        })
        .catch(err => {
            return dispatch({
                type: TOPCATS.TOPCAT_RESPONSE_FAILED,
                error: err.response.data
            })
        });
    };
};

export function addTopCat(item){
    return function (dispatch) {
        dispatch(topCatsSendRequest());
        (new TopCatsApi()).addTopCategory(item).then(res => {
            return dispatch({
                type: TOPCATS.TOPCATS_ADD_TOPCAT,
                data: res,
            });
        })
        .catch(err => {
            return dispatch({
                type: TOPCATS.TOPCATS_RESPONSE_FAILED,
                error: err.response.data
            })
        })
    };
};

export function updateTopCat (item){
    return function (dispatch) {
        dispatch(topCatsSendRequest());
        (new TopCatsApi()).updateTopCategory(item).then(res => {
            return dispatch({
                type: TOPCATS.TOPCATS_UPDATE_TOPCAT,
                data: res,
            });
        })
        .catch(err => {
            return dispatch({
                type: TOPCATS.TOPCATS_RESPONSE_FAILED,
                error: err.response.data
            })
        })
    };
};

export function deleteTopCat(item){
    console.log(item);
    return function (dispatch) {
        dispatch(topCatsSendRequest());
        (new TopCatsApi()).deleteTopCategory(item).then(res => {
            return dispatch({
                type: TOPCATS.TOPCATS_DELETE_TOPCAT,
                data: res,
            });
        })
        .catch(err => {
            return dispatch({
                type: TOPCATS.TOPCATS_RESPONSE_FAILED,
                error: err.response.data
            })
        })
    };
};
