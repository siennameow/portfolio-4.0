import React from "react";
import "./Work.css";
import "../../Terminals/Terminal.css";
import ProjectCard from "./ProjectCard";
import { Container, Row, Col } from "react-bootstrap";
import gitpro from "../../Resources/images/gitpro.png";
import weather from "../../Resources/images/weather.png";
import techship from "../../Resources/images/techship.png";
import dream from "../../Resources/images/dream.png";
import portfolio from "../../Resources/images/portfolio.png";
import codequiz from "../../Resources/images/codequiz.png";
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
                 imgPath={gitpro}
               title="Git Productive"
               description="Task management app for developers to stay productive."
               linkApp="https://git-productive.herokuapp.com/"
               linkGithub="https://github.com/siennameow/git-productive"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard 
                 imgPath={techship}
               title="Techship"
               description="A full-stack tech blog site with Star Wars theme."
               linkApp="https://techship.herokuapp.com/"
               linkGithub="https://github.com/siennameow/tech-blog"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard 
                 imgPath={dream}
               title="Dreamcatcher"
               description="A code editor app that can be downloaded and used offline."
               linkApp="https://dreamcatcher-texteditor.herokuapp.com/"
               linkGithub="https://github.com/siennameow/text-editor"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard 
                 imgPath={portfolio}
               title="My portfolio-3.0"
               description="Built up with express.js routes serving up HTML Pages."
               linkApp="https://sienna-portfolio3.herokuapp.com/"
               linkGithub="https://github.com/siennameow/portfolio-3.0"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard 
                 imgPath={weather}
               title="Weather Dashboard"
               description="Use OpenWeather API to fetch weather informaton."
               linkApp="https://siennameow.github.io/Weather-Dashboard/"
               linkGithub="https://github.com/siennameow/Weather-Dashboard"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard 
                 imgPath={codequiz}
               title="Code Quiz"
               description="A JavaScript Code Quiz challenge has 8 questions."
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
