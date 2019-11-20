const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SizeTypeSchema = new Schema(
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

module.exports = SizeType = mongoose.model(
    "sizeTypes",
    SizeTypeSchema,
    "sizeTypes"
    );
