//WHEN I am presented with the Resume section
//THEN I see a link to a downloadable resume and a list of the developer’s proficiencies

import React from 'react';
import './Experience.css';
import '../../Terminals/Terminal.css'
import resume from '../../Resources/util/resume.pdf'
const Experience = () =>{
    return(
    <div className = "experience main">
        <div>
            <div className="container">
                <span className="title">
                    <h1>Download my <a className="resume" href={resume} style={{color: "pink", fontSize: "40px"}} target="_blank" rel="noreferrer">Resume📝</a></h1>
                </span>
                <br></br>
                <p>Here are a few technologies I've worked with recently:<br/>⠀</p>
               <ol className="technologies">
                <li>HTML & CSS</li>
                <li>Bootstrap</li>
                <li>JavaScript</li>
                <li>Express.js</li>
                <li>Node.js</li>
                <li>React</li>
                <li>MongoDB</li>
                <li>MySQL</li>
                <li>Handlebars</li>
                <li>Sequelize</li>
                <li>Insomnia</li>
                <li>Heroku</li>
                <li>Frontend Development</li>
                <li>Server Side API & Third Party API</li>
                <li>Backend Development</li>
                <li>Full Stack Development</li>
            </ol>
            </div>
        </div>
    </div>
    );
}

export default Experience;