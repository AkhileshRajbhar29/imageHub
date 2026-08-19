const express = require ("express");
const router = express.Router();
const { createImage, getImages} = require("../controllers/imageController");

const authMiddleware = require("../middleware/authMiddleware");

const upload = require ("../middleware/uploadMiddleware");

router.post(
    "/",
    authMiddleware,
    upload.single("image"),
    createImage
);

router.get("/", getImages);

module.exports = router;