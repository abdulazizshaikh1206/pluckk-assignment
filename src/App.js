import "./App.css";
import { Route, Routes, Navigate } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Orders from "./containers/orders/Orders";
import Navbar from "./components/navbar/Navbar";
import OrderStatus from "./containers/order-status/OrderStatus";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navbar />}>
          <Route path="/" element={<Navigate to="orders" />} />
          <Route path="orders" element={<Orders />} />
          <Route path="order-status" element={<OrderStatus />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
