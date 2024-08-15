import React from "react";
import "./foot.css";

function FootMenu({ data, title }) {
  return (
    <>
      <div className="drop">
        <h4>{title}</h4>
        {data.map((item, index) => (
          <div className="dropData" data-aos="fade-left" key={index}>
            <p>{item.heading}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default FootMenu;
