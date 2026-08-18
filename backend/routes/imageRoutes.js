const express = require ("express");
const router = express.Router();
const { createImage } = require("../controllers/imageController");

const authMiddleware = require("../middleware/authMiddleware");

router.post(
    "/",
    authMiddleware,
    createImage
);

module.exports = router;