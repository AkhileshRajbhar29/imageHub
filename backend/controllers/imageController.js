const Image = require ("../models/Image");
const createImage = async (req, res)=>{
    try{
        const{title, description, imageUrl, price} = req.body;

        // const image = await Image.create({
        //     title,
        //     description,
        //     imageUrl,
        //     price,
        //     owner: req.user._id
        // });

        const image = new Image({
            title,
            description,
            imageUrl,
            price,
            owner: req.user.userId
        });

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

module.exports= {
    createImage
}