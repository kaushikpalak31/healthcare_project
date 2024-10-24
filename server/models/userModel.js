const mongoose = require("mongoose");

const userSchema = moongose.Schema(
    {
        name: {
            type:String,
            require: [true,"Please add your name"],
        },
        password: {
            type: Integer,
            require: [true,"Please add a password"],
           
        },
        email: {
            type:String,
            require:[true,"Please add an email"],
            unique:["Email already existed"]
        }


    },
)
module.exports = moongose.model("User",userSchema);