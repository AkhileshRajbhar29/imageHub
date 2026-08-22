const Like = require("../models/Like");
// const Image = require("../models/Image");

// Add Like
const addLike = async (req, res) => {
    try {
        const { imageId } = req.params;

        const existingLike = await Like.findOne({
            user: req.user.userId,
            image: imageId
        });

        if (existingLike) {
            return res.status(400).json({
                success: false,
                message: "Image already liked"
            });
        }

        const like = await Like.create({
            user: req.user.userId,
            image: imageId
        });

        res.status(201).json({
            success: true,
            message: "Image liked successfully",
            like
        });

    } catch (error) {
        console.log("Add like error:", error.message);

        res.status(500).json({
            success: false,
            message: "Failed to like image"
        });
    }
};


// Remove Like
const removeLike = async (req, res) => {
    try {
        const { imageId } = req.params;

        const like = await Like.findOneAndDelete({
            user: req.user.userId,
            image: imageId
        });

        if (!like) {
            return res.status(404).json({
                success: false,
                message: "Like not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Like removed successfully"
        });

    } catch (error) {
        console.log("Remove like error:", error.message);

        res.status(500).json({
            success: false,
            message: "Failed to remove like"
        });
    }
};


// Get Like Status + Count
const getLikeInfo = async (req, res) => {
    try {
        const { imageId } = req.params;

        const likeCount = await Like.countDocuments({
            image: imageId
        });

        let liked = false;

        if (req.user) {
            const userLike = await Like.findOne({
                user: req.user.userId,
                image: imageId
            });

            liked = !!userLike;
        }

        res.status(200).json({
            success: true,
            liked,
            likeCount
        });

    } catch (error) {
        console.log("Get like info error:", error.message);

        res.status(500).json({
            success: false,
            message: "Failed to get like information"
        });
    }
};


module.exports = {
    addLike,
    removeLike,
    getLikeInfo
};