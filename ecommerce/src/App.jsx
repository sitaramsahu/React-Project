import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/ui/Navbar";
import NavbarHead from "./components/NavbarHead";
import error from "./assets/error-page-asrsnews.jpg";
import LiveBackground from "./components/LiveBackground";
import Footer from "./components/ui/Footer";
import Services from "./Pages/Services";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Track from "./Pages/Track";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <NavbarHead />
        <div className="container mx-auto px-4 py-8 flex-grow ">
          <LiveBackground />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/tracking" element={<Track />} />
            {/* <Route path="/signup" element={<Signup />} /> */}

            <Route
              path="*"
              element={<img src={error} alt="404" className="w-full" />}
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

// Placeholder components for routes

const Login = () => <h1 className="text-9xl font-bold">Login Page</h1>;
const Signup = () => <h1 className="text-9xl font-bold">Signup Page</h1>;
const Dashboard = () => (
  <h1 className="text-6xl font-bold text-center"> Dashboard Page</h1>
);

export default App;
