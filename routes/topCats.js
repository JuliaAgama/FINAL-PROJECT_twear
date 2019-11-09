const express = require("express");
const router = express.Router();
const passport = require("passport"); // multer for parsing multipart form data (files)

//Import controllers
const {
  addTopCat,
  updateTopCat,
  deleteTopCat,
  getTopCats
} = require("../controllers/topCats");

// @route   POST /topCats
// @desc    Create new topCat
// @access  Private
router.post(
  "/",
  passport.authenticate("jwt-admin", { session: false }),
  addTopCat
);

// @route   PUT /topCats
// @desc    Update existing color
// @access  Private
router.put(
  "/:id",
  passport.authenticate("jwt-admin", { session: false }),
  updateTopCat
);

// @route   DELETE /topCats/:id
// @desc    DELETE existing color
// @access  Private
router.delete(
  "/:id",
  passport.authenticate("jwt-admin", { session: false }),
  deleteTopCat
);

// @route   GET /topCats
// @desc    GET existing topCats
// @access  Public
router.get("/", getTopCats);

module.exports = router;
