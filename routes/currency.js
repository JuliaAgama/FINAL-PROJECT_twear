const express = require("express");
const router = express.Router();

//Import controllers
const {
    getCurrency
} = require("../controllers/currency");

// @route   GET /currency
// @access  Public
router.get("/", getCurrency);


module.exports = router;