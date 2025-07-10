import express from 'express'
import { addDoctor, listDoctor, removeDoctor, singleDoctor } from '../controllers/doctorController.js'
import upload from '../middlewares/multer.js'

const doctorRouter = express.Router()

doctorRouter.post('/add', upload.single("image"), addDoctor)
doctorRouter.post('/remove', removeDoctor)
doctorRouter.get('/list', listDoctor)
doctorRouter.post('/single', singleDoctor)


export default doctorRouter