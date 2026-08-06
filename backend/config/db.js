const mongoose = require ("mongoose");

const connectDB = async() => {

    try{

        // console.log(process.env.MONGO_URI);

        await mongoose.connect(process.env.MONGO_URI);
        console.log("Mongoose Connected Successfully");
    }
    catch(error){
        console.log("MongoDB Connecting Failed");
        console.log(error.message);

        process.exit(1);
    }
};

module.exports = connectDB;