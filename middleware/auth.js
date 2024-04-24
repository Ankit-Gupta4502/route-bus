const jwt=require("jsonwebtoken");
const User = require("../models/user/user");

const authUser=async(req,res,next)=>{
    let token=req.header('Authorization')
try{
    const user=jwt.verify(token,process.env.JWT)
    const newUser=await User.findByPk(user.userId);
    req.user=newUser;
    next();
}catch(err){
    console.log(err)
    return res.status(401).json('not found user');
}
}

module.exports=authUser;