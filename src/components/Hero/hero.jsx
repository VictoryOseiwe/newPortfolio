import React, { useEffect, useRef } from "react";
import Achievement from "../../commons/Achievement";
import "./Hero.css";
import vic from "../../assets/vic.png";
import Typed from "typed.js";
import AOS from "aos";
import "aos/dist/aos.css";

function Hero() {
  AOS.init({ duration: 500 });

  const element = useRef(null);

  useEffect(() => {
    const typed = new Typed(element.current, {
      strings: [
        "Hey There",
        "I'm Victory Oseiwe",
        "A Full-Stack Web Developer",
        "Content Creator",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
      smartBackspace: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div id="hero">
        <div className="info-container">
          <div>
            <h2>
              <span ref={element} className="gradient-text"></span>
            </h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <div className="flex btn-wrapper">
              <a
                data-aos-delay="700"
                data-aos="fade-left"
                className="btn"
                href=""
              >
                Learn more
              </a>
              <a
                data-aos-delay="1000"
                data-aos="fade-left"
                className="btn start"
                href=""
              >
                Get Started
              </a>
            </div>
          </div>
          <div className="fit" data-aos="fade-left">
            <img className="heroImage" src={vic} alt="Hero's Image" />
          </div>
          <div></div>
        </div>
        <div className="achievement">
          <div className="wrap">
            <Achievement />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
