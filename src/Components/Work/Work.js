import React from 'react';
import './Work.css';
import '../../Terminals/Terminal.css'
import { Container} from "react-bootstrap";

const Work = () =>{
    // const [showAllRepos,toggleShowAllRepos] = useToggle(false);
    return(
<Container fluid className="project-section">
    <div className = "main">
        <div className="projects">
            <div className="workHeader">
                <h3>Projects I've Built</h3>
            </div>
            {/* <ProjectCard > */}
        </div>
    </div>
</Container>
    );
}

export default Work;