import Base from './base';

export default class TopCategories extends Base {

    getTopCategories() {
        return super.get(`top-categories`).then(res => res.data);
    };

    addTopCategory(topCategory) {
        return super.post(`top-categories`, topCategory).then(res => res.data)
    };

    deleteTopCategory(id){
        return super.delete(`top-categories/${id}`, id).then(res => res.data);
    };

    updateTopCategory(topCategory){
        return super.put(`top-categories/${topCategory._id}`, topCategory).then(res => res.data);
    }
}