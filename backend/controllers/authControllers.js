const User = require("../models/User");
const bcrypt = require ("bcryptjs");
const validator = require("validator");


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


        const {email, password} = req.body;

        //check empty fiels
        if (!email || ! password){
            return res.status(400).json({
                success: false,
                message: "Email and Password are ewquired"
            });
        }


        //If user not found

        const user = await User.findOne({email});

        if (!user){
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }
        
        

        //password compare

        const isMatch = await bcrypt.compare(password, user.password);

        if(!isMatch){
            return res.status(400).json({
                success: false,
                message: "Invalid Password"
            });
        }


        //login Success
        res.status(200).json({
            success: true,
            message: "Login Successful"
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
    login
};