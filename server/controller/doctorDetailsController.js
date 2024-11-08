const asyncHandler = require("express-async-handler");
const Doctor = require("../models/doctorDetailsModel");
const bcrypt = require("bcrypt");
require('dotenv').config();

const registerDoctor = asyncHandler(async (req, res) => {
    const { name, email, speciality, phoneNumber, experience, address } = req.body;

    // Check if all fields are provided
    if (!name || !email || !speciality || !phoneNumber || !experience || !address) {
        res.status(400);
        throw new Error("Please add all fields");
    }

    // Check if user already exists
    const userExists = await Doctor.findOne({ email });

    if (userExists) {
        res.status(400);
        throw new Error("User already exists");
    }

    // Create user
    const user = await Doctor.create({
        name,
        email,
        speciality, 
        phoneNumber,
        experience,
        address,
    });

    if (user) { 
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            speciality: user.speciality,
            phoneNumber: user.phoneNumber,
            experience: user.experience,
            address: user.address
        });
    } else {
        res.status(400);
        throw new Error("Invalid user data");
    }
});

// Uncomment and export these functions if needed:

// const getAllDoctors = asyncHandler(async (req, res) => {
//     const doctors = await Doctor.find();
//     res.status(200).json(doctors);
// });

// const getDoctorById = asyncHandler(async (req, res) => {
//     const doctor = await Doctor.findById(req.params.id);

//     if (!doctor) {
//         res.status(404);
//         throw new Error("Doctor not found");
//     }

//     res.status(200).json(doctor);
// });

module.exports = { registerDoctor }; // Add other functions here if needed
