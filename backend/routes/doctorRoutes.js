import express from 'express'
import { addDoctor, listDoctor, removeDoctor, singleDoctor, updateDoctor, uploadFolder } from '../controllers/doctorController.js'
import upload from '../middlewares/multer.js'
import authUser from '../middlewares/auth.js'


const doctorRouter = express.Router()

doctorRouter.post('/add-doctor', upload.single("image"), addDoctor)
doctorRouter.post('/upload-folder',upload.fields([{name: "json"}, {name: "images"}]), uploadFolder)
doctorRouter.post('/remove', removeDoctor)
doctorRouter.get('/list', listDoctor)
doctorRouter.post('/single', authUser, singleDoctor)
doctorRouter.put('/update',authUser, updateDoctor)


export default doctorRouter