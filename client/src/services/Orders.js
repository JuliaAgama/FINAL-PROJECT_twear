import Base from './base';

export default class Orders extends Base {

    getAllOrders() {
        return super.get('orders/')
        .then(res => res.data)
    }

    getOrdersByFilter(filter) {
        return super.get(`orders/filter?`+filter)
        .then(res => res.data)
    }

    getOrdersByMatch(item) { // e.g. by customerId
        return super.post(`orders/match`, item)
        .then(res => res.data)
    }

    getOrderById(id) {
        return super.get('orders/' + id)
        .then(res => res.data)
    }

    getOrderByOrderNo(orderNo) {
        return super.get('orders/orderNo/' + orderNo)
        .then(res => res.data)
    }

    addOrder(order) {
        // if (localStorage.getItem('token')) {
            return super.post(`orders`, order)
            .then(res => res.data)
        // }
    }

    updateOrder(order){
        return super.put(`orders/${order._id}`, order)
        .then(res => res.data)
    }

    deleteOrder(order){
        return super.delete(`orders/${order._id}`, order)
        .then(res => res.data)
    }
};
