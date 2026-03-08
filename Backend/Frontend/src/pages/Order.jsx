import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthProvider";
import axios from "axios";
import { handleSuccess } from "../components/Toaster";
import { Link, useNavigate } from "react-router-dom";
import { HOC } from "../components/HOC";
import { Validation } from "../authentication/validation/formValidation";

function Order() {
  const { token, cartItems, setCartItems, foodList, getTotalCartAmount } = useAuth();

  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
    payment:'COD'
  });

  const navigate = useNavigate();
  const handleChange = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Validation(values)) {
      let orderItem = [];
      foodList.forEach((item) => {
        if (cartItems[item._id] > 0) {
          let itemInfo = { ...item, quantity: cartItems[item._id] };
          orderItem.push(itemInfo);
        }
      });

      let orderData = {
        address: values,
        items: orderItem,
        amount: getTotalCartAmount() + 2,
        payment: values.payment,  
      };
      try {
        const res = await axios.post(
          "/api/order/placeorder",
          orderData,
          { headers: { token } },
        );
        handleSuccess(res.data.message);
        setCartItems({});
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    if (!token) {
      navigate("/cart");
    } else if (getTotalCartAmount() === 0) {
      navigate("/cart");
    }
  }, [token]);

  return (
    <div className="px-6 sm:px-12 lg:px-32 py-15 md:py-25 max-w-full mx-auto">
      <form
        onSubmit={handleSubmit}
        autoComplete="off"
        className="flex flex-col md:flex-row justify-between gap-15 lg:gap-20">
        <div className="md:w-1/2">
          <h1 className="text-2xl md:text-3xl">
            Order <span className="text-secondary font-medium">Placed</span>
          </h1>
          <hr className="text-gray-300 my-2 mb-7" />
          <div className="flex flex-col gap-5 w-full">
            <div className="flex items-center gap-5">
              <input
                type="text"
                name="firstname"
                onChange={handleChange}
                placeholder="First name"
                className="border-[1px] border-gray-500 px-3 py-2 w-full rounded-md"
              />
              <input
                type="text"
                name="lastname"
                onChange={handleChange}
                placeholder="Last name"
                className="border-[1px] border-gray-500 px-3 py-2 w-full rounded-md"
              />
            </div>

            <input
              type="email"
              name="email"
              onChange={handleChange}
              placeholder="email"
              className="border-[1px] border-gray-500 px-3 py-2 w-full rounded-md"
            />
            <input
              type="text"
              name="street"
              onChange={handleChange}
              placeholder="Street"
              className="border-[1px] border-gray-500 px-3 py-2 w-full rounded-md"
            />

            <div className="flex gap-3">
              <input
                type="text"
                name="city"
                onChange={handleChange}
                placeholder="City"
                className="border-[1px] border-gray-500 px-3 py-2 w-full rounded-md"
              />
              <input
                type="text"
                name="state"
                onChange={handleChange}
                placeholder="State"
                className="border-[1px] border-gray-500 px-3 py-2 w-full rounded-md"
              />
            </div>

            <div className="flex gap-3">
              <input
                type="text"
                name="zipcode"
                onChange={handleChange}
                placeholder="Zipcode"
                className="border-[1px] border-gray-500 px-3 py-2 w-full rounded-md"
              />
              <input
                type="text"
                name="country"
                onChange={handleChange}
                placeholder="country"
                className="border-[1px] border-gray-500 px-3 py-2 w-full rounded-md"
              />
            </div>
            <input
              type="text"
              name="phone"
              onChange={handleChange}
              placeholder="Phone"
              className="border-[1px] border-gray-500 px-3 py-2 w-full rounded-md"
            />
          </div>
        </div>
        <div className="md:w-1/3">
          <h1 className="text-2xl md:text-3xl">Cart Totals</h1>
          <div className="mt-10">
            <div className="flex text-[16px] items-center justify-between text-gray-400">
              <p>Subtotals</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr className="text-gray-500 my-2 mb-5" />
            <div className="flex text-[16px] items-center justify-between text-gray-400">
              <p>Delivery Fee</p>
              <p>{2}</p>
            </div>
            <hr className="text-gray-500 my-2 mb-5" />
            <div className="flex text-[16px] items-center justify-between">
              <p>Total</p>
              <p>${getTotalCartAmount() + 2} </p>
            </div>

            <div className="mt-10">
              <p className="text-xl font-medium mb-6">Payment Method</p>
              <div className="flex flex-col gap-4 w-70">

                 <label className={`flex items-center gap-3 border rounded-lg py-2.5 md:py-3 cursor-pointer px-4 tansition 
                  ${values.payment === 'COD' ? 'border-secondary' : 'border-gray-400'}`}>
                  <input type="radio" 
                  name="payment"
                  value='COD'
                  onChange={handleChange}
                  checked={values.payment === 'COD'}
                  className="hidden" />
                  <span className={`w-4 h-4 md:w-5 md:h-5 rounded-full border-6 ${values.payment === 'COD' ? 'border-secondary' : 'border-gray-400'}`}></span>
                  <span className="text-sm md:text-[15px]">COD (Cash on Delivery) </span>
                </label>

                <label className={`flex items-center gap-3 border rounded-lg py-2.5 md:py-3 cursor-pointer px-4 tansition
                   ${values.payment === 'stripe' ? 'border-secondary' : 'border-gray-400'}`}>
                  <input type="radio"
                   name="payment"
                   value="stripe"
                   onChange={handleChange}
                   checked={values.payment === 'stripe'}
                   className="hidden" />
                  <span className={`w-4 h-4 md:w-5 md:h-5 rounded-full border-6 ${values.payment === 'stripe' ? 'border-secondary' : 'border-gray-400'}`}></span>
                  <span className="text-sm md:text-[15px]">Stripe (Credit / Debit) </span>
                </label>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="mt-7 md:mt-10 lg:mt-8 py-2.5 md:py-3 bg-primary font-medium md:text-[17px] text-white w-full cursor-pointer">
            Proceed To Payment
          </button>
        </div>
      </form>
    </div>
  );
}

export default HOC(Order);
