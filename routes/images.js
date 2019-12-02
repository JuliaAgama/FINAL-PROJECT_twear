const express = require("express");
const router = express.Router();
const passport = require("passport"); // multer for parsing multipart form data (files)

//Import controllers
const {
  uploadImageCloud, //to upload server
  deleteImageCloud, //from upload server
  getImagesLinksCloud, //from upload server
  getImageLinkCloud, //from upload server
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

// @route   GET /images
// @desc    GET links of all existing images on cloud / upload server
// @access  Public
router.get("/", getImagesLinksCloud);

// @route   GET /image/:id
// @desc    GET link of uploaded image on cloud / upload server
// @access  Public
router.get("/:id", getImageLinkCloud); //?

module.exports = router;
