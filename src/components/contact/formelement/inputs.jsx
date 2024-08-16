import React from "react";
import "./inputs.css";

function Inputs({ type, name, value, onChange, placeholder }) {
  return (
    <>
      <div>
        <input
          data-aos="fade-left"
          className="input"
          type={type}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
        />
      </div>
    </>
  );
}

export default Inputs;
