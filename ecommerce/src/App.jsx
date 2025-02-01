import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/ui/Navbar";
import NavbarHead from "./components/NavbarHead";
import DeleteCom from "./components/DeleteCom";
import error from "./assets/error-page-asrsnews.jpg";
import LiveBackground from "./components/LiveBackground";
import Footer from "./components/ui/Footer";

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <NavbarHead />
        <div className="container mx-auto px-4 py-8 ">
          <LiveBackground />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
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
const Home = () => (
  <div className="min-h-screen">
    <h1 className="text-2xl font-bold">Home Page</h1>
    <div className="p-5 ">
      <div className="w-full justify-center">
        <img
          src="https://sitaramstationers.shiprocket.co/post_order/img/order_search_banner_1.png"
          alt="Spipment"
        />
      </div>
    </div>
  </div>
);
const Services = () => <h1 className="text-2xl font-bold">Services Page</h1>;
const Contact = () => <h1 className="text-2xl font-bold">Contact Page</h1>;
const About = () => (
  <div className="flex space-x-10">
    <h1 className="text-2xl font-bold">About Page</h1>
    <p className="text-2xl font-bold ">
      <DeleteCom />
    </p>
  </div>
);
const Login = () => <h1 className="text-2xl font-bold">Login Page</h1>;
const Signup = () => <h1 className="text-2xl font-bold">Signup Page</h1>;

export default App;
