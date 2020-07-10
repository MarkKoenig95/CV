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
        title="Bible Study Companion"
        sourceCodeLink="https://github.com/MarkKoenig95/bible-study-companion"
      >
        A React Native mobile application with a SQL database. The first release 
        will allow users to automatically generate reading schedules based
        on a desired scheudle type, number of years, and start verse. Then it will 
        display information about the reading section and link to an online bible.
        <br />
        <br />
        Future releases will feature a timeline of events and other notable dates
        <br />
        <br />
        Things I have learned from this project:
        <br />
        I have been able to apply knowledge I have gained from watching MIT 
        computer science courses. 
        <br />
        For instance, there was a SQL query which,
        due to the data set being over 30,000 entries long, made schedule 
        generation take around 2 seconds to run. Using memoization I was able  
        to make the same process run in 0.2 seconds.
        <br />
        Additionally, I created my own search query algorithm which runs in 
        O(log(n)) time.
        <br />
        <br />
        I have also learned much about Git, and how to properly use version control. 
        I also plan to learn better how to setup tests so that I can make sure the last 
        commit on a branch does not have any major bugs. My current commit scheme is to 
        interactively rebase a branch in order to squash all commits into one functioning 
        commit so that the master branch never has any broken commits with major bugs.
        <br />
        <br />
        Finally, in addition to this being the first project I have created with 
        Reavt Native, and the largest project I have ever worked on. I have deepened 
        my knowledge of React.js itself making use of useContext, useCallback, useReducer, 
        and other hooks like these. 
        <br />
        <br />
        This project has helped me grow beyond just making piecemeal projects, but has 
        allowed me to work bit by bit on a larger scale project.
      </ProjectTile>

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
