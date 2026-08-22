const express = require ("express");
const router = express.Router();
const { createImage, getImages, getImageById} = require("../controllers/imageController");

const authMiddleware = require("../middleware/authMiddleware");

const upload = require ("../middleware/uploadMiddleware");

router.post(
    "/",
    authMiddleware,
    upload.single("image"),
    createImage
);

router.get("/", getImages);
router.get("/:id", getImageById);

module.exports = router;