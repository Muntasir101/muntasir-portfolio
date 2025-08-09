import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CerticateCards from "./CertificateCards";
import Particle from "../Particle";
import PCEP from "./certificates-images/python.png";
import GoogleITPython from "./certificates-images/Google-IT-Python.PNG";
import BBST from "./certificates-images/bbst.PNG"
import AmazonAI from "./certificates-images/Amazon_AI.png";
import SeleniumProfessional from "./certificates-images/selenium.png";
import JavaSE from "./certificates-images/JavaSE.jpeg"
import ISTQB from "./certificates-images/ISTQB - Muntasir.jpg";
import POSTMAN from "./certificates-images/postman.jpeg";
import Jmeter from "./certificates-images/JMeter.jpeg";
import Bitbucket from "./certificates-images/Bitbucket Pipeline.png"
import ProjectManagement from "./certificates-images/ProjectManagement.png"
import BusinessAnalysis from "./certificates-images/Business Analysis.png"
import BusinessDevelopment from "./certificates-images/BusinessDevelopment.png"
import Agile from "./certificates-images/Agile.png"




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
              imgPath={JavaSE}
              isBlog={false}
              title="The Java SE 8 Oracle Certified Associate (OCA) certification"
              description="The Java SE 8 OCA certification provides a foundational understanding of Java and is the first step towards becoming a professional Java developer.
              "
              demoLink="https://drive.google.com/file/d/1OMSGpuGnvl3jPUZdv7KKqSbWHU-F8cBQ/view?usp=sharing"              
            />
          </Col>

          <Col md={4} className="project-card">
            <CerticateCards
              imgPath={Agile}
              isBlog={false}
              title="Agile Foundations "
              description="Agile principles and frameworks, including Scrum and Kanban, focusing on iterative delivery, collaboration, 
              and continuous improvement.
              "
              demoLink="https://drive.google.com/file/d/1iOiIFNS8iHcTuSeK7N3otKGeWPt_lL1v/view?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <CerticateCards
              imgPath={Bitbucket}
              isBlog={false}
              title="Bitbucket Pipelines for CI/CD "
              description="Implemented CI/CD workflows using Bitbucket Pipelines to automate code build, test, and 
              deployment processes. Configured YAML-based pipeline definitions, integrated automated testing, and 
              deployed applications to staging and production environments, ensuring faster delivery and improved code quality.
              "
              demoLink="https://drive.google.com/file/d/1sBz972TRRbSb18RKAM1BGiJ032fNTyf9/view?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <CerticateCards
              imgPath={ProjectManagement}
              isBlog={false}
              title="Project Management Foundations "
              description="Gained foundational knowledge of project management principles, including project 
              lifecycle, scope, scheduling, budgeting, risk management, and stakeholder communication.
              "
              demoLink="https://drive.google.com/file/d/1hwxhVdUgHYkd_zWZxPOn5m0bDzRhY_C7/view?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <CerticateCards
              imgPath={BusinessAnalysis}
              isBlog={false}
              title="Business Analysis Foundations "
              description="Acquired knowledge of business analysis principles, including requirements gathering, process modeling, 
              stakeholder engagement, and solution evaluation.
              "
              demoLink="https://drive.google.com/file/d/10em6wV9JgrsmJqbkGJXJSoLq_guh6qwq/view?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <CerticateCards
              imgPath={BusinessDevelopment}
              isBlog={false}
              title="Business Development Foundations "
              description="Learned core strategies for identifying growth opportunities, building client relationships, 
              creating value propositions, and driving business expansion.
              "
              demoLink="https://drive.google.com/file/d/1wPbaFaf78_F1CAREa3I0e8jb4TwZkYfS/view?usp=sharing"
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
              imgPath={SeleniumProfessional}
              isBlog={false}
              title="Selenium Professional"
              description="The Selenium certification focuses on the candidate's capacity to implement Selenium WebDriver for designing and maintaining automated testing solutions.
              "
              demoLink="https://drive.google.com/file/d/1HTrLj1qhgv4YUkmjSDBKss9xkdYowCyw/view"              
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
