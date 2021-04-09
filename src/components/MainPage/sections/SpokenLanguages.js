import React from "react";
import InfoSection from "./InfoSection";
import ProficiencyBar from "./ProficiencyBar";

export default function SpokenLanguages({ hide, title }) {
  return (
    <InfoSection hide={hide} title={title}>
      <ProficiencyBar title="English" level={10} />
      <ProficiencyBar title="Chinese" level={8} />
      <ProficiencyBar title="Spanish" level={4} />
      <ProficiencyBar title="Klingon" level={1} />
    </InfoSection>
  );
}
