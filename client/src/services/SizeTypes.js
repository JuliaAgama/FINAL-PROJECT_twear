import Base from './base';

export default class SizeTypes extends Base {

    getSizeTypes() {
        return super.get(`size-types`)
        .then(res => res.data)
        // .catch(err => err.response.data);
    }

    getSizeTypeById(id) {
        return super.get(`size-types/${id}`)
        .then(res => res.data)
        // .catch(err => err.response.data);
    }

    addSizeType(sizeType) {
        return super.post(`size-types`, sizeType)
        .then(res => res.data)
        // .catch(err => err.response.data);
    }

    updateSizeType(sizeType){
        return super.put(`size-types/${sizeType._id}`, sizeType)
        .then(res => res.data)
        // .catch(err => err.response.data);
    }

    deleteSizeType(sizeType){
        return super.delete(`size-types/${sizeType._id}`, sizeType)
        .then(res => res.data)
        // .catch(err => err.response.data);
    }
};
