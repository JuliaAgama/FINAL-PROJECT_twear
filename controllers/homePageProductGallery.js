const ProductGallery = require("../models/HomePageProductsGallery");

exports.addProductGallery = (req, res, next) => {
    ProductGallery.findOne({ customId: req.body.customId }).then(productGallery => {
        if (productGallery) {
            return res.status(400).json({
                message: `ProductGallery with customId "${productGallery.customId}" already exists`
            });
        } else {
            const productGallery = _.cloneDeep(req.body);
            const newProductGallery = new ProductGallery(queryCreator(productGallery));

            newProductGallery
                .save()
                .then(productGallery => res.status(200).json(productGallery))
                .catch(err =>
                    res.status(400).json({
                        message: `Error happened on server: "${err}" `
                    })
                );
        }
    });
};

exports.updateProductGallery = (req, res, next) => {
    ProductGallery.findOne({ customId: req.params.customId })
        .then(productGallery => {
            if (!productGallery) {
                return res.status(400).json({
                    message: `ProductGallery with customId "${req.params.customId}" is not found.`
                });
            } else {
                const productGalleryData = _.cloneDeep(req.body);
                const updatedProductGallery = queryCreator(productGalleryData);

                ProductGallery.findOneAndUpdate(
                    { customId: req.params.customId },
                    { $set: updatedProductGallery },
                    { new: true }
                )
                    .then(productGallery => res.json(productGallery))
                    .catch(err =>
                        res.status(400).json({
                            message: `Error happened on server: "${err}" `
                        })
                    );
            }
        })
        .catch(err =>
            res.status(400).json({
                message: `Error happened on server: "${err}" `
            })
        );
};

exports.deleteProductGallery = (req, res, next) => {
    ProductGallery.findOne({ customId: req.params.customId }).then(async productGallery => {
        if (!productGallery) {
            return res.status(400).json({
                message: `ProductGallery with customId "${req.params.customId}" is not found.`
            });
        } else {
            const productGalleryToDelete = await ProductGallery.findOne({
                customId: req.params.customId
            });

            ProductGallery.deleteOne({ customId: req.params.customId })
                .then(deletedCount =>
                    res.status(200).json({
                        message: `ProductGallery with name "${productGalleryToDelete.customId}" is successfully deleted from DB `
                    })
                )
                .catch(err =>
                    res.status(400).json({
                        message: `Error happened on server: "${err}" `
                    })
                );
        }
    });
};

exports.getProductsGallery = (req, res, next) => {
    ProductGallery.find()
        .then(productGallery => res.status(200).json(productGallery))
        .catch(err =>
            res.status(400).json({
                message: `Error happened on server: "${err}" `
            })
        );
};

exports.getProductGalleryById = (req, res, next) => {
    ProductGallery.findOne({ customId: req.params.customId })
        .then(productGallery => res.status(200).json(productGallery))
        .catch(err =>
            res.status(400).json({
                message: `Error happened on server: "${err}" `
            })
        );
};