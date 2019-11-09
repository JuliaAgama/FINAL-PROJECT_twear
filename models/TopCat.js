const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TopCatSchema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        img: {
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

module.exports = TopCat = mongoose.model("topCats", TopCatSchema, "topCats");
