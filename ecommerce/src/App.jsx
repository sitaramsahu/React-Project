import * as React from "react";
import NavbarHead from "./components/NavbarHead";
import Navbar from "./components/ui/Navbar";

function App() {
  return (
    <div className="min-h-screen bg-cyan-50">
      <NavbarHead />
      <div className="p-5 ">
        <div className="w-full justify-center">
          <img src="https://sitaramstationers.shiprocket.co/post_order/img/order_search_banner_1.png" alt="Spipment" />
          {/* <img src="https://inkarto.com/cdn/shop/files/WhatsApp_Image_2025-01-18_at_14.49.49_a8518c6b.jpg?v=1737193137&width=700" alt="Slider Image 1" /> */}
        </div>
        
      </div>
    </div>
    
  );
}

export default App;
