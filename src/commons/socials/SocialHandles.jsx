import React from "react";
import { socialHandles } from "../../sources";
import "./SocialHandles.css";

function SocialHandle() {
  return (
    <div className="handles-container">
      {socialHandles.map((handle, index) => (
        <a
          href={handle.link}
          target="_blank"
          className="flex-center icon-wrapper "
          key={index}
        >
          {handle.icon}
        </a>
      ))}
    </div>
  );
}

export default SocialHandle;
