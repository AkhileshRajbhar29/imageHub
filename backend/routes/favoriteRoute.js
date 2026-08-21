const express = require("express");

const router = express.Router();

const {
    addFavorite,
    removeFavorite,
    getFavorites
} = require("../controllers/favoriteController");

const authMiddleware = require("../middleware/authMiddleware");


router.post(
    "/:imageId",
    authMiddleware,
    addFavorite
);


router.delete(
    "/:imageId",
    authMiddleware,
    removeFavorite
);


router.get(
    "/",
    authMiddleware,
    getFavorites
);


module.exports = router;