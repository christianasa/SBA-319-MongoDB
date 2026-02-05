import express from "express";
import Brand from "../models/Brand.js";

const router = express.Router();

// GET all brands
router.get("/", async (req, res, next) => {
  try {
    const brands = await Brand.find();
    res.json(brands);
  } catch (error) {
    next(error);
  }
});

// GET single brand by ID
router.get("/:id", async (req, res, next) => {
  try {
    const brand = await Brand.findById(req.params.id);
    if (!brand) {
      return res.status(404).json({ message: "Brand not found" });
    }
    res.json(brand);
  } catch (error) {
    next(error);
  }
});

// POST create new brand
router.post("/", async (req, res, next) => {
  try {
    const newBrand = await Brand.create(req.body);
    res.status(201).json(newBrand);
  } catch (error) {
    next(error);
  }
});

// PUT update brand
router.put("/:id", async (req, res, next) => {
  try {
    const updatedBrand = await Brand.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedBrand) {
      return res.status(404).json({ message: "Brand not found" });
    }
    res.json(updatedBrand);
  } catch (error) {
    next(error);
  }
});

// DELETE brand
router.delete("/:id", async (req, res, next) => {
  try {
    const deletedBrand = await Brand.findByIdAndDelete(req.params.id);
    if (!deletedBrand) {
      return res.status(404).json({ message: "Brand not found" });
    }
    res.json({ message: "Brand deleted successfully", brand: deletedBrand });
  } catch (error) {
    next(error);
  }
});

export default router;