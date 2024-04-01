import React from "react";
import "./style/PersonalInfo.css";

export default function PersonalInfo() {
  return (
    <div id="personal-info">
      <div className="name-info">
        <h1>{"{Mark Koenig}"}</h1>
      </div>
      <div className="professional-info">
        <div className="links">
          <a href="https://github.com/MarkKoenig95" className="github-icon">
            <img src="./images/GitHub-Logo.png" alt="" />
          </a>
          <a
            href="https://www.linkedin.com/in/mark-koenig-6aa0a690/"
            title="LinkedIn"
          >
            <img src="./images/LinkedIn-Logo.png" alt="" />
          </a>
        </div>
        <div className="contact-info">
          <p>Phone: +1-(262)-332-9727</p>
          <p>Email: Markkoenig95@gmail.com</p>
        </div>
      </div>
    </div>
  );
}
