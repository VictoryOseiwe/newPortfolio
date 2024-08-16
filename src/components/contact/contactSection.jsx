import React, { useState } from "react";
import "./contactSection.css";
import Mail from "./mail&locale/index";
import { contact } from "../../sources";
import Inputs from "./formelement/inputs";
import axios from "axios";
import swal from "sweetalert";

function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post("https://newportfoliobackend-j6l9.onrender.com/sendForm", formData) // Ensure the URL is correct
      .then((res) => {
        console.log("Response:", res.data);
        swal("Thank you for contacting Victory Oseiwe!");
      })
      .catch((err) => {
        console.error("Error:", err.message);
        console.error("Config:", err.config);
        if (err.response) {
          console.error("Status:", err.response.status);
          console.error("Data:", err.response.data);
        } else {
          console.error("No response received from server.");
        }
        swal("Failed to send the message. Please try again later.");
      });

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      message: "",
    });
  }

  return (
    <>
      <div id="contact" className="contact wrapper">
        <div className="location">
          {contact.map((item, index) => (
            <Mail key={index} title={item.title} content={item.content} />
          ))}
        </div>
        <form
          data-aos="fade-left"
          className="inputSection"
          onSubmit={handleSubmit}
        >
          <h2>
            <span className="gradient-text">Contact For Collaboration</span>
          </h2>
          <p>
            Feel free to reach out if you have any questions, need assistance,
            or just want to say hi.
          </p>
          <div className="contactInput">
            <Inputs
              type="text"
              placeholder="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
            <Inputs
              type="text"
              placeholder="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
          <div className="contactInput">
            <Inputs
              type="email"
              placeholder="Email Address"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <Inputs
              type="text"
              placeholder="Phone Number"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </div>
          <textarea
            data-aos="fade-right"
            name="message"
            id="textarea"
            cols="30"
            rows="10"
            className="input"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <button
            data-aos="fade-down"
            className="btn"
            type="submit"
            onSubmit={(e) => e.target.reset()}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default ContactSection;
