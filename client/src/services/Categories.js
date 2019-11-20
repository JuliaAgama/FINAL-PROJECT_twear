import Base from './base';

export default class Categories extends Base {

    getCategories() {
        return super.get(`categories`)
        .then(res => res.data)
        // .catch(err => err.response.data);
    }

    getCategoriesBySearch(searchValue) {
        return super.post(`categories/search`, {query: searchValue})
        .then(res => res.data)
        // .catch(err => err.response.data);
    }

    getCategoriesByMatch(item) {
        return super.post(`categories/match`, item)
        .then(res => res.data)
        // .catch(err => err.response.data);
    }

    getCategoryById(id) {
        return super.get(`categories/${id}`)
        .then(res => res.data)
        // .catch(err => err.response.data);
    }

    addCategory(category) {
        return super.post(`categories`, category)
        .then(res => res.data)
        // .catch(err => err.response.data);
    }

    updateCategory(category){
        return super.put(`categories/${category._id}`, category)
        .then(res => res.data)
        // .catch(err => err.response.data);
    }

    deleteCategory(category){
        return super.delete(`categories/${category._id}`, category)
        .then(res => res.data)
        // .catch(err => err.response.data);
    }
}