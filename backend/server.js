require ("dotenv").config();

const express = require ("express");
const mongoose = require("mongoose");
const cors = require ("cors");
const authRoutes = require("./routes/authRoutes");
const imageRoutes = require("./routes/imageRoutes");
const favoriteRoutes = require("./routes/favoriteRoute");
const likeRoutes = require("./routes/likeRoute");

//Database Connection
const connectDB = require("./config/db");

// dotenv.config();

const app = express();

//connect MongoDB
connectDB();

 

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/images", imageRoutes);
app.use("/api/favorites", favoriteRoutes);
app.use("/api/likes", likeRoutes);


app.get("/", (req,res)=>{
    res.send("ImageHub is running on root");
});

const PORT = process.env.PORT || 5000;

app.listen (PORT, ()=>{
    console.log(`server is running on Port ${PORT}`)
});