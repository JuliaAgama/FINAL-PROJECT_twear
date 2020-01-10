const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CartSchema = new Schema(
  {
    customer: {
      type: Schema.Types.ObjectId,
      ref: "customers",
      required: true
    },
    products: [
      {
        product: {
          type: Schema.Types.ObjectId,
          ref: "products",
          colors: [{
            color: {
              type: Schema.Types.ObjectId,
              ref: "colors",
            },
            sizes: [{
              size: {
                  type: Schema.Types.ObjectId,
                  ref: "sizes",
              },
            }]
          }],
        },
        color: {
          type: Schema.Types.ObjectId,
          ref: "colors"
        },
        size: {
          type: Schema.Types.ObjectId,
          ref: "sizes",
        },
        quantity: {
          type: Number
        }
      }
    ],
    date: {
      type: Date,
      default: Date.now
    }
  },
  { strict: false }
);

module.exports = Cart = mongoose.model("carts", CartSchema, "carts");
