import express from 'express'
import { registerUser, loginUser, adminLogin, doctorLogin } from '../controllers/userControllers.js'
import adminAuth from '../middlewares/adminAuth.js'
import jwt from 'jsonwebtoken'
import authUser from '../middlewares/auth.js'


const userRouter = express.Router()

userRouter.post('/register', registerUser)
userRouter.post('/login', loginUser)
userRouter.post('/admin', adminLogin)
userRouter.post('/doctorlogin', doctorLogin)

export default userRouter