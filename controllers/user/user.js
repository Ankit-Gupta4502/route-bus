// const User = require("../../models/user/user");
// const bcrypt=require("bcrypt");
// const jwt=require("jsonwebtoken");

// exports.register = async(req, res) => {
//     const {name, email,phone,password } = req.body;
//     const existingUser = await User.findOne({ where: { email: email } });
//     try {
//       if (existingUser) {
//        return res.status(409).json("Email already exists");
//       } else {
//         const saltRounds = 10; 
//         const hashedPassword = await bcrypt.hash(password, saltRounds);
//         const newUser = await User.create({
//           email,
//           name,
//           phone,
//           password:hashedPassword
//         });
//         const savedUser = await newUser.save();
//         return res.status(200).json(savedUser);
//     }
          
//     } catch (error) {
//      return res.status(500).send("Internal Server Error");
//     }
//   };


//   exports.login = async(req, res) => {
//     const { email, password} = req.body;
//     const existingUser = await User.findOne({ where: { email: email } });
//     try {
//       if (!existingUser) return res.status(404).json("User not found");
//       const passwordMatch = await bcrypt.compare(password, existingUser.password);
//       if (passwordMatch) {
//         const token = jwt.sign({ userId: existingUser.id }, process.env.JWT);
  
//         return res.status(200).json({ token: token, user: existingUser });
//      }else{
//        return res.status(401).json("User not authorized")
//      }
//     } catch (error) {
//       console.log(error)
//       return res.status(500).send("Internal Server Error");
//     }
//   };

 
// exports.getAllUsers=async(req,res)=>{

//   try{
 
//          const user=await User.findAll();
//          return res.status(201).json(user);
//   }catch(err){
//      res.status(500).json(err);
//   }
 
//  }