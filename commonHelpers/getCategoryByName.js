const Category = require("../models/Category");

module.exports = getCategoryByName = name => {
    return Category.findOne({ name: name.category })
        .then(category => {
            if (!category) {
                return ({message: `Category with name "${name}" is not found.`});
            } else {
                return category;
            }
        })
        .catch(err =>  ({message: `Error happened on server: "${err}" `})
        )
};
