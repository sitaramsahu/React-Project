import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Slide from "./components/Slide";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./components/Products";
import { Button } from "./components/ui/button";

function App() {
  return (
    <div className="p-2">
      <Navbar />
      
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <div className="relative w-full h-screen">
                <img
                  src="https://d1.awsstatic.com/background-ft.7d2fb720994cd2a2696fe47a1c2454fc5cc5bd41.png"
                  alt="AWS Background"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-6 flex " ><Slide /></div>
                  
                <div className="absolute inset-0 flex items-center justify-center">
                  <h1 className="text-white text-4xl font-bold bg-black/50 px-4 py-2  rounded-lg">
                    Welcome to MyShop
                  </h1>
                </div>
              </div>
            }
          />
          <Route path="/products" element={<div> <Slide /> <Products/> </div>} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
