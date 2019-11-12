import Base from './base';

export default class Genders extends Base {

    getGenders() {
        return super.get(`genders`)
        // .then(res => {console.log('this is Genders API', res.data); return res})
        .then(res => res.data);
    };

    addGender(gender) {
        return super.post(`genders`, gender).then(res => res.data);
    };

    deleteGender(id){
        return super.delete(`genders/${id}`, id).then(res => res.data);
    };

    updateGender(gender){
        return super.put(`genders/${gender._id}`, gender).then(res => res.data);
    }
}