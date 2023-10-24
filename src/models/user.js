const mongoose  = require("mongoose");
const db = require("../config/database");
const bcrypt = require("bcrypt");
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

userSchema.pre('save',async function(){
    try {
        var user = this;
        const salt = await(bcrypt.genSalt(10));
        const hashpass = await(bcrypt.hash(user.password,salt))
    } catch (error) {
        console.log(error);
    }
});

const userModel = db.model('user',userSchema);

module.exports=userModel;