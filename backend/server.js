const express = require ("express");
const dotenv = require ("dotenv");
const cors = require ("cors");
const { response } = require("express");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req,res)=>{
    res.send("ImageHub is running on root");
});

const PORT = process.env.PORT || 5000;

app.listen (PORT, ()=>{
    console.log(`server is running on Port ${PORT}`)
});