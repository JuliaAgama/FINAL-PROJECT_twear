const express = require("express");
const router = express.Router();
const passport = require("passport"); // multer for parsing multipart form data (files)

//Import controllers
const {
  addPaymentMethod,
  updatePaymentMethod,
  deletePaymentMethod,
  getPaymentMethods,
  getPaymentMethodById
} = require("../controllers/paymentMethods");

// @route   POST /payment-methods
// @desc    Create new payment method
// @access  Private
router.post(
  "/",
  passport.authenticate("jwt-admin", { session: false }),
  addPaymentMethod
);

// @route   PUT /payment-methods/:name
// @desc    Update existing payment method
// @access  Private
router.put(
  "/:name",
  passport.authenticate("jwt-admin", { session: false }),
  updatePaymentMethod
);

// @route   DELETE /payment-methods/:name
// @desc    DELETE existing payment method
// @access  Private
router.delete(
  "/:name",
  passport.authenticate("jwt-admin", { session: false }),
  deletePaymentMethod
);

// @route   GET /payment-methods
// @desc    GET existing payment methods
// @access  Public
router.get("/", getPaymentMethods);

// @route   GET /payment-methods/:name
// @desc    GET existing payment methods by name
// @access  Public
router.get("/:name", getPaymentMethodById);

module.exports = router;
