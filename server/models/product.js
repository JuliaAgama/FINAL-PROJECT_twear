const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema(
    {
    art: {
        type: String,
        required: true
    },
    enabled: {
        type: Boolean,
        required: true,
        default: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    price: {
        type: Number,
        required: true
    },
    previousPrice: {
        type: Number
    },
    categories: [
        {
            type: Schema.Types.ObjectId,
            ref: 'categories',
            required: true
        },
    ],
    genders: [
        {
            type: Schema.Types.ObjectId,
            ref: 'genders',
            required: true
        }
    ],
    quantity: {
        type: Number,
        required: true,
        default: 0
    },
    colors: [
        {
            type: Schema.Types.ObjectId,
            ref: 'colors',
            required: true
        }
    ],
    sizes: [String],
    productUrl: {
        type: String
    },
    brand: {
        type: String
    },
    manufacturer: {
        type: String
    },
    manufacturerCountry: {
        type: String
    },
    seller: {
        type: String
    },
    imgs: [
        {
        type: String,
        required: true
        }
    ],
    date: {
        type: Date,
        default: Date.now
    }
    },
    { strict: false }
);

ProductSchema.index({ "$**": "text" });

module.exports = Product = mongoose.model("products", ProductSchema, "products");
