import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
   name: {type:String, required:true}, 
    speciality: {type:String, required:true},
    email: {type:String, required:true},
    degree: {type: String, required:true},
    password:{type:String, required:true},
    address:{type:Object, required:true},
    experience:{type:Number, default: false},
    fees:{type:Number, default: false},
    image: {type: String, required:true},
    about: {type: String, required: true},
    available: {type: Boolean, default: false},
    date:{type:Number, required:true}
})


const doctorModel = mongoose.models.user || mongoose.model("doctor", doctorSchema)

export default doctorModel