import React from "react";
import { Row } from "react-bootstrap";
import { FaTrophy } from "react-icons/fa";

function Achievements() {
  const achievements = [
    {
      text: "Achieved 16th rank out of participants across India in the BitGuard Cybersecurity Hackathon organized by Mercer Mettl.",
      icon: <FaTrophy style={{ color: "gold" }} />,
    },
    {
      text: "Secured a top 100 spot out of 10,000+ participants in the Great AppSec Hackathon 2024 by CCoE Hyderabad and DSCI, earning a Merit Certificate.",
      icon: <FaTrophy style={{ color: "silver" }} />,
    },
    {
      text: "Secured 225th position at UIUCTF 2023 Capture the Flag Tournament globally.",
      icon: <FaTrophy style={{ color: "#cd7f32" }} />, // Bronze
    },
    {
      text: "Selected as a Cybersecurity Lead in Google Developer Student Club Jabalpur for session 2023-24.",
      icon: <FaTrophy style={{ color: "purple" }} />,
    },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <div className="achievement-container">
        <h1 className="project-heading">
                  My <strong className="purple">Achievements 🏆</strong>
                </h1>
        <ul className="achievement-list">
          {achievements.map((achievement, index) => (
            <li key={index} className="achievement-item">
              <span className="achievement-icon">{achievement.icon}</span>
              <span className="achievement-text">{achievement.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </Row>
  );
}

export default Achievements;
