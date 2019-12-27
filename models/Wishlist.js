const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WishlistSchema = new Schema(
  {
    customer: {
      type: Schema.Types.ObjectId,
      ref: "customers",
      required: true
    },
    products: [
      {
        type: Schema.Types.ObjectId,
        ref: "products"
      }
    ],
    date: {
      type: Date,
      default: Date.now
    }
  },
  { strict: false }
);

module.exports = Wishlist = mongoose.model(
  "wishlist",
  WishlistSchema,
  "wishlist"
);
