import React from "react";
import ProjectTile from "./ProjectTile";
import "./PortfolioPage.css";

function PortfolioPage() {
  return (
    <div className="profile-page">
      <ProjectTile
        title="Meal Budget Planner"
        sourceCodeLink="https://github.com/MarkKoenig95/meal-budget-planner"
        liveLink="https://meal-budget-planner.herokuapp.com/"
      >
        <p>
          A react based web app utilizing express to handle api requests and
          mongoDB for the database
        </p>
      </ProjectTile>
      <ProjectTile
        title="Github to Keybase Mirror Software"
        sourceCodeLink="https://github.com/codeforcash/github-to-keybase-mirror"
        liveLink="https://blog.codefor.cash/2019/08/30/free-automatic-github-backups-with-keybase/"
        liveLinkText="See the blog here"
      >
        <p>
          Software to set up a github webhook and pass information through AWS
          services in order to automatically mirror a repository to keybase.
        </p>
        <br />
        <p>
          At Code For Cash I collaborated with Zach Burt. He provided the
          architectural concept for the project, but allowed me to do the work
          of implementing it. More detail can be found in the linked blog post."
        </p>
      </ProjectTile>

      <ProjectTile
        title="My CV Website"
        sourceCodeLink="https://github.com/MarkKoenig95/CV"
        liveLink="/"
      >
        <p>
          This website was made with react. If you would like to see the source
          code for it please click the link.
        </p>
      </ProjectTile>
    </div>
  );
}

export default PortfolioPage;
