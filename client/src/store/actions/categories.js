import * as CATEGORIES from '../constants/categories';
import CategoriesApi from '../../services/Categories';


export function categoriesSendRequest() {
    return {
        type: CATEGORIES.CATEGORIES_SEND_REQUEST
    };
};

export function categoryItemSendRequest() {
    return {
        type: CATEGORIES.CATEGORY_SEND_REQUEST
    };
};

export function getAllCategories() {
    return function (dispatch) {
        dispatch(categoriesSendRequest());
        (new CategoriesApi()).getCategories()
        .then(res => {
            return dispatch({
                type: CATEGORIES.CATEGORIES_GET_ALL_CATEGORIES,
                data: res
            });
        })
        .catch(err => {
            return dispatch({
                type: CATEGORIES.CATEGORIES_RESPONSE_FAILED,
                error: err.message
            })
        });
    };
};

export function getCategoriesBySearch(searchValue) {
    return function (dispatch) {
        dispatch(categoriesSendRequest());
        (new CategoriesApi()).getCategoriesBySearch(searchValue).then(res => {
            return dispatch({
                type: CATEGORIES.CATEGORIES_GET_CATEGORIES_BY_SEARCH,
                data: res
            });
        })
        .catch(err => {
            return dispatch({
                type: CATEGORIES.CATEGORIES_RESPONSE_FAILED,
                error: err.message
            })
        });
    };
};

export function getCategoriesByParentId(topCatId) {
    return function (dispatch) {
        dispatch(categoriesSendRequest());
        (new CategoriesApi()).getCategoriesByMatch({topCategory: topCatId}).then(res => {
            return dispatch({
                type: CATEGORIES.CATEGORIES_GET_CATEGORIES_BY_PARENT_ID,
                data: res
            });
        })
        .catch(err => {
            return dispatch({
                type: CATEGORIES.CATEGORIES_RESPONSE_FAILED,
                error: err.message
            })
        });
    };
};

export function getCategoryItem(id) {
    return function (dispatch) {
        dispatch(categoryItemSendRequest());
        (new CategoriesApi()).getCategoryById(id)
        .then(res => {
            return dispatch({
                type: CATEGORIES.CATEGORY_GET_CATEGORY_ITEM,
                data: res
            });
        })
        .catch(err => {
            return dispatch({
                type: CATEGORIES.CATEGORY_RESPONSE_FAILED,
                error: err.message
            })
        });
    };
};

export function addCategory(item){
    return function (dispatch) {
        dispatch(categoriesSendRequest());
        (new CategoriesApi()).addCategory(item)
        .then(res => {
            console.log(res);
            return dispatch({
                type: CATEGORIES.CATEGORIES_ADD_CATEGORY,
                data: res,
            });
        })
        .catch(err => {
            return dispatch({
                type: CATEGORIES.CATEGORIES_RESPONSE_FAILED,
                error: err.message
            })
        });
    };
};

export function updateCategory (item){
    console.log('categories Api update item:', item)
    return function (dispatch) {
        dispatch(categoriesSendRequest());
        (new CategoriesApi()).updateCategory(item).then(res => {
            console.log(res);
            return dispatch({
                type: CATEGORIES.CATEGORIES_UPDATE_CATEGORY,
                data: res,
            });
        })
        .catch(err => {
            return dispatch({
                type: CATEGORIES.CATEGORIES_RESPONSE_FAILED,
                error: err.message
            })
        });
    };
};

export function deleteCategory(item){
    return function (dispatch) {
        dispatch(categoriesSendRequest());
        (new CategoriesApi()).deleteCategory(item).then(res => {
            return dispatch({
                type: CATEGORIES.CATEGORIES_DELETE_CATEGORY,
                data: res,
            });
        })
        .catch(err => {
            return dispatch({
                type: CATEGORIES.CATEGORIES_RESPONSE_FAILED,
                error: err.message
            })
        });
    };
};
