
import doctorModel from '../models/doctorModel.js'
import bcrypt from 'bcrypt'
import validator from 'validator'
import jwt from 'jsonwebtoken'



//route for user login
const loginUser = async (req, res) => {
   
}

//route for user registration
const registerUser = async (req, res) => {
   
}

//route for admin login 
const adminLogin = async (req, res) => {
   const {email, password} = req.body

   try {
    if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
        const token = jwt.sign(email+password, process.env.JWT_SECRET)
        res.json({success: true, token})
    }
   } catch (error) {
    console.log(error)
    res.json({success: false, message: "invalid creadentials"})
   }
}

//route for doctor login
const doctorLogin = async(req, res) => {
    const {email, password} = req.body
       
    try {
         let doctor = await doctorModel.findOne({email})

        if(!doctor){
            return res.status(400).json({success:false, message:"invalid creadentials"})
        }

        const doctorEmail = doctor.email
        const doctorPassword = doctor.password

        if (email === doctorEmail && password === doctorPassword) {
            const token = jwt.sign(email+password, process.env.JWT_SECRET)
            res.json({success: true, token})
        }
    } catch (error) {
        console.log(error)
        res.json({success: false, message: 'error'})
    }
}


export { loginUser, registerUser, adminLogin, doctorLogin}