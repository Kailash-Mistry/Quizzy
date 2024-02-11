import React from "react";
import { slide as Menu } from "react-burger-menu";

const Sidebar = () => {
    return (
      <Menu isOpen={true} width={ '300px' } right>
        <a id="home" className="menu-item" >Home</a>
        <a id="about" className="menu-item" >About</a>
        <a id="contact" className="menu-item" >Contact</a>
      </Menu>
    );
  };
  
  export default Sidebar;