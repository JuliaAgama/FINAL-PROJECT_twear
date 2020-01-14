import Base from './base';

export default class Currency extends Base {

    getCurrency() {
        return super.get('currency')
            .then(res => res.data)
    }
};