import React from "react";
import "./Skill.css";
import SkillCard from "./skillcard/card";
import { skill } from "../../sources";

function Myskill() {
  return (
    <div className="myskill">
      <h2 className="flex-center">
        <span data-aos="fade-left" className="gradient-text">
          My Skill
        </span>
      </h2>
      <div className="wrapper Skillcard">
        {skill.map((item, index) => (
          <SkillCard key={index} title={item.title} data={item.data} />
        ))}
      </div>
    </div>
  );
}

export default Myskill;
