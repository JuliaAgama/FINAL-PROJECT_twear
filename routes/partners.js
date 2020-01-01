const express = require("express");
const router = express.Router();
const passport = require("passport"); // multer for parsing multipart form data (files)

//Import controllers
const {
  addPartner,
  updatePartner,
  deletePartner,
  getPartners
} = require("../controllers/partners");

// @route   POST /partners
// @desc    Create new partner
// @access  Private
router.post(
  "/",
  passport.authenticate("jwt-admin", { session: false }),
  addPartner
);

// @route   PUT /partners/:name
// @desc    Update existing partner
// @access  Private
router.put(
  "/:name",
  passport.authenticate("jwt-admin", { session: false }),
  updatePartner
);

// @route   DELETE /partners/:name
// @desc    DELETE existing partner
// @access  Private
router.delete(
  "/:name",
  passport.authenticate("jwt-admin", { session: false }),
  deletePartner
);

// @route   GET /partners
// @desc    GET existing partners
// @access  Public
router.get("/", getPartners);

module.exports = router;
