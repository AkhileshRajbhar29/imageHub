const Favorite = require("../models/Favorite");
const Image = require("../models/Image");


// Add Favorite
const addFavorite = async (req, res) => {
    try {
        const { imageId } = req.params;

        const image = await Image.findById(imageId);

        if (!image) {
            return res.status(404).json({
                success: false,
                message: "Image not found"
            });
        }

        const existingFavorite = await Favorite.findOne({
            user: req.user.userId,
            image: imageId
        });

        if (existingFavorite) {
            return res.status(400).json({
                success: false,
                message: "Image already in favorites"
            });
        }

        const favorite = await Favorite.create({
            user: req.user.userId,
            image: imageId
        });

        res.status(201).json({
            success: true,
            message: "Image added to favorites",
            favorite
        });

    } catch (error) {
        console.log("Add favorite error:", error.message);

        res.status(500).json({
            success: false,
            message: "Failed to add favorite"
        });
    }
};


// Remove Favorite
const removeFavorite = async (req, res) => {
    try {
        const { imageId } = req.params;

        const favorite = await Favorite.findOneAndDelete({
            user: req.user.userId,
            image: imageId
        });

        if (!favorite) {
            return res.status(404).json({
                success: false,
                message: "Favorite not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Image removed from favorites"
        });

    } catch (error) {
        console.log("Remove favorite error:", error.message);

        res.status(500).json({
            success: false,
            message: "Failed to remove favorite"
        });
    }
};


// Get User Favorites
const getFavorites = async (req, res) => {
    try {
        const favorites = await Favorite.find({
            user: req.user.userId
        })
        .populate("image")
        .sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            favorites
        });

    } catch (error) {
        console.log("Get favorites error:", error.message);

        res.status(500).json({
            success: false,
            message: "Failed to fetch favorites"
        });
    }
};


module.exports = {
    addFavorite,
    removeFavorite,
    getFavorites
};