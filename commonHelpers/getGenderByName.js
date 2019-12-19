const Gender = require("../models/Gender");

module.exports = getGenderByName = name => {
    return Gender.findOne({ name: name.gender })
        .then(gender => {
            if (!gender) {
                return ({message: `Gender with name "${name}" is not found.`});
            } else {
                return gender;
            }
        })
        .catch(err =>  ({message: `Error happened on server: "${err}" `})
        )
};




// module.exports = function reqQueryToIdMongooseQuery(filtersQueryString) {
//     const mongooseIdQuery = {};
//     let gender = getGender(filtersQueryString.gender);
//     console.log(gender)
// }