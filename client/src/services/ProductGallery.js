import Base from './base';

export default class ProductGallery extends Base {

    getProductsGallery() {
        return super.get(`productsGallery`)
            .then(res => res.data)
        //.catch(err => err.response.data);
    }

    getProductGalleryById(customId) {
        return super.get(`productsGallery/${customId}`)
            .then(res => res.data)
        //.catch(err => err.response.data);
    }

    addProductGallery(productGallery) {
        return super.post(`productsGallery`, productGallery)
            .then(res => res.data)
        // .catch(err => err.response.data);
    }

    updateProductGallery(productGallery){
        return super.put(`productsGallery/${productGallery.customId}`, productGallery)
            .then(res => res.data)
        // .catch(err => err.response.data);
    }

    deleteProductGallery(productGallery){
        return super.delete(`productsGallery/${productGallery.customId}`, productGallery)
            .then(res => res.data)
        // .catch(err => err.response.data);
    }
};