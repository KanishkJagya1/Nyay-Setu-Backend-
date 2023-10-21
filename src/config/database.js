const mongoose = require("mongoose");

const connection = mongoose.createConnection("mongodb://127.0.0.1:27017/demo").on('open',()=>{
    console.log("MongoDB connected to Backend");
}).on('error',()=> {
    console.log("Error Deteted while connecting to the User database");
})

module.exports = connection;