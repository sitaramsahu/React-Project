import React from "react"
import { Facebook, Twitter, Instagram } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="bg-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 ">About Us</h3>
            <p className="text-sm text-gray-800">
              MyShop is your one-stop destination for all your shopping needs. 
              We offer a wide range of high-quality products at competitive prices.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-gray-800 hover:text-primary">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-800 hover:text-primary">
                  Products
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-800 hover:text-primary">
                  Categories
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-800 hover:text-primary">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-800 hover:text-primary">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-sm text-gray-800">123 Shop Street, City, Country</p>
            <p className="text-sm text-gray-800">Email: info@shopnow.com</p>
            <p className="text-sm text-gray-800">Phone: +1 234 567 890</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-sm text-gray-800 mb-2">Subscribe to our newsletter for the latest updates and offers.</p>
            <div className="flex">
              <Input type="email" placeholder="Your email" className="rounded-r-none" />
              <Button className="rounded-l-none">Subscribe</Button>
            </div>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 text-center">
          <p className="text-sm text-gray-800">&copy; 2023 ShopNow. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

