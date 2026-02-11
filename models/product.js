import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  brand: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Brand",
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  shade: { type: String },
  size: { type: String },
  inStock: { 
    type: Boolean, 
    default: true 
  },
  description: { type: String },
  ingredients: { type: [String] },
});

export default mongoose.model("Product", productSchema);