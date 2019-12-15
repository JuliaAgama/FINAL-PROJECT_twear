const express = require("express");
const router = express.Router();
const passport = require("passport"); // multer for parsing multipart form data (files)

//Import controllers
const {
  uploadImageCloud, //to upload server
  deleteImageCloud, //from upload server
} = require("../controllers/images");

// @route   POST /images
// @desc    Upload image to cloud / upload server
// @access  Private
router.post(
  "/",
  // passport.authenticate("jwt-admin", { session: false }),
  uploadImageCloud
);

// @route   DELETE /images/:id
// @desc    DELETE existing image from cloud / upload server
// @access  Private
router.delete(
  "/:id",
  // passport.authenticate("jwt-admin", { session: false }),
  deleteImageCloud
);

module.exports = router;
