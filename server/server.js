//framework configuration
const express = require('express');
const connectDb = require("./config/dbConnection");
const errorHandler = require("./middleware/errorHandler");     //handles error
const cors = require("cors");        //puts restriction for outside source
 
//env file config
const dotenv = require("dotenv");
dotenv.config(); //enabling the env file

connectDb();
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

//error handling middleware
app.use(errorHandler);
//routes below
app.get('/',(req,res)=>{
    res.send("working");
})
app.listen(port,()=>{
    console.log("server working on port5000");
})

module.exports = connectDb;


