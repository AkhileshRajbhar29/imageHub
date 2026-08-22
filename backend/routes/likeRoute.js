const express = require("express");

const router = express.Router();

const {
    addLike,
    removeLike,
    getLikeInfo
} = require("../controllers/likeController");

const authMiddleware = require("../middleware/authMiddleware");


router.post(
    "/:imageId",
    authMiddleware,
    addLike
);


router.delete(
    "/:imageId",
    authMiddleware,
    removeLike
);


router.get(
    "/:imageId",
    authMiddleware,
    getLikeInfo
);


module.exports = router;