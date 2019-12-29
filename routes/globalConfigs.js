const express = require("express");
const router = express.Router();
const passport = require("passport"); // multer for parsing multipart form data (files)

//Import controllers
const {
  addConfig,
  updateConfig,
  deleteConfig,
  getConfigs,
  getConfigById
} = require("../controllers/globalConfigs");

// @route   POST /configs
// @desc    Create new config
// @access  Private
router.post(
  "/",
  passport.authenticate("jwt-admin", { session: false }),
  addConfig
);

// @route   PUT /configs/:name
// @desc    Update existing config
// @access  Private
router.put(
  "/:name",
  passport.authenticate("jwt-admin", { session: false }),
  updateConfig
);

// @route   DELETE /configs/:name
// @desc    DELETE existing config
// @access  Private
router.delete(
  "/:name",
  passport.authenticate("jwt-admin", { session: false }),
  deleteConfig
);

// @route   GET /configs
// @desc    GET existing configs
// @access  Public
router.get("/", getConfigs);

// @route   GET /configs/:name
// @desc    GET existing configs
// @access  Public
router.get("/:name", getConfigById);

module.exports = router;
