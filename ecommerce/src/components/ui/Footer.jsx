import { useState, useEffect } from "react";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

const Footer = () => {

  return (
    <>
      <div>
        <div className="flex flex-col items-center font-bold bg-slate-200 ">
          <ul className="flex space-x-8 justify-center p-3">
            <li> <a href="#"> <Instagram /> </a>  </li>
            <li> <a href="#"> <Facebook  /> </a>  </li>
            <li> <a href="#"> <Twitter   /> </a>  </li>
            <li> <a href="#"> <Linkedin  /> </a>  </li>
            <li> <a href="#"> <Youtube   /> </a>  </li>

            <p>Copyright © SitaRamSahu. All rights reserved.</p>
            <div className="text-center">
              <img src="https://asrsnews.in/wp-content/uploads/2025/02/payments1.png" />
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
