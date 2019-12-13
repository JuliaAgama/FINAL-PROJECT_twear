const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ArchiveSchema = new Schema(
    {
        itemNo: {
            type: String,
            required: true
        },
        enabled: {
            type: Boolean,
            required: true,
            default: true
        },
        name: {
            type: String,
            required: true
        },
        description: String,
        price: {
            type: Number,
            required: true,
            default: 0
        },
        previousPrice: Number,
        categories: [{
            category: {
                type: Schema.Types.ObjectId,
                ref: "categories",
                required: true
            }
        }],
        gender: {
            type: Schema.Types.ObjectId,
            ref: "genders",
            required: true
        },
        sizeType: {
            type: Schema.Types.ObjectId,
            ref: "sizeTypes",
            required: true
        },
        colors: [{
            color: {
                type: Schema.Types.ObjectId,
                ref: "colors",
                required: true
            },
            enabled: {
                type: Boolean,
                required: true,
                default: true
            },
            sizes: [{
                size: {
                    type: Schema.Types.ObjectId,
                    ref: "sizes",
                    required: true
                },
                enabled: {
                    type: Boolean,
                    required: true,
                    default: true
                },
                quantity: {
                    type: Number,
                    required: true,
                    default: 0
                }
            }],
            imgsColor: [String]
        }],
        imgs: [String],
        productUrl: String,
        brand: String,
        manufacturer: String,
        manufacturerCountry: String,
        seller: String,
        date: {
            type: Date,
            default: Date.now
        }
    },
    { strict: false }
);

ArchiveSchema.index({ "$**": "text" });

module.exports = Archive = mongoose.model(
    "archive",
    ArchiveSchema,
    "archive"
);
