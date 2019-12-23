const express = require("express");
const router = express.Router();
const passport = require("passport");

//Import controllers
const {
  createCart,
  updateCart,
  addProductToCart,
  decreaseCartProductQuantity,
  deleteCart,
  deleteProductFromCart,
  getCart
} = require("../controllers/cart");


// @route   GET /cart
// @desc    Get cart for customer
// @access  Private
router.get("/", passport.authenticate("jwt", { session: false }), getCart);

// @route   POST /cart
// @desc    Create cart
// @access  Private
router.post("/", passport.authenticate("jwt", { session: false }), createCart);

// @route   PUT /cart
// @desc    Update cart when adding / deleting products in cart
// @access  Private
router.put("/", passport.authenticate("jwt", { session: false }), updateCart);

// @route   DELETE /cart
// @desc    Delete cart (when the order is placed or customer logging out)
// @access  Private
router.delete("/", passport.authenticate("jwt", { session: false }), deleteCart);


// @route   PUT /cart/:productSku
// productSku = productId&colorId&sizeId
// @desc    Add one product to cart
// @access  Private
router.put( "/:productSku", passport.authenticate("jwt", { session: false }), addProductToCart);

// @route   DELETE /cart/product/:productSku
// productSku = productId&colorId&sizeId
// @desc    Decrease quantity of one product from cart
// @access  Private
router.delete(
  "/product/:productSku",
  passport.authenticate("jwt", { session: false }),
  decreaseCartProductQuantity
);

// @route   DELETE /cart/:productSku
// productSku = productId&colorId&sizeId
// @desc    Delete one product from cart
// @access  Private
router.delete(
  "/:productSku",
  passport.authenticate("jwt", { session: false }),
  deleteProductFromCart
);


module.exports = router;
