import * as TOPCATS from '../constants/topCats';
import TopCatsApi from '../../services/TopCategories';


export function topCatsSendRequest() {
    return {
        type: TOPCATS.TOPCATS_SEND_REQUEST
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
        });
    };
};

export function getTopCatById(id) {
    return function (dispatch) {
        dispatch(topCatsSendRequest());
        (new TopCatsApi()).getTopCatById(id).then(res => {
            return dispatch({
                type: TOPCATS.TOPCATS_GET_TOPCAT_BY_ID,
                data: res.data
            });
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
    };
};

export function updateTopCat (item){
    return function (dispatch) {
        dispatch(topCatsSendRequest());
        (new TopCatsApi()).updateTopCategory(item).then(res => {
            return dispatch({
                type: TOPCATS.TOPCATS_UPDATE_TOPCAT_BY_ID,
                data: res,
            });
        })
    };
};

export function deleteTopCat(item){
    return function (dispatch) {
        dispatch(topCatsSendRequest());
        (new TopCatsApi()).deleteTopCategory(item).then(res => {
            return dispatch({
                type: TOPCATS.TOPCATS_DELETE_TOPCAT_BY_ID,
                data: res,
            });
        })
    };
};
