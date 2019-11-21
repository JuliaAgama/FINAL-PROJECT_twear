const express = require("express");
const router = express.Router();
const passport = require("passport"); // multer for parsing multipart form data (files)

//Import controllers
const {
  addSize,
  updateSize,
  deleteSize,
  getSizes,
  matchSizesByObject,
  getSize
} = require("../controllers/sizes");

// @route   POST /sizes
// @desc    Create new size
// @access  Private
router.post(
  "/",
  passport.authenticate("jwt-admin", { session: false }),
  addSize
);

// @route   PUT /sizes/:id
// @desc    Update existing size
// @access  Private
router.put(
  "/:id",
  passport.authenticate("jwt-admin", { session: false }),
  updateSize
);

// @route   DELETE /sizes/:id
// @desc    DELETE existing size
// @access  Private
router.delete(
  "/:id",
  // passport.authenticate("jwt-admin", { session: false }),
  deleteSize
);

// @route   GET /sizes
// @desc    GET existing sizes
// @access  Public
router.get("/", getSizes);

// @route   POST /sizes/match
// @desc    POST appropriate sizes that contain matching objects
// @access  Public
router.post("/match", matchSizesByObject);

// @route   GET /sizes/:id
// @desc    GET existing size
// @access  Public
router.get("/:id", getSize);

module.exports = router;
