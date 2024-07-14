import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={chatify}
              isBlog={false}
              title="Conference Room"
              description="The conference room booking system aims to:
              Increase revenue by efficiently managing room bookings at competitive rates.
              Improve customer satisfaction through transparent pricing and flexible booking options.
              Streamline administrative tasks related to room availability and billing.
              "
              ghLink="https://github.com/Muntasir101/Conference-Room-Booking"
              demoLink="https://muntasir101.github.io/Conference-Room-Booking/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Ticket Fare"
              description="The Flight Cost Calculator is an independent web application designed to assist users in calculating the cost of flights. It will be a client-side application running in web browsers without the need for server-side components."
              ghLink="https://github.com/Muntasir101/Ticket-Fare"
              demoLink="https://muntasir101.github.io/Ticket-Fare/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Parking"
              description="The parking rates system aims to:
              Provide clear and competitive pricing for different parking options.
              Optimize parking space usage through efficient pricing and availability management.
              Enhance user experience by offering convenient payment options and accurate rate calculations.
              "
              ghLink="https://github.com/Muntasir101/parking-Cost"
              demoLink="https://muntasir101.github.io/parking-Cost/"              
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
