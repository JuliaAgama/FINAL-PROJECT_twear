const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SizeSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        sizeType: {
            type: Schema.Types.ObjectId,
            ref: 'sizeTypes'
        },
        date: {
            type: Date,
            default: Date.now
        }
    },
    { strict: false }
);

module.exports = Size = mongoose.model(
    "sizes",
    SizeSchema,
    "sizes"
    );
