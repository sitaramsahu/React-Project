import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react'
import React from 'react'

const AutoSlider = () => {
  return (
    <div>
        <div>
         <ul className='flex p-2 space-x-20 place-content-center bg-black text-white font-semibold'>
          <li>🎉 Republic Clearance Sale is LIVE NOW! 🎊🛒</li>
          <li>🚚 Enjoy Free Shipping on Orders Above ₹999! 🛷</li>
          <li>☃️ Win 2 Free Gifts on All Orders Above ₹1499! 🎁</li>
        </ul>
        </div>

        <div>
            <ul className='flex space-x-8 justify-center p-3 bg-slate-200'>
                <li><Instagram /> </li>
                <li><Facebook /> </li>
                <li><Twitter /> </li>
                <li><Linkedin /></li>
                <li><Youtube /></li>
                <p className='font-semibold'>India's Largest : Stationery I Art & Craft Store | <a href="#">Explore Now</a></p>
            </ul>
        </div>

    </div>
  )
}

export default AutoSlider
