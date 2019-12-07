import Base from './base';

export default class Products extends Base {

    getAllProducts() {
        return super.get('products/')
        .then(res => res.data)
        // .catch(err => err.response.data);
    }

    getProductsByFilter(filter) {
        return super.get(`products/filter?`+filter)
        .then(res => res.data)
        // .catch(err => err.response.data);
    }

    getProductsBySearch(searchValue) {
        return super.post(`products/search`, {query: searchValue})
        .then(res => res.data)
        // .catch(err => err.response.data);
    }

    getProductsByMatch(item) {
        return super.post(`products/match`, item)
        .then(res => res.data)
        // .catch(err => err.response.data);
    }

    getProductById(id) {
        return super.get('products/' + id)
        .then(res => res.data)
        // .catch(err => err.response.data);
    }

    getProductByItemNo(itemNo) {
        return super.get('products/itemNo/' + itemNo)
        .then(res => res.data)
        // .catch(err => err.response.data);
    }

    addProduct(product) {
        return super.post(`products`, product)
        .then(res => res.data)
        // .catch(err => err.response.data);
    }

    updateProduct(product){
        return super.put(`products/${product._id}`, product)
        .then(res => res.data)
        // .catch(err => err.response.data);
    }

    deleteProductById(product){
        return super.delete(`products/${product._id}`, product)
        .then(res => res.data)
        // .catch(err => err.response.data);
    }
};
