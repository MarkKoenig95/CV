import React, { useState } from "react";
import PersonalInfo from "./PersonalInfo";
import InfoButton from "./InfoButton";

function Main() {
  const [curDisplay, setCurDisplay] = useState("Objectives");

  function handleClick(id) {
    moveDown(document.getElementById(id));

    setCurDisplay(id);
  }

  function moveDown(element) {
    for (let i = 0; i < 100; i++) {
      console.log(element.nextElementSibling);

      if (element.nextElementSibling) {
        element.parentNode.insertBefore(element.nextElementSibling, element);
      } else {
        return;
      }
    }
  }

  return (
    <div className="main">
      <img id="background-image" src="./images/CodeBackground.png" alt="" />
      <main>
        <PersonalInfo />
        <div>
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
          </InfoButton>

          <InfoButton
            title="Experience"
            hide={curDisplay !== "Experience"}
            onClick={handleClick}
          >
            <table>
              <tbody>
                <tr>
                  <td className="dates">6/2019 to Present</td>
                  <td>
                    <strong>Code For Cash</strong>
                    <br />
                    Remote
                    <br />
                    Developer/Contractor
                    <br />
                    Providing assistance developing various applications to
                    hasten the hiring proccess of developers for recruiters.
                  </td>
                </tr>
                <tr>
                  <td className="dates">9/2015 to 8/2018</td>
                  <td>
                    <strong>Graef Inc.</strong>
                    <br />
                    Milwaukee, Wisconsin
                    <br />
                    CAD/BIM Technician and Plumbing Designer (CPDT)
                    <br />
                    Laying out plumbing systems for commercial buildings and
                    producing construction documents based on that design.
                  </td>
                </tr>
                <tr>
                  <td className="dates">12/2014 to 4/2015</td>
                  <td>
                    <strong>Pro-Database Developers</strong>
                    <br />
                    Milwaukee, Wisconsin
                    <br />
                    Developer
                    <br />
                    Creating and repairing databases in MS Access and SQL
                    Server. An extensive amount of programing, UI development
                    and learning new concepts.
                  </td>
                </tr>
              </tbody>
            </table>
          </InfoButton>

          <InfoButton
            title="Skills"
            hide={curDisplay !== "Skills"}
            onClick={handleClick}
          >
            <ul className="custom-dot">
              <li>Computer Programming</li>
              <li className="tab">
                Self-taught and familiar with JavaScript, React, Node.js, HTML,
                CSS, C#, C++, Java, Visual Basic, Python
              </li>
              <li className="tab">
                Self-taught game and app making programs like Unity and Xamarin
              </li>
              <li>Database and web design development</li>
              <li className="tab">1 year of training on the job</li>
              <li>CAD/Revit drafting</li>
              <li className="tab">3 years of training, 1 year of schooling</li>
            </ul>
          </InfoButton>

          <InfoButton
            title="Spoken Languages"
            hide={curDisplay !== "Spoken Languages"}
            onClick={handleClick}
          >
            <h3>English</h3>
            <h3>Chinese</h3>
            <h3>Klingon</h3>
          </InfoButton>

          <InfoButton
            title="Objectives"
            hide={curDisplay !== "Objectives"}
            onClick={handleClick}
          >
            <p className="info">
              I am a logical, driven, quick learner with a passion for
              programming. I want to find a company where I can enhance my
              programming abilities while being a helpful asset to the company
              in improving processes.
            </p>
          </InfoButton>
        </div>
      </main>
    </div>
  );
}

export default Main;
