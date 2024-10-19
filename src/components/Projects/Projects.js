import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import conference from "../../Assets/Projects/conference.png";
import fundTransfer from "../../Assets/Projects/fund-transfer.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import parkingCost from "../../Assets/Projects/parking-cost.png";
import rokomari from "../../Assets/Projects/rokomari.png";
import taxCalculation from "../../Assets/Projects/Tax-Calculation.png";

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
              imgPath={conference}
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
              imgPath={taxCalculation}
              isBlog={false}
              title="Tax calculation Application"
              description="The Tax Calculation System is a web-based application designed to 
              help users easily calculate various types of taxes, 
              including Income Tax, Sales Tax, and Property Tax. The system features a 
              modern and professional user interface that allows users to input their f
              inancial information and receive accurate tax calculations.
              "
              ghLink="https://github.com/Muntasir101/Tax-Calculation-Application"
              demoLink="https://muntasir101.github.io/Tax-Calculation-Application/"
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
              imgPath={parkingCost}
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

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fundTransfer}
              isBlog={false}
              title="Fund Transfer"
              description="The Fund Transfer Application aims to enable users 
              to transfer funds between their accounts within the same bank. 
              The application will support various types of transactions, 
              each with specific fees and conditions.
              "
              ghLink="https://github.com/Muntasir101/FundTransfer"
              demoLink="/"  
              testCase = "https://docs.google.com/spreadsheets/d/1SzFBqfK0kNNCGKsxgVjfJmBRhgX7WLtL/edit?usp=sharing&ouid=105506333138971730465&rtpof=true&sd=true"            
              bugsReport ="https://docs.google.com/document/d/1d1JV2i5Qgzj9Q9vI4iymVu1Sg_AslIl8/edit?usp=sharing&ouid=105506333138971730465&rtpof=true&sd=true"


            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rokomari}
              isBlog={false}
              title="Rokomari"
              description="Rokomari.com is a Bangladeshi e-commerce site. 
              It officially launched on 19 January 2012. Initially, 
              the website sold only physical books, but now sells ebooks and a 
              variety of items from sporting goods to Stationery.
              "
                
              testCase = "https://docs.google.com/spreadsheets/d/1RzH07ogm0SAlGCcc8SzaohIiXACzc0x-/edit?usp=sharing&ouid=105506333138971730465&rtpof=true&sd=true"            
              testReport ="https://docs.google.com/spreadsheets/d/1_eAbktfY8s4hjkHPndwiy3vopKpARuZo/edit?usp=sharing&ouid=105506333138971730465&rtpof=true&sd=true"

            />
          </Col>


          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
