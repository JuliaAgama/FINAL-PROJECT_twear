const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SizeSchema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        options: [String],
        date: {
            type: Date,
            default: Date.now
        }
    },
    { strict: false }
);

module.exports = Size = mongoose.model("sizes", SizeSchema);
