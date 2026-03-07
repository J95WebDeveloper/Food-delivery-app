import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import avatar from "../assets/upload.png";
import { ToastContainer } from "react-toastify";
import { handleSuccess } from "../components/Toaster";

function UpdateFood() {
  const { id } = useParams();

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const navigate = useNavigate();

  const [values, setValues] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    ingredients: [],
    nutrition: {
      calories: "",
      fat: "",
      carbs: "",
      protein: "",
    },
  });

  // ✅ Fetch Existing Data
  useEffect(() => {
    const fetchFood = async () => {
      const res = await axios.get(
        `http://localhost:3000/api/food/getFood/${id}`,
      );
      const data = res.data.food;
      setValues({
        ...data,
        ingredients: data.ingredients || [],
        nutrition: data.nutrition || {},
      });

      setPreview(data.image || null);
    };

    fetchFood();
  }, [id]);

  const handleChange = (e) => {
    setValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleNutritionChange = (e) => {
    setValues((prev) => ({
      ...prev,
      nutrition: {
        ...prev.nutrition,
        [e.target.name]: e.target.value,
      },
    }));
  };

  const handleIngredientsChange = (e) => {
    const arr = e.target.value.split(",").map((i) => i.trim());
    setValues((prev) => ({ ...prev, ingredients: arr }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  // ✅ Submit Update
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("name", values.name);
    formData.append("description", values.description);
    formData.append("price", values.price);
    formData.append("category", values.category);
    formData.append("ingredients", JSON.stringify(values.ingredients));
    formData.append("nutrition", JSON.stringify(values.nutrition));

    if (image) {
      formData.append("image", image);
    }

    await axios
      .put(`http://localhost:3000/api/food/updateFood/${id}`, formData)
      .then((res) => {
        console.log(res.data);
        handleSuccess(res.data.message);
        navigate('/list')
      });
  };

  return (
    <div className="mt-20 pb-20">
      <div className="px-6 sm:px-12 lg:px-64">
        <h1 className="text-xl md:text-2xl font-medium mb-7 md:mb-7">
          Update Items To
          <span className="text-primary font-semibold"> Cart</span>
        </h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-full"
          autoComplete="off"
        >
          <div className="cart p-2 grid md:w-[500px]">
            <div className="flex mb-8">
              <label htmlFor="image">
                <div className="border-2 border-gray-300 h-18 w-18">
                  <img src={preview || avatar} className="w-full h-full" />
                </div>
                <input
                  type="file"
                  id="image"
                  name="image"
                  hidden
                  onChange={handleImageChange}
                />
              </label>
            </div>
            <div className="flex flex-col gap-4">
              <input
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
                placeholder="product name"
                className="border-2 border-gray-400 px-4 py-2 rounded-md required:"
              />
              <textarea
                name="description"
                value={values.description}
                onChange={handleChange}
                rows={5}
                placeholder="write content here..."
                className="border-2 border-gray-400 px-4 py-2 rounded-md"
              />
              <div className="flex items-center gap-4">
                <select
                  name="category"
                  value={values.category}
                  onChange={handleChange}
                  className="border-2 border-gray-400 px-4 py-2 rounded-md w-full"
                >
                  <option value="Salad">Salad</option>
                  <option value="Rolls">Rolls</option>
                  <option value="Deserts">Deserts</option>
                  <option value="Sandwich">Sandwich</option>
                  <option value="Cake">Cake</option>
                  <option value="Pure Veg">Pure Veg</option>
                  <option value="Pasta">Pasta</option>
                  <option value="Noodles">Noodles</option>
                  <option value="Meat">All Meat Dish</option>
                  <option value="Value Combo Pack">Value Combo Pack</option>
                  <option value="Seafood">All Seafood Dish</option>
                  <option value="Chicken">All Chicken Dish</option>
                </select>

                <input
                  type="number"
                  name="price"
                  value={values.price}
                  onChange={handleChange}
                  placeholder="$20"
                  className="w-full border-2 border-gray-400 px-4 py-2 rounded-md"
                />
              </div>

              <div className="">
                <label className="font-medium">Ingredients</label>
                <input
                  type="text"
                  name="ingredients"
                  value={values.ingredients.join(", ")}
                  placeholder="Rice, Salmon, Vinegar"
                  onChange={handleIngredientsChange}
                  className="border-2 border-gray-400 px-4 py-2 rounded-md w-full mt-2"
                />
              </div>

              <div className="">
                <label className="font-medium">Nutrition</label>

                <div className="grid grid-cols-2 gap-4 mt-3">
                  <input
                    type="number"
                    name="calories"
                    value={values.nutrition.calories ?? ""}
                    placeholder="Calories"
                    onChange={handleNutritionChange}
                    className="border-2 border-gray-400 px-4 py-2 rounded-md"
                  />

                  <input
                    type="number"
                    name="fat"
                    value={values.nutrition.fat ?? ""}
                    placeholder="Fat (g)"
                    onChange={handleNutritionChange}
                    className="border-2 border-gray-400 px-4 py-2 rounded-md"
                  />

                  <input
                    type="number"
                    name="carbs"
                    value={values.nutrition.carbs ?? ""}
                    placeholder="Carbs (g)"
                    onChange={handleNutritionChange}
                    className="border-2 border-gray-400 px-4 py-2 rounded-md"
                  />

                  <input
                    type="number"
                    name="protein"
                    placeholder="Protein (g)"
                    value={values.nutrition.protein ?? ""}
                    onChange={handleNutritionChange}
                    className="border-2 border-gray-400 px-4 py-2 rounded-md"
                  />
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="cursor-pointer active:scale-95 hover:scale-105 mt-5 btn py-2 text-white text-lg rounded-md"
            >
              Update
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default UpdateFood;
