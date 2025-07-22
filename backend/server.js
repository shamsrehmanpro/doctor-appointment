import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import doctorRouter from './routes/doctorRoutes.js'
import connectCloudinary from './config/cloudinary.js'
import userRouter from './routes/userRoutes.js'

//app config
const app = express()
const port = process.env.PORT || 4000
connectDB();
connectCloudinary()

//middlesware
app.use(express.json())
app.use(cors())

//api endpoints
app.use('/api/doctor', doctorRouter)
app.use('/api/user', userRouter)


app.get('/', (req, res) => {
    res.send('api working')
})



app.listen(port, () => {
    console.log('server start on :' + port);

})