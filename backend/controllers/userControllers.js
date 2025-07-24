
import doctorModel from '../models/doctorModel.js'
import bcrypt from 'bcrypt'
import validator from 'validator'
import jwt from 'jsonwebtoken'
import userModel from '../models/userModel.js'


const createToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET)
}

//route for user login
const loginUser = async (req, res) => {
    const {email, password} = req.body
    try {
        const user = await userModel.findOne({email})
        if (!user) {
            return res.json({success:false, message:'user doesnot exist'})
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if (!isMatch) {
           return res.json({success:false, message: 'invalid credentials'})
        }

        const token = createToken(user._id)
        res.json({success: true, token})


    } catch (error) {
        console.log(error)
        res.json({success: false, message:'error'})
    }
   
}

//route for user registration
const registerUser = async (req, res) => {
   const {name, email, password} = req.body

   try {
    if (!name || !email || !password) {
        return res.json({success:false, message:'All field are required'})
    }
    //check if email exist
    const exist = await userModel.findOne({email})
    if (exist) {
        return res.json({success:false, message:'email exist'})
    }

    //check email and password format
    if (!validator.isEmail(email)) {
        res.json({success:false, message:"not valid email format"})
    }

    if (password.length < 8) {
        res.json({ success: false, message: 'please enter strong password' })
    }

    //hashing user password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    //create new user
    const newUser = new userModel({
        name,
        email,
        password: hashedPassword
    })

    const user = await newUser.save()

    const token = createToken(user._id)
    res.json({success:true, token})

   } catch (error) {
    console.log(error)
     res.json({success:false, message:'error'})

   }
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
            const token = createToken(doctor._id)
            res.json({success: true, token})
        }
    } catch (error) {
        console.log(error)
        res.json({success: false, message: 'error'})
    }
}


export { loginUser, registerUser, adminLogin, doctorLogin}