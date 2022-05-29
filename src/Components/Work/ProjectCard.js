import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function ProjectCards(props) {
    return (
      <Card className="project-card-view">
        <Card.Img variant="top" src={props.imgPath} alt="card-img" />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text style={{ textAlign: "justify" }}>
            {props.description}
          </Card.Text>
          <Button variant="warning" href={props.linkApp} target="_blank" style={{marginBottom: 5, marginRight: 5}}>
            {"View Live"}
          </Button>
          <Button variant="warning" href={props.linkGithub} target="_blank" style={{marginBottom: 5, marginRight: 5}}>
            {"Github Repo"}
          </Button>
        </Card.Body>
      </Card>
    );
  }
  export default ProjectCards;