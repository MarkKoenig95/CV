import React from "react";
import "./style/PersonalInfo.css";

function PersonalInfo() {
  return (
    <div>
      <div id="personal-info" className="tile">
        <img
          id="profile-pic"
          src="./images/markkoenig.png"
          alt="Mark Koenig Profile"
        />
        <h1>Mark Richard Koenig</h1>
        <ul className="menu">
          <li>
            <a
              href="https://stackoverflow.com/users/12074043/markark"
              title="StackOverflow"
            >
              <img src="./images/StackOverflow-Logo.png" alt="" />
            </a>
          </li>
          <li>
            <a href="https://github.com/MarkKoenig95" title="GitHub">
              <img src="./images/GitHub-Logo.png" alt="" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/mark-koenig-6aa0a690/"
              title="LinkedIn"
            >
              <img src="./images/LinkedIn-Logo.png" alt="" />
            </a>
          </li>
        </ul>
        <p>
          +1-(262)-910-4091
          <br />
          Markkoenig95@gmail.com
        </p>
      </div>
    </div>
  );
}

export default PersonalInfo;
