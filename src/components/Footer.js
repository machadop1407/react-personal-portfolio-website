import React from "react";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";

import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <EmailIcon />
        <LinkedInIcon />
        <GithubIcon />
      </div>
      <p> &copy; 2023 jldelott.com</p>
    </div>
  );
}

export default Footer;
