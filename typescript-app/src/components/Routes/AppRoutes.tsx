import Dashboard from "@/pages/Dashboard/Dashboard";
import NotFound from "@/pages/NotFound/NotFound";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const AppRoutes: React.FC = () => {
  return (
    <Router>
      {/* Routes */}
      <Routes>
        <Route path="/" element={<Dashboard />} />
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/services" element={<Services />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
