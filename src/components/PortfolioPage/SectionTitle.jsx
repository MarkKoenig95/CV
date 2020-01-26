import React from "react";

function SectionTitle(props) {
  return (
    <div className="section-title">
      <h1>{props.title}</h1>
      <p>{props.children}</p>
      <hr />
    </div>
  );
}

export default SectionTitle;
