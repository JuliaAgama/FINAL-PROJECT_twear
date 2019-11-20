import * as CATEGORIES from '../constants/categories';
import CategoriesApi from '../../services/Categories';


export function categoriesSendRequest() {
    return {
        type: CATEGORIES.CATEGORIES_SEND_REQUEST
    };
};

export function getAllCategories() {
    return function (dispatch) {
        dispatch(categoriesSendRequest());
        (new CategoriesApi()).getCategories().then(res => {
            return dispatch({
                type: CATEGORIES.CATEGORIES_GET_ALL_CATEGORIES,
                data: res
            });
        });
    };
};

export function getCategoryById(id) {
    return function (dispatch) {
        dispatch(categoriesSendRequest());
        (new CategoriesApi()).getCategoryById(id).then(res => {
            return dispatch({
                type: CATEGORIES.CATEGORIES_GET_CATEGORY_BY_ID,
                data: res.data
            });
        });
    };
};

export function addCategory(item){
    return function (dispatch) {
        dispatch(categoriesSendRequest());
        (new CategoriesApi()).addCategory(item).then(res => {
            return dispatch({
                type: CATEGORIES.CATEGORIES_ADD_CATEGORY,
                data: res,
            });
        })
    };
};

export function updateCategory (item){
    return function (dispatch) {
        dispatch(categoriesSendRequest());
        (new CategoriesApi()).updateCategory(item).then(res => {
            return dispatch({
                type: CATEGORIES.CATEGORIES_UPDATE_CATEGORY_BY_ID,
                data: res,
            });
        })
    };
};

export function deleteCategory(item){
    return function (dispatch) {
        dispatch(categoriesSendRequest());
        (new CategoriesApi()).deleteCategory(item).then(res => {
            return dispatch({
                type: CATEGORIES.CATEGORIES_DELETE_CATEGORY_BY_ID,
                data: res,
            });
        })
    };
};
