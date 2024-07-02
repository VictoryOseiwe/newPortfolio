import React from "react";
import { FaLaptopCode } from "react-icons/fa6";
import "./Logo.css";

function Logo() {
  return (
    <div className="logo">
      <FaLaptopCode className="icon" />
      <h1>Portfolio</h1>
    </div>
  );
}

export default Logo;
