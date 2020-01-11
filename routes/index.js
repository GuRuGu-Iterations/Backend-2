const express = require("express");
const router = express.Router();
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    const extension = file.originalname.split(".").reverse()[0];
    cb(null, `${file.fieldname}-${Date.now()}.${extension}`);
  }
});

const upload = multer({ storage: storage });

const pictureController = require("../controllers/pictures");

// @route   POST api/pic
// @desc    Save a picture to server
// @access  Public
router.post("/", upload.single("picture"), pictureController.save);

// @route   GET api/pic/:id
// @desc    Get a path to a saved picture
// @access  Public
router.get("/:id", pictureController.get);

module.exports = router;
