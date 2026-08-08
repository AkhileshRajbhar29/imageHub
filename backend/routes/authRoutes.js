const express = require("express");
const router = express.Router();

const { signup, login, getMe } = require ("../controllers/authController");

const protect = require("../middleware/authMiddleware");

router.post("/signup", signup);

router.post("/login", login);

router.get("/me", protect, getMe);

router.get("/protected", protect, (req, res)=>{

    res.status(200).json({
        success: true,
        message: "You can access this protected route",
        user: req.user
    });
});

module.exports = router;