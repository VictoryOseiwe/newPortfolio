import React, { useEffect, useState } from "react";
import "./Achievement.css";
import Card from "./achievementCard/card";
import ReactOdometer from "react-odometerjs";

function Achievement() {
  const [experience, setExperience] = useState(0);
  const [clients, setClients] = useState(0);
  const [projects, setProjects] = useState(0);

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      setExperience(5);
      setClients(100);
      setProjects(1.2);
    }, 1000);

    return () => {
      clearTimeout(timeOutId);
    };
  }, []);

  return (
    <>
      <div className="achievement-container">
        <Card value={experience} text="Years of Experience" symbol="+" />
        <Card value={clients} text="Clients worked with" symbol="+" />
        <Card value={projects} text="Projects completed" symbol="k" />
      </div>
    </>
  );
}

export default Achievement;
