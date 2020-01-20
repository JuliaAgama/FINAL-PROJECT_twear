import * as ORDERS from '../constants/orders';
import OrdersApi from '../../services/Orders';


export function ordersSendRequest() {
    return {
        type: ORDERS.ORDERS_SEND_REQUEST
    };
};

export function orderItemSendRequest() {
    return {
        type: ORDERS.ORDER_SEND_REQUEST
    };
};

export function getAllOrders() {
    return function (dispatch) {
        dispatch(ordersSendRequest());
        (new OrdersApi()).getAllOrders().then(res => {
            return dispatch({
                type: ORDERS.ORDERS_GET_ALL_ORDERS,
                data: res
            });
        })
        .catch(err => {
            return dispatch({
                type: ORDERS.ORDERS_RESPONSE_FAILED,
                error: err.message
            })
        });
    };
};

export function getOrderItem(orderItem) {
    return function (dispatch) {
        dispatch(orderItemSendRequest());
        if (orderItem._id) {
            (new OrdersApi()).getOrderById(orderItem._id).then(res => {
                return dispatch({
                    type: ORDERS.ORDER_GET_ORDER_ITEM,
                    data: res
                });
            })
            .catch(err => {
                return dispatch({
                    type: ORDERS.ORDER_RESPONSE_FAILED,
                    error: err.message
                })
            });
        } else {
            return dispatch({
                type: ORDERS.ORDER_GET_ORDER_ITEM,
                data: orderItem
            })
        }
    };
};

export function cleanOrderItem(orderItem) {
    return function (dispatch) {
        dispatch(orderItemSendRequest());
        return dispatch({
            type: ORDERS.ORDER_CLEAN_ORDER_ITEM,
            data: orderItem
        })
    }
};

export function getOrderItemByItemNo(itemNo) {
    return function (dispatch) {
        dispatch(orderItemSendRequest());
        (new OrdersApi()).getOrderByItemNo(itemNo).then(res => {
            return dispatch({
                type: ORDERS.ORDER_GET_ORDER_ITEM_BY_ITEMNO,
                data: res
            });
        })
        .catch(err => {
            return dispatch({
                type: ORDERS.ORDER_RESPONSE_FAILED,
                error: err.message
            })
        });
    };
};

export function addOrder(item){
    return function (dispatch) {
        dispatch(ordersSendRequest());
        (new OrdersApi()).addOrder(item).then(res => {
            return dispatch({
                type: ORDERS.ORDERS_ADD_ORDER,
                data: res,
            });
        })
        .catch(err => {
            return dispatch({
                type: ORDERS.ORDERS_RESPONSE_FAILED,
                error: err.message
            })
        })
    };
};

export function updateOrder (item){
    return function (dispatch) {
        dispatch(ordersSendRequest());
        (new OrdersApi()).updateOrder(item).then(res => {
            return dispatch({
                type: ORDERS.ORDERS_UPDATE_ORDER,
                data: res,
            });
        })
        .catch(err => {
            return dispatch({
                type: ORDERS.ORDERS_RESPONSE_FAILED,
                error: err.message
            })
        })
    };
};

export function deleteOrder(item){
    return function (dispatch) {
        dispatch(ordersSendRequest());
        (new OrdersApi()).deleteOrder(item).then(res => {
            return dispatch({
                type: ORDERS.ORDERS_DELETE_ORDER,
                data: res,
            });
        })
        .catch(err => {
            return dispatch({
                type: ORDERS.ORDERS_RESPONSE_FAILED,
                error: err.message
            })
        })
    };
};
