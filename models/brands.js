import mongoose from "mongoose";

const brandSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  country: {
    type: String,
    required: true,
  },
  crueltyFree: { 
    type: Boolean, 
    default: false 
  },
  vegan: { 
    type: Boolean, 
    default: false 
  },
  website: { type: String },
  description: { type: String },
});

export default mongoose.model("Brand", brandSchema);