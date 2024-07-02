import React from "react";
import "./index.css";

function Mail(props) {
  return (
    <>
      <div data-aos="fade-left" className="card">
        <img src={props.img} alt="" />
        <h3>{props.title}</h3>
        <h4>{props.content}</h4>
      </div>
    </>
  );
}

export default Mail;
