const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CategorySchema = new Schema(
    {
        itemNo: {
            type: String
        },
        name: {
            type: String,
            required: true
        },
        topCategory: {
            type: Schema.Types.ObjectId,
            ref: 'topCats',
            required: true
        },
        gender: {
            type: Schema.Types.ObjectId,
            ref: "genders",
            required: true
        },
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

CategorySchema.index({ "$**": "text" });

module.exports = Category = mongoose.model(
    "categories",
    CategorySchema,
    "categories");
