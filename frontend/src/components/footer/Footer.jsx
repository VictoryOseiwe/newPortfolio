import React from "react";
import "./Footer.css";
import SocialHandle from "../../commons/socials/SocialHandles";
import Logo from "../../commons/Logo/Logo";
import FootMenu from "./footdata";
import { footMenu } from "../../sources";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      <div className="wrapper">
        <div className="footerContent">
          <div className="logoSect">
            <Logo />
            <SocialHandle />
          </div>

          {footMenu.map((item, index) => (
            <FootMenu key={index} title={item.title} data={item.data} />
          ))}
        </div>
        <p>All Rights Reserved @Victory Oseiwe {year}</p>
        <p>All appreciation goes to my mentor @Uncle Iyanu & @Aunt Mary Jane</p>
      </div>
    </div>
  );
}

export default Footer;
