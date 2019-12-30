import Base from './base';

export default class ProductGallery extends Base {

    getProductsGallery() {
        return super.get(`productsGallery`)
            .then(res => res.data)
        //.catch(err => err.response.data);
    }

    getProductGalleryForShow(isShow) {
        return super.get(`productsGallery/${isShow}`)
            .then(res => res.data)
        //.catch(err => err.response.data);
    }

    addProductGallery(productGallery) {
        return super.post(`productsGallery`, productGallery)
            .then(res => res.data)
        // .catch(err => err.response.data);
    }

    updateProductGallery(productGallery){
        return super.put(`productsGallery/${productGallery._id}`, productGallery)
            .then(res => res.data)
        // .catch(err => err.response.data);
    }

    deleteProductGallery(productGallery){
        return super.delete(`productsGallery/${productGallery._id}`, productGallery)
            .then(res => res.data)
        // .catch(err => err.response.data);
    }
};