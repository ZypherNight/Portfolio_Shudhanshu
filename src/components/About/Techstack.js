
import React from "react";
import { Col, Row } from "react-bootstrap";

// List of technologies with image paths
const techStack = [
  { imgSrc: require("../../Assets/Techstack/java.png"), name: "Java" },
  { imgSrc: require("../../Assets/Techstack/javascript.png"), name: "JavaScript" },
  { imgSrc: require("../../Assets/Techstack/Python.png"), name: "Python" },
  { imgSrc: require("../../Assets/Techstack/React.png"), name: "React.js" },
  { imgSrc: require("../../Assets/Techstack/Pytorch.png"), name: "Pytorch" },
  { imgSrc: require("../../Assets/Techstack/node.png"), name: "Node.js" },
  { imgSrc: require("../../Assets/Techstack/SIEM.jpg"), name: "SIEM" },
  { imgSrc: require("../../Assets/Techstack/ML.jpeg"), name: "Machine Learing" },
  { imgSrc: require("../../Assets/Techstack/Penetration.png"), name: "Penetration Testing" },
];

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techStack.map((tech, index) => (
        <Col key={index} xs={4} md={2} className="tech-icons">
          <img
            src={tech.imgSrc}
            alt={tech.name}
            title={tech.name}
            style={{
              width: "150px",
              height: "150px",
              objectFit: "contain", // Ensures the image fits well within the box
            }}
          />
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;

