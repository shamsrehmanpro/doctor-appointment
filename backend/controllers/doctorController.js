import doctorModel from "../models/doctorModel.js";
import cloudinary from "cloudinary"

//function for add doctor
const addDoctor = async (req, res) => {
  try {
    const {
      name,
      speciality,
      email,
      education,
      password,
      address,
      experience,
      fees,
    } = req.body;

    //cloudinary image store
    const image = req.file.image;
    let imagesUrl = await cloudinary.uploader.upload(req.file.path);
    let imageUrl = imagesUrl.secure_url;

    const doctorData = {
      name,
      speciality,
      email,
      education,
      password,
      address:  JSON.parse(address),
      experience : Number(experience),
      fees : Number(fees),
      image: imageUrl,
      date: Date.now()
    };

    const doctor = new doctorModel(doctorData)
    await doctor.save()

    res.json({success: true, message: "doctor added"})
  } catch (error) {
    console.log(error)
    res.json({success: false, message: "error"})
  }
};

//function of list doctor
const listDoctor = async (req, res) => {};

//function for removing doctor
const removeDoctor = async (req, res) => {};
//function for single Doctor info
const singleDoctor = async (req, res) => {};

export { listDoctor, addDoctor, removeDoctor, singleDoctor };
