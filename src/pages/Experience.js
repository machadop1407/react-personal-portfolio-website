import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2011 - 2013"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Musician's Institute, Hollywood, CA
          </h3>
          <p> Associates in Bass Performance</p>
        </VerticalTimelineElement>
        
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2013 - 2020"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Freelance Bass Player
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Los Angeles, CA
          </h4>
          <p>Proffesional touring musician who worked for corporate events and recording artists</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2014 - 2021"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Digiland Production Facilities, Assistant Facilities Manager
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Burbank, CA
          </h4>
          <p>
            Assisted in maintaining a television production lot.
          <div>Coordinated vendors, productions, celebritites, and executives in the entertainment industry.</div>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2020 - 2023"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
           Ovation Auto Detail, Owner
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Burbank, CA
          </h4>
          <p>
            Owned and operated an auto detail business that catered to high end vehicles and high profile professionals and celebrities.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2023"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Hack Reactor, Los Angeles, CA
          </h3>
          <p> Full Stack Engineering Certificate</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2023- currently"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
           Software Engineer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Los Angeles, CA
          </h4>
          <p>
            <div>Programming Languages | Python 3, JavaScript ES6+, SQL, HTML5, CSS</div>
            <div>Front-End | DOM manipulation, React, React Hooks, Next.js, Tailwind</div>
            <div>Back-End | Django 4, PostgreSQL, FastAPI, Docker</div>
            <div>System Design | Microservices, Domain-driven design, Message passing</div>

          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
