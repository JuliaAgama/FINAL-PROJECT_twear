const express = require("express");
const router = express.Router();
const passport = require("passport");
const multer = require("multer"); // multer for parsing multipart form data (files)
const fse = require("fs-extra");

//Import controllers
const {
  addImages,
  addArchive,
  updateArchive,
  getArchives,
  getArchive,
  getArchiveByItemNo,
  getArchivesFilterParams,
  searchArchives,
  matchArchivesByObject
} = require("../controllers/archives");

// Configurations for multer
const storage = multer.diskStorage({
  // Destination, where files should be stored (image url)
  destination: function(req, file, cb) {
    var newDestination = req.headers.path; // We sen image url in header ("path"), when making axios request
    fse.mkdirsSync(newDestination); // We creating folder in destination, specified in headers "path"
    cb(null, newDestination); // Saving file
  },

  filename: function(req, file, cb) {
    cb(null, file.originalname); // We accept original file-name
  }
});

const fileFilter = (req, file, cb) => {
  // Accept file (only jpeg/jpg/png)
  if (
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg"
  ) {
    cb(null, true);
  } else {
    // reject file (if not jpeg/jpg/png)
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 3 // Max size 5MB
  },
  fileFilter: fileFilter
});

// @route   POST /archives/images
// @desc    Add images
// @access  Private
router.post(
  "/images",
  passport.authenticate("jwt-admin", { session: false }),
  upload.array("photos"),
  addImages
);

// @route   POST /archives
// @desc    Create new archive
// @access  Private
router.post(
  "/",
  // passport.authenticate("jwt-admin", { session: false }),
  addArchive
);

// @route   PUT /archives/:id
// @desc    Update existing archive
// @access  Private
router.put(
  "/:id",
  // passport.authenticate("jwt-admin", { session: false }),
  updateArchive
);

// @route   GET /archives
// @desc    GET existing archives
// @access  Public
router.get("/", getArchives);

// @route   GET /archives/filter
// @desc    GET appropriate filtered archives
// @access  Public
router.get("/filter", getArchivesFilterParams);

// @route   POST /archives/search
// @desc    POST appropriate to search query archives
// @access  Public
router.post("/search", searchArchives);

// @route   POST /archives/match
// @desc    POST appropriate archives that contain matching objects
// @access  Public
router.post("/match", matchArchivesByObject);

// @route   GET /archives/:id
// @desc    GET existing archive by id
// @access  Public
router.get("/:id", getArchive);

// @route   GET /archives/itemNo/:itemNo
// @desc    GET existing archive by itemNo
// @access  Public
router.get("/itemNo/:itemNo", getArchiveByItemNo);

module.exports = router;
