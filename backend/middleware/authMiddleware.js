const jwt = require("jsonwebtoken");
const protect = (req, res, next) =>{
    try{

        //Get Authorization Header

        const authHeader = req.headers.authorization;

        if(!authHeader){
            return res.status(401).json({
                success: false,
                message: "No token provided"
            });
        }

        //Expected Formate
        //Bearer TOKEN

        const token = authHeader.split(" ")[1];

        if(!token){
            return res.status(401).json({
                success: false,
                message: "Invalide token formate"
            });
        }

        //Verify token

        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        // Store user information in request
        req.user = decoded;
        
        //continue to next middleware/controller
        next();
    }

    catch (error){
        return res.status(401).json({
            success: false,
            message: "Invalid or expired token"
        });
    }
};


module.exports = protect;