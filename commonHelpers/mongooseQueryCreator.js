const getGenderByName = require("./getGenderByName");
const getCategoryByName = require("./getCategoryByName");
const getColorByName = require("./getColorByName");

module.exports =  mongooseQueryCreator = async queryString => {
    const color  = queryString.color;
    let mongooseQuery = null;
    let colorObj = null;
    const categoryObj = await getCategoryByName(queryString);
    if (color && color !== 'undefined') {
         colorObj = await getColorByName(queryString);
    }
    if (!colorObj) {
        mongooseQuery = {
            'categories.category' : categoryObj
        }
    } else {
        mongooseQuery = {
            'categories.category' : categoryObj,
            'colors.color' : colorObj
        }
    }

    return  mongooseQuery;
};