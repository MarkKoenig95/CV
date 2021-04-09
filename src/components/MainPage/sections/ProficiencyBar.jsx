import React from "react";
import "../style/ProficiencyBar.css";

function ProficiencyBar({ level, title }) {
  const dots = [];
  for (let i = 0; i < 10; i++) {
    if (i < level) {
      dots.push("dot filled");
    } else {
      dots.push("dot empty");
    }
  }

  return (
    <div>
      <h3>{title}</h3>
      {dots.map((dot, index) => {
        return <span key={title + index} className={dot}></span>;
      })}
    </div>
  );
}

export default ProficiencyBar;
