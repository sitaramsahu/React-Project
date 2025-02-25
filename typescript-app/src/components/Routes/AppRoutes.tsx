import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SettingsProvider } from "@/context/settings-context";
import Header from "@/components/Header/Header";
import Dashboard from "@/pages/Dashboard/Dashboard";
import Login from "@/pages/Login/Login";
import NotFound from "@/pages/NotFound/NotFound";
import Services from "@/pages/Services/Services";
import Settings from "@/pages/Settings/Settings";

const AppLayout: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <div>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main className="pt-32">{children}</main>
    </div>
  );
};

const AppRoutes: React.FC = () => {
  return (
    <SettingsProvider>
      <Router>
        <AppLayout>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="/services" element={<Services />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AppLayout>
      </Router>
    </SettingsProvider>
  );
};

export default AppRoutes;
