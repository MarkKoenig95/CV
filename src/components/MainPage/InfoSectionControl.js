import React from "react";

export default function InfoSectionControl({
  currentSection,
  onChooseSection,
  sectionTitlesArray,
}) {
  const baseClassName = "";
  const highlightClassName = "current-button";
  return (
    <div className="info-section-control">
      {sectionTitlesArray.map((title) => {
        let className = baseClassName + " ";
        className += title === currentSection ? highlightClassName : "";
        return (
          <button
            key={"info-section-control-button-" + title}
            className={className}
            onClick={() => {
              onChooseSection(title);
            }}
          >
            {title}
          </button>
        );
      })}
    </div>
  );
}
