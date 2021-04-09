import React from "react";
import "../style/ExperienceInfo.css";

function ExperienceInfo({ company, description, duration, location, title }) {
  return (
    <div className="experience-info">
      <h4 className={"experience-title"}>{company}</h4>
      <div className="experience-description">
        <p className="job-duration">{duration}</p>
        <div className="job-info">
          <p className="job-location">{location}</p>
          <p className="job-title">{title}</p>
          <p className="job-description">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default ExperienceInfo;
