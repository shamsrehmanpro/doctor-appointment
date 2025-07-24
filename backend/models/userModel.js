import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: String, required: false },
  address: { type: String, required: false },
  email: { type: String, required: true },
  password: { type: String, required: true },
  date: { type: Number, default: Date.now },
});

const userModel = mongoose.models.user || mongoose.model("user", userSchema);

export default userModel;
