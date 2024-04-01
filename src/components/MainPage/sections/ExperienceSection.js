import React from "react";
import ExperienceInfo from "./ExperienceInfo";
import InfoSection from "./InfoSection";

export default function ExperienceSection({ hide, title }) {
  return (
    <InfoSection hide={hide} title={title}>
      <ExperienceInfo
        company="Oneida ESC Group"
        duration="2021 - Present"
        location="Milwaukee, WI"
        title="BIM Developer"
        description="Developing add-ins and scripts by leveraging APIs of drafting software to automate drafting and improve accuracy of construction drawings."
      />

      <ExperienceInfo
        company="Freelance"
        duration="2019 to 2021"
        location="Kunming, China"
        title="Freelance Developer"
        description="Producing mobile applications for Android and iOS platforms with React Native, utilizing Test Driven Development and Typescript in order to ensure the stability of applications, and creating web sites with React.js."
      />

      <ExperienceInfo
        company="Pro-Database Developers"
        duration="2014 to 2016"
        location="Milwaukee, Wisconsin"
        title="Developer"
        description="Creating and repairing databases in MS Access and SQL Server. An extensive amount of programing, UI development and learning new concepts."
      />
    </InfoSection>
  );
}
