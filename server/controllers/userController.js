import validator from "validator";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
import userModel from "../models/userModel.js";



const createToken = (id)=>{
    return jwt.sign({id},process.env.JWT_SECRET)
}



// ************* Route for user login ***********
const loginUser = async (req, res) => {
  try {
    const {email,password} = req.body

    const user = await userModel.findOne({email})
    if (!user) {
      res.json({success:false,message:"User doesn't exits"})
    }
    const isMatch = await bcrypt.compare(password,user.password)
    if (isMatch) {
      const token = createToken(user._id)
      res.json({success:true,token})
    }
    else{
      res.json({success:false,message:"Invalid credentials"})
    }
  } catch (error) {
    console.log(error)
    res.json({success:false,message:error.message || "Error at loginUser controller tryCatch"})
    
  }
};




// *********** Route for user register(signup) *********
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // checking user already exists or not
    const exists = await userModel.findOne({ email });
    if (exists) {
      return res.json({ success: false, message: "User already exists." });
    }

    // validating email and strong password
    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: "Enter valid email." });
    }
    if (!validator.isStrongPassword(password)) {
      return res.json({ success: false, message: "Enter a strong pasword." });
    }

    // hashing user password
    const salt = await bcrypt.genSalt(12);
    const hashPassword = await bcrypt.hash(password, salt);

    const newUser = new userModel({
      name,
      email,
      password: hashPassword,
    });

    const user = await newUser.save();

    const token = createToken(user._id)

    res.json({success:true,token})


  } catch (error) {
    console.log(error)
    res.json({success:false,message:error.message || "Error at registerUser controller tryCatch"})
  }
};



// ********* Route for admin login **************
const adminLogin = async (req, res) => {
  try {
    const {email,password} = req.body

    if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
      const token = jwt.sign(email+password,process.env.JWT_SECRET)
      res.json({success:true,token})
    } else {
      res.json({success:false,message:"Invalid Credentials"})
      
    }
    
  } catch (error) {
    console.log(error)
    res.json({success:false,message:error.message || "Error at adminLogin controller tryCatch"})
    
  }
};

export { loginUser, registerUser, adminLogin };
