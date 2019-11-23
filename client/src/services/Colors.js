import Base from './base';

export default class Colors extends Base {

    getColors() {
        return super.get(`colors`)
        .then(res => res.data)
        //.catch(err => err.response.data);
    }

    getColorById(id) {
        return super.get(`colors/${id}`)
        .then(res => res.data)
        //.catch(err => err.response.data);
    }

    addColor(color) {
        return super.post(`colors`, color)
        .then(res => res.data)
        // .catch(err => err.response.data);
    }

    updateColor(color){
        return super.put(`colors/${color._id}`, color)
        .then(res => res.data)
        // .catch(err => err.response.data);
    }

    deleteColor(color){
        return super.delete(`colors/${color._id}`, color)
        .then(res => res.data)
        // .catch(err => err.response.data);
    }
};
