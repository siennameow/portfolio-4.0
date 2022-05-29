import React from "react";
import "./Work.css";
import "../../Terminals/Terminal.css";
import ProjectCard from "./ProjectCard";
import { Container, Row, Col } from "react-bootstrap";

const Work = () => {
  // const [showAllRepos,toggleShowAllRepos] = useToggle(false);
  return (
    <Container fluid className="project-section">
      <div className="main">
        <div className="projects">
          <div className="workHeader">
            <h3>Projects I've Built</h3>
          </div>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard 
               //   imgPath={}
               title="title1"
               description="description1"
               linkApp="Live link 1"
               linkGithub="Github link 1"
              />
            </Col>
          </Row>
        </div>
      </div>
    </Container>
  );
};

export default Work;
