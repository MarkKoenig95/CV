import React from "react";
import ExperienceInfo from "./ExperienceInfo";
import InfoSection from "./InfoSection";

export default function ExperienceSection({ hide, title }) {
  return (
    <InfoSection hide={hide} title={title}>
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
    </InfoSection>
  );
}
