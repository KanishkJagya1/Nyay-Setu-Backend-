const mongoose  = require("mongoose");
const db = require("../config/database");

const { schema } = mongoose;

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        lowercase:true,
        uppercase:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
})

const userModel = db.model('user',userSchema);

module.exports=userModel;