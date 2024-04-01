import React from "react";
import InfoSection from "./InfoSection";

export default function SkillsSection({ hide, title }) {
  return (
    <InfoSection hide={hide} title={title}>
      <div title="Skills">
        <h3>Computer Programming</h3>
        <ul>
          <li>
            Familiar with development in frameworks such as React, Bootstrap and
            JQuery
          </li>
          <li>See "Programing Languages".</li>
        </ul>
        <h3>Database development</h3>
        <ul>
          <li>Experience with SQL and NoSQL databases.</li>
          <li>1 year of training on the job.</li>
        </ul>
        <h3>CAD/Revit drafting</h3>
        <ul>
          <li>6 years of training on the job, 1 year of schooling.</li>
        </ul>
        <h3>Plumbing system design</h3>
        <ul>
          <li>6 years of training on the job.</li>
          <li>CPDT Certification</li>
        </ul>
      </div>
    </InfoSection>
  );
}
