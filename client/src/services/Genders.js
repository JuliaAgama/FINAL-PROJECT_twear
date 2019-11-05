import Base from './base';

export default class Genders extends Base {

    getGenders() {
        return super.get(`top-categories`).then(res => res.data);
    }

}