const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CatalogSchema = new Schema(
    {
        id: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        topCategory: {
            type: Schema.Types.ObjectId,
            ref: 'TopCat'
        },
        sizesGrid: {
            type: Schema.Types.ObjectId,
            ref: 'Size'
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

module.exports = Catalog = mongoose.model("categories", CatalogSchema, "categories");
