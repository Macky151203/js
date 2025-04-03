import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./comps/Home";
import Product from "./comps/Product";
import Cart from "./comps/Cart";
function App() {

  return (
    <div className="">
      <div className="p-2  bg-slate-200 flex flex-row items-center gap-4 shadow-md">
        <div className="text-xl">Shophere</div>
        <div className="" ><a href="/">Home</a></div>
        <div className=""><a href="/cart">Cart</a></div>
        <div></div>
      </div>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
