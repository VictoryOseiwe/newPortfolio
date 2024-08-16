import React, { useState } from "react";
import Logo from "../../commons/Logo/Logo";
import SocialHandle from "../../commons/socials/SocialHandles";
import { tabs } from "../../sources";
import { Link } from "react-scroll";
import "./Navbar.css";
import { BiMenuAltRight, BiX } from "react-icons/bi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className="navbar">
        <Logo />
        <div className={`nav-links ${isOpen ? "active" : ""}`}>
          {tabs.map((tab, index) => (
            <Link
              to={tab.id}
              smooth={true}
              duration={500}
              key={index}
              className="nav-item"
            >
              {tab.name}
            </Link>
          ))}
        </div>
        <SocialHandle />
        <div className="flex-center">
          <a className="btn">Hire me</a>
          <a className="btn services">Services</a>
        </div>
        <button className="menu-toggle" onClick={toggleMenu}>
          {isOpen ? <BiX size={30} /> : <BiMenuAltRight size={30} />}
        </button>
      </div>
    </>
  );
}

export default Navbar;
