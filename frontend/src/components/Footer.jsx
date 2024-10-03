import React from "react";
import Logo from "../assets/logo.png";
import { Clapperboard } from "lucide-react";

function Footer() {
  return (
    <>
        <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-4 mt-2 text-sm">
          <div>
            <img src={Logo} alt="" className="mb-5 w-32" />
            <p className="w-full md:w-2/3 text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
              quod quos tempore dolore unde consequatur. Eaque quod minus
              pariatur dicta cumque magnam voluptatum tempore. Quo alias
              pariatur nisi eius eligendi!
            </p>
          </div>

          <div>
            <p className="text-xl font-medium mb-5">COMPANY</p>
            <ul className="flex flex-col gap-1 text-gray-600">
              <li>Home</li>
              <li>About Us</li>
              <li>Delivery</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          <div>
            <p className="text-xl font-medium mb-5">Get In Touch</p>
            <ul className="flex flex-col gap-1 text-gray-600">
              <li>+234 805 14 8610</li>
              <li>info@1759.com</li>
            </ul>
          </div>

          <div>
            <hr />
            <p className="py-5 text-sm text-center">
              Copyright 2024 @1759.com - All rights reserved
            </p>
          </div>
          
        </div>
     
    </>
  );
}

export default Footer;
