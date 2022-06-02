import React from "react";
import { ProjectList } from "../helpers/ProjectList";
import ProjectItem from "../components/ProjectItem";
import "../styles/Projects.css";

function Projects() {
  return (
    <div className="projects">
      <h1 className="projectTitle">My Personal Projects </h1>
      <div className="projectList">
        {ProjectList.map((menuItem, key) => {
          return (
            <ProjectItem id={key} image={menuItem.image} name={menuItem.name} />
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
