const ProductGallery = require("../models/HomePageProductsGallery");
const queryCreator = require("../commonHelpers/queryCreator");
const _ = require("lodash");

exports.addProductGallery = (req, res, next) => {
    console.log(req.body)
    ProductGallery.findOne({ name: req.body.name }).then(productGallery => {
        if (productGallery) {
            return res
                .status(400)
                .json({message: `ProductGallery with name "${productGallery.name}" already exists`
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
    ProductGallery.findOne({ _id: req.params.id })
        .then(productGallery => {
            if (!productGallery) {
                return res.status(400).json({
                    message: `ProductGallery with id "${req.params.id}" is not found.`
                });
            } else {
                const productGalleryData = _.cloneDeep(req.body);
                const updatedProductGallery = queryCreator(productGalleryData);

                ProductGallery.findOneAndUpdate(
                    { _id: req.params.id },
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
    ProductGallery.findOne({ _id: req.params.id }).then(async productGallery => {
        if (!productGallery) {
            return res.status(400).json({
                message: `ProductGallery with id "${req.params.id}" is not found.`
            });
        } else {
            const productGalleryToDelete = await ProductGallery.findOne({
                _id: req.params.id
            });

            ProductGallery.deleteOne({ _id: req.params.id })
                .then(deletedCount =>
                    res.status(200).json({
                        message: `ProductGallery with id "${productGalleryToDelete.id}" is successfully deleted from DB `
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
    ProductGallery.findOne({ _id: req.params.id })
        .then(productGallery => res.status(200).json(productGallery))
        .catch(err =>
            res.status(400).json({
                message: `Error happened on server: "${err}" `
            })
        );
};