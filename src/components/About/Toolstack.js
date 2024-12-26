
import React from "react";
import { Col, Row } from "react-bootstrap";

// List of technologies with image paths
const techStack = [
  { imgSrc: require("../../Assets/Toolstack/Azure.png"), name: "Azure" },
  { imgSrc: require("../../Assets/Toolstack/Burp.png"), name: "Burp" },
  { imgSrc: require("../../Assets/Toolstack/Keras.png"), name: "Keras" },
  { imgSrc: require("../../Assets/Toolstack/Metasploit.png"), name: "Metasploit" },
  { imgSrc: require("../../Assets/Toolstack/Postman.png"), name: "Postman" },
  { imgSrc: require("../../Assets/Toolstack/snort.png"), name: "Snort" },
  { imgSrc: require("../../Assets/Toolstack/Splunk.png"), name: "Splunk" },
  { imgSrc: require("../../Assets/Toolstack/Vscode.png"), name: "Vscode" },
];

function Toolstack() {
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

export default Toolstack;

