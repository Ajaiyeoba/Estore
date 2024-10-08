import validator from "validator";
import userModel from "../models/userModel.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const createToken = (id) => {
    return jwt.sign({id},process.env.JWT_SECRET)
}
// user login
const loginUser = async (req, res) => {
    // res.json({msg: ' Login Api working'})

    try {
        const {email,passsword} = req.body;
        const user = await userModel.findOne({email});
        if (!user) {
            return res.json({success: false, message: "User already exists"})
        }

        const isMatch = await bcrypt.compare(passsword, user.passsword);
        if(isMatch) {
            const toke = createToken(user._id)
            res.json({success:true,token})
        }
         else {
            return res.json({success: false, message: "invalid credentials"})
         }
    } catch (error) {
        console.log(error)
        res.json({success:false, message:"invalid credentials"})
    }
}

// user registration
const registerUser = async (req, res) => {
            try {
                const {name, email,password} = req.body;
                // check if user exists or not 
                const exists = await userModel.findOne({email});
                if(exists) {
                    return res.json({success: false, message: "User already exists"})
                }
                // validating email format and strong password
                if (!validator.isEmail(email)){
                    return res.json({success:false, message:"Please enter a valid email"})
                }
                if (password.length < 8) {
                    return res.json({success:false, message: "please enter a strong password"})
                }
                // hashing user password
                const salt = await bcrypt.genSalt(10)
                const hashedPassword = await bcrypt.hash(password, salt)
                const newUser = new userModel({
                    name,
                    email,
                    password:hashedPassword
                })

                const user = await newUser.save()
                
                const token = createToken(user._id)
                    res.json({success:true, token})

            } catch (error)   {
                console.log(error);
                res.json({success:false, message: error.message})
            }
}

// adminLogin

const adminLogin = async (req, res) => {

}

export {loginUser, registerUser, adminLogin}