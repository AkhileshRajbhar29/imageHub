const User = require("../models/User");
const bcrypt = require ("bcryptjs");
const validator = require("validator");
const jwt = require("jsonwebtoken");


const signup = async (req, res) => {
    try{
        const { username, email, password} = req.body;
    
        // Check Empty Field
        if (!username || !email || !password){
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }

        // Email Validation
        if (!validator.isEmail(email)){
            return res.status(400).json({
                success:false,
                message: "Invalid Email"
            });

        }

        //Password Length
        if(password.length <6){
            return res.status(400).json({
                success:false,
                message:"Password must be at least 6 characters"
            });
        }

        //Email Already Exists
        const existingUser = await User.findOne({ email });

        if(existingUser){
            return res.status(400).json({
                success: false,
                message: "Email already registered"
            });
        }

        // Has Password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create User
        const user = await User.create({
            username,
            email,
            password: hashedPassword
        });

        user.password = undefined;

        res.status(201).json({
            success: true,
            message: "Account Created Successfully",
            user :{
                id:user._id,
                username: user.username,
                email:user.email,
                profileImage: user.profileImage
            }
        });
    }

    catch(error){
        console.log("Signup error:");
        console.log(error);
            res.status(500).json({
                success: false,
                message: "Internal Server Error"
            });
        }
    };









//Login

const login = async(req, res)=>{

    try{


        const {identifier, password} = req.body;

        //check empty fiels
        if (!identifier || ! password){
            return res.status(400).json({
                success: false,
                message: "Username/Email and Password are ewquired"
            });
        }

        //Find user by username OR email
        const user = await User.findOne({
            $or: [
                {email: identifier},
                {username: identifier}
            ]
        });


        if (!user){
            return res.status(404).json({
                success: false,
                message: "Invalide username/email or password"
            });
        }
        
        

        //password compare

        const isMatch = await bcrypt.compare(password, user.password);

        if(!isMatch){
            return res.status(401).json({
                success: false,
                message: "Invalid username/email Password"
            });
        }
        

        //Generate JWT
        const token = jwt.sign(
            { userId: user._id },
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
        );


        //login Success
        res.status(200).json({
            success: true,
            message: "Login Successful",
            token,
            user: {
                id: user._id,
                username: user.username,
                email: user.email,
                profileImage: user.profileImage
            }
        });

    }

    catch(error){

        console.log(error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};







// getme

const getMe = async(req, res) =>{
    try{
        const user = await User.findById(req.user.userId)
        .select("-password");

        if(!user){
            return res.status(404).json({
                success: false,
                message: "User not Found"
            });
        }

        res.status(200).json({
            success: true,
            user
        });
    }

    catch(error){
        console.log(error);

        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};






module.exports = {
    signup,
    login,
    getMe
};