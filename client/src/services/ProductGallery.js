import Base from './base';

export default class ProductGallery extends Base {

    getProductsGallery() {
        return super.get(`productsGallery`)
            .then(res => res.data)
        //.catch(err => err.response.data);
    }

    getProductGalleryById(customId) {
        return super.get(`productGallery/${customId}`)
            .then(res => res.data)
        //.catch(err => err.response.data);
    }

    addProductGallery(productGallery) {
        return super.post(`productGallery`, productGallery)
            .then(res => res.data)
        // .catch(err => err.response.data);
    }

    updateProductGallery(productGallery){
        return super.put(`productGallery/${productGallery.customId}`, productGallery)
            .then(res => res.data)
        // .catch(err => err.response.data);
    }

    deleteProductGallery(productGallery){
        return super.delete(`productGallery/${productGallery.customId}`, productGallery)
            .then(res => res.data)
        // .catch(err => err.response.data);
    }
};