import React from "react";
import ProjectTile from "./ProjectTile";
import SectionTitle from "./SectionTitle";
import "./PortfolioPage.css";

function PortfolioPage() {
  return (
    <div className="profile-page">
      <SectionTitle title="Personal Projects">
        Projects I have produced myself from scratch
      </SectionTitle>

      <ProjectTile
        title="Meal Budget Planner"
        sourceCodeLink="https://github.com/MarkKoenig95/meal-budget-planner"
        liveLink="https://meal-budget-planner.herokuapp.com/"
      >
        A react based web app utilizing express to handle API requests and
        mongoDB for the database.
      </ProjectTile>

      <ProjectTile
        title="My CV Website"
        sourceCodeLink="https://github.com/MarkKoenig95/CV"
        liveLink="/CV/#/"
      >
        This website was made with react. If you would like to see the source
        code for it please click the link.
      </ProjectTile>

      <ProjectTile
        title="Github to Keybase Mirror Software"
        sourceCodeLink="https://github.com/codeforcash/github-to-keybase-mirror"
        liveLink="https://blog.codefor.cash/2019/08/30/free-automatic-github-backups-with-keybase/"
        liveLinkText="See the blog here"
      >
        Software to set up a github webhook and pass information through AWS
        services in order to automatically mirror a repository to keybase. Of
        all of the project I worked on for Code for Cash this is the only one I
        am at liberty to share.
        <br />
        <br />
        At Code For Cash I collaborated with Zach Burt. He provided the
        architectural concept for the project, but allowed me to do the work of
        implementing it. More detail can be found in the linked blog post.
        <br />
        <br />
        Some history about me and this project. About 3 months before I started
        this project I knew nothing about JavaScript, Node.js, the command line,
        or AWS services. I learned almost all of those skills producing this
        project. This is not meant to be a brag, but merely an indication that I
        am willing and able to learn whatever I need to in order to get a
        project completed.
      </ProjectTile>

      <SectionTitle title="Bootcamp Projects">
        Projects I have produced from starting files in a web development
        bootcamp. Disclaimer: If the source code for my project does not include
        the web development bootcamp's finished project it is likely because
        there was not much, if any, variation between mine and their code
      </SectionTitle>

      <ProjectTile
        title="Security and Authentication Example"
        sourceCodeLink="https://github.com/MarkKoenig95/Security-and-Authorization"
        liveLink="https://security-and-auth-example.herokuapp.com/"
      >
        An example project implementing passport, passport-local and
        express-sessions in order to use OAuth2.0 verification processes,
        cookies, as well as hashing passwords with salt rounds.
      </ProjectTile>

      <ProjectTile
        title="JQuery Simon Game"
        sourceCodeLink="https://github.com/MarkKoenig95/JQuery-Simon-Game"
        liveLink="https://markkoenig95.github.io/JQuery-Simon-Game/"
      >
        A simple web based game. Although the styling and sounds were provided I
        implemented all of the logic myself and even improved some aspects of
        the original idea.
      </ProjectTile>

      <ProjectTile
        title="Mailchimp API Newsletter Sign-Up"
        sourceCodeLink="https://github.com/MarkKoenig95/Fake-Newsletter-Signup"
        liveLink="https://fake-newsletter-signup.herokuapp.com/"
      >
        Implementation of Mailchimp API to perform simple API get and post
        requests to a public API through an express server.
      </ProjectTile>

      <ProjectTile
        title="RESTful API Example"
        sourceCodeLink="https://github.com/MarkKoenig95/RESTful-wiki-like-API"
      >
        A project to create a server side RESTful API in order to learn and
        demonstrate the concepts of that particular API architecture
      </ProjectTile>
    </div>
  );
}

export default PortfolioPage;
