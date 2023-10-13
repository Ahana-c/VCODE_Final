import React from 'react';
import '../styles/Navbar.css'; 
import image from "../images/csi_logo.png";

function Navbar() {
  return (
    <nav className="navbar">
      <img src={image} style={{width:"80px", height:"80px", marginRight: "13px",}}/>
      <div class="vertical-line"></div>
      <img src="VCODE.png" alt="Logo" className="logo" />
    </nav>
  );
}

export default Navbar;
