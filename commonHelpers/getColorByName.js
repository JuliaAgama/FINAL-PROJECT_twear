const Color = require("../models/Color");

module.exports = getCategoryByName = name => {
    return Color.findOne({ name: name.color })
        .then(color => {
            if (!color) {
                return ({message: `Color with name "${name}" is not found.`});
            } else {
                return color;
            }
        })
        .catch(err =>  ({message: `Error happened on server: "${err}" `})
        )
};