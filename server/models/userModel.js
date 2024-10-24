const mongoose = require("mongoose");

const userSchema = moongose.Schema(
    {
        name: {
            type:String,
            require: [true,"Please add your name"],
        },
        password: {
            type: ,
            require: []
        },
        email: {
            type:String,
            require:[true,"Please add an email"],
            unique:["Email already existed"]
        }

    },
)