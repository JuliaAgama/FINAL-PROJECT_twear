const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GenderSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            default: Date.now
        }
    },
    { strict: false }
);

module.exports = Gender = mongoose.model("genders", GenderSchema, "genders");
