const mongoose = require("mongoose");
//mongoose is used to connect db to server
const connectDb = async () => {
    try{
        const connect = await mongoose.connect(process.env.CONNECTION_STRING);
        console.log(
            "Database connected: ",
            connect.connection.host,
            connect.connection.name
        );
       } catch(err){
        console.log(err);
        process.exit(1);   //1-fail , 0-pass
    }
};
module.exports=connectDb;