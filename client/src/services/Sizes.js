import Base from './base';

export default class Sizes extends Base {

    getSizes() {
        return super.get(`sizes`)
        .then(res => res.data)
        // .catch(err => err.response.data);
    }

    getSizesByMatch(item) {
        return super.post(`sizes/match`, item)
        .then(res => res.data)
        // .catch(err => err.response.data);
    }

    getSizeById(id) {
        return super.get(`sizes/${id}`)
        .then(res => res.data)
        // .catch(err => err.response.data);
    }

    addSize(size) {
        return super.post(`sizes`, size)
        .then(res => res.data)
        // .catch(err => err.response.data);
    }

    updateSize(size){
        return super.put(`sizes/${size._id}`, size)
        .then(res => res.data)
        // .catch(err => err.response.data);
    }

    deleteSize(size){
        return super.delete(`sizes/${size._id}`, size)
        .then(res => res.data)
        // .catch(err => err.response.data);
    }
};
