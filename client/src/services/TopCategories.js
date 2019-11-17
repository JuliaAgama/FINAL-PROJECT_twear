import Base from './base';

export default class TopCategories extends Base {

    getTopCategories() {
        return super.get(`top-categories`)
        .then(res => res.data)
        // .catch(err => err.response.data);
    }

    getTopCategoryById(id) {
        return super.get(`top-categories/${id}`)
        .then(res => res.data)
        // .catch(err => err.response.data);
    }

    addTopCategory(topCategory) {
        return super.post(`top-categories`, topCategory)
        .then(res => res.data)
        // .catch(err => err.response.data);
    }

    updateTopCategory(topCategory){
        return super.put(`top-categories/${topCategory._id}`, topCategory)
        .then(res => res.data)
        // .catch(err => err.response.data);
    }

    deleteTopCategory(topCategory){
        return super.delete(`top-categories/${topCategory._id}`, topCategory)
        .then(res => res.data)
        // .catch(err => err.response.data);
    }
};
