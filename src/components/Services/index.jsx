import React from "react";
import "./Services.css";
import { services } from "../../sources";

function Services() {
  return (
    <>
      <div id="services" className="wrapper service">
        <h2 className="flex-center">
          <span data-aos="fade-right" className="gradient-text">
            My Services
          </span>
        </h2>

        <p data-aos="fade-left" className="abt-text">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old.
        </p>

        <div className="service-grid">
          {services.map((service, index) => (
            <div className="serviceItem">
              <img src={service.icon} alt="" />
              <h4>
                <span data-aos="fade-down" className="gradient-text">
                  {service.title}
                </span>
              </h4>
              <p data-aos="fade-right">{service.description}</p>
              <div data-aos="fade-left">
                <a href="">Read More</a>
                <a href="">Contact Me</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Services;
