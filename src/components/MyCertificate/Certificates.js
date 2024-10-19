import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CerticateCards from "./CertificateCards";
import Particle from "../Particle";
import PCEP from "./certificates-images/python.png";
import BBST from "./certificates-images/bbst.png";
import GoogleITPython from "./certificates-images/Google-IT-Python.PNG";
import AmazonAI from "./certificates-images/Amazon_AI.png";
import SeleniumProfessional from "./certificates-images/selenium.png";
import ISTQB from "./certificates-images/ISTQB - Muntasir.jpg";
import POSTMAN from "./certificates-images/postman.jpeg";
import Jmeter from "./certificates-images/JMeter.jpeg";


function Certificates() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Certificates </strong>
        </h1>
        <p style={{ color: "white" }}>
         I have achieved several professional certifications.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

        <Col md={4} className="project-card">
            <CerticateCards
              imgPath={ISTQB}
              isBlog={false}
              title="ISTQB - Fundation Level"
              description="The ISTQB® Certified Tester Foundation Level (CTFL) certification is the cornerstone of e
              ssential testing knowledge that can be applied to real-world scenarios. 
              CTFL certification is recognized as a prerequisite to all other ISTQB® certifications 
              where Foundation Level is required.
              "
              demoLink="https://drive.google.com/file/d/13JTMLzFM9M_ffLUGpZrQ7a4jLK1mkRoD/view?usp=sharing"              
            />
          </Col>

          <Col md={4} className="project-card">
            <CerticateCards
              imgPath={BBST}
              isBlog={false}
              title="BBST® Test Design"
              description="The BBST® Test Design course aims to help you become a more adaptable tester, giving you the knowledge to thrive in this fast-paced industry. You will learn to design powerful tests that lead to the discovery of important bugs with both exploratory testing and test automation.
              "
              demoLink="https://drive.google.com/file/d/1J1dwObtLevsHd4ukipMsM6ha59plfemq/view?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <CerticateCards
              imgPath={PCEP}
              isBlog={false}
              title="PCEP – Certified Entry-Level Python Programmer "
              description="PCEP – Certified Entry-Level Python Programmer certification is a professional credential that measures the ability to accomplish coding tasks related to the essentials of programming in the Python language.
              "
              demoLink="https://verify.openedg.org/?id=ibm9.CU3b.ceiH"
            />
          </Col>

          <Col md={4} className="project-card">
            <CerticateCards
              imgPath={GoogleITPython}
              isBlog={false}
              title="Google IT Automation with Python Professional"
              description="This beginner, six-course certificate is designed to provide IT professionals with in-demand skills—including Python, Git, and IT automation—that can help you advance your career."
              
              demoLink="https://drive.google.com/file/d/1U8qTBXxRf83755_2f1WKO5htVt_gjH_U/view"
            />
          </Col>
      

          <Col md={4} className="project-card">
            <CerticateCards
              imgPath={SeleniumProfessional}
              isBlog={false}
              title="Selenium Prefessional"
              description="The Selenium certification focuses on the candidate's capacity to implement Selenium WebDriver for designing and maintaining automated testing solutions.
              "
              demoLink="https://drive.google.com/file/d/1HTrLj1qhgv4YUkmjSDBKss9xkdYowCyw/view"              
            />
          </Col>

          <Col md={4} className="project-card">
            <CerticateCards
              imgPath={POSTMAN}
              isBlog={false}
              title="Postman API Fundamentals"
              description="What APIs are and why they are crucial to modern software development. 
              How to use Postman to work with APIs. 
              How to interact with a real-world API. How Postman helps you incorporate APIs into your applications.
              "
              demoLink="https://drive.google.com/file/d/1vHbgKZwOKdlHHoPkuwicuvzdLfjT1N0M/view?usp=sharing"              
            />
          </Col>


      <Col md={4} className="project-card">
            <CerticateCards
              imgPath={Jmeter}
              isBlog={false}
              title="JMeter: Performance and Load Testing"
              description="Apache JMeter, a popular open-source performance testing tool, 
              to create and execute load tests that help you highlight performance issues 
              in your software.
              "
              demoLink="https://drive.google.com/file/d/1zzTsQgCkZkpdCIGitIXrYFQx8zjksGJA/view?usp=sharing"              
            />
          </Col>




          <Col md={4} className="project-card">
            <CerticateCards
              imgPath={AmazonAI}
              isBlog={false}
              title="Amazon AI Conclave"
              description="Well-known artificial intelligence and also provide in-depth analysis in the Amazon AI Conclave.
              "
              demoLink="https://drive.google.com/file/d/1LheD8CmrtgJpledtpsXjJXpEsAhb-92A/view"              
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Certificates;
