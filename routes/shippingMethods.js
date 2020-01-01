const express = require("express");
const router = express.Router();
const passport = require("passport"); // multer for parsing multipart form data (files)

//Import controllers
const {
  addShippingMethod,
  updateShippingMethod,
  deleteShippingMethod,
  getShippingMethods,
  getShippingMethodById
} = require("../controllers/shippingMethods");

// @route   POST /shipping-methods
// @desc    Create new shipping method
// @access  Private
router.post(
  "/",
  passport.authenticate("jwt-admin", { session: false }),
  addShippingMethod
);

// @route   PUT /shipping-methods/:name
// @desc    Update existing shipping method
// @access  Private
router.put(
  "/:name",
  passport.authenticate("jwt-admin", { session: false }),
  updateShippingMethod
);

// @route   DELETE /shipping-methods/:name
// @desc    DELETE existing shipping method
// @access  Private
router.delete(
  "/:name",
  passport.authenticate("jwt-admin", { session: false }),
  deleteShippingMethod
);

// @route   GET /shipping-methods
// @desc    GET existing shipping methods
// @access  Public
router.get("/", getShippingMethods);

// @route   GET /shipping-methods/:name
// @desc    GET existing shipping methods by name
// @access  Public
router.get("/:name", getShippingMethodById);

module.exports = router;
