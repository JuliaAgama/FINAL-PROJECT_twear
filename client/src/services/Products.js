import Base from './base';

export default class Products extends Base {

    getAllProducts() {
        return super.get('products/');
    }

    getProductsByFilter(filter) {
        return super.get(`products/filter`, filter).then(res => res.data);
    }

    getProductsBySearch(search) {
        return super.get(`products/search`, search).then(res => res.data);
    }

    getProductById(id) {n
        return super.get('products/' + id);
    }

    addProduct(product) {
        return super.post(`products`, product).then(res => res.data);
    }

    updateProduct(product){
        return super.put(`products/${product._id}`, product).then(res => res.data);
    }

    deleteProductById(product){
        return super.delete(`products/${product._id}`, product).then(res => res.data);
    }
};
