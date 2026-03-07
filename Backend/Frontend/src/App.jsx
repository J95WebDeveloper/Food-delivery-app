import "./App.css";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Order from "./pages/Order";
import Login from "./authentication/auth/Login";
import Register from "./authentication/auth/Register";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import MyOrders from "./pages/MyOrders";
import AllFoods from "./components/AllFoods";


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/order" element={<Order />} />
      <Route path="/myorder" element={<MyOrders />} />
      <Route path="/allfoods/:category" element={<AllFoods />} />
    </Routes>
    <ToastContainer />
    </>
  );
}

export default App;
