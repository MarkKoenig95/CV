import React, { useState } from "react";
import PersonalInfo from "./PersonalInfo";
import InfoButton from "./InfoButton";
import ProficiencyBar from "./ProficiencyBar";
import ExperienceInfo from "./ExperienceInfo";
import "./style/MainPage.css";

function MainPage() {
  const [curDisplay, setCurDisplay] = useState("Objective");

  function handleClick(id, title) {
    moveDown(document.getElementById(id));

    setCurDisplay(title);
  }

  function moveDown(element) {
    for (let i = 0; i < 100; i++) {
      if (element.nextElementSibling) {
        element.parentNode.insertBefore(element.nextElementSibling, element);
      } else {
        return;
      }
    }
  }

  return (
    <main>
      <PersonalInfo />
      <div>
        {/****** Education ******/}

        <InfoButton
          title="Education"
          hide={curDisplay !== "Education"}
          onClick={handleClick}
        >
          <h3>February 2013 | High School Diploma</h3>
          <ul className="custom-dot">
            <li>
              Attended Waukesha North High School and graduated with Honors
            </li>
          </ul>
          <h3>January 2020 | Certificate of Completion</h3>
          <ul className="custom-dot">
            <li>The Complete 2020 Web Development Bootcamp on Udemy.com</li>
            <li>
              <a href="https://www.udemy.com/course/the-complete-web-development-bootcamp/">
                Click here to see the course
              </a>
            </li>
            <li>
              <a href="./files/Certificate of Completion.pdf">
                Click here to see the Certificate
              </a>
            </li>
          </ul>
        </InfoButton>

        {/****** Experience ******/}

        <InfoButton
          title="Experience"
          hide={curDisplay !== "Experience"}
          onClick={handleClick}
        >
          <ExperienceInfo
            company="Code For Cash"
            duration="2019 to 2020"
            location="Remote"
            title="Developer"
            description="Providing assistance developing various applications to hasten the hiring proccess of developers for recruiters."
          />

          <ExperienceInfo
            company="Graef Inc."
            duration="2015 to 2018"
            location="Milwaukee, Wisconsin"
            title="CAD/BIM Technician and Plumbing Designer (CPDT)"
            description="Engineering plumbing systems for commercial buildings and producing construction documents based on that design."
          />

          <ExperienceInfo
            company="Pro-Database Developers"
            duration="2014 to 2015"
            location="Milwaukee, Wisconsin"
            title="Developer"
            description="Creating and repairing databases in MS Access and SQL
                    Server. An extensive amount of programing, UI development
                    and learning new concepts."
          />
        </InfoButton>

        {/****** Skills ******/}

        <InfoButton
          title="Skills"
          hide={curDisplay !== "Skills"}
          onClick={handleClick}
        >
          <ul className="custom-dot">
            <li>Computer Programming</li>
            <li className="tab">
              Familiar with development in frameworks such as React, Bootstrap
              and JQuery
            </li>
            <li className="tab">See "Programing Languages"</li>
            <li>Database and web app development</li>
            <li className="tab">Experience with SQL and NoSQL databases</li>
            <li className="tab">1 year of training on the job</li>
            <li>CAD/Revit drafting</li>
            <li className="tab">3 years of training, 1 year of schooling</li>
          </ul>
        </InfoButton>

        {/****** Programing Languages ******/}

        <InfoButton
          title="Programing Languages"
          hide={curDisplay !== "Programing Languages"}
          onClick={handleClick}
        >
          <ProficiencyBar title="JavaScript" level={8} />
          <ProficiencyBar title="Node.js" level={8} />
          <ProficiencyBar title="HTML" level={8} />
          <ProficiencyBar title="CSS" level={7} />
          <ProficiencyBar title="C#" level={6} />
          <ProficiencyBar title="Java" level={5} />
          <ProficiencyBar title="Python" level={5} />
          <ProficiencyBar title="C++" level={3} />
        </InfoButton>

        {/****** Spoken Languages ******/}

        <InfoButton
          title="Spoken Languages"
          hide={curDisplay !== "Spoken Languages"}
          onClick={handleClick}
        >
          <ProficiencyBar title="English" level={10} />
          <ProficiencyBar title="Chinese" level={8} />
          <ProficiencyBar title="Spanish" level={4} />
          <ProficiencyBar title="Klingon" level={1} />
        </InfoButton>

        {/****** Objective ******/}

        <InfoButton
          title="Objective"
          hide={curDisplay !== "Objective"}
          onClick={handleClick}
        >
          <p className="info">
            Developer with experience solving complex problems, learning new
            concepts, and maximizing efficiency in projects as well as personal
            workflow. Possess expertise in Full Stack Web Development including
            frameworks such as React. Looking to enhance my knowledge and
            experience into a role as Junior Developer in a company where I can
            do the job that I love.
          </p>
        </InfoButton>
      </div>
    </main>
  );
}

export default MainPage;
