import React from "react";
import "./About.css";
import { aboutMe } from "../../sources";

function About() {
  return (
    <>
      <div>
        <div className="wrapper">
          <div>
            <h2 data-aos="fade-left" className="flex-center">
              <span className="gradient-text">About Me</span>
            </h2>
            <p data-aos="fade-right" className="abt-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div data-aos="fade-right" className="group">
            {aboutMe.map((item, index) => (
              <div
                data-aos="fade-left"
                className="flex-center group-item"
                key={index}
              >
                <div className="flex-center">{item.icon}</div>
                <div className=".abt-text">{item.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
