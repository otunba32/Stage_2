import React from "react"
import { Navbar } from "./component/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Product } from "./pages/productPage";
import { Checkout } from "./pages/Checkout";
import Payment from "./component/Payment";



function App() {
 

  return (
    <BrowserRouter>
    <div className=" relative">
    <Routes>
      {/* <Route /> */}
      <Route path="/" element={<Navbar />}>
      <Route index element={<Home />} />
      <Route path="product" element={<Product />} />
      <Route path="checkout" element={<Checkout />} />
      <Route path="payment" element={<Payment />} />
      </Route>
    </Routes>
    </div>
    </BrowserRouter>
  
  );
}

export default App
