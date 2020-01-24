import React from "react";

function InfoButton(props) {
  //Make id lowercase, kebab-case version of title
  let id = props.title.toLowerCase();
  id = id.replace(/ /g, "-");
  console.log(id);

  return (
    <button
      id={id}
      onClick={() => {
        props.onClick(props.title);
      }}
      className="info-button"
    >
      <h2>{props.title}</h2>
      <div className={props.hide ? "info hide" : "info"}>{props.children}</div>
    </button>
  );
}

export default InfoButton;
