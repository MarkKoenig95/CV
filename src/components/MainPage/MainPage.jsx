import React, { useEffect, useState } from "react";
import PersonalInfo from "./PersonalInfo";
import ExperienceSection from "./sections/ExperienceSection";
import "./style/MainPage.css";
import EducationSection from "./sections/EducationSection";
import SkillsSection from "./sections/SkillsSection";
import ProgrammingLanguages from "./sections/ProgrammingLanguages";
import SpokenLanguages from "./sections/SpokenLanguages";
import Summary from "./Summary";
import InfoSectionControl from "./InfoSectionControl";

const TITLES = {
  EDU: "Education",
  EXP: "Experience",
  PROG_LANGS: "Programming Languages",
  SKILLS: "Skills",
  SPOKEN: "Spoken Languages",
};

function MainPage() {
  const [infoSection, setInfoSection] = useState(TITLES.EXP);
  const [sectionIsChosen, setSecitonIsChosen] = useState(false);

  useEffect(() => {
    let infoSections = Object.keys(TITLES);
    let sectionIndex = 0;

    if (sectionIsChosen) return;

    let rotationInterval = setInterval(() => {
      setInfoSection(TITLES[infoSections[sectionIndex]]);
      sectionIndex++;
      sectionIndex = sectionIndex % infoSections.length;
    }, 5000);

    return () => {
      clearInterval(rotationInterval);
    };
  }, [sectionIsChosen]);

  const _handleChooseInfoSection = (title) => {
    setInfoSection(title);
    setSecitonIsChosen(true);
  };

  return (
    <main>
      <PersonalInfo />
      <hr className="accent-bar" />
      <Summary />
      <InfoSectionControl
        currentSection={infoSection}
        onChooseSection={_handleChooseInfoSection}
        sectionTitlesArray={Object.values(TITLES)}
      />
      <div>
        <EducationSection
          hide={infoSection !== TITLES.EDU}
          title={TITLES.EDU}
        />

        <ExperienceSection
          hide={infoSection !== TITLES.EXP}
          title={TITLES.EXP}
        />

        <ProgrammingLanguages
          hide={infoSection !== TITLES.PROG_LANGS}
          title={TITLES.PROG_LANGS}
        />

        <SkillsSection
          hide={infoSection !== TITLES.SKILLS}
          title={TITLES.SKILLS}
        />

        <SpokenLanguages
          hide={infoSection !== TITLES.SPOKEN}
          title={TITLES.SPOKEN}
        />
      </div>
    </main>
  );
}

export default MainPage;
