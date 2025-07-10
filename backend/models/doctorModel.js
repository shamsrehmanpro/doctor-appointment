import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
   name: {type:String, required:true}, 
    speciality: {type:String, required:true},
    email: {type:String, required:true},
    education: {type: String, required:true},
    password:{type:String, required:true},
    address:{type:Array, required:true},
    expreience:{type:Number, default: false},
    fees:{type:Number, default: false},
    image: {type: String, required:true},
    date:{type:Number, required:true}
})


const doctorModel = mongoose.models.user || mongoose.model("doctor", doctorSchema)

export default doctorModel