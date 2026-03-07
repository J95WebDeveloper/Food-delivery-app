import FoodSchema from "../schema/foodSchema.js";
import fs from "fs";

const addFood = async (req, res) => {
  const { name, description, price, image, category } = req.body;
  try {

    const ingredients = JSON.parse(req.body.ingredients || "[]");
    const nutrition = JSON.parse(req.body.nutrition || "{}");
    const imageUrl = `/uploads/${req.file.filename}`;

    const food = await FoodSchema({
      name,
      description,
      price,
      image: imageUrl,
      category,
      ingredients,
      nutrition,
    });

    await food.save();

    res.status(201).json({
      message: "Item added Successfully",
      success: true,
    });
  } catch (error) {
    res.status(501).json({
      message: "Item add internal error ",
      error: error.message,
      success: false,
    });
  }
};

const allFood = async (req, res) => {
  try {
    const foods = await FoodSchema.find({});

    res.status(201).json({
      success: true,
      foods
    });

  } catch (error) {
    res.status(501).json({
      message: "all food items internal error ",
      error: error.message,
      success: false,
    });
  }
};


const removeFood = async (req, res) => {
  try {
    
    const foods = await FoodSchema.findById(req.body.id);
    fs.unlink(`/uploads/${foods.image}`, () => {})

    await FoodSchema.findByIdAndDelete(req.body.id)

    res.status(201).json({
      message: "food items remove Successfully",
      success: true,
      foods
    });

  } catch (error) {
    res.status(501).json({
      message: "remove food items internal error ",
      error: error.message,
      success: false,
    });
  }
};


const updateFood = async (req, res) => {
  try {
    const { id } = req.params;

    const { name, description, price, category } = req.body;

    const ingredients = JSON.parse(req.body.ingredients || "[]");
    const nutrition = JSON.parse(req.body.nutrition || "{}");

    const existingFood = await FoodSchema.findById(id);

    if (!existingFood) {
      return res.status(404).json({
        message: "Food not found",
        success: false,
      });
    }

    let imageUrl = existingFood.image;

    // If new image uploaded
    if (req.file) {
      imageUrl = `/uploads/${req.file.filename}`;
    }

    await FoodSchema.findByIdAndUpdate(id, {
      name,
      description,
      price,
      category,
      image: imageUrl,
      ingredients,
      nutrition,
    });

    res.status(200).json({
      message: "Item updated successfully",
      success: true,
    });

  } catch (error) {
    res.status(500).json({
      message: "Update internal error",
      error: error.message,
      success: false,
    });
  }
};

const getSingleFood = async (req, res) => {
  try {
    const food = await FoodSchema.findById(req.params.id);

    res.status(200).json({
      success: true,
      food,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};
export default { addFood, allFood, removeFood, updateFood, getSingleFood };
