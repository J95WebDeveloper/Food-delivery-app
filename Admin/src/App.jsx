import "./App.css";
import { Routes, Route } from "react-router-dom";
import Add from "./pages/Add";
import List from "./pages/List";
import Order from "./pages/Order";
import UpdateFood from "./pages/Update";
import Header from "./components/Header";

function App() {
  return (
    <div className="bg">
      <Header />
      <Routes>
        <Route path="/" element={<Add />} />
        <Route path="/list" element={<List />} />
        <Route path="/order" element={<Order />} />
        <Route path="/update/:id" element={<UpdateFood />} />
      </Routes>
    </div>
  );
}

export default App;
