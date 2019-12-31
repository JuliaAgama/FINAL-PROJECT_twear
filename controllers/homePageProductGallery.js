const ProductGallery = require("../models/HomePageProductsGallery");
const queryCreator = require("../commonHelpers/queryCreator");
const getProductsByItemNoArr = require("../commonHelpers/getProductsByItemNoArr");
const getCategoriesByIdArr = require("../commonHelpers/getGategoriesByIdArr");
const _ = require("lodash");

exports.addProductGallery = (req, res, next) => {
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

exports.getProductGalleryForShow = (req, res, next) => {
    let result;
    ProductGallery.findOne({ isShow: req.params.isShow })
        .then(productGallery => {
          const itemNoArr = [];
          result = productGallery;
          productGallery.checkedProduct.forEach(item => itemNoArr.push(item.itemNo));
          return itemNoArr;
        })
        .then(itemNoArr => getProductsByItemNoArr(itemNoArr))
        .then(data => result.checkedProduct = data)
        .then(() => getCategoriesByIdArr([result.links.womenLinkID, result.links.menLinkID]))
        .then(data => {
            result.links.womenLinkID = data[0].name;
            result.links.menLinkID = data[1].name;
        })
        .then(() => res.status(200).json(result))
        .catch(err =>
            res.status(400).json({
                message: `Error happened on server: "${err}" `
            })
        );
};