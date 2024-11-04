// routes/userRoutes.js
const express = require("express");
const router = express.Router();

const{
    registerUser,
    loginUser
} = require("../controller/userController");
// Define your routes here
router.post("/", (req, res) => {
    res.send("User registered");
});

module.exports = router;