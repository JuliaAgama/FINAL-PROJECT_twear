import Base from './base';


export default class Products extends Base {

    getAllProducts() {
        return super.get('products/');
    };

    getProductsByCategory(category) {
        return super.get(`products/filter`, category).then(res => res.data);
    }

    getProductById(id) {
        return super.get('products/' + id);
    };

    addProduct(product) {
        return super.post(`products`, product).then(res => res.data);
    }

    updateProduct(product){
        return super.put(`products/${product._id}`, product).then(res => res.data);
    }

    deleteProductById(id){
        return super.delete(`products/${id}`, id).then(res => res.data);
    }
};
