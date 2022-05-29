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
               title="Git Productive"
               linkApp="https://git-productive.herokuapp.com/"
               linkGithub="https://github.com/siennameow/git-productive"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard 
               //   imgPath={}
               title="Weather Dashboard"
               linkApp="https://siennameow.github.io/Weather-Dashboard/"
               linkGithub="https://github.com/siennameow/Weather-Dashboard"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard 
               //   imgPath={}
               title="Techship"
               linkApp="https://techship.herokuapp.com/"
               linkGithub="https://github.com/siennameow/tech-blog"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard 
               //   imgPath={}
               title="Dreamcatcher"
               linkApp="https://dreamcatcher-texteditor.herokuapp.com/"
               linkGithub="https://github.com/siennameow/text-editor"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard 
               //   imgPath={}
               title="Note Taker"
               linkApp="https://note-taker-platinum.herokuapp.com/"
               linkGithub="https://github.com/siennameow/note-taker"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard 
               //   imgPath={}
               title="Code Quiz"
               linkApp="https://siennameow.github.io/Code-Quiz/"
               linkGithub="https://github.com/siennameow/Code-Quiz"
              />
            </Col>
          </Row>
        </div>
      </div>
    </Container>
  );
};

export default Work;
