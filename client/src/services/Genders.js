import Base from './base';

export default class Genders extends Base {

    getGenders() {
        return super.get(`genders`).then(res => res.data);
    }

}