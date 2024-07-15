import React from "react";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import Card from "react-bootstrap/Card";

function CertificateCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"View"}
          </Button>
        )}
        
      </Card.Body>
    </Card>
  );
}
export default CertificateCards;
