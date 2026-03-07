import User from "../schema/authSchema.js";
import bcrypt from "bcryptjs";
import { generateToken } from '../utils/generateToken.js'


const Register = async (req, res) => {
  const { name, email, password} = req.body;
  try {
    //hash password
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        message: "User already exists, you can login now",
        success: false,
      });
    }

    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      name,
      email,
      password: hashPassword
    });

    if (newUser) {
      const token = generateToken(newUser._id)
      await newUser.save();
      res.status(201).json({
        message: "User Registered Successfully",
        success: true,
        token,
        newUser
      });
    } else {
      return res.status(404).json({ message: "Invalid User data" });
    }
  } catch (error) {
    res.status(501).json({
      message: "Register Internal error",
      error: error.message,
      success: false,
    });
  }
};


const Login = async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await User.findOne({ email });
      if (!user) {
        return res
          .status(401)
          .json({ message: "Email or Password not found..." });
      }
  
      const isPassword = new bcrypt.compare(password, user.password);
      if (!isPassword) {
        return res.status(401).json({ message: "password did not match" });
      }
  
      const token = generateToken(user._id)
      res.status(201).json({
        message: "User LoggedIn Successfully",
        success: true,
        token,
        user
      });
  } catch (error) {
    res.status(501).json({
      message: "Login Internal error",
      error: error.message,
      success: false,
    });
  }
};


export default { Register, Login };
