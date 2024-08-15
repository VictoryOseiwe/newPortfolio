import React from "react";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import "./skillCard.css";
import { skill } from "../../../sources";

function SkillCard({ title, data }) {
  return (
    <>
      <div data-aos="fade-right" className="card">
        <h3 className="flex-center">
          <span data-aos="fade-down" className="gradient-text">
            {title}
          </span>
        </h3>

        {data.map((item, index) => (
          <>
            <div data-aos="fade-left" className="cardItem">
              <IoCheckmarkDoneCircle className="icon" />
              <div key={index}>
                <h4>{item.skill}</h4>
                <p>{item.level}</p>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
}

export default SkillCard;
