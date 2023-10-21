const UserService = require("../middlewares/auth")

exports.regiter = async(req,res,next)=>{
  try {
    const {email,password} = req.body;

    const sucessRes = await UserService.registerUser(email,password);

    res.json({status:true,sucess:"User Registered Successfully"});
  } catch (error) {
    throw error;
  }
}