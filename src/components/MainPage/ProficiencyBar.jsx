import React from "react";
import "./ProficiencyBar.css";

function ProficiencyBar(props) {
  const dots = [];
  for (let i = 0; i < 10; i++) {
    if (i < props.level) {
      dots.push("dot filled");
    } else {
      dots.push("dot empty");
    }
  }

  return (
    <div>
      <h3>{props.title}</h3>
      {dots.map((dot, index) => {
        return <span key={props.title + index} className={dot}></span>;
      })}
    </div>
  );
}

export default ProficiencyBar;
