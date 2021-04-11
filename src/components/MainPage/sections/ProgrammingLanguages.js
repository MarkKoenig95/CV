import React from "react";
import InfoSection from "./InfoSection";
import ProficiencyBar from "./ProficiencyBar";

export default function ProgrammingLanguages({ hide, title }) {
  return (
    <InfoSection hide={hide} title={title}>
      <ProficiencyBar title="JavaScript (Node.js, jQuery, React)" level={9} />
      <ProficiencyBar title="HTML" level={8} />
      <ProficiencyBar title="CSS" level={7} />
      <ProficiencyBar title="C#" level={6} />
      <ProficiencyBar title="Java" level={5} />
      <ProficiencyBar title="Python" level={5} />
      <ProficiencyBar title="C++" level={3} />
    </InfoSection>
  );
}
