import doctorModel from "../models/doctorModel.js";
import cloudinary from "cloudinary";
import { log } from "console";
import fs from "fs";

//function for add doctor
const addDoctor = async (req, res) => {
  try {
    const {
      name,
      speciality,
      email,
      degree,
      password,
      address,
      experience,
      fees,
      about,
    } = req.body;

    //cloudinary image store
    const image = req.file.image;
    let imagesUrl = await cloudinary.uploader.upload(req.file.path);
    let imageUrl = imagesUrl.secure_url;

    const doctorData = {
      name,
      speciality,
      email,
      degree,
      password,
      address: JSON.parse(address),
      experience: isNaN(experience) ? 0 : Number(experience),
      fees: Number(fees),
      image: imageUrl,
      about,
      date: Date.now(),
    };

    const doctor = new doctorModel(doctorData);
    await doctor.save();

    res.json({ success: true, message: "doctor added" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "error" });
  }
};

//upload folder
const uploadFolder = async (req, res) => {
  try {
    const jsonFile = req.files.json?.[0];
    const imagesFiles = req.files.images;

    if (!jsonFile) {
      return res
        .status(400)
        .json({ success: false, message: "not find json file" });
    }

    //parse json file content
    const jsonContent = JSON.parse(fs.readFileSync(jsonFile.path, "utf-8"));

    //upload image to cloudinary and make a map of filename => url
    let imageMap = {};
    for (let file of imagesFiles) {
      const result = await cloudinary.uploader.upload(file.path);
      imageMap[file.originalname] = result.secure_url;
    }

    //now go through json and save each file
    for (let doctor of jsonContent) {
      const {
        name,
        speciality,
        email,
        degree,
        password,
        address,
        experience,
        fees,
        about,
        image, // this should match image file name in JSON
      } = doctor;

      const newDoctor = new doctorModel({
        name,
        speciality,
        email,
        degree,
        password,
        address,
        experience: isNaN(experience) ? 0 : Number(experience),
        fees: Number(fees),
        image: imageMap[image] || "",
        about,
        date: Date.now(),
      });

      await newDoctor.save();
    }
    res.json({
      success: true,
      message: "Uploaded and doctors saved successfully",
    });
  } catch (error) {
    console.error("Upload Folder Error:", error);
    res
      .status(500)
      .json({ success: false, message: "Error processing folder upload" });
  }
};

//function of list doctor
const listDoctor = async (req, res) => {
  try {
    const doctors = await doctorModel.find({});
    res.json({ success: true, doctors });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "error" });
  }
};

//function for removing doctor
const removeDoctor = async (req, res) => {};

//function for single Doctor info
const singleDoctor = async (req, res) => {
  try {
    console.log(req.body.user)
    const id = req.body.user || req.userId
    const doctor = await doctorModel.findById(id);
    res.json({ success: true, doctor });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "error" });
  }
};

//update doctor
const updateDoctor = async (req, res) => {
  const { fees, address, available, userId } = req.body;

  const doctorId = req.body.userId;
  const doctor = await doctorModel.findByIdAndUpdate(userId, {
    $set: {
      fees: fees,
      address: address,
      available: available,
    },
  });

  res.json({ success: true, message: "successfully save" });
};

export {
  listDoctor,
  addDoctor,
  removeDoctor,
  singleDoctor,
  uploadFolder,
  updateDoctor,
};
