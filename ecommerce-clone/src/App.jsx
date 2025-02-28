import React from "react";
import Footer from "./components/Footer";
import Slide from "./components/Slide";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./components/Products";
import Home from "./Pages/Home/Home";
import Header from "./Pages/Header/Header";

function App() {
  return (
    <div className="p-2">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/products"
            element={
              <div>
                <Slide /> <Products />
              </div>
            }
          />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
