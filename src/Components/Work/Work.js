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
               description="description 1"
               linkApp="Live link 1"
               linkGithub="Github link 1"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard 
               //   imgPath={}
               title="title2"
               description="description 2"
               linkApp="Live link 2"
               linkGithub="Github link 2"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard 
               //   imgPath={}
               title="title3"
               description="description3"
               linkApp="Live link 3"
               linkGithub="Github link 3"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard 
               //   imgPath={}
               title="title4"
               description="description4"
               linkApp="Live link 4"
               linkGithub="Github link 4"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard 
               //   imgPath={}
               title="title5"
               description="description5"
               linkApp="Live link 5"
               linkGithub="Github link 5"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard 
               //   imgPath={}
               title="title6"
               description="description6"
               linkApp="Live link 6"
               linkGithub="Github link 6"
              />
            </Col>
          </Row>
        </div>
      </div>
    </Container>
  );
};

export default Work;
