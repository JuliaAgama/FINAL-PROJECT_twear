const express = require("express");
const router = express.Router();
const passport = require("passport"); // multer for parsing multipart form data (files)

//Import controllers
const {
    addProductGallery,
    updateProductGallery,
    deleteProductGallery,
    getProductsGallery,
    getProductGalleryById
} = require("../controllers/homePageProductGallery");

// @route   POST /productGallery
// @desc    Create new productGallery
// @access  Private
router.post(
    "/",
    passport.authenticate("jwt-admin", { session: false }),
    addProductGallery
);

// @route   PUT /productGallery/:name
// @desc    Update existing productGallery
// @access  Private
router.put(
    "/:id",
    passport.authenticate("jwt-admin", { session: false }),
    updateProductGallery
);

// @route   DELETE /productGallery/:name
// @desc    DELETE existing productGallery
// @access  Private
router.delete(
    "/:id",
    passport.authenticate("jwt-admin", { session: false }),
    deleteProductGallery
);

// @route   GET /productsGallery
// @desc    GET existing productsGallery
// @access  Public
router.get("/", getProductsGallery);

// @route   GET /productGallery/:name
// @desc    GET existing productGallery
// @access  Public
router.get("/:name", getProductGalleryById);

module.exports = router;