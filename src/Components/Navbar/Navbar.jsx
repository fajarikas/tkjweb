import React from "react";
import Menu from "../Menu/Menu";
import Logo from "../../../public/assets/image/logo.png";

const Navbar = () => {
  return (
    <div class="w-full shadow-xl ">
      <nav class="w-11/12 mx-auto py-4">
        <div class="flex justify-between">
          <div class="flex space-x-4">
            <img src={Logo} alt="" />
            <p class="font-bold text-light-green">John Doe</p>
          </div>
          <div class="flex space-x-12">
            <Menu name="About" />
            <Menu name="Projects" />
            <Menu name="Capabilities" />
            <Menu name="Contact" />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
