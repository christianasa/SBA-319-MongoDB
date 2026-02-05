import express from "express";
import Review from "../models/Review.js";

const router = express.Router();

// GET all reviews
router.get("/", async (req, res, next) => {
  try {
    const reviews = await Review.find().populate("product");
    res.json(reviews);
  } catch (error) {
    next(error);
  }
});

// GET single review by ID
router.get("/:id", async (req, res, next) => {
  try {
    const review = await Review.findById(req.params.id).populate("product");
    if (!review) {
      return res.status(404).json({ message: "Review not found" });
    }
    res.json(review);
  } catch (error) {
    next(error);
  }
});

// POST create new review
router.post("/", async (req, res, next) => {
  try {
    const newReview = await Review.create(req.body);
    res.status(201).json(newReview);
  } catch (error) {
    next(error);
  }
});

// PUT update review
router.put("/:id", async (req, res, next) => {
  try {
    const updatedReview = await Review.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedReview) {
      return res.status(404).json({ message: "Review not found" });
    }
    res.json(updatedReview);
  } catch (error) {
    next(error);
  }
});

// DELETE review
router.delete("/:id", async (req, res, next) => {
  try {
    const deletedReview = await Review.findByIdAndDelete(req.params.id);
    if (!deletedReview) {
      return res.status(404).json({ message: "Review not found" });
    }
    res.json({ message: "Review deleted successfully", review: deletedReview });
  } catch (error) {
    next(error);
  }
});

export default router;