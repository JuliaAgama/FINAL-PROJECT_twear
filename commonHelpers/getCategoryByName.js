const Category = require("../models/Category");

module.exports = getCategoryByName = name => {
    return Category.findOne({ name: name.category })
        .then(category => {
            if (!category) {
                return ({message: `Gender with name "${name}" is not found.`});
            } else {
                return category;
            }
        })
        .catch(err =>  ({message: `Error happened on server: "${err}" `})
        )
};

// categories: {_id: "5dc076a11c9d4400005a4ea3", itemNo: "", name: "", topCategory: "", gender: "", img: "", date: ""}