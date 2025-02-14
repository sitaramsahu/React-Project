import Dashboard from "@/pages/Dashboard/Dashboard";
import MainLayout from "../Layouts/MainLayout";

import { Routes, Route } from "react-router-dom";
const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Dashboard />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
