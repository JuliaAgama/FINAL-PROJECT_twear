import Base from './base';

export default class Customer extends Base {

    registration(customer) {
        return super.post(`customers`, customer).then(res => res.data);
    };

    login(customer){
        return super.post(`customers/login`, customer).then(res => res.data);
    };

    getCustomer(){
        return super.get(`customers/customer`).then(res => res.data);
    };

    editCustomerInfo(customer) {
        return super.put('customers', customer).then(res => res.data)
    };

    updatePassword(passwords) {
        return super.put('customers/password', passwords).then(res => res.data)
    };
}