import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import customer from "../../Assets/Projects/Customer.png";
import inventory from "../../Assets/Projects/Inventory.jpg";
import surface from "../../Assets/Projects/Surface.webp";
import phising from "../../Assets/Projects/phining.webp";
import Network from "../../Assets/Projects/network.png";
import Websec from "../../Assets/Projects/Wensec.webp";
import Chatbot from "../Chatbot";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Network}
              isBlog={false}
              title="Network-Scanner"
              description="This is Python-based network scanner can discover active devices via ARP scanning, perform port scanning to identify open ports and services, attempt OS detection using Nmap and p0f, and visualize network topology as a 2D graph."
              ghLink="https://github.com/ZypherNight/Network-Scanner"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Websec}
              isBlog={false}
              title="WebSec-Investigator"
              description="This tool performs two main functions: (a) web scraping from Google Search to retrieve URLs and scrape their content, and conducting a comprehensive security audit of a target domain."
              ghLink="https://github.com/ZypherNight/WebSec-Investigator"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={surface}
              isBlog={false}
              title="Surface-Defect-Detection"
              description="The surface defect detection model utilizes a Convolutional Neural Network (CNN) built with Keras and TensorFlow to identify anomalies on surfaces. It processes image data to detect defects like scratches, dents, or irregularities with high accuracy."
              ghLink="https://github.com/ZypherNight/Surface-Defect-Detection"           
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={customer}
              isBlog={false}
              title="Customer-segmentation-ML-model"
              description="I used K-Means clustering to analyze a dataset of customer information, specifically their annual income and spending score. The algorithm identified five distinct customer segments, which I visualized using a scatter plot."
              ghLink="https://github.com/ZypherNight/Customer-segmentation-ML-model"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={phising}
              isBlog={false}
              title="AI-Powered Phishing Detection"
              description="Developed a Python-based email parsing system utilizing GPT for enhanced phishing detection, achieving 85% accuracy, and automating keyword identification, URL analysis, and response generation."
              ghLink="https://github.com/ZypherNight"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={inventory}
              isBlog={false}
              title="Q-Learning-Based Inventory Optimization System"
              description="Co-authored a research paper with my professor demonstrating a 15% cost reduction in inventory management using a Q-learning model, validated through Python simulations with NumPy and Pandas."
              ghLink="https://github.com/ZypherNight"
            />
          </Col>
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
