import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      default: "",
    },
    category: {
      type: String,
      required: true,
    },
    ingredients: [String],
    nutrition: {
      calories: Number,
      fat: Number,
      carbs: Number,
      protein: Number,
    },
  },
  {
    timestamps: true,
  },
);

const FoodSchema = mongoose.models.food || mongoose.model("food", schema);
export default FoodSchema;
