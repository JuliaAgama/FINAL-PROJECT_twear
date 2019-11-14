import Base from './base';

export default class Categories extends Base {

    getCategories() {
        return super.get(`categories`).then(res => res.data);
    };

    getCategoryById(id) {
        return super.get(`categories/${id}`).then(res => res.data);
    };

    addCategory(category) {
        return super.post(`categories`, category).then(res => res.data);
    };

    deleteCategory(id){
        return super.delete(`categories/${id}`, id).then(res => res.data);
    };

    updateCategory(category){
        return super.put(`categories/${category._id}`, category).then(res => res.data);
    }
}