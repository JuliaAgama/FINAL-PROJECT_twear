const express = require("express");
const router = express.Router();
const passport = require("passport"); // multer for parsing multipart form data (files)

//Import controllers
const {
  addTopCat,
  updateTopCat,
  deleteTopCat,
  getTopCats,
  getTopCat
} = require("../controllers/topCats");

// @route   POST /top-categories
// @desc    Create new topCat
// @access  Private
router.post(
  "/",
  // passport.authenticate("jwt-admin", { session: false }),
  addTopCat
);

// @route   PUT /top-categories
// @desc    Update existing color
// @access  Private
router.put(
  "/:id",
  // passport.authenticate("jwt-admin", { session: false }),
  updateTopCat
);

// @route   DELETE /top-categories/:id
// @desc    DELETE existing color
// @access  Private
router.delete(
  "/:id",
  // passport.authenticate("jwt-admin", { session: false }),
  deleteTopCat
);

// @route   GET /top-categories
// @desc    GET existing topCats
// @access  Public
router.get("/", getTopCats);

// @route   GET /top-categories/:id
// @desc    GET existing categorie
// @access  Public
router.get("/:id", getTopCat);

module.exports = router;
