const Product = require("../models/Product");

module.exports = getProductsByItemNoArr = itemNoArr => {
    return  Product.find({itemNo: {$in: itemNoArr}})
            .populate("categories.category")
            .populate("categories.category.topCategory")// is not populated, doesn't work this way
            .populate("gender")
            .populate("sizeType")
            .populate("colors.color")
            .populate("colors.sizes.size")
            .populate("colors.sizes.size.sizeType")// is not populated, doesn't work this way
            .then(products => products)
            .catch(err =>
                res.status(400).json({
                    message: `Error happened on server: "${err}" `
                })
            );
};