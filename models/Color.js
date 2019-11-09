const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ColorSchema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        cssValue: String,
        cssStyles: String,
        date: {
            type: Date,
            default: Date.now
        }
    },
    { strict: false }
);

module.exports = Color = mongoose.model("colors", ColorSchema);
