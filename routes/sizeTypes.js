const express = require("express");
const router = express.Router();
const passport = require("passport"); // multer for parsing multipart form data (files)

//Import controllers
const {
  addSizeType,
  updateSizeType,
  deleteSizeType,
  getSizeTypes,
  getSizeType
} = require("../controllers/sizeTypes");

// @route   POST /sizeTypes
// @desc    Create new sizeType
// @access  Private
router.post(
  "/",
  // passport.authenticate("jwt-admin", { session: false }),
  addSizeType
);

// @route   PUT /sizeTypes/:id
// @desc    Update existing sizeType
// @access  Private
router.put(
  "/:id",
  // passport.authenticate("jwt-admin", { session: false }),
  updateSizeType
);

// @route   DELETE /sizeTypes/:id
// @desc    DELETE existing sizeType
// @access  Private
router.delete(
  "/:id",
  // passport.authenticate("jwt-admin", { session: false }),
  deleteSizeType
);

// @route   GET /sizeTypes
// @desc    GET existing sizeTypes
// @access  Public
router.get("/", getSizeTypes);

// @route   GET /size-types/:id
// @desc    GET existing size type
// @access  Public
router.get("/:id", getSizeType);

module.exports = router;
