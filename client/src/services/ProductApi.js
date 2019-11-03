import Base from './base';


export default class ProductApi extends Base {
    getProductsByCategories(id) {
        return super.get(`products?categoryId=${id}`).then(res => res.data);
    }
    getProductById(id) {
        return super.get('products/' + id);
    }
};
