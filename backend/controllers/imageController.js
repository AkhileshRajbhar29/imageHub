const Image = require ("../models/Image");
const cloudinary = require("../config/cloudinary");

const createImage = async (req, res)=>{
    try{
        const{title, description, imageUrl, price} = req.body;

        if (!req.file){
            return res.status(400).json({
                success: false,
                message: "Please select on image"
            });
        }

        //Upload image to cloudinary
        const result = await new Promise((resolve, reject)=>{
            const uploadStream = cloudinary.uploader.upload_stream(
                {
                    folder: "ImageHub"
                },
                (error, result) => {
                    if (error) {
                        reject (error);
                    } else {
                        resolve (result);
                    }
                }
            );
            uploadStream.end(req.file.buffer);
        });



        //Save image infirmation in MongoDB
        const image = new Image({
            title,
            description,
            imageUrl: result.secure_url,
            price,
            owner: req.user.userId
        });

        await image.save();

        res.status(201).json({
            success:true,
            message: "Image Uploaded Successfully",
            image
        });
    } catch (error){
        console.log("Create image error:", error.message);

        res.status(500).json({
            success: false,
            message: "Failed to upload image"
        });
    }
};



const getImages = async (req, res) => {
    try {
        const images = await Image.find()
            .populate("owner", "name email")
            .sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            images
        });

    } catch (error) {
        console.log("Get images error:", error.message);

        res.status(500).json({
            success: false,
            message: "Failed to fetch images"
        });
    }
};




module.exports= {
    createImage,
    getImages
}