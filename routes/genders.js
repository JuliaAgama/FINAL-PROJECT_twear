const express = require("express");
const router = express.Router();
const passport = require("passport"); // multer for parsing multipart form data (files)

//Import controllers
const {
  addGender,
  updateGender,
  deleteGender,
  getGenders
} = require("../controllers/genders");

// @route   POST /genders
// @desc    Create new gender
// @access  Private
router.post(
  "/",
  passport.authenticate("jwt-admin", { session: false }),
  addGender
);

// @route   PUT /genders
// @desc    Update existing color
// @access  Private
router.put(
  "/:id",
  passport.authenticate("jwt-admin", { session: false }),
  updateGender
);

// @route   DELETE /genders/:id
// @desc    DELETE existing color
// @access  Private
router.delete(
  "/:id",
  passport.authenticate("jwt-admin", { session: false }),
  deleteGender
);

// @route   GET /genders
// @desc    GET existing genders
// @access  Public
router.get("/", getGenders);

module.exports = router;
