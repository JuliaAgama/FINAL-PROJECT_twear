import Base from './base';


export default class Products extends Base {
    getProductsByCategories(categoryId) {
        return super.get(`products-?categoryId=${categoryId}`).then(res => res.data);
    }

    getProductById(id) {
        return super.get('products/' + id);
    }

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
