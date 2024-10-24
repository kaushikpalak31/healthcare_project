// routes/userRoutes.js
const express = require("express");
const router = express.Router();

// Define your routes here
router.post("/", (req, res) => {
    res.send("User registered");
});

module.exports = router;