import React from "react";
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm, ValidationError } from "@formspree/react";

export default function Footer() {
  const [state, handleSubmit] = useForm("xovjvrdn");
  if (state.succeeded) {
    return <p>Thanks for Filling Form!</p>;
  }
  else (console.log("error"));
  return (
    <footer className="bg-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-2 md:gap-4">
          <div>
            <h3 className="text-lg font-semibold mb-4 ">About Us</h3>
            <p className="text-sm text-gray-800">
              MyShop is your one-stop destination for all your shopping needs.
              We offer a wide range of high-quality products at competitive
              prices.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-800 hover:text-primary"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-800 hover:text-primary"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-800 hover:text-primary"
                >
                  Categories
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-800 hover:text-primary"
                >
                  About
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-sm text-gray-800">A/111, Rajnagar, Madhubani</p>
            <p className="text-sm text-gray-800">Bihar, India</p>
            <p className="text-sm text-gray-800">PIN: 101011</p>
            <p className="text-sm text-gray-800">Email: info@asrsnews.in</p>
            <p className="text-sm text-gray-800">Phone: +91 987 654 123</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">QUICK ENQUIRY</h3>
            <form onSubmit={handleSubmit}>
              <Input id="name" type="name" name="name" placeholder="Enter Your Name"/>
              <Input id="mobile" type="number" name="mobile" placeholder="mobile number" />
              <Input id="email" type="email" name="email" placeholder="Email"/>
              <Input id="message" name="message" placeholder="messages" />
              <Button className="m-6 ml-10  " type="submit" disabled={state.submitting}>
                Submit
              </Button>
            </form>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-sm text-gray-800 mb-2">
              Subscribe to our newsletter for the latest updates and offers.
            </p>
            <div className="flex py-4">
              <Input type="email" placeholder="Your email" className=" w-32" />
              <Button className="ml-2" >  Subscribe</Button>
            </div>
            <div className="mt-4 flex space-x-4 pt-4">
              <a
                href="https://fb.openinapp.link/sahu"
                className="text-gray-400 hover:text-primary"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://twtr.openinapp.link/sahu"
                className="text-gray-400 hover:text-primary"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://insta.openinapp.link/News-Account"
                className="text-gray-400 hover:text-primary"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://ln.oia.bio/sahu"
                className="text-gray-400 hover:text-primary"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://yt.openinapp.link/News-Channel"
                className="text-gray-400 hover:text-primary"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-0 border-t border-gray-200 pt-2 text-center">
          <p className="text-sm text-gray-800">
            Copyright &copy; <b>2025</b> MyShop. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
