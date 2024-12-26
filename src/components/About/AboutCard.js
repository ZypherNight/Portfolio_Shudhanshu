import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Shudhanshu </span>
            from <span className="purple"> Ajmer, Rajasthan, India.</span>
            <br />
            I am currently in a final-year Bachelor of Technology student at IIITDM Jabalpur.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring New Technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing CTF
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Data flow surpasses air pollution, demanding robust security!. "{" "}
          </p>
          <footer className="blockquote-footer">Shudhanshu</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
