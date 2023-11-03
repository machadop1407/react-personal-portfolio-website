import React from "react";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";

import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {

  const emailAddress = "jldelott@gmail.com";
  const linkedinURL = "https://www.linkedin.com/in/jacobdelott/";
  const gitHub = "https://gitlab.com/JacobDelott"

  return (
    <div className="footer">
      <div className="socialMedia">
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
      <p> &copy; 2023 jldelott.com</p>
    </div>
  );
}

export default Footer;
