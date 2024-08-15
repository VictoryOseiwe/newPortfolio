import React from "react";
import ReactOdometer from "react-odometerjs";
import "./Card.css";

function Card(props) {
  return (
    <div className="card">
      <div className="flex-center">
        {/* <ReactOdometer value={console.log(props.value)} /> */}
        <h1>{props.value}</h1>
        <h1>{props.symbol}</h1>
      </div>
      <p className="flex-center">{props.text}</p>
    </div>
  );
}

export default Card;
