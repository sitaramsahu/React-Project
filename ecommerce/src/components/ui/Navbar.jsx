import { useState, useEffect } from "react";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Update `isScrolled` based on the scroll position
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div>
        <ul className="flex space-x-8 justify-center p-3 bg-slate-200">
          <li>  <Instagram /></li>
          <li>  <Facebook /></li>
          <li>  <Twitter /></li>
          <li>  <Linkedin /></li>
          <li>  <Youtube /></li>
          <p className="font-semibold">
            India's Largest : Stationery I Art & Craft Store | <a href="">Explore Now</a>
          </p>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
