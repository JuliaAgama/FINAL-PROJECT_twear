const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CatalogSchema = new Schema(
    {
        itemNo: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        topCategory: {
            type: Schema.Types.ObjectId,
            ref: 'topCats'
        },
        genders: [
            {
                type: Schema.Types.ObjectId,
                ref: "genders",
                // required: true
            }
        ],
        img: {
            type: String,
        },
        date: {
            type: Date,
            default: Date.now()
        }
    },
    { strict: false }
);

module.exports = Catalog = mongoose.model("categories", CatalogSchema, "categories");
