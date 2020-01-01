const Category = require("../models/Category");

module.exports = getCategoriesByIdArr = idArr => {
    return Category.find({ _id: {$in: idArr} })
        .then(categories =>categories)
        .catch(err =>  ({message: `Error happened on server: "${err}" `})
        )
};