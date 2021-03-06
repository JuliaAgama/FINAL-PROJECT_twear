const express = require("express");
const router = express.Router();
const passport = require("passport");

//Import controllers
const {
  addCategory,
  updateCategory,
  deleteCategory,
  getCategories,
  getCategory,
  searchCategories,
  matchCategoriesByObject
} = require("../controllers/categories");

// @route   POST /categories
// @desc    Create new category
// @access  Private
router.post(
  "/",
  // passport.authenticate("jwt-admin", { session: false }),
  addCategory
);

// @route   PUT /categories/:id
// @desc    Update existing category
// @access  Private
router.put(
  "/:id",
  // passport.authenticate("jwt-admin", { session: false }),
  updateCategory
);

// @route   DELETE /categories/:id
// @desc    Delete existing category
// @access  Private
router.delete(
  "/:id",
  // passport.authenticate("jwt-admin", { session: false }),
  deleteCategory
);

// @route   GET /categories
// @desc    GET existing categories
// @access  Public
router.get("/", getCategories);

// @route   POST /categories/search
// @desc    POST appropriate to search query categories
// @access  Public
router.post("/search", searchCategories);

// @route   POST /categories/match
// @desc    POST appropriate categories that contain matching objects
// @access  Public
router.post("/match", matchCategoriesByObject);

// @route   GET /categories/:id
// @desc    GET existing categorie
// @access  Public
router.get("/:id", getCategory);

module.exports = router;
