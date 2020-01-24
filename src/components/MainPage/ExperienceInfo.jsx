import React from "react";
import "./ExperienceInfo.css";

function ExperienceInfo(props) {
  return (
    <div className="experience-info">
      <h4>{props.company}</h4>
      <div>
        <p className="job-duration">{props.duration}</p>
        <div className="job-info">
          <p className="job-location">{props.location}</p>
          <p className="job-title">{props.title}</p>
          <p className="job-description">{props.description}</p>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default ExperienceInfo;
