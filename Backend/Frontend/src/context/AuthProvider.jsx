import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { handleSuccess } from "../components/Toaster";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const getToken = localStorage.getItem("token");
  const getUser = JSON.parse(localStorage.getItem("user"));
  const [token, setToken] = useState(getToken ? getToken : "");
  const [user, setUser] = useState(getUser ? getUser : []);
  const [foodList, setFoodList] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  const totalQuantity = Object.values(cartItems).reduce(
    (total, quantity) => total + quantity,
    0,
  );

  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    setToken(null);
    setUser(null); 
    navigate("/");
  }

  const addToCart = async (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
    if (token) {
      try {
        const res = await axios.post(
          "/api/cart/addcart",
          { itemId },
          { headers: { token } },
        );
        console.log(res.data.cartData);
        handleSuccess(res.data.message);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const removeFromCart = async (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    if (token) {
      try {
        const res = await axios.post(
          "/api/cart/removecart",
          { itemId },
          { headers: { token } },
        );
        handleSuccess(res.data.message);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const getCartData = async (token) => {
    if (token) {
      try {
        const res = await axios.get("/api/cart/getcart", {
          headers: { token },
        });
        console.log(res.data.cartData);
        setCartItems(res.data.cartData);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;

    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        const itemInfo = foodList.find(
          (product) => product._id.toString() === item.toString(),
        );

        if (itemInfo) {
          totalAmount += itemInfo.price * cartItems[item];
        }
      }
    }

    return totalAmount;
  };

  const allFoods = async () => {
    try {
      const res = await axios.get("/api/food/getFood");
      setFoodList(res.data.foods);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    allFoods();
  }, []);

  useEffect(() => {
    if (token) {
      getCartData(token);
    }
  }, [token]);

  const contextValue = {
    token,
    user,
    setToken,
    setUser,
    totalQuantity,
    cartItems,
    setCartItems,
    foodList,
    setFoodList,
    logout,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
};
