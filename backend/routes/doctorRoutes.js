import express from 'express'
import { addDoctor, listDoctor, removeDoctor, singleDoctor, updateDoctor, uploadFolder } from '../controllers/doctorController.js'
import upload from '../middlewares/multer.js'
import auth from '../middlewares/auth.js'

const doctorRouter = express.Router()

doctorRouter.post('/add-doctor', upload.single("image"), addDoctor)
doctorRouter.post('/upload-folder',upload.fields([{name: "json"}, {name: "images"}]), uploadFolder)
doctorRouter.post('/remove', removeDoctor)
doctorRouter.get('/list', listDoctor)
doctorRouter.get('/single', singleDoctor)
doctorRouter.put('/update',auth, updateDoctor)


export default doctorRouter