const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GendersSchema = new Schema(
    {
        title: {
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

module.exports = Genders = mongoose.model("genders", GendersSchema);
