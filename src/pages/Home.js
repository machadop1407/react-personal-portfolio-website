import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

function Home() {

  const emailAddress = "jldelott@gmail.com";
  const linkedinURL = "https://www.linkedin.com/in/jacobdelott/";
  const gitHub = "https://gitlab.com/JacobDelott"


  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Jacob</h2>
        <div className="prompt">
          <p>A software developer with a passion for learning and creating.</p>
          <a href={linkedinURL} target="_blank" rel="noopener noreferrer">
          <LinkedInIcon />
          </a>
          <a href={`mailto:${emailAddress}`}>
          <EmailIcon />
          </a>
           <a href={gitHub} target="_blank" rel="noopener noreferrer">
          <GithubIcon />
        </a>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              React, JavaScript, HTML, CSS, Next.js, 
              BootStrap, TailwindCSS, StyledComponents
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              Fast Api, Django, PostgreSQL, Docker, CI/CD, 
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Python, TypeScript, CSS, </span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
