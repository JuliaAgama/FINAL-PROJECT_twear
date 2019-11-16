import Base from './base';

export default class Genders extends Base {

    getGenders() {
        return super.get(`genders`)
        .then(res => res.data);
    }

    getGenderById(id) {
        return super.get(`genders/${id}`).then(res => res.data);
    }

    addGender(gender) {
        return super.post(`genders`, gender).then(res => res.data);
    }

    updateGender(gender){
        return super.put(`genders/${gender._id}`, gender).then(res => res.data);
    }

    deleteGender(gender){
        return super.delete(`genders/${gender._id}`, gender).then(res => res.data);
    }
};
