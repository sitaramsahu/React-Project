import { useState, useEffect } from "react";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

const TopNavbar = () => {
  return (
    <>
      <div>
        <ul className="flex space-x-8 justify-center p-3 bg-slate-200">
          <li>
            {" "}
            <a href="#">
              {" "}
              <Instagram />{" "}
            </a>{" "}
          </li>
          <li>
            {" "}
            <a href="#">
              {" "}
              <Facebook />{" "}
            </a>{" "}
          </li>
          <li>
            {" "}
            <a href="#">
              {" "}
              <Twitter />{" "}
            </a>{" "}
          </li>
          <li>
            {" "}
            <a href="#">
              {" "}
              <Linkedin />{" "}
            </a>{" "}
          </li>
          <li>
            {" "}
            <a href="#">
              {" "}
              <Youtube />{" "}
            </a>{" "}
          </li>
          <p className="font-semibold">
            India's Largest : Stationery I Art & Craft Store |{" "}
            <a href="">Explore Now</a>
          </p>
        </ul>
      </div>
    </>
  );
};

export default TopNavbar;
