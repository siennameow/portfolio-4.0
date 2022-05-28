//WHEN I am presented with the About Me section
//THEN I see a recent photo or avatar of the developer and a short bio about them

import React from 'react';
import './About.css';
import '../../Terminals/Terminal.css';

const About = () => {
return(
    <section className = "main section">
        <div className="about">
            <div className="text">
                <div  className="header">
                    <h1>About Me</h1>
                </div>
                <p>Hello there! I'm a web developer and designer based in San Francisco Bay Area.<br/>⠀</p>
                <p>Currently I'm a student at <a className="school"href="https://bootcamp.berkeley.edu/coding/" target="_blank" rel="noreferrer">UC Berkeley Bootcamp</a> and spend most of my time designing websites. 
                When I'm not busy, you can find me obsessing over food, cats and traveling. 
                <br/>⠀
                </p>
                <p>Here are a few technologies I've worked with recently:<br/>⠀</p>
                {getTechnologies()}
            </div>
            <div className="avatar"></div>
        </div>
    </section>
    );
}

const getTechnologies = () =>{
    return <ol className="technologies">
                <li>HTML & CSS</li>
                <li>JavaScript</li>
                <li>Express.js</li>
                <li>Node.js</li>
                <li>React</li>
                <li>MongoDB</li>
            </ol>
}

export default About;