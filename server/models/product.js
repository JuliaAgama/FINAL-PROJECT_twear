const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    title: String,
    description: String,
    img: String,
    category: { type: Schema.Types.ObjectId, ref: 'Category' },
    price: {type: Number, default: 0},
    created_at: Date,
    updated_at: Date,
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
