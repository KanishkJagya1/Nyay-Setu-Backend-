const UserService = require("../middlewares/auth")

exports.register = async(req,res,next)=>{
  try {
    const {email,password} = req.body;
    console.log(req.body);
    const sucessRes = await UserService.registerUser(email,password);

    res.json({status:true,sucess:"User Registered Successfully"});
  } catch (error) {
    console.log(error);
  }
}